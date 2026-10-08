---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 5 (PDF 251-300)
aprendido: 2026-10-07
---

# FSD T2 — Lógica combinacional (I): funciones aritmético-lógicas

Capítulo 5 del libro (pp. impresas ≈ 257-306; **página del PDF = página impresa − 6**). Objetivos: (1) aritmética binaria y representación de negativos, (2) sumadores y restadores (básicos, rápidos y rebose), (3) comparadores de n bits, (4) ALU SN74181. Índice: [[FSD - Índice]].

## Tipos de funciones combinacionales
(a) **Aritmético-lógicas** (sumadores, restadores, multiplicadores, operaciones bit a bit); (b) **ruta de datos** (MUX, DEMUX, transmisores-receptores de bus) → [[FSD T3 - Lógica combinacional II (ruta de datos)]]; (c) **cambiadores de código** (la ROM es el caso general). Los convertidores A/D y D/A no entran.

## Representación de números con signo (n bits: 2ⁿ⁻¹ positivos y 2ⁿ⁻¹ negativos)
- El **bit más significativo es el signo** (0 positivo, 1 negativo) en los tres sistemas.
- **S-M**: se cambia el bit de signo. Hay dos ceros (+0 = 0000 y −0 = 1000). Rango con 4 bits: −7…+7. Para sumar hace falta además un restador y comparadores, porque el algoritmo depende de los signos.
- **C-1**: se complementan todos los bits (+3 = 0011 → −3 = 1100). Dos ceros (0000 y 1111). Resta = suma del negado: A − B = A + (−B). Si hay acarreo final, **se suma 1 al resultado**.
- **C-2**: C-1 + 1 (−5: 0101 → 1010 → **1011**). **Un solo cero**. Rango con 4 bits: **−8…+7** (la fe de erratas corrige la p. 267). La suma se hace sobre todos los bits y el acarreo final se desprecia.
- Equivalencias de 1001: binario puro 9, S-M −1, C-1 −6, C-2 −7.
- **Rebose (overflow)**: solo puede ocurrir cuando **los dos operandos tienen el mismo signo** y el resultado tiene el signo contrario (por ejemplo, (−7)+(−7) = −14 no cabe en 4 bits).
- Convertidor S-M → C-1 de 3 bits (fig. 5.4): y₂ = x₂; y₁ = x₂ ⊕ x₁; y₀ = x₂ ⊕ x₀ (los bits de magnitud se invierten si el número es negativo).

## Sumadores y restadores
- **Semisumador (HA)**: S = A ⊕ B, C = A·B.
- **Sumador completo (FA)**: Sᵢ = Cᵢ ⊕ Aᵢ ⊕ Bᵢ; Cᵢ₊₁ = AᵢBᵢ + Cᵢ(Aᵢ ⊕ Bᵢ). Se hace con 2 HA + OR. La suma vale 1 si el número de unos es impar; el acarreo vale 1 si hay al menos dos unos.
- **Semirrestador (HS)**: D = A ⊕ B; **C = Ā·B** (hay préstamo si A = 0 y B = 1).
- **Restador completo (FS)**: Dᵢ = Cᵢ ⊕ Aᵢ ⊕ Bᵢ; Cᵢ₊₁ = ĀᵢBᵢ + Cᵢ·(Aᵢ ⊕ Bᵢ)‾. Restador paralelo: cadena de FS con C₀ = 0.
- **Sumador paralelo de acarreo enlazado**: n FA en cascada; es lento porque el acarreo tiene que propagarse por los n módulos. **Sumador serie**: un único FA con un retardo o biestable para el acarreo y registros de desplazamiento; es más lento todavía, porque procesa un bit por pulso de reloj.
- **Acarreo adelantado (look-ahead, SN7483; generador SN74182)**: **Pᵢ = Aᵢ ⊕ Bᵢ** (propagación) y **Gᵢ = Aᵢ·Bᵢ** (generación); Sᵢ = Pᵢ ⊕ Cᵢ; Cᵢ₊₁ = Gᵢ + PᵢCᵢ, que desarrollado da C₂ = G₁ + P₁G₀ + P₁P₀C₀, etc. Todos los acarreos se calculan con **dos niveles** (AND-OR). Las salidas tienen el mismo retardo (4 niveles: HA, AND, OR, XOR). El fan-in limita la longitud, así que se suma por bloques: acarreo adelantado dentro de cada bloque y enlazado entre bloques.
- **Sumador en C-1 con detección de rebose** (fig. 5.15): sumar todos los bits en binario; si el acarreo es 0, el resultado vale; si es 1 y no hay rebose, se suma 1 (con semisumadores); si hay rebose, se da señal de error. Con 2 bits: **rebose = Ā₁B̄₁S₁ + A₁B₁S̄₁**.
- Sumador/restador (tipo MC10180): se complementa B con XOR controlada por una señal y se mete Cin = 1 para el C-2.

