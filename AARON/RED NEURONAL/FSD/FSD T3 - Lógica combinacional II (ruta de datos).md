---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 6 (PDF 301-341)
aprendido: 2026-10-07
---

# FSD T3 — Lógica combinacional (II): ruta de datos

Capítulo 6 del libro. Objetivos: (1) MUX como selector de canal (paralelo → serie) y como módulo de diseño; (2) DEMUX/decodificadores como selector de salida (serie → paralelo) y para convertir códigos; (3) buffers-drivers y transmisores-receptores de bus. Es uno de los temas que **más sale en el test** ([[FSD - Exámenes anteriores (análisis)]]). Anterior: [[FSD T2 - Lógica combinacional I (aritmética, sumadores, comparadores, ALU)]]. Índice: [[FSD - Índice]].

## Multiplexores (MUX, N a 1 con 2ⁿ = N líneas de control)
- Estructura AND-OR: cada AND recibe un dato y un **término mínimo de las variables de control**. **Y = [Σ Dᵢ·mᵢ]·Ḡ**, con el *strobe* (Ḡ) activo en baja: si Ḡ está en alta, Y = 0 (y W = 1 en el AS151, que tiene salida Y y su complemento W).
- Es la **forma canónica disyuntiva hecha circuito**, así que **un MUX de 2ⁿ entradas genera cualquier función de n+1 variables**: n variables a las líneas de control y la restante (o 0, 1, z, z̄) a las entradas de datos. Ejemplo: f(X,Y,Z) = X̄Ȳ + X̄YZ + XȲZ̄ + XYZ con MUX de 4 a 1 → D₀ = 1, D₁ = Z, D₂ = Z̄, D₃ = Z.
- Regla: (1) las variables de control representan dos variables cualesquiera de la función; (2) los Dᵢ toman valores en {0, 1, Z, Z̄}: 0 si ese producto no existe, 1 si existe sin Z, y Z o Z̄ si aparece con Z.
- **Diseño en dos niveles (árbol)**: para 5 variables con MUX de 4 a 1, (X,Y) controlan el MUX del segundo nivel; se saca factor común por los términos mínimos de (X,Y); cada paréntesis se sintetiza en el primer nivel con (U,V) de control y Z en los datos. Es un proceso iterativo.
- Con MUX **se minimiza por filas** del Karnaugh (ver [[FSD - Curso virtual (FAQ, PEC, erratas)]]).
- Integrados: SN74150 (16 a 1), SN74151 (8 a 1, dos estados), SN74251 (8 a 1, tres estados), SN74157 (2 a 1 cuádruple), SN74153 (4 a 1 doble, el de la actividad A.3.1.2) y 74857 (universal).

## Demultiplexores y decodificadores
- DEMUX 1 a 2ⁿ: una entrada y 2ⁿ salidas; cada configuración de las n líneas de control abre un canal. Lleva *strobe*. Ejemplo: SN74ALS156, dos DEMUX de 1 a 4 con direcciones comunes (A, B), *strobes* 1G y 2G individuales y datos 1C y 2C; funciona como decodificador de 2 a 4, de 3 a 8 o DEMUX 1 a 8. Salidas activas en baja.
- **Decodificador** = DEMUX usado como convertidor de código: n entradas → 2ⁿ salidas (cada salida es un término mínimo). Por eso **un decodificador + una OR sintetiza cualquier función**: se suman los términos mínimos que tienen 1.
- Integrados (fig. 6.10): 154 (4 a 16, tres estados), 159 (colector abierto), 42 (BCD a decimal), 43 (exceso-3 a decimal), 137 (3 a 8 con biestables), 139 (doble de 2 a 4), 141 (BCD a decimal, colector abierto), **246 y 7446-49 (BCD a 7 segmentos)**, **74138 (3 a 8)**.
- **BCD a decimal**: Dᵢ es el término mínimo de DCBA (D₀ = D̄C̄B̄Ā …, D₉ = DC̄B̄A). Las 6 combinaciones 1010-1111 no existen: se pueden usar como indiferentes o forzar todas las salidas en baja.
- **BCD a 7 segmentos (a-g)**: tabla de la fig. 6.13. Por ejemplo, segmento **ā = AB̄C̄D̄ + ĀC + BD** (con Karnaugh por ceros), es decir, a = (AB̄C̄D̄)‾·(ĀC)‾·(BD)‾ (NAND-NAND). El examen de feb 2026 preguntó qué segmentos se encienden para una secuencia de entradas: conviene **saberse la tabla**. Tabla del libro (fig. 6.13, estilo 7446): 0 → abcdef; 1 → bc; 2 → abdeg; 3 → abcdg; 4 → bcfg; 5 → acdfg; **6 → cdefg (sin a)**; 7 → abc; 8 → todos; **9 → abcfg (sin d)**; 10-15 dan símbolos raros. **Ojo**: el examen de feb 2026 adjunta su propia "codificación estándar", en la que el 9 sí lleva d (respuesta: t1 = 1001 → f, a, b, g, c, d). Hay que usar siempre la tabla que dé el enunciado.
- **Dos 74138 en cascada para 4 variables** (fig. 6.15): A, B y C a las entradas y **D al terminal de habilitación** (en baja habilita uno, en alta el otro, a través de un inversor) → 16 términos mínimos.

