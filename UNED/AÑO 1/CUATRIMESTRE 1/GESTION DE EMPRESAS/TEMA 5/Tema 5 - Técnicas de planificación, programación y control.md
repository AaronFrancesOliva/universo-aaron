---
asignatura: Gestión de Empresas Informáticas
tema: 5
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 5: Técnicas instrumentales de planificación, programación y control

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 106-143 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_05.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_5.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Cuatro herramientas de la **investigación operativa**: **árboles de decisión** (decisiones encadenadas y valor de la información), **programación lineal** (optimizar con restricciones), **PERT** (programar proyectos y su camino crítico) y **Gantt** (controlar la ejecución). Usan lo del tema 4 (Bayes, esperanza, normal).

## 1. Introducción

Son técnicas de la **investigación operativa**: métodos y modelos desarrollados muchos de ellos con **fines bélicos**, que donde más se aplican y desarrollan es en la **Economía de la Empresa**.

## 2. Árboles de decisión

**Decisiones secuenciales**: sometidas a un proceso **dinámico y adaptativo** en un periodo (horizonte de las decisiones) en el que **se concatenan**: cada una condiciona a las siguientes y viene condicionada por las anteriores y por los estados de la naturaleza ocurridos.

**Árbol de decisión**: representa el proceso decisional con las alternativas posibles y los resultados de cada una según el estado de la naturaleza.

| Elemento | Representa |
|---|---|
| **Nudo decisional** (□ cuadrado) | Situación en la que hay que **decidir**. **El primer nudo siempre es decisional** |
| **Nudo aleatorio** (○ círculo) | Situación ante **estados de la naturaleza** (sucesos aleatorios) |
| **Ramas** (aristas) que salen de un decisional | **Alternativas** de decisión |
| **Ramas** que salen de un aleatorio | **Estados de la naturaleza**, con sus probabilidades |

- **Valor de un nudo aleatorio** = **esperanza matemática** de los valores de sus ramas.
- **Valor de un nudo decisional** = **el mejor** de los valores de sus ramas.
- Se resuelve **de derecha a izquierda**.
- Numeración válida: los nudos posteriores llevan números más altos, sin saltarse ninguno.
- Si se plantea conseguir **información adicional**, las probabilidades posteriores son **a posteriori** y se calculan con **Bayes**.

### Ejemplo del libro: el cliente mentiroso
Un cliente de mal carácter: cuando piensa que sí, dice que sí el 80 % de las veces; cuando piensa que no, dice que sí el 10 %. Probabilidad a priori de que le guste el nuevo vendedor: 60 %. Si se le asigna y le gusta, **+39.000** u.m./mes; si no le gusta, **−61.000**. Preguntarle cuesta **10.000** (por molestarle).

- Sin preguntar: asignar vale $0{,}6 \cdot 39.000 - 0{,}4 \cdot 61.000 = -1.000$ → **no asignar** (valor 0).
- Bayes: $P(DS) = 0{,}8 \cdot 0{,}6 + 0{,}1 \cdot 0{,}4 = 0{,}52$; $P(DN) = 0{,}48$; $P(S/DS) = 0{,}48/0{,}52 = 0{,}923$; $P(S/DN) = 0{,}12/0{,}48 = 0{,}25$.
- Si dice que sí: asignar vale 31.307,69 → asignar. Si dice que no: asignar sale negativo → no asignar.
- Valor preguntando: **16.280**.

**Valor de la información**:
- **VEI** (valor esperado de la información) = 16.280 − 0 = **16.280**.
- **VENI** (valor esperado **neto**) = VEI − coste = 16.280 − 10.000 = **6.280 > 0** → conviene preguntar.
- **Decisión óptima**: preguntar; asignar si dice que sí, no asignar si dice que no.
- El coste de la información se resta **al final** (en el VENI), no en las ramas.
- Riesgo de asignar tras un "sí": σ = 26.659,15 u.m.; CV = **85,15 %**.

## 3. Valor esperado de la información perfecta (VEIP)

**Información perfecta**: la que es correcta con probabilidad del **100 %**.

El **VEIP** es el **máximo que puede pagarse por cualquier información**: si por la perfecta no se paga más, menos por una imperfecta. En el ejemplo: con información perfecta nunca se pierde (si le gusta, se asigna y se ganan 39.000; si no, no se asigna y se gana 0) → $VEIP = 0{,}6 \cdot 39.000 + 0{,}4 \cdot 0 = 23.400$, más que el VEI imperfecto (16.280).

## 4. La programación lineal

> Una **función objetivo lineal** que se maximiza o minimiza, sujeta a **restricciones lineales** (≤, ≥ o =) y a la **no negatividad** de las variables.

- Es un problema de **óptimo condicionado**, pero al ser lineal **no sirven los métodos clásicos** de cálculo de máximos y mínimos: hay algoritmos (informatizados) que el libro no estudia.

