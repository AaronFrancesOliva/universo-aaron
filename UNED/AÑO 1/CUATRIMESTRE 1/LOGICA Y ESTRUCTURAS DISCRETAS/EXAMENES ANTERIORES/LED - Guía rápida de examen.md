---
asignatura: Lógica y Estructuras Discretas
tipo: guia-examen
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Guía rápida de examen

Qué hacer ante cada tipo de pregunta, sacado de los exámenes resueltos. Se ampliará con cada examen nuevo.

## Exámenes
Cada examen está en su carpeta, con el PDF y su resolución juntos.

| Examen | Resolución |
|---|---|
| 2025-26, febrero, 1.ª semana, modelo A | [[2025-26 Febrero 1ª semana A - Resolución]] |
| 2025-26, febrero, 2.ª semana, modelo B | [[2025-26 Febrero 2ª semana B - Resolución]] |
| 2025-26, septiembre, modelo A | [[2025-26 Septiembre A - Resolución]] |
| 2013-14, febrero, modelo B | [[Febrero 2014 B - Ejercicios 1-5\|1-5]] · [[Febrero 2014 B - Ejercicios 6-9\|6-9]] · [[Febrero 2014 B - Ejercicios 10-18\|10-18]] |
| 2023-24 y 2024-25 (10 modelos) | solo la clave, en [[LED - Patrones de examen]]; sin explicación todavía |

> [!info] Formato actual (exámenes de 2025-26 y guía 2026-27)
> **18 preguntas de test y 1 de desarrollo**, **120 minutos**, **sin material**. Acertar suma **0,5**, fallar resta **0,25** y en blanco no resta. **El desarrollo solo se corrige con al menos 6 de 9 en el test** (en 2014 hacían falta 7,5). Hace falta un **3,5** en el examen para que cuenten la PEC y las prácticas.

> [!tip] Patrones: léelos en [[LED - Patrones de examen]]
> - **Reparto**: 1-5 proposicional, 6-9 predicados, 10-14 conjuntos, relaciones y funciones, una de combinatoria (14 o 15) y el resto, grafos.
> - **Preguntas encadenadas** (9 de 9 exámenes): un único par incompatible responde las preguntas 2, 4 y 5, y las dos $Y$ falsas de las preguntas 6 y 7 forman la respuesta de la 9.
> - **Desarrollo**: en septiembre, tableau; en febrero, grafos o relaciones.
> - **Erratas**: hay preguntas con dos opciones válidas o con ninguna. Una vez que descartas todo menos dos, marcar compensa: con 50 % de acierto, la esperanza es $+0{,}125$.

## Reparto del tiempo (propuesta de Jarvis)
| Orden | Bloque | Preguntas (2014) | Tiempo |
|:-:|---|:-:|:-:|
| 1 | Conjuntos, relaciones, funciones y grafos | 10-18 | 25 min |
| 2 | Lógica proposicional | 1-5 | 30 min |
| 3 | Lógica de predicados | 6-9 | 30 min |
| 4 | Desarrollo (tableau) | 1 | 20 min |
| 5 | Repaso | | 15 min |

Empieza por lo que sale rápido. Copia los datos en limpio antes de calcular.

## Lógica proposicional
| Conectiva | Es falsa solo si… |
|---|---|
| $A \land B$ | alguna es 0 |
| $A \lor B$ | las dos son 0 |
| $A \to B$ | $A = 1$ y $B = 0$ |
| $A \leftrightarrow B$ | valen distinto |

| Te preguntan | Método rápido |
|---|---|
| ¿Satisface $I$ a estas fórmulas? | Evalúa cada fórmula una vez y **tacha las opciones** que incluyan una falsa |
| ¿Equivalente a…? | Transforma con $A \to B \equiv \lnot A \lor B$ y De Morgan. Para descartar, una fila donde difieran |
| ¿Insatisfacible? | Empieza por la fórmula más **restrictiva** (un $\land$ te fija variables). Si una opción tiene una fila que lo cumple todo, está descartada |
| ¿$X \models Y$? | Busca un **contraejemplo**: $X = 1$ e $Y = 0$. Si es imposible, es consecuencia |
| ¿Tautología? | Intenta hacerla **falsa**. En un $\to$, fuerza $1 \to 0$. Si es imposible, es tautología |

> [!important] Las tres preguntas son la misma
> $X \models Y \iff \{X, \lnot Y\}$ **insatisfacible** $\iff X \to Y$ **tautología**. Los exámenes reutilizan: la fila que resuelve una pregunta suele resolver otras dos.

Equivalencias que hay que saber sin pensar:
- $A \to B \equiv \lnot A \lor B$ y $\lnot(A \to B) \equiv A \land \lnot B$
- $\lnot(A \lor B) \equiv \lnot A \land \lnot B$ y $\lnot(A \land B) \equiv \lnot A \lor \lnot B$
- $A \to B \equiv \lnot B \to \lnot A$ (contrarrecíproca)

Explicación completa: [[Febrero 2014 B - Ejercicios 1-5]].

