---
asignatura: Gestión de Empresas Informáticas
tema: 4
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 4: Análisis de problemas y toma de decisiones

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 70-104 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen Tema 04.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_4.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Cuanta más información, más fácil decidir. Según la información hay cuatro **ambientes** (certeza, riesgo, incertidumbre estructurada y no estructurada). Para cada uno hay herramientas: **criterios de decisión**, **juegos**, **probabilidad**, **Bayes**, **normal** y **teoría de la información**. Este tema es la caja de herramientas que se reutiliza en los temas 5, 10, 11, 12 y 13.

## 1. Introducción

Se ha definido la empresa como **«centro de decisiones voluntarias tomadas en un entorno incierto»**. Muchos autores definen al empresario como quien toma las decisiones, y muchos consideran sinónimos "decisión" y "dirección".

Antes se decidía por experiencia, intuición y sentido común. Hoy hay que completarlo con un **método científico**: una aproximación **ordenada y sistemática** para resolver un problema, con instrumentos objetivos de investigación y medida.

## 2. La modelización

> **Modelo** = representación **simplificada** de una parte de la realidad. Su objetivo es comprenderla y describirla mejor para decidir mejor.

**Tipos de modelos (tabla 4.1)**, por parejas:

| Criterio | Tipo | Otro tipo |
|---|---|---|
| Objetividad | **Objetivos** (sucesos experimentables) | **Subjetivos**: informales, basados en la **intuición** |
| Uso | **Analíticos**: se **resuelven** y dan soluciones (p. ej., un sistema de ecuaciones). Incluyen los de **optimización** → son **prescriptivos** | **De simulación**: se opera sobre el modelo para ver los efectos de cada alternativa; luego **decide el decisor** → son **descriptivos** |
| Tiempo | **Estáticos**: sin la variable tiempo | **Dinámicos**: el tiempo es variable o parámetro |
| Datos | **Deterministas**: datos conocidos con certeza | **Probabilísticos** = **aleatorios** = **estocásticos** |

## 3. Ambientes de decisión

**Estados de la naturaleza**: sucesos de los que depende la decisión y en los que el decisor **apenas puede influir** (p. ej., el nivel de la demanda).

| Ambiente | Qué sabe el decisor | Ejemplo del libro |
|---|---|---|
| **Certeza** | Qué estado ocurrirá | La demanda será de 75.000 u/año |
| **Riesgo** | Qué estados pueden darse **y sus probabilidades** | 150.000 u (25 %) o 75.000 u (75 %) |
| **Incertidumbre estructurada** | Los estados, **pero no sus probabilidades** | 150.000 o 75.000, sin saber con qué probabilidad |
| **Incertidumbre no estructurada** | **Ni siquiera los estados** | La demanda podría ser cualquiera |

Conseguir información para pasar a un ambiente con más información se llama **proceso de aprendizaje**.

## 4. Criterios de decisión en incertidumbre

- **No estructurada** (y sin poder conseguir más información) → **intuición**.
- **Estructurada** → mucha subjetividad (optimismo, aversión al riesgo...). Cinco criterios (tabla 4.2).

**Ejemplo del libro (tabla 4.3)**: un agricultor elige cultivo (E1 o E2) según el invierno (S1 seco, S2 medio, S3 húmedo). Resultados favorables (ganancias):

| | S1 | S2 | S3 |
|---|---|---|---|
| **E1** | 60 | 50 | 40 |
| **E2** | 10 | 40 | 70 |

| Criterio | Regla con resultados **favorables** | Con **desfavorables** | Ejemplo |
|---|---|---|---|
| **Laplace** (racionalista, igual verosimilitud) | Parte del **postulado de Bayes**: si no se conocen las probabilidades, todos los estados son igual de probables → **media** de cada alternativa; elegir la **mayor** | Elegir la media **menor** | E1 = 50, E2 = 40 → **E1** |
| **Optimista** | Pasará lo mejor → **maxi-max** | **mini-min** | Máximos 60 y 70 → **E2** |
| **Pesimista (Wald)**, prudente | Pasará lo peor → **maxi-min** | **mini-max** | Mínimos 40 y 10 → **E1** (asegura al menos 40) |
| **Hurwicz** (optimismo parcial) | $H = \alpha \cdot \text{mejor} + (1-\alpha) \cdot \text{peor}$; elegir el **mayor** H | α pondera el valor **más bajo**; elegir el **menor** H | Con α = 0,6: H1 = 52, H2 = 46 → **E1** |
| **Savage** (mínimo pesar) | Matriz de pesares; elegir el **menor de los máximos pesares** | — | Máx. pesar E1 = 30, E2 = 50 → **E1** |

