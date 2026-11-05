---
asignatura: Lógica y Estructuras Discretas
tipo: guia-examen
fecha: 2026-11-04
tags: [led, examen, revisar]
---

# LED · Patrones de examen

Qué se repite en los exámenes y, sobre todo, **cómo se resuelven aprovechando que se repite**. Complementa a [[LED - Guía rápida de examen]].

> [!info] De dónde sale
> Análisis de Jarvis sobre **9 exámenes distintos** de 2023-24, 2024-25 y 2025-26 (febrero 1.ª y 2.ª semana y septiembre de cada curso). Los patrones de lógica están **comprobados con un script en los 9**. Son regularidades observadas, no una norma de la asignatura: el equipo docente puede cambiarlas, así que úsalos como atajo y comprueba siempre el resultado.

## Lo más importante: las preguntas están encadenadas
**Las preguntas 1-9 no son nueve problemas, son dos.** Las 1-5 se reducen a una fila y un par de fórmulas; las 6-9, a dos fórmulas falsas y una equivalencia.

### Bloque 1-5 (proposicional)
| Patrón | Se cumple |
|---|---|
| En la pregunta 1, la interpretación hace **falsa exactamente una** de las cuatro $X$ | 9 de 9 |
| Hay **exactamente un par** de fórmulas incompatibles | 9 de 9 |
| Las preguntas **2, 4 y 5 se responden con ese par**: es la opción que lo contiene | 9 de 9 |
| La $X$ falsa de la pregunta 1 **pertenece al par** | 9 de 9 |
| El par incluye la $X$ con **menos modelos** (la más restrictiva) | 9 de 9 |
| La respuesta de la pregunta 1 **aparece como opción de la 2**, y se descarta porque es satisfacible | 9 de 9 |

**Cómo se responde:**
1. **Pregunta 1.** Evalúa las cuatro $X$ con la interpretación. Marca la opción que **no incluye** la falsa. Llámala $X_f$.
2. **Encuentra el par.** Mira la $X$ más restrictiva (una $\land$, o la negación de un $\to$). Saca los valores que obliga y evalúa las demás: la que salga falsa forma el par. Si no se ve, usa la pista: $X_f$ está en el par, y las opciones de la pregunta 4 te dicen qué parejas probar.
3. **Pregunta 4** ($A \models \lnot B$): la opción formada por el par.
4. **Pregunta 2** (conjunto insatisfacible): la opción que **contiene** el par.
5. **Pregunta 5** ($A \land B \to \lnot C$): la opción cuyas tres fórmulas **contienen** el par.
6. **Pregunta 3**: es independiente. Ver más abajo.

> [!example] Ejemplo real: septiembre de 2026
> - La pregunta 1 hace falsa $X_4$.
> - $X_4$ solo la cumple la fila $(0,1,1,0)$, y ahí $X_2 = 0$. **El par es $\{X_2, X_4\}$.**
> - Pregunta 4: $X_4 \models \lnot X_2$. Pregunta 2: $\{X_2, X_3, X_4\}$. Pregunta 5: $X_2 \land X_3 \to \lnot X_4$.
>
> **Un solo cálculo responde a tres preguntas.**

### Bloque 6-9 (predicados)
| Patrón | Se cumple |
|---|---|
| Cada interpretación hace **falsa exactamente una** de las cuatro $Y$ | 9 de 9 |
| **La respuesta de la pregunta 9 es el par formado por esas dos $Y$ falsas** | 9 de 9 |

**Cómo se responde:**
1. **Preguntas 6 y 7.** No compruebes las tres opciones: busca **la $Y$ falsa** en cada interpretación y marca la opción que no la incluye.
2. **Pregunta 9.** Es el par de esas dos $Y$. Antes de marcar, confírmalo razonando: suele ser que una dice «todos son $P$» y la otra «alguno no lo es».
3. **Pregunta 8.** Es independiente. Ver más abajo.

> [!tip] Por qué tiene sentido
> Si una $Y$ y otra son verdaderas a la vez en alguna interpretación, ese par es satisfacible. Como cada interpretación solo tiene una falsa, casi todos los pares quedan descartados por las preguntas 6 y 7. Solo sobrevive el par que nunca coincide.

### Preguntas 3 y 8 (equivalencias)
Aquí las opciones incorrectas **se parecen mucho a la correcta**: cambian un signo, un $\land$ por un $\lor$ o un $\forall$ por un $\exists$.

