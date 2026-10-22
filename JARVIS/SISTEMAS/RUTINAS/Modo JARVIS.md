---
tipo: sistema-jarvis
sistema: RUTINAS
estado: ok
disparador: "botón ▶ EJECUTAR JARVIS (nota JARVIS Núcleo) o comando «Ejecutar JARVIS» · Ctrl+Shift+J para salir"
alimenta: []
conexiones:
  - {a: "JARVIS HUD v2", tema: "el núcleo y el modo JARVIS son del plugin jarvis-hud"}
  - {a: "Lean Terminal", tema: "la terminal va debajo del núcleo"}
color: "#ffd36e"
tags: [jarvis, sistema]
---

# Modo JARVIS

El HUD: núcleo (universo) arriba y terminal abajo; los modos (MODO UNED) ponen las barras laterales.

- **Desde el 2026-10-21 es JARVIS v2** (plugin `jarvis-hud`, [[Plan JARVIS v2]]): el núcleo en Three.js y el modo UNED en paneles nativos. Se lanza con el botón **▶ EJECUTAR JARVIS** de la cabecera de [[JARVIS Núcleo]] o con el comando *Ejecutar JARVIS (núcleo + terminal)*. **MODO UNED** enciende y apaga las barras; **🎙 HABLAR** abre el dictado de Windows en la terminal.
- El v1 (`JARVIS/view.js` con Dataview) sigue en el vault de respaldo; su nota está en `ARCHIVO/antes-jarvis-v2-2026-10-21/`.
- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › RUTINAS
- **Se activa:** botón ▶ EJECUTAR JARVIS · Ctrl+Shift+J para salir
- **Estado anotado:** ok

## Conexiones
- ⇄ [[JARVIS HUD v2]]: el núcleo y el modo JARVIS son del plugin jarvis-hud
- ⇄ [[Lean Terminal]]: la terminal va debajo del núcleo
