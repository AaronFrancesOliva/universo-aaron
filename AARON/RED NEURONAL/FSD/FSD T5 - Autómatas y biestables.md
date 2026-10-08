---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 8 (PDF 398-459)
aprendido: 2026-10-07
---

# FSD T5 — Exigencias computacionales de la lógica secuencial: autómatas y biestables

Capítulo 8 del libro. Es **el tema más preguntado en el test** junto con el T1 ([[FSD - Exámenes anteriores (análisis)]]). Las dudas típicas y la errata de la p. 442 ("AND", no "NAND") están en [[FSD - Curso virtual (FAQ, PEC, erratas)]]. Índice: [[FSD - Índice]].

## Autómatas finitos
- **Estado** = memoria interna: la misma entrada puede dar salidas distintas según el estado (ejemplo del bolígrafo: pulsar saca o mete la punta). Hacen falta tantos estados como historias distinguibles de estímulos; el mínimo son 2.
- Ejemplo de "caja negra" (figs. 8.2-8.4): y(t) = x(t) ⊕ y(t−Δt), es decir, XOR + retardo = **biestable T**.
- **Autómata finito determinista A = (X, Y, S; f, g)**: X entradas, Y salidas, S estados; **f: X×S → S** produce el nuevo estado, S(t+Δt) = f[x(t), S(t)]; **g: X×S → Y** produce las salidas.
- Representación: **tabla de transición** (filas = estado actual, columnas = entrada; en cada celda, nuevo estado / salida) y **diagrama de transición de estados** (nodos = estados; arcos etiquetados "entrada/salida").
- Implementación (fig. 8.7): **N biestables D** guardan el estado (con N biestables hay hasta 2^N estados) y dos bloques combinacionales (por ejemplo, PLD): Dᵢ = fᵢ(x, Q) y yⱼ = gⱼ(x, Q), con Qᵢ(t) = Dᵢ(t − Δt). Si las salidas son los propios estados, no hace falta g ("circuito secuencial mínimo").
- **Síncronos vs asíncronos**: en los síncronos los cambios ocurren en los flancos del reloj (un astable). Restricciones: **t_su (setup)**, tiempo que las entradas deben estar estables *antes* del flanco, y **t_h (hold)**, tiempo que deben seguir estables *después*. La frecuencia máxima la marca el tiempo de transición de la familia lógica. Los asíncronos funcionan en modo fundamental (un solo cambio a la vez) o por pulsos.

## Biestables
- Núcleo: **dos inversores realimentados** (ganancia de lazo > 1); tiene dos puntos estables (A y B) y uno inestable (C). Un pulso exterior lo hace cambiar de estado.
- Tipos según el disparo: (1) *latch* básico o sincronizado a niveles; (2) maestro-esclavo; (3) disparado por flancos. Y según las entradas: R-S, J-K, T, D. **Latch** = sincronizado a niveles (el D); **flip-flop** = disparado por flancos (J-K y D).

### R-S
- **Básico con NOR** (R y S activas en alta): 00 → mantiene Qₙ; 01 → 1 (set); 10 → 0 (reset); **11 → prohibida** (Q = Q̄ = 0; si después pasan las dos a 0 a la vez, **oscila**). Con NAND, las entradas son R̄ y S̄ (activas en baja).
- **Qₙ₊₁ = R̄·S + R̄·Qₙ = (S + Qₙ)·R̄** (fig. 8.11 y ec. [8.10]), prohibiendo R = S = 1.
- **Sincronizado a niveles** (AND con Ck delante de las NOR): solo cambia mientras **Ck = 1**; con Ck = 0 mantiene el estado.
- **Disparado por flancos**: un inversor con retardo + AND genera un pulso muy estrecho en cada subida, y solo se miran R y S en ese instante (símbolo con triángulo en la entrada C).
- Las tres respuestas ante las mismas entradas son distintas (fig. 8.16): sale en el test ("Q básico / Q por niveles / Q por flanco de bajada", sep 2013).
- **Preset (Pr) y Clear (Cl) asíncronos**: actúan con prioridad, sin reloj. Pr = 1 → Q = 1; Cl = 1 → Q = 0; Pr = Cl = 1 prohibido. (En los integrados reales van **activos en baja**.)