**Resolución gráfica** (dos variables):
1. Dibujar las restricciones como **igualdades** en el **primer cuadrante** → región de soluciones posibles.
2. Dibujar la función objetivo con un valor **arbitrario** de Z.
3. Trazar **paralelas** lo más **lejos** del origen posible (máximo) o lo más **cerca** (mínimo) que toquen la región.
4. El punto de contacto es el óptimo. **Varios puntos** → **varias soluciones**.

**Ejemplo Teleinsert, S. A.** (anuncios de galletas para perros): módulo A (2 min de día + 2 de noche, 20.000 espectadores) y B (2 de día + 8 de noche, 40.000); máximo 8 min de día y 14 de noche.
- Max $Z = 20.000X + 40.000Y$ con $2X + 2Y \le 8$; $2X + 8Y \le 14$; $X, Y \ge 0$.
- Óptimo en el cruce de las dos restricciones: **X = 3, Y = 1**, **Z = 100.000**.

## 5. El método PERT: introducción

> **PERT** (*Program Evaluation and Review Technique*): planificar, ejecutar y controlar proyectos con **muchas actividades** con **relaciones de precedencia**, en **tiempo y medios limitados**.

**Historia**:
- **Oficina de Proyectos Especiales de la Marina** de EE. UU. + **Lockheed** + la consultora **Booz-Allen & Hamilton**, para los submarinos con misiles **Polaris**. Empezó en **1957**; a finales de **1958** se aplicó y se adelantó **dos años** sobre los **cinco** previstos.
- Fuerzas Aéreas de EE. UU.: **PEP** (*Programme Evaluation Procedure*).
- **Du Pont de Nemours (1958)**: **CPM** (*Critical Path Method*, camino crítico). **J. E. Kelley** lo amplió con la relación **coste-duración** → programación a coste mínimo.
- **Bernard Roy**: **método de los potenciales** (método Roy), **dual** del PERT, presentado en el congreso de la **IFORS (1960)**.
- Todo junto: **programación reticular** (o técnicas PERT-CPM).

**PERT vs CPM** (iguales en lo esencial; cambia la notación):

| PERT | CPM |
|---|---|
| Suceso | Nudo |
| Actividad | Trabajo |
| Holguras | Flotantes |
| Tiempo *early* | Tiempo más bajo de iniciación |
| Tiempo *last* | Tiempo más alto de iniciación |
| **Tres** estimaciones de tiempo | **Una** sola |

- El CPM "extendido" de Kelley estudia cómo afectan las duraciones a los costes (luego se incorporó al PERT).
- **Método Roy**: las actividades son **nudos** y las flechas indican el **orden**. Es más congruente con la teoría de grafos y más intuitivo.

**Antes de aplicar el PERT**: el proyecto **ya viene dado** (se estudia la forma más económica de hacerlo). Toda programación temporal requiere: (1) **relacionar** las actividades, (2) **estimar** sus tiempos y (3) determinar el **orden** (precedencias).

**Seis aportaciones** según **Harry F. Evarts** (*Introducción al PERT*, 1965):
1. Planes **realistas**, detallados y fáciles de difundir.
2. **Predicción** de las duraciones y de su certitud.
3. Centrar la atención en las partes que pueden **demorar** el proyecto.
4. Informar de la **incompleta utilización de recursos**.
5. Sencilla **simulación de alternativas**.
6. **Informes** completos y frecuentes del estado del proyecto.

**Objetivos**: anticipar la **duración mínima** y determinar las **actividades críticas** (además de otra información).

## 6. El PERT en certeza

### 6.1 Tabla de precedencias y grafo
- **Grafo PERT**: **nudos** = estados o situaciones; **flechas** = **actividades**.
- Del nudo inicial salen las actividades sin precedentes; al final llegan las que no preceden a ninguna.
- Nudo de **origen** de una flecha = situación en que han terminado las precedentes; nudo de **destino** = situación en que ha terminado esa actividad.

**Tipos de prelaciones (tabla 5.2)**:
- **Lineal**: para iniciar una actividad debe haber terminado **una única** actividad.
- **De convergencia**: deben haber terminado **dos o más**.
- **De divergencia**: el fin de **una** permite iniciar **dos o más**.
- **De convergencia y divergencia**: para iniciar dos o más, deben haber terminado varias.

### 6.2 Principios del grafo (tabla 5.3) y actividades ficticias
1. **Designación sucesiva**: no numerar un nudo mientras quede sin numerar alguno de los nudos de los que salen flechas que llegan a él.
2. **Unicidad del estado inicial y final**: un solo nudo de inicio y uno de fin.
3. **Designación unívoca**: no puede haber dos flechas con el **mismo origen y destino** (cada actividad se nombra por el par de nudos).

