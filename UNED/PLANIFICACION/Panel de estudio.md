---
tags: [planificacion, panel]
cssclasses: [jarvis-panel]
---

```dataviewjs
await dv.view("JARVIS")
```

> [!info]- Cómo funciona este panel
> - Requiere *Ajustes → Dataview → Enable JavaScript Queries* activado y verse en **vista de lectura** (`Ctrl + E`).
> - El código está en `JARVIS/view.js` (datos y comportamiento) y `view.css` (aspecto). Las tutorías, los colores y el nº de temas por asignatura se cambian al principio de `view.js`.
> - **Objetivos**: salen de las tareas con `[fecha:: …]` de [[Calendario]]. Para marcar uno como hecho, pulsa su casilla dos veces (la primera la arma, la segunda confirma); se marca también en el Calendario.
> - **Repasos y progreso**: salen de las propiedades `asignatura`, `tema`, `estado` y `proximo_repaso` de las notas de tema ([[Sistema de estudio]]).
> - **MODO JARVIS** (botón arriba a la derecha): solo el núcleo (el universo: AARON, JARVIS y la galaxia UNED) arriba y la terminal debajo, sin la interfaz de Obsidian. Las notas que abras desde ahí se abren en una ventana aparte. Para volver, pulsa *SALIR DEL MODO JARVIS* en la cabecera del núcleo o usa **Ctrl+Shift+J**. El núcleo es `JARVIS/JARVIS Núcleo.md`.
> - **MODO UNED** (botón junto a MODO JARVIS): enciende o apaga las barras laterales de la UNED (briefing, tutoría, repasos, semana… a la izquierda; prioridades, objetivos, ritmo… a la derecha). Son las notas de `UNED/MODO UNED/`. En el futuro habrá más modos (`CFG.modos` en `view.js`).
> - **Modo concentración**: pomodoro de 25/5 min; avisa con un pitido y una notificación, y sigue contando aunque cierres la nota.
>
> Enlaces: [[Calendario]] · [[Sistema de estudio]] · [[MEMORY]]
