// Datos iniciales de TRAYECTO. Solo se cargan cuando trayecto.db no existe.
// Fuentes: plan oficial de la UNED (listado de asignaturas 2026-27, titulación 7101),
// UNED/PLANIFICACION/Plan de estudios.md (plan personal de Aaron) y
// UNED/PLANIFICACION/Calendario.md + notas de cada asignatura (evaluación 2026-27).

// [sigla, nombre, código, créditos, curso, cuatr., tipo, estado, plan_anio, plan_cuatr, % éxito, observación]
const ASIGNATURAS = [
  // 1.er curso · 1.er cuatrimestre
  ["FFI", "Fundamentos Físicos de la Informática", "71011013", 6, 1, 1, "FB", "pendiente_reconocimiento", 2, 1, 40.52, "Pendiente de reconocimiento por Teleco (ULPGC)"],
  ["FMI", "Fundamentos Matemáticos de la Informática", "7101102-", 6, 1, 1, "FB", "pendiente_reconocimiento", 2, 1, 56.04, "Pendiente de reconocimiento por Teleco (ULPGC)"],
  ["FSD", "Fundamentos de Sistemas Digitales", "71901014", 6, 1, 1, "FB", "cursando", 1, 1, 64.57, null],
  ["FP", "Fundamentos de Programación", "71901020", 6, 1, 1, "FB", "pendiente_reconocimiento", null, null, null, "Convalidación por el título de DAW"],
  ["LED", "Lógica y Estructuras Discretas", "71901037", 6, 1, 1, "FB", "cursando", 1, 1, 86.25, null],
  // 1.er curso · 2.º cuatrimestre
  ["EPED", "Estrategias de Programación y Estructuras de Datos", "71901043", 6, 1, 2, "FB", "sin_cursar", 1, 2, 79.71, null],
  ["EST", "Estadística", "7190105-", 6, 1, 2, "FB", "sin_cursar", 1, 2, 74.36, null],
  ["IC1", "Ingeniería de Computadores I", "71901066", 6, 1, 2, "FB", "sin_cursar", 1, 2, 67.91, null],
  ["POO", "Programación Orientada a Objetos", "71901072", 6, 1, 2, "FB", "pendiente_reconocimiento", null, null, null, "Convalidación por el título de DAW"],
  ["AGL", "Autómatas, Gramáticas y Lenguajes", "71901089", 6, 1, 2, "OB", "sin_cursar", 2, 2, 72.02, null],
  // 2.º curso · 1.er cuatrimestre
  ["RC", "Redes de Computadores", "71012030", 6, 2, 1, "OB", "sin_cursar", 3, 1, 31.8, "Difícil: tasa de éxito muy baja"],
  ["PEDA", "Programación y Estructuras de Datos Avanzadas", "71902019", 6, 2, 1, "OB", "sin_cursar", 3, 1, 88.48, null],
  ["IC2", "Ingeniería de Computadores II", "71902025", 6, 2, 1, "OB", "sin_cursar", 2, 1, 85.58, null],
  ["GEI", "Gestión de Empresas Informáticas", "71902031", 6, 2, 1, "FB", "cursando", 1, 1, 80.17, null],
  ["SO", "Sistemas Operativos", "71902048", 6, 2, 1, "OB", "pendiente_reconocimiento", null, null, null, "Convalidación por el título de DAW"],
  // 2.º curso · 2.º cuatrimestre
  ["IC3", "Ingeniería de Computadores III", "71012018", 6, 2, 2, "OB", "sin_cursar", 2, 2, 84.21, null],
  ["TLP", "Teoría de los Lenguajes de Programación", "71012024", 6, 2, 2, "OB", "sin_cursar", 3, 2, 90.63, null],
  ["FIA", "Fundamentos de Inteligencia Artificial", "71902060", 6, 2, 2, "OB", "sin_cursar", 3, 2, 67.68, null],
  ["IIS", "Introducción a la Ingeniería de Software", "71902077", 6, 2, 2, "OB", "sin_cursar", 2, 2, 76.67, null],
  ["BD", "Bases de Datos", "71902083", 6, 2, 2, "OB", "pendiente_reconocimiento", null, null, null, "Convalidación por el título de DAW"],
  // 3.er curso · 1.er cuatrimestre
  ["DASO", "Diseño y Administración de Sistemas Operativos", "71013012", 6, 3, 1, "OB", "sin_cursar", 5, 1, 84.85, null],
  ["SD", "Sistemas Distribuidos", "71013029", 6, 3, 1, "OB", "sin_cursar", 5, 1, 86.54, null],
  ["DS", "Diseño del Software", "71013035", 6, 3, 1, "OB", "sin_cursar", 4, 1, 68.32, null],
  ["SBD", "Sistemas de Bases de Datos", "71013041", 6, 3, 1, "OB", "sin_cursar", 4, 1, 84.07, null],
  ["PL1", "Procesadores del Lenguaje I", "71013130", 6, 3, 1, "OB", "sin_cursar", 4, 1, 88.8, null],
  // 3.er curso · 2.º cuatrimestre
  ["STR", "Sistemas en Tiempo Real", "71013058", 6, 3, 2, "OB", "sin_cursar", 3, 2, 79.59, null],
  ["PL2", "Procesadores del Lenguaje II", "71013118", 6, 3, 2, "OB", "sin_cursar", 4, 2, 80.18, null],
  ["SEG", "Seguridad", "71013124", 6, 3, 2, "OB", "sin_cursar", 4, 2, 90.65, null],
  ["OPT1", "Optativa 1 · reconocimiento DAW", null, 6, 3, 2, "OP", "pendiente_reconocimiento", null, null, null, "Parte de los 12 ECTS de optatividad que se reconocen por DAW"],
  ["OPT2", "Optativa 2 · reconocimiento DAW", null, 6, 3, 2, "OP", "pendiente_reconocimiento", null, null, null, "Parte de los 12 ECTS de optatividad que se reconocen por DAW"],
  // 4.º curso · 1.er cuatrimestre
  ["CYC", "Complejidad y Computabilidad", "71014017", 6, 4, 1, "OB", "sin_cursar", 5, 1, 93.9, null],
  ["AA", "Aprendizaje Automático", "71014023", 6, 4, 1, "OB", "sin_cursar", 6, 1, 92.17, null],
  ["ASI", "Ampliación de Sistemas Inteligentes", "71014069", 6, 4, 1, "OB", "sin_cursar", 6, 1, 94.44, null],
  ["OPT3", "Optativa 3 · por elegir", null, 6, 4, 1, "OP", "sin_cursar", null, null, null, "Optativa aún sin elegir ni planificar"],
  ["OPT4", "Optativa 4 · por elegir", null, 6, 4, 1, "OP", "sin_cursar", null, null, null, "Optativa aún sin elegir ni planificar"],
  // 4.º curso · 2.º cuatrimestre
  ["GPI", "Gestión de Proyectos Informáticos", "71014052", 6, 4, 2, "OB", "sin_cursar", 5, 2, 93.52, null],
  ["EYL", "Ética y Legislación", "71904018", 6, 4, 2, "OB", "sin_cursar", 5, 2, 97.09, null],
  ["TFG", "Trabajo Fin de Grado", "7101403-", 18, 4, 2, "TFG", "sin_cursar", 6, 2, null, null],
];

