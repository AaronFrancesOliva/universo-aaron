---
tags: [red-neuronal, led]
actualizado: 2026-10-07
---

# LED B2 — Lógica de predicados

Fuente: libro web de LED, bloque `pred/` (texto: `Libro web LED - texto completo.txt`, líneas 4227-6844). Es el 25 % y toca en **noviembre**. Test de la PEC: PEC-5 a PEC-8. Tiene la misma estructura que [[LED B1 - Lógica proposicional]]: lenguaje, cuestiones semánticas y cálculos. Índice: [[LED - Índice]].

## Sintaxis (primer orden con identidad)
- **Términos**: `t ::= c | x | g(t,…,t)`, es decir, constantes (a, b, c…), variables (…x, y, z) y funciones n-arias que devuelven un único término. Las funciones se pueden anidar: m(p(a)) es "la madre del padre de a".
- **Fórmulas atómicas**: Rⁿt₁…tₙ (predicado n-ádico; los monádicos se llaman **propiedades**) o t₁ = t₂ (**identidad**, en notación infija). Un mismo predicado no puede usarse con aridades distintas.
- `F ::= Rt…t | t=t | ∀xF | ∃xF | ¬F | (F∗F)`. Los cuantificadores tienen la **misma precedencia que ¬**. Los paréntesis de las funciones **no se quitan nunca** (Rf(a)b ≠ Rfab).
- Alfabeto: símbolos comunes (variables, ∀ ∃ ¬ ∧ ∨ → ↔, =, puntuación) y **símbolos propios** del lenguaje (constantes 𝒞, funciones 𝓕, relaciones 𝓡).
- **Operador principal**: se busca contando paréntesis, como en proposicional. Puede ser una conectiva o un cuantificador.
- **Ámbito** de Qx en QxF: la fórmula F. Una aparición de x en F está **ligada** por Qx; si no la liga ningún cuantificador, es **libre**. Una misma variable puede tener apariciones libres y ligadas en la misma fórmula. **Sentencia**: fórmula sin variables libres.

## Semántica
- **Interpretación ⟨U, I⟩**: universo U **no vacío**; cada constante va a un elemento a^I ∈ U; cada predicado monádico a un subconjunto P^I ⊆ U (que puede ser vacío); cada predicado diádico a un conjunto de pares R^I ⊆ U×U (dirigido de a hacia b); cada función a una función total f^I sobre U (todo elemento tiene exactamente una imagen).
- **Asignación σ**: da un valor en U a cada variable libre. I ⊨ Pb ⇔ b^I ∈ P^I; I ⊨ Rab ⇔ (a^I, b^I) ∈ R^I; I,σ ⊨ Raf(x) ⇔ (a^I, f^I(x^σ)) ∈ R^I.
- **∀x F**: verdadera si F se cumple para **todas** las asignaciones de x (en un universo finito equivale a una conjunción de n casos). **∃x F**: si se cumple para **alguna** (una disyunción).
- **Identidad**: t₁ = t₂ es verdadera si los dos términos apuntan al mismo elemento de U. Es reflexiva, simétrica y transitiva, y permite sustituir un término por otro igual.
- Ejemplos de formalización (amigo invisible): ∀x∃y Rxy ("todos regalan al menos a uno"); ∀x∃y(Rxy ∧ x≠y) ("sin regalarse a sí mismo"); ∀x∀y∀z((Rxy ∧ Rxz) → y=z) ("como mucho a uno"; se cumple aunque R^I sea vacía); ∀x∃y(Rxy ∧ ∀z(Rxz → y=z)) ("exactamente a uno"); ∀x Rxf(x) también obliga a "exactamente uno" porque f es una función.
- Formalizaciones típicas: "Todos los M son V" es ∀x(Mx → Vx); "Existe alguien que es hijo de b y nació en T" es ∃y(Hyb ∧ Ty).
- **Hay infinitas interpretaciones** posibles, incluso para Pb: con U = {1,2,3} hay 2³·2³·3·3 = 576 para {Pa, Pb, Qa}. Por eso **no se puede comprobar la validez recorriendo interpretaciones** como en una tabla de verdad.

