---
asignatura: Gestión de Empresas Informáticas
tema: 9
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 9: Elementos productivos. El proceso de producción y el factor humano

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 258-318 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_09.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_9.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Abre el bloque de producción (temas 9-11). Recorre todo el proceso: **producir o comprar** → objetivos y decisiones → **costes** (direct costing, costes estándares) → **productividad** → **calidad** → **tipos de proceso y tecnología** → **bienes de equipo** (selección, vida, amortización, mantenimiento) → **flujo y distribución en planta** → **factor humano** (Taylor, enfoque sociotécnico, enriquecimiento del puesto, estudio del trabajo e **incentivos**). Es el tema más largo y con más fórmulas del bloque.

## 1. Introducción

- **Función productiva**: emplear factores humanos y materiales para elaborar **bienes** y prestar **servicios**. **Dirección de la producción**: tomar decisiones en ese ámbito.
- La empresa es la **unidad económica de producción** (la familia es la de **consumo**).
- Cadena: producción → **utilidad de forma** → valor → precio → beneficio → **supervivencia**.
  - **Utilidad de forma**: la que crea la producción al convertir materias primas y factores en productos.
  - El marketing crea utilidades de **tiempo, lugar y propiedad**.
- El **diseño del producto** lo hacen marketing (qué quiere el mercado) y producción (cómo fabricarlo eficientemente).

## 2. La primera decisión: producir o comprar

Antes de diseñar nada, hay que plantearse **comprar fuera** el producto o algún componente. Influyen la **independencia** respecto a otras empresas y el **prestigio** de componentes ajenos; si solo se busca minimizar costes:

$$\text{producir si}\quad CF + c_v P < p\,P \iff P > \frac{CF}{p - c_v}$$

(p = precio de compra fuera; $c_v$ = coste variable de producir una unidad; CF = costes fijos anuales; P = unidades necesarias al año). Es la misma lógica del **punto muerto** del tema 6. Ejemplo: componentes para robots con CF = 1.000.000, $c_v$ = 25.000 y precio fuera 50.000 → interesa producir a partir de **40 unidades** al año.

## 3. La dirección de la producción

**Objetivos**: **minimizar costes** y/o **maximizar la productividad** (los operativos principales), cumpliendo los niveles exigidos de:
- **Calidad**.
- **Fiabilidad**: no interrumpir la producción ni dejar de atender la demanda.
- **Capacidad de adaptación**.

**Decisiones**: cinco grupos funcionales, cada uno con decisiones **estratégicas** (largo plazo, irreversibles durante ese tiempo) y **tácticas** (cotidianas, a corto):

| Grupo | Estratégicas | Tácticas |
|---|---|---|
| **Proceso** (diseño del proceso físico) | Tipo de proceso, equipos | Orden del flujo, mantenimiento |
| **Capacidad** | Tamaño, localización, nivel de RRHH | **Horas extra**, subcontratas, programación |
| **Inventarios** (almacenes) | Tamaño, sistema de control | Cuánto y cuándo pedir |
| **Recursos humanos** | Diseño del puesto, sistema de incentivos | Control cotidiano, estándares |
| **Calidad** | Estándares, organización | Muestras, control cotidiano |

## 4. Bienes y servicios

- **Bienes**: **tangibles** → se pueden almacenar, transformar físicamente y transportar.
- **Servicios**: **intangibles** → no se pueden almacenar ni transportar; se producen y consumen a la vez.

Diferencias en su dirección:
1. **Inventarios y capacidad**: un servicio no se almacena, así que hay que prever la demanda con precisión.
2. **Medida de la calidad**: más difícil en servicios (depende mucho de la imagen).
3. **Dispersión geográfica**: los centros de servicios están más dispersos.
4. **Integración producción-marketing**: **mayor en servicios** (los empleados venden y recogen información).

## 5. Los costes de producción y su control

- **Costes fijos**: no cambian con el volumen (incluidos los de **inactividad**, como conservación o amortización, y los de **puesta en marcha**). **Costes variables**: cambian con el volumen.
- **Sistemas de producción simples** (un producto homogéneo) y **múltiples** (varios productos o parte del proceso común).

