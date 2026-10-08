---
tags: [red-neuronal, uned]
actualizado: 2026-10-06
---

# UNED — Conocimiento general

Las fechas exactas viven en [[Calendario]] y las decisiones en [[MEMORY]]; aquí guardo lo que me sirve para razonar.

## Aaron en la UNED
- Grado en Ingeniería Informática, 1.er cuatrimestre 2026-27: GEI, FSD y LED.
- Vive en **Canarias**: la UNED da horas peninsulares → restar 1 hora siempre.
- Tutorías (hora canaria): lunes 16-17 GEI (solo AVIP), miércoles 18-19 LED y 20-21 FSD (presencial + AVIP).
- **Regla de la hora** (la explicó Aaron el 2026-10-08): si la tutoría es **presencial** en el centro de Las Palmas, la hora que publica la UNED **ya es la canaria**; si es **solo AVIP** desde un centro peninsular, hay que **restar una hora**. Las sesiones del equipo docente (por ejemplo, las de YouTube de FSD) son peninsulares: también una hora menos.
- Exámenes ordinarios: 1.ª semana 25-29 ene 2027, 2.ª semana 8-13 feb 2027 (se elige); extraordinaria en septiembre.
- Ágora (agora.uned.es, Moodle) es accesible con Claude in Chrome usando la sesión de Aaron (desde el 2026-10-07). Cursos: FSD id 17652, GEI 16762, LED 16551, Tu primer crédito 19587, Espacio general ETSI 15728, Acogida 15210. Foros de avisos: FSD 909526, GEI 864975, LED 853346; dudas generales LED 853347. Truco: con `fetch` + DOMParser desde la pestaña se leen los foros de golpe (`/mod/forum/index.php?id=<curso>` da los no leídos). La salida de javascript_tool se corta hacia los 1000 caracteres: guarda en `window._x` y lee por trozos.
- **Descarga en bloque desde Ágora** (2026-10-07): (1) inventario de un curso con `POST /lib/ajax/service.php?sesskey=M.cfg.sesskey` y el método `core_courseformat_get_state` (`{courseid}`: secciones y módulos con tipo, nombre, URL y visibilidad); (2) `fetch` de cada archivo (`/mod/resource/view.php?id=X&redirect=1`, enlaces `pluginfile.php` de las carpetas y páginas); (3) se meten en un ZIP construido en JS (sin compresión, con CRC32 propio) y se descarga **una sola vez** (Chrome bloquea las descargas múltiples automáticas hasta que Aaron da permiso); (4) se mueve de `Descargas` al scratchpad y se descomprime con Python respetando UTF-8. Los textos largos (inventarios, foros) también se descargan como .txt.
- Si Aaron toca la pestaña del grupo de Claude, la página navega y se pierden las variables JS: hay que repetir el paso.
- Cada curso tiene un "Foro de tutoría" con el tutor de Aaron (tutores en [[Calendario]]). Fechas de cuestionarios y tareas: bloque `[data-region="activity-dates"]` de cada `/mod/quiz|assign/view.php?id=`.

## Cómo evalúa cada asignatura
- **GEI**: PEC 1 (temas 1-8) y PEC 2 (temas 9-14), cada una 20 preguntas tipo test, un solo intento de 2 h, 5 % cada una; examen tipo test de 20 preguntas en 120 min. Las pruebas del manual puntúan +0,5 / −0,15 / 0: no conviene arriesgar sin pensar. Ver [[GEI - Pruebas globales y trampas]].
- **FSD**: examen 80 % (5 preguntas test + 1 desarrollo, 120 min, sin material; test eliminatorio con mínimo 4/10, cada fallo resta medio acierto) + PEC 1 y 2 (20 %, diseño y simulación; sin entrega en septiembre). Sin PEC la nota máxima es 8. Ver [[Fundamentos de Sistemas Digitales]].
- **LED**: examen 80 % (mínimo 3,5) + test PEC + prácticas. Ver [[Lógica y Estructuras Discretas]].

## Cosas de la UNED que conviene saber
- Las guías de estudio públicas están en uned.es (las de LED y FSD ya están en sus carpetas).
- Cada asignatura publica material por tema en Ágora (resúmenes, glosarios, preguntas frecuentes, actividades): cuando Aaron lo descarga llega a la raíz de la carpeta y hay que ordenarlo en `TEMA N/`.
