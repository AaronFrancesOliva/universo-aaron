---
tags: [red-neuronal, led]
actualizado: 2026-10-07
---

# LED B3 — Conjuntos, relaciones, funciones y combinatoria

Fuente: libro web de LED, `cjtos/` (texto: `Libro web LED - texto completo.txt`, líneas 6845-10413). Es el 25 % y toca en **diciembre**. La página de planificación pone la combinatoria en diciembre, pero la sección del curso y los test la agrupan con grafos en enero (PEC-13 a 16). Test de este bloque: PEC-9 a PEC-12. Índice: [[LED - Índice]].

## Conjuntos
- Se usa la **teoría ingenua** (por comprensión), aunque se avisa de las paradojas. Formas de definir un conjunto: por **extensión** {1,2,3} (el orden y las repeticiones dan igual); por **comprensión** {x | Px}; por **separación** {x ∈ ℕ | Px} ≡ {x | x∈ℕ ∧ Px}.
- **Igualdad**: A = B ⇔ ∀x(x∈A ↔ x∈B) ⇔ A ⊆ B y B ⊆ A. **El vacío ∅ es único** y **∅ ⊆ A para todo A** (el antecedente del condicional es siempre falso).
- **Inclusión** A ⊆ B ⇔ ∀x(x∈A → x∈B); para negarla basta un elemento de A que no esté en B. Es reflexiva, transitiva y antisimétrica. **Subconjunto propio** A ⊂ B ⇔ A ⊆ B y A ≠ B. No hay que confundir ∈ con ⊆.
- **Conjunto potencia** 𝒫(A) = {M | M ⊆ A}, también 2^A; |𝒫(A)| = 2^|A|. M ∈ 𝒫(X) ⇔ M ⊆ X.
- Operaciones: A∩B, A∪B, **complementario** Aᶜ = {x∈U | x∉A} (respecto al universal U), **diferencia** A∖B = A∩Bᶜ. **Disjuntos**: A∩B = ∅. Intersección y unión de familias: x ∈ ⋂ ⇔ ∀C(C∈K → x∈C); x ∈ ⋃ ⇔ ∃C(C∈K ∧ x∈C).
- Propiedades: asociativa, conmutativa, distributiva, neutro (A∪∅ = A, A∩U = A), complementario (A∪Aᶜ = U, A∩Aᶜ = ∅), idempotencia, dominación (A∪U = U, A∩∅ = ∅), absorción, De Morgan, Uᶜ = ∅ y **involución** (Aᶜ)ᶜ = A. Son las mismas leyes que en lógica proposicional, con ∪ como ∨, ∩ como ∧ y ᶜ como ¬.
- **Recubrimiento**: subconjuntos cuya unión es A. **Partición**: (1) ningún bloque vacío, (2) la unión es A, (3) bloques disjuntos dos a dos. **Refinamiento**: K es más fina que H si todo bloque de K está dentro de algún bloque de H.
- En los diagramas de Venn del libro se **sombrea la región con elementos** (al revés que en el convenio original de Venn).

## Relaciones
- **n-tupla**: el orden importa, (3,5,7) ≠ (5,3,7). Par de Kuratowski: (a,b) = {{a},{a,b}}. **Producto cartesiano**: |A₁×…×Aₙ| = |A₁|·…·|Aₙ|. Una **relación** es un subconjunto de un producto cartesiano.
- Relación binaria R ⊆ A×B: **dominio** = {a | ∃b (a,b)∈R}, **rango** = {b | ∃a (a,b)∈R}. Inversa: R⁻¹ = {(b,a) | (a,b)∈R}.
- **Composición de relaciones, en el orden de lectura**: (R∘S) = {(a,c) | ∃b (a,b)∈R ∧ (b,c)∈S}, es decir, **primero R y luego S**. En **funciones el orden se invierte**: (g∘f)(x) = g(f(x)), primero f. Es una trampa típica.
- **Homogénea** (R ⊆ A×A). Identidad I = {(x,x)}. Rⁿ es R compuesta n veces consigo misma.
- Propiedades:
  - **Reflexiva**: ∀x (x,x)∈R, equivale a I ⊆ R. La relación vacía **no es reflexiva** (si A ≠ ∅).
  - **Irreflexiva**: ningún (x,x). La relación vacía **sí es irreflexiva**.
  - **Simétrica**: (x,y)∈R → (y,x)∈R, equivale a R = R⁻¹.
  - **Asimétrica**: (x,y)∈R → (y,x)∉R. Toda asimétrica es irreflexiva y antisimétrica.
  - **Antisimétrica**: (x,y) y (y,x) en R solo si x = y.
  - La relación vacía es simétrica, asimétrica y antisimétrica a la vez (los condicionales tienen el antecedente falso).
  - **Transitiva**: (x,y),(y,z) ∈ R → (x,z)∈R, equivale a R∘R ⊆ R. Para negarla basta un par que falte.
  - **Funcional** (función parcial): cada x se relaciona como mucho con un y. **Serial**: cada x se relaciona al menos con un y.
