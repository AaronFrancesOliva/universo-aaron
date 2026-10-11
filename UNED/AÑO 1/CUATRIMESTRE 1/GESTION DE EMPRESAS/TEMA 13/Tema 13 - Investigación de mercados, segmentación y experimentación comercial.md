---
asignatura: Gestión de Empresas Informáticas
tema: 13
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 13: Investigación de mercados, segmentación y experimentación comercial

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 408-433 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_13.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_13.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> La **investigación comercial** consigue información para **reducir el riesgo**. Se trabaja con **muestras** (aleatorias o por cuotas), se **segmenta** el mercado en consumidores y no consumidores (métodos de **Belson**, **ji-cuadrado** y **análisis de la varianza**) y se **experimenta** para medir el efecto de una variable sobre las ventas (análisis de la varianza y estadístico **F**).

## 1. La investigación comercial o de mercados

> **Investigación comercial** (o de mercados; se usan como sinónimos): función de **conseguir y analizar la información** necesaria para tomar decisiones y controlarlas.

- **Objetivo último: reducir el riesgo**. Cuanta menos información, más riesgo de error. Pero la información cuesta: los estudios deben ser más amplios cuanto mayor sea la pérdida posible.

**Fuentes de información**:
- **Internas**: datos de la propia empresa (estadísticas de ventas, costes, resultados de políticas anteriores).
- **Externas**:
  - **Secundarias**: estadísticas e informes de organismos públicos y privados. Baratas y rápidas, pero a veces **poco fiables** y con **retraso**.
  - **Primarias**: el **mercado**, la principal fuente de datos primarios externos en marketing.

**Objetivos inmediatos** posibles (todos lo son):
1. **Descripción** del objeto estudiado.
2. **Contrastación previa** de hipótesis de decisión.
3. **Explicación** de relaciones (ventas y precio o publicidad).
4. **Predicción** de valores futuros.
5. **Control** de la ejecución de las decisiones.

### 1.1 El proceso de investigación
1. **Objetivo** de la investigación.
2. **Balance de la situación**.
3. **Investigación informal**.
4. **Planificación**:
   - Revisión de fuentes.
   - Selección de fuentes.
   - **Método de obtención** de datos: **encuestas** (personal, telefónica, por correo), **observación** (directa o mecánica: cámaras, contadores) o **experimentos** (**prueba de mercado**: un mercado de **control** donde todo se mantiene y mercados de **prueba** donde se cambia un factor).
   - Preparación y prueba de los impresos (cuestionarios).
   - **Selección de la muestra**.
5. **Recogida de datos** (entrevistadores).
6. **Ordenación, análisis e interpretación**.
7. **Elaboración de informes** (concisos pero completos, con metodología y conclusiones).
8. **Prestaciones ulteriores**: la investigación **no termina con el informe**.

**¿Propia o encargada fuera?** Los **consultores externos** no conocen la empresa por dentro, pero son más **objetivos e imparciales** y a veces más baratos:
- **Encuestas colectivas**: por cuenta de varias empresas a la vez.
- **Paneles**: una muestra permanente que responde periódicamente el mismo cuestionario. Son caros, así que los llevan empresas especializadas que venden suscripciones.

## 2. La selección de la muestra

A partir de cierto tamaño, aumentar mucho la muestra apenas mejora la fiabilidad.

**Métodos probabilísticos**:
- **Aleatorio simple**: se numeran los elementos y se eligen con números aleatorios (bombo, tabla).
- **Aleatorio sistemático**: el primero al azar y los demás a intervalos de N/n (población / muestra). Con base territorial = **por itinerarios**.
- **Aleatorio estratificado**: se divide la población en **estratos** según un criterio de segmentación y de cada uno se saca una muestra aleatoria. Con base territorial = **por conglomerados o áreas**. Si los estratos se subdividen sucesivamente (barrios → manzanas → edificios) = **polietápico**.

**Afijación** (cómo repartir la muestra n entre los m estratos; $N_i$ = población del estrato i):