**Imputación de costes en producción múltiple**:
- **Full-costing**: los costes fijos se **reparten** entre los productos en proporción a sus costes variables o materiales.
- **Direct costing**: a cada producto solo se le imputa su **coste variable**.
  - Margen bruto unitario: $m_j = p_j - c_{vj}$.
  - Margen bruto del producto: $MB_j = m_j P_j$; de la empresa: $MB = \sum MB_j$.
  - **Margen neto**: $MN = MB - CF$. Ejemplo del libro: MB = 2.400.000, CF = 700.000 → MN = 1.700.000.

**Costes estándares** (el control de costes más importante): se prevén los costes, se comparan con los reales y se analizan las desviaciones. Con P = producción, F = cantidad de factor, f = precio del factor, $x = F/P$ = consumo por unidad; s = previsto (estándar) y r = real:

| Desviación | Fórmula |
|---|---|
| **Total** | $DT = P_r(x_r f_r - x_s f_s) = DP + DC$ |
| **En precios** (o **económica**) | $DP = (f_r - f_s)\,F_r$ |
| **En cantidades** (o **técnica**) | $DC = (F_r - x_s P_r)\,f_s$ |

Con varios factores se calculan por separado (tabla de control de costes). Ejemplo GRUE (producción prevista 250, real 200): mano de obra DP = 6.200, DC = 7.000; materias primas DP = 387,5, DC = 1.750 → desviación total **15.337,5** desfavorable.

## 6. La medida de la productividad

> **Productividad** = producción de un periodo / recursos consumidos. Es un concepto **técnico** (unidades físicas). Al estudiar un factor, se suponen constantes los demás.

Ejemplo Onestes: 440.000 unidades con 50 trabajadores × 1.760 h = 5 u/hora-hombre; tras mecanizar, 528.000 con 25 → 12 u/hora-hombre (**+140 %**).

**Productividad global** = producción total / **todos** los factores. Como son heterogéneos, se valoran en u.m., pero a **precios constantes** (que no influyan los cambios de precios).
- **Índice de productividad global**: $IPG = PG_1 / PG_0 = IL_p / IL_f$ (índices de cantidades de **Laspeyres** de la producción y de los factores).
- **Tasa de productividad global**: $TPG = IPG - 1$.
- Ejemplo Prode: $IL_p$ = 1,20 e $IL_f$ = 0,90 → IPG = 1,3333 → **+33,33 %**.
- Ojo: $IL_f / IL_p$ (al revés) **no es ninguno** de ellos (pregunta del test).

## 7. La calidad

> **Calidad** = grado de adecuación del producto para el uso al que se destina.

**Fases de su planificación y control**:
1. Determinar los **factores** de los que depende (con marketing).
2. Establecer cómo **medir** cada uno.
3. Fijar **estándares** (con límites de tolerancia). **Normalizar** = clasificar productos en grupos homogéneos según sus atributos de calidad.
4. Programa de **inspección**, normalmente por **muestreo aleatorio** (más muestra = menos error pero más coste).
5. Determinar y **corregir las causas** de la baja calidad.

- **Calidad total**: hay que prever los defectos; es **responsabilidad de todos** los departamentos, y el de calidad **coordina** a los demás.
- **Cero defectos** (acertar a la primera): esfuerzos motivacionales para hacerlo bien desde el principio.

## 8. Tipos de procesos y tecnología

La elección del tipo de proceso es **estratégica** (compromete mucho tiempo y condiciona otras decisiones).

| Criterio | Opciones |
|---|---|
| **Destino del producto** | Por encargo / Para el mercado |
| **Razón de producir** | Por órdenes de fabricación / Para almacén (los servicios no pueden producirse para almacén) |
| **Tipificación** | Individualizada / En serie (masa) |
| **Dimensión temporal** | Intermitente / Continua |

Lo típico: encargo-órdenes-individualizada-intermitente frente a mercado-almacén-serie-continua (con excepciones).

**Tecnología**: combinación de capacidades, conocimientos, herramientas, máquinas, ordenadores y equipos usados en el diseño, producción y distribución. Proceso y tecnología se deciden **a la vez**; si además se diseña el puesto simultáneamente → **enfoque socio-técnico**.

