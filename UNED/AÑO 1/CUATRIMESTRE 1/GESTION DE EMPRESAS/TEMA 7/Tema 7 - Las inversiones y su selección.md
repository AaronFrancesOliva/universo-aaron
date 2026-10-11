---
asignatura: Gestión de Empresas Informáticas
tema: 7
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 7: Las inversiones y su selección. La rentabilidad de las inversiones

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 184-226 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_07.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_7.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Una inversión se juzga solo por **desembolso inicial, flujos de caja, momentos y riesgo**. Los métodos **estáticos** (pay-back...) ignoran que el dinero vale distinto en el tiempo y no deberían usarse. Los **dinámicos** (**VAN** y **TIR**) sí lo tienen en cuenta. Una inversión es efectuable si su **rentabilidad esperada supera la requerida**.

## 1. Introducción

Las inversiones forman la **estructura económica** de la empresa. Para que un proyecto sea viable hay que seleccionarlas bien, teniendo en cuenta que **los capitales valen distinto en distintos momentos**.

## 2. Concepto y tipos de inversiones

> **Inversión** = sacrificio de algo **inmediato** a cambio de una **esperanza**, cuyo soporte es el bien o derecho en el que se invierte.

**Tipos (tabla 7.1)**:
1. **De activo fijo** o **de activo circulante**. Normalmente se decide el fijo y el circulante va **anexo**.
2. **Financieras** (obligaciones, acciones, pagarés) o **productivas** (activos para producir bienes y servicios).
3. Las **productivas**, según su función:
   - De **reemplazamiento para el mantenimiento**: sustituir equipos desgastados o estropeados. Son las que **requieren menos análisis**.
   - De **reemplazamiento para reducir costes o mejorar tecnológicamente**: sustituir equipos que **funcionan pero están obsoletos**.
   - De **ampliación de los productos o mercados existentes**.
   - De **ampliación a nuevos productos o mercados**.
   - **Impuestas**: no son por motivos económicos, sino para **cumplir leyes o convenios**.

**Ejemplo**: una empresa española construye una nave en **China** para entrar en Asia, financiada con acciones que suscriben sus accionistas → la empresa hace una inversión **productiva de ampliación a nuevos mercados** y los accionistas una inversión **financiera**.

## 3. Variables fundamentales de un plan de inversión

Desde el punto de vista económico, **lo único relevante** es:
- El **desembolso inicial** (A).
- Los **flujos de caja** ($Q_t$).
- Los **momentos** en que se generan.
- El **riesgo**.

Cualquier consideración técnica debe traducirse a flujos y riesgo. Representación: $-A \;/\; Q_1 \;/\; Q_2 \;/\; \dots \;/\; Q_n$.

**Flujo de caja** de un momento = **cobros − pagos** de la inversión en ese momento.
- Las decisiones se basan en **flujos de caja** (cobros − pagos), **no en beneficios** (ingresos − gastos). Ejemplo: una venta a crédito es un ingreso hoy y un cobro más tarde.
- Los **impuestos** sobre el beneficio de la inversión son **pagos** que se descuentan del flujo.

**Rentabilidades**:
- **Esperada** (r): la que se espera obtener. **Requerida** (k): la que se exige.
- Una inversión **solo es efectuable si la esperada supera a la requerida**.

**El dinero vale más hoy que mañana** porque:
1. Antes se puede usar (**intereses**); aunque no haya inflación ni riesgo, se debe exigir cierta rentabilidad.
2. **Inflación**: el mismo capital compra más hoy.
3. **Riesgo**: cuanto más probable no cobrar, más rentabilidad se exige.

- **Tipo libre de riesgo** ($R_f$): rentabilidad de los activos sin riesgo.
- **Prima de riesgo**: suplemento de rentabilidad por el riesgo: $p_h = k_h - R_f$.
- **Rentabilidad neta de riesgo**: rentabilidad − prima de riesgo requerida.
- **Con inflación** g, si sin ella se exigiría i: $k = i + g + i \cdot g$. Ejemplo: 8 % y 6 % → 14,48 %.

## 4. Métodos estáticos (aproximados)

No tienen en cuenta el valor del dinero en el tiempo → **no deberían usarse** (pueden llevar a decisiones equivocadas), aunque se usan mucho.

