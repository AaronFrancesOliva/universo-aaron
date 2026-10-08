---
tags: [instrucciones, ipad]
creado: 2026-10-06
---

# Sincronizar el vault con el iPad

Método: plugin **Remotely Save** (gratis) + **OneDrive (App Folder)**. En el PC el plugin ya está instalado (versión 0.5.25) y activado.

## En el PC (unos 3 minutos)
- [x] **Reinicia Obsidian** (ciérralo y ábrelo) para que cargue el plugin. Si no aparece activo: *Ajustes → Complementos de la comunidad* → activa **Remotely Save**.
- [x] *Ajustes → Remotely Save*:
  - **Remote Service**: **OneDrive (App Folder)** (la gratuita; la "Full" es de pago).
  - Pulsa **Auth** e inicia sesión con tu cuenta **personal** de Microsoft (las de empresa o universidad no funcionan).
  - **Regex Of Paths To Ignore** (en *Basic Settings*): `^UNED/LIBROS/` (para no subir los 2,7 GB de libros).
  - **Sync Config Dir**: **desactivado** (los plugins que solo funcionan en el PC, como el terminal, darían problemas en el iPad).
  - **Schedule for Auto Run**: por ejemplo, cada 5 minutos.
- [x] Pulsa el icono de Remotely Save en la barra lateral para hacer la **primera sincronización** (tarda un poco porque sube todo).

## En el iPad
- [x] Instala **Obsidian** desde la App Store y crea un vault vacío llamado **UNED**.
- [x] *Ajustes → Complementos de la comunidad* → actívalos → instala **Remotely Save** y **Dataview** (Dataview hace falta para el panel y las listas).
- [x] En Remotely Save: **OneDrive (App Folder)** → **Auth** con la misma cuenta → `^UNED/LIBROS/` en **Ignore Paths** → sincroniza.

## A tener en cuenta
- La sincronización no es instantánea: se hace con el botón o cada X minutos.
- Si editas la misma nota en los dos sitios antes de sincronizar, puede haber conflicto: sincroniza al terminar en un dispositivo.
- En el iPad no funcionan el terminal ni el modo JARVIS completo; sí las notas, el calendario, la red de Claude y el grafo.
- Si algún paso no sale igual, díselo a Claude con lo que ves en pantalla.
- Si al sincronizar sale un **error 400** y OneDrive se queda vacío: crea a mano la carpeta `Aplicaciones/remotely-save/UNED` en onedrive.live.com (el plugin no consigue crearla solo). Pasó y se arregló así el 2026-10-06.
- El vault de cada dispositivo tiene que llamarse **UNED**: el plugin busca en OneDrive la carpeta con el nombre del vault.
- La sesión de OneDrive caduca hacia el **25 dic 2026**: si deja de sincronizar, pulsa *Auth* otra vez en Remotely Save.
