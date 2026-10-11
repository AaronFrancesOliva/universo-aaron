---
asignatura: Gestión de Empresas Informáticas
tema: 12
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 12: Elementos de marketing. El mercado, la demanda y el presupuesto mercadotécnico

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 366-406 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen Tema 12.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_12.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Abre el bloque de marketing (temas 12-14). El marketing crea utilidades de **tiempo, lugar y propiedad** y se combina en el **marketing-mix** (producto, distribución, promoción y precio). A corto plazo la demanda depende de **precio, venta personal y promoción**, medida con **elasticidades**, que dan el **presupuesto óptimo**. Después se **controla** con desviaciones y se **prevé** la demanda (extrapolación, regresión y **cadenas de Markov**).

## 1. Introducción

> **Marketing** = actividades que dirigen el **flujo de bienes y servicios del productor al consumidor**.

La empresa crea cuatro utilidades:
- **De forma**: la crea la **producción** (convertir materias primas en productos).
- **De tiempo**: el producto está disponible **cuando** el consumidor lo quiere (exige investigar lo que querrá en el futuro).
- **De lugar**: disponible **donde** lo quiere.
- **De propiedad**: se transfiere el **dominio** del vendedor al comprador.

En cierto modo, el marketing es parte del proceso de producción.

## 2. Evolución: la empresa orientada al cliente

1. **Orientación a la producción** (desde la Revolución Industrial hasta las primeras décadas del siglo XX): productos de calidad a bajo coste; venderlos era un problema menor.
2. **Orientación a las ventas**: con la competencia, lo prioritario es el esfuerzo para **vender** lo producido.
3. **Orientación a los consumidores**: primero averiguar **qué desean** y luego producirlo con beneficio.
4. **Orientación a la competencia**: conseguir **ventajas sobre los competidores**.
5. **Orientación al cliente**: el **cliente es el centro** de la organización.
6. **Orientación social**: la satisfacción y el **bienestar a largo plazo** de los clientes y de la sociedad.

## 3. El marketing como función empresarial

- Se relaciona con **producción y finanzas**: las perspectivas de mercado dan un plan de ventas (objetivo de ventas) → plan de producción e inversiones → necesidades financieras → plan financiero (figura 12.1).
- Antes se decidía por experiencia e intuición; hoy hace falta un **método científico**. Campos de aplicación: **información y previsiones** (estadística, sondeos, paneles), **prueba previa** de las decisiones (parcial: producto, envase, marca; total: mercado de prueba), **toma de decisiones** y **control posterior** (análisis de desviaciones).

**Cómo se encadenan las decisiones**:
- Información de partida: las **necesidades insatisfechas** del mercado y las **limitaciones** financieras, técnicas y comerciales de la empresa → de ahí salen el **segmento** y el **producto**.
- Cada decisión limita las siguientes:
  - **Distribución**: según el mercado, la red de distribución y el producto.
  - **Promoción y publicidad**: además, según el tipo de distribución elegido.
  - **Precio**: según todo lo anterior y las limitaciones de la empresa.

> **Marketing-mix** (mezcla comercial): cada combinación de las cuatro políticas: **producto, distribución, promoción y precio**. El problema principal es encontrar la mezcla óptima para el segmento elegido.

**Principios del marketing-mix**:
1. **Restricción** en la toma de decisiones (imagen, especialización y medios son fijos a corto plazo).
2. **Interdependencia**.
3. **Secuencia** (lo primero, el mercado objetivo).
4. **Retroacción** (revisar decisiones anteriores).
5. **Control**.

(Ojo: "especificidad" **no** es un principio; pregunta del test.)

Las decisiones son **cuantitativas** (presupuesto y su reparto) y **cualitativas** (medios y soportes), y cambian en el tiempo (ciclo de vida) y en el espacio.

## 4. Clases de mercados

**Por número de oferentes y demandantes**:

| Demandantes \ Oferentes | Muchos | Pocos | Uno |
|---|---|---|---|
| **Muchos** | **Competencia perfecta** | **Oligopolio** | **Monopolio** |
| **Pocos** | **Oligopsonio** (oligopolio de demanda) | Oligopolio bilateral | Monopolio limitado |
| **Uno** | **Monopsonio** (monopolio de demanda) | Monopsonio limitado | **Monopolio bilateral** |

**Otras clasificaciones**:
- **Grado de elaboración**: productos primarios, semielaborados, manufacturados y servicios.
- **Perspectiva temporal**: pasado, presente y futuro.
- **Posibilidad de expansión**:
  - **Actual**: los consumidores actuales.
  - **Potencial**: los actuales más los que pueden llegar a serlo con un buen marketing.
  - **Tendencial**: aquel hacia el que se tiende.
- **Adquirentes**: mayoristas, minoristas y consumidores.
- **Características y motivos de compra** (según el **uso final** del producto):
  - **De consumo**: individuos o familias que compran para consumir o usar. Bienes de consumo inmediato, **duradero** (se consumen por depreciación u obsolescencia) y servicios.
  - **Industriales**: compran por encargo de organizaciones que necesitan los productos para su actividad.

## 5. Funciones de demanda a corto plazo y elasticidades

A corto plazo el **producto y la distribución** no se pueden cambiar rápido (son constantes). La demanda depende del **precio** (p), la **venta personal** (F) y la **promoción** (A): $q = q(p, F, A)$.

> **Elasticidad** = variación porcentual de la demanda / variación porcentual de la variable.

$$\varepsilon_F = \frac{\partial q}{\partial F}\cdot\frac{F}{q} \qquad \varepsilon_A = \frac{\partial q}{\partial A}\cdot\frac{A}{q} \qquad \varepsilon_p = -\frac{\partial q}{\partial p}\cdot\frac{p}{q}$$

(la del precio lleva signo menos para que salga positiva).

- Con funciones exponenciales $q = k\,p^{-b_1} A^{b_2} F^{b_3}$ las elasticidades son **constantes** ($b_1$, $b_2$, $b_3$).
- Ejemplo Elástica: $q = 150 - 3p + 15\ln A + 12\ln F$ con p = 45, A = 450, F = 150 → q = 166,77; $\varepsilon_p$ = 0,81; $\varepsilon_A$ = 0,09; $\varepsilon_F$ = 0,07.

## 6. Optimización del presupuesto mercadotécnico a corto plazo

Supuestos: **competencia monopolística** (los consumidores perciben el producto como diferente de los demás), corto plazo, costes variables y fijos constantes. Se maximiza el beneficio $B = pq - c_v q - CF - A - F$:

| Óptimo | Fórmula |
|---|---|
| **Precio** | $p^* = \dfrac{\varepsilon_p}{\varepsilon_p - 1}\,c_v$ (equivale a $\frac{p - c_v}{p} = \frac{1}{\varepsilon_p}$) |
| **Fuerza de ventas** | $F^* = \varepsilon_F\,(p - c_v)\,q = \dfrac{\varepsilon_F}{\varepsilon_p}\,pq$ |
| **Promoción** | $A^* = \varepsilon_A\,(p - c_v)\,q = \dfrac{\varepsilon_A}{\varepsilon_p}\,pq$ |

- Proporciones óptimas sobre ventas: $A/pq = \varepsilon_A/\varepsilon_p$; $F/pq = \varepsilon_F/\varepsilon_p$.
- Con un **presupuesto fijo** M = A + F: en el óptimo, la **respuesta marginal** de la demanda es **igual** para ambas variables ($\partial q/\partial A = \partial q/\partial F$).
- **Reparto entre territorios**: igual respuesta marginal en todos.
- **Equilibrio competitivo** entre dos empresas: cada una maximiza su beneficio dadas las variables de la otra; ninguna mejora cambiando sola.

## 7. Control del presupuesto mercadotécnico

Los costes fijos son previsibles, así que se controla el **beneficio bruto** $BB = q \cdot m$ ($m = p - c_v$ = margen bruto unitario). Con r = real y s = estimado:

