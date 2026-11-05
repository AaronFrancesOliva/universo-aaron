---
asignatura: Lógica y Estructuras Discretas
tipo: ejercicios
fuente: "Febrero 2014 - Modelo B.pdf"
fecha: 2026-10-21
tags: [led, examen, revisar]
---

# LED · Febrero 2014, modelo B · Ejercicios 6-9

Examen: ![[Febrero 2014 - Modelo B.pdf]] (página 1, columna derecha). Sigue a [[Febrero 2014 B - Ejercicios 1-5]].

Las preguntas 6-9 son de **lógica de predicados** (bloque 2 del libro web: *Semántica*, *Cuestiones semánticas* y *Tableaux* de predicados, en [[Libro web LED - texto completo.txt]]). Una sola respuesta correcta; acertar suma 0,5 y fallar resta 0,25. La **pregunta de desarrollo** del examen va con la 9.

> [!note] Datos
> - $Y_1 : \forall x \exists y\, (Cx \land Df(y) \land \lnot(x = y))$
> - $Y_2 : \forall x\, (\lnot Dx \lor Cx)$
> - $Y_3 : \forall x \forall y\, (\lnot Rxy \lor Cx)$
> - $Y_4 : \forall x \forall y\, (\lnot Cx \to \lnot Rxy)$
>
> | | Universo | $C$ | $D$ | $R$ | $f$ |
> |---|---|---|---|---|---|
> | $I_1$ | $\{1, 2\}$ | $\{1, 2\}$ | $\{1\}$ | $\{(2,1), (2,2)\}$ | $f(1) = 1,\ f(2) = 1$ |
> | $I_2$ | $\{1, 2\}$ | $\{1, 2\}$ | $\{1\}$ | $\{(2,1)\}$ | $f(1) = 1,\ f(2) = 1$ |

**6.** La interpretación $I_1$ satisface:
- (a) $Y_1$ e $Y_2$
- (b) $Y_1$ pero no $Y_2$
- (c) $Y_2$ pero no $Y_3$

**7.** La interpretación $I_2$ satisface:
- (a) $Y_2$ pero no $Y_3$
- (b) $Y_3$ e $Y_4$
- (c) $Y_3$ pero no $Y_4$

**8.** Es tautología:
- (a) $Y_3 \leftrightarrow \lnot Y_4$
- (b) $Y_3 \leftrightarrow Y_4$
- (c) $\lnot Y_3 \leftrightarrow Y_4$

**9.** Es consecuencia:
- (a) $Y_3 \models Y_4$
- (b) $Y_3 \models \lnot Y_4$
- (c) $Y_4 \models \lnot Y_3$

**Desarrollo.** Construya un tableau que confirme la consecuencia correcta que escogió en la pregunta 9.

## Mis respuestas
6. 
7. 
8. 
9. 

> [!success]- Soluciones (ábrelas solo al terminar)
> 6. **(a)**. En $I_1$, $C$ es todo el universo, así que $Cx$ siempre es verdadero; $f$ siempre da 1 y $1 \in D$, así que $Df(y)$ también. $Y_1$: para $x = 1$ vale $y = 2$, y para $x = 2$ vale $y = 1$. $Y_2$: $Cx$ siempre es verdadero.
> 7. **(b)**. En $I_2$, $C$ sigue siendo todo el universo: $Y_3$ se cumple por $Cx$ e $Y_4$ porque su antecedente $\lnot Cx$ siempre es falso.
> 8. **(b)**. $\lnot Cx \to \lnot Rxy \equiv Cx \lor \lnot Rxy$: $Y_3$ e $Y_4$ son **la misma fórmula** escrita de dos maneras. (a) y (c) no se cumplen nunca.
> 9. **(a)**. Como $Y_3 \equiv Y_4$, $Y_3 \models Y_4$. $I_2$ es contraejemplo de (b) y (c): cumple $Y_3$ e $Y_4$ a la vez.
>
> *Las resolvió Jarvis; no son la plantilla oficial. Si alguna no te cuadra, la vemos juntos.*

## Explicación paso a paso

