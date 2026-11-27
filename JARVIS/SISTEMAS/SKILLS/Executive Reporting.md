---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "docs, pptx y morning instalados"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Data Analytics", tema: "convierte datos en informe"}
  - {a: "Professional Writing", tema: "redacta los informes"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Executive Reporting

Informes ejecutivos, resúmenes y presentaciones de decisión. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:docs` / `pptx` | instaladas | Anthropic |
| `anthropic-skills:morning` (resumen del día) | disponible, no seleccionada (B) | Anthropic |
| internal-comms | descartada (B) | anthropics/skills |

## Arquitectura
- **Capa:** 4 · Producción
- **Skill líder:** `docs`
- **Entrega a:** Document Engineering
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Data Analytics]]: convierte datos en informe
- ⇄ [[Professional Writing]]: redacta los informes
