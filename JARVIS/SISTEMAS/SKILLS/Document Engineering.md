---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "docx, pdf, pptx, xlsx y google-workspace instalados"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Editorial Design", tema: "maqueta lo generado"}
  - {a: "Quality Assurance", tema: "valida la exportación"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Document Engineering

Generar archivos: Word, PDF, PowerPoint, Excel, Google Docs y documentos de Claude. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:docx` / `pdf` / `pptx` / `xlsx` | instaladas | Anthropic |
| `anthropic-skills:google-workspace` | disponible, no seleccionada (B) | Anthropic |
| `anthropic-skills:docs` (exporta a Word, PDF y Markdown) | instalada | Anthropic |
| Markdown to EPUB Converter | descartada (C) | smerchek/claude-epub-skill |

## Arquitectura
- **Capa:** 4 · Producción
- **Skill líder:** `docx`
- **Entrega a:** Quality Assurance
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Editorial Design]]: maqueta lo generado
- ⇄ [[Quality Assurance]]: valida la exportación