### J-K
- Resuelve el caso R = S = 1: **J = K = 1 → cambia (Qₙ₊₁ = Q̄ₙ)**. J = K = 0 → mantiene; J = 1, K = 0 → 1; J = 0, K = 1 → 0.
- **Qₙ₊₁ = J·Q̄ₙ + K̄·Qₙ**. Internamente, R' = Qₙ·K·Ck y S' = Q̄ₙ·J·Ck.
- **Tabla de síntesis (excitación) del JK**: 0→0: J = 0, K = x; 0→1: 1, x; 1→0: x, 1; 1→1: x, 0 (pregunta de examen ene 2012).
- Problema del J-K a niveles: con J = K = 1 y el reloj en alta **oscila** (fig. 8.20, por los retardos de los lazos). Soluciones: pulso de reloj muy estrecho, **maestro-esclavo** (dos biestables en serie con relojes complementarios: el maestro captura con Ck y el esclavo copia con Ck̄; así se rompe el lazo) o **disparo por flancos** (SN7470, 74101, 74102, 74108).
- **SN7473**: dos J-K maestro-esclavo disparados por pulsos, con Clear; **cambian en las bajadas** (circulito en el reloj). **SN74109**: J-K disparados por flancos positivos con Pr y Cl activos en baja. **SN74ALS114A**: J-K por flancos de bajada.

### T y D
- **T** = J-K con J = K = T: T = 0 mantiene y T = 1 cambia. **Qₙ₊₁ = T ⊕ Qₙ = T·Q̄ₙ + T̄·Qₙ**. Con T = 1 fijo, divide la frecuencia del reloj por 2.
- **D** (delay, retardo): S = D y R = D̄ (o J = D y K = D̄), así que nunca hay 11. **Qₙ₊₁ = D** (a niveles: Qₙ₊₁ = Ck·D). Es el elemento de memoria de los autómatas.
- **D maestro-esclavo** (fig. 8.27): cambia en el flanco de subida.
- **D disparado por flancos** (74LS74A, fig. 8.28): tres celdas R-S (set, reset y salida) hechas con NAND. Solo registra D en la subida; los cambios de D en el resto del ciclo no pasan a la salida. **SN74LS74A** = dos D por flanco positivo con **P̄RE y C̄LR asíncronos activos en baja** (L-H → Q = 1; H-L → Q = 0; L-L → inestable). Es el **SN7474 de la PEC 2**. Otros: AS874, ALS374 (8 D con salidas de tres estados, sirve de impulsor de bus).
- Desde el J-K se puede obtener cualquier otro biestable (es el "módulo universal" de la lógica secuencial, como NAND/NOR en la combinacional). Un J-K con J = Q₁ y K = Q̄₁ de otro biestable funciona como un D.

## Problemas del capítulo
E.8.1 análisis de un circuito con R-S (diagrama de transición, f y g, salida y = y(Q, x₁)) · E.8.2 circuito con un D realimentado (dibujar Q̄ con x(t) y Ck dados; D se dispara en las subidas) · E.8.3 dos J-K en cascada (A y B) con salidas y₁ e y₂ durante 7 pulsos · E.8.4 síntesis (la fe de erratas dice que se puede hacer con J-K o con D). Las P+F P.5.8-P.5.11 los explican paso a paso.

## Cómo resolver un cronograma de examen (síntesis mía)
1. Ver si el circuito es **síncrono** (todos con el mismo reloj) o asíncrono (la salida de uno hace de reloj del siguiente).
2. Ver **qué flanco** dispara: triángulo = subida; triángulo + circulito = bajada (como el 7473); sin triángulo = nivel.
3. Reconocer configuraciones conocidas (J = K → T; J = D, K = D̄ → D) y el estado inicial (Clear/Preset, o el que diga el enunciado).
4. En cada flanco, evaluar las entradas **justo antes** del flanco y aplicar la tabla. El cambio de un biestable no afecta a otro en ese mismo flanco.
