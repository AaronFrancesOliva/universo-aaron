---
tipo: proyecto
sistema: PERSONAL
ruta: 'C:\Users\PC\Documents\GitHubLocal\jarvis-hud'
remoto: ''
stack: [TypeScript, Svelte, esbuild, Vitest, Obsidian API, Three.js]
estado: activo
commits: 5
primer_commit: 2026-10-21
ultimo_commit: 2026-10-21
color: "#3ee8ff"
tags: [github, proyecto, revisar]
conexiones:
  - {a: "Twinpos", tema: "Three.js para el plano 3D"}
asignaturas:
  - {a: IIS, tema: "arquitectura por capas y pruebas automáticas"}
  - {a: DS, tema: "componentes y separación datos / dominio / interfaz"}
---

# jarvis-hud

**J.A.R.V.I.S. v2**: el HUD de este vault rehecho como plugin de Obsidian, con componentes Svelte, una capa de datos común para el núcleo y las barras, y (en la fase 4) el universo en Three.js. Plan: [[Plan JARVIS v2]].

- **Sistema:** [[GITHUB|GITHUB AARON]] › PERSONAL
- **Código:** `C:\Users\PC\Documents\GitHubLocal\jarvis-hud` (fuera del vault, como el resto de proyectos). Al compilar se copia a `.obsidian/plugins/jarvis-hud/`.
- **Repositorio en GitHub:** todavía no (lo crea Aaron: privado, `jarvis-hud`).
- **Estado:** fases 1 y 2 hechas el 2026-10-21: capa de datos, dominio portado de `view.js`, sistema de diseño, vista de diagnóstico y el **modo UNED** en paneles nativos con 11 tarjetas configurables (29 pruebas). La fase 2 está en prueba una semana. Fases 3 y 4 juntas (núcleo directo en Three.js): **hechas** el mismo día, con el universo entero, el menú lateral, las alertas y el modo JARVIS v2. Falta medir el rendimiento frente al v1 y la fase 5 (iPad).