*Preparada por Jarvis el 2026-10-21. Conceptos del libro web de LED, bloque de lógica de predicados (secciones* Semántica, Cuestiones semánticas, Equivalencias *y* Tableaux*).*

### Qué cambia respecto a los ejercicios 1-5
En proposicional, una interpretación era una fila de la tabla ($p = 1$, $q = 0$…). En predicados, una interpretación es **un pequeño mundo**:

| Pieza | Qué dice | En $I_1$ |
|---|---|---|
| Universo $U$ | qué objetos existen | los objetos 1 y 2 |
| Predicado de 1 lugar ($Cx$, $Dx$) | qué objetos tienen esa propiedad | $C$: el 1 y el 2; $D$: solo el 1 |
| Predicado de 2 lugares ($Rxy$) | qué parejas (ordenadas) están relacionadas | $R$: de 2 a 1 y de 2 a 2 |
| Función $f$ | a cada objeto le asigna otro | todo va al 1 |

Y los cuantificadores, con un universo de 2 objetos, se **despliegan**:

| Fórmula | Se lee | En $U = \{1, 2\}$ equivale a |
|---|---|---|
| $\forall x\, F(x)$ | para todo $x$ | $F(1) \land F(2)$ → hay que comprobar **los dos** |
| $\exists y\, F(y)$ | existe algún $y$ | $F(1) \lor F(2)$ → basta con **uno** |

> [!tip] El truco de todo el ejercicio
> En $I_1$ e $I_2$, **$C = \{1, 2\}$ es todo el universo**: $Cx$ es verdadero sea cual sea $x$. Cualquier fórmula del tipo «… $\lor\ Cx$» se cumple sola. Mira siempre primero si un predicado es **todo** el universo o está **vacío**: te ahorra la mitad del trabajo.

### Ejercicio 6: ¿qué satisface $I_1$?
**$Y_1 : \forall x \exists y\, (Cx \land Df(y) \land x \neq y)$**: «para cada $x$ hay un $y$ **distinto** de él tal que $x$ es $C$ y $f(y)$ es $D$».

Se va de fuera hacia dentro: primero el $\forall x$ (probar $x = 1$ y $x = 2$), y para cada uno buscar un $y$ que sirva.

| $x$ | $y$ elegido | $Cx$ | $Df(y)$ | $x \neq y$ | ¿Vale? |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 2 | $1 \in C$ ✅ | $f(2) = 1 \in D$ ✅ | $1 \neq 2$ ✅ | ✅ |
| 2 | 1 | $2 \in C$ ✅ | $f(1) = 1 \in D$ ✅ | $2 \neq 1$ ✅ | ✅ |

Los dos $x$ tienen su $y$: **$I_1$ satisface $Y_1$**.

> [!warning] Cuidado con $Df(y)$
> No es «$y$ está en $D$», sino «**$f(y)$** está en $D$». Primero calculas $f(y)$ y luego miras $D$. Aquí $f$ siempre da 1 y $1 \in D$, así que se cumple siempre. Si hubieras mirado $y$ en lugar de $f(y)$, con $y = 2$ te habría salido falso ($2 \notin D$).

**$Y_2 : \forall x\, (\lnot Dx \lor Cx)$** (equivale a $\forall x\, (Dx \to Cx)$: «todo lo que es $D$ es $C$»). Como $Cx$ siempre es verdadero, la disyunción vale 1 para $x = 1$ y para $x = 2$: **$I_1$ satisface $Y_2$**.

Con eso ya está (a). Para descartar (c) hay que ver $Y_3$, que también se cumple ($\ldots \lor Cx$ con $Cx$ siempre verdadero), así que «$Y_2$ pero no $Y_3$» es falso.

**Respuesta: (a) $Y_1$ e $Y_2$.**

### Ejercicio 7: ¿qué satisface $I_2$?
$I_2$ es igual que $I_1$ salvo en $R$, y $C$ sigue siendo todo el universo.

