---
tipo: panel
tags: [jarvis, panel]
---

# 🏠 Panel de Jarvis

> [!tip] Cómo se usa
> Por la mañana dile a Claude **"buenos días"**; por la noche, **"cierra el día"**; el domingo, **"revisión semanal"**. Solo necesita **Dataview** (también va en el iPad).

**Accesos:** [[Inbox]] · [[Proyectos activos]] · [[Perfil]] · [[Calendario]] · [[Panel de estudio|J.A.R.V.I.S.]] · [[MEMORY]] · [[Sistema de estudio]]

```dataviewjs
const hoy = moment().format("YYYY-MM-DD");
const semana = moment().format("gggg-[W]ww");
const dia = dv.page("UNED/PLANIFICACION/Rutina/Diario/" + hoy);
const sem = dv.page("UNED/PLANIFICACION/Semanas/" + semana);
dv.paragraph(
  (dia ? `📓 Nota de hoy: [[${hoy}]]` : `📓 La nota de hoy aún no existe: dile a Claude **"buenos días"** o pulsa el icono de la nota diaria.`) +
  " · " +
  (sem ? `📆 Semana: [[${semana}]]` : `📆 La nota de la semana ${semana} aún no existe.`)
);
```

## 🎯 Prioridades de hoy
```dataview
TASK
FROM "UNED/PLANIFICACION/Rutina/Diario"
WHERE file.name = dateformat(date(today), "yyyy-MM-dd") AND meta(section).subpath = "🎯 Las 3 prioridades de hoy" AND text != ""
```

## 🔥 Vencido y sin hacer
```dataview
TASK
FROM -"UNED/PLANIFICACION/Plantillas"
WHERE !completed AND fecha AND fecha < date(today)
SORT fecha ASC
```

## 📅 Próximos 14 días
```dataview
TASK
FROM -"UNED/PLANIFICACION/Plantillas"
WHERE !completed AND fecha AND fecha >= date(today) AND fecha <= date(today) + dur(14 days)
SORT fecha ASC
```

## 🔁 Repasos (hoy y próximos 7 días)
```dataview
TABLE WITHOUT ID file.link AS Tema, estado AS Estado, proximo_repaso AS "Repaso"
FROM -"UNED/PLANIFICACION/Plantillas"
WHERE proximo_repaso AND proximo_repaso <= date(today) + dur(7 days)
SORT proximo_repaso ASC
```

## 📂 Proyectos activos
![[Proyectos activos#📂 Proyectos activos]]

## 📥 Inbox sin procesar
```dataview
TASK
FROM "UNED/PLANIFICACION/Rutina/Inbox"
WHERE !completed AND text != "" AND meta(section).subpath = "Sin procesar"
```

## 🔎 Pendiente de revisar (#revisar)
```dataview
LIST
FROM #revisar
SORT file.mtime DESC
```

## 🕐 Últimas 5 notas modificadas
```dataview
TABLE WITHOUT ID file.link AS Nota, file.mtime AS Modificada
FROM -"UNED/PLANIFICACION/Plantillas" AND -"ARCHIVO"
WHERE file.ext = "md"
SORT file.mtime DESC
LIMIT 5
```
