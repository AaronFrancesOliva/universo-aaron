---
tags: [red-neuronal, fsd]
fuente: Teoria De Electronica Digital - Delgado Y Mira.PDF, cap. 12 (PDF 631-667)
aprendido: 2026-10-07
---

# FSD T9 — Memorias de acceso secuencial (FIFO, LIFO, CCD)

Capítulo 12 del libro. **No ha salido nunca en el test** (2011-2026, ver [[FSD - Exámenes anteriores (análisis)]]), pero entra en el programa: conviene saber los conceptos. Las celdas RAM de las FIFO son las del [[FSD T8 - Memorias RAM y CAM]] y los registros de desplazamiento los del [[FSD T6 - Diseño secuencial, contadores y registros]]. Índice: [[FSD - Índice]].

## Tres modos de acceso a una memoria
(1) **Aleatorio** (cuesta lo mismo llegar a cualquier dirección: SRAM, DRAM); (2) **por contenido** (CAM); (3) **secuencial**: se sustituye el direccionamiento directo por **registros de desplazamiento**, a veces con **punteros** de escritura (primera posición libre) y de lectura (última ocupada). Soporte físico: celdas SRAM CMOS y dispositivos **CCD**. Objetivos del tema: organizaciones (FIFO, LIFO, CCD), etapas dinámicas MOS/CMOS/CCD, FIFO sobre RAM y ejemplos.

## Organizaciones
- **FIFO** (First-In, First-Out; fig. 12.1): K palabras de n bits = n registros de desplazamiento de K bits (uno por bit). Es **serie-serie**: el primer dato que entra es el primero que sale. Si no entran datos y el lazo está cerrado, la información **recircula** (eso reconstruye la carga, como el refresco de las DRAM).
- **LIFO** (Last-In, First-Out) o **pila (stack)** (fig. 12.2): registros **bidireccionales**; la entrada y la salida están en el mismo extremo; al escribir se "empuja hacia arriba" y al leer se sacan en orden inverso.
- El problema de las organizaciones serie es que **el tiempo de acceso crece con la longitud**: hay un compromiso entre capacidad y tiempo de acceso.
- **CCD** (fig. 12.3): (a) serie con **regeneradores** de señal en las esquinas; (b) **lazos múltiples con direccionamiento directo** a cada lazo, con un tiempo máximo de acceso **t_A = 2·(N_r/f_c)** (N_r bits por segmento entre regeneradores y f_c la frecuencia del reloj); (c) **serie-paralelo-serie (SPS)**: un registro serie rápido carga en paralelo varios canales lentos y otro registro serie saca los datos (cada bit pasa por N_s + N_p etapas en lugar de por todas).

## Etapas dinámicas MOS y CMOS
- La **capacidad de puerta** de un MOS guarda carga (alta impedancia de entrada): un condensador + un conmutador S₁ forman una celda de memoria volátil, que con el tiempo pierde la carga.
- **Registro de desplazamiento dinámico NMOS** (Philco, 1965; fig. 12.4b): **reloj bifásico Φ₁ y Φ₂**; en cada fase se transfiere la carga de un condensador al siguiente a través de inversores (lógica positiva: "0" = 0 V, "1" = V_DD). Una etapa = dos medias etapas.
- **Versión CMOS** (fig. 12.5): **puertas de transmisión + inversores CMOS** con un reloj monofásico Φ y su complemento. Tres ideas de diseño: usar las capacidades parásitas para guardar la carga, usar inversores para controlar los estados y usar puertas de transmisión para cargar y descargar bajo el control del reloj.