- **Hurwicz**: α es el **coeficiente de optimismo** (entre 0 y 1) y 1 − α el **de pesimismo**. Con α = 1 sale el optimista; con α = 0, el pesimista.
- **Savage**: lo siguen quienes tienen **aversión a arrepentirse**. **Pesar** = lo que se deja de ganar por no acertar = mejor resultado de la columna − resultado obtenido. Pesares: E1 → 0, 0, 30; E2 → 50, 10, 0.
- **Estrategia dominada**: A está dominada por B si B es **igual o mejor en todos los estados**. Se elimina antes de aplicar cualquier criterio.

## 5. Teoría de los juegos de estrategia

En un **juego de estrategia** el resultado depende de las decisiones de **varios jugadores** (en el apartado anterior se jugaba **contra la naturaleza**: un juego de azar).

**Clasificación**:
1. Por **número de jugadores**: 1, 2, ... n.
2. Por **ganancia total**: de **suma nula** (lo que unos ganan, otros lo pierden) o **no nula** (suma **constante** o **variable**).
3. Por **número de jugadas**: una, varias o infinitas.
4. Por **información**: completa o incompleta.
5. Por **elementos de la decisión**: **estrategia pura** (solo la actuación racional) o **mixta** (además, un elemento **aleatorio** introducido por los propios jugadores).

**Juego rectangular** = juego de **dos personas de suma nula**. Es el más sencillo y la **base de toda la teoría**.
- En la matriz, un número positivo es un pago de B a A: **A es el ganador (filas)** y **B el perdedor (columnas)**.
- Resolverlo = hallar la mejor estrategia de cada uno y el **valor del juego** (lo que gana uno y pierde el otro).
- Con criterio prudente: el ganador usa **maxi-min** y el perdedor **mini-max**. Si coinciden → **punto de silla**.
- **Truco**: el punto de silla es un número que es **el menor de su fila y el mayor de su columna**. Puede **no existir** o haber **varios**.

**Ejemplo (tabla 4.6)**:

| A \ B | P | Q |
|---|---|---|
| R | −200 | −400 |
| S | −100 | 300 |
| T | **100** | 200 |

R está dominada por S y T. Sin R, Q está dominada por P (para B). Solución: **A elige T, B elige P, valor del juego 100** (A gana 100). Es punto de silla: 100 es el menor de la fila T y el mayor de la columna P. En la tabla 4.7 (R: −200, 100; S: 200, −100) **no hay punto de silla**.

## 6. Probabilidad y riesgo

**Dos concepciones**:
- **Clásica o de Laplace**: $P(S) = h/n$ (casos favorables / casos posibles, todos igual de factibles).
- **Frecuencial u objetivista**: la probabilidad es el **límite de la frecuencia relativa** cuando las observaciones crecen indefinidamente (moneda lanzada 10.000 veces con 2.000 caras → P estimada = 0,20).

**Reglas**:
- **Suceso compuesto** (S y T): $P(S \cap T) = P(T)\,P(S/T) = P(S)\,P(T/S)$.
- Si son **independientes**: $P(S/T) = P(S)$ → $P(S \cap T) = P(S)\,P(T)$. Ejemplo: cara y un 3 → 1/2 · 1/6 = 1/12.
- **Unión**: $P(S \cup T) = P(S) + P(T) - P(S \cap T)$.
- **Mutuamente excluyentes** (no pueden darse juntos): $P(S \cap T) = 0$ → $P(S \cup T) = P(S) + P(T)$.
- Urna con 2 negras y 1 blanca, dos extracciones **sin reemplazo**: $P(N_1 \cap N_2) = \frac{2}{3}\cdot\frac{1}{2} = \frac{1}{3}$.

**Variable aleatoria**: no se sabe qué valor tomará, solo **qué valores puede tomar y con qué probabilidad**. Su **distribución de probabilidad** se dibuja con un **histograma** (área total = 1).

**Parámetros (tabla 4.11)**:

| Parámetro | Fórmula | Qué indica |
|---|---|---|
| **Esperanza matemática** (valor esperado, media) | $E(x) = \sum x_i p_i$ | Dónde está **centrada** la distribución |
| **Varianza** | $\sigma^2(x) = \sum (x_i - \bar{x})^2 p_i$ | **Forma** y dispersión; se mide en unidades² |
| **Desviación típica** | $\sigma(x) = +\sqrt{\sigma^2(x)}$ | Dispersión en las **mismas unidades** que la variable |
| **Coeficiente de variación** | $CV = \sigma(x) / E(x)$ | Riesgo **por unidad de valor esperado** |

