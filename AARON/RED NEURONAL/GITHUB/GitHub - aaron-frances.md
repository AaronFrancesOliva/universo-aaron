---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
proyecto: "[[aaron-frances]]"
---

# aaron-frances: prueba técnica de Edata Consulting (análisis)

**Qué es**: la **prueba técnica de un proceso de selección** en *Edata Consulting* (1-4 ago 2025). Repositorio en **GitLab** (`technicaltest1/aaron-frances`): la empresa (Adrian Perez) hizo el commit inicial y Aaron trabajó en la rama `aaron_frances`. Planeta: [[aaron-frances]] · sistema PROFESIONAL.

## Los ejercicios
1. **`edataconsulting-test`** (Laravel 11): gestión de usuarios con **roles y control de acceso**: modelos `User` y `Role`, tabla pivote `roles_users`, tokens personales (Sanctum), CRUD completo con estado activo, búsqueda y un **comando único de configuración rápida**. Documentado en *Desarrollo Fullstack con Laravel y JavaScript para Edata Consulting* (con el modelo E-R).
2. **Modelo Entidad-Relación de reclamaciones de vuelos** (documento): Aircraft, Homebase, ActivePeriod, Airport, Flight y Complaint, con sus cardinalidades (una aeronave tiene N periodos activos, cada vuelo tiene aeropuerto de salida y de llegada, un vuelo genera N reclamaciones…).
3. **Sistema de gestión de archivos físicos** (`mysql_script_ej4.sql` + documento): jerarquía ARCHIVE → DRAWER → DOCUMENT → APPENDIX y consultas con JOIN y agregación (documentos de 2014 y su cajón, anexos de tipo *bill*, número de documentos con factura, última factura por documento).

## Conexiones
- **Reutiliza la autenticación de** [[GitHub - CHILDREN-S-ACTIVITY-SERVICE|CHILDREN'S]]: mismos middlewares y nombres de método.
- Mismo esquema de usuarios, roles y permisos que [[GitHub - Aularis]].
- **UNED**:
  - [[Sistemas de Bases de Datos]]: modelado E-R, cardinalidades y SQL con JOIN, GROUP BY y la "última fila por grupo".
  - [[Seguridad]]: control de acceso basado en roles.
  - GEI: [[GEI T03 - Dirección de RRHH|selección de personal]]; la prueba técnica es una herramienta de selección.
