---
tags: [red-neuronal, fsd]
actualizado: 2026-10-07
---

# FSD — Lo aprendido del curso virtual (2026-10-07)

Fuentes: páginas de Ágora, *Preguntas Más Frecuentes* (P+F) de los temas 1 y 3-8 (`TEMA N/…Preguntas…pdf`; la del tema 2 está escaneada), actividades de simulación, cronograma y fe de erratas (`Fe de erratas/`). Índice: [[FSD - Índice]].

## Alcance del examen (según P+F y curso virtual)
- **T3**: los amplificadores de tres estados (*buffers-drivers*) y los transmisores-receptores de bus **sí entran** (solo el concepto: §3.5.2, pp. 194-195 y fig. 3.20). Hay 4 tipos: inversor o no inversor, con control activo en alta o en baja. Cuando no están habilitados, la salida queda en **alta impedancia**.
- **T4**: el apartado 7.3 (transistores **FAMOS** y mecanismos de borrado) **no es materia de examen**; basta saber que existen distintos tipos con borrados distintos.
- **T7**: el funcionamiento de los transistores bipolares y MOS **no es materia de estudio** (es de Fundamentos Físicos). El capítulo 2 del libro tampoco entra.
- **T10 (CPLD/FPGA)**: es informativo y **no entra en el examen** (cronograma).
- Problemas de desarrollo de exámenes: no están en el curso. El test sí está (ver [[FSD - Exámenes anteriores (análisis)]]).

## Criterios de diseño (P+F T3 y T4)
- **Con puertas**: hay que minimizar (agrupaciones grandes en Karnaugh).
- **Con MUX**: las variables de control son las filas (o columnas) del Karnaugh, y se **minimiza por filas**: cada fila da la entrada de un canal (0, 1, una variable o una pequeña función). Se elige la orientación que da canales más simples.
- **Con PLD (PROM/PAL/PLA)**: **no se minimiza; se expande** a términos mínimos (se multiplica por (A + Ā) por cada variable que falta).
- Los términos indiferentes (combinaciones que no se dan, como en BCD o exceso-3) se marcan con x y ayudan a agrupar, pero **un grupo no puede estar formado solo por x**.
- Las entradas de control y de habilitación se pueden usar como entradas de datos. Ejemplo: el EN del 74138 usado como cuarto bit para formar un DEMUX de 4 a 16 con dos de 3 a 8.

## Biestables y autómatas (P+F T5 y T6)
- **D** = retardo o memoria: Q(t+Δ) = D(t). Se obtiene de un RS con S = D y R = D̄, o de un JK con J = D y K = D̄. Un JK cuyo segundo biestable recibe Q y Q̄ del primero funciona como un D.
- **T** = J = K: cambia de estado cuando T = 1 (base de los contadores asíncronos).
- Hay que distinguir cronogramas de **RS básico** (sin reloj), **por niveles** (cambia mientras Ck = 1) y **por flanco** (solo en la subida o la bajada). El **SN7473 se dispara en las bajadas** (circulito en la entrada de reloj). El Clear es activo en baja.
- **Procedimiento general de síntesis de autómatas finitos** (P.6.3, lo pide la PEC 2): (1) descripción → (2) variables: m = 2^M configuraciones de entrada, p = 2^P de salida, **N biestables con 2^N ≥ número de estados** (Sᵢ codificado en binario) → (3) diagrama de transición de estados → (4) matrices de transición (una por cada valor de x) y **matriz funcional** → (5) funciones de excitación de los D (Karnaugh) → (6) circuito → (7) simulación y verificación.
- **Registro de desplazamiento**: biestables D en serie; un dato tarda n−1 pulsos en llegar al último. La carga en serie o en paralelo se hace con MUX.

## Temporizador 555 (P+F T7, PEC 2)
- **Astable**: t₁ (alta) = 0,69·(R_A + R_B)·C; t₂ (baja) = 0,69·R_B·C; T = 0,69·(R_A + 2R_B)·C; ciclo de trabajo t₁/T = (R_A + R_B)/(R_A + 2R_B).
- Como hay 3 incógnitas y 2 ecuaciones, **se fija C** (valores estándar) y se despejan R_B y luego R_A. Ejemplo: T = 100 ms, t₁ = 65 ms, C = 0,1 µF → R_B ≈ 507 kΩ, R_A ≈ 435 kΩ.
- **Onda cuadrada** (t₁ = t₂): se pone un **diodo en paralelo con R_B**, con lo que t₁ ≈ 0,69·R_A·C y t₂ ≈ 0,69·R_B·C, y se toma **R_A = R_B**. Hay otra variante sin diodo en la hoja de características de National.
- **Monoestable**: se dispara con la **bajada** del pulso de disparo; el ancho del pulso depende de R_A y C.

## Celdas de memoria (P+F T8; salen mucho en el test)
- **SRAM CMOS de 6 transistores**: Q5 y Q6 son los de acceso (canal N), Q1 y Q2 los de canal N, Q3 y Q4 los de carga (canal P). **Escribir un 1**: WL = 12 V (Q5 y Q6 conducen), BL = 12 V y B̄L = 0 V; entonces **Q1 conduce**, Q2 no, Q3 no y Q4 sí. **Escribir un 0**: BL = 0 V y B̄L = 12 V; Q1 no conduce, Q2 sí, Q3 sí y Q4 no. **Leer**: WL = 12 V y se mide en BL y B̄L. "Hay un 1 almacenado" significa que Q1 conduce.
- **SRAM NMOS**: igual, pero las cargas Q3 y Q4 son de canal N con las puertas a la alimentación; conduce la carga del lado que está a 0.
- Ejemplo de examen (ene 2011): escribir un 1 en NMOS → Q5, Q6, Q1 y Q3 conducen; Q2 y Q4 no.
- **DRAM de 3 transistores**: Din, RS (lectura) y WS (escritura). Para escribir un 1: Din = 1, RS = 0, WS = 1, y C queda cargado.

