---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "Febrero 2014 - Modelo B.pdf"
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Febrero 2014, modelo B · Ejercicios 10-18

Examen: ![[Febrero 2014 - Modelo B.pdf]] (páginas 2 y 3). Sigue a [[Febrero 2014 B - Ejercicios 1-5]] y [[Febrero 2014 B - Ejercicios 6-9]]. Métodos de todo el examen en [[LED - Guía rápida de examen]].

Son las preguntas de **conjuntos, relaciones, funciones, combinatoria y grafos**. Casi todas se contestan en menos de un minuto si tienes clara la definición. Acertar suma 0,5 y fallar resta 0,25.

> [!note] Datos: el grafo de la figura (arcos con su peso)
> $a \to b$ (8) · $a \to c$ (4) · $b \to d$ (5) · $c \to b$ (2) · $c \to d$ (1) · $c \to e$ (7) · $d \to e$ (3) · $e \to f$ (6) · $f \to d$ (2) · $f \to f$ (8)

> [!success]- Soluciones
> | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
> |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | c | b | b | c | c | b | b | c | a |
>
> *Las resolvió Jarvis; no son la plantilla oficial. Las cuentas de las preguntas 13, 15 y 18 están comprobadas con un script.*

## Ejercicio 10: $A \cup \sim A$
Enunciado: ¿a qué equivale $A \cup \sim A$, siendo $E$ el conjunto universal? Opciones: (a) $\varnothing$ · (b) $A \cap \sim\varnothing$ · (c) $E$.

Todo elemento está en $A$ o fuera de $A$, así que la unión lo contiene todo: $A \cup \sim A = E$.

Por qué falla (b): $\sim\varnothing = E$, así que $A \cap E = A$, que no es $E$ salvo que $A$ ya lo sea.

**Respuesta: (c).**

> [!tip] Es lógica disfrazada
> $\cup$ es $\lor$, $\cap$ es $\land$, $\sim$ es $\lnot$, $E$ es «siempre 1» y $\varnothing$ es «siempre 0». $A \cup \sim A$ es $p \lor \lnot p$: tautología, o sea, $E$.

## Ejercicio 11: conjunto potencia de $A = \{1, 2\}$
Opciones: (a) $\varnothing \cup \{\{1\},\{2\}\} \cup A$ · (b) $\{\varnothing\} \cup \{\{1\},\{2\}\} \cup \{A\}$ · (c) $\varnothing \cup \{\{1\},\{2\}\} \cup \{A\}$.

El conjunto potencia tiene por elementos **todos los subconjuntos** de $A$, y son $2^{|A|} = 4$:

$$\mathcal{P}(A) = \{\varnothing, \{1\}, \{2\}, \{1,2\}\}$$

Se calcula cada opción:

| Opción | Resultado | Elementos | ¿Es $\mathcal{P}(A)$? |
|---|---|:-:|---|
| (a) | $\{\{1\},\{2\},1,2\}$ | 4 | ❌ tiene 4, pero $1$ y $2$ no son subconjuntos, y falta $\varnothing$ |
| (b) | $\{\varnothing,\{1\},\{2\},\{1,2\}\}$ | 4 | ✅ |
| (c) | $\{\{1\},\{2\},\{1,2\}\}$ | 3 | ❌ falta $\varnothing$ |

**Respuesta: (b).**

> [!warning] La trampa
> $\varnothing \cup X = X$: unir el vacío **no añade nada**. Para que $\varnothing$ sea un elemento hay que unir $\{\varnothing\}$. Lo mismo con $A$ y $\{A\}$: unir $A$ mete sus elementos ($1$ y $2$); unir $\{A\}$ mete el propio $A$.

## Ejercicio 12: máximo de tuplas de una relación
$|A| = 25$ y $|B| = 18$. Opciones: (a) $25! \times 18!$ · (b) $25 \times 18$ · (c) $18^{25}$.

Una relación entre $A$ y $B$ es un **subconjunto de $A \times B$**. El subconjunto más grande es el propio $A \times B$, que tiene $|A| \cdot |B| = 25 \times 18 = 450$ tuplas.

**Respuesta: (b).**

> [!warning] No confundas estas dos cuentas
> - Máximo de **tuplas** de una relación: $|A| \cdot |B|$.
> - Número de **funciones** de $A$ en $B$: $|B|^{|A|}$. Es la opción (c), que está ahí para despistar.

## Ejercicio 13: propiedad de $R \cup I_X$
$X = \{a,b,c\}$ y $R = \{(a,b),(b,a),(b,c),(c,b)\}$. Opciones: (a) antisimétrica · (b) transitiva · (c) reflexiva.