- **$Y_2$**: igual que antes, se cumple.
- **$Y_3 : \forall x \forall y\, (\lnot Rxy \lor Cx)$**: hay que mirar las 4 parejas $(x, y)$, pero en todas $Cx = 1$, así que todas valen 1. **Se cumple**. $R$ ni siquiera hace falta mirarla.
- **$Y_4 : \forall x \forall y\, (\lnot Cx \to \lnot Rxy)$**: un condicional solo es falso en el caso $1 \to 0$. Aquí el antecedente $\lnot Cx$ es **siempre 0**, así que el condicional es siempre verdadero (la regla «si $A = 0$, $A \to B$ ya es verdadera» de los ejercicios 1-5). **Se cumple**.

| Opción | Dice | ¿Es cierto en $I_2$? |
|---|---|---|
| (a) | $Y_2$ pero no $Y_3$ | ❌ se cumple $Y_3$ |
| (b) | $Y_3$ e $Y_4$ | ✅ |
| (c) | $Y_3$ pero no $Y_4$ | ❌ se cumple $Y_4$ |

**Respuesta: (b) $Y_3$ e $Y_4$.**

### Ejercicio 8: ¿cuál es tautología?
En predicados, «tautología» quiere decir **válida**: verdadera en **todas** las interpretaciones posibles (que son infinitas, así que no se pueden probar una a una como en una tabla de verdad). Hay que razonarlo con **equivalencias**.

Compara lo que hay dentro de los cuantificadores de $Y_3$ y de $Y_4$:

$$\lnot Cx \to \lnot Rxy \;\equiv\; \lnot\lnot Cx \lor \lnot Rxy \;\equiv\; Cx \lor \lnot Rxy \;\equiv\; \lnot Rxy \lor Cx$$

(1.º $A \to B \equiv \lnot A \lor B$; 2.º doble negación; 3.º conmutativa de $\lor$.)

Lo de dentro es idéntico y los cuantificadores son los mismos: **$Y_3 \equiv Y_4$**. Es la **contrarrecíproca** otra vez, como en el ejercicio 5(a) de la primera parte.

> [!example] Con palabras
> Que $Rxy$ sea «$x$ llama a $y$» y $Cx$, «$x$ tiene contrato de teléfono».
> - $Y_3$: «para cualquier $x$ e $y$, o $x$ no llama a $y$, o $x$ tiene contrato» = **«quien llama a alguien tiene contrato»**.
> - $Y_4$: «si $x$ no tiene contrato, no llama a nadie».
>
> Dicen lo mismo con distinto orden.

Si dos fórmulas son equivalentes, en cualquier interpretación valen lo mismo:

| $Y_3$ | $Y_4$ | (a) $Y_3 \leftrightarrow \lnot Y_4$ | (b) $Y_3 \leftrightarrow Y_4$ | (c) $\lnot Y_3 \leftrightarrow Y_4$ |
|:-:|:-:|:-:|:-:|:-:|
| 1 | 1 | 0 | **1** | 0 |
| 0 | 0 | 0 | **1** | 0 |

(Las filas $1, 0$ y $0, 1$ no pueden darse, precisamente porque son equivalentes.) (b) vale siempre 1; (a) y (c) valen siempre 0: no solo no son tautologías, sino que son **insatisfacibles**.

**Respuesta: (b) $Y_3 \leftrightarrow Y_4$.**

### Ejercicio 9: ¿cuál es consecuencia?
Recuerda de la primera parte: $A \models B$ significa que **toda interpretación que hace verdadera $A$ hace verdadera $B$**, y para descartarlo basta un **contraejemplo** ($A = 1$, $B = 0$).

- **(a) $Y_3 \models Y_4$**: si son equivalentes, cuando una es verdadera la otra también. ✅
- **(b) $Y_3 \models \lnot Y_4$**: necesitamos una interpretación con $Y_3 = 1$ y $\lnot Y_4 = 0$, es decir, $Y_4 = 1$. **$I_2$ del ejercicio 7** lo cumple. ❌
- **(c) $Y_4 \models \lnot Y_3$**: el mismo contraejemplo, $I_2$ ($Y_4 = 1$, $Y_3 = 1$). ❌

