---
tipo: sistema-jarvis
sistema: RUTINAS
estado: ok
disparador: "botón ◆ TRAYECTO (cabecera del núcleo) o UNED/TRAYECTO/TRAYECTO.bat"
alimenta: [UNED]
conexiones:
  - {a: "JARVIS HUD v2", tema: "el botón ◆ TRAYECTO es del plugin jarvis-hud (APPS de src/config.ts)"}
color: "#29d3f5"
tags: [jarvis, sistema]
---

# TRAYECTO

App local de la carrera: asignaturas por curso oficial y su estado, entregables con el cálculo de la nota necesaria para aprobar y el plan personal. Documentación: [[UNED/TRAYECTO/TRAYECTO|TRAYECTO]].

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › RUTINAS
- **Se activa:** botón **◆ TRAYECTO** al lado de MODO UNED; arranca `node servidor.mjs` en `UNED/TRAYECTO/` si no responde y abre <http://127.0.0.1:4317>
- **Datos:** `UNED/TRAYECTO/trayecto.db` (SQLite, `node:sqlite` de Node 22)
- **Estado anotado:** ok

## Conexiones
- ⇄ [[JARVIS HUD v2]]: el botón lo pone el plugin (`APPS` en `src/config.ts`, `abrirApp` en `src/modoJarvis.ts`)

- 2026-11-19: creada por Claude a petición de Aaron.
