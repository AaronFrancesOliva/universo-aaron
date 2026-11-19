// TRAYECTO · interfaz (Carrera, Ficha de asignatura y Mi plan). Sin dependencias.
import { analizar } from "./calculo.js";

const $app = document.getElementById("app");
const $dlg = document.getElementById("dialogo");
const S = { estado: null, asignaturas: [], fechas: [], filtro: "todas", escenario: 5, ficha: null, ultimaFicha: null };

// ---------- utilidades ----------
const api = async (ruta, { metodo = "GET", datos } = {}) => {
  const r = await fetch(ruta, { method: metodo, headers: datos ? { "Content-Type": "application/json" } : {}, body: datos ? JSON.stringify(datos) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error ?? `Error ${r.status}`);
  return j;
};
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmt = (n, d = 1) => (n == null || Number.isNaN(n) ? "—" : n.toFixed(d).replace(".", ","));
const fmtCorto = (n) => (n == null ? "—" : Number.isInteger(n) ? String(n) : fmt(n, Math.round(n * 10) === n * 10 ? 1 : 2));
const leerNota = (v) => {
  const t = String(v ?? "").trim().replace(",", ".");
  if (t === "") return { valor: null, valido: true };
  const n = Number(t);
  return Number.isFinite(n) && n >= 0 && n <= 10 ? { valor: n, valido: true } : { valor: null, valido: false };
};
const avisar = (texto, mal = false) => {
  const el = document.getElementById("aviso");
  el.textContent = texto; el.className = "ver" + (mal ? " mal" : "");
  clearTimeout(avisar.t); avisar.t = setTimeout(() => (el.className = ""), mal ? 5000 : 2200);
};

const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const MESES_L = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const SEMANA = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const hoy = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
const aFecha = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const diasHasta = (s) => Math.round((aFecha(s) - hoy()) / 86400000);
const fechaLarga = (s) => { const d = aFecha(s); return `${SEMANA[d.getDay()]} ${d.getDate()} ${MESES_L[d.getMonth()]} ${d.getFullYear()}`; };
const relativo = (n) => (n === 0 ? "hoy" : n === 1 ? "mañana" : n > 0 ? `en ${n} días` : n === -1 ? "ayer" : `hace ${-n} días`);
const ordinal = (n) => (n === 1 || n === 3 ? `${n}.er` : `${n}.º`);

// ---------- iconos y estados ----------
const P = {
  check: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M8 12.5l2.7 2.7L16 9.8",
  play: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M10 8.5v7l5.5-3.5Z",
  minus: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M8.5 12h7",
  swap: "M6 9h12 M15 6l3 3-3 3 M18 15H6 M9 12l-3 3 3 3",
  hour: "M7 3h10 M7 21h10 M8 3v3.5L12 12l-4 5.5V21 M16 3v3.5L12 12l4 5.5V21",
  x: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M9 9l6 6 M15 9l-6 6",
  send: "M12 19V5 M6 11l6-6 6 6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 7v5l3 2",
  alert: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 8v5 M12 16.5v.01",
  tri: "M12 3 2.5 20h19Z M12 10v4.5 M12 17.5v.01",
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 11v5 M12 7.5v.01",
  lock: "M6 11h12v9H6Z M8 11V8a4 4 0 0 1 8 0v3",
  back: "M15 5l-7 7 7 7",
  grid: "M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z",
  doc: "M6 3h9l4 4v14H6Z M14 3v5h5 M9 13h6 M9 17h6",
  plan: "M4 6h16 M4 12h10 M4 18h13 M18 11l2 2 3-3",
  edit: "M4 20h4L19 9l-4-4L4 16Z M13.5 6.5l4 4",
  trash: "M4 7h16 M9 7V4h6v3 M6 7l1 13h10l1-13",
  plus: "M12 5v14 M5 12h14",
  empty: "M6 3h9l4 4v14H6Z M14 3v5h5 M10 14h4",
};
const ico = (d, t = 14, extra = "") => `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}><path d="${d}"></path></svg>`;
const ST = {
  aprobada: { label: "Aprobada", corto: "Aprobada", color: "var(--ok)", icon: P.check },
  cursando: { label: "Cursando", corto: "Cursando", color: "var(--run)", icon: P.play },
  sin_cursar: { label: "Sin cursar", corto: "Sin cursar", color: "var(--idle)", icon: P.minus },
  convalidada: { label: "Convalidada", corto: "Convalidada", color: "var(--conv)", icon: P.swap },
  pendiente_reconocimiento: { label: "Pendiente de reconocimiento", corto: "Pend. reconocimiento", color: "var(--warn)", icon: P.hour },
  suspendida: { label: "Suspendida", corto: "Suspendida", color: "var(--bad)", icon: P.x },
};
const ORDEN_ST = ["aprobada", "cursando", "sin_cursar", "convalidada", "pendiente_reconocimiento", "suspendida"];
const TIPO = { FB: "Formación básica", OB: "Obligatoria", OP: "Optativa", TFG: "Trabajo fin de grado" };
const chip = (color, icon, label) => `<span class="chip" style="--c:${color}">${ico(icon)}${esc(label)}</span>`;
const chipEstado = (e, corto = true) => chip(ST[e].color, ST[e].icon, corto ? ST[e].corto : ST[e].label);
const esquinas = '<span class="esq a" aria-hidden="true"></span><span class="esq b" aria-hidden="true"></span><span class="esq c" aria-hidden="true"></span><span class="esq d" aria-hidden="true"></span>';
const superada = (a) => a.estado === "aprobada" || a.estado === "convalidada";
const creditos = (xs) => xs.reduce((s, a) => s + a.creditos, 0);

// ---------- carga ----------
async function cargarTodo() {
  [S.estado, S.asignaturas, S.fechas] = await Promise.all([api("/api/estado"), api("/api/asignaturas"), api("/api/fechas")]);
  document.querySelector("#curso-actual span:last-child").textContent = `${S.estado.curso} · ${ordinal(S.estado.cuatrimestre)} cuatrimestre`;
}
const refrescarListas = async () => { [S.asignaturas, S.fechas] = await Promise.all([api("/api/asignaturas"), api("/api/fechas")]); };

// ---------- navegación ----------
function ruta() {
  const h = location.hash.replace(/^#\/?/, "");
  const [camino, qs] = h.split("?");
  const partes = camino.split("/").filter(Boolean);
  return { vista: partes[0] || "carrera", id: partes[1] ? Number(partes[1]) : null, params: new URLSearchParams(qs ?? "") };
}
function pintarNav(vista) {
  const fichaId = S.ultimaFicha ?? S.asignaturas.find((a) => a.estado === "cursando")?.id ?? S.asignaturas[0]?.id;
  const enlaces = [["carrera", "#/carrera", P.grid, "Carrera"], ["asignatura", `#/asignatura/${fichaId}`, P.doc, "Asignatura"], ["plan", "#/plan", P.plan, "Mi plan"]];
  document.getElementById("nav").innerHTML = enlaces.map(([k, href, i, t]) =>
    `<a href="${href}" ${k === vista ? 'aria-current="page"' : ""}>${ico(i, 16)}${t}</a>`).join("");
}
async function enrutar() {
  const r = ruta();
  pintarNav(r.vista);
  try {
    if (r.vista === "asignatura" && r.id) await vistaFicha(r.id, r.params.get("curso"));
    else if (r.vista === "plan") vistaPlan();
    else vistaCarrera();
  } catch (e) {
    $app.innerHTML = `<div class="vacio"><h2>No se pudo cargar</h2><p>${esc(e.message)}</p><a class="btn" href="#/carrera">Volver a Carrera</a></div>`;
  }
}

// ---------- piezas compartidas ----------
function proximasEntregas(lim = 5) {
  const xs = S.fechas.filter((f) => f.nota == null && diasHasta(f.fecha) >= 0);
  return { total: xs.length, items: xs.slice(0, lim) };
}
const filaProxima = (f) => {
  const d = aFecha(f.fecha), n = diasHasta(f.fecha);
  return `<li><a class="prox" href="#/asignatura/${f.asignatura_id}">
    <div class="dia"><b>${d.getDate()}</b><span>${MESES[d.getMonth()]}</span></div>
    <div style="min-width:0"><div class="prox-t"><span class="mono" style="color:var(--ac)">${esc(f.sigla)}</span> · ${esc(f.nombre)}</div>
      <div class="prox-s">${SEMANA[d.getDay()]}${f.hora ? " " + esc(f.hora) : ""} · ${esc(f.asignatura)}</div></div>
    <div class="cuenta" style="color:${n <= 7 ? "var(--warn)" : "var(--tx2)"}"><b>${n}</b><span>${n === 1 ? "día" : "días"}</span></div></a></li>`;
};
const panelProximas = (cola) => {
  const p = proximasEntregas();
  return `<section aria-label="Próximas entregas" class="panel proximas">
    <div class="sec-cab"><div class="eti">Próximas entregas</div><span class="mono dim" style="font-size:11px">${cola ?? (p.total ? `${p.items.length} de ${p.total}` : "")}</span></div>
    ${p.items.length ? `<ul class="lista">${p.items.map(filaProxima).join("")}</ul>` : '<p class="dim" style="margin:0">No hay entregas pendientes con fecha.</p>'}
  </section>`;
};

// ---------- 1 · CARRERA ----------
function vistaCarrera() {
  const A = S.asignaturas;
  const por = (e) => A.filter((a) => a.estado === e);
  const total = creditos(A);
  const sup = creditos(A.filter(superada));
  const conNota = A.filter((a) => a.estado === "aprobada" && a.nota_final != null);
  const media = conNota.length ? conNota.reduce((s, a) => s + a.nota_final * a.creditos, 0) / creditos(conNota) : null;
  const segs = [
    ["aprobados", creditos(por("aprobada")), "var(--ok)", P.check],
    ["convalidados", creditos(por("convalidada")), "var(--conv)", P.swap],
    ["cursando", creditos(por("cursando")), "var(--run)", P.play],
    ["pend. de reconocimiento", creditos(por("pendiente_reconocimiento")), "var(--warn)", P.hour],
  ];
  const f = S.filtro;
  const filtros = [["todas", "Todas", A.length, "var(--ac)", null], ...ORDEN_ST.map((k) => [k, ST[k].label, por(k).length, ST[k].color, ST[k].icon])];

  const tarjeta = (a) => {
    const s = ST[a.estado];
    const nota = a.nota_final != null && (a.estado === "aprobada" || a.estado === "suspendida");
    const aria = `${a.sigla}, ${a.nombre}, ${a.creditos} créditos, ${s.label}${nota ? ", nota " + fmt(a.nota_final) : ""}. Abrir ficha`;
    return `<a class="tarjeta e-${a.estado}" href="#/asignatura/${a.id}" aria-label="${esc(aria)}" title="${esc(a.observacion ?? "")}">
      <div class="t-cab"><span class="sigla">${esc(a.sigla)}</span><span class="mono dim" style="font-size:12px">${fmtCorto(a.creditos)} ECTS</span></div>
      <div class="t-nombre">${esc(a.nombre)}</div>
      <div class="t-pie">${chipEstado(a.estado)}${nota ? `<span class="t-nota ${a.estado === "suspendida" ? "mal" : ""}">${fmt(a.nota_final)}</span>` : ""}</div></a>`;
  };
  const cursos = [1, 2, 3, 4].map((n) => {
    const mias = A.filter((a) => a.curso === n);
    const supN = creditos(mias.filter(superada)), totN = creditos(mias);
    const sems = [1, 2].map((c) => {
      const todas = mias.filter((a) => a.cuatrimestre === c);
      const vis = todas.filter((a) => f === "todas" || a.estado === f);
      return { c, ects: creditos(todas), vis };
    });
    if (!sems.some((s) => s.vis.length)) return "";
    return `<section class="curso" aria-label="${n}.º curso">
      <div class="curso-cab"><div><div class="eti">Curso oficial</div><h2>${n}.º curso</h2></div>
        <div style="display:flex;align-items:center;gap:14px"><span class="mono" style="font-size:13px;color:var(--tx2)"><b style="color:var(--tx)">${fmtCorto(supN)}</b> / ${fmtCorto(totN)} ECTS superados</span>
        <div class="mini-barra"><div style="width:${totN ? (supN / totN) * 100 : 0}%"></div></div></div></div>
      <div class="sems">${sems.map((s) => `<div class="sem">
        <div class="sem-cab"><span style="font-weight:600;font-size:15px">${ordinal(s.c)} cuatrimestre</span><span class="mono dim" style="font-size:12px">${fmtCorto(s.ects)} ECTS</span><span class="linea" aria-hidden="true"></span></div>
        ${s.vis.length ? `<div class="tarjetas">${s.vis.map(tarjeta).join("")}</div>` : '<div class="sem-vacio">Ninguna asignatura de este cuatrimestre tiene el estado seleccionado.</div>'}
      </div>`).join("")}</div></section>`;
  }).join("");

  $app.innerHTML = `
    <div class="titulo"><div><div class="eti">${esc(S.estado.meta.titulacion ?? "Grado en Ingeniería Informática · UNED")}</div><h1>Carrera</h1></div>
      <div class="mono dim" style="font-size:12px">HOY · ${fechaLarga(S.estado.hoy)}</div></div>
    <div class="fila-top">
      <section aria-label="Progreso global" class="panel panel-hud progreso">${esquinas}
        <div class="cifras">
          <div><div class="eti">Créditos superados</div>
            <div style="display:flex;align-items:baseline;gap:10px;margin-top:4px"><span class="cifra-grande">${fmtCorto(sup)}</span>
            <span class="mono" style="font-size:22px;color:var(--tx2)">/ ${fmtCorto(total)}</span>
            <span class="mono" style="font-size:16px;color:var(--tx2);margin-left:8px">${Math.round((sup / total) * 100)} %</span></div></div>
          <div class="cifras-peq">
            <div><div class="eti">Nota media</div><b>${media == null ? "—" : fmt(media, 2)}</b></div>
            <div><div class="eti">Asignaturas</div><b>${A.filter(superada).length}<small> / ${A.length}</small></b></div>
            <div><div class="eti">Por superar</div><b>${fmtCorto(total - sup)}<small> ECTS</small></b></div>
          </div>
        </div>
        <div>
          <div class="barra" role="img" aria-label="${fmtCorto(sup)} de ${fmtCorto(total)} créditos superados">
            ${segs.map(([, c, col]) => (c ? `<div style="flex:0 0 ${(c / total) * 100}%;background:${col}"></div>` : "")).join("")}<div class="resto"></div></div>
          <div class="leyenda">${segs.map(([l, c, col, i]) => `<span><span style="color:${col};display:inline-flex">${ico(i)}</span><b>${fmtCorto(c)}</b> ${l}</span>`).join("")}</div>
        </div>
      </section>
      ${panelProximas()}
    </div>
    <section aria-label="Filtros por estado" style="display:flex;flex-direction:column;gap:10px">
      <div class="eti">Filtrar por estado</div>
      <div class="filtros">${filtros.map(([k, l, n, col, i]) => `<button type="button" class="filtro" data-filtro="${k}" aria-pressed="${k === f}" style="--c:${col}">${i ? ico(i, 15) : ""}${l} <b>${n}</b></button>`).join("")}</div>
    </section>
    ${cursos || '<div class="vacio"><p>Ninguna asignatura tiene ese estado.</p></div>'}`;
  $app.querySelectorAll("[data-filtro]").forEach((b) => b.addEventListener("click", () => { S.filtro = b.dataset.filtro; vistaCarrera(); }));
}

// ---------- 2 · FICHA ----------
function estadoFila(e) {
  const n = e.nota;
  if (n != null) {
    const mal = e.nota_minima != null && n < e.nota_minima;
    return mal ? ["Bajo la mínima", "var(--bad)", P.x] : ["Calificado", "var(--ok)", P.check];
  }
  if (e.entregado) return ["Entregado", "var(--run)", P.send];
  if (!e.fecha) return ["Sin fecha", "var(--idle)", P.clock];
  return diasHasta(e.fecha) < 0 ? ["Fecha pasada", "var(--bad)", P.alert] : ["Pendiente", "var(--idle)", P.clock];
}
const condicion = (e) => (e.cuenta_si_grupo ? `Solo cuenta si ${e.cuenta_si_grupo.toLowerCase()} ≥ ${fmt(e.cuenta_si_min ?? 0)}` : e.grupo ? `Parte de: ${e.grupo}` : "");

function filaEntregable(e, i) {
  const [st, col, ic] = estadoFila(e);
  const n = diasHasta(e.fecha ?? "2000-01-01");
  return `<tr data-i="${i}">
    <td><div class="e-nombre">${esc(e.nombre)}</div><div class="e-tipo">${esc(e.tipo)}</div>${condicion(e) ? `<div class="e-cond">${esc(condicion(e))}</div>` : ""}</td>
    <td class="der mono" style="font-weight:700">${fmtCorto(e.peso)} %</td>
    <td>${e.nota_minima != null ? `<span class="minima">${ico(P.lock, 13)}${fmt(e.nota_minima)} · elimina</span>` : '<span class="dim">—</span>'}</td>
    <td>${e.fecha ? `<div class="mono" style="font-weight:600">${fechaLarga(e.fecha)}${e.hora ? ` · ${esc(e.hora)}` : ""}</div><div class="dim" style="font-size:12px">${relativo(n)}</div>` : '<div class="dim">Sin fecha</div>'}
      ${e.fecha_nota ? `<div class="dim" style="font-size:12px;max-width:260px">${esc(e.fecha_nota)}</div>` : ""}</td>
    <td class="der"><input class="input-nota ${e.nota != null && e.nota_minima != null && e.nota < e.nota_minima ? "mal" : ""}" type="text" inputmode="decimal" autocomplete="off" placeholder="—"
        aria-label="Nota de ${esc(e.nombre)}, de 0 a 10" value="${e.nota == null ? "" : fmt(e.nota, e.nota * 100 % 10 ? 2 : 1)}" data-nota="${i}">
      <div><label class="check"><input type="checkbox" data-entregado="${i}" ${e.entregado ? "checked" : ""}>Entregado</label></div></td>
    <td><span data-chip="${i}">${chip(col, ic, st)}</span></td>
    <td class="acciones"><button type="button" class="btn-txt" data-editar="${i}" aria-label="Editar ${esc(e.nombre)}" title="Editar">${ico(P.edit, 16)}</button><button type="button" class="btn-txt borrar" data-borrar="${i}" aria-label="Borrar ${esc(e.nombre)}" title="Borrar">${ico(P.trash, 16)}</button></td>
  </tr>`;
}

function htmlCalculo(f) {
  const items = f.entregables;
  if (!items.length) return `<div class="eti">¿Qué necesito para aprobar?</div><p class="dim" style="margin:0">Añade los entregables con su peso y aquí verás qué nota necesitas en cada uno.</p>`;
  const r = analizar(items, S.escenario);
  const E = S.escenario;
  let c, icono, titulo, sub;
  if (r.estado === "imposible") {
    c = "var(--bad)"; icono = P.x; titulo = "Ya no es posible aprobar en esta convocatoria";
    sub = r.motivo === "minima" ? `Has sacado un ${fmt(r.eliminado.nota)} en ${r.eliminado.nombre} y la mínima eliminatoria es ${fmt(r.eliminado.nota_minima)}.`
      : `Aun sacando un 10 en todo lo que queda sumarías ${fmt(r.mejor, 2)} sobre 10.`;
  } else if (r.estado === "aprobada") {
    c = "var(--ok)"; icono = P.check; titulo = `Asignatura aprobada con un ${fmt(r.final.total, 2)}`; sub = "Todo está calificado y cumples las mínimas.";
  } else if (r.estado === "suspensa") {
    c = "var(--bad)"; icono = P.x; titulo = `Suspensa con un ${fmt(r.final.total, 2)}`; sub = "Todo está calificado.";
  } else if (r.estado === "asegurado") {
    c = "var(--ok)"; icono = P.check; titulo = "Ya tienes el aprobado asegurado"; sub = `Con lo calificado ya sumas ${fmt(r.acumulada, 2)}. Lo que queda solo sube la nota.`;
  } else {
    c = "var(--warn)"; icono = P.alert;
    const k = r.clave;
    if (r.asegurado) titulo = "Te basta con superar las mínimas";
    else if (k.tipo === "imposible") titulo = `Con un ${E} en el resto no llegas`;
    else if (k.tipo === "libre") titulo = `Cualquier nota en ${k.item.nombre} te vale`;
    else titulo = `Necesitas un ${fmt(k.valor)} en ${k.item.nombre}`;
    sub = `Suponiendo un ${E} en el resto de pendientes.` + (r.media != null ? ` En conjunto, te basta una media de ${fmt(r.media)} en lo que queda.` : "");
  }
  const necesidades = (r.necesidades ?? []).map((n) => {
    const [v, col, nota] = n.tipo === "libre" ? ["Libre", "var(--ok)", "cualquier nota basta"]
      : n.tipo === "minima" ? [fmt(n.valor), "var(--warn)", "la mínima eliminatoria"]
      : n.tipo === "imposible" ? ["> 10", "var(--bad)", "inalcanzable con ese escenario"]
      : [fmt(n.valor), "var(--warn)", `si el resto saca un ${E}`];
    return `<li class="necesita"><span style="font-weight:500">${esc(n.item.nombre)}<small>${nota} · pesa ${fmtCorto(n.item.peso)} %</small></span><b style="color:${col}">${v}</b></li>`;
  }).join("");
  const noCuentan = r.final?.noCuentan?.length ? `<p class="dim" style="margin:0;font-size:12px">No cuentan: ${r.final.noCuentan.map((i) => esc(i.nombre)).join(", ")}.</p>` : "";
  return `${esquinas.replaceAll('class="esq', `style="--c:${c}" class="esq`)}
    <div class="eti">¿Qué necesito para aprobar?</div>
    <div class="banner" style="--c:${c}" aria-live="polite">${ico(icono, 26, 'style="flex:none"')}<div><div class="b-t">${esc(titulo)}</div><div class="b-s">${esc(sub)}</div></div></div>
    <div class="notas-res">
      <div><div class="eti">Nota acumulada</div><b>${fmt(r.acumulada, 2)}<small> / 10</small></b>
        <div class="pie">${r.pesoCalificado ? `sobre el ${fmtCorto(r.pesoCalificado)} % calificado llevas un ${fmt(Math.min(10, r.acumulada / (r.pesoCalificado / 100)))}` : "aún no hay nada calificado"}</div></div>
      <div><div class="eti">Final estimada</div><b style="color:${c}">${fmt(r.final ? r.final.total : r.estimada, 2)}</b>
        <div class="pie">${r.final ? "nota definitiva" : `si el resto de pendientes saca un ${E}`}</div></div>
    </div>
    ${noCuentan}
    ${r.necesidades?.length ? `<div style="display:flex;flex-direction:column;gap:8px">
      <div class="eti">Si en el resto de pendientes sacas…</div>
      <div class="escenarios" role="group" aria-label="Escenario para el resto de pendientes">${[5, 7, 10].map((x) => `<button type="button" class="escenario" data-esc="${x}" aria-pressed="${x === E}">Un ${x}</button>`).join("")}</div>
      <div class="eti" style="margin-top:6px">Nota mínima en cada pendiente</div>
      <ul class="lista">${necesidades}</ul></div>` : ""}`;
}

function pintarCalculo() {
  const el = document.getElementById("calc");
  if (!el) return;
  const r = S.ficha.entregables.length ? analizar(S.ficha.entregables, S.escenario) : null;
  const c = !r ? "var(--ac)" : r.estado === "imposible" || r.estado === "suspensa" ? "var(--bad)" : r.estado === "aprobada" || r.estado === "asegurado" ? "var(--ok)" : "var(--warn)";
  el.style.setProperty("--c", c);
  el.innerHTML = htmlCalculo(S.ficha);
  el.querySelectorAll("[data-esc]").forEach((b) => b.addEventListener("click", () => { S.escenario = Number(b.dataset.esc); pintarCalculo(); }));
}

function cursosElegibles(f) {
  const act = S.estado.curso, ini = S.estado.inicio;
  const sig = `${ini + 1}-${String((ini + 2) % 100).padStart(2, "0")}`;
  return [...new Set([sig, act, ...f.cursos, f.curso_academico])].sort().reverse();
}

async function vistaFicha(id, curso) {
  const f = await api(`/api/asignaturas/${id}${curso ? `?curso=${encodeURIComponent(curso)}` : ""}`);
  S.ficha = f; S.ultimaFicha = id; pintarNav("asignatura");
  const s = ST[f.estado];
  const esActual = f.curso_academico === S.estado.curso;
  const proximas = f.entregables.filter((e) => e.fecha && diasHasta(e.fecha) >= 0).sort((a, b) => a.fecha.localeCompare(b.fecha));
  const anios = Math.max(Number(S.estado.meta.plan_anios ?? 6), ...S.asignaturas.map((a) => a.plan_anio ?? 0));

  $app.innerHTML = `
    <a class="volver" href="#/carrera">${ico(P.back, 16)}Volver a Carrera</a>
    <section aria-label="Cabecera de la asignatura" class="panel panel-hud ficha-cab" style="--c:${s.color}">
      <div class="izq">
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px"><span class="etq-sigla">${esc(f.sigla)}</span>${chipEstado(f.estado, false)}</div>
        <h1 style="margin-top:10px">${esc(f.nombre)}</h1>
        <dl class="datos">
          <div><dt>CÓDIGO</dt><dd class="mono">${esc(f.codigo ?? "—")}</dd></div>
          <div><dt>CRÉDITOS</dt><dd class="mono">${fmtCorto(f.creditos)} ECTS</dd></div>
          <div><dt>CURSO OFICIAL</dt><dd>${f.curso}.º curso · ${ordinal(f.cuatrimestre)} cuatrimestre</dd></div>
          <div><dt>TIPO</dt><dd>${TIPO[f.tipo]}</dd></div>
          ${f.tasa_exito != null ? `<div><dt>TASA DE ÉXITO</dt><dd class="mono">${fmt(f.tasa_exito, 1)} %</dd></div>` : ""}
          <div><dt>EN MI PLAN</dt><dd>${f.plan_anio ? `Año ${f.plan_anio} · ${ordinal(f.plan_cuatrimestre ?? 1)} cuatr.` : '<span class="dim">sin planificar</span>'}</dd></div>
        </dl>
        ${f.observacion ? `<p class="dim" style="margin:12px 0 0">${esc(f.observacion)}</p>` : ""}
      </div>
      <div class="campo"><label for="curso-ac">Curso académico</label>
        <select id="curso-ac" class="mono" style="min-width:200px">${cursosElegibles(f).map((c) => `<option value="${c}" ${c === f.curso_academico ? "selected" : ""}>${c}${c === S.estado.curso ? " · actual" : ""}</option>`).join("")}</select></div>
    </section>
    <div class="columnas">
      <div class="col-pri">
        <section aria-label="Entregables y requisitos" style="display:flex;flex-direction:column;gap:10px">
          <div class="sec-cab"><h2>Entregables y requisitos</h2>
            <div style="display:flex;align-items:center;gap:12px"><span class="mono dim" style="font-size:12px">PESO TOTAL ${fmtCorto(f.entregables.reduce((a, e) => a + e.peso, 0))} %</span>
            <button type="button" class="btn mini" id="nuevo-entregable">${ico(P.plus, 15)}Añadir entregable</button></div></div>
          ${f.entregables.length ? `<div class="panel tabla-caja"><table>
            <thead><tr><th scope="col">Entregable</th><th scope="col" class="der">Peso</th><th scope="col">Mínima</th><th scope="col">Fecha (Canarias)</th><th scope="col" class="der">Nota (0–10)</th><th scope="col">Estado</th><th scope="col"><span class="dim">·</span></th></tr></thead>
            <tbody>${f.entregables.map(filaEntregable).join("")}</tbody></table></div>`
          : `<div class="vacio">${ico(P.empty, 44, 'style="color:var(--tx3)"')}<h2>Sin entregables en ${esc(f.curso_academico)}</h2>
              <p>${esActual ? "Añade los entregables y pruebas de la asignatura con su peso y el panel de cálculo se activará." : "No hay registro de esta asignatura en ese curso académico. Si estuviste matriculado, añade los entregables a mano."}</p>
              <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button type="button" class="btn pri" data-nuevo>Añadir entregable</button>${esActual ? "" : `<a class="btn" href="#/asignatura/${f.id}">Volver a ${S.estado.curso}</a>`}</div></div>`}
        </section>
        <section aria-label="Reglas especiales" style="display:flex;flex-direction:column;gap:10px">
          <div class="sec-cab"><h2>Reglas especiales</h2><button type="button" class="btn mini" id="nueva-regla">${ico(P.plus, 15)}Añadir regla</button></div>
          ${f.reglas.length ? `<div class="reglas">${f.reglas.map((r) => `<div class="regla ${r.nivel}"><span style="color:var(--c);display:inline-flex;flex:none;margin-top:1px">${ico(r.nivel === "aviso" ? P.tri : P.info, 20)}</span>
              <div><div class="r-t">${esc(r.titulo)}</div>${r.texto ? `<div class="r-x">${esc(r.texto)}</div>` : ""}</div>
              <button type="button" class="btn-txt borrar" data-borrar-regla="${r.id}" aria-label="Borrar la regla ${esc(r.titulo)}" title="Borrar">${ico(P.trash, 15)}</button></div>`).join("")}</div>`
          : '<p class="dim" style="margin:0">Sin reglas especiales para este curso.</p>'}
        </section>
      </div>
      <aside class="col-sec">
        <section id="calc" aria-label="¿Qué necesito para aprobar?" class="panel panel-hud calc"></section>
        <section aria-label="Próximas fechas" class="panel" style="padding:20px;display:flex;flex-direction:column;gap:12px">
          <div class="eti">Próximas fechas</div>
          <ol class="linea-t">
            <li><span class="p hoy" aria-hidden="true"></span><span class="mono" style="font-size:12px;letter-spacing:.1em;color:var(--ac)">HOY · ${aFecha(S.estado.hoy).getDate()} ${MESES[aFecha(S.estado.hoy).getMonth()]}</span><span></span></li>
            ${proximas.map((e) => { const n = diasHasta(e.fecha); const col = n <= 7 ? "var(--warn)" : "var(--tx2)"; return `<li><span class="p" style="--c:${col}" aria-hidden="true"></span>
              <div><div style="font-weight:600">${esc(e.nombre)}</div><div class="mono dim" style="font-size:12px">${fechaLarga(e.fecha)}${e.hora ? " · " + esc(e.hora) : ""}</div></div>
              <div class="cuenta" style="color:${col}"><b>${n}</b><span>${n === 1 ? "día" : "días"}</span></div></li>`; }).join("")}
            ${proximas.length ? "" : '<li><span></span><span class="dim">No quedan fechas pendientes.</span><span></span></li>'}
          </ol>
        </section>
        <section aria-label="Tu situación" class="panel">
          <div class="eti" style="padding:18px 18px 0">Tu situación en la asignatura</div>
          <div class="ajustes">
            <div class="campo"><label for="a-estado">Estado</label><select id="a-estado">${ORDEN_ST.map((k) => `<option value="${k}" ${k === f.estado ? "selected" : ""}>${ST[k].label}</option>`).join("")}</select></div>
            <div class="campo"><label for="a-nota">Nota final</label><input id="a-nota" class="mono" type="text" inputmode="decimal" placeholder="—" value="${f.nota_final == null ? "" : fmt(f.nota_final, 2)}"></div>
            <div class="campo"><label for="a-anio">Año del plan</label><select id="a-anio"><option value="">Sin planificar</option>${Array.from({ length: anios }, (_, i) => `<option value="${i + 1}" ${f.plan_anio === i + 1 ? "selected" : ""}>Año ${i + 1}</option>`).join("")}</select></div>
            <div class="campo"><label for="a-cuatr">Cuatrimestre</label><select id="a-cuatr"><option value="">—</option>${[1, 2].map((c) => `<option value="${c}" ${f.plan_cuatrimestre === c ? "selected" : ""}>${ordinal(c)}</option>`).join("")}</select></div>
          </div>
        </section>
      </aside>
    </div>`;

  pintarCalculo();
  // curso académico
  document.getElementById("curso-ac").addEventListener("change", (e) => {
    location.hash = e.target.value === S.estado.curso ? `#/asignatura/${f.id}` : `#/asignatura/${f.id}?curso=${e.target.value}`;
  });
  // notas: el cálculo se actualiza al escribir y se guarda al salir del campo
  $app.querySelectorAll("[data-nota]").forEach((inp) => {
    const e = f.entregables[Number(inp.dataset.nota)];
    inp.addEventListener("input", () => {
      const { valor, valido } = leerNota(inp.value);
      inp.classList.toggle("mal", !valido || (valor != null && e.nota_minima != null && valor < e.nota_minima));
      if (!valido) return;
      e.nota = valor; actualizarChip(inp.dataset.nota); pintarCalculo();
    });
    inp.addEventListener("change", async () => {
      const { valor, valido } = leerNota(inp.value);
      if (!valido) { avisar("La nota debe ser un número entre 0 y 10", true); return; }
      try { await api(`/api/entregables/${e.id}`, { metodo: "PATCH", datos: { nota: valor } }); avisar("Nota guardada"); await refrescarListas(); }
      catch (err) { avisar(err.message, true); }
    });
  });
  $app.querySelectorAll("[data-entregado]").forEach((cb) => cb.addEventListener("change", async () => {
    const i = cb.dataset.entregado, e = f.entregables[Number(i)];
    try { await api(`/api/entregables/${e.id}`, { metodo: "PATCH", datos: { entregado: cb.checked } }); e.entregado = cb.checked ? 1 : 0; actualizarChip(i); avisar(cb.checked ? "Marcado como entregado" : "Marcado como no entregado"); }
    catch (err) { cb.checked = !cb.checked; avisar(err.message, true); }
  }));
  $app.querySelectorAll("[data-editar]").forEach((b) => b.addEventListener("click", () => dialogoEntregable(f, f.entregables[Number(b.dataset.editar)])));
  $app.querySelectorAll("[data-borrar]").forEach((b) => b.addEventListener("click", async () => {
    const e = f.entregables[Number(b.dataset.borrar)];
    if (!confirm(`¿Borrar «${e.nombre}»? No se puede deshacer.`)) return;
    try { await api(`/api/entregables/${e.id}`, { metodo: "DELETE" }); avisar("Entregable borrado"); await refrescarListas(); await vistaFicha(f.id, curso); }
    catch (err) { avisar(err.message, true); }
  }));
  $app.querySelectorAll("#nuevo-entregable, [data-nuevo]").forEach((b) => b.addEventListener("click", () => dialogoEntregable(f, null)));
  document.getElementById("nueva-regla").addEventListener("click", () => dialogoRegla(f));
  $app.querySelectorAll("[data-borrar-regla]").forEach((b) => b.addEventListener("click", async () => {
    if (!confirm("¿Borrar esta regla?")) return;
    try { await api(`/api/reglas/${b.dataset.borrarRegla}`, { metodo: "DELETE" }); await vistaFicha(f.id, curso); }
    catch (err) { avisar(err.message, true); }
  }));
  // situación
  const guardar = async (datos, msg) => {
    try { await api(`/api/asignaturas/${f.id}`, { metodo: "PATCH", datos }); avisar(msg); await refrescarListas(); await vistaFicha(f.id, curso); }
    catch (err) { avisar(err.message, true); }
  };
  document.getElementById("a-estado").addEventListener("change", (e) => guardar({ estado: e.target.value }, "Estado actualizado"));
  document.getElementById("a-nota").addEventListener("change", (e) => {
    const { valor, valido } = leerNota(e.target.value);
    if (!valido) { avisar("La nota debe ser un número entre 0 y 10", true); return; }
    guardar({ nota_final: valor }, "Nota final guardada");
  });
  document.getElementById("a-anio").addEventListener("change", (e) => guardar({ plan_anio: e.target.value || null, ...(e.target.value ? {} : { plan_cuatrimestre: null }) }, "Plan actualizado"));
  document.getElementById("a-cuatr").addEventListener("change", (e) => guardar({ plan_cuatrimestre: e.target.value || null }, "Plan actualizado"));
}

