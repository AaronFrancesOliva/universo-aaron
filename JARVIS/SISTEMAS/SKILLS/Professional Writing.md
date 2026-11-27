---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "docs instalada"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Human Writing", tema: "pulen el mismo texto"}
  - {a: "Executive Reporting", tema: "redacta los informes"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Professional Writing

Redacción técnica, académica, ejecutiva e institucional. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:docs` (Claude Docs) | instalada | Anthropic |
| internal-comms | descartada (B) | anthropics/skills |
| **doc-coauthoring** | **instalada 2026-11-26 (A, 78)** | anthropics/skills |
| Content Research Writer | descartada (B; ideas para la skill propia de escritura) | ComposioHQ/awesome-claude-skills |

## Arquitectura
- **Capa:** 4 · Producción
- **Skill líder:** `doc-coauthoring` (proceso) + `docs` (soporte)
- **Entrega a:** Human Writing
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Human Writing]]: pulen el mismo texto
- ⇄ [[Executive Reporting]]: redacta los informes
