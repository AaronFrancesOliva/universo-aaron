---
asignatura: Gestión de Empresas Informáticas
tema: 10
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 10: La capacidad de producción

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 320-338 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_10.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_10.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Las decisiones de capacidad se toman en tres horizontes: **largo plazo** (cuánta capacidad y **dónde**: localización), **medio plazo** (**planificación conjunta** para absorber las oscilaciones de la demanda) y **corto plazo** (**programación de la producción** con programación lineal y PERT/Gantt). Reutiliza la normal (tema 4), el VAN y la TIR (tema 7) y la programación lineal (tema 5).

## 1. Introducción

| Horizonte | Decisión |
|---|---|
| **Largo plazo** | **Capacidad de las instalaciones** y su **localización** (cuánta, cuándo y dónde) |
| **Medio plazo** (≈ 1 año) | **Planificación conjunta** de todas las líneas de productos (mano de obra, inventarios, subcontratación) |
| **Corto plazo** | **Programación de la producción** (asignar los recursos ya disponibles) |

Las decisiones de capacidad afectan al tipo de proceso, al grado de mecanización o automatización, al diseño del proceso y al nivel de los almacenes.

## 2. La capacidad de las instalaciones

**Pasos para decidirla**:
1. Establecer una **medida** de la capacidad.
2. **Prever la demanda**.
3. Determinar la **capacidad necesaria**.
4. Establecer **alternativas**.
5. **Evaluarlas** (con VAN y TIR, como cualquier inversión).
6. **Decidir**: lo hace la **alta dirección**, porque compromete a la empresa a largo plazo y afecta a todas sus funciones, no solo a producción.

### 2.1 Medida de la capacidad
> **Capacidad** = **máximo** nivel de producción que puede alcanzarse **en un periodo**. Siempre va referida al tiempo (barriles por semana, pacientes por mes).

Dos errores típicos:
1. Confundirla con el **tamaño** (no tiene en cuenta el tiempo): el **número de camas** de un hospital, de **asientos de un restaurante** o de máquinas mide el tamaño de las instalaciones.
2. Confundirla con el **volumen de producción** (lo que realmente se produce en el periodo).

- Los mayores problemas de medición están en la **producción múltiple** (no se suman unidades de productos distintos): se usan medidas como las plazas-milla de las aerolíneas o se valora en u.m.
- **Capacidad normal**: la que se alcanza con las horas de trabajo normales (sin horas extra ni subcontratas).
- **Capacidad punta**: solo se mantiene durante un **breve periodo**.
- **Capacidad sostenida**: puede mantenerse de forma **prolongada** sin dificultad.

### 2.2 Capacidad requerida y necesaria
- La demanda prevista es un dato que da **marketing** (mejor llamarlo **objetivo de ventas**).
- **Capacidad requerida**: la que determina la demanda prevista. Es lo más difícil de estimar.
- **Capacidad necesaria** = capacidad requerida − capacidad disponible en el futuro.

**Ejemplo Rasuro**: demanda $q \to N(50.000;\ 10.000)$. La empresa quiere que solo haya un 5 % de probabilidad de que la demanda quede por debajo del 90 % de la capacidad P (para evitar capacidad ociosa): $P(q < 0{,}9P) = 0{,}05$ → $\frac{50.000 - 0{,}9P}{10.000} = 1{,}65$ → **P = 37.222** unidades (por debajo de la demanda esperada precisamente porque solo se quiere evitar capacidad ociosa).

### 2.3 Alternativas
Surgen de responder **cuánta** capacidad, **cuándo** y **dónde**.

## 3. La localización de las instalaciones

El problema cambia según se trate de una instalación independiente o de un comercio que compite con otros de la zona.

### 3.1 Una instalación independiente
Aunque los ingresos sean iguales en todos los lugares, **cambian los costes**:
- Terreno, local y equipo.
- Materias primas y otros materiales.
- Mano de obra.
- Servicios necesarios.
- Impuestos y seguros.

