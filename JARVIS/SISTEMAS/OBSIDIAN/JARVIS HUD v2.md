---
tipo: sistema-jarvis
sistema: OBSIDIAN
estado: ok
chequeo: "plugin:jarvis-hud"
disparador: "siempre"
alimenta: ["UNED", "GITHUB", "AARON"]
conexiones: []
color: "#a88bfa"
tags: [jarvis, sistema]
---

# JARVIS HUD v2

Plugin propio (`jarvis-hud`) que sustituye al HUD v1 (`JARVIS/view.js` con Dataview). Código en [[jarvis-hud]]; plan en [[Plan JARVIS v2]]. Tiene el núcleo en Three.js (bloque ```jarvis``` de [[JARVIS Núcleo]]) con menú lateral, alertas y **modo JARVIS v2**, el **modo UNED** en paneles nativos y la vista de diagnóstico (comando *Abrir el diagnóstico de JARVIS v2*). Aaron confirmó el 2026-10-21 que funciona bastante bien.

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › OBSIDIAN
- **Se activa:** siempre (lee el vault al arrancar y cuando cambia una nota)
- **Estado anotado:** ok (instalado y activado el 2026-10-21)
- **Chequeo en vivo:** `plugin:jarvis-hud` (si se desactiva, sale en rojo en la galaxia)
- **En el iPad:** Remotely Save no sincroniza `.obsidian`, así que allí hay que instalarlo a mano (fase 5).
