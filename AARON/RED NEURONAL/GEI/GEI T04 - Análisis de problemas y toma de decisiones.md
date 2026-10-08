---
tags: [red-neuronal, gei]
fuente: UNED/AÑO 1/CUATRIMESTRE 1/GESTION DE EMPRESAS/Gestión de empresas informáticas.pdf
aprendido: 2026-10-06
---

# T4 Análisis de problemas y toma de decisiones (PDF 88-123)
- Empresa = "centro de decisiones voluntarias tomadas en un entorno incierto". Muchos identifican decisión = dirección. Método científico = aproximación ordenada y sistemática.
- MODELO = representación simplificada de una parte de la realidad. Tipos (pares): objetivos/subjetivos (informales, intuición); ANALÍTICOS (se resuelven → soluciones; incluyen optimización = PRESCRIPTIVOS) / DE SIMULACIÓN (operar sobre el modelo para ver efectos de alternativas; DESCRIPTIVOS, decide el decisor); estáticos (sin tiempo)/dinámicos (tiempo como variable o parámetro); deterministas (datos ciertos)/probabilísticos = aleatorios = estocásticos.
- ESTADOS DE LA NATURALEZA = sucesos de los que depende la decisión y en los que apenas influye el decisor.
- AMBIENTES (según información): CERTEZA (sabe qué estado ocurrirá), RIESGO (conoce estados y probabilidades), INCERTIDUMBRE ESTRUCTURADA (conoce estados, no probabilidades), INCERTIDUMBRE NO ESTRUCTURADA (ni los estados → intuición). Pasar a un ambiente con más info = PROCESO DE APRENDIZAJE.
- Criterios en incertidumbre estructurada (ej. matriz 4.3: E1=60,50,40; E2=10,40,70):
  * LAPLACE (racionalista, igual verosimilitud; postulado de Bayes: equiprobables): media de cada alternativa → máx (favorables)/mín (desfavorables). E1=50, E2=40 → E1.
  * OPTIMISTA: maxi-max (favorables) / mini-min (desfavorables). → E2 (70).
  * PESIMISTA (WALD, prudente): maxi-min (favorables) / mini-max (desfavorables). → E1 (40).
  * HURWICZ (optimismo parcial): H = α·mejor + (1−α)·peor; α=coef optimismo, 1−α pesimismo. α=0,6: H1=52, H2=46 → E1. α=1 → optimista, α=0 → pesimista. Desfavorables: α pondera el más bajo, elegir menor H.
  * SAVAGE (mínimo pesar; aversión al arrepentimiento): matriz de pesares = (mejor de la columna − resultado); elegir el MENOR de los MÁXIMOS pesares. Pesares E1: 0,0,30 (máx 30); E2: 50,10,0 (máx 50) → E1.
  * Estrategia DOMINADA (otra es igual o mejor en todos los estados) → eliminarla antes.
- JUEGOS DE ESTRATEGIA (resultado depende de decisiones de otros jugadores; frente a "juego contra la naturaleza"/azar). Clasificación: nº jugadores; suma nula / no nula (constante o variable); nº jugadas; información completa/incompleta; estrategia PURA (solo actuación racional) / MIXTA (elemento aleatorio introducido por los jugadores). Juego de 2 personas suma nula = RECTANGULAR (base de la teoría). Matriz: + = pago de B a A (A ganador, filas; B perdedor, columnas). Ganador maxi-min, perdedor mini-max; si coinciden → PUNTO DE SILLA (= valor del juego: lo que gana uno y pierde el otro); punto de silla = el menor de su fila y mayor de su columna; puede no existir o haber varios. Ej: A elige T, B elige P, valor 100.
- Probabilidad: clásica/LAPLACE (favorables/posibles) vs FRECUENCIAL u objetivista (frecuencia relativa con muchas observaciones; límite). Compuesto P(S∩T)=P(T)P(S/T)=P(S)P(T/S); independientes → P(S∩T)=P(S)P(T). P(S∪T)=P(S)+P(T)−P(S∩T); mutuamente EXCLUYENTES → P(S∩T)=0 → suma. Urna 2N+1B sin reemplazo: P(N1∩N2)=2/3·1/2=1/3.
- Variable aleatoria; distribución de probabilidad (histograma, área total 1). E(x)=Σx·p (media; dónde está centrada). Varianza σ²=Σ(x−E)²p (forma/dispersión; unidades²). Desviación típica σ (mismas unidades). CV=σ/E (riesgo por unidad de valor esperado). Ej suma de puntos (bolas 1,2,3 con reemplazo): valores 2..6 con 1,2,3,2,1 /9; E=4; σ²=4/3; σ=1,1547; CV=0,2887. DISPERSIÓN = RIESGO (certeza → σ=0). Aversión al riesgo subjetiva; empresario = poca aversión.
- BAYES (reverendo Bayes, s. XVIII): probabilidades a priori → a posteriori con nueva información. P(T)=ΣP(T/Si)P(Si) (prob total); P(Si/T)=P(T/Si)P(Si)/P(T). Ej: P(S=5 | 1ª=2) = (1/2·2/9)/(1/3) = 1/3.
- GRADO DE CONFIANZA: variables discretas/continuas. NORMAL: simétrica, campana de Gauss, P(valor concreto)=0, área total 1, 0,5 a cada lado de la media; definida por E y σ: N[E, σ]. TEOREMA CENTRAL (fundamental) DEL LÍMITE: suma de infinitas variables independientes con media y varianza finitas → normal. E(suma)=ΣE; σ²(suma)=Σσ² SOLO si independientes. Tipificar g=(x−E)/σ ~ N(0,1) (tablas: área 0..z). Ej: N(2.600; 386), P(x>3.206)=P(g>1,57)=0,5−0,4418=0,0582.
- TEORÍA DE LA INFORMACIÓN (SHANNON, MIT): la información de un suceso depende de su probabilidad: más información cuanto menos probable (sorpresa). h(P)=log(1/P)=−log P; decreciente, →∞ si P→0, 0 si P=1, monótona y continua, aditiva para sucesos independientes. Unidades: ln→NITS, log10→HARTLEYS, log2→BITS (1 bit = suceso de prob 1/2). ENTROPÍA (desorden) H=ΣP·log(1/P): incertidumbre del sistema antes; ≥0; mínima 0 si un suceso seguro; máxima log n si equiprobables. Mensaje que cambia P→Q: ganancia log(Q/P). INFORMACIÓN DE CANAL I(Q:P)=ΣQ·log(Q/P) = contenido informativo esperado del mensaje; ≥0 (no puede desinformar); 0 si Q=P; si hace un suceso seguro → h(P).
- Test T4 (mío, **coincide con la clave oficial** de la fe de erratas): 1d 2d(simulación) 3d(probabilísticos) 4d(incert. estructurada) 5a 6b 7c 8a 9a 10c.

Volver al [[GEI - Índice]].
