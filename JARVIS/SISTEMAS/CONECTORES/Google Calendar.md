---
tipo: sistema-jarvis
sistema: CONECTORES
estado: ok
motivo: "conectado el 2026-10-08 (cuenta aaron.oficial7601@gmail.com)"
disparador: "a petición (lectura; crear eventos solo si Aaron lo pide)"
alimenta: ["UNED", "AARON"]
conexiones:
  - {a: "Buenos días", tema: "podría traer las citas del día"}
color: "#3ee8ff"
tags: [jarvis, sistema]
---

# Google Calendar

Podría volcar tutorías y exámenes del Calendario de la UNED a Google Calendar (o leer tus citas).

- **Sistema:** [[SISTEMAS|JARVIS · SISTEMAS]] › CONECTORES
- **Se activa:** a petición (lectura; crear eventos solo si Aaron lo pide)
- **Estado anotado:** ok (conectado el 2026-10-08 (cuenta aaron.oficial7601@gmail.com))
- **Alimenta:** galaxia UNED

## Conexiones
- ⇄ [[Buenos días]]: podría traer las citas del día

## Conexión
- Conectado el 2026-10-08 con `/mcp`. Calendarios: el principal (zona `Atlantic/Canary`) y *Festivos en España*.
- Acuerdo con Aaron: Jarvis **lee** eventos para la agenda; **crea** eventos solo cuando Aaron lo pide (enseñando antes la lista); **nunca** borra ni modifica sin preguntar.
- **Reloj orbital** (2026-10-08): Claude vuelca la agenda a `AARON/Agenda.md` en la rutina «buenos días» y el núcleo la dibuja como un anillo de 24 h alrededor de la esfera de JARVIS.
