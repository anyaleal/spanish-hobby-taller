# Pendientes manuales — spanishhobby.com

**Fecha:** 13 de julio de 2026
**Contexto:** todo lo que la sesión de escritura por API no pudo tocar (elementos globales de Avada, formularios y metadatos de Yoast). Cada ítem incluye la ruta exacta en el admin de WordPress.

---

## 1. Elemento global 222 de la Fusion Builder Library (2 arreglos en una sola edición)

Es el bloque "Explore More Inside Spanish Hobby" + "Helpful External Resources" que cierra las 25 páginas. Todas las URLs terminan con `[fusion_global id="222"]`; su contenido vive en la Library, no en las páginas.

**Ruta:** WP Admin → **Avada → Library** → localizar el elemento cuyo contenido es el bloque "Explore More Inside Spanish Hobby" (ID **222**; en el listado, el ID aparece al pasar el ratón sobre "Edit" o en la columna de la URL `post=222`) → editar.

Dentro, hacer estos dos cambios:

| Qué | Dice ahora (cita exacta) | Debe decir |
|---|---|---|
| Enlace del pilar 3 | `<a href="https://spanishhobby.com/everyday-spanish-2/">Real World Spanish</a>` (pasa por un 301 de Yoast) | `href="https://spanishhobby.com/real-world-spanish/"` (directo; el texto del enlace ya está bien) |
| Enlace de contacto | `<a href="https://spanishhobby.com/spanish-hobby-3/">Contacto</a>` | Texto **"Contact"** (la URL se queda) |

## 2. Título SEO de /real-world-spanish/ (Yoast)

Último resto de "Everyday Spanish" en todo el sitio: el título SEO, que se imprime en `<title>`, og:title y el schema (3 apariciones).

**Ruta:** Páginas → **Real World Spanish** → editar → caja **Yoast SEO** → campo **"SEO title"**.
- Dice ahora: `Everyday Spanish in Real Life | Spanish Hobby`
- Propuesta (en inglés, 55 car.): `Real World Spanish: How It's Actually Spoken | Spanish Hobby`

## 3. Botón de Calendly en el header

**Ruta:** WP Admin → **Avada → Layouts** → fila **Header** → editar la layout section con Fusion Builder → añadir un elemento **Button**:
- Texto: `Book your free class`
- Enlace: `https://calendly.com/hola-spanishhobby/30min`
- Target: misma pestaña o nueva, a tu gusto.

El teléfono del header **se queda visible** (decisión confirmada). Mejora opcional mientras estás ahí: convertir el teléfono y el email de la barra superior en enlaces `tel:` / `mailto:` (hoy son texto plano) y añadir el espacio que falta antes del `|`.

## 4. Formulario de contacto (/spanish-hobby-3/)

**Ruta:** WP Admin → **Avada → Forms** → editar el formulario que usa la página de contacto. Cuatro arreglos:

| Qué | Dónde dentro del builder del formulario | Dice ahora | Debe decir |
|---|---|---|---|
| Mensaje de éxito | **Form Options → Submission → Confirmation Message** | `¡Gracias! We've received your information.` | `Thank you! We've received your information.` |
| Opción del desplegable | Elemento **Select** ("Why do you want to learn Spanish") → Options | `For work or caree` | `For work or career` |
| Encabezado con signos | Elemento de título/label del mismo bloque | `Why do you want to learn Spanish????` | `Why do you want to learn Spanish?` |
| Teléfono obligatorio | Elemento **Phone Number** → opción **Required** | obligatorio | opcional (desmarcar Required) |

## 5. "Ver más" globales

**Ninguno.** Verificado: los 19 botones "Ver Más/más" estaban todos dentro de `post_content` de las 3 páginas pilar y ya se corrigieron por API. No hay nada manual aquí.

## 6. Los 301 del pilar 1 (solo para que sepas dónde viven — no tocar)

- `/everyday-spanish-2/` y `/spanish-articles-explained/` → gestionados en **Yoast SEO → Redirects**. Están bien; no tocar.
- `/spanish-morphology/` → `/spanish-phonetics/` y `/spanish-phonetics-rhythm/` → `/spanish-phonology/` → redirects **automáticos de WordPress** por "slug antiguo" (los posts se renombraron en el pasado). No hay interfaz; desaparecerán solos cuando exista un post real con ese slug. **Cuando escribas el artículo de Morphology, usa el slug `/spanish-morphology/` con confianza:** en cuanto exista, el 301 deja de activarse y el botón del pilar 1 queda correcto sin tocar nada.

---

## Al terminar los cambios manuales: purgar cachés (en este orden)

1. **Avada:** WP Admin → Avada → Performance → **Reset Fusion Caches**.
2. **Bluehost:** WP Admin → Settings → Bluehost (plugin) → Caching → **Clear/Purge Cache**.
3. **Cloudflare:** dashboard de Cloudflare → Caching → **Purge Everything** (el sitio sirve HTML a través de Cloudflare; sin esto, los visitantes pueden seguir viendo la versión vieja un tiempo).

---

*Todo lo demás de la sesión de escritura quedó aplicado y verificado por API: renombrado "Real World Spanish" (cuerpo + card + alt/caption de imagen), título "How Spanish Is Spoken", placeholder "Button Text" eliminado, "articles"→"determiners" (×2), 19 botones "Read more", menú "Contact" (×3), imagen destacada de About (2250×2250), y el bloque CTA con Calendly + Map Locator en los 19 posts.*
