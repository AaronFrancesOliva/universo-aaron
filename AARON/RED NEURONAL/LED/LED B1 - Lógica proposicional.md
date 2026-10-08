---
tags: [red-neuronal, led]
actualizado: 2026-10-07
---

# LED B1 — Lógica proposicional

Fuente: libro web de LED (Fernández Vindel y Pérez Martín), `www.ia.uned.es/contenidos/LED/25/`, bloque `prop/`. Copia en texto: `UNED/AÑO 1/CUATRIMESTRE 1/LOGICA Y ESTRUCTURAS DISCRETAS/Libro web LED - texto completo.txt` (líneas 33-4226). Es el 25 % de la asignatura y toca en **octubre**. Test de la PEC: PEC-1 a PEC-4. Índice: [[LED - Índice]].

## 1. Lenguaje (sintaxis)
- **Alfabeto**: p₁, p₂, … (o p, q, r…), constantes ⊥ y ⊤, conectivas ¬ ∧ ∨ → ↔ y paréntesis. `∗` designa cualquier conectiva binaria.
- **Reglas de generación**: (1) p_k, ⊥ y ⊤ son fórmulas (**atómicas**); (2) si X es fórmula, (¬X) también; (3) si X e Y lo son, (X∗Y) también; (4) nada más es fórmula. BNF: `F ::= p_k | ⊤ | ⊥ | (¬F) | (F∧F) | (F∨F) | (F→F) | (F↔F)`.
- **Secuencia de generación**: lista en la que cada fórmula es atómica o sale en un paso de fórmulas anteriores. Para *probar* que algo es fórmula basta dar una secuencia; para *descartarlo* hace falta una propiedad inductiva (p. ej. "nunca hay dos conectivas binarias seguidas").
- **Descomposición única** (Prop. 1): cada fórmula es atómica, (¬Y) o (Y∗Z) de una única forma. **Conectiva principal**: llevando la cuenta de paréntesis abiertos menos cerrados, es la conectiva a la que se llega con un solo paréntesis abierto (el inicial). **Subfórmulas inmediatas**: las componentes del último paso.
- **Árbol sintáctico**: raíz = fórmula, hojas = atómicas. **Rama = camino de la raíz a una hoja**, así que nº de ramas = nº de hojas = **nº de apariciones de letras/constantes** (contando repeticiones). Fue una duda en el foro con la PEC-1 (pregunta 2): no se cuentan las descomposiciones.
- Funciones recursivas: `Nod(X)` (nº de nodos: 1 + hijos), `Subf(X)` (conjunto de subfórmulas, X incluida, sin repetir), `Rango(X)` (atómica 0; ¬Y: Rango(Y)+1; Y∗Z: máx+1 = altura del árbol).
- **Precedencia para quitar paréntesis**: ¬ (1) < ∧ (2) < ∨ (3) < → (4) < ↔ (5). La de menor número queda más abajo en el árbol. **Misma conectiva repetida: se agrupa por la izquierda**: p∧q∧r = ((p∧q)∧r). Hay paréntesis que no se pueden quitar: ¬(p∨q), r∧(¬p→q)…
- **Notación prefija** (sin paréntesis): `∧→p₂¬p₃¬∨p₁p₂`. **Listas anidadas**: `[∧,[→,p₂,[¬,p₃]],[¬,[∨,p₁,p₂]]]`. En electrónica: + para ∨, · para ∧ y barra para ¬.

## 2. Semántica
- **Asignación**: función de las letras en {0,1}; ⊥ = 0 y ⊤ = 1 siempre. Con N letras hay **2ᴺ asignaciones** (filas). "Interpretación" y "asignación" se usan como sinónimos (I).
- Conectivas: ∧ solo es 1 en (1,1); ∨ solo es 0 en (0,0); **→ solo es 0 en (1,0)**; ↔ es 0 en (1,0) y (0,1). Aritmética: I(Y∧Z) = mín, I(Y∨Z) = máx, I(¬Y) = 1 − I(Y), I(Y→Z) = máx(1−I(Y), I(Z)).
- El valor se calcula **propagando de las hojas a la raíz**. En la tabla, el valor de cada subfórmula se anota bajo su conectiva principal.
- **Atajos**: en una disyunción basta un componente a 1; un condicional con antecedente 0 o consecuente 1 vale 1; un bicondicional con componentes iguales vale 1; en una conjunción basta un componente a 0.
- **Tabla conjunta** de varias fórmulas sobre todas las letras que aparecen. Si se añade una letra que no aparece, cada fila se desdobla con el mismo resultado.
- Condicionales al modelar: (Icono → Router) hace del icono un "chivato fiable"; (Router → Icono) no. El ↔ hace de espejo.

