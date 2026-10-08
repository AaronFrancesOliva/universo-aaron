---
tipo: galaxia
tags: [github, galaxia]
---

# GITHUB AARON

Galaxia de los proyectos de código de Aaron. El código **no está aquí**: vive en `C:\Users\PC\Documents\GitHubLocal`. Aquí solo hay una nota por proyecto (planeta), agrupadas por ámbito (sistemas solares). Esta carpeta **no se sincroniza con el iPad**.

| Sistema solar | Qué agrupa |
|---|---|
| **COLABORACIÓN** | Proyectos en equipo o de otras personas |
| **PERSONAL** | Proyectos propios |
| **PROFESIONAL** | Pruebas técnicas y trabajo |
| **FORMACIÓN DAM** | Prácticas del ciclo de DAM |

> [!tip] Añadir un proyecto
> Crea su nota en la carpeta del sistema con las propiedades `tipo: proyecto`, `sistema`, `ruta`, `remoto`, `stack`, `estado`, `commits`, `ultimo_commit` y `color`. La galaxia la lee sola, sin tocar `view.js`. O pídeselo a Claude, que saca los datos con `git log`.
> Opcional: `conexiones` (otros proyectos: `- {a: Aularis, tema: "…"}`) y `asignaturas` (claves de la UNED como `SBD`, `DS`, `SEG`: `- {a: SBD, tema: "…"}`). En la galaxia salen como líneas entre planetas; las de las asignaturas, tenues, se encienden al señalar el proyecto.

> [!warning] #revisar
> El `estado` de todos los proyectos está puesto como `activo` por defecto. Cambia a `pausado` o `archivado` los que ya no sigas: en la galaxia, los archivados salen apagados.

```dataview
TABLE WITHOUT ID file.link AS Proyecto, sistema AS Sistema, stack AS Stack, commits AS Commits, ultimo_commit AS "Último commit", estado AS Estado
FROM "GITHUB"
WHERE tipo = "proyecto"
SORT sistema ASC, ultimo_commit DESC
```

`SSH` (en `GitHubLocal`) no figura a propósito: no es un proyecto y guarda claves privadas.

## Análisis y conexiones
Cada proyecto tiene su análisis en la memoria de Claude: [[GitHub - Proyectos de Aaron]] (mapa de conexiones entre proyectos y con la UNED, y trayectoria DAW → DAM → UNED, #revisar).