**Ejemplo "suma de puntos"** (bolas 1, 2 y 3; dos extracciones con reemplazo): valores 2, 3, 4, 5, 6 con probabilidades 1/9, 2/9, 3/9, 2/9, 1/9 → E = **4**, σ² = 12/9 = **4/3**, σ = **1,1547**, CV = **0,2887**.

- **Dispersión significa riesgo**. Con certeza, σ = 0.
- Cuánto riesgo asumir a cambio de más beneficio esperado depende de la **aversión al riesgo** del decisor (subjetiva). Tradicionalmente el empresario tiene **poca aversión al riesgo**.

## 7. El análisis bayesiano

El **teorema de Bayes** (el **reverendo Bayes**, siglo XVIII) transforma las probabilidades **a priori** en **a posteriori** con la nueva información (proceso de aprendizaje).

Si $S_1, \dots, S_n$ son sucesos **disjuntos** y T puede darse con cualquiera de ellos:
- **Probabilidad total**: $P(T) = \sum P(T/S_i)\,P(S_i)$.
- **Bayes**: $P(S_i/T) = \dfrac{P(T/S_i)\,P(S_i)}{\sum_j P(T/S_j)\,P(S_j)}$.

**Ejemplo**: probabilidad de que la suma sea 5 sabiendo que la primera bola fue un 2: $P(S_4/T) = \frac{(1/2)(2/9)}{1/3} = \frac{1}{3}$. A priori era 2/9.

## 8. El grado de confianza

- Variables **discretas** (número finito de valores) y **continuas** (infinitos valores).
- **Distribución normal**:
  - **Simétrica**, en forma de **campana de Gauss**.
  - La probabilidad de un valor concreto es **cero**; la de un intervalo es el **área** bajo la campana.
  - Área total 1; **0,5 a cada lado** de la media.
  - Queda definida con la **media y la desviación típica**: $x \to N[E(x), \sigma(x)]$.
- **Teorema central (fundamental) del límite**: la suma de un **número infinito de variables independientes**, cada una con media y varianza finitas, sigue una **normal** (en la práctica, aproximadamente, si son muchas).
  - $E(\text{suma}) = \sum E(x_i)$ siempre.
  - $\sigma^2(\text{suma}) = \sum \sigma^2(x_i)$ **solo si son independientes**.
- **Normal tipificada** (estandarizada, cero-uno): $g \to N(0, 1)$. **Tipificar**: $g = \dfrac{x - E(x)}{\sigma(x)}$. La tabla da el área entre 0 y z.

**Ejemplo**: $x \to N(2.600;\ 386)$. $P(x > 3.206) = P(g > 1{,}57) = 0{,}5 - 0{,}4418 = 0{,}0582$ (5,82 %). Al revés: para tener un 94,18 % de confianza de que x no supere un límite, ese límite es 3.206.

## 9. La teoría de la información

Desarrollada por **Shannon** (MIT). Un suceso da **más información cuanto menos probable** era (más sorpresa).

La función de información $h(P)$ debe ser:
1. **Decreciente** con P.
2. Tender a **infinito** cuando P → 0.
3. **Cero** para un suceso seguro (P = 1).
4. **Monótona y continua**.
5. **Aditiva** para sucesos independientes.

De ahí: $h(P) = \log(1/P) = -\log P$.

| Logaritmo | Unidad |
|---|---|
| Neperiano | **Nit** |
| Decimal | **Hartley** |
| Binario | **Bit** (información de un suceso de probabilidad 1/2) |

- **Entropía** (desorden del sistema): $H = \sum P_i\,h(P_i)$. Mide la **incertidumbre antes** de saber qué ocurrirá. Siempre ≥ 0. **Mínima (0)** si un suceso es seguro; **máxima ($\log n$)** si todos son equiprobables.
- **Contenido informativo de un mensaje** que cambia la probabilidad de P a Q: $h(P) - h(Q) = \log(Q/P)$.
- **Información de canal** (contenido informativo **esperado** del mensaje): $I(Q:P) = \sum Q_i \log(Q_i/P_i)$. Siempre ≥ 0 (un mensaje **no puede desinformar**). Vale 0 si Q = P. Si el mensaje hace seguro un suceso: $I = \log(1/P) = h(P)$.

## Glosario