> [!tip] Igual que en la primera parte
> El examen está montado para reutilizar: la interpretación del ejercicio 7 es el contraejemplo del 9, y la equivalencia del 8 resuelve el 9(a). Es la misma regla que en [[Febrero 2014 B - Ejercicios 1-5#Todo alrededor de $X_4$, con la tabla delante|los ejercicios 1-5]]: ¿existe una interpretación con $A = 1$ y $B = 1$? Sí ($I_2$) → $A \not\models \lnot B$.

**Respuesta: (a) $Y_3 \models Y_4$.**

### Pregunta de desarrollo: el tableau de $Y_3 \models Y_4$
Para demostrar $Y_3 \models Y_4$ con un tableau se prueba que **$\{Y_3, \lnot Y_4\}$ es insatisfacible**: se pone la premisa y **la conclusión negada**, y todas las ramas tienen que cerrarse.

Reglas que hacen falta (libro web, *Tableaux* de predicados):

| Tipo | Fórmula | Qué se hace |
|---|---|---|
| Existencial | $\exists x F$ o $\lnot\forall x F$ | se instancia con una **constante nueva**, una sola vez |
| Universal | $\forall x F$ o $\lnot\exists x F$ | se instancia con **cualquier constante**, las veces que haga falta |
| α | $\lnot(A \to B)$ | da $A$ y $\lnot B$ en la misma rama |
| α | $\lnot\lnot A$ | da $A$ |
| β | $A \lor B$ | la rama se abre en dos: $A$ \| $B$ |

> [!important] Estrategia
> **Primero los existenciales** (fijan constantes nuevas) y **después los universales**, usando esas mismas constantes para que las ramas se cierren.

```
 1. ∀x∀y(¬Rxy ∨ Cx)            premisa (Y3)
 2. ¬∀x∀y(¬Cx → ¬Rxy)          conclusión negada (¬Y4)
 3. ¬∀y(¬Ca → ¬Ray)            de 2: existencial, constante nueva a
 4. ¬(¬Ca → ¬Rab)              de 3: existencial, constante nueva b
 5. ¬Ca                        de 4: α
 6. ¬¬Rab                      de 4: α
 7. Rab                        de 6: α
 8. ∀y(¬Ray ∨ Ca)              de 1: universal, con a
 9. ¬Rab ∨ Ca                  de 8: universal, con b
              /        \
10.       ¬Rab          Ca     de 9: β
           ⊗ (7)        ⊗ (5)
```

- Rama izquierda: $\lnot Rab$ y $Rab$ (línea 7) → **cerrada**.
- Rama derecha: $Ca$ y $\lnot Ca$ (línea 5) → **cerrada**.

Todas las ramas cerradas: $\{Y_3, \lnot Y_4\}$ es insatisfacible, así que **$Y_3 \models Y_4$**. ∎

> [!warning] Errores típicos en esta pregunta
> - Olvidar **negar la conclusión** (poner $Y_4$ en vez de $\lnot Y_4$).
> - Empezar por el universal (línea 1) con constantes inventadas: luego el existencial tendría que usar **otras nuevas** y las ramas no cerrarían.
> - Instanciar $\lnot\forall$ con una constante que ya estaba en la rama: no está permitido.
> - En la línea 2, el $\lnot\forall x$ se trata como **existencial** (equivale a $\exists x \lnot$), y lo mismo el $\lnot\forall y$ de la línea 3.

### Lo que tienes que llevarte
- Con un universo pequeño, **despliega**: $\forall$ = «todos» (comprobar cada objeto) y $\exists$ = «alguno» (basta uno).
- Antes de calcular, mira si algún predicado es **todo el universo o está vacío**: decide medio ejercicio.
- $Df(y)$: primero calculas $f(y)$, luego miras $D$.
- $\lnot A \to \lnot B \equiv B \to A$ (contrarrecíproca) también vale **dentro** de los cuantificadores.
- Tableau de consecuencia: premisas + **conclusión negada**, primero existenciales con constantes nuevas y después universales con esas constantes.

#revisar
