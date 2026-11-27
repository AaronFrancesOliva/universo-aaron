---
tags: [skills, evaluacion]
actualizado: 2026-11-26
---

# Evaluación de skills (fase 2)

40 skills puntuadas de 0 a 100 con los 12 criterios del encargo. Las notas por criterio (0-10) son el juicio de Claude a partir del SKILL.md o el README leídos el 2026-11-26 (candidatas) y del uso real en este Claude Code (instaladas). Ninguna candidata se ha instalado ni probado. Centro: [[SKILLS PLANET]] · inventario: [[Catálogo maestro]]. #revisar

## Método

| Criterio | Peso |
|---|---|
| Calidad | 15 |
| Fiabilidad | 10 |
| Especialización | 8 |
| Facilidad | 7 |
| Compatibilidad | 10 |
| Mantenimiento | 7 |
| Documentación | 6 |
| Seguridad | 10 |
| Integración | 7 |
| Ahorro de tiempo | 8 |
| Valor profesional | 7 |
| Automatización | 5 |

Puntuación = Σ (nota × peso) / 10. Niveles: **S** ≥ 85 · **A** 75-84 · **B** 65-74 · **C** 50-64 · **D** < 50.
Los niveles siguen también la definición del encargo: una skill **para casos muy concretos** queda en C y una **redundante, archivada o de riesgo alto** baja a D, aunque su nota sea mayor (se indica con «forzado»).
«Compatibilidad» mide si encaja con Windows, el español y las reglas del vault (no mover ni borrar sin preguntar, memoria propia).

## Ranking

