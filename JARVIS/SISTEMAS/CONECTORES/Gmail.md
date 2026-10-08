---
tipo: sistema-jarvis
sistema: CONECTORES
estado: ok
motivo: "conectado el 2026-10-08; recibe el correo de la UNED reenviado"
disparador: "rutina «buenos días» (solo lectura)"
alimenta: ["UNED"]
conexiones:
  - {a: "Buenos días", tema: "podría resumir correos de la UNED"}
color: "#3ee8ff"
tags: [jarvis, sistema]
---

# Gmail

Podría detectar avisos de la UNED y del curso virtual en el correo.

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › CONECTORES
- **Se activa:** rutina «buenos días» (solo lectura)
- **Estado anotado:** ok (conectado el 2026-10-08; recibe el correo de la UNED reenviado)
- **Alimenta:** galaxia UNED

## Conexiones
- ⇄ [[Buenos días]]: podría resumir correos de la UNED

## Conexión
- Conectado el 2026-10-08 con `/mcp` (cuenta aaron.oficial7601@gmail.com).
- **Correo de la UNED** (`afrances47@alumno.uned.es`, Outlook / Microsoft 365) **reenviado a Gmail** con una regla de Outlook (conservando copia en la UNED). En Gmail, filtro `Para: @alumno.uned.es` → etiqueta **UNED**. Comprobado el 2026-10-08 con correos de prueba.
- Búsqueda que usa Claude: `to:afrances47@alumno.uned.es OR from:uned.es` (la búsqueda por la etiqueta UNED no devolvía resultados con el conector).
- Acuerdo con Aaron: **solo leer**. Nunca enviar, responder, borrar, archivar ni mover correos sin preguntar.
