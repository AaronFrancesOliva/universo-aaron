---
tipo: plan
tags: [jarvis, plan, revisar]
creado: 2026-10-21
estado: en marcha
---

# Plan JARVIS v2: el HUD con código de verdad

> [!info] Qué es
> Plan para rehacer el **núcleo** y el **modo UNED** como un plugin de Obsidian con componentes, una capa de datos común y Three.js. Aprobado por Aaron el 2026-10-21 (Svelte, `jarvis-hud`, empezar ya). Proyecto: [[jarvis-hud]].

## Dónde estamos
- Todo el HUD vive en `JARVIS/view.js` (**3.500 líneas, 211 KB**) + `view.css` (450 líneas) y se carga con `dv.view("JARVIS", { modo })`.
- El núcleo, la barra izquierda y la barra derecha son **tres ejecuciones** del mismo archivo. Cada una lee el vault por su cuenta y se refresca mirando cada X segundos.
- El universo se pinta en un **canvas 2D desde el procesador**, con una proyección 3D hecha a mano. Por eso consume tanto y cada animación nueva cuesta rendimiento.
- Los rollbacks son copias del archivo entero en `ARCHIVO/…antes-x`.
- Solo funciona en el PC.

## Principios
1. **El HUD actual no se toca hasta que el nuevo haga todo lo que hace el viejo.** Los dos conviven y se puede volver al viejo con un botón.
2. **Mismo diseño**: el agujero negro, JARVIS, las galaxias, la estación, el reloj orbital y las alertas se conservan. Cambia el motor, no la idea.
3. **Menos consumo**: es el objetivo principal del cambio de motor (preocupación de Aaron del 2026-10-08).
4. **Cada fase termina con algo que funciona** y Aaron lo prueba antes de seguir.

## Arquitectura
```
jarvis-hud (plugin de Obsidian, TypeScript)
├── datos/       lee el vault una sola vez y avisa cuando algo cambia
│                (Calendario, notas de tema, nota del día, Agenda, copia.log, notas de GITHUB y SISTEMAS)
├── dominio/     cálculos puros, con pruebas automáticas
│                (repasos, ritmo hasta el examen, cometas, alertas, salud de sistemas, semana en curso)
├── ui/          sistema de diseño (colores, marcos HUD, tipografía) + tarjetas
│   └── tarjetas/  briefing, tutoría, sistemas, repasos, semana, mapa de calor,
│                  prioridades, objetivos, ritmo, concentración, registro…
├── modos/       cada modo = una lista de tarjetas para la izquierda y otra para la derecha
│   └── uned.ts
└── nucleo/      escena 3D con Three.js
    └── universo, galaxias, estación, reloj orbital, alertas, menú
```

- **Dónde vive el código**: como el resto de proyectos, **fuera del vault**, en `C:\Users\PC\Documents\GitHubLocal\jarvis-hud`, con su repositorio y su nota en la galaxia GITHUB (sistema PERSONAL). Al compilar se copia `main.js` a `.obsidian/plugins/jarvis-hud/`.
- **Sin Dataview**: el plugin lee las propiedades con la API de Obsidian (`metadataCache`) y los `[fecha:: …]` del Calendario con su propio lector. Dataview sigue instalado para `00 - Panel (HOME)` y el HUD viejo.
- **Al momento**: cuando cambia una nota (por ejemplo, marcas una prioridad), la capa de datos avisa y solo se repintan las tarjetas afectadas, en el núcleo y en las barras a la vez.
- **Herramientas**: TypeScript, esbuild (la plantilla oficial de plugins), Three.js y Vitest para las pruebas del dominio.

## El modo UNED
| Hoy | Con v2 |
|---|---|
| Dos notas (`Modo UNED - Izquierda/Derecha`) con un bloque de Dataview | **Paneles nativos** de Obsidian: sin títulos ni propiedades que ocultar |
| Cada barra carga los 211 KB y lee el vault | Usan los datos ya leídos: se abren al instante |
| Las tarjetas están mezcladas con la galaxia | Cada tarjeta es un componente independiente |
| Para cambiar qué sale hay que tocar código | El modo es una lista: se reordenan u ocultan tarjetas desde los ajustes |
| Solo en el PC | Las tarjetas son HTML normal: **funcionan en el iPad** y podrían sustituir a `00 - Panel (HOME)` |

Modos futuros (GITHUB, GYM…) = otra lista de tarjetas reutilizando las que ya existen (agenda, ritmo, mapa de calor) con otros datos.

## Fases
| # | Fase | Qué se hace | Se da por terminada cuando… |
|---|---|---|---|
| 1 | **Base** | Repositorio, plantilla del plugin, capa de datos, dominio con pruebas y sistema de diseño | Los cálculos (repasos, ritmo, cometas, alertas) dan lo mismo que el HUD actual |
| 2 | **Modo UNED** | Las tarjetas de las dos barras como componentes en paneles nativos | Aaron usa el modo UNED nuevo una semana sin echar nada de menos |
| 3+4 | **Núcleo en Three.js** (juntas el 2026-10-21, decidido por Aaron: pasar primero a canvas 2D y luego a WebGL era hacer el trabajo dos veces) | Por partes: centro (AARON y JARVIS) → galaxia UNED → GITHUB y SISTEMAS → estación, cometas, alertas, menú y notas | Se ve igual que el viejo y consume menos (se **mide antes y después**, sin dar cifras inventadas) |
| 5 | **iPad** | Comprobar el modo UNED y el núcleo en la tablet y ajustar | Funciona en el iPad sin tirones |

