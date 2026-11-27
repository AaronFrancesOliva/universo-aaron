---
tags: [skills, seleccion]
actualizado: 2026-11-26
---

# Selección de skills (fase 3)

Regla de Aaron (2026-11-26): **se quedan las de nivel A o S; el resto se descarta**. Con esto, el ecosistema activo de SKILLS PLANET son 15 skills (10 ya instaladas + 5 instaladas hoy). Base: [[Evaluación (fase 2)]]. Centro: [[SKILLS PLANET]]. #revisar

## Seleccionadas

| Nivel | Skill | Puntos | Departamento | Estado |
|---|---|---|---|---|
| S | `anthropic-skills:docs` | 88 | Professional Writing · Executive Reporting | ya instalada |
| A | `verification-before-completion` | 84 | Quality Assurance | **instalada hoy** |
| A | `anthropic-skills:docx` | 82 | Document Engineering | ya instalada |
| A | `anthropic-skills:pdf` | 82 | Document Intelligence · Engineering | ya instalada |
| A | `anthropic-skills:deep-research` | 82 | Research Intelligence | ya instalada |
| A | `anthropic-skills:skill-creator` | 82 | fábrica de skills | ya instalada |
| A | `anthropic-skills:xlsx` | 81 | Data Analytics | ya instalada |
| A | `dataviz` | 81 | Data Analytics · Editorial Design | ya instalada |
| A | `artifact-design` + `artifact-diagramming` | 80 | Editorial Design | ya instaladas |
| A | `anthropic-skills:pptx` | 79 | Document Engineering · Executive Reporting | ya instalada |
| A | `doc-coauthoring` | 78 | Professional Writing | **instalada hoy** |
| A | `writing-skills` | 78 | fábrica de skills | **instalada hoy** |
| A | `update-config` (hooks) | 77 | Workflow Automation · Quality Assurance | ya instalada |
| A | `schedule` + `loop` | 76 | Workflow Automation | ya instaladas |
| A | `code-review` + `simplify` | 76 | Quality Assurance (código) | ya instaladas |
| A | `brainstorming` | 76 | Strategic Intelligence | **instalada hoy** |
| A | `recursive-research` | 76 | Research Intelligence | **instalada hoy** |

## Instalación de las 5 nuevas (2026-11-26)

Se instalaron como **skills personales** en `~/.claude/skills/<nombre>/`, copiando solo la carpeta de cada skill. No se instaló el plugin completo de superpowers, que añade un hook de arranque y 10 skills de programación. Antes se descargaron los repositorios en una carpeta aislada y se leyeron sus archivos.

| Skill | Origen (commit más reciente del repositorio) | Revisión de seguridad | Adaptación |
|---|---|---|---|
| doc-coauthoring | anthropics/skills (16 nov 2026) | Solo instrucciones | En español; documentos con `#revisar`; salida final con `docs` o `docx` |
| verification-before-completion | obra/superpowers, MIT (3 nov 2026) | Solo instrucciones | Aplicada también a documentos |
| writing-skills | obra/superpowers, MIT | `render-graphs.js` solo llama a Graphviz (`dot`) en local | Sin commit ni push; `test-driven-development` no instalada |
| brainstorming | obra/superpowers, MIT | Su *Visual Companion* abría un servidor local y cargaba un logo de primeradiant.com: **quitado** (`scripts/` y `visual-companion.md`) | Sin Visual Companion; sin `writing-plans`; diseños en la carpeta del proyecto |
| recursive-research | Anjos2/recursive-research, MIT (22 abr 2026) | Solo instrucciones; usa WebSearch/WebFetch | Guarda en `AARON/INVESTIGACIONES/<slug>/` en vez de `memoria/` en la raíz del vault |

Cada adaptación es un bloque citado al principio de su `SKILL.md`. Para desinstalar una skill basta con mover su carpeta fuera de `~/.claude/skills/`.

> [!warning] Ojo con `brainstorming`
> Su descripción dice que debe usarse «antes de cualquier trabajo creativo». Puede hacer que Claude pregunte de más antes de tareas sencillas. Si molesta, se suaviza la descripción.

## Descartadas

| Nivel | Skills |
|---|---|
| B | data (plugin), writing-plans, scientific-writing (K-Dense), content-research-writer, theme-factory, internal-comms, kaizen |
| C | productivity (plugin), file-organizer, canvas-design, enterprise-search, markdown-to-epub, article-extractor, product-management |
| D | deep-research (Gemini), n8n-skills, csv-data-summarizer, notebooklm-skill, brand-guidelines |

Ya instaladas pero **fuera de los flujos** (siguen disponibles, no se pueden desinstalar porque vienen con la cuenta): `google-workspace` (B), `chrome-browser` / `built-in-browser` (B), `morning` (B) e `import-memory` (C).

## Huecos que quedan
- **Human Writing**: sin skill. Se creará una propia en la fase 6 con `writing-skills` + `skill-creator`.
- **Revisión de documentos**: `verification-before-completion` da la disciplina general; falta una lista de comprobación propia (fase 6).
