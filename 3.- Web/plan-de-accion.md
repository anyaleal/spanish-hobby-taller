# Plan de acción — spanishhobby.com

Ordenado en tres bloques por relación impacto/esfuerzo. Cada acción indica **quién la ejecuta**:

- **API** = Claude Code puede hacerlo por la REST API de WordPress (con tu Application Password).
- **Avada** = manual en el constructor Fusion Builder de Avada. **No se puede hacer por API de forma fiable** (el contenido vive como shortcodes/elementos visuales de Fusion).
- **Yoast** = manual en la interfaz de Yoast SEO (los metadatos de Yoast gratuito son "meta protegida" y no se escriben bien por REST).

> **Límite importante:** la mayoría de arreglos de contenido, botones, formularios, CTA y cabecera/pie están dentro de elementos de Fusion Builder. **Esos hay que tocarlos a mano en Avada.** Lo que sí es limpio por API está marcado con ✅ API en la última columna.

Los textos propuestos para el sitio están en **inglés**, como corresponde a la marca.

---

## BLOQUE 1 — Alto impacto y bajo esfuerzo (hacer esta semana)

| # | Acción | URL(s) | Ejecuta | Min | Impacto | API |
|---|---|---|---|---:|---|---|
| 1 | **Añadir un botón global "Book your free class" que enlace a Calendly.** Colócalo en un elemento global (p. ej. dentro del bloque "Explore More Inside Spanish Hobby" o un CTA de pie global) para que aparezca de una vez en las 25 páginas. Es la acción de mayor retorno del sitio. | Todo el sitio | Avada | 30 | 🔴 Alto | ❌ |
| 2 | **Quitar el placeholder "Button Text".** Cambiar el texto del botón que apunta a pronouns por **"Read more"**. | /spanish-sentence/ | Avada | 5 | 🟠 Medio-alto | ❌ |
| 3 | **Traducir el mensaje de éxito del formulario.** "¡Gracias! We've received your information." → **"Thank you! We've received your information."** | /spanish-hobby-3/ | Avada (elemento Form) | 5 | 🟠 Medio-alto | ❌ |
| 4 | **Arreglar el desplegable del formulario.** "For work or caree" → **"For work or career"**; encabezado "Why do you want to learn Spanish????" → **"Why do you want to learn Spanish?"** | /spanish-hobby-3/ | Avada (Form) | 5 | 🟠 Medio | ❌ |
| 5 | **Renombrar la pestaña de menú "Contacto" → "Contact"** (afecta a los 3 menús: ítems 155, 36, 648). | Menús (todo el sitio) | API ✅ *(o Apariencia ▸ Menús)* | 10 | 🔴 Alto | ✅ |
| 6 | **Hacer opcional el campo Phone Number** del formulario (quitar el asterisco de obligatorio). Reduce fricción para pedir la clase gratuita. | /spanish-hobby-3/ | Avada (Form) | 5 | 🟠 Medio-alto | ❌ |
| 7 | **Corregir "Everyday Spanish" → "Real World Spanish"** en H1, título SEO y las 3 menciones del cuerpo. H1 propuesto: **"Real World Spanish: How It's Spoken, Mastered, and Lived"**. Título SEO propuesto: **"Real World Spanish: How Spanish Is Actually Spoken — Spanish Hobby"**. | /real-world-spanish/ | Avada (H1/cuerpo) + Yoast (título) | 15 | 🔴 Alto | ❌ |
| 8 | **Corregir "articles" → "determiners" como parte de la oración** en dos sitios: la lista de partes en Building Blocks ("…adjectives, **determiners**, adverbs…") y en el post de Nouns ("…interact with **determiners** (el libro – the book)"). ⚠️ **No tocar `/spanish-determiners/`**, que usa "article" correctamente a propósito. | /spanish-sentence/, /spanish-nouns/ | Avada | 10 | 🟠 Medio-alto | ❌ |
| 9 | **Arreglar el título roto "How Is Spoken" → "How Spanish Is Spoken"** (título del post y H1 de contenido). Al cambiar el título del post se corrige también el H1 de la barra de Avada. | /how-is-spoken/ | API ✅ (título) + Avada (H1 cuerpo) | 10 | 🟠 Medio | Parcial |
| 10 | **Poner imagen destacada a la página About** (arregla el og:image roto de 252×47). Sube o asigna una imagen de ≥1200×630. | /about-us/ | API ✅ *(featured_media, si la imagen ya existe)* o Avada | 10 | 🟠 Medio-alto | ✅ |
| 11 | **Optimizar la imagen de 842 KB** `Learn-Spanish-withAnya.png`: reexportar a WebP o JPG (objetivo <120 KB) y reemplazar. | Home | Manual (media) / plugin | 15 | 🟠 Medio | ❌ |
| 12 | **Hacer clicables el teléfono y el email de la barra superior** (`tel:[número removido]` y `mailto:hola@spanishhobby.com`). Hoy son texto plano. Corregir también el espacio que falta antes del `|`. | Cabecera global | Avada (header global) | 10 | 🟠 Medio | ❌ |
| 13 | **Enlazar directo al pilar Real World Spanish.** El bloque global usa el slug viejo `/everyday-spanish-2/` (301). Cambiarlo a `/real-world-spanish/` en las 25 páginas de una vez (elemento global). | Todo el sitio | Avada (elemento global) | 5 | 🟠 Medio | ❌ |

