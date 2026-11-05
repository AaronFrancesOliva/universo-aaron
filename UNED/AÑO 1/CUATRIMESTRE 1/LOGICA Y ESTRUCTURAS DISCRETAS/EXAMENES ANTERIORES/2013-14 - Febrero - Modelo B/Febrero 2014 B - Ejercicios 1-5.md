---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "Febrero 2014 - Modelo B.pdf"
fecha: 2026-10-10
tags: [led, examen, revisar]
---

# LED · Febrero 2014, modelo B · Ejercicios 1-5

Examen: ![[Febrero 2014 - Modelo B.pdf]] (de cuando la asignatura se llamaba *Estructuras Discretas*; curso 2013/14). Te lo marcaron como **el examen clave** de la asignatura.

Las preguntas 1-5 son de **lógica proposicional** (repaso en [[Lógica y Estructuras Discretas]]). Cada una tiene una sola respuesta correcta. En aquel examen, acertar sumaba 0,5 y fallar restaba 0,25.

> [!note] Datos
> - $X_1 : (p \to (q \lor r)) \land \lnot s$
> - $X_2 : (p \lor r) \to s$
> - $X_3 : q \leftrightarrow (s \land r)$
> - $X_4 : p \land \lnot (q \lor r)$

**1.** La interpretación $I : p = q = r = s = 0$ satisface:
- (a) $\{X_1, X_2, X_4\}$
- (b) $\{X_1, X_2, X_3\}$
- (c) $\{X_1, X_3, X_4\}$

**2.** Es equivalente a $X_4$:
- (a) $p \lor (q \lor r)$
- (b) $\lnot (p \to (q \lor r))$
- (c) $(q \lor r) \to p$

**3.** Es insatisfacible:
- (a) $\{X_2, X_4\}$
- (b) $\{X_1, X_3\}$
- (c) $\{X_1, X_4\}$

**4.** Es consecuencia correcta:
- (a) $X_2 \models \lnot X_4$
- (b) $X_1 \models \lnot X_4$
- (c) $X_3 \models \lnot X_1$

**5.** No es tautología:
- (a) $(p \to q) \leftrightarrow (\lnot q \to \lnot p)$
- (b) $X_2 \to \lnot X_4$
- (c) $X_4 \to \lnot X_1$

## Mis respuestas
1. 
2. 
3. 
4. 
5. 

> [!success]- Soluciones (ábrelas solo al terminar)
> 1. **(b)**. Con todo a 0: $X_1$ = 1 ($p$ = 0 hace verdadero el condicional y $\lnot s$ = 1), $X_2$ = 1 (antecedente falso), $X_3$ = 1 (0 ↔ 0) y $X_4$ = 0 ($p$ = 0).
> 2. **(b)**. $\lnot(p \to (q \lor r)) \equiv \lnot(\lnot p \lor q \lor r) \equiv p \land \lnot(q \lor r) = X_4$.
> 3. **(c)**. $X_4$ es justo la negación de $p \to (q \lor r)$, que $X_1$ exige: no pueden ser verdad a la vez. (a) se cumple con $p$ = 1, $q$ = $r$ = 0 y $s$ = 1; (b), con todo a 0.
> 4. **(b)**. Todo modelo de $X_1$ cumple $p \to (q \lor r)$, que equivale a $\lnot X_4$ (pregunta 2). (a) falla con $p$ = 1, $q$ = $r$ = 0 y $s$ = 1; (c) falla con todo a 0.
> 5. **(b)**. Con $p$ = 1, $q$ = $r$ = 0 y $s$ = 1, $X_2$ = 1 y $X_4$ = 1, así que $X_2 \to \lnot X_4$ = 0. (a) es la contrarrecíproca (tautología) y (c) es tautología porque $X_4$ y $X_1$ son incompatibles (pregunta 3).
>
> *Las resolvió Jarvis; no son la plantilla oficial. Si alguna no te cuadra, la vemos juntos.*

## Explicación paso a paso