| # | Nivel | Puntos | Skill | Estado | Departamento | Por qué |
|---|---|---|---|---|---|---|
| 1 | **S** | 88 | `anthropic-skills:docs` · Anthropic | instalada | Professional Writing · Executive Reporting | Probada en esta sesión (memoria de la PEC 1): documento editable con tablas, fórmulas y diagramas, exportable a Word/PDF. |
| 2 | **A** | 84 | `verification-before-completion` · obra/superpowers (MIT) | candidata | Quality Assurance | No dar nada por terminado sin comprobarlo y leer la salida. Corta y sin scripts. |
| 3 | **A** | 82 | `anthropic-skills:docx` · Anthropic | instalada | Document Engineering | Word con control de cambios, comentarios y plantillas. Es el formato que pide la UNED. |
| 4 | **A** | 82 | `anthropic-skills:pdf` · Anthropic | instalada | Document Intelligence · Engineering | Extraer, unir, dividir, formularios y OCR. Complementa pdftotext/PyMuPDF del vault. |
| 5 | **A** | 82 | `anthropic-skills:deep-research` · Anthropic | instalada | Research Intelligence | Investigación con subagentes e informe narrativo. Aún no usada en el vault: confirmar en la fase 7. |
| 6 | **A** | 82 | `anthropic-skills:skill-creator` · Anthropic | instalada | Todos (fábrica de skills) | Crea, prueba y mide skills propias: la vía para cubrir los huecos. |
| 7 | **A** | 81 | `anthropic-skills:xlsx` · Anthropic | instalada | Data Analytics | Excel con fórmulas, formato y gráficos. |
| 8 | **A** | 81 | `dataviz` · Claude Code | instalada | Data Analytics · Editorial Design | Gráficos coherentes con paleta validada, en cualquier formato. |
| 9 | **A** | 80 | `artifact-design + artifact-diagramming` · Claude Code | instalada | Editorial Design | Probadas en esta sesión (diagrama de bloques de la PEC). |
| 10 | **A** | 79 | `anthropic-skills:pptx` · Anthropic | instalada | Document Engineering · Executive Reporting | Presentaciones PowerPoint. |
| 11 | **A** | 78 | `doc-coauthoring` · anthropics/skills | candidata | Professional Writing | Flujo en 3 etapas: contexto con preguntas, redacción sección a sección y prueba con un lector sin contexto. Encaja con memorias y PEC. Sin scripts. |
| 12 | **A** | 78 | `writing-skills` · obra/superpowers (MIT) | candidata | Todos (fábrica de skills) | Crear skills con pruebas (TDD de documentación). Su checklist hace commit y push: quitar ese paso. |
| 13 | **A** | 77 | `update-config (hooks)` · Claude Code | instalada | Workflow Automation · Quality Assurance | Hooks: base para revisiones automáticas. |
| 14 | **A** | 76 | `schedule + loop` · Claude Code | instalada | Workflow Automation | Tareas programadas y repetitivas. |
| 15 | **A** | 76 | `code-review + simplify` · Claude Code | instalada | Quality Assurance (código) | Excelentes para código, no revisan documentos. |
| 16 | **A** | 76 | `brainstorming` · obra/superpowers (MIT) | candidata | Strategic Intelligence | Aclarar qué se quiere antes de construir. Levanta un servidor local opcional y guarda specs en docs/: adaptar rutas. |
| 17 | **A** | 76 | `recursive-research` · Anjos2 (MIT) | candidata | Research Intelligence | En español; fuentes por niveles (Tier 1-3) y checkpoints en disco. Proyecto pequeño (7 commits). Crea memoria/ en el proyecto: redirigir. |
| 18 | **B** | 74 | `anthropic-skills:google-workspace` · Anthropic | instalada | Document Engineering | Docs, Sheets y Slides de Google vía conector. |
| 19 | **B** | 73 | `data (plugin)` · knowledge-work-plugins (Apache-2.0) | candidata | Data Analytics | Análisis, validación y dashboards. Pensado para almacenes SQL; con CSV/Excel funciona sin conectores. |
| 20 | **B** | 73 | `writing-plans` · obra/superpowers (MIT) | candidata | Strategic Intelligence | Planes por tareas pequeñas; muy orientado a software (tests, commits). |
| 21 | **B** | 72 | `chrome-browser / built-in-browser` · Anthropic | instalada | Research Intelligence | Páginas con sesión (Ágora). Riesgo: actúa con tus cuentas. |
| 22 | **B** | 70 | `anthropic-skills:morning` · Anthropic | instalada | Executive Reporting | Resumen del día; se solapa en parte con la rutina «buenos días». |
| 23 | **B** | 70 | `scientific-writing / literature review` · K-Dense-AI/scientific-agent-skills (MIT) | candidata | Professional Writing · Research | Escritura con trazabilidad de evidencia y gestión de citas. Carpetas sin confirmar: revisar antes de elegir. |
| 24 | **B** | 70 | `content-research-writer` · ComposioHQ (lista Apache-2.0) | candidata | Professional Writing | Esquemas, citas y revisión por secciones, con checklist. Orientado a blogs en inglés. |
| 25 | **B** | 68 | `theme-factory` · anthropics/skills | candidata | Editorial Design | 10 temas de color y tipografía. Sin scripts. |
| 26 | **B** | 68 | `internal-comms` · anthropics/skills | candidata | Executive Reporting | Formatos de comunicación de empresa (3P, boletines). Índice corto de 32 líneas. |
| 27 | **B** | 65 | `kaizen (plugin)` · NeoLabHQ (GPL-3.0) | candidata | Strategic Intelligence · QA | 5 porqués, Ishikawa, A3, PDCA. Comandos no leídos. |
| 28 | **C** (forzado) | 69 | `markdown-to-epub` · smerchek (MIT) | candidata | Document Engineering | Markdown a EPUB3. Caso muy concreto. |
| 29 | **C** (forzado) | 67 | `article-extractor` · michalparkola/tapestry-skills (MIT) | candidata | Document Intelligence | Texto limpio de un artículo web. Propone npm -g / pip install; WebFetch ya cubre casi todo. |
| 30 | **C** (forzado) | 66 | `anthropic-skills:import-memory` · Anthropic | instalada | Knowledge & Memory | Solo sirve para traer memoria de otra IA; el vault ya tiene la suya. |
| 31 | **C** (forzado) | 65 | `product-management (plugin)` · knowledge-work-plugins | candidata | Strategic Intelligence | Specs, roadmaps y análisis competitivo. Útil para proyectos de GitHub, no para la UNED. |
| 32 | **C** | 62 | `productivity (plugin)` · knowledge-work-plugins | candidata | Workflow Automation | Tareas y memoria propias (TASKS.md, CLAUDE.md): chocarían con la rutina y la memoria del vault. |
| 33 | **C** | 58 | `file-organizer` · ComposioHQ | candidata | Workflow Automation | Mueve y renombra en masa (usa md5 de macOS). Choca con la regla del vault de no mover sin preguntar. |
| 34 | **C** | 57 | `canvas-design` · anthropics/skills | candidata | Editorial Design | Arte visual; instrucciones subjetivas. Poco útil para documentos. |
| 35 | **C** | 55 | `enterprise-search (plugin)` · knowledge-work-plugins | candidata | Knowledge & Memory | Solo tiene sentido con muchos conectores corporativos. |
| 36 | **D** (forzado) | 66 | `deep-research (Gemini)` · sanjay3290/ai-skills (Apache-2.0) | candidata | Research Intelligence | Redundante con la deep-research instalada; además envía las consultas a Google y cuesta 2-5 USD por tarea. |
| 37 | **D** (forzado) | 65 | `csv-data-summarizer` · coffeefuelbump (MIT) | candidata | Data Analytics | Estadística y PNG de un CSV. Un solo commit; xlsx + dataviz ya lo cubren. |
| 38 | **D** (forzado) | 62 | `n8n-skills` · haunchen (MIT) | candidata | Workflow Automation | Documentación de nodos de n8n. Aaron no usa n8n: irrelevante hoy. |
| 39 | **D** (forzado) | 50 | `notebooklm-skill` · PleasePrompto (MIT) | candidata | Document Intelligence | Repositorio archivado (10 sep 2026). Guarda cookies de Google y automatiza el navegador: riesgo alto. |
| 40 | **D** (forzado) | 46 | `brand-guidelines` · anthropics/skills | candidata | Editorial Design | Aplica la marca de Anthropic: no sirve para Aaron. |