**Actividades ficticias**: **enlaces lógicos** para reflejar las prelaciones. Hacen falta cuando:
- Se mezclan prelaciones **lineales y de convergencia o divergencia** (p. ej., A y B preceden a C, pero solo A precede a D).
- Hay **actividades paralelas** (sin ficticias se vulneraría la **designación unívoca**).
- Hay **varias actividades finales** (para respetar la unicidad del estado final).

La flecha que va **directa** (sin ficticia) es la de la actividad de **mayor duración**.

### 6.3 Tiempos early y last
- **Camino** = conjunto de actividades sucesivas.
- **Tiempo early** de un nudo = mínimo tiempo para alcanzarlo = duración del **camino más largo** desde el inicio. Se calcula de izquierda a derecha.
- **Tiempo last** = momento **más tardío** en que puede alcanzarse sin retrasar el proyecto = last final − camino más largo desde el final hasta él. Se calcula de derecha a izquierda.
- El **last del nudo final = su early**.

### 6.4 Camino crítico y oscilaciones
- **Oscilación** de un nudo = last − early.
- **Camino crítico**: el formado por las actividades que **no admiten demora**; es el **más largo** entre el nudo inicial y el final. Sus nudos tienen **oscilación cero** y sus actividades (**críticas**) son las que más hay que controlar.

### 6.5 Holguras de las actividades
Con i = nudo de origen, j = nudo de destino, d = duración:

| Holgura | Supuesto | Fórmula |
|---|---|---|
| **Total** | Al origen lo **más pronto**; al destino lo **más tarde** | $H_T = L_j - E_i - d_{ij}$ |
| **Libre** | Al origen lo **más pronto**; al destino lo **más pronto** | $H_L = E_j - E_i - d_{ij} = H_T - O_j$ |
| **Independiente** | Al origen lo **más tarde**; al destino lo **más pronto** | $H_I = E_j - L_i - d_{ij} = H_L - O_i$ |

- Siempre $H_T \ge H_L \ge H_I$.
- La **independiente puede ser negativa** (refleja escasez de tiempo).
- En las **actividades críticas las tres holguras valen cero**.
- Ojo: $L_j - L_i - d$ **no es ninguna** de las tres (pregunta trampa del test).

### Ejemplo ENSAMBLISA
Fabricar un producto con 16 actividades (transportar materiales, fabricar componentes R, S, T, U, V, transportarlos y ensamblar). Precedencias: D←C; E, F←A; G, H←B; I←E; J←F; K←I, J; L←D; M←G; N←H; O←M, N; P←K, L, O. Duraciones: A1 B1 C1 D2 E3 F2 G1 H2 I1 J1 K2 L1 M2 N2 O1 P2.
- **Camino crítico: A-E-I-K-P = 9 u.t.** (el proyecto no puede durar menos de 9).
- Oscilaciones: nudos 6 y 7 → 3; nudos 4, 8, 10 y 11 → 1; nudo 9 → 2; el resto → 0.
- Ninguna holgura independiente es positiva; la de D vale −3.

## 7. Los gráficos de Gantt

Creado por **Harry L. Gantt**; es el **gráfico de control más empleado**.
- **Abscisas**: tiempo o fechas. **Ordenadas**: actividades.
- **Barras horizontales** de longitud proporcional a la duración, desde el inicio al fin de cada tarea.
- Control visual: una **línea vertical en la fecha actual** y las barras **sombreadas** según el avance muestran retrasos y adelantos. En ENSAMBLISA, a las 4 u.t.: retraso de 2 u.t. en D (no crítica, aún no afecta al plazo) y adelanto de 1 u.t. en I (crítica: el proyecto podría acabar en 8).

## 8. El PERT en incertidumbre (mejor dicho, "en riesgo")

Las duraciones no se conocen, pero sí su distribución de probabilidad. Para cada actividad se estiman tres tiempos: **optimista** ($t_o$), **más probable o normal** ($t_m$) y **pesimista** ($t_p$). La duración sigue una **distribución beta**:

$$E(d) = \frac{t_o + 4t_m + t_p}{6} \qquad \sigma^2(d) = \frac{(t_p - t_o)^2}{36}$$

- Se procede como en certeza; la duración del camino crítico es la **duración esperada** del proyecto.
- Si las duraciones son **independientes**, la varianza del proyecto es la **suma de las varianzas** de las actividades críticas.
- Con el **teorema central del límite**, la duración es **normal** → se usan las tablas.

**Ejemplo**: camino crítico de 100 actividades (50 de 3-5-7 días, 30 de 8-9-16 y 20 de 16-30-32). E(D) = 50·5 + 30·10 + 20·28 = **1.110 días**; σ² = **217,78**; σ = **14,76**. $P(D < 1.123) = P(g < 0{,}88) = 0{,}5 + 0{,}3106 = 0{,}8106$ (**81,06 %**).

