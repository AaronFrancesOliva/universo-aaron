---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "schedule, loop y hooks disponibles"
disparador: "a petición"
alimenta: [UNED, GITHUB, AARON]
conexiones:
  - {a: "Knowledge & Memory", tema: "las rutinas la actualizan"}
  - {a: "Quality Assurance", tema: "revisión automática"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Workflow Automation

Rutinas, tareas programadas, hooks y plugins. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `schedule` / `loop` | instaladas | Claude Code |
| `update-config` (hooks) | instalada | Claude Code |
| `plugin-authoring` | instalada | Claude Code |
| n8n-skills | descartada (D) | haunchen/n8n-skills |

## Arquitectura
- **Capa:** 6 · Operación
- **Skill líder:** `schedule`
- **Entrega a:** dispara cualquier capa
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Knowledge & Memory]]: las rutinas la actualizan
- ⇄ [[Quality Assurance]]: revisión automática
