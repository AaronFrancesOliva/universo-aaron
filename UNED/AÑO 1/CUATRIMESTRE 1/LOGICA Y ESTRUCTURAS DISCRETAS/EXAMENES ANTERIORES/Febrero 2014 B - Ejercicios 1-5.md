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

#revisar
