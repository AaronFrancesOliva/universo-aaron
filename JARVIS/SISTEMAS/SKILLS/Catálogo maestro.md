---
tags: [skills, catalogo]
actualizado: 2026-11-26
---

# Catálogo maestro de skills (fase 1: descubrimiento)

Inventario verificado el 2026-11-26. La parte A son skills **ya disponibles** en el Claude Code de Aaron (salen en su lista de skills). La parte B son **candidatas externas** leídas en sus repositorios; ninguna está instalada ni probada. La evaluación con puntuación (0-100, niveles S-D) es la fase 2. Centro: [[SKILLS PLANET]]. #revisar

## A · Ya disponibles (instaladas)

| Skill | Origen | Departamentos |
|---|---|---|
| `anthropic-skills:docx` | Anthropic | Document Engineering, Document Intelligence |
| `anthropic-skills:pdf` | Anthropic | Document Engineering, Document Intelligence |
| `anthropic-skills:pptx` | Anthropic | Document Engineering, Executive Reporting |
| `anthropic-skills:xlsx` | Anthropic | Data Analytics, Document Engineering |
| `anthropic-skills:docs` (Claude Docs, exporta a Word/PDF/Markdown) | Anthropic | Professional Writing, Executive Reporting |
| `anthropic-skills:google-workspace` | Anthropic | Document Engineering |
| `anthropic-skills:deep-research` | Anthropic | Research Intelligence |
| `anthropic-skills:skill-creator` (crear y medir skills propias) | Anthropic | todos (fábrica de skills) |
| `anthropic-skills:import-memory` | Anthropic | Knowledge & Memory |
| `anthropic-skills:morning` | Anthropic | Executive Reporting |
| `anthropic-skills:chrome-browser`, `built-in-browser`, `computer-use` | Anthropic | Research Intelligence |
| `dataviz` | Claude Code | Data Analytics, Editorial Design |
| `artifact-design`, `artifact-diagramming`, `artifact-capabilities` | Claude Code | Editorial Design |
| `schedule`, `loop`, `update-config`, `plugin-authoring` | Claude Code | Workflow Automation |
| `code-review`, `simplify`, `security-review` | Claude Code | Quality Assurance (solo código) |
| Conectores: Gmail, Google Calendar, Google Drive, Claude Docs | claude.ai | Workflow Automation, Knowledge & Memory |

## B · Candidatas externas (sin instalar)

### Oficiales de Anthropic
| Skill / plugin | Repositorio | Qué hace | Nota |
|---|---|---|---|
| internal-comms | [anthropics/skills](https://github.com/anthropics/skills) | Informes de estado, boletines, FAQ | |
| doc-coauthoring | anthropics/skills | (sin descripción leída) | leer en fase 2 |
| theme-factory | anthropics/skills | Temas de fuentes y colores para documentos y slides | |
| canvas-design | anthropics/skills | Arte visual en PNG y PDF | |
| brand-guidelines | anthropics/skills | Marca de Anthropic | poco útil para Aaron |
| productivity | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0) | Tareas, calendario, flujos diarios | |
| data | knowledge-work-plugins | SQL, estadística, dashboards, validación | |
| enterprise-search | knowledge-work-plugins | Búsqueda en correo, chat, documentos | |
| product-management | knowledge-work-plugins | Specs, roadmaps, síntesis de investigación | |

Instalación (según los README): `/plugin marketplace add anthropics/skills` y `claude plugin marketplace add anthropics/knowledge-work-plugins`. Las skills docx, pdf, pptx y xlsx del repositorio ya están en la parte A.

### Comunidad
| Skill | Repositorio | Qué hace |
|---|---|---|
| brainstorming, writing-plans, executing-plans, verification-before-completion, writing-skills | [obra/superpowers](https://github.com/obra/superpowers) (MIT) | Diseño por preguntas, planes, verificar antes de dar algo por hecho |
| recursive-research | [Anjos2/recursive-research](https://github.com/Anjos2/recursive-research) | Investigación recursiva con checkpoints en disco |
| deep-research (Gemini) | [sanjay3290/ai-skills](https://github.com/sanjay3290/ai-skills) | Investigación con el agente de Gemini (depende de otra IA) |
| Content Research Writer | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Escritura con investigación, citas y revisión por secciones |
| article-extractor, tapestry | [michalparkola/tapestry-skills-for-claude-code](https://github.com/michalparkola/tapestry-skills-for-claude-code) | Extraer artículos web; enlazar y resumir documentos |
| NotebookLM Integration | [PleasePrompto/notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill) | Respuestas basadas solo en documentos de NotebookLM |
| CSV Data Summarizer | [coffeefuelbump/csv-data-summarizer-claude-skill](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) | Informe con gráficos a partir de un CSV |
| Markdown to EPUB Converter | [smerchek/claude-epub-skill](https://github.com/smerchek/claude-epub-skill) | Markdown a libro EPUB |
| File Organizer | ComposioHQ/awesome-claude-skills | Ordenar archivos y encontrar duplicados |
| kaizen | [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | Mejora continua (Kaizen, Lean) |
| n8n-skills | [haunchen/n8n-skills](https://github.com/haunchen/n8n-skills) | Manejar flujos de n8n |
| claude-scientific-skills | [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | Skills científicas (bibliotecas y bases de datos) |

> [!warning] Fiabilidad de la lectura
> La página de ComposioHQ salió truncada: las entradas de *File Organizer* y *kaizen* vienen de un resumen y hay que confirmarlas en la fase 2.

## Huecos detectados
- **Human Writing**: ninguna skill verificada de escritura natural en español → skill propia.
- **Quality Assurance de documentos**: solo hay revisión de código → skill propia (lista de comprobación de calidad).
- **Strategic Intelligence**: solo candidatas externas.

## Listas para seguir descubriendo (fase 2)
- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) (más de 1000 entradas según su README)
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
- [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills)
- [Chat2AnyLLM/awesome-claude-skills](https://github.com/Chat2AnyLLM/awesome-claude-skills)
- [alirezarezvani/claude-skills](https://alirezarezvani.github.io/claude-skills/plugins/)
