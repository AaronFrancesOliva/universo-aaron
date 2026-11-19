// TRAYECTO · cálculo de la nota de una asignatura a partir de sus entregables.
//
// Cada entregable: { id, nombre, peso (% de la nota final), nota (0-10 o null si aún no hay),
//   nota_minima (eliminatoria), grupo, cuenta_si_grupo, cuenta_si_min }
// Nota final = min(10, Σ peso/100 · nota), donde un entregable con cuenta_si_grupo solo suma si la
// media ponderada de ese grupo llega a cuenta_si_min. Si alguna nota queda por debajo de su mínima,
// la asignatura está suspensa. Lo que falta por calificar cuenta como 0, salvo en los escenarios.

export const APROBADO = 5;
const EPS = 1e-9;

const mediaGrupo = (items, notas, grupo) => {
  const g = items.filter((i) => i.grupo === grupo);
  const w = g.reduce((a, i) => a + i.peso, 0);
  if (!w) return null;
  return g.reduce((a, i) => a + i.peso * (notas.get(i.id) ?? 0), 0) / w;
};

/** Nota final con unas notas dadas (Map id → nota). */
export function notaFinal(items, notas) {
  const elimina = items.find((i) => i.nota_minima != null && notas.get(i.id) != null && notas.get(i.id) < i.nota_minima - EPS) ?? null;
  let total = 0;
  const noCuentan = [];
  for (const i of items) {
    if (i.cuenta_si_grupo) {
      const g = mediaGrupo(items, notas, i.cuenta_si_grupo);
      if (g == null || g < (i.cuenta_si_min ?? 0) - EPS) { noCuentan.push(i); continue; }
    }
    total += (i.peso / 100) * (notas.get(i.id) ?? 0);
  }
  return { total: Math.min(10, total), elimina, noCuentan };
}

const aprueba = (items, notas) => { const r = notaFinal(items, notas); return !r.elimina && r.total >= APROBADO - EPS; };

const con = (base, ids, x) => { const m = new Map(base); for (const id of ids) m.set(id, x); return m; };

/** Mínima nota x (0-10) que hay que sacar a la vez en `ids` para aprobar; null si ni con 10. */
export function minimoComun(items, base, ids) {
  if (!aprueba(items, con(base, ids, 10))) return null;
  if (aprueba(items, con(base, ids, 0))) return 0;
  let lo = 0, hi = 10;
  for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2; if (aprueba(items, con(base, ids, mid))) hi = mid; else lo = mid; }
  return hi;
}

/** Redondeo hacia arriba a una décima (lo que hay que sacar nunca se redondea a la baja). */
export const arriba = (n) => Math.ceil(n * 10 - 1e-6) / 10;

/**
 * Análisis completo para el panel "¿Qué necesito para aprobar?".
 * escenario: la nota que se supone en el resto de pendientes (5, 7 o 10).
 */
export function analizar(items, escenario = 5) {
  const calificados = items.filter((i) => i.nota != null);
  const pendientes = items.filter((i) => i.nota == null);
  const base = new Map(calificados.map((i) => [i.id, i.nota]));
  const idsPend = pendientes.map((i) => i.id);
  const pesoTotal = items.reduce((a, i) => a + i.peso, 0);
  const pesoCalificado = calificados.reduce((a, i) => a + i.peso, 0);
  const acumulada = Math.min(10, calificados.reduce((a, i) => a + (i.peso / 100) * i.nota, 0));

  if (!items.length) return { estado: "vacio", pesoTotal, pendientes: [] };

  const eliminado = calificados.find((i) => i.nota_minima != null && i.nota < i.nota_minima - EPS);
  const mejor = notaFinal(items, con(base, idsPend, 10));
  const estimada = notaFinal(items, con(base, idsPend, escenario)).total;
  const comun = {
    acumulada, pesoCalificado, pesoTotal, estimada, escenario,
    final: pendientes.length ? null : notaFinal(items, base),
  };

  if (eliminado) return { ...comun, estado: "imposible", motivo: "minima", eliminado, pendientes: [] };
  if (mejor.elimina || mejor.total < APROBADO - EPS) return { ...comun, estado: "imposible", motivo: "maximo", mejor: mejor.total, pendientes: [] };
  if (!pendientes.length) {
    const f = notaFinal(items, base);
    return { ...comun, estado: f.total >= APROBADO - EPS ? "aprobada" : "suspensa", pendientes: [] };
  }

  // ¿Aprueba aunque saque lo mínimo exigido (la mínima eliminatoria o 0) en todo lo que queda?
  const suelo = new Map(base);
  for (const p of pendientes) suelo.set(p.id, p.nota_minima ?? 0);
  const asegurado = aprueba(items, suelo);
  const conMinimas = pendientes.some((p) => p.nota_minima != null);

  const necesidades = pendientes.map((p) => {
    const otros = con(base, idsPend.filter((id) => id !== p.id), escenario);
    const x = minimoComun(items, otros, [p.id]);
    if (x == null) return { item: p, valor: null, tipo: "imposible" };
    const min = p.nota_minima ?? 0;
    if (x <= EPS && !p.nota_minima) return { item: p, valor: 0, tipo: "libre" };
    if (x <= min + EPS) return { item: p, valor: min, tipo: "minima" };
    return { item: p, valor: arriba(x), tipo: "necesita" };
  });
  const media = minimoComun(items, base, idsPend);
  const clave = [...necesidades].sort((a, b) => b.item.peso - a.item.peso)[0];

  let estado = "necesita";
  if (asegurado && !conMinimas) estado = "asegurado";
  return { ...comun, estado, asegurado, conMinimas, necesidades, media: media == null ? null : arriba(media), clave, pendientes };
}