## Dispositivos CCD (Charge Coupled Devices; Boyle-Smith y Kosonocky-Sauer, 1970)
- Sucesión de estructuras MOS que guardan **paquetes de carga en pozos de potencial** y los desplazan con un **reloj polifásico** (de 3 fases: Φ₁, Φ₂, Φ₃) a lo largo de la superficie (SCCD) o de un canal enterrado (BCCD): son "transistores MOS multipuerta" que hacen de registro de desplazamiento.
- Tres secciones: **entrada** (diodo de inyección ID + puerta IG, sobre una difusión n⁺), **transferencia** (electrodos de las tres fases) y **salida** (unión P-N en inversa como capacidad, puerta OG, diodo OD, con un reset).
- Transporte (fig. 12.7): en t₁ el pozo bajo Φ₁ es el más profundo; en t₂ se baja ID y se inyectan electrones; en t₃ sube ID y queda un paquete bien definido bajo Φ₁; en t₄-t₅ baja Φ₁ con Φ₂ en alta y la carga pasa bajo Φ₂ (**transferencia de carga**); en t₆ pasa bajo Φ₃; en t₇ baja Φ₃ y empuja la carga al diodo de salida, que da un potencial proporcional a la carga.
- Bajo consumo y alta densidad. Las señales pueden ser analógicas o digitales. Aplicaciones: memorias FIFO, procesado de señales analógicas y, sobre todo hoy, **sensores de imagen** (videocámaras). Para buffers entre sistemas digitales domina la tecnología CMOS.

## FIFO sobre celdas RAM CMOS
- Función: **buffer entre dos sistemas digitales de distinta velocidad** (datos irregulares hacia un proceso lento y constante; paquetes esporádicos; interfaces). El tamaño depende del tamaño de los paquetes y de la diferencia de velocidades. **Tiempo de ciclo t_c = t_A (acceso) + t_R (recuperación)**; f_max = 1/t_c.
- **Tipos**: **I** de registro de desplazamiento (número de palabras fijo, lectura y escritura sincronizadas); **II** de lectura/escritura **mutuamente exclusivas** (número de palabras variable, cierto sincronismo); **III** **concurrentes** (lectura y escritura independientes y asíncronas; la FIFO resuelve la sincronización internamente). Las actuales son casi todas de tipo III, y pueden ser asíncronas o síncronas.
- **FIFO asíncrona** (fig. 12.8): relojes de escritura y lectura separados, **F̄ULL** y **ĒMPTY** (estado) y **C̄LEAR**. Antes de escribir se mira F̄ULL; se escribe en la **bajada** del reloj de escritura; antes de leer se mira ĒMPTY. Problema: las señales de estado **no se pueden sincronizar** con los dos relojes a la vez (puede haber inestabilidades).
- **FIFO síncrona** (fig. 12.9, Texas Instruments): un reloj central siempre activo y señales de habilitación **WE** (escritura) y **RE** (lectura); F̄ULL va síncrona con el reloj de escritura y ĒMPTY con el de lectura.
- **Arquitecturas**: (1) **registro de desplazamiento** (el dato "cae" hasta la primera posición libre; tiene el retardo de recorrer todo el registro); (2) **circular con dos punteros** (fig. 12.10): se escribe donde marca el puntero de escritura y se lee donde marca el de lectura; tras un reset los dos apuntan a la misma dirección; **si el de lectura alcanza al de escritura, la FIFO está vacía; si el de escritura alcanza al de lectura, está llena**. Se hace con SRAM de entrada y salida separadas + contadores para los punteros (TI ACT-7881, con FULL, HALF FULL, almost full y EMPTY). La ventaja es que **la capacidad crece sin aumentar el tiempo de acceso** (solo el contador necesita n bits para 2ⁿ posiciones).
- **Am7205A (AMD), 8192 × 9**: lectura y escritura asíncronas y simultáneas; D0-D8 entrada y Q0-Q8 salida (en alta Z si R̄ está en alta); punteros que vuelven a 0 al llegar a 8191; **ĒF (empty flag) y F̄F (full flag) activos en baja**; R̄ lee, W̄ escribe, R̄S reset, F̄L/R̄T (first load/retransmit), X̄I/X̄O/H̄F para conectarlas en cascada (expansión en anchura o en profundidad).