| Método | Qué calcula | Defectos |
|---|---|---|
| **Plazo de recuperación (pay-back)** | Tiempo en recuperar A con los flujos (si son constantes, P = A/Q). Prefiere el **menor**: criterio de **liquidez** | Ignora el **momento** de los flujos anteriores al plazo y **todos** los posteriores; suma u.m. de distintos años como si fueran iguales |
| **Flujo de caja total por u.m. comprometida** | $r' = \sum Q_t / A$; efectuable si r' > 1 | Suma magnitudes heterogéneas; no compara duraciones distintas; no es una verdadera rentabilidad |
| **Flujo de caja medio anual por u.m.** | $r'' = \bar{Q} / A$ | Penaliza las inversiones largas |
| **Comparación de costes** | Elige la de **menor coste anual** (inversiones industriales) | No valora la inversión ni da rentabilidad; ignora flujos, momentos y riesgo |
| **Tasa de rendimiento contable** (rentabilidad media) | Beneficio medio anual / inmovilización media | Los mismos inconvenientes |

**Ejemplo del pay-back**: −10.000 / 7.000 / 2.000 / 1.000 / 2.000 y −10.000 / 1.000 / 2.000 / 7.000 / 2.000 tienen el mismo pay-back (3 años), pero el primero es mejor (cobra antes). Y −10.000 / 7.000 / 2.000 / 1.000 / 20.000 también recupera en 3 años y es el mejor de los tres.

## 5. Métodos dinámicos

Incorporan el **factor tiempo**. Se supone que los flujos llegan al final de cada año.

### 5.1 Valor actual neto (VAN)
**Valor actual** (VA): equivalente en el momento 0 de todos los flujos.

$$VAN = -A + \frac{Q_1}{1+k} + \frac{Q_2}{(1+k)^2} + \dots + \frac{Q_n}{(1+k)^n}$$

- **VAN > 0 → efectuable**; = 0 indiferente; < 0 no efectuable. Entre varias, la de **mayor VAN**.
- Si VA > A, la inversión es "barata".
- **Ejemplo MALVA, S. A.**: −10.000 / 5.000 / 6.000 / 6.000 / 8.000 / 6.000, con i = 5 % e inflación 8 % → k = 13,4 % → **VAN = 11.225** → efectuable.

**Inversión simple**: un desembolso inicial y luego **todos los flujos no negativos**. Su función VAN(k):
- Es **decreciente y convexa**.
- **VAN(0) = S − A** (S = suma de flujos).
- Cuando k → ∞, VAN tiende a **−A** (asíntota).
- Corta el eje una sola vez → **una única TIR**. Solo tiene sentido analizarla si S > A.

### 5.2 Tipo de rendimiento interno (TIR)
También: tasa interna de rentabilidad, tasa de retorno o rentabilidad. Es el **r que hace VAN = 0**:

$$0 = -A + \sum \frac{Q_t}{(1+r)^t}$$

- **Efectuable si r > k**.
- Un préstamo al 16 % tiene una TIR del 16 %.
- **Rentabilidad real** (neta de inflación): $r_R = \dfrac{r_A - g}{1 + g}$. Préstamo al 16 % con inflación del 6 % → **9,43 %**. Si el banco exige un 8 % real, es efectuable; equivale a comparar en aparente (16 % frente a 14,48 %). Se puede comparar **en aparentes o en reales**: da lo mismo.

**Cálculo de la TIR**: con 1 año se despeja; con 2, ecuación de segundo grado; con más, calculadora, hoja de cálculo o **prueba y error**. **Acotación**: con $M = \sum t\,Q_t$ y $D = \sum Q_t / t$:

$$r^* = (S/A)^{S/M} - 1 \;<\; r \;<\; r^{**} = (S/A)^{D/S} - 1$$

(r* aproxima por **defecto** y r** por **exceso**; son exactas si dura un año). Ejemplo: −2.000 / 600 / 1.000 / 1.200 → r* = 16,41 % > 10 % requerido → efectuable sin calcular r exacta.

