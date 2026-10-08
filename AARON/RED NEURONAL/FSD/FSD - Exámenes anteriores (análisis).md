---
tags: [red-neuronal, fsd]
actualizado: 2026-10-07
---

# FSD — Análisis de los exámenes anteriores (test)

Fuente: página de Ágora *Convocatorias anteriores: Enunciados. Soluciones de preguntas de test*. Los descargué el 2026-10-07 en `UNED/AÑO 1/CUATRIMESTRE 1/FUNDAMENTOS DE SISTEMAS DEGITALES/EXAMENES ANTERIORES/`: 41 archivos HTML (ene 2011 - sep 2026; las figuras van dentro del HTML y hay un botón para mostrar las soluciones) y `Respuestas test exámenes 2011-2019.pdf`. Texto plano (sin figuras) para buscar: `AARON/RED NEURONAL/FSD/_banco_test_FSD.txt`. Índice: [[FSD - Índice]].

## Qué cae (326 preguntas clasificadas por palabras clave)
| Tema del programa | Total | Antes de 2020 | Desde 2020 |
|---|---|---|---|
| T5 Biestables y autómatas (cronogramas, diagramas de transición, matriz funcional, excitación con D/JK) | 74 | 37 | 32 |
| T1 Boole, funciones, NAND/NOR, Karnaugh (y circuitos de puertas) | 83 | 30 | 49 |
| T3 MUX/DEMUX, decodificadores, codificadores con prioridad, 7 segmentos | 41 | 11 | 26 |
| T2 Aritmética binaria (C-1, C-2, S-M, BCD), sumadores/restadores, comparadores, paridad | 35 | 21 | 12 |
| T8 Memorias (celdas SRAM NMOS/CMOS de 6 transistores, DRAM de 3 transistores, tablas de memorias) | 30 | 13 | 15 |
| T4 Lógica programable (PROM, PAL, función universal) | 23 | 9 | 13 |
| T6 Contadores y registros (secuencias, divisores, síncrono/asíncrono) | 17 | 4 | 12 |
| T7 Temporizadores (555, astable/monoestable) | 4 | 4 | 0 |
| Sin clasificar (casi todo "¿qué función realiza este circuito?") | 19 | 6 | 12 |
La clasificación es aproximada: una pregunta de "cronograma" de un contador puede haber caído en T5.

**Conclusión**: el test gira en torno a **T1 + T5 + T3**. Después vienen T2, T8 y T4. T6 aparece cada vez más en preguntas de "qué secuencia recorre". **T7 casi no sale en el test**, aunque puede entrar en el problema de desarrollo, y la PEC 2 usa el 555. **T9 (FIFO/LIFO) no ha salido nunca en el test** y el T10 no entra.

## Formato
- Hasta 2019, 5 preguntas por examen (ene/feb/sep). Desde 2020 cada archivo trae más preguntas (10-26): parecen **bancos de modelos** de la misma convocatoria. La guía actual dice **5 preguntas de test + 1 de desarrollo**.
- Casi todas las preguntas son "¿qué circuito o cronograma corresponde?", con 4 opciones gráficas y **"Ninguna otra opción es verdadera"** como opción habitual.
- Penalización: cada fallo resta medio acierto; el test es **eliminatorio** (mínimo 4/10). Ver [[Fundamentos de Sistemas Digitales]].

## Tipos de pregunta que se repiten (para entrenar)
1. Función de un circuito de puertas, su forma solo con NAND o solo con NOR, o su negada/dual. Teoremas (adyacencia, distributiva).
2. Función a partir de un **cronograma** de entradas y salida (2025-26).
3. **Decodificador 3 a 8 + puertas** → expresión. **Decodificador BCD a 7 segmentos**: qué segmentos se encienden (feb 2026).
4. **Codificador con prioridad**: orden de prioridades o expresiones de salida.
5. **MUX** para implementar funciones, MUX 8:1 hecho con MUX 4:1 con habilitación; **detector de paridad** par/impar.
6. Números: −3 en S-M, C-1 y C-2; 31 en binario, C-2 y BCD; **sumas y restas en C-1/C-2 de 5 bits**.
7. Sumador/restador completo (expresiones de suma y acarreo), comparador de 2 bits, semisumador solo con NAND.
8. **PROM / PAL / función universal**: qué funciones realiza con una palabra de programación dada.
9. **Biestables**: cronograma de JK, D master-slave, RS básico/por niveles/por flanco; **tabla de síntesis JK** (0→0: 0x; 0→1: 1x; 1→0: x1; 1→1: x0); un JK hecho con un D.
10. **Autómatas**: circuito con D → diagrama de transición; matriz funcional ↔ diagrama; funciones de excitación de los D.
11. **Contadores**: síncrono de 4 bits, divisor por 5, secuencia que recorre un circuito con todo inicializado a 1 (feb 2026: 7, 2, 5, 4…), registro de desplazamiento.
12. **Memorias**: escribir o leer en una celda SRAM NMOS/CMOS (tensiones en BS, BL y BL̄ y qué transistores conducen), celda DRAM de 3 transistores (Din, RS, WS y el condensador), tabla de verdad de una memoria de 2 bits o de una celda hecha con un JK.
13. 555: cronograma de un astable + monoestable que se dispara en las bajadas (2013-2014).

## Cómo usarlo con Aaron
- Para preparar el test: hacer por tema las preguntas del HTML con las soluciones ocultas y luego mostrarlas.
- Antes de cada sesión de YouTube del equipo docente (ver [[Calendario]]) se publica el ejercicio en el foro: suelen ser problemas de desarrollo.
- Problemas de desarrollo de examen: **no están en el curso virtual**. La FAQ A06 remite al "Depósito de Exámenes UNED Calatayud" (repositorio externo).
