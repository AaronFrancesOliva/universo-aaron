---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
proyecto: "[[Aularis]]"
---

# Aularis (análisis)

**Qué es de verdad**: un sistema de **reserva de aulas y gestión de espacios para centros de FP**. El README habla de forma genérica de "gestión educativa" (cursos, calificaciones), pero el código trata de aulas, equipamiento, reservas (también recurrentes), incidencias, turnos, ciclos formativos, familias profesionales y profesores por ciclo. Planeta: [[Aularis]] · sistema COLABORACIÓN.

## Arquitectura
- **Monorepo pnpm** (`packages/`): `backend` (Laravel 12 + Sanctum, PHP 8.3), `shared` (React 18 + TypeScript: el 95 % de la interfaz), `web` (Vite, desplegado en Vercel) y `desktop` (Electron, con instalador de Windows `Aularis Setup 1.0.0` ya generado).
- **Base de datos**: Supabase (PostgreSQL). 22 modelos Eloquent con sus factorías y seeders: Usuario, Rol, Permiso, RolPermiso, Alumno, ProfesorCiclo, CicloFormativo, FamiliaProfesional, Turno, Aula, TipoAula, AulaCiclo, EstadoAula, HistorialEstadoAula, Equipamiento, TipoEquipamiento, Reserva, ReservaRecurrente, Incidencia, SeguimientoIncidencia y Auditoria. Solo hay las 3 migraciones por defecto: el esquema vive en Supabase.
- **API REST versionada** (`/api/v1`, unas 125 rutas): auth (registro, login, `me`, cambiar contraseña), configuración (turnos, familias, tipos de aula y de equipamiento, estados), usuarios, roles y permisos, profesores-ciclos… Respuestas uniformes (`ApiResponses` + Handler), Form Requests, Resources/Collections y **documentación Swagger/OpenAPI**.
- **Frontend** (`shared/src`): login, plano de planta (`FloorPlanView`), calendario semanal, mis reservas, administración de reservas y de usuarios, equipamiento y ajustes; contextos de autenticación y tema (modo oscuro).
- **CI/CD** con GitHub Actions: `deploy-web` (Vercel), `deploy-backend` (Railway), `build-desktop` (instaladores por etiqueta `vX.Y.Z`) y `tests` (desactivado "hasta configurar la suite").

## Equipo y forma de trabajar
- Aaron Frances Oliva (full-stack; creó el repositorio, el monorepo, el CI/CD, la landing de la API y el Swagger), **Aaron Perdomo Fulgencio** (`aapelfu`, backend: modelos, controladores, autenticación) y **Diego Arbelo González** (`Dukiego`, frontend: pantallas y versión completa App + Desktop).
- **Git Flow adaptado** (`GIT_WORKFLOW.md`, `CONTRIBUTING.md`): `main` protegida, `develop` de integración, ramas `feature/…` y `epic/…`, todo por Pull Request (46 PR). Conventional Commits (`feat:`, `fix:`, `ci:`, `docs:`).
- Cronología: 18-22 dic 2025, montaje y pruebas del flujo de PR; 23-24 dic, CI/CD; 27-30 dic, todo el modelo de datos por dominios (seguridad y usuarios, aulas y equipamiento, estados y reservas, incidencias, auditoría, turnos y ciclos); 2 ene 2026, autenticación Sanctum y Swagger; mar-abr 2026, Diego hace las pantallas y la versión final. Último commit: 17 abr 2026.

## Conexiones
- **Mismo equipo** que RecipesApp2 ([[GitHub - PGL (DAM)]]): Aularis tiene pinta de ser el proyecto intermodular o final de DAM (curso 2025-26). *Sin confirmar.*
- **Mismo dominio** que [[GitHub - CHILDREN-S-ACTIVITY-SERVICE]]: los dos son sistemas de reservas con roles y permisos en Laravel; Aularis es la versión madura (API pura, PostgreSQL, CI/CD, equipo).
- Electron para escritorio, como [[GitHub - CanvaDIOP]] (también del ámbito de los centros de FP).
- **UNED**:
  - [[Sistemas de Bases de Datos]]: modelo de 22 entidades, con relaciones N:M como RolPermiso o AulaCiclo.
  - [[Diseño del Software]]: capas Controller → Service → Repository → Model.
  - [[Introducción a la Ingeniería de Software]].
  - [[Gestión de Proyectos Informáticos]]: Git Flow, PR y reparto por épicas.
  - [[Sistemas Distribuidos]]: web, API y base de datos en tres servicios en la nube.
  - [[Seguridad]]: Sanctum, roles, permisos y auditoría.
  - GEI: [[GEI T05 - Técnicas instrumentales de planificación, programación y control|planificación]].