## Codificadores con prioridad
- Cuando puede haber varias entradas activas, se codifica **la de mayor prioridad**. Ejemplo con 4 líneas (P3 > P2 > P1 > P0) y salida y₁y₀ más R (hay petición): **y₁ = P₃ + P₂**; **y₀ = P₃ + P̄₂·P₁**; **R = P₃ + P₂ + P₁ + P₀**.
- Integrados: **SN74147** (9 líneas decimales → BCD, entradas y salidas **activas en baja**; el 0 se codifica con todas las entradas en alta), **SN74148** (8 → 3 octal, con EI/EO para conectarlos en cascada y GS como "hay alguna activa"), 348 (igual con tres estados) y 278.
- En el test se pide **deducir el orden de prioridad** viendo el circuito (feb 2026: A > B > C; sep 2014: P0 > P1 > P2).

## Buffers-drivers y transmisores-receptores de bus (entran en el examen: solo el concepto)
- **Driver de 3 estados**: entrada D, salida Y y control E: con E = 1, Y = D; con E = 0, **alta impedancia** (desconectado del bus). Amplifican la corriente, reconstruyen niveles y aíslan. Son **unidireccionales** (ALS760, con colector abierto).
- **Transceiver**: **bidireccional**, con señales Ḡ y DIR (ALS640-645). **ALS641**: Ḡ = 0 y DIR = 0 → datos de B a A; Ḡ = 0 y DIR = 1 → de A a B; Ḡ = 1 → aislamiento.
- **Gestión de acceso a un bus** con 4 fuentes (D3 > D2 > D1 > D0) y peticiones Rᵢ: un codificador de prioridad genera las habilitaciones **E₃ = R₃, E₂ = R̄₃R₂, E₁ = R̄₃R̄₂R₁, E₀ = R̄₃R̄₂R̄₁R₀** (fig. 6.21).
- **ALS646** (transceiver octal con registros): 4 modos controlados por Ḡ, DIR, CAB, CBA, SAB y SBA: paso directo de B a A o de A a B en tiempo real, almacenar A, B o los dos (en el flanco de subida de CAB/CBA) y transferir lo almacenado. Ḡ = H → aislamiento.

## Problemas del capítulo (resueltos en el libro de problemas)
E.6.1 funciones en dos niveles con MUX de 4 entradas · E.6.2 analizar un árbol de MUX (f3, f4) · E.6.3 convertidores BCD/exceso-3/Gray/decimal con MUX y DEMUX (tabla: exceso-3 = BCD + 3; Gray: los números adyacentes solo cambian un bit) · E.6.4 segmentos b, d, e, f con DEMUX 3 a 8 y con NAND. Hay erratas del libro de problemas en las figs. 6.1.2 y en la p. 224 (ver [[FSD - Curso virtual (FAQ, PEC, erratas)]]). Preparación de la evaluación: MUX 16 a 1 con MUX 4 a 1 en árbol, DEMUX 1 a 32 con 1 a 4 y 1 a 8, y analizar el SN74148 (EO, GS y la expansión a 16 líneas).