| Pregunta | Qué suele pedir | Trampa habitual |
|---|---|---|
| 3 | Distributiva, De Morgan o quitar un $\to$ | Un literal con el signo cambiado |
| 8 | Mover o negar cuantificadores | $\forall$ y $\exists$ intercambiados |

**Método para la 3:** no transformes toda la fórmula. Compara las opciones, localiza **en qué se diferencian** y prueba una fila que separe esa diferencia.

**Reglas para la 8:**
- $\lnot\forall \equiv \exists\lnot$ y $\lnot\exists \equiv \forall\lnot$.
- $\forall$ y $\land$ se reparten; $\exists$ y $\lor$ también.
- **Un cuantificador en el antecedente de un $\to$ se invierte al sacarlo**: $(\forall y\, F \to G) \equiv \exists y(F \to G)$.
- En el consecuente se conserva: $(G \to \exists y\, F) \equiv \exists y(G \to F)$.

## Bloque 10-18: qué cae
| Pregunta | Tema | Veces en 9 exámenes |
|:-:|---|:-:|
| 10 | Conjunto potencia o número de subconjuntos | 5 |
| 10 | Equivalencia de expresiones de conjuntos | 3 |
| 11 | Operar conjuntos con datos | 8 |
| 12-13 | Cierre de una relación (transitivo 4, simétrico 2) | 6 |
| 12 | Propiedades de una relación | 3 |
| 13-14 | Inyectiva, sobreyectiva, biyectiva | 7 |
| 14-15 | **Combinatoria (siempre hay una)** | 9 |
| 15-18 | Euleriano | 5 |
| 15-18 | Árbol (aristas, altura, expansión) | 6 |
| 15-18 | Bipartito | 3 |
| 15-18 | Tipos de conexidad | 2 |
| 15-18 | Puente | 2 |
| 15-18 | Grados | 3 |

### Datos reciclados entre exámenes
El equipo docente **reutiliza enunciados**. Conviene conocerlos:
- **$A = \{1,2,4,6,8\}$, $B = \{1,2,3,5,8\}$, $C = \{1,4,5,7\}$**: cae en 3 exámenes; solo cambia la expresión.
- **$R = \{(1,1),(1,4),(2,2),(2,3),(4,4),(5,2)\}$**: cae en 3 exámenes (propiedades, cierre simétrico, cierre transitivo).
- **Grafo de 7 vértices** $\{1,3\},\{1,6\},\{1,5\},\{1,7\},\{2,6\},\{2,4\},\{3,6\},\{4,7\},\{5,6\},\{6,7\}$: cae en 3 exámenes.
- **«Marque la relación $M$ biyectiva»**: cae en 3 exámenes, con dos relaciones $R$ y $S$.
- **Las hogazas de pan**: cae dos veces; cambiar «dos hogazas» por «dos hogazas diferentes» cambia la respuesta.

### Cómo se responden, por tipo
| Tipo | Método | Por qué fallan las otras opciones |
|---|---|---|
| Cierre | Solo **añade** pares; nunca quita. Si una opción no contiene $R$, descártala | Las opciones incorrectas suelen ser **otro cierre** (reflexivo o simétrico) |
| Relación $M$ biyectiva | Calcula cada opción. Deben quedar 5 pares, sin repetir primera ni segunda componente | $(R \cup S) \setminus (S \cup R)$ siempre es **vacío**: descártala al momento |
| Función con cardinales | $\lvert A \rvert > \lvert B \rvert$: no inyectiva. $\lvert A \rvert < \lvert B \rvert$: no sobreyectiva. Distintos: no biyectiva | Afirmaciones imposibles por tamaño |
| Combinatoria | ¿Orden? ¿Repetición? Si hay varias partes, se **multiplican** | Cada opción es otra fórmula: $n^k$, $C$ o $V$ |
| «Señale la afirmación correcta» sobre un grafo | Empieza por la opción **más barata** de comprobar (completo, árbol, grado) | Propiedades sin relación entre sí |
| Árbol | Cuenta primero: $n - 1$ aristas | Una opción suele tener demasiadas o muy pocas |
| Euleriano | Cuenta los grados impares: 0 → ciclo; 2 → camino | |

