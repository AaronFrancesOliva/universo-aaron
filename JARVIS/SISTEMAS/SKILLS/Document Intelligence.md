---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "pdf, docx y xlsx instalados"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Document Engineering", tema: "extrae lo que luego se genera"}
  - {a: "Research Intelligence", tema: "le pasa fuentes procesadas"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Document Intelligence

Leer y extraer información de archivos (PDF, Word, Excel, webs). #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:pdf` | instalada | Anthropic |
| `anthropic-skills:docx` (lectura) | instalada | Anthropic |
| `anthropic-skills:xlsx` (lectura) | instalada | Anthropic |
| `pdftotext` + PyMuPDF (libros escaneados) | instalados | herramientas locales |
| article-extractor | descartada (C: WebFetch ya lo cubre) | michalparkola/tapestry-skills-for-claude-code |
| NotebookLM Integration | descartada (D: archivada, cookies de Google) | PleasePrompto/notebooklm-skill |

## Arquitectura
- **Capa:** 1 · Entrada
- **Skill líder:** `pdf`
- **Entrega a:** Research Intelligence, Data Analytics
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Document Engineering]]: extrae lo que luego se genera
- ⇄ [[Research Intelligence]]: le pasa fuentes procesadas
