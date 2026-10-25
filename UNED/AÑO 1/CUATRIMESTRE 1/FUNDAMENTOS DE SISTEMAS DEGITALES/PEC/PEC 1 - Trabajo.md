---
tipo: pec
asignatura: FSD
enunciado: PEC1-079
entrega: 2026-11-27
estado: en curso
tags: [fsd, pec]
---

# PEC 1 (FSD) · Cuaderno de trabajo

Enunciado: [[PEC1-079.pdf]] (también en `PEC1-079.docx`, el que se entrega relleno). Entrega **antes del sáb 28 nov 2026**, solo por el curso virtual. Rúbrica completa en [[FSD - Curso virtual (FAQ, PEC, erratas)#PEC 1: rúbrica y recomendaciones (leído en Ágora el 2026-10-23)|rúbrica]].

> [!info] Para qué es esta nota
> Aquí se va guardando lo que Aaron resuelve (y lo que Jarvis le explica) mientras hace la PEC. Al final se pasa al Word.

## Enunciado en corto
Tres señales **P2, P1, P0** con prioridad **P1 > P2 > P0**. Hay que diseñar un **codificador con prioridad** que controle una **ALU SN74181** de 4 bits:

| Gana | Operación |
|---|---|
| P1 | F = A ⊕ B (lógica) |
| P2 | F = (A + B) PLUS (A·B̄) PLUS 1 (aritmética con acarreo) |
| P0 | F = A PLUS B (aritmética sin acarreo) |
| Ninguna (000) | F = 1 |

Verificación final: P = 011, 111, 100, 101 · A = 0001 · B = 1110.

Apartados del documento: (5) diseño de cada bloque (tabla de verdad, expresiones y explicación) · (6) simulación de cada bloque (esquema, cronograma y verificación) · (7) parámetros de los generadores de pulsos · (8) circuito completo · (9) comentarios y dificultades.

## Rúbrica en una línea
Diseño **4** (si está mal, 0 en toda la PEC) · simulación **2,5** · verificación **3** (2 por justificar bien) · documento **0,5**.

## Bloque 3 · La ALU SN74181
Tabla de funciones: **fig. 5.23** del libro (p. impresa 292, visor 286), lógica positiva.

- **M = H** → modo lógico (bit a bit, sin acarreos; C̄n no influye).
- **M = L** → modo aritmético: C̄n = H sin acarreo, C̄n = L con acarreo ("PLUS 1"). C̄n va **negado**.
- En la tabla, **"+" es OR** y **PLUS es suma**.

Valores de control, **sacados por Aaron de la fig. 5.23** (2026-10-23):

| Gana | Operación | S3 | S2 | S1 | S0 | M | C̄n |
|---|---|---|---|---|---|---|---|
| P1 | A ⊕ B | 0 | 1 | 1 | 0 | 1 | X |
| P2 | (A + B) PLUS AB̄ PLUS 1 | 0 | 1 | 0 | 1 | 0 | 0 |
| P0 | A PLUS B | 1 | 0 | 0 | 1 | 0 | 1 |
| Ninguna | F = 1 | 1 | 1 | 0 | 0 | 1 | X |

X = da igual (modo lógico). Se puede fijar al valor que simplifique el circuito; justificarlo en el documento (cuenta para "diseño mínimo").

## Bloque 1 · Codificador con prioridad (P1 > P2 > P0)

### Paso 1 · ¿Quién gana? (hecho por Jarvis el 2026-10-23) #revisar

| P2 | P1 | P0 | Gana | Por qué |
|---|---|---|---|---|
| 0 | 0 | 0 | ninguna | ninguna activa → F = 1 |
| 0 | 0 | 1 | P0 | solo P0 activa |
| 0 | 1 | 0 | P1 | solo P1 activa |
| 0 | 1 | 1 | P1 | P1 > P0 |
| 1 | 0 | 0 | P2 | solo P2 activa |
| 1 | 0 | 1 | P2 | P2 > P0 |
| 1 | 1 | 0 | P1 | P1 > P2 |
| 1 | 1 | 1 | P1 | P1 es la de más prioridad |

Resumen: **P1 gana siempre que está a 1** (4 filas); **P2** gana si P1 = 0 y P2 = 1 (2 filas); **P0** solo con 001; **ninguna** con 000.

### Paso 2 · Valores de control en cada fila (rellenado por Jarvis a petición de Aaron, 2026-10-23) #revisar
En cada fila se copian los 6 valores del ganador (tabla de la ALU de arriba). Es la **tabla de verdad completa del bloque de control**: entradas P2 P1 P0, salidas S3 S2 S1 S0 M C̄n.

| P2 | P1 | P0 | Gana | S3 | S2 | S1 | S0 | M | C̄n |
|---|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | ninguna | 1 | 1 | 0 | 0 | 1 | X |
| 0 | 0 | 1 | P0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | P1 | 0 | 1 | 1 | 0 | 1 | X |
| 0 | 1 | 1 | P1 | 0 | 1 | 1 | 0 | 1 | X |
| 1 | 0 | 0 | P2 | 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | P2 | 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | P1 | 0 | 1 | 1 | 0 | 1 | X |
| 1 | 1 | 1 | P1 | 0 | 1 | 1 | 0 | 1 | X |

#### Por qué cada fila es así (explicación de Jarvis, 2026-10-23) #revisar
Cada fila responde a dos preguntas: **quién gana** (prioridad) y **qué necesita la ALU** para ese ganador (fig. 5.23).

**1. Quién gana.** Regla P1 > P2 > P0: si hay varias a 1, manda la de más rango (P1 es el jefe, P2 el segundo, P0 el último).
- **Si P1 = 1, gana P1 siempre** (filas 010, 011, 110, 111), pase lo que pase con las otras.
- Si P1 = 0, se mira P2: si P2 = 1 gana P2 (filas 100 y 101; en la 101 también está P0, pero P2 > P0).
- P0 solo gana cuando está sola (001).
- Con 000 no hay nadie a 1 → ninguna.

**2. Qué valores necesita la ALU.** No se calculan: se leen en la fig. 5.23. La operación da la **fila** (S3-S0) y su tipo da la **columna** (M y C̄n).
- **P1 → F = A ⊕ B**: XOR es **lógica** → M = 1; en la columna lógica está en la fila S = 0110; C̄n = X porque en modo lógico no hay sumas ni acarreo.
- **P2 → F = (A + B) PLUS AB̄ PLUS 1**: lleva PLUS → **aritmética**, M = 0; fila S = 0101; lleva "PLUS 1" → hay que meter acarreo, y como C̄n va **negado**, eso es C̄n = 0.
- **P0 → F = A PLUS B**: suma → **aritmética**, M = 0; fila S = 1001; **sin** "PLUS 1" → sin acarreo → C̄n = 1.
- **Ninguna → F = 1**: "todo unos" es una función **lógica** → M = 1; fila S = 1100; C̄n = X.

**La idea de fondo**: bloque 1 (codificador) decide quién manda → bloque 2 (control) lo traduce a las 6 patillas de la ALU → bloque 3 (ALU) opera. En el documento, cada fila se justifica con «gana X porque…» y «la ALU necesita estos valores porque en la fig. 5.23…» (es lo que puntúa en *explicar el diseño*).

#### Por qué la ALU necesita justo esos S, M y C̄n (explicación de Jarvis, 2026-10-23) #revisar
> [!warning] Fuente
> Esto **no viene del libro** (la fig. 5.23 solo da la tabla): es el funcionamiento interno de la SN74181 según su hoja de características (Texas Instruments). Se ha comprobado que reproduce las filas de la fig. 5.23 que usamos.

Por dentro, en cada bit i la 74181 fabrica **dos operandos** a partir de Aᵢ y Bᵢ, y las patillas S **encienden o apagan** trozos de cada uno:
- **Operando 1 = A + (B · S0) + (B̄ · S1)** → S0 añade «OR B», S1 añade «OR B̄».
- **Operando 2 = (A · B̄ · S2) + (A · B · S3)** → S2 añade «AB̄», S3 añade «AB».

Luego:
- **M = L (aritmético)**: F = Operando 1 **PLUS** Operando 2 (PLUS 1 si C̄n = L). Los acarreos pasan de bit a bit.
- **M = H (lógico)**: M **corta los acarreos entre bits**; cada bit sale solo: Fᵢ = NOT(Op1ᵢ ⊕ Op2ᵢ).

Con esto salen nuestras cuatro filas:

| S3 S2 S1 S0 | Operando 1 | Operando 2 | Modo | Resultado |
|---|---|---|---|---|
| 1 0 0 1 (P0) | A + B | AB | M = L, C̄n = H | (A+B) PLUS AB = **A PLUS B** (OR + AND de dos bits = su suma) |
| 0 1 0 1 (P2) | A + B | AB̄ | M = L, C̄n = L | **(A+B) PLUS AB̄ PLUS 1** (directo, es la propia fórmula) |
| 0 1 1 0 (P1) | A + B̄ | AB̄ | M = H | NOT((A+B̄) ⊕ AB̄) = **A ⊕ B** (comprobado con las 4 combinaciones de A y B) |
| 1 1 0 0 (ninguna) | A | AB̄ + AB = A | M = H | NOT(A ⊕ A) = NOT(0) = **1** |

Comprobación de la fila P1 (para el documento):

| A | B | Op1 = A + B̄ | Op2 = AB̄ | Op1 ⊕ Op2 | F = NOT(…) | A ⊕ B |
|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 1 | 0 | 0 ✓ |
| 0 | 1 | 0 | 0 | 0 | 1 | 1 ✓ |
| 1 | 0 | 1 | 1 | 0 | 1 | 1 ✓ |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 ✓ |

##### Comprobación de las cuatro filas (Jarvis, 2026-10-23) #revisar
Por bit (A y B de 1 bit). En los aritméticos, Cₒ es el acarreo que sale hacia el bit siguiente.

**P0 · S = 1001, M = 0, C̄n = 1 → A PLUS B**

| A | B | Op1 = A + B | Op2 = AB | Op1 PLUS Op2 | Cₒ | A PLUS B |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 ✓ |
| 0 | 1 | 1 | 0 | 1 | 0 | 1 ✓ |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 ✓ |
| 1 | 1 | 1 | 1 | 0 | 1 | 10 ✓ |

**P2 · S = 0101, M = 0, C̄n = 0 → (A + B) PLUS AB̄ PLUS 1**

| A | B | Op1 = A + B | Op2 = AB̄ | Op1 PLUS Op2 PLUS 1 | Cₒ |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 1 |

(Op1 y Op2 son exactamente los dos términos de la fórmula; el +1 lo pone C̄n = 0.)

**P1 · S = 0110, M = 1 → A ⊕ B**: tabla de arriba.

**Ninguna · S = 1100, M = 1 → F = 1**

| A | B | Op1 = A | Op2 = AB̄ + AB = A | NOT(Op1 ⊕ Op2) |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 ✓ |
| 0 | 1 | 0 | 0 | 1 ✓ |
| 1 | 0 | 1 | 1 | 1 ✓ |
| 1 | 1 | 1 | 1 | 1 ✓ |

**Comprobación exhaustiva**: con un script se probaron las 256 combinaciones de A y B de 4 bits en los cuatro casos y el modelo da siempre la operación pedida.

**Resultados esperados con las palabras de la PEC** (A = 0001, B = 1110), para comparar luego con el cronograma del simulador:

| P2 P1 P0 | Gana | Op1 | Op2 | F3-F0 esperado | Cₙ₊₄ |
|---|---|---|---|---|---|
| 011 | P1 | 0001 | 0001 | **1111** (A ⊕ B) | — |
| 111 | P1 | 0001 | 0001 | **1111** (A ⊕ B) | — |
| 100 | P2 | 1111 | 0001 | **0001** (1111 + 0001 + 1 = 1 0001) | 1 |
| 101 | P2 | 1111 | 0001 | **0001** | 1 |

> [!note] Cₙ₊₄ es el acarreo «de verdad»; en la patilla real de la 74181 puede salir negado. Comprobarlo en el simulador.

### Paso 3 · Minimizar (hecho por Jarvis a petición de Aaron, 2026-10-23) #revisar
6 funciones de 3 variables (P2, P1, P0), cada una con su Karnaugh. Filas = P2; columnas = P1 P0 en orden Gray (00, 01, 11, 10). X = indiferente (se usa como 1 si ayuda a agrupar; nunca un grupo solo de X).

**S3** · 1 en 000 y 001

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 |

Un grupo de 2 (P2 = 0, P1 = 0) → **S3 = P̄2 · P̄1 = NOT(P2 + P1)** (una sola NOR).

**S2** · 0 solo en 001

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Tres grupos de 4 (fila P2 = 1, columnas P1 = 1, columnas P0 = 0) → **S2 = P2 + P1 + P̄0**. (Visto por los ceros: S̄2 = P̄2 P̄1 P0, así que S2 = NAND(P̄2, P̄1, P0).)

**S1** · 1 en 010, 011, 110, 111

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |

Un grupo de 4 (P1 = 1) → **S1 = P1** (un cable, sin puertas).

**S0** · 1 en 001, 100, 101

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

Dos grupos de 2 (P2 P̄1: 100-101; P̄1 P0: 001-101) → **S0 = P2 P̄1 + P̄1 P0 = P̄1 · (P2 + P0)**.

**M** · 0 en 001, 100, 101

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |

Grupo de 4 (P1 = 1) + grupo de 2 (P̄2 P̄0: 000-010) → **M = P1 + P̄2 P̄0**. Además, **M es justo el complemento de S0** (M = 0 exactamente donde S0 = 1) → **M = S̄0**: basta un inversor a la salida de S0.

**C̄n** · 1 en 001, 0 en 100 y 101, X en el resto

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | X | 1 | X | X |
| 1 | 0 | 0 | X | X |

Usando las X, un grupo de 4 en la fila P2 = 0 → **C̄n = P̄2** (un inversor). Por eso conviene dejar C̄n como X en modo lógico: si se fijara a 1, saldría una expresión más larga.

#### Resumen de expresiones mínimas

| Salida | Expresión mínima | Puertas |
|---|---|---|
| S3 | P̄2 · P̄1 | 1 NOR de 2 (7402) |
| S2 | P2 + P1 + P̄0 | OR de 3 (o NAND de 3 de P̄2, P̄1, P0) |
| S1 | P1 | ninguna (cable) |
| S0 | P̄1 · (P2 + P0) | 1 OR (7432) + 1 AND (7408) |
| M | S̄0 | 1 inversor (7404) |
| C̄n | P̄2 | 1 inversor (7404) |

Inversores necesarios: P̄2, P̄1, P̄0 (o los que pida la versión elegida). **No usar puertas open collector.**

> [!check] Decisión: **opción B** (elegida por Aaron el 2026-10-23). La opción A de arriba queda como alternativa estudiada: sirve para justificar en el documento por qué se eligió B.
> El enunciado dice «diseñe el **circuito codificador con prioridad** y úselo para controlar la ALU». Hay dos maneras de plantearlo:
> - **A · Directo** (lo de arriba): P2 P1 P0 → S3-S0, M, C̄n en un solo bloque. Es lo mínimo en puertas.
> - **B · Dos bloques**: primero un codificador con prioridad que da un código de 2 bits con el ganador (Y1 Y0) y luego el control de la ALU a partir de ese código (ver paso 4). Usa más puertas, pero se ve el codificador como bloque aparte, que es como lo pide el enunciado y la rúbrica («para cada uno de los bloques…»).
> Si hay dudas, se puede confirmar con el tutor de FSD (tutoría del **mié 28, 20:00**).


### Paso 4 · Opción B: codificador con prioridad + control de la ALU (Jarvis, 2026-10-23) #revisar

#### Bloque 1 · Codificador con prioridad (P2 P1 P0 → Y1 Y0)
Sale un **código de 2 bits** con el ganador. Se asigna el código por **rango de prioridad** (cuanto más prioridad, más alto), así que es fácil de justificar:

| Ganador | Y1 Y0 |
|---|---|
| ninguna | 00 |
| P0 | 01 |
| P2 | 10 |
| P1 | 11 |

Tabla de verdad del codificador:

| P2 | P1 | P0 | Gana | Y1 | Y0 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | ninguna | 0 | 0 |
| 0 | 0 | 1 | P0 | 0 | 1 |
| 0 | 1 | 0 | P1 | 1 | 1 |
| 0 | 1 | 1 | P1 | 1 | 1 |
| 1 | 0 | 0 | P2 | 1 | 0 |
| 1 | 0 | 1 | P2 | 1 | 0 |
| 1 | 1 | 0 | P1 | 1 | 1 |
| 1 | 1 | 1 | P1 | 1 | 1 |

**Y1** (1 en todas menos 000 y 001)

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Grupo de 4 en la fila P2 = 1 + grupo de 4 en las columnas P1 = 1 → **Y1 = P2 + P1** (una OR).

**Y0** (1 en 001, 010, 011, 110, 111)

| P2 \ P1P0 | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |

Grupo de 4 (P1 = 1) + grupo de 2 (P̄2 P0: 001-011) → **Y0 = P1 + P̄2 · P0** (inversor + AND + OR).

#### Bloque 2 · Control de la ALU (Y1 Y0 → S3 S2 S1 S0 M C̄n)

| Y1 | Y0 | Gana | S3 | S2 | S1 | S0 | M | C̄n |
|---|---|---|---|---|---|---|---|---|
| 0 | 0 | ninguna | 1 | 1 | 0 | 0 | 1 | X |
| 0 | 1 | P0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | P2 | 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | P1 | 0 | 1 | 1 | 0 | 1 | X |

Con 2 variables se ve directamente (o con un Karnaugh de 2 × 2):

| Salida | Expresión | Por qué | Puerta |
|---|---|---|---|
| S3 | **Ȳ1** | 1 solo cuando Y1 = 0 | inversor (7404) |
| S2 | **Y1 + Ȳ0** | 0 solo en 01 | inversor + OR (7432) |
| S1 | **Y1 · Y0** | 1 solo en 11 | AND (7408) |
| S0 | **Y1 ⊕ Y0** | 1 en 01 y 10 | XOR (7486) |
| M | **NOT(Y1 ⊕ Y0) = S̄0** | 1 en 00 y 11 | inversor sobre S0 |
| C̄n | **Y0** | 1 en 01, 0 en 10; en 00 y 11 es X | ninguna (cable) |

C̄n = Y0 sale gratis gracias a las X (también valdría Ȳ1, pero gastaría un inversor).

#### Bloque 3 · ALU SN74181
A3-A0 y B3-B0 a la ALU; S3-S0, M y C̄n desde el bloque 2.

#### Comprobación
Script: para las 8 combinaciones de P2 P1 P0, el bloque 1 da el código correcto y el bloque 2 da los 6 valores de control de la tabla del paso 2 (las X no se comparan). Todo correcto.

#### Por qué B (para el apartado «tipo de diseño»)
- El enunciado pide **diseñar el codificador con prioridad y usarlo** para controlar la ALU: con B el codificador es un bloque propio, que se diseña, simula y verifica por separado (como piden los apartados 5 y 6 y las recomendaciones del equipo docente).
- Separar «quién gana» de «qué operación hace la ALU» deja cada bloque pequeño y fácil de comprobar; si cambiara la prioridad, solo cambia el bloque 1.
- Coste: unas pocas puertas más que el diseño directo (opción A del paso 3), que queda como alternativa estudiada.
- Cada bloque está minimizado por Karnaugh y aprovecha las indiferencias (C̄n = Y0, M = S̄0).

## Pendiente
- [x] Paso 2: completar la tabla de 8 filas con los valores de control
- [x] Paso 3: Karnaugh y expresiones mínimas
- [x] Decidir diseño A o B → **B** (Aaron, 2026-10-23)
- [ ] Opcional: confirmar con el tutor de FSD que la opción B está bien planteada [fecha:: 2026-10-28]
- [ ] Simular cada bloque por separado
- [ ] Circuito completo y verificación con P = 011, 111, 100, 101
- [ ] Pasar todo al Word y entregar [fecha:: 2026-11-27]