*Explicado con Jarvis el 2026-10-16. Los conceptos salen del libro web de LED (secciones* Satisfacción, Satisfacibilidad, Tautologías, Equivalencia *y* Consecuencia *de la lógica proposicional, en [[Libro web LED - texto completo.txt]]).*

### Las reglas que lo resuelven todo

| Conectiva | Es verdadera (1)… | Truco |
|---|---|---|
| $\lnot A$ | cuando $A = 0$ | |
| $A \land B$ | **solo** si $A = 1$ y $B = 1$ | muy exigente para ser verdadera |
| $A \lor B$ | si al menos una es 1 | solo es falsa con 0 y 0 |
| $A \to B$ | **siempre, salvo $1 \to 0$** | si $A = 0$, ya es verdadera |
| $A \leftrightarrow B$ | cuando $A$ y $B$ valen lo mismo | |

### Ejercicio 1: la interpretación $p = q = r = s = 0$
Una interpretación **satisface** un conjunto si hace verdaderas **todas** sus fórmulas a la vez.
1. $X_1$: $p \to (q \lor r) = 0 \to 0 = 1$; $\lnot s = 1$; $1 \land 1 = 1$ ✅
2. $X_2$: $p \lor r = 0$; $0 \to 0 = 1$ ✅
3. $X_3$: $s \land r = 0$; $0 \leftrightarrow 0 = 1$ ✅
4. $X_4$: $p = 0$, y una $\land$ con un 0 ya es **0** ❌

Las opciones (a) y (c) incluyen $X_4$. **Respuesta: (b) $\{X_1, X_2, X_3\}$.**

### Ejercicio 2: equivalente a $X_4$
Dos fórmulas son **equivalentes** si valen lo mismo en todas las interpretaciones. En lugar de hacer tablas, se transforma con:
- $A \to B \equiv \lnot A \lor B$
- De Morgan: $\lnot(A \lor B) \equiv \lnot A \land \lnot B$
- $\lnot\lnot A \equiv A$

Opción (b): $\lnot(p \to (q \lor r)) \equiv \lnot(\lnot p \lor (q \lor r)) \equiv \lnot\lnot p \land \lnot(q \lor r) \equiv p \land \lnot(q \lor r) = X_4$ ✅

> [!tip] La idea de fondo
> El condicional $p \to (q \lor r)$ solo es falso en el caso «$1 \to 0$»: $p$ verdadera y $q \lor r$ falsa. Eso es justo lo que dice $X_4$. Por tanto, **$X_4$ es la negación de ese condicional**, y esa idea se usa en los ejercicios 3, 4 y 5.

Para descartar las otras basta una interpretación en la que valgan distinto que $X_4$:
- (a) $p \lor (q \lor r)$: con $p = q = 1$, (a) vale 1 y $X_4$ vale 0.
- (c) $(q \lor r) \to p$: con todo a 0, (c) vale 1 y $X_4$ vale 0.

**Respuesta: (b).**

### Ejercicio 3: insatisfacible
Un conjunto es **insatisfacible** si ninguna interpretación hace verdaderas todas sus fórmulas a la vez. Para descartar una opción basta encontrar **una** interpretación que las cumpla todas.
- (c) $\{X_1, X_4\}$: $X_1$ es una $\land$, así que exige $p \to (q \lor r) = 1$; pero $X_4 \equiv \lnot(p \to (q \lor r))$ (ejercicio 2). Una fórmula y su negación no pueden ser verdaderas a la vez ✅
- (a) $\{X_2, X_4\}$: $X_4$ obliga a $p = 1$, $q = 0$ y $r = 0$. Entonces $X_2$ queda $1 \to s$, que es verdadera si $s = 1$. Con $p=1, q=0, r=0, s=1$ se cumplen las dos: es satisfacible.
- (b) $\{X_1, X_3\}$: todo a 0 las cumple (ejercicio 1): es satisfacible.

> [!tip] Truco
> Empieza por la conectiva más **restrictiva**. $X_4$ es una $\land$, así que te fija $p$, $q$ y $r$ directamente, y luego solo queda ver qué pasa con $s$.