function actualizarChip(i) {
  const e = S.ficha.entregables[Number(i)];
  const [st, col, ic] = estadoFila(e);
  const el = $app.querySelector(`[data-chip="${i}"]`);
  if (el) el.innerHTML = chip(col, ic, st);
}

// ---------- diálogos ----------
function abrirDialogo(html, alEnviar) {
  $dlg.innerHTML = html;
  const form = $dlg.querySelector("form");
  const err = form.querySelector(".error");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    if (ev.submitter?.value === "cancelar") { $dlg.close(); return; }
    try { await alEnviar(new FormData(form)); $dlg.close(); }
    catch (e) { err.textContent = e.message; }
  });
  $dlg.showModal();
  form.querySelector("input, select, textarea")?.focus();
}

function dialogoEntregable(f, e) {
  const v = (k) => esc(e?.[k] ?? "");
  const n = (k) => (e?.[k] == null ? "" : fmt(e[k], 2).replace(/,?0+$/, "").replace(/,$/, ""));
  const tipos = ["PEC", "PRÁCTICA", "TEST", "EXAMEN", "EXAMEN · TEST", "EXAMEN · DESARROLLO", "TRABAJO", "OTRO"];
  const grupos = [...new Set(f.entregables.map((x) => x.grupo).filter(Boolean).concat("Examen"))];
  abrirDialogo(`<form method="dialog">
    <h2>${e ? "Editar entregable" : `Nuevo entregable · ${esc(f.curso_academico)}`}</h2>
    <div class="rejilla">
      <div class="campo ancho"><label for="d-nombre">Nombre</label><input id="d-nombre" name="nombre" required value="${v("nombre")}" placeholder="PEC 1 · test temas 1-8"></div>
      <div class="campo"><label for="d-tipo">Tipo</label><select id="d-tipo" name="tipo">${tipos.map((t) => `<option ${t === (e?.tipo ?? "PEC") ? "selected" : ""}>${t}</option>`).join("")}</select></div>
      <div class="campo"><label for="d-peso">Peso en la nota final (%)</label><input id="d-peso" name="peso" required inputmode="decimal" value="${n("peso")}" placeholder="10"></div>
      <div class="campo"><label for="d-fecha">Fecha límite o del examen</label><input id="d-fecha" name="fecha" type="date" value="${v("fecha")}"></div>
      <div class="campo"><label for="d-hora">Hora (Canarias)</label><input id="d-hora" name="hora" type="time" value="${v("hora")}"></div>
      <div class="campo ancho"><label for="d-fnota">Aclaración de la fecha</label><input id="d-fnota" name="fecha_nota" value="${v("fecha_nota")}" placeholder="Por confirmar, 1.ª o 2.ª semana…"></div>
      <div class="campo"><label for="d-min">Nota mínima eliminatoria</label><input id="d-min" name="nota_minima" inputmode="decimal" value="${n("nota_minima")}" placeholder="—"></div>
      <div class="campo"><label for="d-grupo">Grupo (p. ej. Examen)</label><input id="d-grupo" name="grupo" list="grupos" value="${v("grupo")}" placeholder="—"></div>
      <div class="campo"><label for="d-csg">Solo cuenta si el grupo…</label><input id="d-csg" name="cuenta_si_grupo" list="grupos" value="${v("cuenta_si_grupo")}" placeholder="Examen"></div>
      <div class="campo"><label for="d-csm">…llega a esta nota</label><input id="d-csm" name="cuenta_si_min" inputmode="decimal" value="${n("cuenta_si_min")}" placeholder="4"></div>
      <datalist id="grupos">${grupos.map((g) => `<option value="${esc(g)}"></option>`).join("")}</datalist>
      <p class="ayuda ancho">La nota final es la suma de peso × nota (máximo 10). Las partes de un mismo examen comparten grupo; «solo cuenta si» sirve para reglas como «la PEC solo suma si el examen llega a 4».</p>
    </div>
    <p class="error" role="alert"></p>
    <div class="botones"><button class="btn" value="cancelar" formnovalidate>Cancelar</button><button class="btn pri" value="ok">${e ? "Guardar" : "Añadir"}</button></div>
  </form>`, async (fd) => {
    const datos = Object.fromEntries(fd.entries());
    for (const k of ["peso", "nota_minima", "cuenta_si_min"]) datos[k] = datos[k] === "" ? null : datos[k];
    if (e) await api(`/api/entregables/${e.id}`, { metodo: "PATCH", datos });
    else await api(`/api/asignaturas/${f.id}/entregables`, { metodo: "POST", datos: { ...datos, curso_academico: f.curso_academico } });
    avisar(e ? "Entregable guardado" : "Entregable añadido");
    await refrescarListas();
    await vistaFicha(f.id, f.curso_academico === S.estado.curso ? null : f.curso_academico);
  });
}

