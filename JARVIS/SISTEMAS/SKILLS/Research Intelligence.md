---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "deep-research instalada"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Document Intelligence", tema: "le pasa fuentes procesadas"}
  - {a: "Strategic Intelligence", tema: "le da la base de las conclusiones"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Research Intelligence

Investigación profunda, contraste de fuentes y trazabilidad. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

| Skill | Estado | Fuente |
|---|---|---|
| `anthropic-skills:deep-research` | instalada | Anthropic |
| WebSearch + agente web-fetch | disponibles | Claude Code |
| Claude in Chrome (páginas con sesión, p. ej. Ágora) | instalada | Anthropic |
| **recursive-research** | **instalada 2026-11-26 (A, 76)**; guarda en `AARON/INVESTIGACIONES/` | Anjos2/recursive-research |
| deep-research (Gemini) | descartada (D: redundante y de pago) | sanjay3290/ai-skills |

## Arquitectura
- **Capa:** 1 · Entrada
- **Skill líder:** `deep-research` (una sesión) / `recursive-research` (varias sesiones)
- **Entrega a:** Strategic Intelligence, Knowledge & Memory
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Document Intelligence]]: le pasa fuentes procesadas
- ⇄ [[Strategic Intelligence]]: le da la base de las conclusiones