| Producción | Fuerza | Control |
|---|---|---|
| **Manual** | Persona | Persona |
| **Mecanizada** | Máquina | Persona (maneja los útiles) |
| **Automática** | Máquina | Otras máquinas; la persona programa y supervisa (robot = máquina reprogramable) |

- **CAD** (*computer-aided design*): diseñar en pantalla.
- **CAM** (*computer-aided manufacturing*): analizar las fases que debe seguir una máquina para fabricar; empieza donde acaba el CAD.
- En la práctica la tecnología viene dada por la **demanda** prevista.

## 9. Los bienes de equipo

Son **inversiones de renovación o reemplazo**. Decisiones: selección, duración, amortización y mantenimiento.

### 9.1 Selección
El **VAN simple solo sirve si los equipos duran lo mismo**. Si no:
1. **Cadena de renovaciones infinita**: $VAN_C = VAN \cdot \dfrac{(1+k)^n}{(1+k)^n - 1}$.
2. **Base temporal homogénea finita**: el **mínimo común múltiplo** de las duraciones.
3. **Renta anual equivalente**: el flujo constante Q' con la misma duración y el mismo VAN: $VAN = Q' \cdot a_{\overline{n}|k}$.

Ejemplo Fata (k = 8 %): A (−20; 30 durante 3 años) y B (−30; 28 durante 4 años). VAN simple: A 57,31 y B 62,74 (parece mejor B). Pero con VAN_C (278 frente a 236,78), base de 12 años (167,60 frente a 142,76) o renta equivalente (22,24 frente a 18,94) → **mejor A**.

### 9.2 Vida técnica y vida económica
- **Vida técnica**: tiempo durante el que el equipo puede producir normalmente (se alarga con más mantenimiento y aceptando inferioridad tecnológica).
- **Vida económica**: la duración **óptima**, la que hace **máximo su VAN** (comparando el valor de retiro con los flujos que aún podría generar).
- **Método MAPI (Terborgh) o del mínimo adverso**: costes **crecientes** con la edad (mantenimiento, reparaciones, **inferioridad de servicio** = coste de oportunidad de no usar el equipo más avanzado) + costes **decrecientes** (amortización). La duración óptima es la de **mínimo coste total** (el mínimo adverso).

### 9.3 Amortización
Los equipos se deprecian por razones **físicas** (desgaste), **técnicas** (obsolescencia) y **económicas** (cambios de demanda...). **Amortización** = imputar esa depreciación al coste. Base amortizable: $M = V_0 - V_r$ (valor de compra − valor residual).

| Método | Cuota del año t |
|---|---|
| **Lineal** (cuotas fijas) | $M / n$ |
| **Dígitos crecientes** | $\dfrac{2t}{n(n+1)}M$ |
| **Dígitos decrecientes** (amortización acelerada) | $\dfrac{2(n - t + 1)}{n(n+1)}M$ |
| **Tanto fijo sobre base decreciente** | $t_f\,V_0(1 - t_f)^{t-1}$, con $t_f = 1 - (V_r/V_0)^{1/n}$ |

Ejemplo: $V_0$ = 5.000, $V_r$ = 1.000, dígitos crecientes con 2.ª cuota de 800 → n = 4; con tanto fijo, $t_f$ = 0,33126 → 1.ª cuota 1.656,3 y 2.ª 1.107,63.

### 9.4 Mantenimiento
> Minimizar el tiempo de interrupción o de mala calidad por fallos de los equipos, con el menor coste.

- **Correctivo**: cuando surge la avería (incierto, difícil de planificar).
- **Preventivo**: planificado, en los momentos de menos actividad; reduce averías; tiene costes (personal especializado), así que se aplica a los **equipos críticos**.
- **Predictivo**: actúa cuando el equipo se desvía de lo normal (ruidos, vibraciones), detectado por el trabajador, una inspección o sensores.
- Decisiones estratégicas: **contratar fuera o hacerlo dentro**; **centralizarlo** o repartirlo por talleres.

## 10. Flujo del proceso y distribución en planta