### 5.3 Otros métodos dinámicos
- **Pay-back con descuento**: tiempo en recuperar A **en términos actuales**. Es dinámico (mejora importante), pero sigue primando la liquidez e ignorando los flujos posteriores.
- **Tasa de valor actual**: $T = VAN / A$ (VAN por u.m. comprometida). Útil en inversiones **fraccionables**.
- **Índice de rentabilidad** (coeficiente beneficio/coste): VA de los cobros / VA de los pagos (incluido A). Efectuable si > 1; da las mismas decisiones que el VAN.

## 6. VAN y TIR en casos especiales

| Caso | VAN | TIR |
|---|---|---|
| Flujos **no anuales** (en momentos $t_i$) | Descontar cada flujo a $(1+k)^{t_i}$ | Igual con r |
| Flujos **constantes** Q durante n años | $-A + Q \cdot \dfrac{1-(1+k)^{-n}}{k}$ | Resolver con r |
| **Constantes e ilimitados** | $-A + Q/k$ | $r = Q/A$ |
| **Crecientes** a tasa f ($Q_t = Q_1(1+f)^{t-1}$) | $-A + Q_1 \dfrac{1 - \left(\frac{1+f}{1+k}\right)^n}{k - f}$ | Resolver con r |
| **Crecientes e ilimitados** (f < k) | $-A + \dfrac{Q_1}{k - f}$ | $r = \dfrac{Q_1}{A} + f$ |

- Obligación con cupón **semestral** del 5 %: rentabilidad anual $(1{,}05)^2 - 1 = 10{,}25\,\%$.
- Ejemplo creciente: −1.000; $Q_1$ = 500; f = 5 %; k = 12 %; 3 años → VAN = **257,32**. Si es ilimitado: VAN = 500/0,07 − 1.000 = **6.142,86** y r = 0,5 + 0,05 = **55 %**: el crecimiento **suma exactamente f** a la rentabilidad.

## 7. VAN frente a TIR

- **Proyectos independientes** (o decidir si una inversión simple es efectuable): **siempre** dan la misma decisión.
- **Mutuamente excluyentes con el mismo riesgo**: pueden **discrepar**. La **intersección de Fisher** es el k en que sus VAN se igualan.
  - Si no hay intersección en el primer cuadrante → coinciden (condición suficiente).
  - Si la hay → posible discrepancia. Ejemplo: C (−2.000 / 1.000 / 800 / 600 / 200, TIR 14,5 %) y L (−2.000 / 200 / 600 / 800 / 1.200, TIR 11,8 %); Fisher en 7,1 %. Con k < 7,1 % el VAN prefiere L; la TIR siempre C.
  - **Solución**: la rentabilidad requerida de cada uno es la del **alternativo** (coste de oportunidad). C valorado al 11,8 % → VAN > 0; L al 14,5 % → VAN < 0. **Solo uno es efectuable**.

## 8. Riesgo distinto entre excluyentes

Se prefiere la de **mayor rentabilidad neta de riesgo**. Ejemplo: X (10 %, prima 3 %) → 7 %; Y (20 %, prima 15 %) → 5 % → **mejor X**.

**Condición de efectuabilidad**: $r > k = \max[(R_f + p);\ (r' - p' + p);\ k_f]$, donde r' y p' son la rentabilidad y la prima de la mejor alternativa y $k_f$ el **coste de financiación** (coste del capital).

## 9. Pay-back frente a VAN y TIR

Con flujos constantes e ilimitados: P = A/Q y r = 1/P → menor pay-back = mayor TIR y VAN. Pero un **límite arbitrario de pay-back** puede rechazar buenas inversiones. Ejemplo: A = 2.000, Q = 500 indefinidamente, k = 10 % → VAN = **3.000**, r = 25 %, P = 4 años; con un límite de 2 años se rechazaría. El pay-back máximo congruente es 1/k = **10 años**. Para limitar el riesgo es mejor **subir la prima de riesgo**.

## 10. El problema de las inversiones mixtas