const CURSO = "2026-27";

// Evaluación 2026-27 de las asignaturas en curso
// [nombre, tipo, grupo, peso, mínima, cuenta_si_grupo, cuenta_si_min, fecha, hora, fecha_nota]
const ENTREGABLES = {
  GEI: [
    ["PEC 1 · test temas 1-8", "PEC", null, 5, null, null, null, "2026-12-07", "22:59", "Abre el jue 3 dic a las 23:00. Un solo intento de 2 h"],
    ["PEC 2 · test temas 9-14", "PEC", null, 5, null, null, null, "2027-01-11", "22:59", "Abre el jue 7 ene a las 23:00. Un solo intento de 2 h"],
    ["Examen · test de 20 preguntas", "EXAMEN", "Examen", 90, null, null, null, "2027-01-25", null, "1.ª semana (25-29 ene) o 2.ª (8-13 feb); día y hora por confirmar"],
  ],
  LED: [
    ["PEC · 16 test autocorregidos", "PEC", null, 30, null, "Examen", 3.5, "2027-01-24", "22:59", "Intentos ilimitados; cuenta la nota máxima de cada test"],
    ["Prácticas aplicadas (2)", "PRÁCTICA", null, 10, null, "Examen", 3.5, null, null, "Fechas sin publicar (aprox. finales de nov y principios de ene); plazo estricto"],
    ["Examen · 18 test + 1 desarrollo", "EXAMEN", "Examen", 80, null, null, null, "2027-01-25", null, "1.ª semana (25-29 ene) o 2.ª (8-13 feb); día y hora por confirmar"],
  ],
  FSD: [
    ["PEC 1 · diseño y simulación", "PEC", null, 10, null, "Examen", 4, "2026-11-28", null, "Antes del sáb 28 nov (hora no publicada). Notas el 11 dic. No se puede entregar después"],
    ["PEC 2 · diseño y simulación", "PEC", null, 10, null, "Examen", 4, "2027-01-10", "22:55", "Notas el 20 ene. No hay entrega en septiembre"],
    ["Examen · parte test", "EXAMEN · TEST", "Examen", 24, 4, null, null, "2027-01-25", null, "30 % del examen. Cada fallo resta medio acierto"],
    ["Examen · desarrollo", "EXAMEN · DESARROLLO", "Examen", 56, null, null, null, "2027-01-25", null, "70 % del examen"],
  ],
};

