---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "memoria del vault funcionando"
disparador: "a petición"
alimenta: [AARON]
conexiones:
  - {a: "Workflow Automation", tema: "las rutinas la actualizan"}
  - {a: "Research Intelligence", tema: "guarda lo investigado"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Knowledge & Memory

Memoria persistente, bases de conocimiento y relaciones entre documentos. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| Memoria del proyecto (`AARON/MEMORY.md`) | funcionando | vault |
| Red neuronal de Claude (`AARON/RED NEURONAL/`) | funcionando | vault |
| Memoria automática de Claude Code | funcionando | Claude Code |
| `anthropic-skills:import-memory` | disponible, no seleccionada (C) | Anthropic |
| tapestry | descartada (no existe como skill en el repositorio) | michalparkola/tapestry-skills-for-claude-code |

## Arquitectura
- **Capa:** 3 · Memoria
- **Skill líder:** `AARON/MEMORY.md` + red neuronal
- **Entrega a:** todas
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Workflow Automation]]: las rutinas la actualizan
- ⇄ [[Research Intelligence]]: guarda lo investigado
