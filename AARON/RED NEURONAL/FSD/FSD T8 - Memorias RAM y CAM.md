---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 11 (PDF 572-630)
aprendido: 2026-10-07
---

# FSD T8 — Memorias RAM y CAM

Capítulo 11 del libro. Sale con frecuencia en el test, sobre todo **escritura y lectura en celdas** (tensiones y qué transistores conducen). Las tablas paso a paso de las celdas CMOS/NMOS están en [[FSD - Curso virtual (FAQ, PEC, erratas)]] (P+F T8). Las no volátiles (EPROM, FLASH) están en [[FSD T4 - Lógica combinacional programable]] y las secuenciales en [[FSD T9 - Memorias de acceso secuencial]]. Índice: [[FSD - Índice]].

## Clasificación (fig. 11.1)
Memorias de lectura/escritura (RWM): **no volátiles** (EEPROM, FLASH) y **volátiles** (usan biestables o condensadores): de **acceso aleatorio** (**SRAM**: menos densidad, más rápidas; **DRAM**: más densidad, más lentas; síncronas o asíncronas, por ráfagas, páginas, EDO…), de **acceso por contenido (CAM)** y de **acceso secuencial (FIFO, LIFO)**. En una RAM el tiempo de acceso es el mismo para cualquier posición.

## SRAM: organización
- Una celda R-S por bit; con k bits de dirección hay 2^k palabras. En vez de un decodificador k → 2^k se usa una **matriz**: unos bits seleccionan la **fila (línea de palabra, WL)** y el resto la **columna (línea de bit, BL)**. Ejemplos: Intel 2147H (64×64×1), 256×128×8.
- **CY7C109 (Cypress)**: 512 filas × 256 columnas × 8 bits = 131.072 palabras de 8 bits (A0-A8 filas, A9-A16 columnas, I/O0-I/O7 bidireccionales con buffers de tres estados). Control (fig. 11.5):

| C̄E₁ | CE₂ | ŌE | W̄E | I/O | Modo |
|---|---|---|---|---|---|
| H | x | x | x | alta Z | bajo consumo (standby) |
| x | L | x | x | alta Z | bajo consumo |
| L | H | L | H | salida de dato | **lectura** |
| L | H | x | L | entrada de dato | **escritura** |
| L | H | H | H | alta Z | seleccionada con salidas inhibidas |

- Bajo consumo ("power down"): de 770 mW a 165 mW. Parámetros: t_RC = t_WC (ciclo; 20 ns), **t_AA** (dirección válida → dato válido), t_ACE, t_DOE, t_LZOE, t_HZOE, t_SCE, t_SA, t_AW, t_SD, t_HD…
- Evolución: **SRAM síncronas** (registros en direcciones, datos y control; todo ocurre en los flancos; algunas usan los dos flancos) y **por ráfagas** (un contador interno genera las direcciones siguientes a partir de A0 y A1; en la CY7C178 con 00 → 01 → 10 → 11, en orden distinto según la dirección inicial); bus ancho, arquitecturas divididas, BiCMOS/AsGa/ECL, cachés.

## Celdas SRAM
- **Bipolar multiemisor** (fig. 11.9): Q₁ y Q₂ realimentados; un emisor de cada uno a WL (0,3 V en reposo, 3 V seleccionada). "1" significa Q₁ conduciendo. Escribir un 1: BL = 0 V y B̄L = 3,5 V. Lectura: el emisor del transistor que conduce da corriente a su línea y un amplificador diferencial la detecta. Es rápida (cachés, < 5 ns) pero tiene baja impedancia, así que se añaden diodos **Schottky** (SBD-SRAM, WL₁ y WL₂ dobles).
- **NMOS de 6 transistores** (fig. 11.12): Q₁ y Q₂ biestable, **Q₃ y Q₄ cargas** (NMOS de realce con las puertas a V_DD) y **Q₅ y Q₆ puertas de transmisión** controladas por WL. **"1" significa Q₁ conduciendo y Q₂ cortado.** Leer: V_DD = 12 V en WL → Q₅ y Q₆ conducen → con un 1 almacenado sale **12 V en BL y 0 V en B̄L**. Escribir un 1: BL = 12 V y **B̄L = 0 V** (Q₁ conduce por Q₆; el drenador de Q₁, el punto A, va a 0 y Q₂ se corta). Con WL = 0 la celda queda aislada (Q₅ y Q₆ cortados).
- **NMOS de 4 transistores con carga resistiva R_L** (fig. 11.13): más pequeña. La R tiene que ser lo bastante alta (consumo y ruido) y lo bastante baja (velocidad); se mitiga con **precarga de las líneas de bit a V_DD**.
- **CMOS de 6 transistores** (cargas Q₃ y Q₄ de canal P): ver la tabla de las P+F (escribir un 1: WL = 12 V, BL = 12 V, B̄L = 0 V → Q₁ y Q₄ conducen; Q₂ y Q₃ no).
- **Amplificadores sensores diferenciales** (fig. 11.14, con PMOS Q₅ y Q₆ en realimentación positiva, NMOS Q₇ y Q₈ y SE): aprovechan que la salida es diferencial (BL/B̄L), rechazan el modo común y uno sirve para varias columnas.

