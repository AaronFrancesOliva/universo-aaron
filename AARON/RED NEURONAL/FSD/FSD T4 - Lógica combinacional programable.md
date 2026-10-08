---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 7 (PDF 342-397)
aprendido: 2026-10-07
---

# FSD T4 — Lógica combinacional programable (PLD)

Capítulo 7 del libro. Objetivos: (1) estructura interna y usos de ROM, PROM, EPROM, EEPROM y FLASH; (2) arquitecturas PAL y PLA para diseño combinacional. **El §7.3 (FAMOS y mecanismos de borrado) no entra en el examen** (P+F T4). Lo secuencial programable (CPLD, FPGA) es el T10, que tampoco entra. Anterior: [[FSD T3 - Lógica combinacional II (ruta de datos)]]. Índice: [[FSD - Índice]].

## Modelo formal: la "función universal"
- Cualquier función de n variables es una suma de términos mínimos: con un vector de coeficientes (a₀ … a_{2ⁿ−1}) que dice qué términos mínimos entran se obtiene cualquiera de las **2^(2ⁿ) funciones** (16 con 2 variables).
- **Convenio del libro (fig. 7.1)**: aᵢ es el coeficiente de mᵢ, con m₀ = x̄₁x̄₀, m₁ = x̄₁x₀, m₂ = x₁x̄₀ y m₃ = x₁x₀. Así, la palabra a₃a₂a₁a₀ = 0001 da x̄₁x̄₀, 0110 da x₁ ⊕ x₀, 0111 da x̄₁ + x̄₀ (NAND), **1001 da (x₁ ⊕ x₀)‾ (XNOR)**, 1000 da x₁x₀ y 1111 da 1. Esto es lo que se pregunta en el test: "función universal con términos mínimos programada con la palabra …" (sep 2011, sep 2012, sep 2014). También hay versión con **términos máximos** (producto de sumas). Cuidado con el orden de los bits de la palabra que dé el enunciado.
- Estructura general de un PLD: buffers e inversores de entrada → **matriz AND** (genera productos) → **matriz OR** (los suma) → salidas.

| Arquitectura | Matriz AND | Matriz OR |
|---|---|---|
| **PROM** | fija (todos los términos mínimos) | programable |
| **PAL** | programable | fija |
| **PLA** | programable | programable |

- Cuándo usar cada una: muchas variables de entrada y pocas salidas → PROM no (crece 2ⁿ); **PROM** si hay pocas entradas y muchas salidas; **PAL** si hay pocas funciones de muchas variables; **PLA** es la más flexible pero la más cara. Norma: "todo lo necesario y lo menos posible".
- **Con PLD no se minimiza: se expanden las funciones a términos mínimos** para la PROM. En la PAL y la PLA sí interesa simplificar, porque el número de productos por OR es limitado (ejemplo de la PLA 3×4×2: f₀ = Σm(3,5,6,7) = x₀x₁ + x₀x₂ + x₁x₂ y f₁ = Σm(0,2,4,6) = x̄₀).
- **Notación de conexiones (figs. 7.6 y 7.7)**: punto = conexión fija; **aspa = conexión programable intacta (conectada)**; cruce sin marca = fusible fundido (no conectada). Una AND con un aspa *dentro* del símbolo tiene todos los fusibles intactos y vale 0 (x·x̄ = 0); una AND sin conexiones vale 1. Una OR con todo conectado vale 1; sin conexiones, 0.

## Memorias no volátiles
- **ROM**: programada de fábrica por máscara, no se puede modificar. **PROM**: programable una sola vez (fusibles: diodos, bipolares o MOS). **EPROM**: se borra con **luz ultravioleta** (minutos, fuera del circuito) y se programa eléctricamente. **EEPROM (E²PROM)**: se borra y se graba eléctricamente dentro del circuito, pero es menos densa. **FLASH**: densidad de EPROM y borrado eléctrico, **por bloques o sectores o entera**.
- Clasificación de memorias (fig. 7.11): de solo lectura (ROM, PROM) y de lectura/escritura (RWM); estas pueden ser **no volátiles** (EPROM, EEPROM, FLASH; acceso aleatorio) o **volátiles** (SRAM y DRAM de acceso aleatorio; FIFO/LIFO de acceso secuencial; CAM). Las no volátiles también son de acceso aleatorio.
- Tabla comparativa (fig. 7.16): EPROM (1 transistor por celda, acceso 60 ns, borrado en minutos, programación < 5 µs, **no reprogramable dentro del sistema**, unos 100 ciclos); EEPROM (densidad media, 120 ns, unos 4 s por circuito, reprogramable en el sistema, 10⁵ ciclos); FLASH (alta densidad, 50 ns, borrado < 4 s, programación < 5 µs, reprogramable, 10³-10⁵ ciclos).
- Ejemplos: **EPROM TMS27C64** (8K×8, terminales Ē chip enable, Ḡ output enable, PGM, Vpp = 13 V para programar; modos de lectura, salida inhibida, standby, programación, verificación e inhibición). **EEPROM M28C16A** (2K×8; Ē, Ḡ y W̄; lectura con Ē = Ḡ = 0 y W̄ = 1; escritura con Ē = W̄ = 0 y Ḡ = 1; escritura por páginas de 32 bytes; RB = ocupado). **FLASH Am29F400T** (4 Mbit, RY/B̄Y, R̄ESET, B̄YTE para elegir 8 o 16 bits; programas internos de borrado y grabación).
- Diagramas de tiempos: t_AVQV (= t_ACC, dirección válida → dato válido), t_ELQV, t_GLQV, t_EHQZ…; convenio de formas de onda (línea central = alta impedancia; aspas = cualquier cambio).

## PAL: salidas y macroceldas
- Salidas **combinacionales**: activa en baja o en alta, con XOR programable para elegir la polaridad, salida programable como entrada (E/S) y realimentación.
- Salidas **secuenciales**: con un biestable D (registered output); el D es un retardo, Q(t) = D(t − Δt), así que la PAL sirve para hacer contadores, registros y autómatas. Es síncrona.
- **Macrocelda** (OLMC, PAL 22V10): biestable D con reset asíncrono (AR) y preset síncrono (SP), un MUX 4 a 1 para elegir la salida y un MUX 2 a 1 para la realimentación. Con S₀S₁: 00 → registrada activa en baja; 01 → registrada activa en alta; 10 → combinacional activa en baja; 11 → combinacional activa en alta.
- Nomenclatura (PALCE 22V10Z-25PI): PAL, CE = CMOS borrable eléctricamente, 22 entradas a la matriz, V = salida versátil, 10 salidas, Z = consumo cero, 25 ns, P = encapsulado DIP plástico, I = industrial. GAL = nombre de Lattice para lo mismo.

## Problemas y evaluación
E.7.1-E.7.7: sintetizar funciones, sumador completo y de 4 bits, comparador, sumador-restador de 3 bits, mini-ALU (se resuelve con la P+F P.4.4), la función de 5 variables del T3 y convertidores BCD → exceso-3, BCD → decimal y decimal → BCD (con la errata de E.7.7 C, ver [[FSD - Curso virtual (FAQ, PEC, erratas)]]). Ejercicio 2.3 de evaluación: sumador de acarreo adelantado con PROM (resuelto en la P+F P.4.1 para 2 bits).