$$DT = q_r m_r - q_s m_s = \underbrace{q_r(m_r - m_s)}_{DM} + \underbrace{m_s(q_r - q_s)}_{DQ}$$

| Desviación | Se descompone en |
|---|---|
| **En márgenes** (DM) | **En precios**: $DP = q_r(p_r - p_s)$ + **en costes**: $DC = q_r(c_{vs} - c_{vr})$ |
| **En cantidades** (DQ) | **En cuotas**: $DK = m_s Q_r (t_r - t_s)$ + **en tamaño del mercado**: $DG = m_s t_s (Q_r - Q_s)$ |

(q = t · Q, con t = cuota de mercado y Q = tamaño del mercado.) Es la misma lógica que los costes estándares del tema 9. Ejemplo CTR: DT = −40 M = DM −140 M (DP −350 M, DC +210 M) + DQ +100 M (DK +131,25 M, DG −31,25 M).

## 8. La previsión de la demanda

Hay que prever la evolución espontánea y la respuesta a las acciones de la empresa. Horizonte: **corto** (coyuntural), **medio** (estructural) y **largo** (casi nada es constante).

**Tres tipos de métodos**:
1. **Opiniones e intenciones** (consumidores, vendedores, expertos).
2. **Extrapolación** de datos históricos.
3. **Explicativos** (otras variables además del tiempo).

Los dos primeros sirven a corto plazo y para la evolución espontánea; los explicativos, a cualquier plazo y también para prever reacciones a decisiones.

### 8.1 Modelos de extrapolación
Suponen que las **tendencias regulares del pasado se mantendrán**.
- Regresión lineal sobre el tiempo: $V_t = \alpha + \beta t$. Otras formas: logarítmica, exponencial, potencial, **curva de Gompertz**...
- **Medias móviles**, para eliminar variaciones accidentales.
- **Componentes** de una serie: **tendencia** (T), **estacionales** (E), **cíclicas** o de coyuntura (C) y **accidentales** (A). Hipótesis **aditiva** (V = T + E + C + A) o **multiplicativa** (V = T · E · C · A).

### 8.2 Modelos explicativos
- **Regresión**: $V = \alpha + \sum \beta_i X_i + e$ (residuos normales, media 0, varianza constante, no correlacionados). Si no es lineal, se toman logaritmos.
- **Mínimos cuadrados** (minimizar $\sum e^2$): $\beta = \dfrac{cov(V, X)}{\sigma^2(X)}$; $\alpha = \bar{V} - \beta\bar{X}$.
- **Coeficiente de determinación**: $r = \dfrac{cov^2(V,X)}{\sigma^2(X)\,\sigma^2(V)}$, entre 0 y 1.
- **Coeficiente de correlación**: $\rho = \dfrac{cov(V,X)}{\sigma(X)\,\sigma(V)}$, entre −1 y 1.
- **Variables exógenas** (no dependen de la empresa: renta, población, precios de la competencia) y **variables de acción** (dependen de ella: publicidad, precios propios).
- Modelos con **retardos** (las variables se anticipan a las ventas).

### 8.3 Cuotas de mercado y cadenas de Markov
- **Cuota de mercado**: proporción del mercado total que obtiene una empresa, marca o producto.
- **Vector de estado**: las cuotas de todos los ítems en un periodo.
- **Cadena de Markov de primer orden**: solo el último estado influye en el siguiente.
- **Matriz de transición** M: cada $p_{ij}$ es la **probabilidad de pasar** de i a j (cada fila suma 1).
- $Q(1) = P(0) \cdot M$; si M es **estacionaria**, $Q(n) = P(0) \cdot M^n$.
- **Asintóticamente ergódica**: si $M^n$ **tiene límite**. Las **cuotas límite** L cumplen $L = L \cdot M$ y $\sum L = 1$.
- Ejemplo: P(0) = [0,1 0,2 0,7] y M = [0,5 0,1 0,4; 0,1 0,8 0,1; 0,3 0,2 0,5] → Q(1) = [0,28 0,31 0,41]; cuotas límite [0,2667 0,4333 0,3].

## Glosario

