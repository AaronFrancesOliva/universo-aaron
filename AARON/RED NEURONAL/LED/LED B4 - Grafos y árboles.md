---
tags: [red-neuronal, led]
actualizado: 2026-10-07
---

# LED B4 — Grafos y árboles

Fuente: libro web de LED, `grafos/` (texto: `Libro web LED - texto completo.txt`, líneas 10414-11550). Es el 25 % y toca en **enero**, junto con la combinatoria ([[LED B3 - Conjuntos, relaciones, funciones y combinatoria]]). Test de la PEC: PEC-13 a PEC-16. Índice: [[LED - Índice]].

> [!warning] Convenios propios del libro (fíjate bien en el test)
> - **Camino sencillo** = no repite **aristas**. **Camino elemental** = no repite **vértices** (y por tanto tampoco aristas). **Paseo** = puede repetir las dos cosas (paseo cerrado si vuelve al inicio).
> - **Ciclo** (simple o sencillo) = camino sencillo cerrado. **Ciclo elemental** = además no repite vértices, salvo el inicial.
> - Un **lazo cuenta 2** en el grado total; si es dirigido, suma 1 al grado de entrada y 1 al de salida. En la **matriz de adyacencia no dirigida** el lazo aparece como **2** en la diagonal (ejemplo del libro); en la dirigida, como 1.
> - **Bipartito dirigido**: además de no haber aristas dentro de cada parte, **todas** las aristas van de V hacia U.
> - **Raíz de un grafo** = vértice desde el que hay camino a todos los demás (puede haber varias). El libro antiguo de Gallego (`UNED/LIBROS/Estructuras Discretas`) la definía solo para grafos dirigidos acíclicos.

## Conceptos básicos
- G = (V, E), con **V no vacío**. Arista no dirigida {a,b}, arista dirigida (arco) (a,b), ponderada {a,b,peso}. El **peso del grafo** es la suma de los pesos.
- **Incidentes**: vértices de una arista. **Adyacentes**: vértices unidos por una arista; aristas que comparten vértice. **Grafo nulo**: sin aristas. Dos grafos son iguales si tienen los mismos conjuntos V y E.
- Grafo dirigido, no dirigido o mixto. **Multigrafo**: tiene aristas repetidas (multiplicidad); si no las tiene es un **grafo sencillo**. Lazo o bucle: (a,a).
- **Grado**: de entrada (llegan), de salida (salen) y total (entrada + salida). Vértice **aislado**: grado 0. **k-regular**: todos los vértices tienen grado k (0-regular = nulo).
- Representaciones: **matriz de adyacencia** |V|×|V| (1, o el peso; la fila suma el grado de salida y la columna el de entrada; es simétrica si el grafo no es dirigido; hay que saber de qué tipo es el grafo para interpretarla). **Lista de adyacencia**. **Matriz de incidencia** |V|×|E| (en dirigidos: 1 en el origen y −1 en el destino).

