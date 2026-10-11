---
asignatura: Gestión de Empresas Informáticas
tema: 8
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 8: Las fuentes de financiación y su selección. El coste del capital

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 228-255 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen Tema 08.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_8.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Cada fuente de financiación tiene un **coste**: el tipo que anula el VAN de sus flujos (la TIR vista desde el que paga). Los **impuestos** abaratan la deuda, el **crédito comercial** puede salir carísimo, las **acciones** cuestan más que la deuda y la **autofinanciación** cuesta lo mismo que las acciones. El **coste medio ponderado** es la rentabilidad mínima que deben dar las inversiones (tema 7).

## 1. Introducción

Sin recursos financieros no hay inversiones, ni producción, ni comercialización. **Financiación e inversión se condicionan mutuamente** (debe haber correspondencia entre estructura económica y financiera): en realidad no hay problemas de inversión y de financiación, sino **problemas financieros**. Cómo se financia la empresa influye en su **rentabilidad y riesgo** y, por tanto, en el **precio de sus acciones**.

## 2. Financiación y tipos de fuentes

- **Financiación**: conseguir los medios necesarios para invertir.
- **Fuente financiera**: cada forma de conseguirlos.

**Tres clasificaciones**:
- **Por duración**:
  - **Capitales permanentes** (CP): aportaciones de los socios, obligaciones, otras deudas a medio y largo plazo y autofinanciación.
  - **Pasivo a corto plazo** (Pc): financiación de proveedores y préstamos y créditos bancarios a corto. Lo que es "corto" depende de la actividad (no es lo mismo fabricar tornillos que acorazados).
- **Por titularidad**:
  - **Propios** (K): **no se devuelven nunca** (aportaciones y autofinanciación).
  - **Ajenos** (D): hay que devolverlos en un plazo más o menos amplio (endeudamiento).
- **Por procedencia**:
  - **Externos** (E): captan el **ahorro de otros**.
  - **Internos** (I): generados dentro con su **propio ahorro** (retener beneficios = **autofinanciación**).

| Fuente | Duración | Titularidad | Procedencia |
|---|---|---|---|
| Aportaciones de los socios | CP | Propios | Externos |
| Autofinanciación | CP | Propios | **Internos** |
| Emisión de obligaciones | CP | Ajenos | Externos |
| Otras deudas a medio y largo | CP | Ajenos | Externos |
| Deudas a corto | **Pc** | Ajenos | Externos |

## 3. Importancia del coste del capital

1. **Selección de inversiones**: la rentabilidad requerida **nunca** puede ser inferior al coste de su financiación.
2. **Nivel de endeudamiento**: endeudarse eleva la rentabilidad financiera (y el precio de la acción) **solo si la rentabilidad operativa supera el coste de la deuda**.
3. **Selección de fuentes**: son preferibles las **más baratas**.

## 4. Cálculo del coste de una fuente

> **Coste de una fuente** = tipo de descuento que hace **nulo el VAN** de sus flujos de caja.

Si la empresa recibe A (neto de gastos) y luego paga $Q_1, \dots, Q_n$:

$$0 = A - \frac{Q_1}{1+k_f} - \frac{Q_2}{(1+k_f)^2} - \dots - \frac{Q_n}{(1+k_f)^n}$$

Sin intermediación ni impuestos, el **coste del deudor = la rentabilidad del acreedor**.

**Ejemplo**: empréstito de 100 millones al 15 %, a 2 años, con comisión del 5 % → la empresa recibe 95 y paga 15 y 115 → **coste 18,20 %**.

## 5. El coste de préstamos y empréstitos

Si no hay gastos ni impuestos, los intereses se pagan cada año y la emisión y el reembolso son por el nominal → **coste = tipo de interés**.

- **Sistema americano**: cada año se pagan **solo los intereses** y el principal se devuelve **entero al final**: $A \;/\; -iA \;/\; \dots \;/\; -(iA + A)$.
- **Sistema de cuotas constantes** (francés): todos los periodos se paga **la misma cuota** Q (intereses + principal): $Q = A / a_{\overline{n}|k}$. Con el tiempo, **los intereses bajan y la devolución de principal sube**.

**Ejemplo Apesto, S. A.** (Aplicaciones Especiales Tower): 100 millones a 3 años al 15 % → $a_{\overline{3}|0{,}15}$ = 2,2832 → **Q = 43,80** millones/año.

| Año | Deuda inicial | Intereses | Principal |
|---|---|---|---|
| 1 | 100 | 15 | 28,80 |
| 2 | 71,20 | 10,68 | 33,12 |
| 3 | 38,08 | 5,72 | 38,08 |

