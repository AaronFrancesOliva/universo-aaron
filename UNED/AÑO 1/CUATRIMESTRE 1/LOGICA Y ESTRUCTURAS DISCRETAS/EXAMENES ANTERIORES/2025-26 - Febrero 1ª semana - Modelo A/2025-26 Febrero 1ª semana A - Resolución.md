---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "2025-26 - Febrero 1ª semana - Modelo A.pdf"
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Febrero 2026, 1.ª semana, modelo A · Resolución

Examen: ![[2025-26 - Febrero 1ª semana - Modelo A.pdf]]

Métodos generales en [[LED - Guía rápida de examen]]. Acertar suma 0,5, fallar resta 0,25 y en blanco no resta. El desarrollo (1 punto) solo se corrige con al menos 6 de 9 en el test.

> [!success]- Soluciones (ábrelas al terminar)
> | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
> |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> | c | a | b | a | a | a | b | c | a | b | b | c | b | c | ⚠️ a/b | ⚠️ c | b | c |
>
> *Resuelto por Jarvis: no hay plantilla oficial (el depósito tiene 0 soluciones de LED). Las preguntas 1-9, 11 y el desarrollo están comprobados con un script; las preguntas 15 y 16 están mal planteadas (ver abajo).*

## Datos
- $X_1 : (\lnot p \lor q \lor r) \land (s \lor p)$
- $X_2 : (s \to q) \land (r \to \lnot p)$
- $X_3 : (p \land \lnot q) \land (\lnot r \land \lnot s)$
- $X_4 : (q \leftrightarrow r) \lor (s \to p)$

> [!tip] La clave del bloque
> **$X_3$ es una $\land$ de letras: solo la cumple una fila, $(p,q,r,s) = (1,0,0,0)$.** Es lo primero que hay que ver. En esa fila, $X_1 = 0$ porque $\lnot p \lor q \lor r = 0$. Con eso se resuelven las preguntas 2, 4 y 5.

## Lógica proposicional (1-5)
**1. $I = (0,1,1,1)$ → (c).** $X_3 = 0$ porque $p = 0$, así que se descartan (a) y (b), que incluyen $X_3$. Se comprueba (c): $X_1 = 1 \land 1 = 1$; $X_2 = (1 \to 1) \land (1 \to 1) = 1$; $X_4 = 1$ porque $q \leftrightarrow r$.

**2. Insatisfacible → (a) $\{X_1, X_3, X_4\}$.** $X_3$ obliga a $(1,0,0,0)$, donde $X_1 = 0$. Las otras tienen modelo: (b) se cumple con $(1,0,0,0)$ y (c) con $(0,1,1,1)$.

**3. Equivalente a $X_2$ → (b).** Se transforma cada parte:
- $s \to q \equiv q \lor \lnot s$
- $r \to \lnot p \equiv p \to \lnot r$ (contrarrecíproca)

**4. Consecuencia → (a) $X_3 \models \lnot X_1$.** Es la misma idea de la pregunta 2: en el único modelo de $X_3$, $X_1$ es falsa. Contraejemplos: (b) $(0,0,0,0)$ cumple $X_4$ y $X_2$; (c) $(0,0,0,1)$ cumple $X_1$ y $X_4$.

**5. Tautología → (a) $X_1 \land X_2 \to \lnot X_3$.** Para que fuese falsa harían falta $X_1 = X_2 = X_3 = 1$, imposible por la pregunta 2. (b) falla con $(0,1,1,1)$ y (c) con $(1,0,0,0)$.

## Lógica de predicados (6-9)
- $Y_1 : \forall x(Px \land \exists y(Mxy \lor Myx))$
- $Y_2 : \exists x(\lnot Px \land \forall y \lnot Mxy)$
- $Y_3 : \exists x(Px \lor \forall y(Mxy \lor Myx))$
- $Y_4 : \exists x(Px \land (Mxx \lor \exists y Myx))$

**6. $I_1$ ($P = \{1,2\}$, $M = \{(1,1),(2,1)\}$) → (a) $\{Y_1, Y_3, Y_4\}$.** Como todos son $P$, $Y_2$ es falsa, y eso ya descarta (b) y (c).
- $Y_1$: $x = 1$ tiene $(1,1)$ y $x = 2$ tiene $(2,1)$ ✅
- $Y_3$: basta $x = 1 \in P$ ✅
- $Y_4$: $x = 1 \in P$ y $(1,1) \in M$ ✅

**7. $I_2$ ($P = \{2\}$, $M = \{(2,2)\}$) → (b) $\{Y_2, Y_3, Y_4\}$.** $Y_1$ es falsa porque $1 \notin P$, y eso descarta (a) y (c).
- $Y_2$: $x = 1$ no es $P$ y no hay ningún par $(1, y)$ ✅
- $Y_3$: $x = 2 \in P$ ✅
- $Y_4$: $x = 2 \in P$ y $(2,2) \in M$ ✅

