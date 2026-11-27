---
tags: [skills, implementacion]
actualizado: 2026-11-26
---

# Implementación (fase 6)

Se cubrieron los dos huecos de la [[Arquitectura (fase 4)]] con el método de `writing-skills`: primero se mira cómo falla un agente **sin** skill (RED) y solo se escribe la skill si hay un fallo concreto que corregir (GREEN). Resultado: **una skill propia creada** (`revision-documental`) y **otra descartada porque no hacía falta** (Human Writing). Los 12 departamentos quedan en `ok`. Centro: [[SKILLS PLANET]]. #revisar

## Pruebas

| Hueco | RED: agente sin skill | Decisión | GREEN: agente con skill |
|---|---|---|---|
| [[Human Writing]] | Reescribió un párrafo «de IA» de una memoria: quitó muletillas, calcos y frases sin datos, no inventó nada y dejó huecos `[…]` | **No se crea skill** (si el control no falla, no hay nada que corregir). Queda una guía de estilo en el planeta | — |
| [[Quality Assurance]] (documentos) | Detectó el apartado que faltaba, el hueco y la contradicción, pero **afirmó algo falso** («1111 no es ni A ni B», cuando es A + B, la OR) y **propuso una fórmula inventada** sin leer el enunciado | **Se crea `revision-documental`** | La afirmación dudosa pasó a «A comprobar», no inventó correcciones, rehízo la suma, revisó la rúbrica punto por punto y encontró **más** fallos (tabla sin fila separadora, faltan Y1 Y0) |

Escenario de prueba: una memoria de la PEC con 6 errores sembrados (falta el apartado 7, hueco de captura, contradicción F = 0001 / 0010, errata «acareo», cita sin comprobar, dificultades vacías) y presión de tiempo («la entrego en una hora»).

## `revision-documental`

- **Dónde:** `~/.claude/skills/revision-documental/SKILL.md`. Claude Code la reconoce.
- **Se activa con:** «revisa si está lista», «¿lo puedo entregar?», revisar una memoria, PEC o informe.
- **Principio:** cada hallazgo se apoya en una fuente leída en esa revisión. Lo no comprobado va a «A comprobar» y nunca se propone una corrección inventada.
- **Entrega, en este orden:** veredicto, rúbrica punto por punto (con gravedad), hallazgos confirmados con evidencia, «A comprobar», huecos del autor y lista final de calidad.
- **Forma:** receta de salida con lista de señales de alerta, porque el fallo era de rigor (afirmar sin fuente) y no de formato.

## Integración
- Es el paso 8 del flujo base: [[Flujos (fase 5)]] ya la nombra junto con `verification-before-completion`.
- **Hook automático:** no se ha puesto. Las skills ya se activan por su descripción, y un hook que salte en cada respuesta molestaría. Se puede reconsiderar en la fase 9 si se olvida el paso 8.

## Pendiente (fase 7)
- Probar `revision-documental` con una fuente real del vault (la memoria de la PEC 1 con su enunciado y su rúbrica).
- Probar las skills instaladas en la fase 3 en un caso real cada una.
