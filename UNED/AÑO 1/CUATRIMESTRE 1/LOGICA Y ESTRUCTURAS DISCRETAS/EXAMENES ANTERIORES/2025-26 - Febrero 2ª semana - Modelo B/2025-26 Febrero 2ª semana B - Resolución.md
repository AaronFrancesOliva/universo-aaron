---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "2025-26 - Febrero 2ª semana - Modelo B.pdf"
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Febrero 2026, 2.ª semana, modelo B · Resolución

Examen: ![[2025-26 - Febrero 2ª semana - Modelo B.pdf]]

Métodos generales en [[LED - Guía rápida de examen]]. Acertar suma 0,5, fallar resta 0,25 y en blanco no resta. El desarrollo (1 punto) solo se corrige con al menos 6 de 9 en el test.

> [!success]- Soluciones (ábrelas al terminar)
> | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
> |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | b | c | b | b | a | b | a | c | c | a | c | a | ⚠️ b | b | c | ⚠️ c | a | a |
>
> *Resuelto por Jarvis: no hay plantilla oficial (el depósito tiene 0 soluciones de LED). Las preguntas 1-9, 12 y 17 están comprobadas con un script; las preguntas 13 y 16 están mal planteadas (ver abajo).*

## Datos
- $X_1 : ((p \land q) \land (\lnot r \land \lnot s)) \land (p \lor s)$
- $X_2 : ((\lnot p \lor \lnot q) \lor (r \lor s)) \land (q \to r)$
- $X_3 : (p \to (q \lor r)) \lor (s \to p)$
- $X_4 : (s \leftrightarrow \lnot p) \land (r \lor q \lor s)$

> [!tip] La clave del bloque
> **$X_1$ solo la cumple una fila, $(p,q,r,s) = (1,1,0,0)$.** En ella, $X_2 = 0$ porque $q \to r$ da $1 \to 0$. Es la misma estructura que en la 1.ª semana: se localiza la fórmula restrictiva y se reutiliza esa fila.

## Lógica proposicional (1-5)
**1. $I = (1,1,0,0)$ → (b).** $X_2 = 0$, así que se descartan (a) y (c). Comprobación: $X_1 = 1$; $X_3 = 1$ (basta $p \to (q \lor r) = 1$); $X_4 = (0 \leftrightarrow 0) \land 1 = 1$.

**2. Insatisfacible → (c) $\{X_1, X_2, X_4\}$.** $X_1$ fija $(1,1,0,0)$, donde $X_2 = 0$. Las otras tienen modelo: (a) $(1,1,0,0)$ y (b) $(0,0,0,1)$.

**3. Equivalente a $X_4$ → (b).** Un bicondicional es verdadero cuando sus dos lados valen lo mismo. $s \leftrightarrow \lnot p$ es verdadero si ($s = 1$ y $p = 0$) o ($s = 0$ y $p = 1$):

$$s \leftrightarrow \lnot p \equiv (s \land \lnot p) \lor (p \land \lnot s)$$

La trampa es (c): $s \to \lnot p$ es solo una de las dos direcciones del bicondicional.

**4. Consecuencia → (b) $X_1 \models \lnot X_2$.** En el único modelo de $X_1$, $X_2 = 0$. (a) y (c) fallan con $(1,1,0,0)$, que hace verdaderas $X_1$, $X_3$ y $X_4$.

**5. Tautología → (a) $X_1 \land X_2 \to \lnot X_3$.** Su antecedente nunca se cumple: $X_1$ y $X_2$ son incompatibles. Un condicional con antecedente siempre falso es tautología. (b) falla con $(1,1,0,0)$ y (c) con $(0,0,0,1)$.

## Lógica de predicados (6-9)
- $Y_1 : \exists x \exists y(Mxy \land \lnot Myx)$
- $Y_2 : \exists x \exists y((Mxy \lor \lnot Mxy) \land (\lnot Px \lor \lnot Py))$
- $Y_3 : \forall x \forall y((Mxy \to Px) \land Py)$
- $Y_4 : \forall x(Qx \to (\exists y Mxy \land Px))$

> [!tip] Simplifica antes de calcular
> - **$Y_2$**: $Mxy \lor \lnot Mxy$ es siempre verdadero, así que $Y_2$ dice solo «**alguien no es $P$**».
> - **$Y_3$**: el $\land Py$ con $\forall y$ exige que **todos sean $P$**.
> - **$Y_4$**: en las dos interpretaciones **$Q$ está vacío**, así que el antecedente es falso y $Y_4$ es verdadera sin mirar nada más.

**6. $I_1$ ($P = \{1,2\}$, $Q = \{\}$, $M = \{(1,2)\}$) → (b) $\{Y_1, Y_3, Y_4\}$.** Todos son $P$, luego $Y_2$ es falsa: se descartan (a) y (c).
- $Y_1$: está $(1,2)$ y no $(2,1)$ ✅
- $Y_3$: el único par de $M$ tiene $x = 1 \in P$, y todos son $P$ ✅
- $Y_4$: $Q$ vacío ✅

