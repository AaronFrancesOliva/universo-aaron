---
tags: [red-neuronal, github]
actualizado: 2026-10-08
---

# GitHub: proyectos de Aaron

Lo que sé de los repositorios de Aaron (`C:\Users\PC\Documents\GitHubLocal`), analizados a fondo el 2026-10-08. Galaxia en el vault: `GITHUB/` (índice `GITHUB/GITHUB.md`). Un nodo por proyecto:

| Nodo | Planeta | En una línea |
|---|---|---|
| [[GitHub - Aularis]] | [[Aularis]] | Reserva de aulas para centros de FP: monorepo Laravel 12 + React + Electron, en equipo de 3 con Git Flow y CI/CD |
| [[GitHub - CanvaDIOP]] | [[CanvaDIOP]] | Excel de alumnos → documentos de convalidación (Word/PDF) para Orientación Laboral; React + Electron; repositorio de JaviiCode |
| [[GitHub - portafolio-magic-builder]] | [[portafolio-magic-builder]] | Portafolio y CV Europass hecho con Lovable y personalizado a mano |
| [[GitHub - CHILDREN-S-ACTIVITY-SERVICE]] | [[CHILDREN-S-ACTIVITY-SERVICE]] | Gestión de un parque infantil (reservas, eventos); proyecto de PRW de 2.º de DAW; Laravel 11 + Blade |
| [[GitHub - aaron-frances]] | [[aaron-frances]] | Prueba técnica de Edata Consulting: usuarios y roles en Laravel, dos modelos E-R y SQL |
| [[GitHub - PGL (DAM)]] | 5 apps | Módulo PGL de DAM: el mismo formulario en XML, Compose y Expo, más RecipesApp (MVVM + Room) |

## Trayectoria que se deduce de los repositorios
1. **DAW** (hasta 2024-25): proyecto de PRW de 2.º = CHILDREN'S ACTIVITY SERVICE (abr-may 2025). Por eso tiene 4 asignaturas convalidadas en el grado ([[Plan de estudios]]).
2. **Portafolio** (mar-may 2025) para buscar trabajo.
3. **Proceso de selección en Edata Consulting** (ago 2025): prueba técnica.
4. **DAM** (curso 2025-26, en un centro de FP): PGL y, en equipo, RecipesApp y Aularis (dic 2025 → abr 2026). CanvaDIOP (sep 2025) es del mismo entorno.
5. **UNED, Ingeniería Informática** (2026-27): ver [[MEMORY]].

> [!warning] #revisar
> Esta trayectoria la deduzco yo de las fechas y documentos de los repositorios; Aaron no la ha confirmado. No pasa a [[Perfil]] hasta que lo haga.

## Mapa de conexiones
**Entre proyectos** (se dibujan en la galaxia como líneas entre planetas):
- CHILDREN'S → aaron-frances: **mismo código de autenticación** (middlewares `Auth`/`AuthAdmin`, `comprobar_sesion`, `search`).
- CHILDREN'S → Aularis: **mismo dominio** (reservas con roles y permisos), de la versión de una persona en Blade a la versión de equipo con API, PostgreSQL y CI/CD.
- Aularis ⇄ RecipesApp2: **mismo equipo** (Aaron Frances, Aaron Perdomo Fulgencio y Diego Arbelo González).
- Aularis ⇄ CanvaDIOP: Electron y el entorno de los centros de FP.
- HelloXML → HelloFormCompose → HelloFormExpo: **el mismo ejercicio en tres tecnologías**.
- AppContador_UT1 ⇄ HelloFormExpo: Expo.
- portafolio ⇄ Aularis: mismo stack de interfaz (React, Vite, Tailwind, Radix).

**Con la UNED** (líneas tenues de la galaxia GitHub a la UNED; se encienden al señalar el proyecto):
| Asignatura | Proyectos | Por qué |
|---|---|---|
| [[Sistemas de Bases de Datos]] | Aularis, CHILDREN'S, aaron-frances, RecipesApp2 | Modelos relacionales, E-R, N:M con atributos, SQL, Room |
| [[Diseño del Software]] | Aularis, RecipesApp2 | Capas, Repository, MVVM |
| [[Introducción a la Ingeniería de Software]] | Aularis, CHILDREN'S, CanvaDIOP | Requisitos, análisis, pruebas, automatizar procesos |
| [[Seguridad]] | Aularis, CHILDREN'S, aaron-frances | Autenticación, control de acceso por roles, auditoría |
| [[Gestión de Proyectos Informáticos]] | Aularis | Git Flow, PR, épicas, CI/CD |
| [[Sistemas Distribuidos]] | Aularis | Web, API y base de datos en servicios distintos |
| [[Ética y Legislación]] | CanvaDIOP | Datos personales (DNI) |
| [[Teoría de los Lenguajes de Programación]] | HelloXML, HelloFormCompose, HelloFormExpo | UI imperativa frente a declarativa; Kotlin y TypeScript |
| GEI ([[GEI - Índice]]) | CHILDREN'S, aaron-frances | Costes y horas del proyecto (T05, T07), selección de personal (T03) |

## Perfil técnico
- Stack habitual: **Laravel** (11 y 12) en backend, **React + Vite + Tailwind + shadcn/ui** en frontend, **Electron** para escritorio, PostgreSQL (Supabase) y MySQL; en móvil, **Kotlin + Jetpack Compose** y **Expo/React Native**.
- Usa IA para generar código (Lovable en el portafolio) y Conventional Commits en los proyectos de equipo; en los personales, mensajes "aa".
- Usuario de GitHub: `AaronFrancesOliva`.

## Cuidado
- `GitHubLocal/SSH` contiene claves privadas (`.ppk`): no abrir, no copiar, no enlazar.
- `CanvaDIOP/labor-orientation-app/Documents/Generated` puede tener DNI de alumnos: no abrir.
- Varios repositorios tienen `node_modules`: no hacer `du` ni búsquedas recursivas sin excluirlos (tardan minutos).
- En los heredoc de Git Bash con apóstrofos (`CHILDREN'S`) el shell puede fallar: mejor escribir los archivos con la herramienta Write.