Y otros factores que no afectan directamente a la rentabilidad:
- Garantías de **continuidad del suministro**.
- Disponibilidad de **mano de obra cualificada**.
- **Relaciones laborales** y conflictividad social.
- **Normativa** de las entidades locales.
- **Nivel y calidad de vida**.

**Modelos de puntuación** ($p_{ij}$ = puntuación del factor i en la localización j; $w_i$ = peso del factor):

| Modelo | Fórmula | Cuándo usarlo |
|---|---|---|
| **Aditivo** | $T_j = \sum w_i\,p_{ij}$ | En general |
| **Multiplicativo** | $T_j = \prod p_{ij}^{\,w_i}$ | Cuando se exige que la localidad **cumpla mínimamente en cada factor** (penaliza mucho una puntuación baja) |

Ejemplo (pesos 0,5 / 0,3 / 0,2): X (2, 8, 9) → aditivo 5,2, multiplicativo 4,08; Y (8, 6, 4) → 6,6 y 6,38 → **Y**.

### 3.2 Varias fábricas y almacenes interdependientes
Se supone ya decidida la capacidad y se busca el plan de localización que **minimiza los costes de distribución**, con **programación lineal**. Ejemplo Distribu, S. A. (almacenes en A y C; el tercero en B o en D): coste con B 1.250 frente a 1.400 con D → **B**.

### 3.3 Centros comerciales
Aquí los **ingresos sí dependen** de la localización. Los modelos maximizan los ingresos o el número de clientes en función del **tamaño del local** y del **tiempo de desplazamiento**.

**Modelo de Huff**:

$$N_{ik} = P_{ik}\,C_i = \frac{S_k / T_{ik}^{\lambda}}{\sum_j S_j / T_{ij}^{\lambda}} \cdot C_i$$

- $N_{ik}$: clientes de la zona i que se espera que vayan al lugar k.
- $P_{ik}$: probabilidad de que un cliente de la zona i compre en k.
- $C_i$: clientes que residen en la zona i.
- $S_j$: tamaño del local j.
- $T_{ij}$: tiempo de desplazamiento de la zona i al lugar j.
- λ: parámetro del efecto del tiempo de desplazamiento (Huff obtuvo valores entre 2,1 y 3,2).

### 3.4 Servicios de emergencia
El criterio es la **rapidez**: bomberos, policía, ambulancias... y, en la empresa, los **servicios post-venta** de reparación de sistemas informáticos o maquinaria cuya parada detiene al cliente.

## 4. La planificación conjunta (medio plazo)

**Planificación conjunta**: planificar todas las líneas de productos para atender la demanda con los medios disponibles. Se hace **con marketing** (se puede actuar sobre la demanda) y está **condicionada por la capacidad** de las instalaciones.

| Incidir en la **demanda** | Incidir en la **oferta** |
|---|---|
| **Variables mercadotécnicas** (precio, publicidad, promoción) | **Plantilla flexible** (desmotiva, límites legales, costes) |
| **Espera del cliente y reserva de capacidad** (riesgo de perder clientes) | **Horas extraordinarias y jornadas reducidas** |
| **Productos de ciclo inverso** (demanda estacional opuesta: castañas y helados) | **Trabajadores de temporada** (menos motivados) |
| | **Inventarios** (reguladores, pero caros; no sirven en servicios) |
| | **Subcontratación temporal** (más cara) |
| | **Acuerdos con otras empresas** (hoteles, aerolíneas, eléctricas) |

No hay una regla óptima. Ojo: los **inventarios** actúan sobre la **oferta**, no sobre la demanda (pregunta del test).

## 5. La programación de la producción (corto plazo)

> Distribuir los **recursos limitados** entre productos, trabajos, actividades, clientes... La técnica principal es la **programación lineal**.

Cada posible distribución es un **programa productivo**. El objetivo suele ser **maximizar el beneficio** (o minimizar costes, maximizar calidad...).

$$\max\ Z = c_1X_1 + \dots + c_nX_n \quad \text{s.a.} \quad a_{i1}X_1 + \dots + a_{in}X_n \le b_i$$