## 3. Cuestiones semánticas
| Concepto | Definición | Notación |
|---|---|---|
| Satisfacción | I(X) = 1 | I ⊨ X |
| Modelos | interpretaciones que satisfacen Γ | 𝓜(Γ) |
| Satisfacible | existe al menos una I que satisface (todas las fórmulas de) Γ | — |
| Insatisfacible = contradicción | falsa en toda I | — |
| Tautología (válida) | verdadera en toda I | — |
| Contingente | ni tautología ni contradicción | — |
| Equivalencia | misma tabla de verdad | X ≡ Y (**no es una conectiva**: es una afirmación sobre fórmulas) |
| Consecuencia | toda I que satisface Γ satisface C | Γ ⊨ C (el mismo símbolo ⊨ con dos usos) |
| Equisatisfacibles | ambas satisfacibles o ambas insatisfacibles | — |

**Resultados clave** (cada uno se usa en los dos sentidos, también en negativo):
- Γ satisfacible ⇔ la conjunción de sus fórmulas es satisfacible.
- Subconjunto de un satisfacible → satisfacible. Superconjunto de un insatisfacible → insatisfacible. Los otros dos casos pueden salir de cualquier forma. Γ ⊆ Γ⁺ ⇒ 𝓜(Γ) ⊇ 𝓜(Γ⁺).
- Negar una tautología da una contradicción y viceversa; negar una contingente da una contingente.
- Disyunción con un ⊤ (o una tautología) es tautología; conjunción con un ⊥ es contradicción; ⊥ → Z y Y → ⊤ son tautologías.
- Añadir una contradicción hace insatisfacible cualquier conjunto. Añadir o quitar una tautología no cambia la satisfacibilidad.
- **Sustitución uniforme** (todas las apariciones de cada letra a la vez y en un solo paso): convierte tautologías en tautologías y contradicciones en contradicciones. Permite pasar de equivalencias concretas a **esquemas**.
- Con N letras hay **2^(2ᴺ) clases de equivalencia** (16 con 2 letras y 256 con 3). Equivalentes ⇒ equisatisfacibles, pero no al revés.
- **X ≡ Y ⇔ (X↔Y) es tautología.** **X ≡ Y ⇔ X ⊨ Y y Y ⊨ X.**
- La consecuencia es reflexiva y transitiva (un preorden) y **monótona**: si Γ ⊆ Γ⁺, toda consecuencia de Γ lo es de Γ⁺.
- **Γ ⊨ C ⇔ (X₁∧…∧Xₙ) → C es tautología.**
- **Teorema 1: Γ ⊨ C ⇔ Γ ∪ {¬C} es insatisfacible.** Y si Γ es insatisfacible, para cualquier Xₖ ∈ Γ: Γ∖{Xₖ} ⊨ ¬Xₖ.
- **De un conjunto insatisfacible es consecuencia cualquier fórmula.**
- Para comprobar: "sí satisfacible" o "no tautología" se responden en cuanto aparece una fila; "insatisfacible", "tautología" o "consecuencia" necesitan revisar todas las filas (o un tableau cerrado).
- (p→q) ≡ (¬p∨q) ≡ (¬q→¬p) (contrarrecíproco), pero **(p→q) ≢ (¬p→¬q)**. (p↔q) ≡ (p→q)∧(q→p) ≡ (p∧q)∨(¬p∧¬q).

## 4. Cálculos
### Reemplazo equivalente
Si Y₁ ≡ Y₂, cambiar **una** aparición de Y₁ en X por Y₂ da una fórmula equivalente (no hace falta cambiarlas todas). Equivalencias básicas: doble negación, idempotencia, identidad (Y∨⊥ ≡ Y, Y∧⊤ ≡ Y), absorción (Y∨(Z∧Y) ≡ Y), complementación, dominación, conmutativa, asociativa, distributiva, De Morgan, condicional y bicondicional.