## Comparadores
- 1 bit: **E = (A ⊕ B)‾ = ĀB̄ + AB** (coincidencia); **C (A>B) = A·B̄**; **D (A<B) = Ā·B**.
- 4 bits: **E = E₃E₂E₁E₀**; **A>B = A₃B̄₃ + E₃A₂B̄₂ + E₃E₂A₁B̄₁ + E₃E₂E₁A₀B̄₀**; A<B se obtiene por exclusión (Ē = 1 y no A>B). Hay entradas de cascada (A'>B', A'=B').
- Circuitos integrados: SN7485 (4 bits en cascada), SN74AS866A (8 bits, comparación lógica o aritmética en C-2 con L/Ā; la "AG" es mayor aritmético), SN74ALS528 (identidad con un número fijo).

## Paridad
- XOR en cascada: Z = (A⊕B)⊕(C⊕D) vale 1 si el número de unos es **impar**. Con el bit P' de otro módulo: P = Z ⊕ P'. En transmisión, el generador añade el bit de paridad y el receptor lo comprueba (detecta un error de un solo bit). SN74ALS280: paridad de 9 líneas (terminal 5 "par" en alta con 0, 2, 4, 6 u 8 unos; el 6 "impar"); el 286 permite conectar varios en cascada.

## ALU SN74181
- Dos palabras de 4 bits, acarreo Cₙ, selección **S3 S2 S1 S0** y modo **M**: **M = H → 16 funciones lógicas** (sin acarreo); **M = L → aritméticas**, con C̄ₙ = H (sin acarreo) o C̄ₙ = L (con acarreo, "PLUS 1"). Salidas: F3-F0, Cₙ₊₄, A=B (colector abierto, para comparar), P y G (para el SN74182).
- En la tabla, **"+" es OR y "PLUS" es suma aritmética**; ⊕ es XOR. Ejemplos de la tabla (lógica positiva): S = LHHL con M = H da A⊕B; con M = L y C̄ₙ = H da A MINUS B MINUS 1; con C̄ₙ = L da **A MINUS B**. S = HLLH con M = L da A PLUS B. S = HHLL con M = H da F = 1. S = LLLL con M = H da Ā.
- La resta se hace por suma en C-1 (resultado A − B − 1), así que hace falta el acarreo forzado para obtener A − B. Para comparar se pone en modo resta (S = 0110, Cₙ = 1) y se mira A=B.
- **Ejercicio de la fig. 5.24 (base de la PEC 1)**: se fijan los bits altos a 0 y se ponen relojes en A0, A1, B0 y B1 con periodos doblados. Con **S3 S2 S1 S0 = L L L H**, M = L y C̄ₙ = H sale **F = A + B (OR) a pesar de estar en modo aritmético**: F2 = 0, F1 = A1 + B1, F0 = A0 + B0. Hay que distinguir "A + B" (OR) de "A PLUS B" (suma).

## Problemas del capítulo (sin solución en el libro de teoría)
E.5.1 HA y FA solo con NAND · E.5.2 restadores · E.5.3 sumador-restador · E.5.4 comparador de 16 bits con 5 de 4 bits · E.5.5 analizar el SN74ALS280 · E.5.6 diseñar "mini-ALU" con 3 ALU y puertas NOR (y la forma de onda con la selección cíclica 00, 01, 10, 11). La "Preparación de la evaluación" pide sumas en S-M, C-1 y C-2, convertidores S-M → C-2 y C-1 → C-2, estimar retardos del acarreo adelantado, sumador/restador con rebose, comparadores en S-M o C-2 de 3 bits y funciones de la 181 con S = LHHH, M = H, Cₙ = H y S = LLLH, M = L, Cₙ = L.
