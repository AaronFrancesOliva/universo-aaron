// TRAYECTO · servidor local (Node 22+, sin dependencias: usa node:sqlite).
// Arranque: node --disable-warning=ExperimentalWarning servidor.mjs  (o TRAYECTO.bat, o el botón del HUD)
// Escucha solo en 127.0.0.1:4317. Sirve la web de ./web y una API JSON sobre ./trayecto.db.
import { createServer } from "node:http";
import { DatabaseSync } from "node:sqlite";
import { existsSync, readFileSync } from "node:fs";
import { dirname, extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { sembrar } from "./bd/semilla.mjs";

export const PUERTO = Number(process.env.TRAYECTO_PUERTO ?? 4317);
const DIR = dirname(fileURLToPath(import.meta.url));
const WEB = join(DIR, "web");
const RUTA_BD = process.env.TRAYECTO_BD ?? join(DIR, "trayecto.db");

const nueva = !existsSync(RUTA_BD);
const db = new DatabaseSync(RUTA_BD);
db.exec("PRAGMA foreign_keys = ON");
db.exec(readFileSync(join(DIR, "bd", "esquema.sql"), "utf8"));
if (nueva) sembrar(db);

// ---------- utilidades ----------
const TIPOS = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".json": "application/json" };
const ESTADOS = ["sin_cursar", "cursando", "aprobada", "suspendida", "convalidada", "pendiente_reconocimiento"];

class ErrorPeticion extends Error { constructor(msg, codigo = 400) { super(msg); this.codigo = codigo; } }

const json = (res, codigo, datos) => {
  res.writeHead(codigo, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(datos));
};

const leerCuerpo = (req) => new Promise((ok, mal) => {
  let t = "";
  req.on("data", (c) => { t += c; if (t.length > 1e6) mal(new ErrorPeticion("Cuerpo demasiado grande", 413)); });
  req.on("end", () => { try { ok(t ? JSON.parse(t) : {}); } catch { mal(new ErrorPeticion("JSON no válido")); } });
  req.on("error", mal);
});

const nota = (v, campo) => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(String(v).replace(",", "."));
  if (!Number.isFinite(n) || n < 0 || n > 10) throw new ErrorPeticion(`${campo}: debe ser un número entre 0 y 10`);
  return n;
};
const numero = (v, campo, { min = 0, max = Infinity, nulo = true } = {}) => {
  if (v === null || v === undefined || v === "") { if (nulo) return null; throw new ErrorPeticion(`${campo} es obligatorio`); }
  const n = Number(String(v).replace(",", "."));
  if (!Number.isFinite(n) || n < min || n > max) throw new ErrorPeticion(`${campo}: número entre ${min} y ${max}`);
  return n;
};
const texto = (v) => (v === null || v === undefined || String(v).trim() === "" ? null : String(v).trim());
const fecha = (v) => {
  const t = texto(v);
  if (t && !/^\d{4}-\d{2}-\d{2}$/.test(t)) throw new ErrorPeticion("fecha: formato AAAA-MM-DD");
  return t;
};
const hora = (v) => {
  const t = texto(v);
  if (t && !/^\d{2}:\d{2}$/.test(t)) throw new ErrorPeticion("hora: formato HH:MM");
  return t;
};
const cursoAcad = (v) => {
  const t = texto(v);
  if (!t || !/^\d{4}-\d{2}$/.test(t)) throw new ErrorPeticion("curso_academico: formato 2026-27");
  return t;
};

/** Curso académico y cuatrimestre de hoy (el 1.º va de septiembre a mediados de febrero). */
export const cursoActual = (d = new Date()) => {
  const y = d.getFullYear(), m = d.getMonth() + 1, dia = d.getDate();
  const inicio = m >= 9 ? y : y - 1;
  const cuatrimestre = m >= 9 || m === 1 || (m === 2 && dia <= 15) ? 1 : 2;
  return { curso: `${inicio}-${String((inicio + 1) % 100).padStart(2, "0")}`, inicio, cuatrimestre };
};

const meta = () => Object.fromEntries(db.prepare("SELECT clave, valor FROM meta").all().map((r) => [r.clave, r.valor]));
const asignatura = (id) => {
  const a = db.prepare("SELECT * FROM asignatura WHERE id = ?").get(id);
  if (!a) throw new ErrorPeticion("Asignatura no encontrada", 404);
  return a;
};
const entregables = (id, curso) => db.prepare("SELECT * FROM entregable WHERE asignatura_id = ? AND curso_academico = ? ORDER BY orden, id").all(id, curso);
const reglas = (id, curso) => db.prepare("SELECT * FROM regla WHERE asignatura_id = ? AND curso_academico = ? ORDER BY id").all(id, curso);

