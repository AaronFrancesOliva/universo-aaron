-- TRAYECTO · base de datos de la carrera (Grado en Ingeniería Informática, UNED)
-- Se ejecuta cada vez que arranca el servidor: solo crea lo que falte.

-- Una fila por asignatura del plan oficial (más los huecos de optativas).
CREATE TABLE IF NOT EXISTS asignatura (
  id                INTEGER PRIMARY KEY,
  sigla             TEXT NOT NULL UNIQUE,
  nombre            TEXT NOT NULL,
  codigo            TEXT,
  creditos          REAL NOT NULL DEFAULT 6,
  -- curso y cuatrimestre OFICIALES del grado (a qué año pertenece, no cuándo la cursa Aaron)
  curso             INTEGER NOT NULL CHECK (curso BETWEEN 1 AND 4),
  cuatrimestre      INTEGER NOT NULL CHECK (cuatrimestre IN (1, 2)),
  tipo              TEXT NOT NULL CHECK (tipo IN ('FB', 'OB', 'OP', 'TFG')),
  estado            TEXT NOT NULL DEFAULT 'sin_cursar'
                    CHECK (estado IN ('sin_cursar', 'cursando', 'aprobada', 'suspendida', 'convalidada', 'pendiente_reconocimiento')),
  nota_final        REAL CHECK (nota_final IS NULL OR nota_final BETWEEN 0 AND 10),
  -- plan personal de Aaron: año 1 = curso académico de inicio (meta.plan_inicio)
  plan_anio         INTEGER CHECK (plan_anio IS NULL OR plan_anio BETWEEN 1 AND 12),
  plan_cuatrimestre INTEGER CHECK (plan_cuatrimestre IS NULL OR plan_cuatrimestre IN (1, 2)),
  tasa_exito        REAL,
  observacion       TEXT
);

-- Entregables y pruebas de una asignatura en un curso académico concreto ('2026-27').
-- La nota final es la suma de peso/100 · nota (máximo 10), con dos reglas opcionales:
--   nota_minima: si la nota queda por debajo, se suspende (eliminatorio).
--   cuenta_si_grupo / cuenta_si_min: el entregable solo suma si la media ponderada
--   del grupo indicado (p. ej. 'Examen') llega a ese mínimo.
CREATE TABLE IF NOT EXISTS entregable (
  id               INTEGER PRIMARY KEY,
  asignatura_id    INTEGER NOT NULL REFERENCES asignatura(id) ON DELETE CASCADE,
  curso_academico  TEXT NOT NULL,
  orden            INTEGER NOT NULL DEFAULT 0,
  nombre           TEXT NOT NULL,
  tipo             TEXT NOT NULL DEFAULT 'PEC',
  grupo            TEXT,
  peso             REAL NOT NULL CHECK (peso >= 0),
  nota_minima      REAL CHECK (nota_minima IS NULL OR nota_minima BETWEEN 0 AND 10),
  cuenta_si_grupo  TEXT,
  cuenta_si_min    REAL,
  fecha            TEXT,   -- AAAA-MM-DD (fecha límite o del examen)
  hora             TEXT,   -- HH:MM, hora de Canarias
  fecha_nota       TEXT,   -- aclaración ("por confirmar", "1.ª o 2.ª semana"...)
  entregado        INTEGER NOT NULL DEFAULT 0,
  nota             REAL CHECK (nota IS NULL OR nota BETWEEN 0 AND 10)
);
CREATE INDEX IF NOT EXISTS entregable_asig ON entregable (asignatura_id, curso_academico);

-- Reglas especiales y avisos que se muestran en la ficha.
CREATE TABLE IF NOT EXISTS regla (
  id               INTEGER PRIMARY KEY,
  asignatura_id    INTEGER NOT NULL REFERENCES asignatura(id) ON DELETE CASCADE,
  curso_academico  TEXT NOT NULL,
  nivel            TEXT NOT NULL DEFAULT 'info' CHECK (nivel IN ('aviso', 'info')),
  titulo           TEXT NOT NULL,
  texto            TEXT
);

CREATE TABLE IF NOT EXISTS meta (
  clave TEXT PRIMARY KEY,
  valor TEXT
);