**7. $I_2$ ($P = \{\}$, $Q = \{\}$, $M = \{(1,2),(2,2)\}$) → (a) $\{Y_1, Y_2, Y_4\}$.** $P$ está vacío, luego $Y_3$ es falsa: se descartan (b) y (c).
- $Y_1$: está $(1,2)$ y no $(2,1)$ ✅
- $Y_2$: $1$ no es $P$ ✅
- $Y_4$: $Q$ vacío ✅

**8. Equivalente a $Y_3$ → (c).** El $\forall$ se reparte sobre el $\land$:

$$\forall x \forall y((Mxy \to Px) \land Py) \equiv \forall x \forall y(Mxy \to Px) \land \forall y Py$$

(a) y (b) no exigen que todos sean $P$. Además, (b) es una tautología: $(Px \land Mxy) \to Px$ siempre se cumple.

**9. Insatisfacible → (c) $\{Y_2, Y_3\}$.** $Y_2$ dice que alguien no es $P$ e $Y_3$, que todos lo son. Las otras tienen modelo: (a) $I_2$ y (b) $I_1$.

## Conjuntos, relaciones y cardinalidad (10-13)
**10. → (a).** $X \subseteq A \cap B$ equivale a $X \subseteq A$ y $X \subseteq B$. Contraejemplos con $A = \{1\}$ y $B = \{2\}$:
- (b): $\{1,2\} \in \mathcal{P}(A \cup B)$, pero no está en $\mathcal{P}(A) \cup \mathcal{P}(B)$.
- (c): $\varnothing$ está en $\mathcal{P}(A \setminus B)$, pero no en $\mathcal{P}(A) \setminus \mathcal{P}(B)$, porque $\varnothing$ pertenece a ambos.

**11. → (c) $\varnothing$.** $A \cup B = \{1,2,3,4,5\} = U$ y el complementario de $U$ es vacío.

**12. → (a) $R$.** Se comprueban los encadenamientos: $(a,b)$ y $(b,c)$ dan $(a,c)$, que ya está; los que usan $(c,c)$ dan pares que ya están. $R$ ya es transitiva, así que su cierre es ella misma. Las opciones (b) y (c) añaden pares que no salen de ningún encadenamiento.

**13. ⚠️ Pregunta mal planteada: (b) y (c) son ciertas.** $n \mapsto 2^n$ es una biyección de $\mathbb{N}$ en $A$, luego $|A| = |\mathbb{N}|$, y además $|\mathbb{N}| < |\mathbb{R}|$. La respuesta que parece buscar la pregunta es **(b)**, la más precisa, pero (c) también es verdadera. (a) es la falsa típica: aunque $A \subset \mathbb{N}$, ambos son numerables infinitos.

## Combinatoria (14)
**14. → (b) combinaciones sin repetición.** No importa el orden, y «**diferentes**» prohíbe repetir. Compárala con [[2025-26 Febrero 1ª semana A - Resolución|la de la 1.ª semana]], donde sí se puede repetir.

## Grafos (15-18)
**15. → (c) débilmente conexo.** Los arcos solo salen de $\{2,3\}$ y solo entran en $\{1,4\}$. Entre $2$ y $3$ no hay camino en ningún sentido, luego no es unilateral ni fuerte. Sin direcciones sí es conexo.

**16. ⚠️ → (c), con reparos.** Las tres opciones son caminos de longitud 3 sin aristas repetidas, luego según el libro las tres son «sencillas»: (a) y (b) además son ciclos, que el libro define como caminos sencillos cerrados. La única que no se cierra es (c), y es la que parece buscar la pregunta.

**17. → (a) $\{2,4\}$.** Une los triángulos $\{1,2,3\}$ y $\{4,5,6\}$. $\{1,2\}$ está en un ciclo, y $\{2,2\}$ ni siquiera existe.

**18. → (a) 2.** La altura es el **máximo de los niveles**, y el nivel es la distancia a la raíz, así que la raíz tiene nivel 0:

| Nivel | Vértices |
|:-:|---|
| 0 | 1 |
| 1 | 2, 3 |
| 2 | 4, 5, 6 |

La trampa es (b) 3, que cuenta niveles en vez de la distancia.

## Pregunta de desarrollo
$E = \{\{A,B,4\}, \{B,C,2\}, \{A,C,5\}, \{C,D,3\}, \{B,D,6\}\}$.

**Árbol de expansión.** Con 4 vértices necesita 3 aristas, sin ciclos y conexo. Vale cualquiera; elijo las de menor peso, sin que formen ciclo:

1. $\{B,C\}$, peso 2
2. $\{C,D\}$, peso 3
3. $\{A,B\}$, peso 4
4. Las demás ($\{A,C\}$ y $\{B,D\}$) cerrarían un ciclo.

```
A —4— B —2— C —3— D
```

**Grados.** El grafo es **no dirigido**, y el libro define los grados de entrada y salida para grafos dirigidos. Lo correcto es decirlo en la respuesta y dar el grado total y, además, los de entrada y salida orientando el árbol desde una raíz (elijo $A$: $A \to B \to C \to D$):

| Nodo | Grado total | Entrada (raíz $A$) | Salida (raíz $A$) |
|:-:|:-:|:-:|:-:|
| A | 1 | 0 | 1 |
| B | 2 | 1 | 1 |
| C | 2 | 1 | 1 |
| D | 1 | 1 | 0 |

**Peso total:** $4 + 2 + 3 = 9$.

#revisar
