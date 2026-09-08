# Plantilla técnica de publicación · Spanish Hobby

Este documento define cómo se **publica** un artículo en SpanishHobby.com (WordPress + Avada + Yoast).
Es para Claude Code. La escritura del contenido va en `plantilla-editorial.md`; esto es solo el proceso de publicación.
El estándar de referencia es `/spanish-morphology/`: si dudas de un valor, míralo ahí.

---

## Reglas de sesión (siempre, sin excepción)

1. Pide usuario y Application Password. Verifica con `GET /wp-json/wp/v2/users/me` antes de tocar nada.
2. Muestra el borrador y los valores de todos los campos **antes** de publicar. Espera aprobación explícita.
3. No toques ningún otro post ni página. Solo el que se está publicando.
4. Al verificar, muestra la respuesta **cruda** de la API (el GET real), no un resumen. Un campo se da por hecho solo cuando el GET lo devuelve con el valor correcto.
5. Recuerda que la caché puede ocultar cambios ya hechos. Nunca confundas "el sitio en vivo aún muestra lo viejo" con "el cambio falló". La fuente de verdad es la base de datos (el editor de WordPress o el GET a la API), no el HTML público.

---

## Campos que se escriben por API

Todos estos se escriben vía REST. Todos se verifican con un GET posterior.

| Campo | Dónde | Valor |
| --- | --- | --- |
| Título | `title` | Del bloque de metadatos del .md |
| Slug | `slug` | `spanish-[tema]`, exacto |
| Estado | `status` | `publish` |
| Contenido | `content` | HTML limpio (ver abajo) |
| Categoría | `categories` | Pilar + subcategoría (ver tabla de categorías) |
| Imagen destacada | `featured_media` | ID del media item |
| **Excerpt** | `excerpt` | **Igual a la meta description** |
| Título SEO | `meta._yoast_wpseo_title` | Del bloque de metadatos, máx. 60 caracteres |
| Meta description | `meta._yoast_wpseo_metadesc` | Del bloque de metadatos, máx. 155 caracteres |
| Focus keyphrase | `meta._yoast_wpseo_focuskw` | `Spanish [tema]` |
| Alt de la imagen | Campo `alt_text` del media item | Frase natural con la keyphrase |

**EXCERPT OBLIGATORIO:** al publicar o actualizar **cualquier** post, el campo `excerpt` debe escribirse **en el mismo PUT** con EXACTAMENTE el mismo texto de la meta description de Yoast (`_yoast_wpseo_metadesc`). **Nunca dejar el excerpt vacío:** si queda vacío, WordPress usa el cuerpo completo como resumen y las tarjetas de la página del pilar (y las listas de categorías, posts relacionados y archivo del blog) se desbordan. Al verificar cada post, confirmar que `excerpt` y `_yoast_wpseo_metadesc` coinciden **palabra por palabra**.

**El alt de la imagen** se edita en el media item, no en el `post_content`.

---

## Campos que NO se pueden escribir por API

No los intentes. Anótalos como pendiente manual y sigue.

- **Related keyphrases de Yoast Premium** (`_yoast_wpseo_focuskeywords`): no expuesto por REST. Además, no se publican en el HTML ni afectan el posicionamiento: son una lista de chequeo interna de Yoast. Prioridad baja. Se pueden saltar sin coste.
- **Bloque global de Avada (ID 222, "Explore More Inside Spanish Hobby")**: es un elemento global de Avada. No editable por API. Se referencia con su shortcode dentro del contenido (ver abajo), pero su contenido interno solo se edita a mano en Avada > Library.

---

## Formato del contenido (`post_content`)

- Convierte el markdown a **HTML limpio, sin shortcodes de Fusion** (salvo el del bloque global, más abajo).
- **Sin H1 en el cuerpo.** El título del post lo genera la plantilla de Avada. El cuerpo empieza en el primer párrafo.
- Secciones con **H2**. Subsecciones con H3 si hacen falta.
- Tablas en **HTML estándar**: `<table>`, `<tr>`, `<th>`, `<td>`. Nada de shortcodes de tabla de Fusion.
- El español va en `<em>` (cursiva).
- **No incluyas el bloque de metadatos del .md en el cuerpo.** Eso son instrucciones, no contenido.

---