**Gráfico del flujo del proceso**: cada fase por la que pasa un material es una **operación, inspección, transporte, almacenamiento o demora**. Se pregunta qué, quién, dónde, cuándo y cómo. Se busca sobre todo eliminar **demoras** (la fase siguiente no puede absorber lo que llega) y **almacenamientos**.

**Distribución en planta**:
- **Por procesos**: máquinas agrupadas por funciones (producción por órdenes, individualizada, intermitente).
- **Por productos**: en línea (producción para almacén, en serie, continua).
- **De punto fijo**: el producto no se mueve (aviones, barcos, puentes).
- **Combinadas**.

## 11. El factor humano

### 11.1 Principios de dirección de la fuerza de trabajo
1. Coordinación entre la persona y su puesto.
2. Estándares de rendimiento.
3. Reconocimiento de los resultados.
4. Sistemas adecuados de supervisión y control.
5. Clara asignación de responsabilidades y tareas.

### 11.2 Organización del trabajo
> Sintetizar tareas individuales en un **puesto de trabajo**, especificando su contenido y responsabilidades.

**Enfoque sociotécnico** (**Eric Trist** y colaboradores, **Instituto Tavistock** de Londres, minas de carbón inglesas, años cincuenta): las nuevas tecnologías aplicadas sin tener en cuenta el **sistema social** causaban insatisfacción, costes y más supervisión. No hay que optimizar por separado el sistema técnico y el social, sino tratarlos juntos. Lo contrario, mirar solo lo técnico, es el **determinismo tecnológico**.

**Escuela de la Dirección Científica** (**Frederick W. Taylor**, Midvale Steel, 1882; ampliada por los **Gilbreth** y **Gantt**): solo tiene en cuenta la tecnología. Se basa en la **división del trabajo y la especialización** (cada operario repite una sola operación). **Cuatro principios**:
1. Estudio **científico** del trabajo (tiempos y movimientos).
2. **Selección** científica, instrucción y desarrollo de los trabajadores.
3. **Cooperación** entre trabajadores y dirección.
4. **División del trabajo** entre la dirección y los trabajadores.

**Errores**: excesiva **abstracción y rigidez**, exceso de **especialización** y **separación radical** entre dirección y trabajo. Se sigue aplicando, con menos rigidez y con restricciones psicológicas y sociales.

### 11.3 Enriquecimiento del puesto de trabajo
**Cinco ejes centrales** (factores motivacionales):
1. **V**ariedad de operaciones.
2. **I**dentidad de la tarea.
3. I**m**portancia de la tarea.
4. **A**utonomía.
5. **R**etroalimentación.

**Índice de motivación potencial de Hackman y Oldham**:

$$IMP = \frac{V + I + M}{3} \cdot A \cdot R$$

**Fases del estudio**:
1. ¿Hay **falta de motivación** o insatisfacción? (si no, el problema es técnico).
2. Medir la capacidad de motivación del puesto con el **IMP**. Si es **alto**, el problema está en los **factores de mantenimiento** de Herzberg (salario, condiciones, seguridad); si es bajo, en los motivacionales.
3. Ver **qué factores fallan** mirando la **puntuación de cada uno**.
4. Comprobar si los trabajadores **quieren el cambio**.

Los programas de enriquecimiento **solo tienen éxito en el 50 %** de los casos.

### 11.4 El estudio del trabajo
> Analizar los factores físicos del trabajo para simplificarlo y **aumentar la productividad a corto plazo**. Tiene dos partes: estudio de métodos y medición del trabajo.

**Estudio de métodos (fases)**: (1) objetivos y restricciones, (2) enfoque, (3) informar a los trabajadores, (4) dividir el trabajo en **elementos** (conjuntos de movimientos o tareas muy relacionados), (5) estudiar el método con **gráficos**, (6) elegir un método para cada elemento.

El diagrama depende del nivel:
- **Proceso global**: gráfico del flujo del proceso.
- **Puesto fijo**: diagrama de operaciones (símbolos de la **Sociedad Americana de Ingenieros Mecánicos**, ASME) y **simograma** (ambas manos a la vez, con tiempos). Gilbreth filmaba micromovimientos ("therblig" es Gilbreth al revés).
- **Con otros trabajadores**: **diagrama de equipo**.
- **Con máquinas**: **diagrama hombre-máquina**.
- Los dos últimos son **diagramas de actividades**.

