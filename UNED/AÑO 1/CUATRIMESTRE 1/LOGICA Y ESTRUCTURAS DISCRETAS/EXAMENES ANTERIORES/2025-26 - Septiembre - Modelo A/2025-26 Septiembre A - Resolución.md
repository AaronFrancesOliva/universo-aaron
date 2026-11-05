---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "2025-26 - Septiembre - Modelo A.pdf"
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Septiembre 2026, modelo A · Resolución

Examen: ![[2025-26 - Septiembre - Modelo A.pdf]]

Métodos generales en [[LED - Guía rápida de examen]]. Acertar suma 0,5, fallar resta 0,25 y en blanco no resta. El desarrollo (1 punto) solo se corrige con al menos 6 de 9 en el test.

> [!success]- Soluciones (ábrelas al terminar)
> | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
> |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | b | b | ⚠️ ninguna | c | c | c | a | b | a | c | c | b | a | b | b | a | b | b |
>
> *Resuelto por Jarvis: no hay plantilla oficial (el depósito tiene 0 soluciones de LED). Las preguntas 1-9, 11, 12, 16, 17 y 18 están comprobadas con un script; la pregunta 3 no tiene ninguna opción correcta tal como está impresa (ver abajo).*

## Datos
- $X_1 : q \lor (r \to s)$
- $X_2 : \lnot(p \to \lnot q) \lor (r \to s)$
- $X_3 : r \lor (\lnot s \land p)$
- $X_4 : \lnot p \land \lnot(q \to \lnot r) \land \lnot s$

> [!tip] La clave del bloque
> **$X_4$ solo la cumple una fila.** $\lnot(q \to \lnot r)$ obliga a $q = 1$ y $\lnot r = 0$, así que la fila es $(p,q,r,s) = (0,1,1,0)$. En ella, $X_2 = 0$: $\lnot(p \to \lnot q) = 0$ y $r \to s = 1 \to 0 = 0$.

## Lógica proposicional (1-5)
**1. $I = (0,0,1,1)$ → (b).** $X_4 = 0$ porque $q \to \lnot r$ es verdadero y lo niega. Se descartan (a) y (c). Comprobación: $X_1 = 1$ y $X_2 = 1$ porque $r \to s = 1$; $X_3 = 1$ porque $r = 1$.

**2. Insatisfacible → (b) $\{X_2, X_3, X_4\}$.** $X_4$ fija $(0,1,1,0)$, donde $X_2 = 0$. Las otras tienen modelo: (a) $(0,0,1,1)$ y (c) $(0,1,1,0)$.

**3. ⚠️ Equivalente a $X_1$: ninguna opción lo es tal como está impresa.**

$$X_1 \equiv q \lor \lnot r \lor s \equiv r \to (q \lor s)$$

| Opción | Qué es | Por qué no vale |
|---|---|---|
| (a) $s \to (q \lor s)$ | tautología | $X_1$ no lo es: falla con $q = 0$, $r = 1$, $s = 0$ |
| (b) $r \to (q \lor r)$ | tautología | lo mismo |
| (c) $q \to (r \lor s)$ | contingente | con $q = 1$, $r = s = 0$ vale 0 y $X_1$ vale 1 |

Lo más probable es que la (b) debiera decir $r \to (q \lor s)$, que sí es equivalente. Es una deducción mía, no una errata confirmada: si te lo encuentras en un examen, lo razonable es marcar la que más se parece o dejarla en blanco, y avisar en la revisión.

**4. Consecuencia → (c) $X_4 \models \lnot X_2$.** En el único modelo de $X_4$, $X_2 = 0$. Contraejemplos: (a) $(0,1,1,0)$ cumple $X_1$ y $X_4$; (b) $(0,0,1,1)$ cumple $X_2$ y $X_3$.

**5. Tautología → (c) $X_2 \land X_3 \to \lnot X_4$.** Sería falsa solo con las tres a 1, imposible por la pregunta 2. (a) falla con $(0,1,1,0)$ y (b) con $(0,0,1,1)$.

## Lógica de predicados (6-9)
- $Y_1 : \forall x(\forall y Rxy \to Px)$
- $Y_2 : \exists x(Qx \land \exists y \lnot Py)$
- $Y_3 : \forall x(\lnot Px \land \forall y Rxy)$
- $Y_4 : \exists x \forall y Rxy$

**6. $I_1$ ($P = \{2\}$, $Q = \{1\}$, $R = \{(2,1),(2,2)\}$) → (c) $\{Y_1, Y_2, Y_4\}$.** $Y_3$ es falsa porque $2 \in P$: se descartan (a) y (b).
- $Y_1$: para $x = 1$, el antecedente es falso; para $x = 2$, el antecedente es verdadero y $2 \in P$ ✅
- $Y_2$: $1 \in Q$ y $1 \notin P$ ✅
- $Y_4$: $x = 2$ está relacionado con todos ✅

**7. $I_2$ ($P = \{\}$, $Q = \{1\}$, $R$ = todos los pares) → (a) $\{Y_2, Y_3, Y_4\}$.** $Y_1$ es falsa: con $x = 1$, $\forall y R1y$ es verdadero y $1 \notin P$. Se descartan (b) y (c).
- $Y_2$: $1 \in Q$ y $P$ vacío ✅
- $Y_3$: nadie es $P$ y $R$ es completa ✅
- $Y_4$: $R$ es completa ✅

