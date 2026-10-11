---
asignatura: Gestión de Empresas Informáticas
tema: 11
estado: pendiente
ultimo_repaso:
proximo_repaso:
tags: [revisar]
---

# Gestión de Empresas Informáticas — Tema 11: La logística

*Resumen preparado por Jarvis el 2026-10-10 a partir de las pp. 340-364 del manual "Gestión de Empresas Informáticas" (UNED), contrastado con [[Resumen_Tema_11.pdf]] (diapositivas del profesor) y [[GLOSARIO_TEMA_11.pdf]]. Pendiente de que Aaron lo lea y lo apruebe.* #revisar

> [!tip] Idea central
> Los **inventarios** son reguladores entre fases. Tienen tres tipos de costes (mantenimiento, pedidos y ruptura) y su tamaño óptimo sale del **modelo de Wilson** ($Q^* = \sqrt{2kq/g}$). Se gestionan con **sistemas Q o P**, se controlan con el **método ABC** y se pueden trasladar a otros o reducir con el **justo a tiempo**. La **distribución física** lleva el producto al comprador (modelo de transporte de **Hitchcock**).

## 1. Introducción

- **Logística**: actividades y procesos para la **administración estratégica del flujo y almacenamiento** de materias primas, componentes, existencias en proceso y productos terminados, de modo que estén en la **cantidad adecuada**, en el **lugar correcto** y en el **momento apropiado**. Incluye la distribución física.
- **Inventario**: provisión de materiales para facilitar la **continuidad del proceso productivo** y la **satisfacción de los pedidos**.
- Los inventarios son **reguladores** entre el ritmo de salida de una fase y el de entrada de la siguiente. Tipos: de **materias primas**, de **semiterminados** y de **terminados**.
- Están condicionados por el **proceso** y la **capacidad**: un proceso continuo para inventario permite compras frecuentes y descuentos por volumen; uno intermitente por órdenes, almacenes menores.
- **Conflicto interno**: **finanzas** quiere inventarios **bajos** (cuesta financiarlos); **producción y marketing**, **altos**.
- También existen en los **servicios** (un hospital: medicamentos, ropa de cama).

## 2. Objetivos de los inventarios

1. **Reducir el riesgo**: **stock de seguridad** de productos terminados (para no perder ventas) y de materias primas (para no parar la producción).
2. **Abaratar las adquisiciones y la producción**: comprar y producir por **lotes**, aprovechar precios bajos transitorios.
3. **Anticipar variaciones previstas** de la oferta y la demanda (una huelga, una campaña, la estacionalidad).
4. **Facilitar el transporte y la distribución**.

## 3. Costes de los inventarios y su tamaño

| Coste | Incluye | Si el inventario es mayor... |
|---|---|---|
| **De almacenamiento** (posesión, mantenimiento) | Financiación o coste de oportunidad, alquiler o amortización de locales, control, manipulación, obsolescencia, mermas, seguros | **Aumenta** |
| **De reaprovisionamiento** (renovación, realización de pedidos) | Costes comerciales, administrativos y de distribución de cada pedido | El coste **anual baja** (menos pedidos) |
| **De ruptura de stock** (quedarse sin existencias) | Terminados: pérdida de **imagen y ventas**. Materias primas o semiterminados: **parada** de la producción (costes fijos de inactividad) | Es **menos probable** |

El coste de adquisición o fabricación solo cuenta si cambia con el tamaño del pedido (descuentos).

| Interesan inventarios **altos** cuando... | Interesan inventarios **bajos** cuando... |
|---|---|
| Pedir es **caro** | Almacenar es **caro** y pedir es barato |
| Almacenar es **barato** | La demanda es **estable** |
| Hay **descuentos** por grandes pedidos | Los proveedores son **fiables** |
| Se espera un **crecimiento** fuerte de la demanda | **No se puede aplazar el pago** y cuesta financiar las existencias |
| Se esperan **subidas** de precios | Se esperan **bajadas** de precios |

## 4. Tipos de demanda

- **Independiente**: la fija directamente el **mercado** (productos terminados, repuestos). Son los **bienes finales**.
- **Dependiente**: ligada a la demanda de **otros productos** (componentes: 3.000 coches → 15.000 ruedas).
- Lo relevante es estudiar la demanda de los bienes finales.

## 5. Sistemas y modelos de inventarios