## Notas por criterio

| Skill | Calid. | Fiabi. | Espec. | Facil. | Compa. | Mante. | Docum. | Segur. | Integ. | Ahorr. | Valor. | Autom. | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `anthropic-skills:docs` | 9 | 9 | 8 | 9 | 9 | 9 | 8 | 9 | 9 | 9 | 9 | 7 | 88 |
| `verification-before-completion` | 8 | 9 | 8 | 9 | 9 | 9 | 8 | 10 | 9 | 7 | 8 | 6 | 84 |
| `anthropic-skills:docx` | 9 | 8 | 9 | 7 | 8 | 7 | 8 | 8 | 9 | 8 | 9 | 7 | 82 |
| `anthropic-skills:pdf` | 9 | 8 | 8 | 7 | 9 | 7 | 8 | 8 | 9 | 8 | 9 | 7 | 82 |
| `anthropic-skills:deep-research` | 9 | 8 | 8 | 8 | 9 | 8 | 7 | 8 | 8 | 9 | 9 | 6 | 82 |
| `anthropic-skills:skill-creator` | 8 | 8 | 9 | 7 | 9 | 8 | 8 | 9 | 8 | 8 | 8 | 8 | 82 |
| `anthropic-skills:xlsx` | 9 | 8 | 9 | 7 | 8 | 7 | 8 | 8 | 8 | 8 | 9 | 7 | 81 |
| `dataviz` | 8 | 8 | 8 | 8 | 9 | 8 | 8 | 9 | 8 | 8 | 8 | 6 | 81 |
| `artifact-design + artifact-diagramming` | 8 | 9 | 8 | 8 | 8 | 8 | 8 | 9 | 8 | 8 | 8 | 5 | 80 |
| `anthropic-skills:pptx` | 8 | 8 | 9 | 7 | 8 | 7 | 8 | 8 | 8 | 8 | 8 | 7 | 79 |
| `doc-coauthoring` | 8 | 7 | 8 | 8 | 8 | 7 | 8 | 10 | 8 | 7 | 8 | 4 | 78 |
| `writing-skills` | 8 | 8 | 9 | 6 | 8 | 9 | 8 | 8 | 8 | 7 | 7 | 6 | 78 |
| `update-config (hooks)` | 7 | 8 | 8 | 7 | 8 | 8 | 7 | 8 | 9 | 7 | 7 | 10 | 77 |
| `schedule + loop` | 7 | 7 | 7 | 8 | 8 | 8 | 7 | 8 | 8 | 8 | 7 | 10 | 76 |
| `code-review + simplify` | 8 | 8 | 8 | 8 | 8 | 8 | 7 | 9 | 7 | 7 | 6 | 6 | 76 |
| `brainstorming` | 8 | 8 | 8 | 7 | 7 | 9 | 8 | 8 | 7 | 7 | 8 | 5 | 76 |
| `recursive-research` | 8 | 7 | 8 | 7 | 9 | 6 | 8 | 8 | 8 | 8 | 8 | 5 | 76 |
| `anthropic-skills:google-workspace` | 8 | 7 | 8 | 7 | 7 | 8 | 7 | 8 | 8 | 7 | 7 | 6 | 74 |
| `data (plugin)` | 8 | 7 | 8 | 7 | 6 | 8 | 7 | 7 | 7 | 8 | 8 | 6 | 73 |
| `writing-plans` | 7 | 8 | 7 | 7 | 6 | 9 | 8 | 9 | 7 | 7 | 7 | 5 | 73 |
| `chrome-browser / built-in-browser` | 7 | 7 | 7 | 7 | 8 | 8 | 7 | 6 | 8 | 8 | 7 | 7 | 72 |
| `anthropic-skills:morning` | 6 | 7 | 6 | 9 | 7 | 8 | 6 | 8 | 7 | 7 | 6 | 8 | 70 |
| `scientific-writing / literature review` | 7 | 7 | 8 | 6 | 7 | 9 | 7 | 7 | 7 | 7 | 7 | 5 | 70 |
| `content-research-writer` | 7 | 6 | 7 | 7 | 7 | 6 | 7 | 10 | 7 | 7 | 7 | 4 | 70 |
| `theme-factory` | 6 | 7 | 7 | 8 | 7 | 7 | 5 | 10 | 7 | 6 | 6 | 4 | 68 |
| `internal-comms` | 6 | 7 | 6 | 9 | 7 | 7 | 5 | 10 | 7 | 6 | 6 | 4 | 68 |
| `kaizen (plugin)` | 6 | 6 | 7 | 7 | 7 | 8 | 5 | 9 | 6 | 6 | 6 | 4 | 65 |
| `markdown-to-epub` | 7 | 7 | 9 | 8 | 8 | 6 | 7 | 9 | 6 | 5 | 4 | 5 | 69 |
| `article-extractor` | 7 | 7 | 8 | 7 | 6 | 6 | 7 | 7 | 6 | 7 | 6 | 5 | 67 |
| `anthropic-skills:import-memory` | 6 | 7 | 6 | 8 | 8 | 8 | 6 | 8 | 7 | 5 | 5 | 4 | 66 |
| `product-management (plugin)` | 6 | 7 | 7 | 7 | 5 | 8 | 7 | 8 | 6 | 6 | 6 | 5 | 65 |
| `productivity (plugin)` | 6 | 6 | 6 | 7 | 4 | 8 | 7 | 7 | 6 | 6 | 6 | 6 | 62 |
| `file-organizer` | 6 | 6 | 7 | 7 | 4 | 6 | 7 | 5 | 5 | 6 | 6 | 5 | 58 |
| `canvas-design` | 5 | 6 | 6 | 7 | 6 | 7 | 6 | 8 | 5 | 4 | 4 | 3 | 57 |
| `enterprise-search (plugin)` | 5 | 6 | 6 | 6 | 4 | 8 | 6 | 6 | 5 | 5 | 5 | 5 | 55 |
| `deep-research (Gemini)` | 7 | 7 | 7 | 7 | 6 | 7 | 6 | 5 | 6 | 8 | 7 | 6 | 66 |
| `csv-data-summarizer` | 6 | 6 | 7 | 8 | 7 | 4 | 6 | 8 | 6 | 7 | 6 | 6 | 65 |
| `n8n-skills` | 6 | 7 | 8 | 7 | 5 | 8 | 6 | 8 | 5 | 4 | 4 | 6 | 62 |
| `notebooklm-skill` | 6 | 4 | 7 | 5 | 5 | 1 | 7 | 2 | 6 | 6 | 6 | 5 | 50 |
| `brand-guidelines` | 2 | 8 | 3 | 9 | 3 | 7 | 5 | 10 | 3 | 2 | 1 | 2 | 46 |