- **Regla de los signos de Descartes**: la ecuación tiene como máximo tantas soluciones positivas como **cambios de signo** en los flujos.
- **Inversión no simple**: tiene algún flujo negativo después del inicial. Puede ser **pura** (una sola solución real) o **mixta** (**ninguna o varias** TIR).
- Afecta a la **TIR** y también al **VAN** (cuando se compara con otra que necesita su r').
- **Solución**: actualizar los flujos negativos al momento 0 (al mayor entre el coste de financiación y $R_f$ + prima) e incluirlos en el desembolso inicial.

## Glosario

*(Completo, según [[GLOSARIO_TEMA_7.pdf]])*

- **Desembolso inicial**: pago que requiere una inversión para comenzar.
- **Flujo de caja**: diferencia entre los cobros y los pagos que produce una inversión en un momento.
- **Índice de rentabilidad, o coeficiente beneficio/coste**: VA de todos los cobros del proyecto / VA de todos sus pagos, incluido el desembolso inicial.
- **Inversión mixta**: inversión no simple cuya ecuación del VAN no tiene ninguna solución real o tiene varias.
- **Inversión pura**: inversión no simple cuya ecuación del VAN tiene una única solución real.
- **Inversión simple**: un desembolso inicial (negativo) y un conjunto de flujos de caja todos positivos.
- **Inversión**: sacrificio de algo inmediato a cambio de una esperanza, cuyo soporte es el bien o derecho en el que se invierte.
- **Métodos dinámicos**: criterios que incorporan el factor tiempo y el distinto valor de los capitales según su momento.
- **Métodos estáticos**: criterios que no tienen en cuenta el distinto valor de los capitales en el tiempo.
- **Plazo de recuperación con descuento**: tiempo en recuperar, en términos actuales, el desembolso inicial.
- **Plazo de recuperación, o pay-back**: tiempo en recuperar el desembolso inicial con los flujos de caja.
- **Prima de riesgo**: suplemento de rentabilidad por el riesgo que comporta la inversión.
- **Rentabilidad neta de riesgo**: diferencia entre la rentabilidad y la prima de riesgo requerida.
- **Tasa de valor actual**: VAN por cada unidad monetaria comprometida.
- **Tipo de rendimiento interno (TIR), tasa interna de rentabilidad, tasa de retorno o rentabilidad**: tipo de descuento r que hace el VAN igual a cero.
- **Tipo libre de riesgo**: rentabilidad de los activos sin riesgo.
- **Valor actual neto**: diferencia entre el valor actual y el desembolso inicial.
- **Valor actual**: equivalente en el momento 0 de todos los flujos de caja de la inversión.

## Autoevaluación (test del libro)

1. Si dos inversiones alternativas tienen **distinto riesgo**: a) No son comparables · b) Es preferible la de menor riesgo · c) Se prefiere la de mayor rentabilidad neta de riesgo · d) Ninguna
2. Las **inversiones impuestas**: a) Pagan impuesto de sociedades · b) Se hacen para cumplir leyes, convenios... · c) Sustituyen equipos obsoletos · d) Ninguna
3. Las que **requieren menos análisis**: a) Mantenimiento · b) Ampliación a nuevos productos · c) Ampliación de los existentes · d) Ninguna
4. Los **impuestos** sobre el beneficio de la inversión son: a) Pagos a descontar del flujo de caja · b) Gastos a descontar del beneficio · c) Parte del desembolso inicial · d) Ninguna
5. **Inversiones simples**: a) Un solo flujo aparte del inicial · b) Uno o dos flujos · c) Salvo el desembolso inicial, todos los flujos positivos · d) Ninguna
6. En inversiones simples, cuando k → ∞, VAN(k) tiende a: a) Cero · b) −A · c) S − A · d) Ninguna
7. En $r_R = (r_A - g)/(1+g)$: a) $r_A$ es la rentabilidad requerida neta de inflación · b) g es la rentabilidad real · c) $r_R$ es la rentabilidad aparente · d) Ninguna
8. Las rentabilidades se pueden comparar: a) Nunca · b) Solo en aparentes · c) Solo en reales · d) En aparentes o en reales
9. Para aplicar $VAN = -A + Q/k$ **basta** con que: a) Los flujos sean constantes · b) La duración tienda a infinito · c) Los flujos crezcan a tasa constante y la duración tienda a infinito · d) Ninguna
10. El problema de las **inversiones mixtas** afecta: a) Solo a la TIR · b) Solo al VAN · c) Al VAN y a la TIR · d) A ninguno

> [!success]- Soluciones (clave del libro)
> 1 c · 2 b · 3 a · 4 a · 5 c · 6 b · 7 d · 8 d · 9 d (hacen falta **las dos** cosas: flujos constantes **y** duración ilimitada) · 10 c