function dialogoRegla(f) {
  abrirDialogo(`<form method="dialog">
    <h2>Nueva regla · ${esc(f.curso_academico)}</h2>
    <div class="rejilla">
      <div class="campo ancho"><label for="r-titulo">Título</label><input id="r-titulo" name="titulo" required placeholder="El test del examen es eliminatorio"></div>
      <div class="campo"><label for="r-nivel">Tipo</label><select id="r-nivel" name="nivel"><option value="aviso">Aviso (ámbar)</option><option value="info">Información (azul)</option></select></div>
      <div class="campo ancho"><label for="r-texto">Detalle</label><textarea id="r-texto" name="texto"></textarea></div>
      <p class="ayuda ancho">Las reglas son solo informativas. Para que afecten al cálculo, usa la mínima eliminatoria o «solo cuenta si» en el entregable.</p>
    </div>
    <p class="error" role="alert"></p>
    <div class="botones"><button class="btn" value="cancelar" formnovalidate>Cancelar</button><button class="btn pri" value="ok">Añadir</button></div>
  </form>`, async (fd) => {
    await api(`/api/asignaturas/${f.id}/reglas`, { metodo: "POST", datos: { ...Object.fromEntries(fd.entries()), curso_academico: f.curso_academico } });
    avisar("Regla añadida");
    await vistaFicha(f.id, f.curso_academico === S.estado.curso ? null : f.curso_academico);
  });
}

