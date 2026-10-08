---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 9 (PDF 460-525)
aprendido: 2026-10-07
---

# FSD T6 — Introducción al diseño secuencial: contadores y registros

Capítulo 9 del libro. Base del autómata de la **PEC 2** (procedimiento de síntesis con biestables D) y de las preguntas de test "¿qué secuencia recorre este circuito?". Anterior: [[FSD T5 - Autómatas y biestables]]. P+F relacionadas: [[FSD - Curso virtual (FAQ, PEC, erratas)]]. Índice: [[FSD - Índice]].

## Tablas de análisis y síntesis (excitación)
| Biestable | Análisis | Síntesis (qué poner para pasar de Qₙ a Qₙ₊₁) |
|---|---|---|
| **D** | Qₙ₊₁ = D | **D = Qₙ₊₁** |
| **T** | Qₙ₊₁ = T·Q̄ₙ + T̄·Qₙ | **T = Q̄ₙQₙ₊₁ + QₙQ̄ₙ₊₁ = Qₙ ⊕ Qₙ₊₁** (cambia → 1) |
| **J-K** | Qₙ₊₁ = J·Q̄ₙ + K̄·Qₙ | 0→0: J = 0, K = *; 0→1: 1, *; 1→0: *, 1; 1→1: *, 0. Es decir, **J = Q̄ₙ·Qₙ₊₁ y K = Qₙ·Q̄ₙ₊₁**: "desde 0 manda J; desde 1 manda K" |

- Ejemplos del libro con un autómata de 2 estados y salida y: con D, **D = x** e y = xQ̄ₙ; con T, T = x̄; con J-K, J = x y K = x̄ (emula un D) o J = K = x̄ (emula un T).
- Con N biestables (2^N estados), para una transición concreta cada biestable necesita su excitación: ejemplo 010 → 011 con D → D₂ = 0, D₁ = 1, D₀ = 1; con J-K → J₂ = 0, K₂ = *; J₁ = *, K₁ = 0; J₀ = 1, K₀ = *.

## Procedimiento general de síntesis (síncrona)
**P.1** descripción en lenguaje natural (clara, completa, precisa e inequívoca) → **P.2** representación como autómata (espacios de entradas, estados y salidas; f y g) → **P.3** minimización del número de estados (quitar redundantes por clases de equivalencia) → **P.4** elección de biestables (D, T, J-K) → **P.5** asignación de estados (N con 2^N ≥ A > 2^(N−1); Sᵢ = binario de i) → **P.6** funciones de excitación.

## Representación matricial (método de R. Moreno Díaz)
- Para cada configuración de entrada Xₘ, una **matriz de transición** booleana T^m (2^N × 2^N): t_ij = 1 si con Xₘ se pasa de Sᵢ a Sⱼ. Como es determinista, **cada fila tiene un solo 1**.
- **Matriz funcional M(X) = Σₘ T^m·Xₘ**: cada elemento es la condición de entrada (un término mínimo o una suma) que provoca la transición i → j. **Cada fila suma 1.** Con 2 estados hay 4 matrices posibles; un "autómata universal de 2 estados" necesita 2 variables de entrada.
- **Síntesis con D**: **D_k = Σ_i Σ_{j: Q_k = 1 en S_j} M_ij(X)·(término mínimo del estado S_i)**: se suman, para cada estado inicial, los elementos de la matriz de las columnas cuyo estado final tiene Q_k = 1, multiplicados por la codificación del estado inicial (notación de Gilstrap: Qᵢ^a = Qᵢ si a = 1 y Q̄ᵢ si a = 0). Ejemplo: M = [[0, 1], [x₀, x̄₀]] → **D₀ = Q̄₀ + Q₀x̄₀**. Con PROM no se simplifica (están todos los términos mínimos).
- **Análisis**: **m_ij = Π_k f_k^(bit k de S_j)**: para ir de Sᵢ a Sⱼ, cada D_k evaluado en Sᵢ debe valer el bit k de Sⱼ (se usa D_k si el bit es 1 y D̄_k si es 0). Así se reconstruye la matriz funcional a partir del circuito.
- Implementación modular con PLD: N macroceldas con biestable D (PAL 22V10 o 16R8); la PAL es un "procesador paralelo" que sintetiza N autómatas de 2 estados. Reprogramable.
- **Asignación de estados con J-K** (para simplificar los Karnaugh): adyacencias A1 (mismo sucesor para alguna entrada), A2 (sucesores del mismo estado con entradas adyacentes), A3 (ciclo de oscilación) y A4 (misma salida). Las reglas prácticas son A.1 y A.2 generalizadas.