## 6. El efecto de los impuestos

Los **intereses** (y comisiones, quebranto de emisión y prima de reembolso) son **deducibles** en el impuesto sobre el beneficio: por cada u.m. de intereses, la empresa se ahorra t.

$$k'_f = k_f\,(1 - t)$$

Apesto con t = 33 %: 15 % → **10,05 %**. Con los impuestos, la rentabilidad del acreedor y el coste del deudor dejan de coincidir.

## 7. El coste del crédito comercial

**Crédito comercial**: el que dan los **proveedores** al aplazar el pago. Suelen ofrecer aplazar D días o un **descuento por pronto pago** s.
- El precio verdadero es el **precio al contado**: $C(1 - s)$.
- Pagar a plazo es pagar unos intereses: cada D días un tipo $h = \dfrac{s}{1 - s}$.
- **Incorrecto**: $\frac{360}{D} \cdot h$.
- **Correcto**: la tasa anual equivalente $k_c = (1 + h)^{360/D} - 1$.

**Ejemplo**: 30 u.m. a 30 días o un 10 % de descuento al contado → h = 30/27 − 1 = 0,1111 → $k_c = 1{,}1111^{12} - 1$ = **254,07 %** anual.

- Con impuestos: $h' = h\,(1 - t)$.
- **Muchas empresas incurren en costes financieros enormes sin advertirlo** (les saldría mejor pedir un crédito al banco y pagar al contado).

## 8. Inflación y valores de mercado

- **La inflación favorece a los deudores** y perjudica a los acreedores.
- Coste real: $k_R = \dfrac{k_A - g}{1 + g}$ (y $k_A = k_R + g + k_R g$).
- Si sube la rentabilidad que el mercado exige a un título de deuda, **su precio baja**.
- El coste se calcula con **valores de mercado** (la cotización): $P = \sum Q_t / (1 + k_f)^t$.

**Ejemplo Ruino, S. A.**: obligaciones de 1.000 al 10 % a las que quedan 3 años; el mercado exige ahora un 12 % → su precio baja a **952**. El coste actual de esa fuente es el **12 %** (para emitir nuevas por 1.000 tendría que pagar un 12 %). Tras impuestos (t = 33 %): **8,04 %**.

## 9. El coste de las acciones

A los accionistas se les paga con **dividendos**. El precio de la acción es el valor actual de los dividendos esperados, descontados a la rentabilidad que exigen ($k_e$). Las acciones **no se amortizan**: duración ilimitada.

$$P_e = \sum_{t=1}^{\infty} \frac{d_t}{(1+k_e)^t}$$

- Dividendos **constantes**: $P_e = d / k_e$.
- **Crecientes** a tasa f (con $k_e > f$): $P_e = \dfrac{d_1}{k_e - f}$ → $k_e = \dfrac{d_1}{P_e} + f$ = **rentabilidad por dividendos** + **rentabilidad por ganancias de capital** (plusvalías, que crecen a f).
- Ejemplo: $d_1$ = 100, f = 10 %, $k_e$ = 12 % → precio 5.000, luego 5.500, 6.050... El precio crece al 10 % y la rentabilidad por dividendos se mantiene constante en el 2 %.
- Se esperan dividendos crecientes por el crecimiento de la renta, la inflación o la estrategia de crecimiento de la empresa.

**El capital propio es más caro que el ajeno**, porque el accionista soporta más riesgo:
1. **No hay compromiso** de pagar dividendos (las obligaciones sí obligan a pagar intereses y devolver).
2. En una **quiebra**, los accionistas **cobran los últimos**.
3. Los precios de las acciones **oscilan mucho más**.
4. Además, los **intereses son deducibles** y los **dividendos no** (son reparto de beneficios).

## 10. El coste de la autofinanciación y los dividendos

Una empresa con m u.m. de beneficio por acción puede **repartirlas** o **retenerlas** para invertir a una rentabilidad r (dividendo constante d):
- Si las reparte: riqueza del accionista = $d/k_e + m$.
- Si las retiene: riqueza = $(d + r m)/k_e$.
- Conviene retener si $(d + rm)/k_e \ge d/k_e + m$ ⇔ **$r \ge k_e$**.

Conclusiones:
- El **coste de la autofinanciación = $k_e$**: los accionistas exigen la misma rentabilidad a lo que aportan comprando acciones que a los beneficios que no se les reparten. El coste de los recursos propios **no depende de su procedencia**.
- **Política de dividendos óptima**: repartir siempre que la rentabilidad esperada dentro de la empresa sea **inferior** a la que exigen los accionistas.