## Cuestiones semánticas
Las mismas definiciones que en proposicional (sobre sentencias): satisfacible, válida (universalmente verdadera), equivalente y consecuencia. También se cumplen los mismos teoremas:
- F ≡ G ⇔ (F↔G) es válida ⇔ ¬(F↔G) es insatisfacible ⇔ F ⊨ G y G ⊨ F ⇔ {F, ¬G} y {¬F, G} son los dos insatisfacibles.
- F₁…Fₙ ⊨ C ⇔ (F₁∧…∧Fₙ → C) es válida ⇔ {F₁,…,Fₙ, ¬C} es insatisfacible.

## Equivalencias (los 4 tipos)
1. **Renombrar la variable** de un cuantificador: QxF ≡ Qz F[x/z]. Solo vale si z no captura una variable libre ni choca con otro cuantificador anidado sobre z. Por ejemplo, en ∀x(Px ∧ Rxz) no se puede renombrar x como z.
2. **Negación y cuantificador** (siempre se puede): ¬∀xF ≡ ∃x¬F, ¬∃xF ≡ ∀x¬F, ∃xF ≡ ¬∀x¬F y ∀xF ≡ ¬∃x¬F.
3. **Sacar o meter un cuantificador** (Prop. 18): si **x no aparece libre en F**, (F ∗ QxG) ≡ Qx(F ∗ G) con ∗ ∈ {∧, ∨}. Si x aparece libre, se renombra antes; por eso **siempre se puede llegar a la forma prenexa** (todos los cuantificadores delante). Hay que respetar el orden relativo de los cuantificadores anidados. Con →, primero se reescribe como ¬A ∨ B: el cuantificador del **antecedente cambia de tipo** al salir, por ejemplo (∃xPx → ∃xQx) ≡ ∀x∃w(Px → Qw).
4. **Factor común** (Prop. 19): **∀xF ∧ ∀xG ≡ ∀x(F∧G)** y **∃xF ∨ ∃xG ≡ ∃x(F∨G)**. Con ∀ y ∨, o con ∃ y ∧, **no hay equivalencia**, solo consecuencia en un sentido: ∀xF ∨ ∀xG ⊨ ∀x(F∨G) y ∃x(F∧G) ⊨ ∃xF ∧ ∃xG.
- La forma prenexa sirve para la resolución con unificación y la skolemización, que **no entran en el temario**.

## Tableaux de predicados
- Se usan las mismas reglas proposicionales: α (X∧Y; ¬(X∨Y); ¬(X→Y); ¬¬X) y β (X∨Y; ¬(X∧Y); X→Y). Además, X↔Y da (X,Y | ¬X,¬Y) y ¬(X↔Y) da (X,¬Y | ¬X,Y).
- **Instanciación**:
  - ∀xF y ¬∃xF ("universales"): se instancian con **cualquier constante**, ya usada o no, y **tantas veces como haga falta**.
  - ∃xF y ¬∀xF ("existenciales"): se instancian con una **constante nueva**, no usada antes en la rama, y **una sola vez** por rama.
- Una rama se cierra cuando contiene una atómica **sin variables** y su negación: Pa y ¬Pa, Rab y ¬Rab (mismo predicado y mismas constantes).
- **Estrategia**: expandir primero los existenciales (para fijar las constantes nuevas) y luego elegir las constantes de los universales de forma que cierren ramas.
- **Errores típicos**: instanciar un existencial con una constante ya usada (cierra tableaux de conjuntos satisfacibles, como {∃xPx, ∃x¬Px}), o instanciar un cuantificador anidado antes que el principal (en ∀x∃yRxy hay que instanciar primero ∀x). Un ∀ dentro del antecedente de → acaba funcionando como un "existencial implícito" y necesita constante nueva.
- El sistema es **correcto y completo**: un tableau cerrado garantiza que el conjunto es insatisfacible, y todo conjunto insatisfacible tiene un tableau cerrado.
- Usos indirectos, igual que en proposicional: validez de F (tableau de ¬F), equivalencia (tableau de ¬(F↔G)) y consecuencia (tableau de {H₁,…,Hₙ, ¬C}, sin olvidar **negar la conclusión**).
- El libro no incluye deducción natural de predicados (el bloque de cálculos solo tiene equivalencias y tableaux).
