---
tags: [skills, pruebas]
actualizado: 2026-11-26
---

# Pruebas (fase 7)

Registro de pruebas de SKILLS PLANET con **casos reales del vault**. Una skill se da por validada cuando ha funcionado en un caso real; las que aún no se han usado se probarán en su primer encargo real y se apuntarán aquí. Centro: [[SKILLS PLANET]]. #revisar

## Registro

| Fecha | Skill | Caso real | Resultado | Qué se aprendió |
|---|---|---|---|---|
| 2026-11-26 | `docs` + `artifact-diagramming` | Memoria de la PEC 1 de FSD | ✔ Documento completo con tablas, fórmulas, Karnaugh y diagrama | Las fórmulas van en bloques LaTeX: comprobar cómo salen al exportar a Word |
| 2026-11-26 | `revision-documental` | Revisión de esa memoria con el enunciado, la rúbrica y el cuaderno de la PEC | ✔ Cálculos rehechos con script (todos correctos). Detectó **3 afirmaciones exageradas** escritas por el propio Claude (ya corregidas) y **un apartado que falta**: la simulación de la ALU sola | Un revisor también tiene que revisar lo que ha escrito él mismo: «confirma» sobre una prueba que no se ha hecho |
| 2026-11-26 | `revision-documental` (escenario sintético) | Memoria con 6 errores sembrados | ✔ RED → GREEN (ver [[Implementación (fase 6)]]) | Sin la skill se afirmaba algo falso sin leer la fuente |
| 2026-11-26 | `docx` | Rellenar la plantilla oficial `PEC1-079.docx` con la memoria | ✔ con salvedad: XML bien formado, 10 ecuaciones nativas de Word, 14 tablas nuevas y el diagrama. **No se pudo ver renderizado**: no hay Word de escritorio automatizable, ni LibreOffice ni pandoc, y al validador le falta `defusedxml` | En este PC la comprobación visual de un .docx la tiene que hacer Aaron al abrirlo |
| 2026-11-26 | `writing-skills` | Creación de `revision-documental` | ✔ El método RED-GREEN evitó crear una skill innecesaria (Human Writing) | Medir antes de construir |
| 2026-11-26 | Instalación de las 5 skills de la fase 3 | Claude Code las lista al momento | ✔ Se cargan | — |

## Pendientes de su primer caso real

| Skill | Primer caso previsto |
|---|---|
| `doc-coauthoring` | Próxima memoria o PEC (PEC 2 de FSD, GEI) |
| `recursive-research` | Primera investigación de varias sesiones: comprobar que guarda en `AARON/INVESTIGACIONES/` |
| `deep-research` | Primera investigación de una sesión |
| `brainstorming` | Próximo diseño de proyecto (p. ej. una mejora de JARVIS): vigilar que no pregunte de más |
| `verification-before-completion` | Se activa sola al dar trabajo por terminado: vigilar que se aplique también a documentos |