**Sistema de inventarios**: estructura organizativa + reglas, políticas y procedimientos de mantenimiento y control.

| | **Sistema Q** | **Sistema P** |
|---|---|---|
| Otros nombres | De **volumen de pedido constante** o de volumen económico de pedido | De **período constante**, periódico, de revisión periódica o de intervalo fijo de pedido |
| Tamaño del pedido | **Siempre el mismo** | **Variable** (según el nivel del inventario y la demanda prevista) |
| Cuándo se pide | Cuando hace falta (en cualquier momento) | Cada periodo fijo |
| Rupturas | Menos | Con el mismo stock de seguridad, **más rupturas** → necesita inventarios mayores |
| Para qué artículos | **Caros** (menos dinero inmovilizado) | De **poco valor** |

Modelos **deterministas** (demanda conocida con certeza) o **probabilísticos** (solo en términos de probabilidades).

### 5.1 Modelo determinista: modelo de Wilson
**Modelo del volumen económico de pedido**: lo desarrolló **F. W. Harris (1915)** y lo popularizó el consultor **Wilson**.

**Supuestos**:
- Demanda **constante, uniforme y conocida**.
- **Plazo de entrega** constante.
- **Precio unitario** constante (sin descuentos).
- Coste de mantenimiento según el **inventario medio**.
- Pedidos de **tamaño constante** con **coste por pedido** constante.
- **No se permiten rupturas**.
- Producto individual, independiente de los demás.

El nivel del inventario dibuja unos **dientes de sierra**. Con Q = tamaño del pedido, Ss = stock de seguridad, q = demanda anual, k = coste de cada pedido y g = coste de tener una unidad almacenada un año:

| Magnitud | Fórmula |
|---|---|
| Inventario medio | $\bar{S} = Ss + Q/2$ |
| Coste anual de mantenimiento | $C_p = g\,(Ss + Q/2)$ |
| Coste anual de reaprovisionamiento | $C_R = k\,q / Q$ |
| **Pedido óptimo** (mínimo coste total) | $Q^* = \sqrt{\dfrac{2kq}{g}}$ |
| Número de pedidos al año | $q / Q$ |
| Punto de pedido | $Ss + R$, con $R = L \cdot q/360$ (consumo durante el plazo de entrega L) |

- Si se incluye el **coste financiero**: $g = a + P \cdot i$ (a = resto de gastos de almacenamiento, P = precio, i = coste financiero).
- **Ejemplo**: P = 812.500; i = 10 %; a = 168.750 → g = 250.000; q = 400; k = 781.250 → **Q\* = 50 unidades** → **8 pedidos** al año.

### 5.2 Modelo probabilístico
El más sencillo supone, por el teorema central del límite, que la demanda es **normal**. **Ejemplo Lotes**: demanda N(4.500; 300); se acepta un 15 % de probabilidad de una ruptura de más de 500 unidades: $P(q > S + 500) = 0{,}15$ → $(S - 4.000)/300 = 1{,}04$ → S = **4.312**. Como ya hay 400, se piden **3.912**.

## 6. Control de inventarios

**Funciones**:
1. **Registro actualizado** de existencias: **inventario continuo** (informatizado, con todas las entradas y salidas), comprobado con el recuento físico ("hacer inventario").
2. **Informar del nivel** para saber cuándo y cuánto pedir.
3. **Notificar situaciones anormales** (errores o mal funcionamiento).
4. **Elaborar informes** para la dirección.

**Método ABC** (A. Rambaux), basado en el **principio de Pareto** (una pequeña parte de cualquier población causa la mayor parte del efecto; Vilfredo Pareto observó que el 20 % de las personas tenía el 80 % de la riqueza):
- **Grupo A**: **pocas unidades, mucho valor** → control minucioso.
- **Grupo C**: **muchas unidades, poco valor** → lo que menos interesa controlar.
- **Grupo B**: proporción parecida en unidades y en valor.

## 7. Traslación de inventarios y justo a tiempo

- **Traslación**: pasar los inventarios a los **distribuidores** (si la empresa tiene poder) o, más a menudo, a los **proveedores** (con almacenes cerca del cliente). Genera conflictos y quejas (transportistas de hipermercados).
- **Justo a tiempo** (*just-in-time*, popularizado en **Japón**): **pedidos pequeños y frecuentes**, lo más cerca posible del momento de uso, con proveedores próximos. Reduce el período medio de almacenamiento y de maduración → **más rentabilidad** (tema 6).