## Conclusiones

- Reparto: S 1 · A 16 · B 10 · C 8 · D 5.
- **El núcleo ya está instalado**: las skills de documentos de Anthropic, Claude Docs, deep-research y skill-creator son el nivel S/A. No hace falta instalar nada para producir documentos profesionales.
- **Mejores candidatas externas**: `doc-coauthoring` (proceso de redacción de memorias), `verification-before-completion` (calidad) y `recursive-research` (investigación en español con fuentes por niveles). Ninguna ejecuta scripts.
- **Huecos que siguen abiertos**: escritura natural en español (no hay ninguna skill) y revisión de calidad de documentos (solo hay reglas generales). Se cubren con skills propias hechas con `skill-creator`, tomando ideas de `doc-coauthoring`, `content-research-writer` y `verification-before-completion`.
- **Descartadas (D)**: notebooklm-skill (archivada, cookies de Google), deep-research de Gemini (redundante y de pago), brand-guidelines (marca ajena) y n8n-skills (no se usa n8n).

## Pendiente de verificar
- Fechas del último commit: ninguna página las mostró; el mantenimiento se ha valorado por número de commits, estrellas y estado del repo.
- Código de los scripts (csv-data-summarizer, markdown-to-epub, research.py) y comandos de kaizen: no leídos.
- Carpetas concretas de scientific-writing y citation management en K-Dense-AI.
- Las skills instaladas de Anthropic se puntúan por su uso; deep-research aún no se ha probado en el vault.

## Fuentes
- https://github.com/anthropics/skills · https://github.com/anthropics/knowledge-work-plugins · https://github.com/obra/superpowers
- https://github.com/Anjos2/recursive-research · https://github.com/sanjay3290/ai-skills · https://github.com/ComposioHQ/awesome-claude-skills
- https://github.com/michalparkola/tapestry-skills · https://github.com/PleasePrompto/notebooklm-skill · https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill
- https://github.com/smerchek/claude-epub-skill · https://github.com/NeoLabHQ/context-engineering-kit · https://github.com/haunchen/n8n-skills · https://github.com/K-Dense-AI/claude-scientific-skills
