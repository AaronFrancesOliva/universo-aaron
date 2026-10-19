---
tipo: proyecto
sistema: PERSONAL
ruta: ''
remoto: ''
stack: [Java, Spring Boot, Maven, Angular, Electron, Capacitor, Supabase, Three.js, WebSockets]
estado: idea
commits: 0
ultimo_commit: ''
color: "#3ee8ff"
tags: [github, proyecto, idea, revisar]
asignaturas:
  - {a: IIS, tema: "ciclo de vida, requisitos y arquitectura del producto"}
  - {a: DS, tema: "patrones de diseño del núcleo y de los módulos por sector"}
  - {a: SBD, tema: "un único modelo de datos para todos los negocios"}
  - {a: SEG, tema: "facturación inalterable, pagos y datos de clientes"}
  - {a: GPI, tema: "planificación, costes y precio por cliente"}
---

# Twinpos

> [!warning] #revisar
> Idea de Aaron apuntada por Claude el 2026-10-16. Todavía no hay repositorio. Nombre elegido por Aaron el 2026-10-16: **Twinpos** (twin + POS), antes "TPV 3D".

## La idea (palabras de Aaron, resumidas)
Un **TPV general para pymes** (fruterías, peluquerías, tiendas de ropa…) construido con ingeniería del software de calidad:
- **Backend y base de datos comunes**: son prácticamente iguales para todos los negocios, salvo lo que pida cada cliente.
- **Frontend base** con patrones de diseño, reutilizable.
- **Lo que lo distingue**: además de vender la licencia, al cliente que dé algo más de margen se le monta un **frontal 3D de su local**, al estilo de los gemelos digitales industriales. Así, por cliente solo hay que ajustar el 3D y sus especificaciones.

## Origen
La tendencia de los **gemelos digitales** (*digital twins*): dashboards 3D de fábricas y almacenes con los datos en tiempo real (BMW con NVIDIA Omniverse y Siemens, fabLIVE, realvirtual con Three.js…). Conversación del 2026-10-16.

## Decisiones (confirmadas por Aaron el 2026-10-16)
1. **El 3D no va en la pantalla de cobro.** El cobro es 2D, rápido y pensado para el dependiente. El 3D vive en el **panel del dueño**: stock por estantería, sillones ocupados, probadores y zonas con más venta.
2. **El 3D de cada local no se modela a mano**: se monta con un **editor paramétrico** de piezas de catálogo (mostrador, estantería, sillón, burro de ropa) colocadas sobre el plano. Ajustar el 3D de un cliente debe costar horas, no semanas.
3. **Stack**: backend **Spring Boot** (Aaron trabaja con él a diario y quiere especializarse en Java + Angular), frontend **Angular**, base de datos **Supabase**, **Three.js** y **WebSockets**.
4. **La BD tiene dos modalidades**: la gestionamos nosotros (con cuota de mantenimiento) o el cliente recibe las credenciales de administrador y la gestiona él.
5. **Planos**: el cliente nos da su plano y **nosotros** montamos la plantilla 2D y el 3D con nuestra **librería privada de objetos**. Los objetos extra o personalizados, tanto en 2D como en 3D, cuestan más.
6. **Módulos estilo Odoo**: son las distintas partes de un TPV. Tenemos un catálogo y al cliente solo le activamos los que necesita.
7. **Motor 3D genérico**: hay clases que representan los estados y los valores, y los modelos 3D solo leen esos estados.
8. **Habrá versión para tablet.**
9. **TPV de PC con Electron**; **backend con Maven** como monolito modular (Spring Modulith); **las migraciones de cada módulo se aplican al activarlo** (como Odoo); **el MVP empieza por la peluquería**; planos aceptados: **PDF o imagen a escala, fotos + medidas y DWG/DXF**; **los precios se fijan más adelante**.

Fase actual: **solo notas e ideas de arquitectura**, sin código todavía.

Arquitectura: [[Twinpos - Arquitectura]].

## Primer análisis de Claude (histórico)
> [!note] La parte de arquitectura está superada por las decisiones de arriba y por [[Twinpos - Arquitectura]]. Sigue valiendo lo legal (Veri\*factu, IGIC) y la competencia.

**Arquitectura propuesta**
- **Núcleo común**: productos, ventas, caja, clientes, impuestos y usuarios. Monolito modular con arquitectura hexagonal (el dominio no depende de la BD ni de la interfaz).
- **Un módulo por sector**, que se activa por configuración:
  - frutería: venta por peso y balanza;
  - peluquería: agenda, citas, servicios y profesionales;
  - ropa: variantes por talla y color, y cambios y devoluciones.
- **Personalización por cliente** con configuración (*feature flags*, campos extra), sin bifurcar el código.
- **Capa 3D aparte** (Three.js): un "plano vivo" que lee del mismo backend.

**Ajustes recomendados**
- **El 3D no debe ir en la pantalla de cobro**, que tiene que ser rápida y en 2D. Su sitio es el **panel del dueño**: stock por estantería, sillones ocupados, probadores, zonas con más venta.
- **No modelar cada local a mano**: hacer un **editor paramétrico** con piezas de catálogo (mostrador, estantería, sillón, burro de ropa) que se colocan sobre el plano. Así "ajustar el 3D" son horas, no semanas.
- **Requisitos legales primero**: el software de facturación en España tiene que cumplir **Veri\*factu** (RD 1007/2023; hay que comprobar las fechas vigentes de obligatoriedad). En **Canarias** se aplica el **IGIC**, no el IVA, y en el País Vasco **TicketBAI**. El IGIC puede ser una ventaja local.
- **Competencia** (sin verificar a fondo): Square, Lightspeed, Revo, Glop, Holded… Ninguno vende un plano 3D como diferencia.

**Primer paso sugerido**: un MVP de un solo sector (con núcleo y un módulo) y el editor 3D mínimo. Después, el segundo sector para comprobar que el núcleo de verdad es común.