## Contadores
- Un contador es un autómata de 2^N estados que recorre una secuencia con cada pulso. Clasificación: **asíncronos** (binarios, divisores, reversibles) y **síncronos** (no reversibles con arrastre serie o paralelo, y reversibles).
- **Asíncrono binario**: J-K con J = K = 1 (modo T); el reloj entra en el primero y **la Q de cada uno es el reloj del siguiente**. Con disparo en bajada y tomando Q **cuenta hacia arriba**; tomando **Q̄ cuenta hacia abajo** (7-6-…-0). **Reversible**: un MUX elige Q o Q̄ con una señal x (x = 1 arriba, x = 0 abajo; x no debe cambiar entre pulsos). Inconvenientes: los retardos se acumulan (frecuencia máxima limitada) y los estados no se alcanzan todos a la vez (estados transitorios).
- **Divisor por Q (Q ≠ 2^N)** cortando la secuencia con Preset o Clear asíncronos:
  - Con **Preset**: se detecta el estado anterior al corte (para ÷10: Q₃ = 1 en el pulso 9, estado 1000) → se ponen todos a 1 (1111) → el siguiente pulso los lleva a 0000.
  - Con **Clear**: se detecta el primer estado que no debe aparecer (para ÷10: 1001 → se usa una AND de Q₀ y Q₃, porque son los únicos bits a 1) y se pone a 0. Los integrados tienen Preset y Clear **activos en baja** (NAND en vez de AND).
- **Síncrono** (todos con el mismo reloj; la lógica controla J y K): binario de 3 bits con acarreo paralelo → **J₀ = K₀ = 1; J₁ = K₁ = Q₀; J₂ = K₂ = Q₁Q₀** (cada biestable cambia cuando todos los anteriores están a 1). **Reversible**: J₁ = K₁ = Q₀x + Q̄₀x̄; J₂ = K₂ = Q₁Q₀x + Q̄₁Q̄₀x̄.
- Contador reversible de 3 bits con PAL y D (ejemplo del método general): D₂, D₁ y D₀ se obtienen de la matriz funcional (PAL16R8). Cambiando la matriz se convierte en divisor por 5, 6 o 7.
- **SN74163**: contador síncrono de 4 bits con **carga paralela síncrona** (LOAD activo en baja, con los datos en A-D), **CLEAR**, **ENT y ENP** (cuenta solo si los dos están en alta) y **RCO** (acarreo: pulso al llegar a 15, para conectar en cascada). Otros: 74196 (décadas), 74197 (binario de 4 bits), 7492 (÷12) asíncronos; 74160 (décadas, carga síncrona), 74190 (décadas reversible), 74191 (binario reversible) síncronos; **SN74393** (doble contador binario de 4 bits, el de la PEC 2 para generar x).

## Registros de desplazamiento
- N biestables D en cascada: **D_{k} = Q_{k−1}**, y el primero recibe D₀ = f(x; Q₀ … Q_{N−1}) (realimentación opcional). Tipos: S-S, S-P, P-S y P-P (entrada/salida serie o paralelo).
- Usos: conversión serie ↔ paralelo, multiplicar o dividir por 2 (desplazar), líneas de retardo, generadores de secuencias y memoria transitoria (FIFO, ver [[FSD T9 - Memorias de acceso secuencial]]).
- **SN74195** (universal de 4 bits, actividad A.6.2.2): **SH/L̄D** (0 = carga paralela por A-D en la subida del reloj; 1 = desplazamiento con carga serie por J y K̄), **C̄lear** activo en baja y salidas QA-QD y Q̄D. Carga serie: J = K̄ = 1 → QA = 1; J = K̄ = 0 → QA = 0; J = 1, K̄ = 0 → QA cambia; J = 0, K̄ = 1 → QA mantiene. Otros: 7495, 74194 (bidireccional), 7496, 74164, 74LS673, AS195.

## Problemas del capítulo
E.9.1 autómata de un ascensor de 3 plantas (P.1 y P.2) · E.9.2 los ejemplos 9.14-9.16 con J-K · E.9.3 autómata universal de 2 estados · **E.9.4 detector de la secuencia 111 sin solapamiento**; 010 y 101; dos líneas · **E.9.5 divisores por 12 y por 9** · **E.9.6 secuencias de impares (0, 1, 3, 5 … 15) y pares, reversibles, con selección S** · E.9.7 analizar dos contadores J-K con puertas (qué tipo son) · E.9.8 registro de 3 bits con D y la matriz funcional · E.9.9 analizar el SN74S195 · E.9.10 control de un registro (carga paralela → desplazamiento → desplazamiento → carga serie). Hay erratas en los problemas 9.2 y 9.6 del libro de problemas.