**8. Equivalente a $Y_1$ → (b).**

$$\forall y Rxy \to Px \equiv \lnot \forall y Rxy \lor Px \equiv \exists y \lnot Rxy \lor Px \equiv \exists y(\lnot Rxy \lor Px) \equiv \exists y(Rxy \to Px)$$

> [!warning] La trampa
> Un $\forall$ en el **antecedente** de un condicional se convierte en $\exists$ al sacarlo. Por eso (a), con $\forall y$, es incorrecta.

**9. Insatisfacible → (a) $\{Y_1, Y_3\}$.** $Y_3$ dice que para todo $x$ se cumple $\forall y Rxy$ y $\lnot Px$; entonces el antecedente de $Y_1$ es verdadero y exige $Px$: contradicción. Las otras tienen modelo: (b) $I_1$ y (c) $I_2$.

## Conjuntos, relaciones y funciones (10-14)
**10. → (c) 32.** $2^5$.

**11. → (c).** Se calcula cada trozo con los datos:
- $X \cap Y^C \cap Z$: $X \cap Z = \{b,e,f\}$; se quita lo de $Y$ → $\{b,e\}$
- $X^C \cap Y \cap Z$: $Y \cap Z = \{c,f\}$; se quita lo de $X$ → $\{c\}$
- Unión: $\{b,c,e\}$ ✅

**12. → (b).** Se encadenan pares hasta que no salga nada nuevo:

| Encadenamiento | Par nuevo |
|---|---|
| $(2,5)$ y $(5,3)$ | $(2,3)$ |
| $(3,5)$ y $(5,3)$ | $(3,3)$ |
| $(4,3)$ y $(3,5)$ | $(4,5)$ |
| $(5,3)$ y $(3,5)$ | $(5,5)$ |

**13. → (a).** Todos los de $Y$ tienen original, pero $2$ y $4$ van a $b$.

**14. → (b) puede ser inyectiva.** $|X| = 5$ y $|\mathcal{P}(X)| = 2^5 = 32$. Hay sitio de sobra para 5 imágenes distintas, pero 5 elementos no pueden cubrir 32: nunca será sobreyectiva, ni por tanto biyectiva.

## Combinatoria (15)
**15. → (b) $\binom{5}{3} \cdot \frac{10!}{7!}$.** Son dos elecciones independientes, que se multiplican:
- **Conjunto** de 3 vocales: no importa el orden (lo dice el enunciado) → $\binom{5}{3} = 10$.
- **Secuencia** de 3 dígitos sin repetir: sí importa el orden → $\frac{10!}{7!} = 720$.

Total: $7200$.

## Grafos (16-18)
**16. → (a) $E_2 = \varnothing$.** Hay camino euleriano si el grafo es conexo y tiene **0 o 2 vértices de grado impar**. Grados con $E_1$:

| Vértice | 1 | 2 | 3 | 4 | 5 | 6 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Grado | 4 | 1 | 2 | 2 | 3 | 4 |

Los impares son $2$ y $5$: ya lo cumple. Añadir una arista cambia la paridad de sus dos extremos: (b) y (c) dejan 4 impares.

**17. → (b) 1, 3, 4 y 6.** Según la tabla anterior.

**18. → (b) $\{3,5\}$.** $E_1$ se separa en $\{1,2,3\}$ y $\{4,5,6\}$. $\{3,5\}$ cruza de un lado a otro; $\{1,3\}$ y $\{2,3\}$ quedan dentro del mismo conjunto, y como cierran un ciclo impar no hay otra forma de repartir los vértices.

## Pregunta de desarrollo: tableau de $X_4 \models \lnot X_2$
Se ponen la premisa y **la conclusión negada**, y todas las ramas deben cerrarse.

```
 1. ¬p ∧ ¬(q → ¬r) ∧ ¬s              premisa (X4)
 2. ¬¬(¬(p → ¬q) ∨ (r → s))          conclusión negada (¬¬X2)
 3. ¬(p → ¬q) ∨ (r → s)              de 2: α (doble negación)
 4. ¬p                               de 1: α
 5. ¬(q → ¬r)                        de 1: α
 6. ¬s                               de 1: α
 7. q                                de 5: α
 8. ¬¬r                              de 5: α
 9. r                                de 8: α
                  /                \
10.     ¬(p → ¬q)                  r → s       de 3: β
11.     p                         /      \
12.     ¬¬q                     ¬r        s    de 10: β
        ⊗ (4 y 11)              ⊗ (9)     ⊗ (6)
```

- Rama izquierda: $p$ (11) y $\lnot p$ (4) → **cerrada**.
- Rama central: $\lnot r$ (12) y $r$ (9) → **cerrada**.
- Rama derecha: $s$ (12) y $\lnot s$ (6) → **cerrada**.

Todas cerradas: $\{X_4, X_2\}$ es insatisfacible, luego $X_4 \models \lnot X_2$. ∎

> [!tip] Orden que ahorra trabajo
> Primero todas las reglas α (no abren ramas) y al final las β. Así, cuando se abre una rama, ya tienes las letras sueltas con las que cerrarla.

#revisar