### 11.5 La medición del trabajo
Técnicas para determinar el **tiempo requerido** para una tarea:
- **Estudio de tiempos** (con cronómetro; el más usado):
  - **Tiempo observado** (TO): media de los tiempos medidos.
  - **Tiempo normalizado**: $TN = TO \cdot GE$ (grado de eficiencia; 100 % = ritmo normal). Ejemplo: 2 min × 1,25 = 2,5 min.
  - **Tiempo estándar**: $T = TN\,(1 + s)$ (s = suplemento por contratiempos inevitables).
- **Tiempos predeterminados**: tablas estandarizadas de movimientos básicos con sus tiempos.
- **Muestreo del trabajo**: muchas observaciones instantáneas aleatorias para saber qué porcentaje del tiempo está la operación en cada estado.

### 11.6 Remuneración por incentivos
T = tiempo estándar, t = tiempo real, $s_0$ = salario por u.t., I = incentivo por u.t. ahorrada:

$$S = s_0 t + I(T - t) \qquad \text{prima: } I(T - t)$$

| Sistema | Incentivo I | Salario |
|---|---|---|
| **Destajo** | $I = s_0$ | $S = s_0 T$ |
| **Halsey** (el ahorro se reparte entre trabajador y empresa) | $I = s_0 / m$ (normalmente m = 2) | $s_0 t + \frac{s_0}{m}(T - t)$ |
| **Rowan** | $I/s_0 = t/T$ | $s_0 t + s_0 \frac{t}{T}(T - t)$ |
| **York** | $I/s_0 = T/(T - t)$ | $S = s_0(t + T)$ |

**Ejemplo**: T = 12 h, t = 10 h, $s_0$ = 1.000 → destajo **12.000**; Halsey **11.000**; Rowan **11.666,67**; York **22.000**; con un incentivo I = 800, 11.600. La **presión del grupo** puede anular el efecto de los incentivos.

## Glosario

*(Completo, según [[GLOSARIO_TEMA_9.pdf]])*