## Lógica de predicados
| Te preguntan | Método rápido |
|---|---|
| ¿$I$ satisface $\forall x\, F$? | Comprueba **todos** los objetos. Con uno que falle, es falsa |
| ¿$I$ satisface $\exists x\, F$? | Basta **un** objeto |
| ¿$\forall x \exists y\, F$? | Para **cada** $x$ busca su $y$; puede ser distinto para cada uno |
| ¿Tautología o consecuencia entre fórmulas? | Compara lo de **dentro** de los cuantificadores con equivalencias |

**Antes de calcular**, mira si algún predicado es **todo el universo** o está **vacío**: decide medio ejercicio. Y en $Df(y)$, calcula primero $f(y)$ y luego mira $D$.

Explicación completa: [[Febrero 2014 B - Ejercicios 6-9]].

## Desarrollo: tableau de una consecuencia
Para demostrar $A \models B$:
1. Escribe la premisa $A$ y la **conclusión negada** $\lnot B$.
2. Primero los **existenciales** ($\exists$ y $\lnot\forall$), con una **constante nueva** cada uno.
3. Después los **universales** ($\forall$ y $\lnot\exists$), con las constantes que ya existen.
4. Primero las reglas que no abren rama ($\alpha$) y al final las que abren ($\beta$).
5. Si **todas las ramas cierran**, queda demostrado.

Ejemplo resuelto: [[Febrero 2014 B - Ejercicios 6-9#Pregunta de desarrollo: el tableau de $Y_3 \models Y_4$|tableau de $Y_3 \models Y_4$]].

## Conjuntos, relaciones, funciones y combinatoria
| Te preguntan | Método rápido |
|---|---|
| Identidades de conjuntos | Tradúcelas a lógica: $\cup = \lor$, $\cap = \land$, $\sim = \lnot$, $E = 1$, $\varnothing = 0$ |
| Conjunto potencia | Tiene $2^{\lvert A \rvert}$ elementos. Recuerda que $\varnothing \cup X = X$, pero $\{\varnothing\} \cup X$ sí añade $\varnothing$ |
| Máximo de tuplas de una relación | $\lvert A \rvert \cdot \lvert B \rvert$ |
| Número de funciones de $A$ en $B$ | $\lvert B \rvert^{\lvert A \rvert}$ |
| ¿Reflexiva? | Están todos los $(x, x)$ |
| ¿Antisimétrica? | Busca $(x, y)$ y $(y, x)$ con $x \neq y$: si existen, falla |
| ¿Transitiva? | Busca $(x, y)$ y $(y, z)$ sin $(x, z)$: si existen, falla |
| ¿Función inyectiva? | 1.º cada elemento de $A$ tiene **una** imagen. 2.º no se repite ninguna imagen |
| Cardinal con 3 conjuntos | Suma los conjuntos, resta las parejas y suma el trío |
| Cierre transitivo | Encadena $(x,y)$ e $(y,z)$, añade $(x,z)$ y repite hasta que no salga nada nuevo. Si ya es transitiva, el cierre es ella misma |
| Función $f: A \to B$ | Con $\lvert A \rvert > \lvert B \rvert$ nunca es inyectiva; con $\lvert A \rvert < \lvert B \rvert$ nunca es sobreyectiva |
| ¿Qué fórmula de combinatoria? | ¿Importa el orden? No → combinaciones; sí → variaciones. ¿Se puede repetir? Busca palabras como «diferentes» |
| Dos elecciones independientes | Se multiplican: $\binom{5}{3} \cdot \frac{10!}{7!}$ |

Explicación completa: [[Febrero 2014 B - Ejercicios 10-18]].

## Grafos
| Te preguntan | Método rápido |
|---|---|
| Grado de entrada | Puntas de flecha que **llegan** (un bucle suma 1 a la entrada y 1 a la salida) |
| Camino sencillo / elemental | Sencillo no repite **aristas**; elemental no repite **vértices** |
| Máximo de arcos, $n$ nodos | Dirigido sin bucles $n(n-1)$; con bucles $n^2$; no dirigido sin bucles $n(n-1)/2$ |
| ¿Bipartito? | Colorea con dos colores. Un **ciclo impar** (como un triángulo) lo impide |
| ¿Puente? | Una arista es puente si **no está en ningún ciclo** |
| ¿Punto crítico? | Quita cada vértice candidato y cuenta las componentes; suele ser el de mayor grado |
| ¿Árbol? | Conexo y con $n - 1$ aristas. **Todas** sus aristas son puentes |
| Altura de un árbol | Máximo de los niveles. **La raíz tiene nivel 0** |
| ¿Camino euleriano? | Conexo y con **0 o 2** vértices de grado impar. Añadir una arista cambia la paridad de sus dos extremos |
| Fuerte / unilateral / débil | Fuerte: camino en los dos sentidos entre cualquier par. Unilateral: en al menos uno. Débil: conexo si ignoras las direcciones |
| Árbol de expansión | $n - 1$ aristas sin ciclos. Ve cogiendo las de menor peso y saltándote las que cierren un ciclo |

## Soluciones del modelo B de febrero de 2014
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| b | b | c | b | b | a | b | b | a | c | b | b | c | c | b | b | c | a |

*Resueltas por Jarvis; no son la plantilla oficial.*

#revisar
