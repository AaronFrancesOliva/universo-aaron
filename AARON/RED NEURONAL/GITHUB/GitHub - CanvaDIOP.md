---
tags: [red-neuronal, github, proyecto]
actualizado: 2026-10-08
proyecto: "[[CanvaDIOP]]"
---

# CanvaDIOP (análisis)

**Qué es**: `labor-orientation-app`, *"Aplicación de gestión de convalidaciones para el Departamento de Orientación Laboral"* (el DIOP del nombre). Planeta: [[CanvaDIOP]] · sistema COLABORACIÓN. Repositorio de **JaviiCode** (`github.com/JaviiCode/CanvaDIOP`).

## Cómo funciona
1. **Importa un Excel** de alumnos (`ExcelService`): columnas obligatorias *Nombre y Apellidos, DNI, Curso, Ciclo, Módulo*; opcionales *Código, Aporta, Resolución*. Valida la estructura y limpia los datos.
2. **Elige la plantilla de Word** según el número de módulos a convalidar (`templates/WordTemplate.docx` … `WordTemplate10.docx`, de 1 a 10 módulos) y la rellena con **docxtemplater** (`DocumentService`).
3. **Genera los documentos** de convalidación (`Convalidacion_<DNI>_<fecha>.pdf`, con **pdfkit**/docx-pdf) en la carpeta que elige el usuario.
4. Extra: **reconocimiento y síntesis de voz** (`VoiceService`, Web Speech API).
- Interfaz React (Create React App) con Dashboard, Importar datos, Plantillas, Generar documentos, Notificaciones y Ajustes; empaquetado con **Electron** para Windows, macOS y Linux.

## Estado
- Un único commit (*Initial commit*, 30 sep 2025, de `javii.`). En la copia local de Aaron hay **cambios preparados sin commit** (por ejemplo, la carpeta `build/`).
- `Documents/Generated` puede contener documentos con **DNI de alumnos**: Jarvis no la abre.

## Conexiones
- Con [[GitHub - Aularis]]: Electron para escritorio y el mismo entorno (gestión de un centro de FP).
- **UNED**: [[Ética y Legislación]] (trata datos personales, como DNI y expedientes: RGPD y LOPDGDD) e [[Introducción a la Ingeniería de Software]] (automatización de un proceso administrativo real).