*(Completo, según [[GLOSARIO_TEMA_4.pdf]])*

- **Certeza**: ambiente en el que el decisor conoce los estados de la naturaleza que van a presentarse.
- **Coeficiente de variación**: desviación típica por unidad de valor esperado.
- **Criterio de Laplace**: asigna a todos los estados de la naturaleza la misma probabilidad.
- **Criterio de mínimo pesar de Savage**: basado en la aversión al arrepentimiento por equivocarse; parte de la matriz de pesares.
- **Criterio de optimismo parcial de Hurwicz**: pondera el mejor resultado de cada estrategia con un coeficiente de optimismo, α, y el peor con uno de pesimismo, 1 − α.
- **Criterio optimista**: supone que, elija lo que elija, se presentará el estado más favorable.
- **Criterio pesimista, o de Wald**: supone que, elija lo que elija, se presentará el estado más desfavorable.
- **Desviación típica**: raíz cuadrada positiva de la varianza.
- **Esperanza matemática**: valor de referencia que señala dónde está centrada la distribución de probabilidad.
- **Estados de la naturaleza**: sucesos de los que dependen los resultados de las decisiones y en los que apenas puede influir el decisor.
- **Incertidumbre estructurada**: se conocen los estados de la naturaleza, pero no su probabilidad.
- **Incertidumbre no estructurada**: ni siquiera se conocen los posibles estados de la naturaleza.
- **Juego de estrategia**: problema decisional en el que el resultado depende de las decisiones de varios jugadores.
- **Modelo**: representación simplificada de una parte de la realidad.
- **Modelos aleatorios o probabilísticos**: uno o varios datos se conocen solo en términos de probabilidades.
- **Modelos analíticos**: permiten obtener soluciones.
- **Modelos de simulación**: representaciones simplificadas sobre las que se opera para estudiar los efectos de las alternativas.
- **Modelos deterministas**: se suponen conocidos con certeza todos los datos.
- **Modelos dinámicos**: incorporan el tiempo como variable o parámetro fundamental.
- **Modelos estáticos**: no utilizan la variable tiempo.
- **Riesgo**: el decisor sabe qué estados pueden presentarse y la probabilidad de cada uno.
- **Teorema de Bayes**: modifica las probabilidades de los estados según la información adicional disponible.
- **Teorema fundamental del límite**: la suma de un número infinito de variables independientes con media y varianza finitas sigue una distribución normal.
- **Teoría de la Información**: desarrollada por Shannon; mide la información que da el acaecimiento de un suceso.
- **Variable aleatoria**: no se sabe qué valor tomará, solo qué valores puede tomar y con qué probabilidad.
- **Varianza**: esperanza matemática de los cuadrados de las desviaciones respecto a la media.

## Autoevaluación (test del libro)

1. Representación simplificada de una parte de la realidad: a) Sistema · b) Estado de la naturaleza · c) Decisión · d) Ninguna
2. Los modelos que **no son analíticos** son: a) Subjetivos · b) Probabilísticos · c) Dinámicos · d) De simulación
3. Los modelos que **no son deterministas** son: a) Subjetivos · b) Analíticos · c) Dinámicos · d) Ninguna
4. Se conocen los estados, pero no sus probabilidades: a) Incertidumbre no estructurada · b) Riesgo estructurado · c) Riesgo no estructurado · d) Ninguna
5. El criterio pesimista es el de: a) Wald · b) Laplace · c) Savage · d) Ninguna
6. ¿Dónde está el **valor de un juego rectangular**? a) En el importe que se juega · b) En su punto de silla · c) En el maxi-max del ganador · d) En el mini-min del perdedor
7. $P(S \cap T) = P(T)\,P(S)$ se aplica si S y T son: a) Mutuamente excluyentes · b) Compuestos · c) Independientes · d) Ninguna
8. $P(S \cup T) = P(S) + P(T)$ se aplica si S y T son: a) Mutuamente excluyentes · b) Compuestos · c) Independientes · d) Ninguna
9. La información de un suceso depende de: a) Su probabilidad · b) Las personas a las que llega · c) La veracidad del mensaje · d) Ninguna
10. El **contenido informativo esperado** de un mensaje: a) Entropía · b) Desorden del sistema · c) Información de canal · d) Ninguna

> [!success]- Soluciones (coinciden con la clave oficial de la fe de erratas)
> 1 d (es un *modelo*) · 2 d · 3 d (son probabilísticos) · 4 d (es incertidumbre estructurada) · 5 a · 6 b · 7 c · 8 a · 9 a · 10 c
