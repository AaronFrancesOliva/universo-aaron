---
tags: [red-neuronal, metodo]
actualizado: 2026-10-06
---

# Método — cómo trabajo en este vault

## Leer PDFs
- `pdftotext` (Git Bash) funciona con PDFs de texto: manual de GEI, resúmenes, glosarios, preguntas frecuentes de FSD.
- Los libros de FSD están **escaneados**: `pdftotext` devuelve casi nada y la herramienta Read no renderiza PDFs (falta `pdftoppm`). Solución: **PyMuPDF** (`import pymupdf`, instalado con `pip install --user pymupdf`): `page.get_pixmap()` a PNG en el scratchpad y leer las imágenes. `doc.get_toc()` da los marcadores por tema.
- Para textos largos: extraer por rangos de páginas con un script que limpie espacios y guiones (≈ 500 líneas por lectura).
- Las claves de los test del manual de GEI salen desalineadas al extraer: resolver razonando.

## Correspondencias de páginas
- GEI manual: PDF ≈ impresa + 17. FSD teoría: PDF = impresa − 6.

## Permisos y límites
- El modo automático bloqueó un `mv` masivo de PDFs en `UNED/AÑO 1/CUATRIMESTRE 1/GESTION DE EMPRESAS/` (2026-10-06): mover archivos de Aaron requiere su permiso explícito.
- Los heredocs muy largos en Bash pueden fallar al parsear; para textos largos usar la herramienta Write.
- El scratchpad de cada sesión es temporal: lo que deba recordar va a esta red o a [[MEMORY]].

## Sincronización con el iPad
- Remotely Save (plugin, gratis) + OneDrive (App Folder; solo cuentas personales, no OneDrive for Business). Excluir `^UNED/LIBROS/`. No sincronizar `.obsidian` (rompería plugins de escritorio como Lean Terminal). La sincronización no es instantánea: botón o intervalo automático.
- Lo que yo no puedo hacer: iniciar sesión en OneDrive ni tocar el iPad.

- **Lectura rápida de libros escaneados (2026-10-07)**: mosaico de **4 páginas por imagen** (2×2, escala 1,0, gris, recortando un 6 % del margen izquierdo, 4 % del derecho, 8 % arriba y 6 % abajo) → unas 1074×1450 px y se lee bien. Script `render4.py` (código al final de esta nota; guardarlo en el scratchpad para usarlo): `python -E render4.py <pdf> <primera> <última> <carpeta> 1.0`. Hay que ejecutarlo con `-E` (no con `-I`) para que encuentre `pymupdf` en el site-packages del usuario. No hay Tesseract (sin OCR).
- **Archivos de texto largos**: la herramienta Read se corta en 25.000 tokens; leer por trozos (`offset`/`limit`) o filtrar antes con `grep`/`awk` (definiciones, proposiciones, "Nota", "Observación").
- **Exámenes en HTML con MathML (FSD)**: para sacar el texto, quitar `<script>`/`<style>`, convertir `<img>` en `[FIGURA]` y saltos de bloque en `
`, y quitar el resto de etiquetas; en Python, `sys.stdout.reconfigure(encoding='utf-8')` (la consola es cp1252).

### render4.py
```python
import pymupdf,sys
src,first,last,out,zoom=sys.argv[1],int(sys.argv[2]),int(sys.argv[3]),sys.argv[4],float(sys.argv[5])
d=pymupdf.open(src)
# crop margins: detect content bbox roughly by trimming 7% top/bottom, 6% sides
for a in range(first,last+1,4):
    pages=[p for p in range(a,a+4) if p<=last]
    pix=[]
    for p in pages:
        pg=d[p-1]; r=pg.rect
        clip=pymupdf.Rect(r.x0+r.width*0.06,r.y0+r.height*0.08,r.x1-r.width*0.04,r.y1-r.height*0.06)
        pix.append(pg.get_pixmap(matrix=pymupdf.Matrix(zoom,zoom),colorspace=pymupdf.csGRAY,clip=clip))
    pw=max(p.width for p in pix); ph=max(p.height for p in pix)
    canvas=pymupdf.Pixmap(pymupdf.csGRAY,pymupdf.IRect(0,0,pw*2,ph*2),False); canvas.clear_with(255)
    for i,p in enumerate(pix):
        p.set_origin((i%2)*pw,(i//2)*ph); canvas.copy(p,p.irect)
    canvas.save(f"{out}/q{a:03d}.png")
print('ok')
```
