---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "revision-documental (propia) + verification-before-completion"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Human Writing", tema: "revisa naturalidad y estilo"}
  - {a: "Document Engineering", tema: "valida la exportación"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Quality Assurance

Control de calidad antes de entregar: exactitud, coherencia, ortografía y presentación. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `code-review` / `simplify` | instaladas (solo código) | Claude Code |
| **revision-documental** (propia) | **creada 2026-11-26**, probada (RED → GREEN) | `~/.claude/skills/revision-documental/` |
| **verification-before-completion** | **instalada 2026-11-26 (A, 84)**, adaptada a documentos | obra/superpowers |

## Arquitectura
- **Capa:** 5 · Control
- **Skill líder:** `revision-documental` (documentos) · `verification-before-completion` (todo)
- **Entrega a:** Knowledge & Memory
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Human Writing]]: revisa naturalidad y estilo
- ⇄ [[Document Engineering]]: valida la exportación
