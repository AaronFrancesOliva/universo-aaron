---
tags: [skills, flujos]
actualizado: 2026-11-26
---

# Flujos de trabajo (fase 5)

Todos los documentos siguen el mismo **flujo base de 9 pasos**: un paso por capa de la [[Arquitectura (fase 4)]], y el control de calidad (paso 8) como puerta obligatoria. Los 8 flujos de abajo son variantes de ese flujo base: cambian las skills de algunos pasos y el control final. Centro: [[SKILLS PLANET]]. #revisar

## Flujo base

| # | Paso | Capa | Skill | Sale |
|---|---|---|---|---|
| 1 | Encargo: qué, para quién, formato, plazo, criterios (rúbrica) | Pensamiento | `doc-coauthoring` (etapa 1) o `brainstorming` si hay que diseñar algo nuevo | Encargo claro en 3-5 líneas |
| 2 | Reunir material: notas del vault, PDFs, archivos de Aaron | Entrada | `pdf`, `docx`, `xlsx`, `pdftotext` / PyMuPDF | Material con referencias (archivo + página) |
| 3 | Investigar lo que falte | Entrada | `deep-research` o `recursive-research` | Fuentes con enlace y fecha |
| 4 | Analizar e interpretar: cálculos, tablas, comparativas | Pensamiento | `xlsx`, scripts de comprobación | Datos verificados |
| 5 | Estructurar: índice y lo que va en cada apartado | Producción | `doc-coauthoring` (etapa 2) | Esqueleto del documento |
| 6 | Redactar apartado a apartado | Producción | `docs` (+ skill de Human Writing, fase 6) | Borrador completo |
| 7 | Maquetar: tablas, fórmulas, diagramas, gráficos | Producción | `artifact-diagramming`, `dataviz`, `docx` / `pptx` | Documento maquetado |
| 8 | **Control de calidad** | Control | `revision-documental` + `verification-before-completion` | Informe de revisión; si falla, vuelve al 6 |
| 9 | Entregar y recordar | Memoria | `docx` / `pdf` (exportar), `AARON/MEMORY.md`, red neuronal | Archivo final + lo aprendido guardado |

> [!check] Lista de comprobación del paso 8 (sale del apartado 7 del encargo)
> - [ ] **Exactitud**: cada dato, cifra y fecha está contrastado con su fuente (nota, libro y página, o enlace).
> - [ ] **Coherencia**: los datos coinciden entre apartados, tablas y conclusiones.
> - [ ] **Criterios del encargo**: cada punto de la rúbrica o del enunciado tiene su apartado.
> - [ ] **Redacción**: frases cortas, sin repeticiones, tono adecuado al lector; lenguaje natural sin perder rigor.
> - [ ] **Ortografía y gramática** revisadas.
> - [ ] **Estructura**: índice lógico; cada apartado empieza por su idea principal.
> - [ ] **Tablas y gráficos**: con unidades, títulos y fuente, y sin datos duplicados en tabla y gráfico.
> - [ ] **Conclusiones** claras y apoyadas en lo anterior.
> - [ ] **Integridad**: sin huecos de borrador, salvo los que debe rellenar Aaron, marcados entre corchetes; el archivo final abre y se exporta bien.
> - [ ] **Lo no verificado** se dice explícitamente.

## Los 8 flujos

### 1. Memoria (académica, técnica, justificativa o de proyecto)
**Se activa con:** «hazme la memoria de…», PEC, prácticas, TFG.

| Paso | Variante |
|---|---|
| 1 | Leer el enunciado y la **rúbrica**; convertir cada criterio en un apartado |
| 2 | Notas del tema, libro de la asignatura (`UNED/LIBROS/`), cuaderno de trabajo de la actividad |
| 4 | Comprobar cálculos y tablas de verdad con un script antes de redactar |
| 6 | Redactar cada apartado justificando el porqué (es lo que puntúa en las rúbricas de la UNED) |
| 7 | `docs` para el borrador y `docx` para rellenar la plantilla oficial |
| 8 | Lista de comprobación + **rúbrica punto por punto** |
| 9 | Huecos de Aaron (datos personales, capturas) listados al final |

**Caso real (2026-11-26):** la memoria de la PEC 1 de FSD siguió este flujo. Rúbrica → apartados 5 a 9, resultados de la ALU comprobados con script, borrador en `docs` con fórmulas, Karnaugh y diagrama, y lista «Antes de entregar». Faltó el paso 8 formal: hacerlo antes de entregar.

### 2. Informe (técnico, ejecutivo o de investigación)
**Se activa con:** «hazme un informe de…», «resúmeme el estado de…».