**Políticas habituales en la práctica**:
1. **Dividendo nominal constante** (reduce incertidumbre).
2. **Dividendo real constante** (crece con la inflación).
3. **Coeficiente de reparto estable** b (se reparte la proporción b; se retiene 1 − b).
4. Las anteriores con cierta **flexibilidad** (dividendos extraordinarios, acciones liberadas).
5. **Dividendos variables** según las necesidades de las inversiones disponibles: parece una "antipolítica", pero es **la mejor**.

## 11. El coste medio ponderado del capital

Media de los costes de las fuentes, ponderada con sus **valores de mercado**:

$$k_0 = \frac{k_e\,S + k'_f\,B}{S + B}$$

(S = recursos propios a valor de mercado con coste $k_e$; B = recursos ajenos con coste neto de impuestos $k'_f$).

**Ejemplo**: deuda de 70 millones al 10 % (t = 35 % → 6,5 %) y 200.000 acciones a 1.000 = 200 millones al 14 % → **$k_0$ = 12,056 %**; en términos reales con g = 6 %: **5,71 %**.

- El valor de mercado de una deuda que no cotiza se obtiene actualizando sus pagos al tipo actual. Ejemplo Sebo: 10 millones al 10 %, sistema americano, 2 años, mercado al 12 % → 9.661.990.
- **Coste marginal**: el de financiar una **nueva** inversión con esa fuente (al tipo actual, no al histórico).
- **Coste de oportunidad**: en empresas **en crecimiento** con inversiones más rentables que el mercado, el coste del capital hay que buscarlo en los **activos alternativos**, no en el pasivo.

## Glosario

*(Completo, según [[GLOSARIO_TEMA_8.pdf]])*

- **Capitales permanentes**: aportaciones de los socios, emisión de obligaciones, otras formas de endeudamiento a medio y largo plazo y autofinanciación.
- **Coste de una fuente de financiación**: tipo de descuento que hace nulo el VAN de sus flujos de caja.
- **Coste medio ponderado del capital**: media aritmética ponderada de los costes de las fuentes, con sus valores de mercado como ponderaciones.
- **Crédito comercial**: el concedido por los proveedores al permitir el pago aplazado.
- **Financiación**: consecución de los medios necesarios para efectuar inversiones.
- **Fuente financiera**: forma de conseguir medios financieros.
- **Pasivo a corto plazo**: financiación de los proveedores de los factores y préstamos y créditos bancarios a corto.
- **Recursos financieros ajenos**: aquellos cuya devolución se exigirá en un periodo más o menos amplio.
- **Recursos financieros externos**: los conseguidos fuera de la empresa captando el ahorro de otros.
- **Recursos financieros internos**: los generados dentro de la empresa con su propio ahorro.
- **Recursos financieros propios**: los que no han de devolverse nunca.
- **Sistema americano**: cada año se pagan los intereses y el principal se devuelve entero al final.
- **Sistema de cuotas constantes**: todos los periodos se paga la misma cuota de intereses y devolución del principal.

## Autoevaluación (test del libro)

1. Sistema de **cuotas constantes**: a) Mismos intereses cada periodo · b) Misma devolución de principal · c) Misma cuota de intereses + principal · d) Ninguna
2. El impuesto sobre el beneficio hace que el coste del endeudamiento: a) No cambie · b) Desaparezca · c) Aumente · d) Se reduzca
3. La inflación: a) Favorece a los deudores · b) Favorece a los acreedores · c) No influye a los acreedores y perjudica a los deudores · d) Ninguna
4. Si sube la rentabilidad real requerida de un título de crédito, su precio: a) Aumenta · b) Se reduce · c) No cambia · d) Vale cero
5. Esperar que el dividendo crezca constantemente significa esperar: a) Precio constante · b) Rentabilidad por dividendos constante · c) Rentabilidad total creciente · d) Ninguna
6. En cuotas constantes, con el tiempo: a) Aumentan los intereses · b) Aumenta la devolución de principal · c) El principal se mantiene constante · d) Ninguna
7. Conseguir los medios para invertir: a) Fuente financiera · b) Medio financiero · c) Financiación · d) Ninguna
8. La emisión de obligaciones son: a) Recursos propios · b) Autofinanciación · c) Capitales permanentes · d) Ninguna
9. Según su **titularidad**: a) Propios y ajenos · b) Externos e internos · c) Permanentes y a corto · d) Ninguna
10. Las **aportaciones de los socios** son recursos: a) Ajenos · b) Internos · c) A corto plazo · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 c · 2 d · 3 a · 4 b · 5 b · 6 b · 7 c · 8 c · 9 a · 10 d (son propios, externos y permanentes)