## Subgrafos
- **Subgrafo**: V' ⊆ V y E' ⊆ E (las aristas solo pueden unir vértices de V'). **Expandido**: incluye todos los vértices. **Inducido** por V': incluye todas las aristas de G entre vértices de V'. **Supergrafo**; subgrafo o supergrafo **propio** si no son iguales. G∖e (quitar una arista) y G∖v (quitar un vértice con sus aristas).
- **Completo Kₙ**: una arista entre cada par de vértices distintos. **Complementario**: mismos vértices y las aristas de Kₙ que faltan en G; G ∪ complementario = K_|V|. **Unión de grafos**: unión de V y unión de E.
- **Bipartito**: V se parte en dos conjuntos disjuntos sin aristas dentro de cada uno (número cromático 2).
- **Isomorfismo**: biyección entre vértices que conserva la adyacencia; las matrices de adyacencia coinciden reordenando los vértices.

## Caminos, accesibilidad y recorridos especiales
- Camino = secuencia de aristas adyacentes. Su **longitud** es el número de aristas (o la suma de pesos). **Distancia** = longitud del camino mínimo.
- **Acíclico**: sin ciclos. Un no dirigido acíclico conexo es un árbol; si no es conexo, un bosque. Los **grafos dirigidos acíclicos** tienen especial importancia.
- **Accesible**: hay un camino. Todo vértice es accesible desde sí mismo. Es simétrica en grafos no dirigidos y no tiene por qué serlo en dirigidos. **Matriz de accesibilidad**.
- **Euler**: un camino euleriano pasa por **todas las aristas** sin repetir ninguna; un ciclo euleriano además es cerrado; un grafo euleriano tiene un ciclo euleriano. En un grafo **no dirigido**: hay **camino euleriano ⇔ como mucho 2 vértices de grado impar** (se empieza en uno de ellos y se acaba en el otro), y hay **ciclo euleriano ⇔ todos los vértices tienen grado par**. Königsberg (grados 3, 5, 3, 3) no tiene; la "casa" (grados 2, 4, 4, 3, 3) tiene camino. **Algoritmo de Fleury**: empezar en un vértice impar y no usar un puente si hay otra opción.
- **Hamilton**: un camino hamiltoniano es un camino elemental que pasa por **todos los vértices**; un ciclo hamiltoniano lo cierra; un grafo hamiltoniano tiene uno. Todo Kₙ con n > 2 es hamiltoniano.

## Conectividad
- **Fuertemente conexo**: hay camino entre cualquier par, en los dos sentidos (la matriz de accesibilidad es todo unos). **Unilateralmente conexo**: hay camino en al menos un sentido. **Débilmente conexo**: el grafo sin direcciones es conexo. Fuerte ⇒ unilateral ⇒ débil. En grafos no dirigidos, conexo es lo mismo que fuertemente conexo.
- **Componentes conexas**: subgrafos inducidos por los vértices conectados entre sí.
- **Punto de corte**: vértice cuya eliminación aumenta el número de componentes. **Puente**: arista con la misma propiedad.
- **Recorridos**: **en profundidad** (alejarse al máximo y volver al último vértice con sucesores sin visitar, como en un laberinto; es recursivo; empieza en una raíz); **en anchura** (primero los más cercanos; da caminos mínimos; empieza en una raíz); **por niveles** (empieza por los vértices sin predecesores; no necesita raíz). **Orden topológico** (en grafos dirigidos acíclicos: cada vértice antes que sus sucesores): lo da el recorrido en anchura desde una raíz o el recorrido por niveles.

## Árboles
- **Bosque**: no dirigido y acíclico (entre dos vértices hay como mucho un camino). **Árbol (libre)**: no dirigido, acíclico y conexo (exactamente un camino entre cada par). Un bosque es una unión de árboles.
- En un árbol **todas las aristas son puentes**; añadir una arista crea exactamente un ciclo. Con n vértices tiene **n − 1 aristas** y la suma de grados es **2(n − 1)**.
- **Árbol de expansión**: subgrafo expandido que es un árbol. **Árbol de expansión mínimo**: el de menor peso. **Kruskal**: ordenar las aristas por peso y añadirlas si no forman ciclo.
- **Árbol con raíz** (G, vᵢ): el **nivel** de un vértice es su distancia a la raíz; la **altura o profundidad** es el nivel máximo. Padre, hijo, **hoja** (sin hijos), hermanos, ascendientes y descendientes.
- **Árbol binario** (como mucho 2 hijos) y n-ario. Sirven para expresiones: (¬p∧q → ¬r). **Árbol dirigido**: sin direcciones sería un árbol; tiene raíz si hay un único vértice sin padre y todos los demás tienen exactamente un padre.

## Ampliación (aplicaciones)
- **Grafo plano**: se puede dibujar sin cruces. Condición necesaria: con V ≥ 3, |E| ≤ 3V − 6 (el libro dice "menor que" y pone el ejemplo 11 < 18); si además no hay ciclos de longitud 3, |E| ≤ 2V − 4.
- **Coloreado**: el **número cromático** es el mínimo número de colores. Vale 1 si no hay aristas y 2 si es bipartito. Los mapas se colorean con 4 colores y los grafos planos con 5 o menos. Un Sudoku es un problema de coloreado con 9 colores.