## Bloque CTA (se copia, no se reescribe)

Al final del `post_content`, copia **byte a byte** el bloque CTA que ya está en `/spanish-nouns/` (ID 5753). Es la caja con:
- fondo `#F7F5F1`
- borde naranja `#C8662A`
- intro: "Book two free 1:1 Spanish classes over Zoom..."
- **primer botón, secundario (borde naranja `#C8662A`, sin relleno):** "Download The Spanish Map" → `https://library.spanishhobby.com`
- **segundo botón, sólido naranja:** "Book your two free classes" → `https://calendly.com/hola-spanishhobby/30min` (el enlace reserva una cita a propósito: la 1.ª clase; la 2.ª por la minuta)
- enlace "try the Map Locator" → `https://library.spanishhobby.com/map-locator`

No lo improvises ni lo reconstruyas de memoria. Cópialo del post real. (Actualizado el 2 sep 2026: se añadió el botón del mapa como primer botón y el wording pasó a dos clases en los 21 posts.)

**Después del CTA**, va el bloque global de Avada, exactamente como en los otros posts:

```
[fusion_global id="222"]
```

Este bloque es el que dice "Explore More Inside Spanish Hobby". Va en todos los posts por coherencia.

---

## Categorías

Cada post lleva **el pilar más su subcategoría propia**. Ese es el patrón que usan Phonetics y Syntax.

| Pilar | ID del pilar | Subcategorías conocidas |
| --- | --- | --- |
| The Hidden Structure | 43 | Phonetics 49, Syntax 45, Morphology 44 |
| The Building Blocks | (verificar) | (verificar por tema) |
| Real World Spanish | (verificar) | (verificar por tema) |

Si la subcategoría del tema no existe todavía, avísame antes de crearla. No la crees por tu cuenta.

---

## Después de publicar: verificación

1. Confirma que `https://spanishhobby.com/spanish-[tema]/` responde **200** en vivo.
2. Confirma que `<meta name="description">` en el HTML sirve **la meta description que pusimos**, no el párrafo de apertura del artículo. (Si aún muestra lo viejo, puede ser caché: dilo, no lo des por fallido.)
3. Si el tema tenía un **redirect antiguo** (301 hacia otro post), confirma que desapareció y que la URL ahora responde 200 directa.
4. Si el tema aparece como **botón en la página del pilar** correspondiente, confirma que ese botón ahora lleva al artículo correcto.

---

## Recordatorio de caché (al final, siempre)

Recuérdame purgar, en este orden:

1. **Avada** → Options → Performance → Reset Fusion Caches
2. **Bluehost** → barra superior → Caching → Purge
3. **Cloudflare (solo si tras 1 y 2 el sitio en vivo sigue mostrando lo viejo):** la purga se pide al soporte/panel de Bluehost, no desde la cuenta de Cloudflare de Anya (ver nota CLOUDFLARE abajo).

**CLOUDFLARE:** SpanishHobby.com SÍ está detrás de Cloudflare (managed challenge, probablemente activado por Bluehost/Newfold; invisible en la cuenta de Cloudflare de Anya porque no tiene dominios conectados). Consecuencia técnica: curl da 403 a todo, incluido `/wp-json/`. La única vía a la REST API es un navegador real que resuelve el reto pasivamente + `fetch()` al mismo origen (hereda la cookie `cf_clearance`). Para caché: purgar Avada + Bluehost primero; si algo sigue rancio, el siguiente sospechoso es Cloudflare, y esa purga se pide al soporte/panel de Bluehost, no desde la cuenta de Cloudflare de Anya.

No purgues tú nada automáticamente. Solo recuérdamelo: la purga la hago yo, y solo después de verificar en la base de datos que los cambios están.

---

## Resumen del flujo

1. Lee el `.md` del artículo (contenido + bloque de metadatos).
2. Pide credenciales, verifica con `/users/me`.
3. Arma el borrador: HTML limpio, CTA de /spanish-nouns/, bloque global 222.
4. Muéstrame todos los campos. Espera OK.
5. Publica y escribe todos los campos por API, incluido el excerpt = meta description.
6. Verifica cada campo con GET crudo.
7. Corre las verificaciones en vivo (200, meta, redirect, botón del pilar).
8. Recuérdame limpiar caché.