**Respuesta: (c) $\{X_1, X_4\}$.**

### Ejercicio 4: consecuencia correcta
$X \models Y$ significa que **toda interpretación que hace verdadera $X$ también hace verdadera $Y$**. Para descartar una opción basta un **contraejemplo**: una interpretación con $X = 1$ e $Y = 0$.

> [!important] Clave
> $X \models Y$ es lo mismo que decir que **$\{X, \lnot Y\}$ es insatisfacible**.

- (b) $X_1 \models \lnot X_4$: equivale a que $\{X_1, X_4\}$ sea insatisfacible, que es lo que demostramos en el ejercicio 3(c) ✅
- (a) $X_2 \models \lnot X_4$: con $p=1, q=0, r=0, s=1$, $X_2 = 1$ y $X_4 = 1$, así que $\lnot X_4 = 0$. Falla.
- (c) $X_3 \models \lnot X_1$: con todo a 0, $X_3 = 1$ y $X_1 = 1$, así que $\lnot X_1 = 0$. Falla.

**Respuesta: (b) $X_1 \models \lnot X_4$.**

### Ejercicio 5: no es tautología
Una **tautología** es verdadera en todas las interpretaciones. Basta encontrar **una** interpretación que haga falsa la fórmula.

> [!important] Clave
> $X \models Y$ es lo mismo que decir que **$X \to Y$ es tautología**. Las opciones de este ejercicio son las del ejercicio 4 con otro aspecto.

- (b) $X_2 \to \lnot X_4$: un $\to$ solo es falso con $1 \to 0$, así que necesitamos $X_2 = 1$ y $X_4 = 1$, que es el contraejemplo del ejercicio 4(a) ($p=1, q=0, r=0, s=1$). Con él la fórmula vale $1 \to 0 = 0$: **no es tautología** ✅
- (c) $X_4 \to \lnot X_1$: para que fuera falsa haría falta $X_4 = 1$ y $X_1 = 1$ a la vez, y el ejercicio 3(c) demostró que es imposible. Es tautología.
- (a) $(p \to q) \leftrightarrow (\lnot q \to \lnot p)$: es la **contrarrecíproca**. $\lnot q \to \lnot p \equiv q \lor \lnot p \equiv p \to q$, así que el $\leftrightarrow$ siempre vale 1. Es tautología.

**Respuesta: (b) $X_2 \to \lnot X_4$.**

### Lo que tienes que llevarte
Los cinco ejercicios son **una sola idea vista desde varios ángulos**:

- $X_4 \equiv \lnot(p \to (q \lor r))$ (ej. 2)
	- ⇒ $\{X_1, X_4\}$ es insatisfacible (ej. 3c)
	- ⇔ $X_1 \models \lnot X_4$ (ej. 4b)
	- ⇔ $X_4 \to \lnot X_1$ es tautología (ej. 5c)
- La interpretación $p=1, q=0, r=0, s=1$:
	- hace satisfacible $\{X_2, X_4\}$ (ej. 3a);
	- es contraejemplo de $X_2 \models \lnot X_4$ (ej. 4a);
	- hace falsa $X_2 \to \lnot X_4$ (ej. 5b).

| Te piden… | Lo que tienes que hacer |
|---|---|
| Que **sí** se cumpla algo (satisfacible, no es consecuencia, no es tautología) | Encontrar **una** interpretación que lo demuestre |
| Que **nunca** pase algo (insatisfacible, sí es consecuencia, sí es tautología) | Razonarlo para todas: con equivalencias, con la tabla de verdad o con un tableau |

> [!summary] Para el examen
> $X \models Y \iff \{X, \lnot Y\}$ insatisfacible $\iff X \to Y$ tautología. Resuelves un ejercicio y te sirve para los otros.

### Todo alrededor de $X_4$, con la tabla delante
*Añadido el 2026-10-16, cuando las conclusiones del ejercicio 2 en adelante no quedaron claras.*

**1. La pieza que se repite.** Dentro de $X_1$ hay un trozo que llamamos $C$:

