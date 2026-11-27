---
tipo: sistema-jarvis
sistema: SKILLS
estado: pendiente
motivo: "fases 1-7 de 9 hechas (pruebas en curso)"
disparador: "a petición"
alimenta: [UNED, GITHUB, AARON]
conexiones:
  - {a: "Claude Code", tema: "las skills son capacidades del agente"}
  - {a: "Document Engineering", tema: "departamento"}
  - {a: "Research Intelligence", tema: "departamento"}
  - {a: "Knowledge & Memory", tema: "departamento"}
color: "#ff6bd6"
tags: [jarvis, sistema, skills]
---

# SKILLS PLANET

Ecosistema de skills para investigar, analizar, organizar, recordar, escribir y producir documentos de calidad profesional. Es el centro del sistema solar **SKILLS** de [[SISTEMAS|JARVIS · SISTEMAS]] (creado el 2026-11-26 a petición de Aaron). #revisar

## Departamentos (planetas)

| # | Departamento | Qué hace |
|---|---|---|
| 1 | [[Document Intelligence]] | Leer y extraer información de archivos |
| 2 | [[Professional Writing]] | Redacción técnica, académica y ejecutiva |
| 3 | [[Human Writing]] | Escritura natural en español |
| 4 | [[Research Intelligence]] | Investigación y contraste de fuentes |
| 5 | [[Knowledge & Memory]] | Memoria persistente y conocimiento |
| 6 | [[Document Engineering]] | Generar Word, PDF, PowerPoint, Excel… |
| 7 | [[Data Analytics]] | Datos, estadística y gráficos |
| 8 | [[Editorial Design]] | Maquetación, diagramas y presentaciones |
| 9 | [[Workflow Automation]] | Rutinas, tareas programadas y hooks |
| 10 | [[Quality Assurance]] | Control de calidad antes de entregar |
| 11 | [[Executive Reporting]] | Informes ejecutivos y resúmenes |
| 12 | [[Strategic Intelligence]] | Análisis estratégico y decisiones |

El estado de cada planeta indica cuánto está cubierto hoy: `ok` = hay skills instaladas, `aviso` = cubierto a medias, `pendiente` = solo candidatas externas, `inactivo` = hueco sin skill.

## Fases

| Fase | Estado | Resultado |
|---|---|---|
| 1 · Descubrimiento | hecha (2026-11-26) | [[Catálogo maestro]] |
| 2 · Clasificación y evaluación (0-100, niveles S-D) | hecha (2026-11-26) | [[Evaluación (fase 2)]]: 40 skills, 1 S · 16 A · 10 B · 8 C · 5 D |
| 3 · Selección | hecha (2026-11-26) | [[Selección (fase 3)]]: 15 skills activas (S y A), 5 instaladas hoy |
| 4 · Arquitectura | hecha (2026-11-26) | [[Arquitectura (fase 4)]]: 6 capas, skill líder por departamento, reglas de elección y mapa de compatibilidad |
| 5 · Combinación (flujos) | hecha (2026-11-26) | [[Flujos (fase 5)]]: flujo base de 9 pasos, lista de calidad y 8 flujos |
| 6 · Implementación | hecha (2026-11-26) | [[Implementación (fase 6)]]: `revision-documental` creada y probada; Human Writing cubierta por el modelo base |
| 7 · Pruebas | en marcha (2026-11-26) | [[Pruebas (fase 7)]]: registro de casos reales; 6 skills esperan su primer uso |
| 8 · Documentación (manual) | siguiente | — |
| 9 · Mejora continua | pendiente | — |

## Reglas
- No se inventan skills: cada entrada del catálogo tiene su fuente (repositorio o skill instalada).
- No se instala nada sin revisar el código y sin el permiso de Aaron.
- La memoria del sistema vive en esta carpeta (catálogo, notas por departamento) y lo que Claude aprenda va a la red neuronal.