// ---------- 3 · MI PLAN ----------
function vistaPlan() {
  const A = S.asignaturas;
  const inicio = Number(S.estado.meta.plan_inicio ?? S.estado.inicio);
  const nAnios = Math.max(Number(S.estado.meta.plan_anios ?? 6), ...A.map((a) => a.plan_anio ?? 0));
  const acad = (n) => `${inicio + n - 1}-${String((inicio + n) % 100).padStart(2, "0")}`;
  const anioActual = S.estado.inicio - inicio + 1;
  const cuatrActual = S.estado.cuatrimestre;
  const siguiente = Math.max(1, anioActual + 1);
  const de = (n, c) => A.filter((a) => a.plan_anio === n && a.plan_cuatrimestre === c);

  const mini = (a) => { const s = ST[a.estado]; return `<a class="mini-item" href="#/asignatura/${a.id}" style="--c:${s.color}" aria-label="${esc(`${a.sigla}, ${a.nombre}, ${a.creditos} ECTS, ${s.label}`)}">
    <span style="color:${s.color};display:inline-flex">${ico(s.icon)}</span><span class="mono" style="font-size:12px;font-weight:700">${esc(a.sigla)}</span>
    <span class="n">${esc(a.nombre)}</span><span class="mono dim" style="font-size:11px">${fmtCorto(a.creditos)}</span></a>`; };
  const itemGrande = (a) => { const s = ST[a.estado]; return `<li><a class="item-plan" href="#/asignatura/${a.id}">
    <span style="color:${s.color};display:inline-flex">${ico(s.icon, 16)}</span><span class="mono" style="font-size:13px;font-weight:700;color:var(--ac)">${esc(a.sigla)}</span>
    <span style="font-size:13.5px;font-weight:500">${esc(a.nombre)}</span><span class="mono dim" style="font-size:12px">${fmtCorto(a.creditos)} ECTS</span></a></li>`; };

  const franja = Array.from({ length: nAnios }, (_, k) => {
    const n = k + 1;
    const segs = [1, 2].map((c) => {
      const cls = n < anioActual || (n === anioActual && c < cuatrActual) ? "hecho" : n === anioActual && c === cuatrActual ? "actual" : "";
      return `<div class="franja-seg"><div class="marca-ahora">${cls === "actual" ? '<span class="ahora">AHORA</span>' : ""}</div><div class="seg ${cls}"></div></div>`;
    }).join("");
    return `<div class="franja-anio"><div class="franja-segs">${segs}</div>
      <div class="franja-pie"><b style="color:${n === anioActual ? "var(--ac)" : "var(--tx)"}">AÑO ${n}</b><span class="dim">${fmtCorto(creditos(A.filter((a) => a.plan_anio === n)))} ECTS</span></div></div>`;
  }).join("");

  const sig = [1, 2].map((c) => ({ c, xs: de(siguiente, c) }));
  const totSig = creditos(sig.flatMap((s) => s.xs));

  const anios = Array.from({ length: nAnios }, (_, k) => {
    const n = k + 1;
    const xs = A.filter((a) => a.plan_anio === n);
    const cuatris = [1, 2].map((c) => {
      const ys = de(n, c), act = n === anioActual && c === cuatrActual;
      return `<div class="cuatri ${act ? "actual" : ""}"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <span class="eti" style="letter-spacing:.1em">${ordinal(c)} cuatrimestre</span>
        <span style="display:inline-flex;align-items:center;gap:8px">${act ? '<span class="ahora">AHORA</span>' : ""}<span class="mono" style="font-size:12px;font-weight:700">${fmtCorto(creditos(ys))} ECTS</span></span></div>
        <div class="lista" style="gap:5px">${ys.map(mini).join("") || '<span class="dim" style="font-size:12px">Nada planificado</span>'}</div></div>`;
    }).join("");
    return `<div class="panel anio ${n === siguiente ? "siguiente" : ""}">
      <div style="display:flex;flex-direction:column;gap:4px;min-width:0"><div class="eti">Año</div>
        <div class="anio-n" style="color:${n === anioActual ? "var(--ac)" : "var(--tx)"}">${n}</div>
        <div class="mono" style="font-size:12px;color:var(--tx2)">${acad(n)}</div>
        <div class="mono" style="font-size:13px;font-weight:700;margin-top:6px">${fmtCorto(creditos(xs))} ECTS</div>
        ${n === siguiente ? '<span class="mono" style="font-size:10px;font-weight:700;letter-spacing:.1em;color:var(--ac)">EL CURSO QUE VIENE</span>' : ""}</div>
      ${cuatris}</div>`;
  }).join("");

  const fuera = A.filter((a) => !a.plan_anio);
  const reconoc = fuera.filter((a) => a.estado === "convalidada" || a.estado === "pendiente_reconocimiento" || a.estado === "aprobada");
  const sinPlan = fuera.filter((a) => !reconoc.includes(a));
  const caja = (titulo, xs, texto, color) => `<section class="panel" style="padding:20px;display:flex;flex-direction:column;gap:12px${color ? `;border-color:color-mix(in srgb,${color} 50%,transparent)` : ""}">
    <div class="sec-cab"><div class="eti" ${color ? `style="color:${color}"` : ""}>${titulo}</div><span class="mono" style="font-size:12px;font-weight:700">${fmtCorto(creditos(xs))} ECTS</span></div>
    <p style="margin:0;font-size:13px;color:var(--tx2)">${texto}</p>
    <div class="lista" style="gap:6px">${xs.map(mini).join("")}</div></section>`;

  $app.innerHTML = `
    <div class="titulo"><div><div class="eti">Plan personal · tiempo parcial · ${nAnios} años</div><h1>Mi plan</h1></div>
      <div class="mono dim" style="font-size:12px">${acad(1)} → ${acad(nAnios)}</div></div>
    <section aria-label="Línea de tiempo de los cuatrimestres" class="panel franja">
      <div class="franja-anios">${franja}</div>
      <div class="leyenda" style="font-size:12px"><span><span style="width:12px;height:8px;border-radius:2px;background:var(--ok)"></span>Cuatrimestres pasados</span>
        <span><span style="width:12px;height:8px;border-radius:2px;background:var(--run);box-shadow:0 0 8px var(--run)"></span>En curso</span>
        <span><span style="width:12px;height:8px;border-radius:2px;border:1px solid var(--idle)"></span>Por cursar</span></div>
    </section>
    <div class="columnas">
      <div class="col-pri" style="flex-basis:700px">
        ${siguiente <= nAnios ? `<section aria-label="El curso que viene" class="proximo">
          <div class="sec-cab" style="align-items:flex-end"><div><span class="etq-ac">EL CURSO QUE VIENE</span><h2 style="margin-top:10px;font-size:28px">Año ${siguiente} · ${acad(siguiente)}</h2></div>
            <div style="text-align:right"><div class="mono" style="font-size:30px;font-weight:700;line-height:1;color:var(--ac)">${fmtCorto(totSig)}<span style="font-size:14px;color:var(--tx2);font-weight:400"> ECTS</span></div>
            <div class="mono dim" style="font-size:12px;margin-top:4px">${sig.map((s) => fmtCorto(creditos(s.xs))).join(" + ")} ECTS por cuatrimestre</div></div></div>
          <div class="sems" style="grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:20px">${sig.map((s) => `<div class="sem" style="gap:8px">
            <div class="sem-cab"><span style="font-weight:600">${ordinal(s.c)} cuatrimestre</span><span class="mono dim" style="font-size:12px">${fmtCorto(creditos(s.xs))} ECTS</span><span class="linea" aria-hidden="true"></span></div>
            <ul class="lista" style="gap:6px">${s.xs.map(itemGrande).join("") || '<li class="dim">Nada planificado</li>'}</ul></div>`).join("")}</div>
        </section>` : ""}
        <section aria-label="Plan por años" style="display:flex;flex-direction:column;gap:12px"><h2>Año a año</h2>${anios}</section>
      </div>
      <aside class="col-sec" style="flex-basis:360px">
        ${panelProximas("cuatrimestre actual")}
        ${sinPlan.length ? caja("Sin planificar", sinPlan, "Cuentan para los 240 créditos pero aún no tienen año en tu plan. Asígnalo desde su ficha.", "var(--warn)") : ""}
        ${reconoc.length ? caja("Convalidadas y reconocimientos", reconoc, "No ocupan ningún cuatrimestre de tu plan: cuentan para los 240 créditos, pero no suman carga.") : ""}
      </aside>
    </div>`;
}

// ---------- arranque ----------
document.getElementById("tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  const nuevo = raiz.dataset.theme === "light" ? "dark" : "light";
  raiz.dataset.theme = nuevo;
  try { localStorage.setItem("trayecto-tema", nuevo); } catch { /* sin almacenamiento */ }
});
window.addEventListener("hashchange", () => { enrutar(); window.scrollTo(0, 0); });

try {
  await cargarTodo();
  await enrutar();
} catch (e) {
  $app.innerHTML = `<div class="vacio"><h2>No se pudo conectar con el servidor</h2><p>${esc(e.message)}. Arranca TRAYECTO con el botón del HUD o con TRAYECTO.bat.</p></div>`;
}