| Término | Significado |
|---|---|
| **Función de rendimiento** (Z) | La función objetivo |
| **Vector de existencias** (b) | $b_i$ = unidades disponibles del factor i |
| **Rendimiento unitario** ($c_j$) | Beneficio de realizar **una vez** el proceso j |
| **Nivel de realización** ($X_j$) | Número de veces que se lleva a cabo el proceso j (las incógnitas) |
| **Proceso** | Una alternativa tecnológica (forma de combinar los recursos). Se define por **las cantidades que usa de cada factor a nivel unitario** |
| **Matriz tecnológica** ($a_{ij}$) | Cantidad del factor i que usa el proceso j a nivel unitario |

## 6. Planificación y control de actividades productivas

Se centra en preparar la elaboración de **un producto**, por eso se llama **planificación de proyectos**. Parte de la lista de actividades con sus duraciones y precedencias; busca coordinar la ejecución, saber la duración esperada y qué actividades controlar más. Métodos: **PERT-CPM** y **gráficos de Gantt** (tema 5).

## Glosario

*(Completo, según [[GLOSARIO_TEMA_10.pdf]])*

- **Capacidad necesaria**: diferencia entre la capacidad requerida y la disponible.
- **Capacidad punta**: la que solo puede mantenerse durante un breve periodo.
- **Capacidad requerida**: la determinada por la demanda prevista o el objetivo de ventas.
- **Capacidad sostenida**: nivel de producción que podría mantenerse de forma prolongada sin dificultad.
- **Capacidad**: máximo nivel de producción que puede alcanzarse en un periodo.
- **Modelo aditivo**: se suman los resultados de ponderar cada factor por su importancia para puntuar cada localización.
- **Modelo multiplicativo**: se multiplican los resultados de ponderar exponencialmente cada factor por su importancia.
- **Planificación conjunta**: planificación de todas las líneas de productos para atender la demanda con los medios disponibles.
- **Productos de ciclo inverso**: aquellos cuya demanda sigue una oscilación estacional inversa.
- **Programación de la producción**: distribución de los recursos limitados entre productos, trabajos, actividades, tareas, clientes o ítems en general.

## Autoevaluación (test del libro)

1. Las decisiones sobre la **capacidad de las instalaciones** se planifican: a) No se planifican · b) A corto · c) A medio · d) A largo plazo
2. ¿A qué **no** afectan las decisiones de capacidad? a) Al tipo de proceso · b) Al grado de mecanización · c) Al nivel de los almacenes · d) Ninguna
3. El número de **asientos de un restaurante** mide: a) Su capacidad · b) El tamaño de sus instalaciones · c) Su volumen de producción · d) Ninguna
4. Si es muy importante que la localidad cumpla mínimamente en cada factor: a) Aditivo · b) Exponencial · c) Multiplicativo · d) Ninguna
5. El **modelo de Huff** sirve para localizar: a) Centros comerciales · b) Almacenes y fábricas interdependientes · c) Instalaciones independientes · d) Ninguna
6. ¿Cuál **no** sirve para incidir en la **demanda**? a) Variables mercadotécnicas · b) Productos de ciclo inverso · c) Los inventarios · d) Ninguna
7. ¿Cuál **no** sirve para flexibilizar la **oferta**? a) Plantilla flexible · b) Horas extra y jornadas reducidas · c) Subcontratación temporal · d) Ninguna
8. En programación de la producción, el **proceso** es: a) La función objetivo · b) El rendimiento unitario · c) El nivel de realización · d) Ninguna
9. La **planificación de proyectos** es: a) Usar Gantt en producción · b) La matriz tecnológica · c) La planificación de las actividades productivas · d) Ninguna
10. Un **proceso se define** por: a) Las cantidades de cada factor a nivel unitario · b) Su rendimiento implícito a nivel unitario · c) Su matriz tecnológica · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 d · 2 d · 3 b · 4 c · 5 a · 6 c (actúan sobre la oferta) · 7 d · 8 d (es una alternativa tecnológica) · 9 c · 10 a