$I_X$ es la identidad: $\{(a,a),(b,b),(c,c)\}$. Al añadirla, **se garantiza la reflexiva**, sin hacer nada más.

Las otras se descartan con un contraejemplo:
- **Antisimétrica**: falla porque están $(a,b)$ y $(b,a)$ con $a \neq b$.
- **Transitiva**: falla porque están $(a,b)$ y $(b,c)$, pero no $(a,c)$.

**Respuesta: (c).**

## Ejercicio 14: función inyectiva de $X = \{a,b,c\}$ en $Y = \{1,2,3\}$
Comprueba dos cosas, en este orden: **(1)** ¿es función? Cada elemento de $X$ tiene exactamente una imagen. **(2)** ¿es inyectiva? No se repite ninguna imagen.

| Opción | ¿Función? | ¿Inyectiva? |
|---|---|---|
| (a) $\{(a,1),(c,2),(c,3)\}$ | ❌ $c$ tiene dos imágenes y $b$ ninguna | — |
| (b) $\{(b,1),(c,2),(a,1)\}$ | ✅ | ❌ $a$ y $b$ van al 1 |
| (c) $\{(c,2),(a,3),(b,1)\}$ | ✅ | ✅ imágenes 2, 3 y 1 |

**Respuesta: (c).** El orden de los pares no importa: no te fíes de que aparezcan desordenados.

## Ejercicio 15: cardinal de $A \cap B \cap C$
$|A| = 69$, $|B| = 80$, $|C| = 87$, $|A \cap B| = 58$, $|A \cap C| = 37$, $|B \cap C| = 46$ y $|A \cup B \cup C| = 130$.

Principio de **inclusión-exclusión**: se suman los conjuntos, se restan las parejas y se suma el trío.

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

1. Conjuntos: $69 + 80 + 87 = 236$.
2. Parejas: $58 + 37 + 46 = 141$.
3. $130 = 236 - 141 + x = 95 + x$, luego $x = 35$.

**Respuesta: (b) 35.**

## Ejercicio 16: grado de entrada del nodo $c$
El **grado de entrada** es el número de arcos que **llegan** al nodo: mira las puntas de flecha.

- Llega a $c$: $a \to c$.
- Salen de $c$: $c \to b$, $c \to d$ y $c \to e$. Esas tres cuentan para el grado de salida.

Grado de entrada 1, grado de salida 3 y grado total 4. La opción (a) es el total, que está ahí para despistar.

**Respuesta: (b) 1.**

## Ejercicio 17: camino con todos los nodos distintos
Opciones: (a) ciclo · (b) camino sencillo · (c) camino elemental.

| Nombre | Qué no repite |
|---|---|
| Camino **sencillo** | **aristas** |
| Camino **elemental** | **vértices** (y, por tanto, tampoco aristas) |
| Paseo | puede repetir las dos cosas |

**Respuesta: (c).** Regla para recordarlo: **e**lemental, lo más **e**stricto, ni siquiera repite vértices.

## Ejercicio 18: máximo de arcos con 14 nodos
Grafo dirigido sencillo, sin bucles. Opciones: (a) 182 · (b) 13 · (c) 196.

Cada arco es un par **ordenado** de nodos distintos: el origen se elige entre 14 y el destino entre los 13 restantes.

$$n(n-1) = 14 \cdot 13 = 182$$

**Respuesta: (a).**

| Tipo de grafo | Máximo de arcos o aristas | Con $n = 14$ |
|---|---|:-:|
| Dirigido, sin bucles | $n(n-1)$ | 182 |
| Dirigido, con bucles | $n^2$ | 196, la opción (c) |
| No dirigido, sin bucles | $n(n-1)/2$ | 91 |

## Lo que tienes que llevarte
- Las preguntas 10-18 son sobre todo **definiciones y cuentas**, y salen rápido: resuélvelas pronto en el examen.
- Las opciones incorrectas suelen ser **el resultado de una fórmula parecida** ($18^{25}$ en la 12, el grado total en la 16, $n^2$ en la 18). Si tu cuenta coincide con una opción, comprueba que has usado la fórmula de lo que preguntan.
- Fuentes: libro web de LED ([[Libro web LED - texto completo.txt]]), secciones *Conjunto potencia*, *Funciones inyectivas*, *Principio de inclusión-exclusión*, *Grado de un vértice* y *Caminos y ciclos*, y mi nodo [[LED B4 - Grafos y árboles]]. La tabla de máximos de arcos del ejercicio 18 es razonamiento de Jarvis (el libro define el grafo completo, pero no he localizado esa tabla en él).

#revisar