**8. Equivalente a $Y_2$ → (c).** $\forall y \lnot Mxy \equiv \lnot \exists y Mxy$, luego:

$$\lnot Px \land \lnot \exists y Mxy \equiv \lnot(Px \lor \exists y Mxy)$$

La trampa es (b), que tiene $\forall y Mxy$ en lugar de $\exists y Mxy$.

**9. Insatisfacible → (a) $\{Y_1, Y_2\}$.** $Y_1$ dice que todos son $P$ e $Y_2$, que alguno no lo es. Las otras dos se cumplen con $I_1$.

## Conjuntos, relaciones y funciones (10-13)
**10. → (b).** Es la definición de igualdad: doble inclusión.

**11. → (b) $\{2,3,4,5\}$.** $A \cap B = \{3,4\}$ y $A \setminus C = \{2,3,5\}$.

**12. → (c) antisimétrica.**
- Reflexiva: no, falta $(4,4)$.
- Simétrica: no, está $(1,3)$ y falta $(3,1)$.
- Antisimétrica: sí, los únicos pares con elementos distintos son $(1,3)$ y $(4,2)$, y ninguno tiene su inverso.

**13. → (b).** $a$, $b$ y $c$ tienen original (sobreyectiva), pero $2$ y $3$ van a $b$ (no inyectiva). Truco: con $|A| > |B|$, nunca puede ser inyectiva.

## Combinatoria (14)
**14. → (c) combinaciones con repetición.** Hazte dos preguntas:
1. ¿Importa el orden? No: comprar A y B es lo mismo que comprar B y A → combinaciones.
2. ¿Se puede repetir? Sí: dice «dos hogazas», no «dos diferentes», y dos iguales de 4 o 5 € caben en 10 € → con repetición.

> [!warning] Compárala con la de la 2.ª semana
> En [[2025-26 Febrero 2ª semana B - Resolución|la 2.ª semana]] dice «dos hogazas **diferentes**» y la respuesta cambia a sin repetición. Una sola palabra decide la pregunta.

## Grafos (15-18)
**15. ⚠️ Pregunta mal planteada: (a) y (b) son bipartitos.** El libro define bipartito como separable en dos conjuntos sin aristas dentro de cada uno.
- (a) $\{1,3\}$ y $\{2,4\}$ ✅
- (b) $\{2,3\}$ y $\{1,4\}$ ✅
- (c) No: tiene el triángulo $2, 4, 3$.

Según esa definición hay dos respuestas válidas. Si en el examen pasa algo así, marcar una de las dos compensa: con 50 % de acierto, la esperanza es $+0{,}125$ frente a 0 en blanco.

**16. ⚠️ → (c), por eliminación.** Las aristas forman un único ciclo, $1\text{-}2\text{-}3\text{-}4\text{-}5\text{-}1$. Por eso (a) es falsa, y tanto (b) como (c) parecen ciertas. Como hay una sola respuesta correcta y (b) implica (c), la única opción coherente es (c): (c) tiene que ser cierta en cualquier caso. Es deducción mía sobre el enunciado, no un dato oficial.

**17. → (b) todas.** Es un camino $1\text{-}2\text{-}3\text{-}4\text{-}5$, sin ciclos: quitar cualquier arista lo parte. Truco: **una arista es puente si y solo si no está en ningún ciclo**.

**18. → (c).** Un árbol es conexo con $n - 1$ aristas.

## Pregunta de desarrollo
$V = \{P1, P2, P3, E1, E2, E3\}$ y $E = \{\{P1,E1\}, \{P1,E2\}, \{P2,E2\}, \{P3,E2\}, \{P3,E3\}\}$.

```
E1 — P1 — E2 — P3 — E3
           |
           P2
```

**Bipartito: sí.** Los conjuntos $\{P1, P2, P3\}$ y $\{E1, E2, E3\}$ son disjuntos y todas las aristas unen un $P$ con un $E$.

**Puentes y robustez.** Hay 6 vértices y 5 aristas, el grafo es conexo y no tiene ciclos: es un **árbol**. Por tanto, **las 5 aristas son puentes**: la caída de cualquier enlace aísla parte de la red. **No es robusta**, porque no admite ni un fallo de enlace sin perder conectividad.

**Componentes y punto crítico.** Tiene **1 componente conexa**: en la situación actual, todos los nodos pueden comunicarse entre sí.

| Se elimina | Componentes que quedan |
|:-:|:-:|
| $E2$ | **3**: $\{P1,E1\}$, $\{P2\}$, $\{P3,E3\}$ |
| $P1$ | 2 |
| $P3$ | 2 |
| $P2$, $E1$ o $E3$ | 1 |

El punto más crítico es **$E2$**, el vértice de mayor grado (3).

#revisar