- **Bienes**: productos tangibles que pueden almacenarse, transformarse físicamente y transportarse.
- **Calidad**: grado de adecuación del producto para el uso al que se destina.
- **Coste de inferioridad de servicio**: coste de oportunidad de usar un equipo en vez del más avanzado tecnológicamente.
- **Costes fijos**: los que no cambian con el volumen de producción.
- **Costes variables**: los que cambian con el volumen de producción.
- **Decisiones de capacidad**: buscan que la empresa tenga la capacidad de producción adecuada.
- **Decisiones de inventarios**: las relativas a los almacenes.
- **Decisiones de proceso**: las relacionadas con el diseño del proceso físico de producción.
- **Decisiones estratégicas**: afectan a la empresa durante un periodo largo, en el que son irreversibles.
- **Decisiones tácticas**: cotidianas, con efecto en un periodo breve.
- **Destajo**: incentivo igual a la remuneración unitaria del tiempo de trabajo.
- **Diagrama de actividades**: representación cronológica, en la misma escala de tiempo, de las tareas de varios trabajadores (diagrama de equipo) o del trabajador y las máquinas (diagrama hombre-máquina).
- **Diagrama de operaciones**: operaciones de una tarea con los símbolos de la Sociedad Americana de Ingenieros Mecánicos.
- **Elemento de un trabajo**: parte con un conjunto de movimientos, actividades o tareas estrechamente relacionados.
- **Estudio del trabajo**: técnicas para analizar los factores físicos del trabajo y simplificarlo, con el objetivo de aumentar la productividad a corto plazo.
- **Gráfico del flujo del proceso**: todas las fases por las que pasa un material, indicando si son operación, inspección, transporte, almacenamiento o demora.
- **Índice de productividad global**: cociente entre la productividad del periodo 1 y la del periodo 0.
- **Mantenimiento**: minimizar el tiempo de interrupción o de calidad alterada por mal funcionamiento de los equipos, con el menor coste.
- **Medición del trabajo**: técnicas para determinar el tiempo requerido para una tarea.
- **Mínimo adverso**: mínimo coste total de sumar los costes crecientes y decrecientes del equipo.
- **Muestreo del trabajo**: muchas observaciones directas e instantáneas de una operación para saber qué porcentaje del tiempo está en cada estado.
- **Normalizar**: clasificar productos en grupos homogéneos según sus atributos de calidad.
- **Organización del trabajo**: síntesis de tareas individuales en un puesto de trabajo, especificando su contenido y responsabilidades.
- **Producción automática**: las máquinas dan la fuerza y controlan otras máquinas; la persona programa y supervisa.
- **Producción manual**: la persona da la fuerza y maneja las herramientas.
- **Producción mecanizada**: la máquina da la fuerza, pero la persona maneja útiles y herramientas.
- **Productividad global**: producción total / totalidad de los factores utilizados.
- **Productividad**: producción de un periodo / recursos consumidos.
- **Servicios**: productos intangibles que no pueden almacenarse, transformarse físicamente ni transportarse.
- **Simograma**: representación simultánea de los movimientos de ambas manos y sus tiempos.
- **Sistema Halsey**: el valor de cada u.t. ahorrada se reparte entre el trabajador y la empresa.
- **Sistema Rowan**: incentivo unitario / salario unitario = tiempo efectivo / tiempo previsto.
- **Sistema York**: incentivo unitario / salario unitario = tiempo estándar / ahorro de tiempo.
- **Sistemas de producción múltiples**: se obtienen varios productos o parte del proceso es común a varios.
- **Sistemas de producción simples**: el output es un producto de características técnicas homogéneas.
- **Tasa de productividad global**: proporción de variación de la productividad entre dos periodos.
- **Tiempo estándar**: tiempo normalizado + tiempo suplementario.
- **Tiempo normalizado**: tiempo observado × grado de eficiencia.
- **Tiempos predeterminados**: los de una relación estandarizada de movimientos básicos.
- **Utilidad de forma**: la creada al convertir materias primas y factores en productos terminados.
- **Vida económica**: duración óptima del equipo, la que maximiza su VAN.
- **Vida técnica**: periodo durante el que el equipo puede ser útil y producir normalmente.

## Autoevaluación (test del libro)

1. ¿A qué **no** se refieren los objetivos de la dirección de producción? a) Costes · b) Productividad · c) Fiabilidad · d) Ninguna
2. Las decisiones sobre **horas extraordinarias** son de: a) Proceso · b) Capacidad · c) RRHH · d) Ninguna
3. $IL_f / IL_p$ es: a) La productividad del periodo · b) El índice de productividad global · c) La tasa de productividad global · d) Ninguna
4. Según la **calidad total**: a) El control corresponde a RRHH · b) Calidad depende de producción · c) El departamento de calidad coordina a los demás · d) Ninguna
5. Que la producción sea **individualizada o en serie** depende de: a) La razón de producir · b) El grado de tipificación · c) La dimensión temporal · d) Ninguna
6. Diseñar el puesto y elegir la tecnología a la vez es el enfoque: a) Tecnológico · b) Socio-experimental · c) Sociológico · d) Ninguna
7. El VAN simple (sin cadena de renovaciones) solo es correcto si los equipos tienen: a) El mismo riesgo · b) La misma duración · c) Los mismos flujos · d) Ninguna
8. En el enriquecimiento del puesto, ¿cómo se sabe **qué factores** causan la insatisfacción? a) Con la puntuación de cada uno · b) Con un índice como el IMP · c) Con los factores de mantenimiento · d) Ninguna
9. El **diagrama hombre-máquina** es un: a) Diagrama de actividades · b) Diagrama de equipo · c) Simograma · d) Ninguna
10. Tiempo observado × grado de eficiencia: a) Tiempo estándar · b) Tiempo predeterminado · c) Tiempo normalizado · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 d · 2 b · 3 d (es la inversa del IPG) · 4 c · 5 b · 6 d (es el socio-técnico) · 7 b · 8 a · 9 a · 10 c