const CAMPOS_ENTREGABLE = (b, parcial) => {
  const r = {};
  const pon = (k, f) => { if (!parcial || k in b) r[k] = f(b[k]); };
  pon("nombre", (v) => { const t = texto(v); if (!t) throw new ErrorPeticion("nombre es obligatorio"); return t; });
  pon("tipo", (v) => texto(v) ?? "OTRO");
  pon("grupo", texto);
  pon("peso", (v) => numero(v, "peso", { max: 200, nulo: false }));
  pon("nota_minima", (v) => nota(v, "nota_minima"));
  pon("cuenta_si_grupo", texto);
  pon("cuenta_si_min", (v) => nota(v, "cuenta_si_min"));
  pon("fecha", fecha);
  pon("hora", hora);
  pon("fecha_nota", texto);
  pon("entregado", (v) => (v ? 1 : 0));
  pon("nota", (v) => nota(v, "nota"));
  pon("orden", (v) => numero(v, "orden", { min: -1e6, max: 1e6 }) ?? 0);
  return r;
};

const actualizar = (tabla, id, campos) => {
  const ks = Object.keys(campos);
  if (!ks.length) return;
  const r = db.prepare(`UPDATE ${tabla} SET ${ks.map((k) => `${k} = ?`).join(", ")} WHERE id = ?`).run(...ks.map((k) => campos[k]), id);
  if (!r.changes) throw new ErrorPeticion("No encontrado", 404);
};

// ---------- API ----------
const rutas = [
  ["GET", /^\/api\/ping$/, () => ({ ok: true, app: "trayecto" })],

  ["GET", /^\/api\/estado$/, () => ({ hoy: new Date().toISOString().slice(0, 10), ...cursoActual(), meta: meta() })],

  ["GET", /^\/api\/asignaturas$/, () => db.prepare("SELECT * FROM asignatura ORDER BY curso, cuatrimestre, id").all()],

  ["GET", /^\/api\/asignaturas\/(\d+)$/, (_q, [id], url) => {
    const a = asignatura(id);
    const curso = url.searchParams.get("curso") ?? cursoActual().curso;
    const cursos = db.prepare(`SELECT DISTINCT curso_academico c FROM entregable WHERE asignatura_id = ?
      UNION SELECT DISTINCT curso_academico FROM regla WHERE asignatura_id = ? ORDER BY 1 DESC`).all(id, id).map((r) => r.c);
    return { ...a, curso_academico: curso, cursos, entregables: entregables(id, curso), reglas: reglas(id, curso) };
  }],

  ["PATCH", /^\/api\/asignaturas\/(\d+)$/, (b, [id]) => {
    asignatura(id);
    const c = {};
    if ("estado" in b) { if (!ESTADOS.includes(b.estado)) throw new ErrorPeticion("estado no válido"); c.estado = b.estado; }
    if ("nota_final" in b) c.nota_final = nota(b.nota_final, "nota_final");
    if ("plan_anio" in b) c.plan_anio = numero(b.plan_anio, "plan_anio", { min: 1, max: 12 });
    if ("plan_cuatrimestre" in b) c.plan_cuatrimestre = numero(b.plan_cuatrimestre, "plan_cuatrimestre", { min: 1, max: 2 });
    if ("nombre" in b) { const t = texto(b.nombre); if (!t) throw new ErrorPeticion("nombre es obligatorio"); c.nombre = t; }
    if ("observacion" in b) c.observacion = texto(b.observacion);
    actualizar("asignatura", id, c);
    return asignatura(id);
  }],

  ["POST", /^\/api\/asignaturas\/(\d+)\/entregables$/, (b, [id]) => {
    asignatura(id);
    const curso = cursoAcad(b.curso_academico);
    const c = CAMPOS_ENTREGABLE(b, false);
    if (!("orden" in b)) c.orden = (db.prepare("SELECT COALESCE(MAX(orden), -1) + 1 o FROM entregable WHERE asignatura_id = ? AND curso_academico = ?").get(id, curso).o);
    const ks = Object.keys(c);
    const r = db.prepare(`INSERT INTO entregable (asignatura_id, curso_academico, ${ks.join(", ")}) VALUES (?, ?, ${ks.map(() => "?").join(", ")})`)
      .run(id, curso, ...ks.map((k) => c[k]));
    return db.prepare("SELECT * FROM entregable WHERE id = ?").get(r.lastInsertRowid);
  }],

  ["PATCH", /^\/api\/entregables\/(\d+)$/, (b, [id]) => {
    actualizar("entregable", id, CAMPOS_ENTREGABLE(b, true));
    return db.prepare("SELECT * FROM entregable WHERE id = ?").get(id);
  }],

  ["DELETE", /^\/api\/entregables\/(\d+)$/, (_b, [id]) => {
    const r = db.prepare("DELETE FROM entregable WHERE id = ?").run(id);
    if (!r.changes) throw new ErrorPeticion("No encontrado", 404);
    return { ok: true };
  }],

  ["POST", /^\/api\/asignaturas\/(\d+)\/reglas$/, (b, [id]) => {
    asignatura(id);
    const titulo = texto(b.titulo);
    if (!titulo) throw new ErrorPeticion("titulo es obligatorio");
    const nivel = b.nivel === "aviso" ? "aviso" : "info";
    const r = db.prepare("INSERT INTO regla (asignatura_id, curso_academico, nivel, titulo, texto) VALUES (?, ?, ?, ?, ?)")
      .run(id, cursoAcad(b.curso_academico), nivel, titulo, texto(b.texto));
    return db.prepare("SELECT * FROM regla WHERE id = ?").get(r.lastInsertRowid);
  }],

  ["DELETE", /^\/api\/reglas\/(\d+)$/, (_b, [id]) => {
    const r = db.prepare("DELETE FROM regla WHERE id = ?").run(id);
    if (!r.changes) throw new ErrorPeticion("No encontrado", 404);
    return { ok: true };
  }],

  // Fechas de todas las asignaturas de un curso académico (por defecto el actual)
  ["GET", /^\/api\/fechas$/, (_q, _m, url) => {
    const curso = url.searchParams.get("curso") ?? cursoActual().curso;
    return db.prepare(`SELECT e.*, a.sigla, a.nombre AS asignatura FROM entregable e JOIN asignatura a ON a.id = e.asignatura_id
      WHERE e.curso_academico = ? AND e.fecha IS NOT NULL ORDER BY e.fecha, e.hora, a.sigla`).all(curso);
  }],
];

