---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "xlsx y dataviz instalados"
disparador: "a petición"
alimenta: [UNED, GITHUB]
conexiones:
  - {a: "Executive Reporting", tema: "convierte datos en informe"}
  - {a: "Editorial Design", tema: "gráficos coherentes"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Data Analytics

Hojas de cálculo, estadística, gráficos y métricas. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:xlsx` | instalada | Anthropic |
| `dataviz` | instalada | Claude Code |
| data (plugin) | descartada (B) | anthropics/knowledge-work-plugins |
| CSV Data Summarizer | descartada (D: redundante) | coffeefuelbump/csv-data-summarizer-claude-skill |

## Arquitectura
- **Capa:** 2 · Pensamiento
- **Skill líder:** `xlsx`
- **Entrega a:** Executive Reporting, Editorial Design
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Executive Reporting]]: convierte datos en informe
- ⇄ [[Editorial Design]]: gráficos coherentes
