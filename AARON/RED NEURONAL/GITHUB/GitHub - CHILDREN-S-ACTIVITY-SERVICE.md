---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
proyecto: "[[CHILDREN-S-ACTIVITY-SERVICE]]"
---

# CHILDREN'S ACTIVITY SERVICE (análisis)

**Qué es**: aplicación web para **gestionar un parque infantil**: reservas de servicios (zonas de juego, cumpleaños), inscripción en eventos y talleres, panel de administración y estadísticas. Planeta: [[CHILDREN-S-ACTIVITY-SERVICE]] · sistema PERSONAL (lo decidió Aaron). Según su memoria (`Docs/PRW-DOC.pdf`), es el **proyecto de PRW de 2.º de DAW**.

## Técnica
- **Laravel 11** (PHP 8.2) con vistas **Blade + Tailwind + DaisyUI**, peticiones `fetch` y avisos con **SweetAlert2**. MySQL.
- **28 modelos**: User, Profile, Role, Permission, Method, RolePermissionMethod (permisos por método HTTP), Service, Material, ServiceMaterial, Consumable, ConsumableRecord, Event, EventRegistration, EventService, Reservation, ReservationService, Invoice, PlaygroundInvoice, PlaygroundRecord, GiftCard, Promotion, Review, SupportTicket, Notification, UserNotification, ActiveSession, Log y Configuration.
- Middleware propio por rol: `StartSession` + `AuthCliente` / `Auth` / `AuthAdmin`; rutas `comprobar-sesion`, `searchUser`, `searchService`; reservar servicio e inscribirse en eventos.
- En `Docs/`: memoria (PDF), `Parque_infantil.sql` y diagrama UML de la base de datos (`db_parque_infantil_uml.wsd`, PlantUML).
- Despliegue: Laravel Sail (Docker) en local y luego un VPS con Ubuntu 22.04 y Nginx. **90-100 horas**: planificación 10, análisis y diseño 15, backend 30, frontend 20, pruebas 15, documentación y despliegue 10.
- La memoria incluye *Integración y coste empresarial*: necesidades del sector, beneficios y costes (todo software libre).
- 12 commits (24 abr → 12 may 2025), casi todos con el mensaje "aa".

## Conexiones
- **Su sistema de autenticación pasó a** [[GitHub - aaron-frances|la prueba técnica de Edata]] (mismos middlewares `Auth`/`AuthAdmin`, `comprobar_sesion` y `search`): Aaron reutilizó su propio código.
- Precursor de [[GitHub - Aularis]]: mismo dominio (reservas con roles y permisos), hecho en solitario y con vistas Blade.
- **UNED**:
  - [[Sistemas de Bases de Datos]]: modelo relacional con tablas intermedias con atributos, como `ServiceMaterial` o las reservas.
  - [[Introducción a la Ingeniería de Software]]: requisitos funcionales y no funcionales, análisis y pruebas.
  - [[Seguridad]]: control de acceso por rol y por método.
  - GEI: la parte de costes enlaza con [[GEI T07 - Inversiones y su selección. Rentabilidad]] y el reparto de horas con [[GEI T05 - Técnicas instrumentales de planificación, programación y control]].
- Aquí se aplicó Bases de Datos, que en el grado está convalidada por DAW ([[Plan de estudios]]).