// [nivel, título, texto]
const REGLAS = {
  GEI: [
    ["info", "El test puntúa +0,5 / −0,15 / 0", "Cada acierto suma 0,5, cada fallo resta 0,15 y en blanco no cuenta: no conviene arriesgar sin pensar."],
  ],
  LED: [
    ["aviso", "La PEC y las prácticas solo cuentan si el examen llega a 3,5", "Con el examen por debajo de 3,5 la nota final es solo 0,8 · Examen."],
    ["info", "La nota máxima es 10", "Los pesos suman 120 %: lo que pase de 10 no cuenta. Sin PEC ni prácticas hace falta un 6,3 en el examen."],
  ],
  FSD: [
    ["aviso", "El test del examen es eliminatorio", "Si sacas menos de un 4 en la parte test, no corrigen el desarrollo."],
    ["aviso", "Las PEC solo cuentan si el examen llega a 4", "Nota del examen = 0,3 · Test + 0,7 · Desarrollo. Si es menor que 4, la final es 0,8 · Examen."],
  ],
};

export function sembrar(db) {
  const insA = db.prepare(`INSERT INTO asignatura
    (sigla, nombre, codigo, creditos, curso, cuatrimestre, tipo, estado, plan_anio, plan_cuatrimestre, tasa_exito, observacion)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const insE = db.prepare(`INSERT INTO entregable
    (asignatura_id, curso_academico, orden, nombre, tipo, grupo, peso, nota_minima, cuenta_si_grupo, cuenta_si_min, fecha, hora, fecha_nota)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const insR = db.prepare("INSERT INTO regla (asignatura_id, curso_academico, nivel, titulo, texto) VALUES (?, ?, ?, ?, ?)");
  const idDe = db.prepare("SELECT id FROM asignatura WHERE sigla = ?");

  db.exec("BEGIN");
  try {
    for (const a of ASIGNATURAS) insA.run(...a);
    for (const [sigla, filas] of Object.entries(ENTREGABLES)) {
      const { id } = idDe.get(sigla);
      filas.forEach((f, i) => insE.run(id, CURSO, i, ...f));
    }
    for (const [sigla, filas] of Object.entries(REGLAS)) {
      const { id } = idDe.get(sigla);
      for (const r of filas) insR.run(id, CURSO, ...r);
    }
    const meta = db.prepare("INSERT OR REPLACE INTO meta (clave, valor) VALUES (?, ?)");
    meta.run("plan_inicio", "2026");   // año 1 del plan = curso 2026-27
    meta.run("plan_anios", "6");
    meta.run("titulacion", "Grado en Ingeniería Informática · UNED");
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}
