---
tipo: sistema-jarvis
sistema: RUTINAS
estado: ok
chequeo: "diario"
disparador: "frase «buenos días»"
alimenta: ["UNED"]
conexiones:
  - {a: "Periodic Notes", tema: "crea la nota del día"}
  - {a: "Templater", tema: "plantilla del diario"}
color: "#ffd36e"
tags: [jarvis, sistema]
---

# Buenos días

Crea la nota del día en `UNED/PLANIFICACION/Rutina/Diario/` con agenda (tutorías, PEC, repasos) y 3 prioridades #revisar. Reglas en `UNED/PLANIFICACION/Rutina/CLAUDE.md`.

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › RUTINAS
- **Se activa:** frase «buenos días»
- **Estado anotado:** ok
- **Chequeo en vivo:** `diario` (la galaxia corrige el estado con lo que ve al abrirse)
- **Alimenta:** galaxia UNED

## Conexiones
- ⇄ [[Periodic Notes]]: crea la nota del día
- ⇄ [[Templater]]: plantilla del diario