| Paso | Variante |
|---|---|
| 1 | Decidir el lector: ejecutivo (decisión) o técnico (detalle) |
| 3 | `deep-research` si hay que buscar fuera; citar fuentes |
| 4 | `xlsx` + `dataviz` para cifras y tendencias |
| 6 | Ejecutivo: la conclusión en la primera frase, una página y una recomendación. Técnico: método, resultados, limitaciones |
| 7 | `docs` (o `pptx` si se va a presentar) |
| 8 | Cifras contra la fuente; un gráfico por idea |

### 3. Proyecto (propuesta, plan o memoria de proyecto)
**Se activa con:** «quiero montar…», «planifica el proyecto…».

| Paso | Variante |
|---|---|
| 1 | `brainstorming`: objetivo, alcance, restricciones y alternativas, con una recomendación |
| 3 | `deep-research` para opciones técnicas o de mercado |
| 5 | Fases, hitos, riesgos, recursos |
| 7 | Diagrama de fases (`artifact-diagramming`) y calendario con fechas reales del [[Calendario]] si es de la UNED |
| 9 | Nota del proyecto en `GITHUB/<sistema>/` si es de código |

### 4. Auditoría (revisión de un sistema, vault, código o proceso)
**Se activa con:** «revisa…», «audita…», «qué falla en…».

| Paso | Variante |
|---|---|
| 1 | Criterios de la auditoría (qué se considera correcto) |
| 2 | Inventario real: archivos, configuración, `git log`, notas de [[SISTEMAS\|JARVIS · SISTEMAS]] |
| 4 | Hallazgo → evidencia → impacto → recomendación. En código, `code-review` |
| 6 | Tabla de hallazgos ordenados por gravedad |
| 8 | Cada hallazgo con evidencia reproducible; nada «probable» presentado como cierto |
| 9 | Actualizar el `estado` de los planetas afectados |

### 5. Dosier (recopilación sobre un tema, una persona o un proyecto)
**Se activa con:** «prepárame un dosier de…».

| Paso | Variante |
|---|---|
| 2-3 | Reunir todo: vault, archivos, web; cada pieza con su procedencia |
| 4 | Quitar duplicados y detectar contradicciones entre fuentes |
| 5 | Índice por bloques temáticos y un resumen ejecutivo al principio |
| 7 | Portada, índice y anexos; `docx` o `pdf` |
| 8 | Trazabilidad: toda afirmación lleva su fuente |

### 6. Estudio (investigación a fondo)
**Se activa con:** «investiga a fondo…», «estado del arte de…».

| Paso | Variante |
|---|---|
| 1 | Pregunta de investigación y criterio de cierre |
| 3 | `recursive-research`: ciclos con fuentes por niveles (Tier 1-3) y checkpoints en `AARON/INVESTIGACIONES/<slug>/` |
| 4 | Comparativa, patrones, contradicciones |
| 6 | Conclusiones fundamentadas y separadas de las opiniones |
| 9 | Resumen en la red neuronal si sirve para las asignaturas |

### 7. Manual o procedimiento
**Se activa con:** «escribe cómo se hace…», «manual de…».

| Paso | Variante |
|---|---|
| 2 | Hacer el procedimiento real (o leer cómo está hecho) antes de escribirlo |
| 5 | Un paso por acción, en orden; requisitos al principio |
| 6 | Imperativo, frases cortas, un resultado esperado por paso |
| 7 | Capturas o diagramas donde haya decisiones |
| 8 | **Prueba con un lector sin contexto** (`doc-coauthoring`, etapa 3): ¿podría seguirlo solo? |

### 8. Documentación técnica (código, README, arquitectura)
**Se activa con:** «documenta el proyecto…», «haz el README…».

| Paso | Variante |
|---|---|
| 2 | Leer el código y su historial (`git log`), no solo los comentarios |
| 4 | Comprobar que los comandos de instalación y uso funcionan de verdad |
| 6 | README: qué es, instalación, uso y estructura. Arquitectura: componentes y flujo de datos |
| 7 | Diagrama de componentes (`artifact-diagramming`) |
| 8 | `verification-before-completion`: cada comando documentado se ha ejecutado |
| 9 | En el repositorio del proyecto (fuera del vault) y nota del proyecto en `GITHUB/` |

## Qué falta (fase 6)
- **Paso 6:** la skill propia de Human Writing.
- **Paso 8:** convertir la lista de comprobación en una skill propia de revisión de documentos, para que se aplique sola.
- **Opcional:** un hook que recuerde el paso 8 antes de dar un documento por terminado.