| Afijación | Tamaño de la muestra del estrato i |
|---|---|
| **Por igual** | $n_i = n / m$ |
| **Proporcional** | $n_i = n \cdot N_i / N$ |
| **Óptima** (más muestra donde hay más heterogeneidad) | $n_i = n \cdot \dfrac{N_i S_i}{\sum N_j S_j}$ ($S_i$ = desviación típica en el estrato) |
| **Óptima con costes variables** | proporcional a $N_i S_i / \sqrt{C_i}$ ($C_i$ = coste de informarse de un elemento) |
| **Según el valor de una variable** $x_i$ | $n_i = n \cdot x_i / \sum x_j$ |

**Método no probabilístico**: **por cuotas**. Al entrevistador se le asigna un número de personas por categorías (sexo, edad...) y las elige **subjetivamente**.

## 3. La segmentación de mercados

> **Segmentar** = dividir el mercado en grupos de características similares (homogéneos por dentro, distintos entre sí).

- La empresa puede dirigirse al segmento que mejor le encaje o a **varios con estrategias diferenciadas** (según sus limitaciones). Dirigirse "a la media" solo funciona con poca competencia; otra opción son segmentos minoritarios no cubiertos.
- Combinar criterios da segmentos más pequeños, pero segmentar demasiado deja de ser operativo.

**Tipos de segmentación**:
- **Demográfica**: edad, sexo, raza, estado civil...
- **Geográfica**: región, clima, tamaño del municipio, rural o urbano.
- **Sociológica**: clase social, renta, profesión, educación, religión.
- **Psicográfica**: **personalidad, estilo de vida, valores**.
- **Por posesión de otros productos** (quien tiene cámara de fotos puede comprar un tomavistas).

## 4. Métodos de segmentación

Agrupan la población en dos **categorías dicotómicas**: los que **consumen** el producto y los que **no**. Dos fases:
1. Encontrar la **mejor agrupación** con cada criterio.
2. Comparar los criterios y elegir el de **mayor capacidad discriminante**.

**Ejemplo Cosaloca**: 5.000 personas, 500 consumidores (media del 10 %).

| Criterio | Grupo | Personas | Consumidores |
|---|---|---|---|
| Edad | I (≤ 30) | 650 | 100 |
| | II (31-50) | 1.800 | 190 |
| | III (> 50) | 2.550 | 210 |
| Renta | Baja | 625 | 155 |
| | Media | 1.700 | 175 |
| | Alta | 2.675 | 170 |

| Método | Cómo agrupa y mide | Resultado en Cosaloca |
|---|---|---|
| **Belson** (el más sencillo) | Junta los grupos **por encima de la media** frente a los de **por debajo**. Capacidad = $\lvert E_i - T_i \rvert$ (consumidores efectivos − teóricos con el porcentaje medio) | Edad (I+II / III): 45. Renta (B+M / A): 97,5 → **renta** |
| **Ji-cuadrado** ($\chi^2$) | La agrupación con mayor $S = \sum (E_i - T_i)^2 / T_i$ | Edad (I / II+III): 21,66. Renta (B / M+A): 156,46 → **renta**. Con 1 grado de libertad, el valor de tablas al 95 % es 3,84 → significativo |
| **Análisis de la varianza** | Maximiza $D_{1-2} = \dfrac{N_1 N_2}{N}(\bar{y}_1 - \bar{y}_2)^2$ ($\bar{y}$ = proporción de consumidores) | Edad (II+III / I): 2,17. Renta (B / M+A): 15,65 → **renta** |

El análisis de la varianza maximiza la dispersión **entre** grupos (= minimiza la de **dentro**). El ji-cuadrado y el análisis de la varianza **discriminan más** que Belson.

## 5. La experimentación comercial

> Analizar **empíricamente** el efecto de una variable que **controla** la empresa (promoción, precio...) sobre otra que **no controla** directamente (las ventas).

La técnica más usada es el **análisis de la varianza**.