## PEC (páginas de Ágora)
- Los enunciados se publican el **23 oct (PEC 1)** y el **11 dic (PEC 2)**; el cronograma pone para la PEC 2 el 28 nov. Entregas: PEC 1 el 28 nov y PEC 2 el 10 ene. Fuera de plazo **no se admiten**. Plan B: correo al tutor con copia al equipo docente antes de la 01:00 peninsular. Ver [[Calendario]].
- A cada estudiante le toca el enunciado con los **tres últimos dígitos de su DNI/NIE** (por ejemplo, PEC1-135.docx). Si se entrega otro, la PEC no se corrige.
- Se entrega un **.zip o .rar** con los archivos del circuito y el informe (.pdf preferiblemente) hecho sobre la plantilla del enunciado.
- La corrige el **tutor** sobre 10 puntos: **Diseño 4** (tipo 1 + realización 3; **si el diseño está mal, se pone 0 y se deja de corregir**), **Simulación 2,5** (esquema 1, señales 0,5, cronograma 1), **Verificación 3** (exhaustiva 1 + justificación 2), **Documento 0,5**. Para que cuente, el examen tiene que llegar a 4; la nota es la media de las dos PEC y pesa un 20 %. Sin PEC, la nota máxima es 8.
- **PEC 1** (temas 1-3): un circuito de control (comparador de 2 palabras de 2 bits, detector de paridad de 4 bits o codificador de 4 prioridades, más puertas, con **diseño mínimo**) que genera S3-S0, M y Cn para la **ALU SN74181** (tabla en la p. 292 del libro). Puertas: SN7408, 7432, 7404, 7402, 7400 y 7486 (**no usar las de colector abierto**); generadores DigClock; "Interactive digital constant" para valores fijos. Truco: fijar A3, A2, B3 y B2 a 0 y poner relojes en A1, A0, B1 y B0, con lo que salen tablas de 16 filas; representar F0-F3 por los acarreos.
- **PEC 2** (temas 5-7): **reloj con 555 astable con t₁ = t₂** → generador de la señal x con un **contador SN74393** (x se queda en alta y en baja los pulsos que diga el enunciado) → **autómata de 2 bits con biestables D (SN7474, con Preset y Clear)** controlado por x. Hay que inicializar los biestables (si aparecen dos rayas rojas en el cronograma); si no se recorren todos los estados, se fuerzan con generadores independientes en Clear y Preset.
- Simulador: **Multisim** (NI, versión de educación) con la cuenta de la UNED; el número de serie está en Ágora (página de instalación) y no lo copio aquí. Error 2705: desactivar el antivirus. En Mac hay que usar una máquina virtual (UTM con Windows 11 ARM funciona, según el foro).
- Generadores: periodo del LSB = mitad del periodo del bit siguiente, para que la tabla salga ordenada.

## Erratas (además de las del tema 1 en su nota)
**Libro de teoría** (*Electrónica Digital*, 2.ª ed., 2001, fe de erratas oficial):
- p. 27, fig. 1.8: varios cuadros (X(Y+X) → X(Y+Z); Y·Z → X·Z; X·Y+Y·Z → X·Y+X·Z).
- p. 31, línea −2: Y a **0,5 MHz** (no 2 MHz). p. 35: encabezados de la fig. 1.16 cambiados (x₁ ↔ x₂). p. 46: fig. 1.22 (x₁+x₂ → x₁·x₂). p. 48: redacción del paso de NAND a NOR. p. 62: ec. [1.68] m0,1,6,7 (no m0,2,6,7).
- p. 267: en C-2 de 4 bits el rango es **del 0 al 7 y del −1 al −8** (no del 0 al 8 y del −1 al −7).
- p. 334, fig. 6.21: a la AND que produce E1 le falta una entrada (debe tener 3). p. 399, ej. 1.2.a: f4 = (X+Y+Z)·(X+Y+Z) + …
- p. 418: "tablas de producción de **salidas** (g)". p. 431: el orden de las configuraciones es 00, 11, 01, 10. **p. 442, línea 19: "AND" donde pone "NAND"**. p. 541: "salida de la puerta NOR, (3) entrada al inversor".
**Libro de problemas** (2.ª ed., 1999): p. 170, "puertas" (no "puertas NOR"); figs. 5.6.13-5.6.14 (valores de F); fig. 6.1.2 (entradas de las AND cambiadas); p. 208 ("ocho por cada bit, treinta y dos en total"); **p. 224, E.7.7 C: A = d8+d9, B = d4+d5+d6+d7, C = d2+d3+d6+d7, D = d1+d3+d5+d7+d9** (la fig. 7.7.3 está bien); E.8.4 se puede hacer con JK o con D; p. 269, matriz funcional; p. 292-293 (J_B = Q_A; la OR va a J_B, no al preset); p. 298, fig. 9.6.10 (OR, no NOR); p. 346, fig. 10.7.2 (los relojes deben llevar circulito porque cambian en las bajadas); p. 349 ("bajadas").
