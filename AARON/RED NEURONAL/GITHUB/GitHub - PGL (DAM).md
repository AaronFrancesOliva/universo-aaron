---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
---

# PGL de DAM: 5 apps móviles (análisis)

**Qué es**: el repositorio del módulo **PGL** (*Programación multimedia y dispositivos móviles*) del ciclo de **DAM**, curso 2025-26 (`github.com/AaronFrancesOliva/PGL`, 9 commits entre el 23 sep y el 6 dic 2025; algunos hechos desde un PC del aula, `R1-PC10`). En `GitHubLocal/DAM` también están las carpetas de **AED, DAD, PGV y SSG**, pero solo tienen un README vacío. Sistema FORMACIÓN DAM.

| App | Qué hace | Tecnología |
|---|---|---|
| [[AppContador_UT1]] | Contador (UT1, oct 2025); el README justifica la elección de Expo | Expo SDK 52 + React Native 0.76 |
| [[HelloXML]] | "App saludador": nombre → "👋 Hola, [nombre]", con validación de campo vacío | Android nativo, Kotlin + vistas XML (API 24) |
| [[RecipesApp2]] | Gestor de recetas: crear, buscar, ordenar y ver detalle | Kotlin + **Jetpack Compose**, **MVVM** por capas (data/domain/ui), **Room**, DataStore, Navigation Compose tipada, kotlinx.serialization |
| [[HelloFormCompose]] | El saludador en Compose, con `rememberSaveable` y extras (botón desactivado, ocultar teclado, contador de 20 caracteres): 10/10 | Kotlin + Jetpack Compose |
| [[HelloFormExpo]] | El mismo formulario en Expo, con feedback háptico y degradados | Expo + React Native + TypeScript |

## Patrones
- **El mismo ejercicio en tres tecnologías** (XML → Compose → Expo): sirve para comparar el paradigma imperativo (vistas XML) con el declarativo (Compose y React Native).
- **RecipesApp2** es un trabajo **en equipo** con Aaron Perdomo Fulgencio y Diego Arbelo González, el mismo equipo que [[GitHub - Aularis|Aularis]]. Su README es una "guía de estudio para la presentación".

## Conexiones
- [[GitHub - Aularis]] (mismo equipo y mismo curso).
- **UNED**:
  - [[Diseño del Software]]: MVVM, repositorio y separación en capas en RecipesApp2.
  - [[Sistemas de Bases de Datos]]: Room/SQLite.
  - [[Teoría de los Lenguajes de Programación]]: UI imperativa frente a declarativa; Kotlin frente a TypeScript.
  - [[Estrategias de Programación y Estructuras de Datos]].
