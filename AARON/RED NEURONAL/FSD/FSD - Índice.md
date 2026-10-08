---
tags: [red-neuronal, fsd]
actualizado: 2026-10-07
---

# FSD — Índice de conocimiento

**Fuentes**: libro de teoría *Electrónica Digital* (Mira, Delgado y otros) → `UNED/AÑO 1/CUATRIMESTRE 1/FUNDAMENTOS DE SISTEMAS DEGITALES/Teoria De Electronica Digital - Delgado Y Mira.PDF`; libro de problemas → `Problemas Electrónica Digital.pdf`. Ambos **escaneados** (ver [[Método - Cómo trabajo]]).
- Teoría: **página del PDF = página impresa − 6**. Los marcadores del PDF marcan el inicio de cada tema del libro (T1 PDF 5, T2 73, T3 156, T4 199, T5 251, T6 301, T7 342, T8 398, T9 460, T10 526, T11 572, T12 631, T13 668).
- Problemas: cap. 1 en las pp. 10-39 del PDF (E.1.1-E.1.10).
- Programa: tema 1 = tema 1 del libro; desde el 2, **tema del programa = tema del libro − 3**; el tema 10 del programa no entra. Ficha: [[Fundamentos de Sistemas Digitales]].

## Nodos
- [[FSD - Exámenes anteriores (análisis)]]: 326 preguntas de test (2011-2026) clasificadas por tema, tipos de pregunta que se repiten y dónde están los HTML con soluciones.
- [[FSD - Curso virtual (FAQ, PEC, erratas)]]: qué entra y qué no, criterios de diseño (puertas, MUX, PLD), síntesis de autómatas, fórmulas del 555, celdas SRAM/DRAM, PEC 1 y PEC 2 al detalle, y todas las erratas oficiales.

## Material descargado de Ágora (2026-10-07)
- Por tema en `TEMA N/`: P+F (temas 1-8; la del tema 2 está en la raíz y escaneada), actividades de simulación (temas 1, 2, 3, 5, 6 y 7; los temas 4, 8, 9 y 10 no tienen) y hojas de características (temas 1, 2, 3, 5, 6 y 7). Vídeo de transistores en `TEMA 8/`.
- `Cronograma 26-27 FSD.pdf`, `Fe de erratas/` (teoría .docx y problemas .pdf), `EXAMENES ANTERIORES/` (41 HTML + PDF de respuestas 2011-2019) y `PEC/` (diagramas de bloques de las dos PEC).
- Vídeos del canal de YouTube por tema (enlaces en Ágora): T1 6OckNEvL-E0, T2 zv0BlO8EzkY, T3 QcjDaYzDpUE, T4 mY4oB4lLwG4, T5 s6cbjZCVnDg, T6 lyCpkHUCZXQ, T7 ed-z_0t_xVM; sumador L_P5YBCsgkM; introducción a Multisim zS1XG1WDqow; vídeo sobre el examen HhY6-7DIw9s.

## Estado
| Tema | Nodo | Estudiado por Claude | Nota de Aaron |
|---|---|---|---|
| 1 Álgebra de Boole y funciones lógicas | (en la nota de Aaron) | sí, entero (2026-10-06) | [[Tema 1 - Álgebra de Boole y funciones lógicas]] |
| 2 Lógica combinacional I (aritmética, sumadores, comparadores, ALU) | [[FSD T2 - Lógica combinacional I (aritmética, sumadores, comparadores, ALU)]] | sí (2026-10-07) | — |
| 3 Lógica combinacional II (MUX, DEMUX, codificadores, buses) | [[FSD T3 - Lógica combinacional II (ruta de datos)]] | sí | — |
| 4 Lógica combinacional programable (ROM, PROM, PAL, PLA) | [[FSD T4 - Lógica combinacional programable]] | sí | — |
| 5 Autómatas y biestables | [[FSD T5 - Autómatas y biestables]] | sí | — |
| 6 Diseño secuencial, contadores y registros | [[FSD T6 - Diseño secuencial, contadores y registros]] | sí | — |
| 7 Temporizadores y relojes (555) | [[FSD T7 - Temporizadores y relojes]] | sí | — |
| 8 Memorias RAM y CAM | [[FSD T8 - Memorias RAM y CAM]] | sí | — |
| 9 Memorias de acceso secuencial | [[FSD T9 - Memorias de acceso secuencial]] | sí | — |
| 10 CPLD y FPGA | — | no (no entra en el examen) | — |

Método: el libro está escaneado y no hay OCR. Renderizo 4 páginas por imagen con PyMuPDF (`render4.py`: escala 1,0, recorte de márgenes del 6-8 %, mosaico 2×2) y las leo. Así un capítulo de unas 50 páginas son unas 13 imágenes. Ver [[Método - Cómo trabajo]].

## Lo aprendido del tema 1 que no hay que olvidar
- La nota de Aaron ya contiene todo el contenido (postulados, teoremas, minterms/maxterms, NAND/NOR, Karnaugh). No lo duplico aquí.
- Errata confirmada por el equipo docente: p. 31, Y va a **0,5 MHz** (no 2 MHz). Otras siete erratas detectadas por mí: listadas en la nota del tema.
- Material del tema que trae la UNED: Preguntas Más Frecuentes (23 preguntas, útiles para dudas típicas), actividades de simulación A.1.1-A.1.6 (preparan las PEC) y hojas de características de 7400, 7402, 7404, 7486, 74LS32. Es previsible que cada tema traiga un paquete parecido: organizarlo en `TEMA N/`.
- Al final de cada tema del libro hay "Preparación de la evaluación" con preguntas por objetivo, sin soluciones.