*(Completo, según [[GLOSARIO_TEMA_12.pdf]])*

- **Bienes de consumo duradero**: se usan durante largos periodos en los que se consumen por depreciación u obsolescencia.
- **Cuota de mercado**: proporción del mercado total obtenida por una empresa, marca, producto, línea o ítem.
- **Marketing-mix, o mezcla comercial**: cada combinación de las cuatro políticas: producto, precio, promoción y distribución.
- **Matriz de transición**: sus elementos son las probabilidades de cambio de cada ítem a cada uno de los otros.
- **Mercado de competencia monopolística**: los consumidores perciben que el producto difiere de cualquier otro y satisface deseos que ningún otro satisface del mismo modo.
- **Mercados de consumo**: los adquirentes son individuos o familias que compran para consumir o usar.
- **Mercados industriales**: los adquirentes compran por encargo de organizaciones que necesitan los productos para su actividad.
- **Orientación a la competencia**: basada en conseguir ventajas sobre los competidores.
- **Orientación a la producción**: elaborar productos de calidad a bajo coste; venderlos es un problema menor.
- **Orientación a las ventas**: lo prioritario es el esfuerzo para vender lo elaborado.
- **Orientación a los consumidores**: determinar lo que desean para producirlo y ofrecerlo con beneficio.
- **Orientación al cliente**: el cliente es el centro de la organización.
- **Orientación social**: procurar la satisfacción y el bienestar a largo plazo de los clientes y de la sociedad.
- **Utilidad de forma**: la crea la producción al convertir materias primas y factores en productos terminados.
- **Utilidad de lugar**: poner el producto a disposición del consumidor donde desea adquirirlo.
- **Utilidad de propiedad**: transferir el dominio del vendedor al comprador.
- **Utilidad de tiempo**: poner el producto a disposición del consumidor cuando desea adquirirlo; exige investigar lo que deseará en el futuro.
- **Variables de acción**: dependen de la voluntad empresarial.
- **Variables exógenas**: independientes de la voluntad de la empresa.
- **Vector de estado de un periodo**: sus elementos son las cuotas de mercado de los distintos ítems en ese periodo.

## Autoevaluación (test del libro)

1. La **utilidad de propiedad** se crea: a) Convirtiendo materias primas en productos · b) Poniendo el producto a disposición del consumidor cuando lo desea · c) Poniéndolo a disposición del productor · d) Ninguna
2. Tras la orientación a la producción vino la orientación: a) A las ventas · b) A los consumidores · c) A la competencia · d) Ninguna
3. ¿Cuál **no** es un campo del método científico en marketing? a) Obtener información · b) Elaborar previsiones · c) El control posterior · d) Ninguna
4. ¿Qué **no** condiciona la política de promoción y publicidad? a) Las características del producto · b) El tipo de distribución · c) Las limitaciones comerciales · d) Ninguna
5. ¿Cuál **no** es un principio del marketing-mix? a) Especificidad · b) Interdependencia · c) Retroacción · d) Ninguna
6. Mercados de consumo frente a industriales se distinguen por: a) Las características del producto · b) Quién lo selecciona · c) El uso final del producto · d) Ninguna
7. Modelos basados en tendencias regulares del pasado: a) Explicativos · b) De explotación · c) De extrapolación · d) Ninguna
8. Los elementos de la **matriz de transición** son: a) Cuotas de mercado · b) Probabilidades de cambio de estado · c) Cuotas probables · d) Ninguna
9. Una cadena de Markov es **asintóticamente ergódica** cuando: a) La potencia de la matriz es un vector · b) El vector de estado es estacionario · c) La matriz es estacionaria · d) Ninguna
10. En el control del presupuesto: a) DM = cuotas + precios · b) DQ = costes + tamaño del mercado · c) DP = márgenes + costes · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 d (se crea transfiriendo el dominio) · 2 a · 3 d · 4 d · 5 a · 6 c · 7 c · 8 b · 9 d (cuando $M^n$ tiene límite) · 10 d (DM = precios + costes; DQ = cuotas + tamaño)