Al final, el HUD viejo se archiva en `ARCHIVO/` (no se borra).

## Riesgos y cómo se cubren
- **Pérdida de funciones**: antes de la fase 1 se hace un inventario de todo lo que hace `view.js` y se marca cada punto al portarlo.
- **iPad**: Remotely Save no sincroniza `.obsidian`, así que en la tablet el plugin se instala a mano (como Dataview). Lo que solo existe en el PC (terminal, dictado con Win + H, modo JARVIS a pantalla completa) se activa solo en escritorio.
- **Tiempo**: no compite con el estudio. Las fases son cortas y se pueden parar en cualquier momento sin romper nada.

## Decisiones de Aaron
- [x] **Componentes**: Svelte (2026-10-21).
- [x] Nombre del plugin y del repositorio: `jarvis-hud` (2026-10-21).
- [x] Cuándo empezar: ya (2026-10-21).
- [ ] Crear el repositorio privado `jarvis-hud` en GitHub y hacer la primera subida (Claude no puede hacer `git push`).

## Diario de la obra
- **2026-10-21 · fase 1 hecha.** Plugin compilado e instalado en `.obsidian/plugins/jarvis-hud/` (sin activar). Capa de datos sin Dataview (lee el vault entero en ~130 ms), todo el dominio de `view.js` portado (calendario, progreso, repasos, ritmo, briefing, tutorías, semana, prioridades, mapa de calor, cometas, estación de copias, salud y alertas), sistema de diseño (`tema.css` + Panel, Estado y Barra) y **22 pruebas** que pasan, también contra el vault real. Comprobado con los datos de hoy: los cálculos coinciden con el HUD v1. Para verlo: activar *J.A.R.V.I.S. HUD* en *Complementos de la comunidad* y lanzar el comando *Abrir el diagnóstico de JARVIS v2*.
- **2026-10-21 · fase 2 hecha, en prueba.** Las 11 tarjetas del modo UNED como componentes Svelte en **paneles nativos** (barra izquierda: briefing, tutoría, estado de sistemas, repasos, semana y actividad; derecha: prioridades, objetivos, ritmo, concentración y registro), con el mismo aspecto que el v1. Comandos *Abrir / Cerrar el Modo uned (v2)*. En *Ajustes → J.A.R.V.I.S. HUD* cada tarjeta se puede ocultar, subir, bajar o pasar a la otra barra, y se ve al momento. Prioridades y objetivos se marcan desde el HUD y se escribe en la nota; el pomodoro comparte el estado con el v1. 29 pruebas. **Criterio para cerrarla:** Aaron usa el modo UNED v2 una semana sin echar nada de menos. El botón MODO UNED del HUD v1 sigue abriendo las barras viejas; se cambiará cuando se dé por buena.
- **2026-10-21 · núcleo en Three.js, parte 1: el centro.** Vista *JARVIS v2 · núcleo* (comando *Abrir el núcleo de JARVIS v2 (Three.js)*). Mismo diseño y orden de pintado que el v1: fondo de estrellas, cinta de nebulosa con nudos, ondas, disco azul, destello en cruz, **AARON** copiado capa a capa en shaders (halos, anillos de gravedad, lente, horizonte, anillo de fotones, disco de acreción por detrás y por delante) y la esfera de **JARVIS** (retícula, polvo, barrido, anillos de datos). El contorno, las marcas, los arcos, el **reloj orbital** y los rótulos van en un canvas 2D encima, como en el v1. Cámara con las cuentas del v1 (arrastrar, rueda, Ctrl +/−/0, doble clic) y vistas CENTRO, JARVIS y AARON. Medidor de FPS para comparar con el v1. Comprobado con capturas en un navegador sin ventana (`npm run visual`). Falta: las notas sobre la esfera y el disco, y el resto del universo.

#revisar
- **2026-10-21 · núcleo entero en Three.js, menú, alertas y modo JARVIS v2.** Aaron pidió terminar el universo entero y mantener el menú lateral. Hecho: las galaxias UNED, GITHUB y SISTEMAS (disco de estrellas, brazos, remolino del núcleo, soles con retícula, anillos y reactor, planetas con progreso o salud, órbitas, haces y puentes), las 12 nebulosas, los cometas, las conexiones, la **estación de copias en 3D de verdad** y las notas con sus enlaces. Interfaz: cabecera (reloj, semana, 🎙 HABLAR, **▶ EJECUTAR JARVIS**, MODO UNED), menú lateral estilo Stripe, centro de alertas, barra de información, zoom y medidor de FPS; ratón, WASD/QE y todas las vistas del v1. **Modo JARVIS v2**: núcleo v2 arriba, terminal abajo (reutilizada), barras del modo UNED v2. La nota [[JARVIS Núcleo]] usa ahora el bloque `jarvis` (la versión v1 está en `ARCHIVO/antes-jarvis-v2-2026-10-21/`). Comprobado con capturas reales en un navegador sin ventana y 30 pruebas. **Pendiente:** medir los FPS en el PC de Aaron frente al v1 y probarlo una semana; después, fase 5 (iPad).
- **2026-10-21 · arreglo: no se veían las barras del modo UNED.** Obsidian llama a `getViewType()` dentro del constructor de la vista, cuando `modo` y `lado` aún no existían: el error salía solo en la consola y la hoja quedaba como «complemento no disponible». Ahora cada barra es una subclase con modo y lado en el prototipo (`claseModo`), y los errores al crear vistas se apuntan en `registro.log`.