**Subtotal Bloque 1: ~2 horas de trabajo. Aquí está la mayor parte de la mejora de marca y el arranque de la conversión.**

---

## BLOQUE 2 — Alto impacto y alto esfuerzo (planificar)

| # | Acción | URL(s) | Ejecuta | Esfuerzo | Impacto | API |
|---|---|---|---|---|---|---|
| 1 | **Ampliar el contenido delgado.** Reescribir/expandir los 18 posts por debajo de 600 palabras hasta 700–1.000 (definición + reglas + 4–6 ejemplos en contexto + errores típicos + mini-práctica). Es la mayor palanca de tráfico orgánico. Empezar por las "partes de la oración" (nouns, verbs, adjectives, pronouns), que son las más buscadas. Ver tabla de objetivos en el informe. | 18 posts | Avada (redacción) | ~30–45 min × 18 ≈ 10–13 h | 🔴 Alto | ❌ |
| 2 | **Corregir la estructura de H1 en todo el blog.** 16 posts tienen 2 H1 (barra de título de Avada + H1 de contenido) y 2 páginas tienen 0. Decidir una estrategia única: lo más limpio es dejar el H1 de la barra de título de Avada como único H1 y **degradar a H2 el primer encabezado del cuerpo** (o viceversa). Aplicar a About y Contacto un H1 real. | 18 URLs | Avada (opciones de plantilla) | 2–3 h | 🔴 Alto | ❌ |
| 3 | **Rediseñar la reserva como Calendly incrustado.** En la página de contacto, sustituir/complementar el formulario por un **embed de Calendly** ("Book your free 1:1 Spanish class") para que el usuario agende al instante. Mantener el formulario solo como alternativa. | /spanish-hobby-3/ | Avada | 1–2 h | 🔴 Alto | ❌ |
| 4 | **Enlazado interno editorial.** Añadir en cada post: (a) un enlace de vuelta a su pilar, y (b) 2–3 enlaces contextuales a posts hermanos relacionados (p. ej., Nouns ↔ Adjectives ↔ Determiners). Y resolver los dos botones de Hidden Structure que llevan a temas distintos: o **escribir** los artículos de "Morphology" y "Phonetics & Rhythm", o **relabelar/quitar** esos botones. | Todos los posts + /structure-of-spanish/ | Avada | 3–4 h | 🔴 Alto | ❌ |
| 5 | **Reescribir todas las meta descriptions a 140–160 car.**, hechas a mano. Prioridad: las 2 autogeneradas (`/spanish-conjunctions/`, `/spanish-syntax/`) y las 23 demasiado cortas. | 25 URLs | Yoast | 2 h | 🟠 Medio | ❌ |
| 6 | **CTA de conversión al final de cada post** (además del global): una sección "Ready to practice this with a real teacher? Book your free class" enlazando a Calendly. Refuerza la conversión donde llega el tráfico SEO. | 19 posts | Avada | 1–2 h | 🔴 Alto | ❌ |

---

