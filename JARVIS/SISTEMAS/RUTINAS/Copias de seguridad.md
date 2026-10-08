---
tipo: sistema-jarvis
sistema: RUTINAS
estado: ok
disparador: "cada noche a las 23:30 (tarea de Windows) y antes de cada cambio grande del HUD"
alimenta: []
conexiones:
  - {a: "Memoria", tema: "cada copia se anota en MEMORY"}
color: "#ffd36e"
tags: [jarvis, sistema]
---

# Copias de seguridad

Copias de `view.js` y `view.css` en `ARCHIVO/` (rollback-galaxia-2026-10-07 y antes-carpeta-UNED-2026-10-08).

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › RUTINAS
- **Se activa:** cada noche a las 23:30 (tarea de Windows) y antes de cada cambio grande del HUD
- **Estado anotado:** ok

## Conexiones
- ⇄ [[Memoria]]: cada copia se anota en MEMORY

## Copia con historial (git), desde el 2026-10-08
- El vault es un **repositorio git** (rama `main`). Cada noche a las **23:30** la tarea de Windows **«UNIVERSO AARON - copia diaria»** ejecuta `JARVIS/copia-de-seguridad.ps1`: guarda todos los cambios en un commit «Copia automática …» y, si hay remoto, los sube a GitHub. Si el PC está apagado a esa hora, se hace al encenderlo. Registro: `.git/copia.log`.
- **Fuera de la copia** (`.gitignore`): `UNED/LIBROS/`, los PDF de más de 50 MB (manual de GEI y libro de LED), vídeos, los `node_modules` de los plugins, los **secretos** (tokens de Remotely Save, historial de Lean Terminal) y el estado de la ventana. El script tampoco sube archivos nuevos de más de 95 MB.
- Para volver a una versión: pedírselo a Claude (`git log` y `git restore`).
- **GitHub**: repositorio privado `AaronFrancesOliva/universo-aaron`, primera subida el 2026-10-08. En el núcleo se ve como la **estación de copias** (verde = todo subido).
