---
tipo: sistema-jarvis
sistema: SKILLS
estado: ok
motivo: "cubierto por el modelo base (prueba del 2026-11-26)"
disparador: "a petición"
alimenta: [UNED, AARON]
conexiones:
  - {a: "Professional Writing", tema: "pulen el mismo texto"}
  - {a: "Quality Assurance", tema: "revisa naturalidad y estilo"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# Human Writing

Escritura natural en español: tono, claridad, sin redundancias, adaptada al público. #revisar

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › SKILLS · centro: [[SKILLS PLANET]]
- **Catálogo:** [[Catálogo maestro]] (fase 1, 2026-11-26)

> [!check] Prueba del 2026-11-26: no hace falta skill
> Sin ninguna skill, el modelo reescribió un párrafo «de IA» de una memoria quitando muletillas y calcos, cambiando lo vago por datos y sin inventar nada (dejó huecos entre corchetes). Según `writing-skills`, si el control no falla no se escribe la skill. Se queda como guía de estilo; si en el uso real aparece un fallo repetido, entonces se crea la skill para corregir ese fallo.

## Guía de estilo (español, documentos de Aaron)
- Frases cortas (menos de 25 palabras) y párrafos de 3 frases como máximo.
- Fuera muletillas: «es importante destacar», «cabe mencionar», «juega un papel fundamental», «en última instancia», «enfoque holístico», «no solo… sino que también».
- Lo vago se cambia por el dato («notable reducción» → «de 9 a 7 puertas»). Si no hay dato, se deja un hueco `[…]` o se quita la frase; **nunca se inventa**.
- Ni rayas (—) de estilo IA ni abuso de listas: listas solo para elementos paralelos.
- Terminología de la asignatura (la rúbrica la puntúa), explicada la primera vez.
- Cada apartado empieza por su idea principal.

## Arquitectura
- **Capa:** 4 · Producción
- **Skill líder:** skill propia (fase 6)
- **Entrega a:** Document Engineering
- Detalle y reglas de elección: [[Arquitectura (fase 4)]]

## Conexiones
- ⇄ [[Professional Writing]]: pulen el mismo texto
- ⇄ [[Quality Assurance]]: revisa naturalidad y estilo