## BLOQUE 3 — Bajo impacto (opcional)

| # | Acción | URL(s) | Ejecuta | Min | Impacto | API |
|---|---|---|---|---:|---|---|
| 1 | **Sacar del sitemap/índice las taxonomías internas de Avada** (`fusion_tb_category`: content/footer/header/page_title_bar; `element_category`: elements/sections) y el archivo de autor. En Yoast ▸ Apariencia en el buscador, marcarlas como no indexadas. | Sitio | Yoast | 15 | 🟠 Bajo-medio | ❌ |
| 2 | **Limpiar categorías vacías**: borrar o fusionar `Morphology`, `Spanish Phonetics & Rhythm`, `Tutoring`. Unificar mayúsculas ("Building Blocks", "Real World Spanish", "The Hidden Structure", "Phonetics"). | Taxonomías | API ✅ *(borrar/renombrar)* | 15 | 🟢 Bajo | ✅ |
| 3 | **Cambiar el slug de contacto** `/spanish-hobby-3/` → `/contact/` **con redirección 301** del viejo al nuevo (necesitas un plugin de redirects o Yoast Premium; sin redirect no lo hagas o romperás enlaces). | /spanish-hobby-3/ | Manual (+redirect) | 20 | 🟠 Bajo-medio | Parcial |
| 4 | **Unificar separadores de título** ("-" vs "|" vs sin sufijo) y alargar los títulos cortos (About, Contact, Syntax, Phonetics, Hidden Structure). | Varias | Yoast | 30 | 🟢 Bajo | ❌ |
| 5 | **Convertir a WebP** el resto de JPG de 150–250 KB (adverbs, structure, bridges, verbs…). | Media | Plugin/manual | 30 | 🟢 Bajo | ❌ |
| 6 | **Mejorar el texto alt** de las imágenes (hoy es el nombre de archivo: "Spanish-adverbs" → "Illustration of Spanish adverbs modifying a verb"). | Media | API ✅ *(alt en media)* o manual | 30 | 🟢 Bajo | ✅ |
| 7 | **Enlazar `anyaliteral.com` por https** directamente (hoy es `http://`, redirige). Y **verificar el enlace a BBC Languages** (sección descontinuada por la BBC); reemplazar si ya no aporta. | Bloque de recursos | Avada | 10 | 🟢 Bajo | ❌ |
| 8 | **Añadir schema `Organization`/`LocalBusiness`** (hay teléfono) a nivel de sitio y `FAQPage` en páginas con preguntas. | Sitio | Yoast/manual | 30 | 🟠 Bajo-medio | ❌ |
| 9 | **Arreglar encabezados vacíos** (`/spanish-phonetics/` ×1, `/spanish-phonology/` ×2) y el salto H2→H4 del bloque global. | 2 posts + global | Avada | 20 | 🟢 Bajo | ❌ |
| 10 | **Unificar la plantilla de cabecera** de la página de contacto (aparece en hamburguesa en escritorio, distinta de la home). | /spanish-hobby-3/ | Avada | 15 | 🟢 Bajo | ❌ |

---

## Resumen de ejecución

- **Lo que Claude Code puede hacer por API** (con tu permiso, en otra sesión de escritura): renombrar "Contacto"→"Contact" en el menú (B1-5), fijar imagen destacada en About (B1-10), cambiar el título del post "How Is Spoken" (B1-9), borrar/renombrar categorías vacías (B3-2), mejorar alt de imágenes (B3-6). Los metadatos de Yoast **no** son fiables por API en la versión gratuita.
- **Lo que hay que hacer sí o sí a mano en Avada**: todo lo que sea botones, CTA de Calendly, formulario, cabecera/pie global, H1 de la barra de título, y la redacción/ampliación del contenido. Es la mayor parte del trabajo, porque el sitio está construido con Fusion Builder.
- **Prioridad número uno del negocio**: Bloque 1, acción 1 (CTA global a Calendly) + Bloque 2, acción 3 (Calendly incrustado en contacto). Sin eso, el SEO trae visitas que no se convierten en clases.

*Este plan no ejecuta ningún cambio: es solo la hoja de ruta. Cuando quieras, puedo implementar en una sesión de escritura las acciones marcadas ✅ API.*