## DRAM
- La información es **carga en un condensador**: hace falta **refresco** periódico (fugas) y la **lectura es destructiva** (hay que reescribir). A cambio, mucha densidad y poco consumo.
- Evolución de la celda: 4 transistores (C₁ y C₂ de puerta; un ciclo de refresco lee y reescribe) → **3 transistores** (fig. 11.16: escritura por WS(Φ₂) con Din, lectura por RS con Dout **precargada** a V_DD por Q₁ y Q₂; la celda es **inversora**: en Dout sale el inverso del dato) → **1 transistor + condensador** (fig. 11.17).
- **Celda de 1 transistor**: escribir = activar WL y poner el dato en BL (C se carga o se descarga). Leer = precargar BL a V_PRE y activar WL: la carga se reparte entre C_I y C_BL, **ΔV = (V_BIT − V_PRE)·C_I/(C_I + C_BL)**, que es muy pequeño (unos 250 mV) porque **C_I ≪ C_BL**. Hace falta un amplificador (contra una **V_ref** intermedia, con celdas de referencia) y restaurar la carga.
- Pregunta típica de examen (ene 2013, celda de 3 transistores): para escribir un 1, **Din = 1, RS = 0, WS = 1**; quedan Q₃ conduciendo, Q₄ no, Q₅ conduciendo y **C cargado**.
- **Organización (DRAM de 4M×1)**: matriz de 1024 × 4096; **direcciones multiplexadas** (la mitad de terminales: primero la fila y luego la columna) con **R̄AS** (Row Address Strobe, activa en baja, carga la fila) y **C̄AS** (Column Address Strobe, la columna); W̄E controla lectura/escritura; un contador de refresco. 22 bits de dirección para 4M. Ciclo de lectura: t_RC, t_RAS, t_CAS, t_RCD, t_ASR, t_RAH, t_ASC, t_CAH, t_RAC, t_CAC, t_AA… (fig. 11.21). Ciclo de escritura: el dato tiene que estar antes de la bajada de C̄AS (t_DS).
- Mejoras: más líneas de E/S (1M×16 en 16 matrices), **modo página** (R̄AS se mantiene en baja y solo se cambia C̄AS para recorrer las columnas de una fila), **modo página rápido**, **EDO** (Extended Data Out: el dato sigue válido aunque C̄AS suba), **ráfaga**, **DRAM síncronas con bancos múltiples** (registros y reloj del sistema; mientras un banco lee, otro precarga o refresca).

## CAM (memoria asociativa o direccionable por contenido)
- Se escribe como una RAM, pero **se lee por contenido**: un **comparando** (filtrado por una **máscara** = patrón o clave) se compara **en paralelo** con todas las palabras; el **registro de coincidencias** marca las que coinciden y un **codificador de prioridad** da la dirección (si hay varias, primero la menor). Usos: cachés asociativas, búsquedas rápidas, redes y bases de datos.
- Comparador de un bit (fig. 11.24): **XNOR** (bit de la CAM con bit del comparando) y luego una **NOR con el bit de la máscara**; la salida va a un transistor de **AND cableado** en la línea de coincidencia (match line, ML, en alta si coinciden todos los bits no enmascarados). Hay "match" cuando los bits coinciden o la máscara dice que ese bit no importa.
- **Celda CAM CMOS** (fig. 11.27): una SRAM de 6 transistores + **4 transistores** (Q₇-Q₁₀) que hacen la XOR con BL/B̄L y descargan la línea MATCH (precargada en alta) si no coincide.
- Ejemplos: **Am99C10A** (256 palabras de 48 bits; MTCH, FULL, D/C̄, W̄, Ḡ, Ē; bits S y E de skip/empty); **LANCAM B** de Music Semiconductors (1K-8K palabras de 64 bits, bus de 16, comparación en 50 ns; W̄ y C̄M seleccionan escritura o lectura de comandos o de datos; MF, MI, MA, MM, FF y FI para conectarlas en cascada; estados válida, vacía, omitida o RAM).

## Problemas del capítulo
E.11.1 tabla de verdad de una celda R-S NMOS · E.11.2 evolución de BL, B̄L y WL en la celda bipolar (almacena 0, escribe 1, lee y escribe 0) · E.11.3 cronograma de la celda NMOS de la fig. 11.12 · E.11.4 proponer una celda SRAM CMOS · E.11.5 RAM mínima de 2 biestables R-S con preset y clear (selección, direccionamiento, lectura y escritura con AND, OR y NOT) · E.11.6 RAM de 4096×1 en una matriz de 64×64 (selector de filas A0-A5, contador para recorrer, escribir unos y ceros en rangos de direcciones).
