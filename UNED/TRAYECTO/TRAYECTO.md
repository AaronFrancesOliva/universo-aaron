---
tags: [trayecto, app, revisar]
creado: 2026-11-19
---

# TRAYECTO

App local para ver la carrera de un vistazo y calcular qué nota hace falta en cada entregable. La pidió Aaron el 2026-11-19; el diseño sale del lienzo «Trayecto» hecho con la IA de diseño.

> [!tip] Cómo se abre
> - Botón **◆ TRAYECTO** de la cabecera del núcleo (al lado de MODO UNED): arranca el servidor si no está en marcha y abre la app en el navegador.
> - O doble clic en `TRAYECTO.bat` de esta carpeta.
> - Dirección: <http://127.0.0.1:4317> (solo funciona en el PC).

## Pantallas
| Pantalla | Qué enseña |
|---|---|
| **Carrera** | Las asignaturas del grado por **curso oficial** (1.º-4.º) y cuatrimestre, con su estado: aprobada, cursando, sin cursar, convalidada, pendiente de reconocimiento o suspendida. Créditos superados, nota media y próximas entregas |
| **Asignatura** | Entregables del curso académico elegido con peso, mínima, fecha (hora de Canarias) y nota. El panel **¿Qué necesito para aprobar?** calcula la nota mínima en cada pendiente (suponiendo 5, 7 o 10 en el resto). Abajo: estado, nota final y año del plan, editables |
| **Mi plan** | El plan personal de 6 años (año 1 = 2026-27), **el curso que viene**, lo que falta por planificar y las convalidaciones |

## Cómo calcula
- Nota final = suma de *peso × nota* (máximo 10).
- **Mínima eliminatoria**: si una nota queda por debajo, no se puede aprobar (test de FSD).
- **Grupo** y **solo cuenta si**: las partes de un examen comparten grupo («Examen») y un entregable puede contar solo si la media del grupo llega a una nota (PEC de FSD con examen ≥ 4, PEC y prácticas de LED con examen ≥ 3,5).
- Lo que no tiene nota cuenta como 0, salvo en los escenarios del panel.

## Archivos
| Archivo | Para qué |
|---|---|
| `trayecto.db` | La base de datos SQLite (asignaturas, entregables por curso académico, reglas). **Solo se escribe desde el PC** |
| `servidor.mjs` | Servidor local (Node 22, sin dependencias: `node:sqlite`) |
| `bd/esquema.sql` · `bd/semilla.mjs` | Tablas y datos iniciales (solo se cargan si no existe `trayecto.db`) |
| `web/` | La interfaz (`index.html`, `app.js`, `app.css`, `calculo.js`) |

> [!note] Cada curso nuevo
> Los entregables van por curso académico (`2026-27`, `2027-28`…): los de años anteriores no se pierden. Al empezar un cuatrimestre, Claude (o Aaron desde la ficha) añade los entregables y fechas nuevos y pone las asignaturas en «Cursando».

> [!warning] Por revisar
> - El plan oficial pide **24 ECTS de optativas** (2 en 3.º y 2 en 4.º). DAW reconoce 12; las otras dos (OPT3 y OPT4) están **sin elegir ni planificar**.
> - Las 4 asignaturas de DAW, sus 12 ECTS de optatividad y FFI/FMI (Teleco) están en «Pendiente de reconocimiento» hasta que llegue la resolución: entonces se pasan a «Convalidada» desde su ficha.
> - El curso oficial de cada asignatura sale del listado de la web de la UNED (titulación 7101, 2026-27). Ojo: **GEI es de 2.º** y **AGL de 1.º**.