const servirEstatico = (res, ruta) => {
  const rel = ruta === "/" ? "index.html" : decodeURIComponent(ruta).replace(/^\/+/, "");
  const abs = normalize(join(WEB, rel));
  if (!abs.startsWith(WEB + sep) || !existsSync(abs)) { res.writeHead(404); res.end("No encontrado"); return; }
  res.writeHead(200, { "Content-Type": TIPOS[extname(abs)] ?? "application/octet-stream", "Cache-Control": "no-cache" });
  res.end(readFileSync(abs));
};

const servidor = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PUERTO}`);
  try {
    if (!url.pathname.startsWith("/api/")) {
      if (req.method !== "GET") throw new ErrorPeticion("Método no permitido", 405);
      return servirEstatico(res, url.pathname);
    }
    // solo peticiones del propio navegador local (evita que otra web toque la base de datos)
    const origen = req.headers.origin;
    // (/api/ping queda libre: el botón del HUD de Obsidian lo usa para saber si el servidor está en marcha)
    if (url.pathname !== "/api/ping" && origen && origen !== `http://127.0.0.1:${PUERTO}` && origen !== `http://localhost:${PUERTO}`) throw new ErrorPeticion("Origen no permitido", 403);
    for (const [metodo, patron, fn] of rutas) {
      const m = url.pathname.match(patron);
      if (!m || metodo !== req.method) continue;
      const cuerpo = metodo === "GET" || metodo === "DELETE" ? {} : await leerCuerpo(req);
      if (metodo !== "GET" && metodo !== "DELETE" && !String(req.headers["content-type"] ?? "").includes("application/json")) throw new ErrorPeticion("Se espera JSON", 415);
      return json(res, 200, fn(cuerpo, m.slice(1), url));
    }
    throw new ErrorPeticion("Ruta no encontrada", 404);
  } catch (e) {
    if (e instanceof ErrorPeticion) return json(res, e.codigo, { error: e.message });
    console.error(e);
    return json(res, 500, { error: "Error interno: " + e.message });
  }
});

servidor.on("error", (e) => {
  if (e.code === "EADDRINUSE") { console.log(`TRAYECTO ya está en marcha en http://127.0.0.1:${PUERTO}`); process.exit(0); }
  throw e;
});
servidor.listen(PUERTO, "127.0.0.1", () => console.log(`TRAYECTO en http://127.0.0.1:${PUERTO}  (base de datos: ${RUTA_BD})`));