- **Cierres**, la menor relación que contiene a R y tiene la propiedad: reflexivo R ∪ I; simétrico R ∪ R⁻¹; **transitivo R ∪ R² ∪ R³ ∪ …** (en un conjunto finito se para cuando ya no aparecen pares nuevos).
- **Equivalencia** = reflexiva + simétrica + transitiva. **Clase** [a] = {x | (a,x)∈R}. (a,b)∈R ⇔ [a] = [b], y cualquier elemento de la clase sirve de representante. **Conjunto cociente A/R**: las clases forman una **partición** de A.
- **Orden parcial** (cpo/poset, ⪯) = reflexiva + antisimétrica + transitiva. **Total o lineal**: además, dos elementos cualesquiera son comparables. **Orden estricto** (≺) = transitiva + irreflexiva, o lo que es lo mismo, transitiva + asimétrica. Ejemplos: ⊆ es parcial y no total; ≤ en ℝ es total; ⊂ es estricto parcial; < es estricto total.
- **Diagrama de Hasse**: se dibuja solo la **relación de cobertura** a ≪ b (a ⪯ b, a ≠ b y nada en medio), con b encima. Se quitan los lazos y los enlaces que se deducen por transitividad.
- **Maximal/minimal**: no hay ningún elemento estrictamente mayor/menor (puede haber varios). **Máximo/mínimo**: mayor/menor o igual que todos (si existe, es único). Ambos son **elementos de S**.
- **Cotas superiores e inferiores** de S ⊆ P: son elementos de **P** (pueden estar fuera de S). **Supremo** = mínimo de las cotas superiores; **ínfimo** = máximo de las cotas inferiores. Ejemplo: ℤ no tiene máximo ni mínimo; ℤ⁺ tiene mínimo 1 y no tiene máximo.

## Funciones
- f ⊆ A×B es **función** si **cada x ∈ A tiene exactamente una imagen**. **Dominio** = A, **codominio** = B, **rango** = imágenes ⊆ B. Una operación binaria es una función f: A×A → A.
- **Inyectiva**: f(x₁) = f(x₂) → x₁ = x₂ (se demuestra suponiendo dos imágenes iguales). **Sobreyectiva**: todo elemento de B tiene antecedente. **Biyectiva**: las dos cosas; entonces existe f⁻¹, que también es biyectiva. En conjuntos finitos, inyectiva ⇒ |A| ≤ |B| y biyectiva ⇒ |A| = |B|.
- Composición (g∘f)(x) = g(f(x)); es asociativa; f∘i_A = f, i_B∘f = f, f⁻¹∘f = i_A, f∘f⁻¹ = i_B. La composición de inyectivas es inyectiva y la de sobreyectivas es sobreyectiva.
- **Homomorfismo**: f(a₁ ∗_A a₂) = f(a₁) ∗_B f(a₂). **Isomorfismo**: homomorfismo biyectivo. **Monótona**: s₁ ⪯ s₂ → f(s₁) ⪯ f(s₂).
- **Numerable**: existe f: A → ℕ inyectiva (incluye los finitos). ℤ y ℚ son numerables (por ejemplo, f(z) = 2^z si z ≥ 0 y 3^(−z) si z < 0; f(a/b) = 2^a·3^b). Las uniones y productos de numerables son numerables. **ℝ no es numerable** (argumento diagonal). |A| = |B| si hay biyección; |A| < |B| si hay inyección pero no biyección. |ℕ| = |ℤ| = |ℚ| < |ℝ|. **|A| < |𝒫(A)|** siempre (Cantor).

## Combinatoria
- **Principio de la suma** (conjuntos disjuntos); **inclusión-exclusión**: |A∪B| = |A|+|B|−|A∩B| y |A∪B∪C| = Σ|A| − Σ|A∩B| + |A∩B∩C|; **principio del producto**: |A×B×C| = |A|·|B|·|C|.
- 0! = 1. C(n,k) = n!/(k!(n−k)!). Triángulo de Pascal y binomio de Newton: (x+y)ⁿ = Σ C(n,k) x^(n−k) y^k. Por ejemplo, (2x−y)³ = 8x³ − 12x²y + 6xy² − y³.
- **Notación del libro (m = tamaño del conjunto, n = tamaño de la tupla)**:
  | Tipo | ¿Importa el orden? | ¿Se repite? | Fórmula |
  |---|---|---|---|
  | Variaciones V_m^n = V_{m,n} | sí | no | m!/(m−n)! |
  | Variaciones con repetición VR_{m,n} | sí | sí | mⁿ |
  | Permutaciones P_n | sí (se usan todos) | no | n! |
  | Permutaciones con repetición PR_n^{r₁,r₂,…} | sí | elementos iguales | n!/(r₁!·r₂!·…) |
  | Combinaciones C(m,n) | no | no | m!/(n!(m−n)!) |
  | Combinaciones con repetición CR_{(m,n)} | no | sí | C(m+n−1, n) |
- Ejemplos del libro: un reparto de 4 papeles entre 10 actores es V_{10,4}; las palabras de 8 bits son VR_{2,8} = 256; 10 premios (5 + 3 + 2) son PR = 10!/(5!3!2!); elegir 5 de 10 preguntas es C(10,5); 4 pasteles de 6 tipos son CR_{(6,4)} = C(9,4) = 126.