## 9. El PERT-coste

Extensión del PERT-tiempo que considera los **costes**:
- **Costes directos**: imputables a cada actividad. **Suben al acortar** la duración (horas extra).
- **Costes indirectos** o **cargas de estructura**: ligados al **tiempo**, no a la producción. **Suben al alargar** el proyecto (amortización).

**Coeficiente de costes** de una actividad (lo que cambia su coste directo por cada u.t. que se acorta):

$$\text{coeficiente} = \frac{c_e - c_n}{t_n - t_e}$$

($c_n$, $t_n$: coste y duración normales; $c_e$, $t_e$: coste y duración extremos o de urgencia).

- Para acortar el proyecto de la forma más barata, se acelera primero la **actividad crítica con menor coeficiente**, luego la siguiente, etc.
- **Duración óptima** = la de **mínimo coste total** (directos + indirectos).

## Glosario

*(Completo, según [[GLOSARIO_TEMA_5.pdf]])*

- **Actividad ficticia**: enlace lógico que refleja formalmente las prelaciones entre las actividades del proyecto.
- **Árbol de decisión**: representación del proceso decisional con las alternativas posibles y los resultados de cada una según el estado de la naturaleza.
- **Decisiones secuenciales**: sometidas a un proceso dinámico y adaptativo en el que se concatenan; cada una condiciona a las siguientes y viene condicionada por las anteriores y por los estados ocurridos.
- **Gráfico de Gantt**: instrumento de control con el tiempo o las fechas en abscisas y las actividades en ordenadas.
- **Grafo PERT**: representación de un proyecto mediante nudos y flechas.
- **Holgura independiente**: margen sobrante si al nudo de origen se llega lo más tarde admisible y al de destino lo más pronto posible.
- **Holgura libre**: margen sobrante si a ambos nudos se llega lo más pronto posible.
- **Holgura total**: margen sobrante si al nudo de origen se llega lo más pronto posible y al de destino lo más tarde admisible.
- **Información perfecta**: aquella cuya probabilidad de ser correcta es el cien por cien.
- **Método PERT**: instrumento para planificar, ejecutar y controlar proyectos con muchas actividades con precedencias, en tiempo y medios limitados.
- **Oscilación de un nudo**: diferencia entre su tiempo last y su tiempo early.
- **PERT-coste**: extensión del PERT-tiempo que considera explícitamente los costes.
- **Prelación de convergencia**: para iniciar una actividad deben haber terminado dos o más.
- **Prelación de divergencia**: para iniciar dos o más actividades debe haber terminado una única.
- **Prelación lineal**: para iniciar una actividad debe haber terminado una única.
- **Problema de programación lineal**: función objetivo lineal a maximizar o minimizar y un conjunto de restricciones lineales.
- **Tiempo early de un nudo**: número mínimo de unidades de tiempo necesario para alcanzar esa situación.
- **Tiempo last de un nudo**: momento más tardío en que puede alcanzarse esa situación sin retrasar el proyecto sobre el mínimo imprescindible.

## Autoevaluación (test del libro)

1. Decisiones sometidas a un proceso dinámico y adaptativo en el que se concatenan: a) Adaptativas · b) Sucesivas · c) Secuenciales · d) Ninguna
2. En un árbol de decisión, los resultados de cada alternativa dependen de: a) El estado de la naturaleza · b) La alternativa colateral · c) El coestante · d) Ninguna
3. Los **nudos aleatorios** representan: a) Situaciones en las que hay que decidir · b) Situaciones ante distintos estados de la naturaleza · c) Sucesos aleatorios · d) Ninguna
4. Valor de un **nudo aleatorio**: a) La primera decisión · b) La esperanza matemática de sus ramas · c) El mejor valor de sus ramas · d) Ninguna
5. En el **método Roy** las actividades se representan por: a) Flechas · b) Flotantes · c) Nudos · d) Ninguna
6. Principio que prohíbe numerar un nudo si falta numerar alguno de los que llegan a él: a) Designación unívoca · b) Unicidad de estados · c) Prelación · d) Ninguna
7. Si con **actividades paralelas** no se usan ficticias: a) No se vulnera ningún principio · b) Se vulnera la designación unívoca · c) Se vulnera la designación sucesiva · d) Ninguna
8. La flecha directa (sin ficticia) es la de la actividad que: a) Sea anterior · b) Sea posterior · c) Tenga mayor duración · d) Tenga menor duración
9. $L_j - L_i - d$ es la: a) Holgura total · b) Holgura libre · c) Holgura independiente · d) Ninguna
10. En el PERT en incertidumbre las duraciones siguen distribuciones: a) Alfa · b) Beta · c) Sigma · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 c · 2 a · 3 b · 4 b · 5 c · 6 d (es la designación sucesiva) · 7 b · 8 c · 9 d · 10 b
