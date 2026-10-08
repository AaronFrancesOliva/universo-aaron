---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
proyecto: "[[portafolio-magic-builder]]"
---

# portafolio-magic-builder (análisis)

**Qué es**: el **portafolio profesional y CV** de Aaron. Planeta: [[portafolio-magic-builder]] · sistema PERSONAL.

## Cómo se hizo
- Generado con **Lovable** (antes GPT Engineer): 56 de los 61 commits son del bot `gpt-engineer-app` (24 mar → 7 abr 2025). Aaron hizo después 5 commits a mano (abr-may 2025, mensajes "aa") para poner sus datos reales: `mockData.ts`, Hero, Resume, Testimonials y los PDF de `docs/` (`cv.pdf`, `es_europass.pdf`, `en_europass.pdf`).
- **Stack**: React + Vite + TypeScript + Tailwind + shadcn/ui (Radix).
- **Secciones**: Hero con carrusel de imágenes en cilindro, Proyectos, Habilidades (formato Europass), Currículum con certificaciones, Testimonios y referencias, Contacto (envío de correo), Blog con entradas, **selector de idioma** (contexto de idioma, CV Europass en español e inglés) y modo oscuro.
- Hubo un intento de backend: `server/index.js` (Express con CRUD de projects, skills, testimonials y resume) y `database-schema.sql` (MySQL, 4 tablas). Después se quitó el CRUD (*"Refactor: Remove CRUD functionality"*) y se dejaron **datos de ejemplo**.
- `src/.env` está versionado, pero solo contiene `VITE_API_URL` (no es un secreto).

## Conexiones
- Mismo stack de interfaz (React + Vite + Tailwind + Radix) que [[GitHub - Aularis]]; Tailwind también en [[GitHub - CHILDREN-S-ACTIVITY-SERVICE]].
- Es el escaparate de los demás proyectos: cuando Aaron lo actualice, podrían salir aquí Aularis, CHILDREN'S y las apps de PGL.
- **UNED**: [[Trabajo Fin de Grado]] (en el futuro, sitio natural para publicarlo).
