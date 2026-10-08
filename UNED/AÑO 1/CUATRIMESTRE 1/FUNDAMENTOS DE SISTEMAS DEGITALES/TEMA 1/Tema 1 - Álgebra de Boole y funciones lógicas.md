---
asignatura: Fundamentos de Sistemas Digitales
tema: 1
estado: pendiente
ultimo_repaso:
proximo_repaso:
---

# Fundamentos de Sistemas Digitales — Tema 1: Álgebra de Boole y funciones lógicas

*Título en el libro: "Exigencias computacionales del procesamiento digital de la información". Síntesis de las pp. 11-78 de [[Teoria De Electronica Digital - Delgado Y Mira.PDF|Electrónica Digital]] (tema 1 del libro = tema 1 del programa), contrastada con [[Tema_1_-_Preguntas_Más_Frecuentes.pdf|Preguntas más frecuentes del tema 1]] (P+F). Elaborada el 2026-10-06.*

> [!info] Cómo citar el libro
> El PDF del libro está escaneado y sus páginas no coinciden con las impresas: **página del PDF = página impresa − 6**. Los enlaces de esta nota ya llevan a la página correcta del PDF (p. ej. [[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=8|p. 14]]).

## Material del tema

| Material | Qué es | Para qué |
|---|---|---|
| [[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=5\|Libro, tema 1]] (pp. 11-78) | Teoría con ejercicios resueltos | Primera lectura y estudio |
| [[Tema_1_-_Preguntas_Más_Frecuentes.pdf]] | 23 preguntas y respuestas del equipo docente | Dudas típicas y una errata |
| [[Tema 1 - Resumen Exigencias computacionales.pdf]] | Resumen del tema (19 págs.): postulados, leyes, formas canónicas, simplificación y puertas | Repaso rápido |
| [[Tema 1 - Preguntas de examen con soluciones.pdf]] | Preguntas de exámenes anteriores (2011, 2018…) con la página del libro donde está la solución (5 págs.) | Práctica tipo examen |
| [[Actividades_autoevalacion___simulacion___Tema_1.pdf]] | 6 actividades de simulación (A.1.1-A.1.6) | Practicar con el simulador (lo necesitas para las PEC) |
| `Hojas de características - Tema 1-20261006/` | [[DM7400.pdf]] (4 NAND), [[DM7402.pdf]] (4 NOR), [[DM7404.pdf]] (6 NOT), [[DM7486.pdf]] (4 XOR), [[DM74LS32.pdf]] (4 OR) | Chips que se usan en el simulador |
| [[Problemas Electrónica Digital.pdf#page=10\|Libro de problemas, cap. 1]] (pp. 10-39 del PDF) | E.1.1-E.1.10 resueltos | Autoevaluación |

## Objetivos del tema (p. 12-13)

El propio libro organiza el tema y su evaluación en 6 objetivos. Úsalos como lista de control:

1. **Analógico frente a digital**: son dos formas distintas de representar los datos y de operar con ellos.
2. **Postulados y teoremas** del álgebra de Boole y saber **demostrarlos**.
3. **Representación**: AND/OR/NOT, solo NAND, solo NOR, minterms y maxterms, y pasar de una a otra.
4. **Análisis**: del esquema de un circuito a su expresión lógica.
5. **Síntesis**: especificación → tabla de verdad → función → circuito.
6. **Minimización**: algebraica y por mapas de Karnaugh (hasta 4-5 variables).

---

## 1.1 Procesamiento digital de la información ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=8|p. 14]])

**Modelo computacional básico** (fig. 1.1): un *sistema* dentro de un *medio*, con
- variables de **entrada** $X = \{x_i(t)\}$,
- variables de **salida** $Y = \{y_j(t)\}$,
- **contenidos de memoria** $M = \{m_k(t)\}$,
- **reglas de transformación** $R$, que generan las salidas y el nuevo contenido de memoria a partir de las entradas y la memoria.

Toda computación se describe con un conjunto de **señales** $(X, Y, M)$ y un conjunto de **reglas** $R$.

| | Analógico | Digital |
|---|---|---|
| Señal | Valores **continuos** dentro de un rango dinámico (p. ej. $5\cos\omega t$, $2t$) | Solo **dos** valores, alto/bajo ↔ "1"/"0" |
| Reglas | Suma, producto por constante, derivada, integral… | Operadores lógicos: **OR, AND, NOT** (conjunto completo) |
| Ejemplo | $y(t) = A_1 x_1(t) + B\int x_2\,dt + C\,\frac{dx_3}{dt}$ | $y = x_0 \cdot x_1 + \overline{x_1}$ |

- El **valor físico** de los niveles (5 V/−5 V, 1 V/0 V…) no importa a nivel conceptual. Depende de criterios electrónicos: velocidad de conmutación, tipo de transistor (bipolar o MOS), familia lógica (TTL, ECL) e inmunidad al ruido.
- Cualquier magnitud analógica tiene una representación digital equivalente y al revés: son las conversiones **A/D** y **D/A** (fig. 1.4, suma analógica frente a suma digital).
- El diseño digital es **modular**: basta con AND, OR y NOT, e incluso con uno solo de **NAND** o **NOR**.

## 1.2 Funciones combinacionales y secuenciales ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=12|p. 18]])

**Pasos para diseñar** (la electrónica digital es una ingeniería de *síntesis*):
1. Describir la computación en lenguaje natural de forma clara, completa, precisa e inequívoca.
2. Traducirla a especificaciones funcionales en un lenguaje lógico formal.
3. Reescribirla según el modelo de la fig. 1.1 (entradas, estados de memoria, salidas, reglas $R_D$).
4. Hacer la síntesis modular con un conjunto completo de operadores mínimos.

| Tipo | Definición | Modelo matemático | Ejemplos |
|---|---|---|---|
| **Combinacional** | La salida en un instante depende **solo de las entradas en ese instante** (sin memoria) | **Álgebra de Boole** | Operaciones aritmético-lógicas, multiplexores/demultiplexores, cambiadores de código |
| **Secuencial** | La salida depende también del **estado** (entradas y salidas anteriores): **tiene memoria** | **Teoría de autómatas finitos** | Contadores, registros de desplazamiento, temporizadores, memorias RAM |
| **Temporización** | Coordina las operaciones combinacionales y secuenciales | — | Monoestables, astables, temporizadores programables, relojes mono y polifásicos |

- En la realidad las funciones combinacionales no son instantáneas: las puertas tienen **retardos**, y el objetivo del diseño es minimizarlos.
- Lo secuencial necesita además representar el **retardo**: $Q(t_n) = D(t_{n-1})$, que es lo que hace el **biestable D** (*Delay*). Hay otros biestables (T, R-S, J-K). Un biestable se puede hacer con dos inversores realimentados, así que toda la electrónica digital se puede sintetizar con un único tipo de operador.

> [!important] Representar, analizar y sintetizar (p. 19-20)
> - **Representar**: describir *completamente* la función.
>   - **En extenso**: tabla de verdad o diagrama de Venn (todos los valores).
>   - **En intenso**: una expresión booleana, p. ej. $f(x,y,z) = (x\bar y + xy)\bar z$.
> - **Analizar**: del circuito a la función lógica que calcula.
> - **Sintetizar**: el proceso inverso, de la función (o de una descripción en lenguaje natural) al circuito. Es más difícil, porque se parte de una descripción imprecisa.
>
> Ejemplo del coche (p. 20): dar paso al arranque solo si las puertas están cerradas ($x_1=1$), el cinturón abrochado ($x_2=1$), las luces apagadas ($x_3=1$) y el motor parado ($x_4=0$) → $y = x_1 x_2 x_3 \overline{x_4}$.

## 1.3 Álgebra de Boole ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=16|p. 22]])

Boole (*Las leyes del pensamiento*) la creó para el estudio formal del lenguaje. **Shannon (1938)**, en *Un análisis simbólico de los circuitos con relés*, la asoció a niveles de tensión y conmutadores: así nace la **teoría de la conmutación**.

Sobre $B = \{0,1\}$ con suma (+), producto (·) y complemento, hay álgebra de Boole si se cumplen estos **postulados**:

| | Postulado | (a) suma | (b) producto |
|---|---|---|---|
| **P.1** | Operaciones **cerradas** | $X+Y \in B$ | $X \cdot Y \in B$ |
| **P.2** | **Elemento neutro** | $X + 0 = X$ | $X \cdot 1 = X$ |
| **P.3** | **Conmutativa** | $X+Y = Y+X$ | $XY = YX$ |
| **P.4** | **Distributiva** (cada una respecto de la otra) | $X + YZ = (X+Y)(X+Z)$ | $X(Y+Z) = XY + XZ$ |
| **P.5** | **Complementariedad** | $X + \overline X = 1$ | $X \cdot \overline X = 0$ |

> [!warning] Ojo con P.4.a
> La suma es distributiva respecto del producto, $X + YZ = (X+Y)(X+Z)$. En el álgebra "normal" no pasa: es fácil olvidarla.

**Dualidad**: si una relación es cierta, también lo es su **dual**, que se obtiene intercambiando 0 ↔ 1 y + ↔ ·. Por ejemplo, $X+0=X$ ↔ $X·1=X$. En los circuitos, pasar al dual equivale a intercambiar las puertas AND y OR (fig. 1.13).

**Teoremas** (p. 27):

| | Teorema | Forma suma | Forma dual |
|---|---|---|---|
| **T.1** | Doble complementación | $\overline{\overline X} = X$ | |
| **T.2** | Idempotencia | $X + X = X$ | $X \cdot X = X$ |
| **T.3** | Absorción | $X + XY = X$ | $X(X+Y) = X$ |
| **T.4** | Adyacencia | $XY + X\overline Y = X$ | $(X+Y)(X+\overline Y) = X$ |
| **T.5** | De Morgan | $\overline{X+Y} = \overline X \cdot \overline Y$ | $\overline{X \cdot Y} = \overline X + \overline Y$ |

**Tres formas de demostrar** una igualdad (las piden en el objetivo 2):
1. **Inducción completa**: la tabla de verdad de los dos lados para todas las combinaciones (figs. 1.5, 1.9, 1.12, 1.14a).
2. **Postulados**: p. ej. absorción: $X + XY = X(1+Y) = X$.
3. **Diagramas de Venn**: cada variable es un área. Su complementario es el resto del rectángulo (el rectángulo = 1), la suma es la unión y el producto la intersección (figs. 1.7, 1.8, 1.10, 1.14b).

Y además se puede comprobar con el **simulador**: dos relojes, uno al doble de frecuencia que el otro, generan las 4 combinaciones de dos variables (fig. 1.15).

## 1.4 Funciones lógicas: formas canónicas ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=27|p. 33]])

Una **función lógica** de $n$ variables es una aplicación $f: B^n \to B$.
- Hay $2^n$ **configuraciones** de entrada (filas de la tabla de verdad).
- Hay $2^{2^n}$ **funciones posibles**. Para $n=2$ salen **16 funciones**.

### Forma normal disyuntiva: suma de minterms (p. 33)

- **Término mínimo (minterm) $m_i$**: el **producto** de *todas* las variables, negadas o no, sin repetir ninguna. Una variable va negada si en esa fila vale **0** y sin negar si vale **1** (p. ej. 01 → $\overline{x_1}x_2$). Se llama así porque ocupa un área **mínima** (una intersección) en el diagrama de Venn.
- Para cada configuración solo hay **un minterm que vale 1**.
- $f = \sum_{i=0}^{2^n-1} a_i\, m_i$, con $a_i = 1$ si el minterm está en la función. Notación compacta: $f = \sum m(\ldots)$, con **los números de las filas donde f = 1**.
- **Función universal** (fig. 1.16): un circuito que genera los 4 minterms y los pasa por puertas AND con los coeficientes de control $a_0 \ldots a_3$. Cambiando $a_3a_2a_1a_0$ de 0000 a 1111 se obtienen las 16 funciones. El subíndice de $f_i$ en binario da los coeficientes: $f_1$ (0001) = AND, $f_9$ (1001) = coincidencia, etc.

### Forma normal conjuntiva: producto de maxterms (p. 36)

- **Término máximo (maxterm) $M_i$**: la **suma** de todas las variables. Una variable va **negada si en esa fila vale 1** y sin negar si vale 0. Es el criterio contrario al de los minterms: 00 → $x_1 + x_2$; 11 → $\overline{x_1} + \overline{x_2}$. Ocupa un área **máxima** (una unión) en el diagrama de Venn.
- Para cada configuración solo hay **un maxterm que vale 0**.
- $f = \prod (A_i + M_i)$: el maxterm está si $A_i = 0$. Notación compacta: $f = \prod M(\ldots)$, con **los números de las filas donde f = 0**.

> [!important] Resumen de las formas canónicas (fig. 1.18)
> | Fila | Minterm | Maxterm |
> |---|---|---|
> | 00 | $m_0 = \overline{x_1}\,\overline{x_2}$ | $M_0 = x_1 + x_2 = \overline{m_0}$ |
> | 01 | $m_1 = \overline{x_1}\,x_2$ | $M_1 = x_1 + \overline{x_2} = \overline{m_1}$ |
> | 10 | $m_2 = x_1\,\overline{x_2}$ | $M_2 = \overline{x_1} + x_2 = \overline{m_2}$ |
> | 11 | $m_3 = x_1 x_2$ | $M_3 = \overline{x_1} + \overline{x_2} = \overline{m_3}$ |
>
> - **Minterms → los 1 de f. Maxterms → los 0 de f.**
> - $M_j = \overline{m_j}$ (por De Morgan).
> - forma minterm de $f$ = $\overline{\text{forma maxterm de } \overline f}$, y forma maxterm de $f$ = $\overline{\text{forma minterm de } \overline f}$ ([1.30]-[1.31]).

**Pasar de una a otra**: los números que *no* están en una lista son los de la otra.
- $\sum m(0,1,2,6,7) = \prod M(3,4,5)$
- $\prod M(2,3,4,5,6) = \sum m(0,1,7)$
- P+F P.1.9: $\prod M(1,2,5,9,12,13) = \sum m(0,3,4,6,7,8,10,11,14,15)$

**Funciones de 2 variables que conviene saber de memoria** (figs. 1.19-1.20):

| Función | Tabla (00, 01, 10, 11) | Minterms | Maxterms | Expresión |
|---|---|---|---|---|
| Coincidencia (XNOR) | 1 0 0 1 | $\sum m(0,3)$ | $\prod M(1,2)$ | $\overline{x_1}\,\overline{x_2} + x_1x_2 = \overline{x_1 \oplus x_2}$ |
| Anticoincidencia (XOR) | 0 1 1 0 | $\sum m(1,2)$ | $\prod M(0,3)$ | $\overline{x_1}x_2 + x_1\overline{x_2} = x_1 \oplus x_2$ |
| NAND | 1 1 1 0 | $\sum m(0,1,2)$ | $\prod M(3)$ | $\overline{x_1 x_2} = \overline{x_1} + \overline{x_2}$ |
| NOR | 1 0 0 0 | $\sum m(0)$ | $\prod M(1,2,3)$ | $\overline{x_1 + x_2} = \overline{x_1}\,\overline{x_2}$ |

> [!tip] XOR y XNOR (P+F P.1.1-P.1.2)
> - XOR = **anticoincidencia**: vale 1 cuando las entradas **no coinciden**.
> - XNOR = **coincidencia**: vale 1 cuando coinciden.
> - Son complementarias: $f_{XOR} + f_{XNOR} = 1$.
> - XOR de 3 variables: $A \oplus B \oplus C = \sum m(1,2,4,7)$. Vale 1 cuando hay un número **impar** de unos.

## 1.5 Representaciones completas con NAND y NOR ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=38|p. 44]])

- {AND, OR, NOT} es un **conjunto completo**. **NAND** sola y **NOR** sola también lo son, y resultan más útiles para fabricar los circuitos.
- Notación: NAND = $x_1 \uparrow x_2 = \overline{x_1 x_2}$; NOR = $x_1 \downarrow x_2 = \overline{x_1 + x_2}$.
- Cualquier suma de minterms se puede hacer con **dos niveles de NAND**: $f = \overline{\prod \overline{a_i m_i}}$ [1.37].

**AND, OR y NOT con un solo tipo de puerta** (fig. 1.22):

| | Solo NAND | Solo NOR |
|---|---|---|
| NOT | NAND con las entradas unidas: $\overline{X X} = \overline X$ | NOR con las entradas unidas |
| AND | NAND seguido de NOT-NAND | NOR de las entradas negadas: $\overline{\overline{x_1} + \overline{x_2}}$ |
| OR | NAND de las entradas negadas: $\overline{\overline{x_1}\cdot\overline{x_2}}$ | NOR seguido de NOT-NOR |

> [!example] Pasar a solo NAND (p. 47; P+F P.1.13)
> 1. Obtener una **expresión mínima** en suma de productos.
> 2. **Negar dos veces** (la función no cambia).
> 3. Aplicar **De Morgan** hasta que solo queden **variables negadas** (un inversor = NAND con las entradas unidas) y **productos negados**.
>
> **Para pasar a solo NOR** el procedimiento es el mismo, partiendo de un **producto de sumas**, y se para cuando solo quedan variables negadas y **sumas negadas** (p. 48-49).

> [!example] Método gráfico (p. 50, fig. 1.28)
> Se niegan **las salidas del primer nivel y las entradas del segundo**. La función no cambia, porque es una doble negación.
> - AND-OR (suma de productos) → **solo NAND**.
> - OR-AND (producto de sumas) → **solo NOR**.
>
> Por De Morgan, una OR con las entradas negadas es una NAND, y una AND con las entradas negadas es una NOR.

**¿Por qué diseñar solo con NAND o solo con NOR?** (P+F P.1.12): cada chip trae varias puertas iguales (7400: 4 NAND; 7404: 6 inversores). Si se usa un solo tipo de puerta, se gastan menos chips y menos área. Por ejemplo, la fig. 1.24 necesita 3 chips y la misma función solo con NOR (fig. 1.25) necesita 2.

**Puertas de más entradas con puertas de 2** (P+F P.1.3, P.1.4, P.1.14):
- OR de 3 entradas: $A + (B + C)$.
- NOR de 3 entradas con NOR de 2: $\overline{A+B+C} = \overline{A + \overline{\overline{B+C}}}$. Se hace una NOR de B y C, se niega su salida (otra NOR con las entradas unidas) y se hace la NOR con A.

## 1.6 Análisis y síntesis ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=46|p. 52]])

- **Análisis**: se sigue la señal desde las entradas hasta la salida, anotando lo que hace cada puerta, y se comprueba con la tabla de verdad (figs. 1.30-1.31). En lógica combinacional es fácil. En secuencial no lo será, por el **estado** y los lazos de realimentación.
- **Síntesis** en dos fases:
  - **Fase a**: del lenguaje natural a la función lógica (asignar las variables → tabla de verdad → minterms).
  - **Fase b**: de la función al circuito, con cualquier conjunto completo.

Ejemplos resueltos:
- Dos salidas, A en alta si las entradas son iguales y B si son distintas → $A = \overline{X \oplus Y}$ (coincidencia), $B = X \oplus Y$, y una sale de la otra con un inversor (figs. 1.32-1.34).
- Tres entradas (fig. 1.35-1.36):
  - **Mayoría** ("dos o más en alta") → $A = XY + XZ + YZ$.
  - "Número impar" → $B = Z$.
  - "Número par" → $C = \overline Z$.

## 1.7 Introducción a la minimización ([[Teoria De Electronica Digital - Delgado Y Mira.PDF#page=52|p. 58]])

**Minimizar** es obtener la expresión más simplificada posible, para que el número de operadores sea mínimo. En suma de productos, la función es mínima con el **menor número de productos** y, a igual número de productos, con el **menor número de variables**.

### Minimización algebraica

- Los teoremas clave son la **adyacencia** (dos términos que solo se diferencian en una variable se reducen a la parte común) y la **idempotencia** (permite usar un mismo término en varias adyacencias): $\overline X Y Z + \overline X Y \overline Z = \overline X Y$.
- A veces conviene **expandir** primero, multiplicando por $(Z + \overline Z) = 1$ los términos a los que les falta una variable, y después agrupar:
  $f = \overline X Y + X Y \overline Z + X \overline Y + \overline X\,\overline Y\,\overline Z = \overline X Y + X \overline Y + \overline Z$ ([1.63]-[1.66]).
- Ejemplos: $AB + C(AB + \overline C) = AB$; $\ \overline A\,\overline B\,\overline C + \overline A B \overline C + AB\overline C + A\overline B\,\overline C = \overline C$.

### Mapas de Karnaugh (V-K) (p. 61)

Es un método gráfico: los minterms se colocan de modo que **las casillas vecinas solo se diferencian en una variable**. Por eso las columnas van en **código Gray: 00, 01, 11, 10** (no 00, 01, 10, 11).

```
3 variables (X | YZ)          4 variables (WX | YZ)
      00  01  11  10                00  01  11  10
 0 |  0   1   3   2           00 |  0   1   3   2
 1 |  4   5   7   6           01 |  4   5   7   6
                              11 | 12  13  15  14
                              10 |  8   9  11  10
```

**Reglas** (fig. 1.39):
1. Agrupar los **1 adyacentes**.
2. Los grupos son **cuadrados o rectángulos** de $2^n$ casillas (1, 2, 4, 8…). Un grupo de $2^n$ casillas elimina $n$ variables.
3. El mapa es como una **esfera**: el borde derecho es vecino del izquierdo y el de arriba del de abajo. **Las 4 esquinas son vecinas entre sí.**
4. Una misma casilla puede estar en varios grupos ($x + x = x$).
5. Cada grupo se simplifica (quedan las variables que no cambian) y se suman los resultados.
6. Si hay **pocos ceros**, puede ser mejor agrupar los **0**. Lo que se obtiene es $\overline f$, así que **hay que complementar el resultado**.

**Términos indiferentes** ($d$ o $x$): son combinaciones que nunca se dan o cuyo valor no importa. Se usan como 1 (o como 0) **solo si ayudan a formar grupos mayores**. **Nunca se hace un grupo solo con indiferentes** (p. 69; P+F P.1.21-P.1.22, con el ejemplo de la alarma).

Ejemplos resueltos en el libro:

| Función | Resultado |
|---|---|
| $\sum m(0,1,2,3,7)$ | $\overline X + YZ$ |
| $\sum m(0,2,3,4,7)$ | $\overline Y\,\overline Z + YZ + \overline X Y$ |
| $\sum m(0,1,2,3,4,6)$ (agrupando ceros: $\overline f = XZ$) | $\overline X + \overline Z$ |
| $\sum m(0,3,5,6)$ | Ya es mínima (no hay adyacencias): es la XNOR de 3 variables |
| $\sum m(0,2,3,4,5,6,7,8,12)$ | $\overline Y\,\overline Z + \overline W X + \overline W Y$ |
| $\sum m(0,2,4,8,10,12)$ | $\overline Y\,\overline Z + \overline X\,\overline Z$ (las esquinas forman un grupo) |
| $\sum m(1,3,6,9,13,14,15) + \sum d(8,11,12)$ | $WX + \overline X Z + X Y \overline Z$ |

Comentario final del libro: con muchas variables la minimización solo es abordable por ordenador. Con la tecnología actual el criterio cambia: número de terminales, consumo, velocidad, carácter repetitivo y soluciones programables.

---

## Erratas del libro

> [!bug] Confirmada por el equipo docente
> **p. 31** (ejercicio del simulador, fig. 1.15): donde dice que Y tiene **2 MHz** debe decir **0,5 MHz** (P+F P.1.16). Con X a 1 MHz, Y tiene que ir a la *mitad* de frecuencia (periodo 2 µs).

> [!bug] Detectadas por Claude al leer el tema (comprobadas con las tablas y los mapas, pero no confirmadas por el equipo docente)
> - **p. 27, fig. 1.8**: los rótulos "X(Y+X)" y "X·Y+Y·Z" deberían ser **X(Y+Z)** y **X·Y+X·Z**.
> - **p. 28, fig. 1.9**: la columna "Y·Y" es **X·Y**.
> - **p. 42, [1.29]**: el índice va de 0 a $2^n - 1$, no a $2^{n-1}$.
> - **p. 57**: "Por tanto B = $\overline Z$" debe ser **C = $\overline Z$**.
> - **p. 62**: la función de la fig. 1.38.b es $\sum m(0,1,6,7)$; en [1.68] pone (0,**2**,6,7).
> - **p. 67, fig. 1.45**: al pie le falta el 12; la función es $\sum m(0,2,3,4,5,6,7,8,12)$.
> - **p. 68, fig. 1.47**: al agrupar los ceros se obtiene $\overline f = Z + XY$, no $f$. Complementando sale el mismo resultado de la fig. 1.46.

## Autoevaluación

### Preguntas de teoría (del libro, pp. 72-78)

- [ ] 1.1 ¿Qué diferencia hay entre dato y operador? Úsala para comparar el cálculo analógico con el digital.
- [ ] 1.2 ¿Cuántos valores puede tener una señal analógica? ¿Y una digital? ¿Cómo se hace más precisa la representación digital de una magnitud continua?
- [ ] 1.3 "El tiempo analógico es continuo y el digital es discreto": explícalo.
- [ ] 1.4 Enumera operadores analógicos y operadores digitales.
- [ ] 2.1 Demuestra que la suma es distributiva respecto del producto: $x + yz = (x+y)(x+z)$.
- [ ] 2.2 Demuestra los duales de la absorción, $x(x+y) = x$, y de la adyacencia, $(x+y)(x+\bar y) = x$.
- [ ] 3.1 Pasa a solo NAND: $\overline{X Y \overline Z} + X\overline Y Z + \overline X Y \overline Z$; $\sum m(1,3,5,7)$; $\prod M(1,3,5)$.
- [ ] 3.2 Pasa a solo NOR: $\overline Y\,\overline Z + YZ + \overline X Y$; $\overline{XYZ} + \overline X Y Z + X \overline Y Z + XY\overline Z$.
- [ ] 4.1-4.3 Analiza los circuitos de las pp. 75-76.
- [ ] 5.1 Diseña un circuito que pase de binario de 3 bits a 8 líneas y otro que haga lo contrario.
- [ ] 5.2 Tres entradas y una salida que se pone en alta cuando hay **dos o más ceros**.
- [ ] 5.3 Votación de 4 amigos con monedas: más caras → cine; más cruces → copas; empate → estudiar.
- [ ] 5.4 Sintetiza $Y = A\overline B C + AB\overline C + \overline A B C + \overline{AB}$.
- [ ] 6.1 ¿Qué teoremas son los más útiles para minimizar y por qué?
- [ ] 6.2 Minimiza $f_1 = \sum m(0,1,2)$ y $f_2 = \prod M(1,2,3)$ (2 variables).
- [ ] 6.3 ¿Por qué el orden de las columnas del mapa es 00, 01, 11, 10?
- [ ] 6.4 Minimiza $\sum m(1,5,6)$, $\sum m(5,7)$ y $\sum m(1,2,4,7)$ (3 variables).
- [ ] 6.5 Minimiza $\sum m(1,9,10,11,13,14,15)$ y $\sum m(1,3,5,6,7,9,11,13,14,15)$ (4 variables).

> [!success]- Soluciones de Claude a 5.2, 6.2, 6.4 y 6.5 (no vienen en el libro; comprobadas con el mapa)
> - **5.2**: hay dos o más ceros en $\sum m(0,1,2,4)$ → $\overline X\,\overline Y + \overline X\,\overline Z + \overline Y\,\overline Z$ (la "mayoría" de las entradas negadas).
> - **6.2**: $f_1 = \overline{x_1} + \overline{x_2}$ (NAND); $f_2 = \overline{x_1}\,\overline{x_2}$ (NOR).
> - **6.4**: $\sum m(1,5,6) = \overline Y Z + XY\overline Z$; $\ \sum m(5,7) = XZ$; $\ \sum m(1,2,4,7) = X \oplus Y \oplus Z$ (no se puede simplificar).
> - **6.5**: $\sum m(1,9,10,11,13,14,15) = WZ + WY + \overline X\,\overline Y Z$; $\ \sum m(1,3,5,6,7,9,11,13,14,15) = Z + XY$.

### Problemas resueltos

[[Problemas Electrónica Digital.pdf#page=10|Libro de problemas, capítulo 1]]. Los enunciados de E.1.1-E.1.7 también están al final del tema en el libro de teoría (pp. 70-71).

| Problema | Tipo | Página del PDF |
|---|---|---|
| E.1.1 | Análisis | [[Problemas Electrónica Digital.pdf#page=12\|12]] |
| E.1.2 | Análisis y paso a NAND | [[Problemas Electrónica Digital.pdf#page=13\|13]] |
| E.1.3 | Paso de NAND a NOR | [[Problemas Electrónica Digital.pdf#page=17\|17]] |
| E.1.4 | Síntesis (AND-OR-NOT, NAND, NOR) | [[Problemas Electrónica Digital.pdf#page=19\|19]] |
| E.1.5 | Formas canónicas y dualidad | [[Problemas Electrónica Digital.pdf#page=25\|25]] |
| E.1.6 | Minimización con De Morgan y adyacencia | [[Problemas Electrónica Digital.pdf#page=28\|28]] |
| E.1.7 | Karnaugh | [[Problemas Electrónica Digital.pdf#page=31\|31]] |
| E.1.8-E.1.9 | Karnaugh con minterms y con maxterms | [[Problemas Electrónica Digital.pdf#page=32\|32]] |
| E.1.10 | Términos irrelevantes | [[Problemas Electrónica Digital.pdf#page=36\|36]] |

### Simulación ([[Actividades_autoevalacion___simulacion___Tema_1.pdf|actividades A.1.1-A.1.6]])

Es práctica para las PEC, que son de diseño y simulación.

- [ ] A.1.1 Comprobar las puertas NAND (7400), NOR (7402), NOT (7404) y XOR (7486). **No elijas puertas "open collector"** (p. ej. la 74136): les falta la resistencia de colector (libro, pp. 191-193).
- [ ] A.1.2 Propiedad distributiva (fig. 1.6).
- [ ] A.1.3 Absorción, adyacencia y De Morgan (figs. 1.11, 1.13 y 1.15).
- [ ] A.1.4 Función universal en forma normal disyuntiva (fig. 1.16): las 16 funciones.
- [ ] A.1.5 Función universal en forma normal conjuntiva (producto de maxterms).
- [ ] A.1.6 La función de la ec. [1.63] con varias puertas, solo con NAND y solo con NOR, y comprobar que son equivalentes.

> [!tip] Trucos del simulador (P+F)
> - Para tener todas las combinaciones de entrada, pon **relojes cuya frecuencia se vaya dividiendo por 2** de una variable a la siguiente.
> - La OR de más de 2 entradas se hace encadenando 7432 (P.1.14).
> - Si las salidas de circuitos equivalentes **no conmutan a la vez**, es por el **retardo de las puertas**, que depende del tipo de puerta y del número de niveles. En la ec. 1.63, la versión NAND fue la más rápida y la NOR la más lenta (P.1.23). Con *Analysis Setup → Digital Setup → Timing Mode* se puede cambiar de "Typical" a "Minimum".

## Dudas
> [!question]

## Errores en autoevaluación