### Formas normales
- Literal: p o ¬p. **FND**: disyunción de cláusulas conjuntivas. **FNC**: conjunción de cláusulas disyuntivas.
- Desde la tabla: la **FND** toma las filas con 1 (conjunción con la letra negada si vale 0); la **FNC** toma las filas con 0 (disyunción con la letra negada si vale 1). Salen expresiones largas que se pueden simplificar.
- Algoritmo: (1) quitar ↔ con (X→Y)∧(Y→X); (2) quitar → con ¬X∨Y; (3) meter las negaciones con De Morgan; (4) quitar dobles negaciones; (5) distribuir hacia FNC o FND. Una tautología se simplifica a ⊤ y una contradicción a ⊥.
- Γ es satisfacible ⇔ lo es la unión de las cláusulas de las FNC de sus fórmulas (Prop. 13). Los SAT-solvers usan FNC.
- Cláusula como condicional: los literales negados pasan sin negar al antecedente (∧) y los positivos al consecuente (∨): (p∨¬q∨¬r∨s) ≡ (q∧r)→(p∨s). **Cláusula de Horn**: como mucho un literal positivo, lo que permite propagar hechos hacia delante.

### Tableaux (tablas analíticas)
- Se empieza con las fórmulas de Γ. Expansión **α (una debajo de otra, en la misma rama)**: X∧Y; ¬(X∨Y) → ¬X, ¬Y; ¬(X→Y) → X, ¬Y; ¬¬X → X. Expansión **β (bifurcación)**: X∨Y; ¬(X∧Y) → ¬X | ¬Y; X→Y → ¬X | Y.
- **Bicondicional**: X↔Y se bifurca en (X, Y) | (¬X, ¬Y), cuatro nodos. ¬(X↔Y) se bifurca en (X, ¬Y) | (¬X, Y).
- **Rama cerrada**: contiene p y ¬p. **Tableau cerrado** (todas las ramas cerradas) ⇒ Γ insatisfacible. **Rama completamente expandida y abierta** ⇒ Γ satisfacible, y la rama da el modelo (los literales que contiene).
- Estrategia: expandir primero los nodos α para dejar las bifurcaciones al final y que el árbol salga más pequeño.
- Usos: **validez de X → tableau de ¬X** (cerrado = tautología). **Equivalencia → tableau de ¬(X↔Y)**. **Consecuencia Γ ⊨ C → tableau de Γ ∪ {¬C}** (cerrado = sí es consecuencia).

### Deducción natural (formato de cajas)
- ⊢ es la derivación sintáctica. El sistema es **correcto** (⊢ ⇒ ⊨) y **completo** (⊨ ⇒ ⊢). **Objetivo de la asignatura: saber seguir una demostración dada y reconocer qué regla justifica cada línea**; producir demostraciones es más difícil.
- Reglas: ∧I (A, B ⊢ A∧B); ∧E (A∧B ⊢ A, y también B); ∨I (A ⊢ A∨B o B∨A); **∨E** (desde A∨B se abren dos cajas, una con A y otra con B, y si las dos llegan a C se concluye C); →E (modus ponens); **→I** (caja que supone A y llega a B, se descarga y se obtiene A→B); ↔E (A↔B y A ⊢ B); ↔I (dos cajas, A⇒B y B⇒A); **reiteración** (copiar una fórmula hacia cajas *interiores*, nunca de dentro hacia fuera).
- Negación sin ⊥: **¬I** (caja que supone A y llega a X y ¬X, así que se concluye ¬A: **reducción al absurdo**); ¬E (doble negación). Con ⊥: X, ¬X ⊢ ⊥; ⊥ ⊢ A (de una contradicción sale cualquier cosa); una caja de A que llega a ⊥ da ¬A.
- ⊢ C sin premisas significa que C es tautología.
- Reglas derivadas: **MT** (A→C, ¬C ⊢ ¬A), **SH** (A→B, B→C ⊢ A→C) y **SD** (A∨B, ¬B ⊢ A).

## Para la PEC y el examen
- Las fórmulas X₁, X₂… se repiten en todas las preguntas de una misma PEC: una sola tabla o tableau sirve para varias (aviso del foro, 6 oct 2026).
- Cada pregunta vale "todo o nada": hay que marcar exactamente todas las respuestas correctas.
