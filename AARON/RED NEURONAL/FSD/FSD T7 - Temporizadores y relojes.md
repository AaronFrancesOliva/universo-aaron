---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 10 (PDF 526-571)
aprendido: 2026-10-07
---

# FSD T7 — Temporizadores y relojes

Capítulo 10 del libro. Casi no sale en el test (4 preguntas en 2013-2014: cronograma de astable + monoestable), pero **es la base del reloj de la PEC 2** y puede caer en el problema de desarrollo. Las fórmulas y el truco del diodo están ampliados en [[FSD - Curso virtual (FAQ, PEC, erratas)]]. El funcionamiento de los transistores no es materia de estudio. Índice: [[FSD - Índice]].

## Circuitos de tiempo (multivibradores)
- **Monoestable**: un estado estable y otro **metaestable**. Un disparo lo lleva al metaestable durante un tiempo fijado por R·C y luego vuelve solo: genera **un pulso de duración controlada**.
- **Astable** (oscilador): ninguno de los dos estados es estable; oscila con periodo T y duración de pulso t₁ controlables.
- **Formas de onda compuestas**: astable + monoestables + puertas (fig. 10.1c: astable → monoestable 1 → monoestable 2, y una OR de las salidas da v₀(t)). Receta del libro: (1) un oscilador de pulsos estrechos; (2) monoestables para generar pulsos del ancho deseado a partir de los flancos del astable; (3) puertas o MUX para combinarlos.
- **Relojes monofásicos y polifásicos** (varias fases Φ_A, Φ_B, Φ_C con relación fija; se usan en lógica dinámica y en memorias dinámicas).

## Monoestables
- Con dos inversores CMOS y una red RC (fig. 10.3): **τ = −R·C·ln((V_CC − V_T)/V_CC)**, y si V_T = V_CC/2, **τ = R·C·ln 2**. Variante con diodos D₁ y D₂ para dispararlo con bajadas (fig. 10.4).
- **SN74121** (TTL): disparo por A₁, A₂ (flanco de bajada) o B (subida, con disparador de **Schmitt**, que tiene **histéresis** y elimina rebotes). Una vez disparado, la salida no depende de la entrada. Sin R y C externas da 30-35 ns; con ellas, de 40 ns a 28 s. CMOS: SCL4047B.
- **SN74122/123** (redisparables): el pulso se **alarga si llega otro disparo** antes de acabar, y se **acorta con Clear**. Para C > 1000 pF, **t_w ≈ 0,28·R·C·(1 + 0,7/R)**.

## Astables
- Con un amplificador operacional (fig. 10.8): umbral v₂ = ±V_CC·R₂/(R₁ + R₂); t₁ = t₂ = R·C·ln(1 + 2R₂/R₁) y **T = 2R·C·ln(1 + 2R₂/R₁)** (simétrico). También con dos inversores y una RC (fig. 10.9).

## Temporizador 555 (Signetics, 1972; versión CMOS ICM7555)
- Dos comparadores internos con referencias **2V_CC/3** (umbral) y **V_CC/3** (disparo), un biestable R-S, un transistor de descarga y una etapa de salida. Funciona con V_CC de 5 a 15 V (bipolar) o de 2 a 18 V (CMOS).
- **Terminales**: 1 tierra; **2 disparo** (cuando baja de V_CC/3, la salida 3 pasa a alta); **3 salida**; **4 reset** (por debajo de 0,6-0,7 V detiene el ciclo y pone la salida a 0; si no se usa, a V_CC); **5 control** (2V_CC/3 internamente; si no se usa, condensador de 0,01 µF a tierra para filtrar ruido); **6 umbral** (si supera 2V_CC/3, la salida pasa a baja); **7 descarga** (descarga el condensador); 8 V_CC.
- **Monoestable** (terminales 6 y 7 unidos, R_A a V_CC y C a tierra): en reposo C está descargado y la salida en baja. Un pulso negativo en 2 (por debajo de V_CC/3) pone la salida en alta y C se carga por R_A hasta 2V_CC/3; entonces la salida vuelve a 0 y se descarga C. **t₁ = R_A·C·ln 3 ≈ 1,1·R_A·C**. No se redispara durante el pulso. Bipolar: 1 µA < corriente < 5 mA, pulsos de 5·10⁻³ a 1 s; CMOS: R_A hasta 100 MΩ (10 s con 100 nF).
- **Astable** (2 y 6 unidos; R_A entre V_CC y 7, R_B entre 7 y 6): C oscila entre V_CC/3 y 2V_CC/3. **t₁ (alta) = 0,69·(R_A + R_B)·C** (carga por R_A + R_B); **t₂ (baja) = 0,69·R_B·C** (descarga por R_B); **T = 0,69·(R_A + 2R_B)·C**; ciclo de trabajo t₁/T = (R_A + R_B)/(R_A + 2R_B), **siempre > 1/2**. Para acercarlo a 1/2: **diodo D₁ en paralelo con R_B** → t₁ ≈ 0,69·R_A·C, t₂ ≈ 0,69·R_B·C, T = 0,69·(R_A + R_B)·C, y con **R_A = R_B** sale una onda cuadrada (PEC 2). El reset (4) a tierra para la oscilación.
- Aplicaciones: **detector de omisión de pulsos** (monoestable redisparable con un tiempo algo mayor que el periodo de entrada: si falta un pulso, la salida cae a 0) y **generador de secuencias** (astable → monoestable MSB1 → monoestable MSB2 → OR).

## Temporizadores programables y relojes
- **ICL8240, XR2240, MM5865**: base de tiempos (oscilador RC, T = RC) + **contador de 8 bits** + biestable + control. En modo monoestable, retardos de RC a **255·R·C** (de µs a días) según qué salidas (1T … 128T, colector abierto, AND cableado) se conecten.
- **Relojes de cristal**: oscilador sintonizado LC con un **cristal de cuarzo** piezoeléctrico (mucha precisión y estabilidad); resonancia en ω₀ = 1/√(LC) (X_L = X_C); para que oscile, la ganancia del lazo debe compensar las pérdidas (A_v·[pérdidas] = 1). Después: convertidor de senoidal a digital (TTL, ECL, CMOS) y un generador de fases (contador). Un reloj polifásico da varias fases a partir del mismo oscilador.