| Dispersión | Qué mide | Fórmula |
|---|---|---|
| **Total** ($D_T$) | Cada dato respecto a la **media general** | $\sum (X_{tk} - \bar{X})^2$ |
| **Factorial** ($D_f$) | Las **medias de los grupos** respecto a la media general (el efecto del factor) | $n \sum (\bar{X}_k - \bar{X})^2$ |
| **Residual** ($D_r$) | Los datos de cada grupo respecto a **su media** (factores **incontrolados**) | $\sum (X_{tk} - \bar{X}_k)^2$ |

Se cumple $D_T = D_f + D_r$. Si la factorial es **significativamente** mayor que la residual, el factor tiene efecto. Se contrasta con el **estadístico F**, cociente de **cuasivarianzas** (m = grupos, N = datos):

$$F = \frac{D_f / (m - 1)}{D_r / (N - m)}$$

**Ejemplo**: promoción en tres establecimientos (nivel bajo, medio y alto) durante 10 días: medias 39,5; 41 y 47; media general 42,5. $D_T$ = 11.337,5; $D_f$ = 315; $D_r$ = 11.022,5. $F = \frac{315/2}{11.022{,}5/27} = 0{,}386$, por debajo del valor de tablas (≈ 3,3 al 5 %) → **el efecto no es significativo**.

## Glosario

*(Completo, según [[GLOSARIO_TEMA_13.pdf]])*

- **Experimentación comercial**: análisis empírico del efecto de distintas variables sobre las ventas.
- **Fuentes de información externas**: datos localizados fuera de la empresa.
- **Fuentes de información internas**: datos localizados en la propia empresa.
- **Investigación comercial, o de mercados**: función de consecución y análisis de la información precisa para tomar decisiones y controlarlas.
- **Métodos de segmentación de mercados**: procedimientos para agrupar la población en dos categorías dicotómicas: quienes consumen el producto y quienes no.
- **Muestreo aleatorio estratificado**: dividir la población en grupos según el criterio de segmentación y sacar de cada uno una muestra aleatoria.
- **Muestreo aleatorio por itinerarios**: muestreo aleatorio sistemático con base territorial.
- **Muestreo aleatorio simple**: se numeran los elementos y se eligen con un procedimiento de números aleatorios o una tabla.
- **Muestreo aleatorio sistemático**: el primer elemento al azar y los demás a intervalos de población/muestra.
- **Segmentación de mercados**: división de los mercados en grupos de características similares.

## Autoevaluación (test del libro)

1. **Objetivo último** de la investigación comercial: a) Más información · b) Mejor información · c) Reducir el riesgo · d) Ninguna
2. La investigación comercial **se entiende concluida**: a) Con la ordenación de los datos · b) Con su análisis e interpretación · c) Con los informes para la dirección · d) Ninguna
3. Muestreo aleatorio **sistemático con base territorial**: a) Estratificado · b) Por itinerarios · c) Por conglomerados o áreas · d) Ninguna
4. El muestreo **por cuotas** es: a) No probabilístico · b) Polietápico · c) Por conglomerados · d) Ninguna
5. Segmentar por **personalidad, estilo de vida o valores**: a) Psicológica · b) Psicosociológica · c) Psicográfica · d) Ninguna
6. Técnica más usada en **experimentación comercial**: a) Belson · b) Ji-cuadrado · c) Análisis de la varianza · d) Ninguna
7. El **estadístico F** es el cociente entre: a) Dispersión residual y factorial · b) Cuasivarianza residual y factorial · c) Cuasivarianza residual y dispersión factorial · d) Ninguna
8. La variabilidad por **factores incontrolados** la refleja la dispersión: a) Factorial · b) Residual · c) Total · d) Ninguna
9. La de cada establecimiento respecto a **sus propias ventas medias**: a) Total · b) Residual · c) Factorial · d) Parcial
10. ¿Cuál **no** puede ser objetivo inmediato? a) Descripción · b) Contrastación previa de hipótesis · c) Predicción · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 c · 2 d (sigue con las prestaciones ulteriores) · 3 b · 4 a · 5 c · 6 c · 7 d (es **factorial / residual**, al revés) · 8 b · 9 b · 10 d