## La pregunta de desarrollo
| Convocatoria | Qué cayó |
|---|---|
| **Septiembre** (3 de 3) | **Tableau**: 2023-24 y 2024-25, del conjunto insatisfacible de la pregunta 9; 2025-26, de la consecuencia de la pregunta 4 |
| **Febrero** (6 de 6) | **Grafos o relaciones**: árbol de expansión (3), robustez de una red (1), diagrama de Hasse (1), recorridos en profundidad y anchura (1) |

Para febrero, prioriza **árbol de expansión**: grado de cada vértice, peso total, raíz y altura. El tableau hay que seguir sabiéndolo: es el patrón de septiembre, con solo tres cursos de muestra, y además te ayuda a confirmar las preguntas 4 y 9.

Recuerda que el desarrollo solo se corrige con **al menos 6 de 9 en el test**.

## Lo que NO sirve
> [!warning] Las letras no dan información
> - **Los modelos son el mismo examen con las opciones barajadas.** En 2024-25 comparé los modelos A/B y C/D: los enunciados coinciden y cambia el orden de las opciones. Da igual cuál te toque.
> - En mis soluciones de estos 9 exámenes hay **62 b, 50 a y 45 c**. Con el barajado no es una pista: **no marques por letra**.

## Preguntas defectuosas: cómo actuar
En 9 exámenes he encontrado **6 preguntas sin una única respuesta correcta**, además de otras 2 discutibles. Es deducción mía: no están confirmadas por el equipo docente.

| Examen | Pregunta | Problema |
|---|---|---|
| Feb 2026, 1.ª sem. | 15 | (a) y (b) son bipartitos |
| Feb 2026, 2.ª sem. | 13 | (b) y (c) son ciertas |
| Sep 2026 | 3 | Ninguna opción es equivalente |
| Feb 2025, 2.ª sem. | 8 | Ninguna es equivalente: $Y_4$ lleva $\land$ y las opciones $\lor$ |
| Feb 2024, 1.ª sem. | 16 | (b) y (c) son ciertas: tiene camino euleriano y hamiltoniano |
| Feb 2026, 1.ª sem. | 16 | (b) implica (c) |
| Feb 2026, 2.ª sem. | 16 | Discutible: las tres son caminos sencillos |
| Feb 2024, 2.ª sem. | 14 | Discutible: depende de qué conjunto de llegada se suponga |

**En el examen:** no pierdas tiempo si dudas entre dos opciones que parecen ciertas. Marcar compensa cuando has descartado una: con 50 % de acierto, la esperanza es $+0{,}125$ frente a 0 en blanco. Con las tres opciones vivas, el 33 % da justo 0, así que da igual. Si ves un fallo, anótalo para la revisión.

## Orden de trabajo en el examen (propuesta de Jarvis)
| Paso | Qué hacer | Tiempo |
|:-:|---|:-:|
| 1 | Copiar los datos. Pregunta 1, localizar el par → **2, 4 y 5** | 15 min |
| 2 | Preguntas 6 y 7, las dos $Y$ falsas → **9** | 15 min |
| 3 | Preguntas 3 y 8 | 10 min |
| 4 | Preguntas 10-18 | 30 min |
| 5 | Desarrollo | 25 min |
| 6 | Repaso y comprobar el par con otro cálculo | 25 min |

## Soluciones de los exámenes sin hoja de resolución
Solo la clave. Las preguntas 1-9 están comprobadas con un script (salvo las marcadas); las preguntas 10-18 las resolví a mano y solo algunas están comprobadas. **No son plantilla oficial.** Se aplican al modelo indicado: en los otros modelos, las letras cambian.

| Examen | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 2024-25 Feb 1.ª, A | c | c | b | a | c | a | a | b | c | c | b | b | c | b | b | c | a | b |
| 2024-25 Feb 2.ª, C | a | a | c | b | b | a | b | ⚠️ | b | b | c | a | b | c | c | b | b | c |
| 2024-25 Sep, A | a | a | c | b | b | a | b | b | b | b | a | c | b | b | b | b | a | b |
| 2023-24 Feb 1.ª, A | c | c | a | b | a | a | c | a | b | b | b | a | b | a | a | ⚠️ | b | a |
| 2023-24 Feb 2.ª, C | b | a | a | c | a | a | b | c | a | a | a | c | c | ⚠️ b | c | c | c | c |
| 2023-24 Sep, A | b | a | c | b | a | b | a | c | a | b | a | c | a | a | b | b | c | b |

#revisar