$$C = p \to (q \lor r) \qquad X_1 = C \land \lnot s \qquad X_4 = \lnot C$$

> [!example] El paraguas
> - $C$: «si llueve, llevo paraguas».
> - Esa frase solo es **mentira** cuando llueve y no llevo paraguas (el caso $1 \to 0$).
> - Eso es justo $X_4$: «llueve ($p$) y no llevo paraguas ($\lnot(q \lor r)$)».
>
> Así que **$X_4$ = «la frase $C$ es mentira»**.

**2. La tabla de verdad completa** (16 interpretaciones):

| $p$ | $q$ | $r$ | $s$ | $C$ | $X_1$ | $X_2$ | $X_4$ | |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 | |
| 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | |
| 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | |
| 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | |
| **1** | **0** | **0** | **0** | **0** | **0** | **0** | **1** | ← $C$ falla, $X_4$ se cumple |
| **1** | **0** | **0** | **1** | **0** | **0** | **1** | **1** | ← $C$ falla, $X_4$ se cumple ★ |
| 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | |
| 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | |
| 1 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | |
| 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | |

En cada fila, $C$ y $X_4$ valen lo contrario: eso es $X_4 \equiv \lnot C$ (**ejercicio 2**).

**3. De ahí salen los ejercicios 3(c), 4(b) y 5(c).** $X_4$ solo vale 1 en las dos filas marcadas, y en ellas $C = 0$, así que $X_1 = C \land \lnot s = 0$. **No hay ninguna fila con $X_1 = 1$ y $X_4 = 1$ a la vez.** Los tres ejercicios dicen eso mismo con tres vocabularios distintos:

| Ejercicio | Lo que afirma | En la tabla |
|---|---|---|
| 3(c) $\{X_1, X_4\}$ insatisfacible | No hay ninguna fila donde las dos valgan 1 | ✅ ninguna fila tiene $X_1 = 1$ y $X_4 = 1$ |
| 4(b) $X_1 \models \lnot X_4$ | En todas las filas con $X_1 = 1$, $X_4 = 0$ | ✅ todas las filas con $X_1 = 1$ tienen $X_4 = 0$ |
| 5(c) $X_4 \to \lnot X_1$ tautología | El $\to$ nunca da $1 \to 0$: nunca $X_4 = 1$ con $X_1 = 1$ | ✅ la misma observación |

Con el paraguas: $X_1$ dice (entre otras cosas) «es verdad que si llueve llevo paraguas» y $X_4$ dice «llueve y no llevo paraguas». No pueden ser verdad las dos (3c); si $X_1$ es verdad, $X_4$ es mentira (4b); y «si $X_4$, entonces no $X_1$» siempre se cumple (5c).

**4. La fila ★ ($p = 1$, $q = 0$, $r = 0$, $s = 1$).** Es **la única fila con $X_2 = 1$ y $X_4 = 1$ a la vez**, y por eso aparece tres veces:

| Ejercicio | Para qué sirve la fila ★ |
|---|---|
| 3(a) $\{X_2, X_4\}$ | Las dos valen 1: es **satisfacible**, así que (a) no es la respuesta |
| 4(a) $X_2 \models \lnot X_4$ | $X_2 = 1$ y $\lnot X_4 = 0$: es un **contraejemplo** |
| 5(b) $X_2 \to \lnot X_4$ | $1 \to 0 = 0$: **no es tautología** |

Es la otra cara de lo anterior: con $X_1$ no existe ninguna fila «las dos a 1», así que todo funciona; con $X_2$ sí existe, así que todo falla.

> [!important] La regla que lo resume
> Para dos fórmulas $A$ y $B$, pregúntate: **¿existe una fila con $A = 1$ y $B = 1$?**
> - **No** → $\{A, B\}$ insatisfacible, $A \models \lnot B$ y $A \to \lnot B$ es tautología.
> - **Sí** → $\{A, B\}$ satisfacible, $A \not\models \lnot B$ y $A \to \lnot B$ no es tautología (esa fila es el contraejemplo).

#revisar
