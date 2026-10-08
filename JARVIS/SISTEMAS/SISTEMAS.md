---
tipo: galaxia
tags: [jarvis, galaxia]
---

# JARVIS · SISTEMAS

La sala de máquinas de Jarvis: todo lo que funciona solo o está conectado al universo. Cada nota es un planeta, y cada planeta tiene su **estado de salud**:

| Estado | Color | Significa |
|---|---|---|
| `ok` | verde | funciona |
| `aviso` | ámbar | funciona, pero hay algo que mirar (pausado, caduca pronto…) |
| `error` | rojo, latiendo | roto o abandonado |
| `pendiente` | gris azulado | disponible pero sin configurar o sin usar |
| `inactivo` | gris, apagado | no existe todavía (idea) |

| Sistema solar | Qué agrupa |
|---|---|
| **RUTINAS** | Lo que hace Jarvis contigo: buenos días, cierre del día, revisión semanal, HUD, dictado, copias |
| **OBSIDIAN** | Plugins del vault |
| **CONECTORES** | Servicios externos: OneDrive, Ágora, GitHub, GitLab, Google |
| **CLAUDE CODE** | El agente: instrucciones, memoria, red neuronal, tareas programadas, hooks |

> [!info] Salud en vivo
> Algunos sistemas tienen un `chequeo` que la galaxia hace cada vez que se abre, y que corrige el `estado` anotado:
> - `plugin:<id>`: error si el plugin está desactivado.
> - `autosync`: aviso si la sincronización automática de Remotely Save está pausada.
> - `diario`: según cuándo se hizo la última nota del día.
> - `semana`: según si existe la nota de esta semana.
> - `caduca: AAAA-MM-DD`: aviso a 30 días de caducar y error si ya caducó.

> [!tip] Añadir un sistema
> Crea su nota en la carpeta del sistema solar con `tipo: sistema-jarvis`, `sistema`, `estado` (y si quieres `motivo`, `chequeo`, `caduca`, `disparador`), `alimenta` (galaxias a las que manda datos: `UNED`, `GITHUB`, `AARON`) y `conexiones` (`- {a: "Otro sistema", tema: "…"}`). En la galaxia, `alimenta` se dibuja como un flujo de datos punteado hacia el centro de esa galaxia.

```dataview
TABLE WITHOUT ID file.link AS Sistema, sistema AS Grupo, estado AS Estado, motivo AS Motivo, disparador AS "Se activa"
FROM "JARVIS/SISTEMAS"
WHERE tipo = "sistema-jarvis"
SORT sistema ASC, estado ASC
```

> [!note]
> El inventario se hizo el 2026-10-08 (plugins activos, ajustes de Claude Code, conectores disponibles). La tabla muestra el estado **anotado**; el estado **en vivo** se ve en la galaxia del núcleo.
