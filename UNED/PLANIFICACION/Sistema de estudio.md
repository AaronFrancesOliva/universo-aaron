---
tags: [planificacion, metodo]
actualizado: 2026-10-05
---

# Sistema de estudio

## Ciclo de cada tema

1. **Primera lectura** del tema en el libro base, sin subrayar todavía.
2. **Nota del tema**: Claude genera el resumen en `ASIGNATURA/TEMA N/` y lo verifica contra el libro, el resumen y el glosario. Tú lo lees *con el libro al lado* y marcas dudas con `> [!question]`.
3. **Dudas**: se resuelven con Claude, que responde citando la nota o el libro (ver abajo).
4. **Autoevaluación**: test o problemas del tema sin mirar la nota. Lo fallado se apunta en la sección "Errores" de la nota.
5. **Repasos espaciados**: a los **1, 7 y 21 días** de terminar el tema y una vez más antes del examen. Cada repaso es activo: preguntas o problemas, no releer.

El estado de cada tema va en las propiedades de su nota:

| Propiedad | Valores |
|---|---|
| `estado` | `pendiente` → `leido` → `resumido` → `dominado` |
| `ultimo_repaso` | fecha del último repaso |
| `proximo_repaso` | fecha del siguiente (1, 7, 21 días) |

## Cómo resuelve Claude las dudas

- Primero busca en las notas del vault y en los PDFs del tema y de `UNED/LIBROS/`, y **cita la fuente** (nota o libro y página).
- Si la respuesta no está en el material de la asignatura, lo dice y separa claramente lo que es explicación propia.
- Si la duda revela un hueco en la nota del tema, propone añadirlo.
- Para practicar, puede preguntarte en vez de explicarte (*"pregúntame el tema 1"*).

## Revisión semanal (domingo, 20 min)

Usa la nota semanal ([[Plantillas/Semana|plantilla]], carpeta `UNED/PLANIFICACION/Semanas/`):
1. ¿Qué temas he cerrado? Actualizar `estado` y [[MEMORY]].
2. ¿Qué repasos tocan esta semana? (lo muestra el [[Panel de estudio]]).
3. ¿Qué entregas o exámenes vienen en las próximas 4 semanas?
4. Reparto de horas por asignatura para la semana siguiente.

## Día a día con Jarvis

- **Mañana**: dile a Claude *"buenos días"*. Crea la nota del día en `UNED/PLANIFICACION/Rutina/Diario/` con 3 prioridades, la agenda y los repasos que tocan.
- **Durante el día**: lo que surja va al [[Inbox]].
- **Noche**: *"cierra el día"*. Claude resume lo hecho, pasa lo pendiente a mañana, procesa el Inbox y actualiza los repasos.
- Todo se ve en [[00 - Panel (HOME)]].