## 8. La distribución física

> Conjunto de elementos para **conducir materialmente el producto** desde el vendedor hasta el comprador.

**Decisiones**:
- Medios de transporte.
- Localización de almacenes y puntos de venta.
- Rutas e itinerarios.
- Nivel y organización de los almacenes.
- Disposición de los materiales.
- Embalaje.
- **Medios propios o ajenos** (propios = inversiones estructurales; ajenos = flexibilidad, obligado en pymes).
- Selección de transportistas y almacenistas.

**Objetivo**: un buen **nivel de servicio** (proximidad, disponibilidad, rapidez) con un **coste moderado**. Lo más frecuente: fijar el nivel de servicio y minimizar costes.

**Modelo de transporte o de Hitchcock** (programación lineal): cuánto enviar desde cada centro de distribución i a cada punto de compra j ($X_{ij}$, con coste unitario $p_{ij}$):

$$\min \sum_i \sum_j p_{ij} X_{ij} \quad \text{s.a.} \quad \sum_j X_{ij} \le Q_i \;(\text{capacidad de } i), \quad \sum_i X_{ij} \ge C_j \;(\text{demanda de } j), \quad X_{ij} \ge 0$$

## Glosario

*(Completo, según [[GLOSARIO_TEMA_11.pdf]])*

- **Demanda dependiente**: la vinculada a la demanda de otros productos.
- **Demanda independiente**: la determinada directamente por el mercado.
- **Distribución física**: elementos destinados a conducir materialmente el producto del vendedor al comprador.
- **Inventario justo a tiempo**: recibir pequeños pedidos frecuentes, lo más cerca posible del momento de su uso.
- **Inventario**: provisión de materiales para facilitar la continuidad del proceso productivo y la satisfacción de los pedidos.
- **Modelos de inventarios deterministas**: la demanda se supone conocida con certeza.
- **Modelos de inventarios probabilísticos o aleatorios**: la demanda solo se conoce en términos de probabilidades.
- **Sistema de inventarios**: estructura organizativa y reglas, políticas y procedimientos de mantenimiento y control de los bienes inventariados.
- **Sistema de período constante** (periódico, de revisión periódica o de intervalo fijo de pedido): periodo constante entre pedidos; su tamaño varía según el nivel del inventario y la demanda prevista.
- **Sistema de volumen de pedido constante** (o de volumen económico de pedido): todos los pedidos tienen el mismo tamaño y se hacen cuando es necesario, en cualquier momento.

## Autoevaluación (test del libro)

1. ¿Cuál **no** es un objetivo de los inventarios? a) Reducir el riesgo · b) Reducir costes · c) Facilitar el transporte · d) Ninguna
2. Al aumentar el volumen de los almacenes: a) El coste anual por pedidos se reduce · b) Aumenta la probabilidad de ruptura · c) Baja el coste de posesión · d) Ninguna
3. **No** interesan grandes inventarios cuando: a) Pedir es caro · b) Almacenar es barato · c) Hay descuentos por grandes pedidos · d) Ninguna
4. **No** se mantendrán inventarios bajos cuando: a) Almacenar es caro y pedir barato · b) La demanda es estable · c) No se puede aplazar el pago · d) Ninguna
5. La demanda de los componentes de un producto ensamblado es: a) Coaligada · b) Integrada · c) Dependiente · d) Ninguna
6. Los bienes de demanda independiente son bienes: a) Libres · b) Finales · c) *Free way* · d) Ninguna
7. El sistema P **no** es el sistema: a) Periódico · b) De intervalo fijo de pedido · c) De pedido constante · d) Ninguna
8. Con el mismo stock de seguridad: a) P y Q provocan las mismas rupturas · b) Con P no hay rupturas · c) P provoca más rupturas que Q · d) Ninguna
9. ¿Qué **no** es constante en el modelo de Wilson? a) El tamaño del pedido · b) El coste de cada pedido · c) El precio unitario · d) Ninguna
10. ¿Cuál **no** es una función del control de inventarios? a) Registro actualizado · b) Notificar situaciones anormales · c) Elaborar informes · d) Ninguna

> [!success]- Soluciones (clave del libro)
> 1 d · 2 a · 3 d · 4 d · 5 c · 6 b · 7 c · 8 c · 9 d (los tres son constantes) · 10 d
