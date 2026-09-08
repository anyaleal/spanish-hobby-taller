# Auditoría SEO y de calidad — spanishhobby.com

**Fecha:** 12 de julio de 2026
**Alcance:** 6 páginas + 19 publicaciones (todo el contenido publicado). Sesión de solo lectura; no se modificó nada.
**Método:** cruce de tres fuentes por URL — REST API autenticada de WordPress, HTML público renderizado (leído con un navegador real porque Cloudflare bloquea `curl`) y archivos de sitio (robots.txt, sitemaps). Los conteos de palabras son del cuerpo real del artículo, excluyendo menú, el bloque repetido "Explore More Inside Spanish Hobby" y la línea de título/fecha.

**Nota sobre el acceso:** el sitio está detrás de **Cloudflare** con un "managed challenge" (un reto de JavaScript antibots) que devuelve **403** a cualquier herramienta automática como `curl`. Solo `robots.txt` pasa. Toda la lectura de HTML y de la API se hizo desde un navegador real, que resuelve el reto solo. La conexión autenticada a la API se verificó con `GET /wp-json/wp/v2/users/me` → **200**, usuario `ANYALITERAL` (administrador).

---

## 1. Resumen ejecutivo — los 5 problemas que más dañan el negocio

El objetivo comercial es que el visitante **agende una clase 1:1 gratuita por Calendly**. Casi todos los problemas graves giran alrededor de eso.

### 1. No hay Calendly en NINGUNA página. El objetivo de negocio no tiene puerta de entrada. **(Crítico)**
Revisé el HTML crudo de las 25 URLs buscando la cadena `calendly` (enlaces, botones, JavaScript e iframes). **Cero apariciones.** La home no contiene ni la palabra "book", ni "schedule", ni "free class", ni "sign up" en ningún lugar de su texto. La única vía de contacto es un formulario en `/spanish-hobby-3/` cuyo texto dice literalmente *"Book your online free class"* pero **no enlaza a Calendly**: pide llamar por teléfono o rellenar un formulario. Un visitante que llega a un post (que es por donde entra el tráfico SEO) no tiene absolutamente ninguna llamada a la acción para reservar. **Esto solo probablemente cuesta la mayoría de las conversiones.**

### 2. Contenido crítico­mente delgado en casi todo el blog. **(Crítico para SEO)**
De 19 publicaciones, **solo una supera las 600 palabras** (`/spanish-phonology/`, 625). **15 tienen menos de 300 palabras** (umbral de "crítico"). Las más extremas: `Spanish Interjections` **140 palabras**, `Spanish Adverbs` **160**, `Spanish Syntax` **170**, `Spanish Nouns` **200**. Google rara vez posiciona páginas tan cortas frente a competidores como SpanishDict o StudySpanish, que cubren estos mismos temas con 1.500–3.000 palabras. Es el mayor freno al tráfico orgánico.

### 3. Español visible en una interfaz que debe estar 100% en inglés. **(Alto — marca)**
- La pestaña de menú (en los tres menús del sitio) dice **"Contacto"**, no "Contact".
- Los botones de las tres páginas pilar dicen **"Ver Más" / "Ver más"** (18 botones en total).
- El mensaje de éxito del formulario de contacto dice **"¡Gracias! We've received your information."**
- El título y la etiqueta social de la página de contacto son **"Contacto"**.

Esto rompe la promesa de marca justo en los puntos de mayor confianza (navegación y formulario) y confunde al visitante angloparlante.

### 4. La página del pilar "Real World Spanish" se llama a sí misma "Everyday Spanish". **(Alto — marca)**
En `/real-world-spanish/`, el H1 es **"Everyday Spanish: How It's Spoken, Mastered, and Lived"** y el título SEO es **"Everyday Spanish in Real Life"**. La palabra "Everyday Spanish" aparece 3 veces en el cuerpo. Tu framework define ese pilar como **"Real World Spanish"**. La propia página que debería anclar el término de marca usa el término equivocado.

### 5. Errores de publicación visibles y placeholders en vivo. **(Alto — credibilidad)**
- Un botón en la página "The Building Blocks" muestra el texto por defecto **"Button Text"** (placeholder de Avada publicado sin editar).
- La página de contacto tiene un desplegable con la opción **"For work or caree"** (falta la "r" de "career") y un encabezado con cuatro signos: **"Why do you want to learn Spanish????"**.
- El post "How Is Spoken" tiene por título y H1 **"How Is Spoken"**, una frase gramaticalmente incompleta (debería ser "How Spanish Is Spoken").

Cada uno de estos es pequeño, pero juntos transmiten descuido en un sitio cuyo argumento de venta es la claridad y el cuidado.

---

## 2. Diagnóstico por área

### 2.1 Metadatos (títulos, descripciones, canonical, social)

**Lo bueno primero:** cada URL tiene meta title, meta description escrita (salvo 2 excepciones), canonical autorreferencial correcto, y etiquetas Open Graph (las que usan Facebook/WhatsApp/LinkedIn al compartir). No hay títulos ni descripciones **duplicados exactos** entre URLs. Todas las páginas declaran `lang="en-US"` y tienen `meta viewport` (adaptación a móvil).

**Problemas:**

- **Meta descriptions demasiado cortas de forma sistemática.** 23 de 25 miden menos de 140 caracteres (el ideal es 140–160). Ejemplos: `/spanish-determiners/` = 91 car., `/spanish-syntax/` = 100, `/spanish-semantics-pragmatics/` = 107. No es un error grave, pero se desaprovecha la mitad del espacio disponible en Google para convencer al usuario de hacer clic.

- **Dos meta descriptions autogeneradas (cortadas a media frase).**
  - `/spanish-conjunctions/` (370 caracteres, se truncará en Google). Dice literalmente: *"Spanish Conjunctions: How to Connect Ideas Like a Native  \n \nSpanish conjunctions are the glue that holds your sentences together… conjunctions allow your thoughts to flow. Without them, your Spanish would sound"* — termina en "would sound". Es el primer párrafo copiado con saltos de línea `\n`.
  - `/spanish-syntax/` (100 car.): *"Spanish Syntax is what makes Spanish flow. It's the set of rules that tells you where each word goes"* — sin punto final, cortada.

- **Incoherencia de og:title vs título real** en `/real-world-spanish/`: el og:title dice "Real World Spanish" (correcto de marca) pero el H1 y el título visible dicen "Everyday Spanish". La etiqueta social y la página no coinciden.

- **og:image roto para compartir en `/about-us/`.** La imagen social es `Spanish-Hobby-1x.png`, de **252 × 47 px** (el logo). Al compartir la página About en redes, en vez de una tarjeta atractiva se ve el logo diminuto y deformado. Todas las demás páginas usan imágenes de 1000–1800 px (correctas). Causa: la página About es la única sin **imagen destacada** (featured image = 0), así que Yoast cae al logo por defecto.

- **Separadores de título inconsistentes.** Conviven tres patrones: `"… - Spanish Hobby"` (mayoría), `"… | Spanish Hobby"` (`/real-world-spanish/`) y títulos **sin sufijo de marca** (p. ej. "Spanish Determiners: The Words That Anchor Every Noun"). Conviene unificar.

- **Títulos cortos (<40 car.)** que desaprovechan espacio: "The Hidden Structure - Spanish Hobby" (36), "About - Spanish Hobby" (21), "Contacto - Spanish Hobby" (24), "Spanish Syntax - Spanish Hobby" (30), "How Is Spoken - Spanish Hobby" (29).

### 2.2 Estructura de contenido (H1 y jerarquía de encabezados)

- **Número de H1 incorrecto en 18 de 25 URLs.**
  - **0 H1:** `/about-us/` y `/spanish-hobby-3/` (contacto). Empiezan directamente en H2.
  - **2 H1:** 16 publicaciones. Causa: la **barra de título de Avada** genera un H1 con el título del post (p. ej. "Spanish Nouns") y además el autor añade otro H1 en el cuerpo (p. ej. "Spanish Nouns: Naming People, Places, and Things"). Ejemplo verificado en `/spanish-nouns/`: `H1: Spanish Nouns` (barra) + `H1: Spanish Nouns: Naming People, Places, and Things` (contenido).
  - **3 H1:** `/cultural-nuances-in-spanish/` y `/bridges-between-english-and-spanish/`.
  - Solo tienen exactamente 1 H1: la home, las 3 pilares, y los posts `determiners`, `phonetics`, `phonology`.

- **Encabezados vacíos:** `/spanish-phonetics/` (1 encabezado sin texto) y `/spanish-phonology/` (2). Son etiquetas de encabezado renderizadas sin contenido, probablemente separadores de Avada.

- **Salto de jerarquía H2 → H4** en todas las páginas: el bloque global "Explore More Inside Spanish Hobby" y "Helpful External Resources" usa `H4` justo después del contenido en `H2`, sin `H3` intermedio. Es menor, pero es un patrón repetido en las 25 URLs.

### 2.3 Enlazado interno

**Metodología:** conté como enlace "editorial" solo los enlaces contextuales/promocionales dentro del cuerpo (los botones "Ver Más"/"Read More" y los CTA de la home), **excluyendo** el bloque de navegación repetido "Explore More Inside Spanish Hobby" (que aparece igual en las 25 páginas y funciona como un segundo pie) y las migas de pan.

- **Los posts no enlazan a otros posts.** Cada publicación tiene **0 enlaces internos editoriales salientes**: su único contenido de navegación es el bloque global repetido. Un lector del post "Spanish Nouns" no tiene ningún enlace contextual a "Spanish Verbs" ni de vuelta al pilar "The Building Blocks". Esto desperdicia el activo SEO más barato que tienes (enlazar tu propio contenido relacionado) y deja a Google sin señales de qué páginas son importantes.

- **Cada post recibe solo 1–2 enlaces entrantes editoriales**, todos desde su página pilar. Ninguno recibe enlaces desde otros posts.

- **Enlaces internos que pasan por redirección 301.** No hay enlaces rotos (404), pero cinco destinos internos apuntan a slugs viejos que redirigen. Verificado con peticiones reales:

  | Enlace tal como está en el sitio | Estado | Redirige a |
  |---|---|---|
  | `/everyday-spanish-2/` (en el bloque global de las **25** páginas) | 301 | `/real-world-spanish/` |
  | `/spanish-articles-explained/` (botón en The Building Blocks) | 301 | `/spanish-determiners/` |
  | `/why-bridges-between-english-and-spanish-make-a-real-difference/` (botón en Real World) | 301 | `/bridges-between-english-and-spanish/` |
  | `/spanish-morphology/` (botón en The Hidden Structure) | 301 | `/spanish-phonetics/` ⚠️ **tema distinto** |
  | `/spanish-phonetics-rhythm/` (botón en The Hidden Structure) | 301 | `/spanish-phonology/` ⚠️ **tema distinto** |

  Los dos últimos son especialmente problemáticos: la página "The Hidden Structure" ofrece cinco botones (Phonetics, Phonetics & Rhythm, Morphology, Syntax, Semantics) pero solo existen ~4 artículos. Los botones de "Morphology" y "Phonetics & Rhythm" llevan a artículos de **otro tema** (Phonetics y Phonology respectivamente). El usuario espera una cosa y recibe otra.

  Además, el bloque global usa el slug antiguo `/everyday-spanish-2/` para enlazar al pilar Real World Spanish: por eso ese pilar recibe su enlace principal a través de una redirección en las 25 páginas, en vez de un enlace directo.

- **Anchor text genérico o en español.** La home usa **"Read More"** ×3 (genérico). Las pilares usan **"Ver Más"/"Ver más"** ×18 (genérico *y* en español). Un botón usa **"Button Text"**. El anchor text ideal describe el destino ("Learn about Spanish nouns"), lo que ayuda a SEO y a la accesibilidad.

### 2.4 Imágenes

**Lo bueno:** las **28 imágenes únicas tienen atributo `alt`** (0 imágenes sin alt) y todas cargan (200). Las imágenes de contenido son de 1000–1080 px, adecuadas.

**Problemas:**
- **Una imagen supera 300 KB:** `Learn-Spanish-withAnya.png` = **842 KB** (PNG, en la home). Debería reexportarse a JPG o WebP (formato moderno más ligero); una foto así debería pesar 60–120 KB. Es, con diferencia, el recurso más pesado del sitio.
- **Ninguna imagen usa WebP.** Hay varias JPG de 150–250 KB (`Structure-Spanish.jpg` 249 KB, `Spanish-adverbs.jpg` 243 KB, `Bridges…` 214 KB, `Spanish-verbs.jpg` 208 KB) que podrían bajar a la mitad en WebP. Impacto moderado.
- **`alt` derivado del nombre de archivo.** Los alt son cadenas como "Spanish-Phonology", "Spanish adverbs", "Structure-Spanish". Existen (bien), pero son etiquetas de archivo, no descripciones. Mejorable, no urgente.
- **`/about-us/` no tiene imagen destacada**, lo que provoca el og:image roto (ver 2.1).

### 2.5 Contenido duplicado y canibalización

- **No hay contenido duplicado ni títulos/descripciones duplicados exactos.** Cada post cubre una parte de la oración o un tema distinto. Bien.
- **Riesgo de solapamiento temático leve** entre categorías de "The Hidden Structure": conviven `phonetics` (1 post), `Phonology` (1 post), `Syntax` (1 post), y las categorías vacías `Morphology` y `Spanish Phonetics & Rhythm`. No es canibalización de contenido, sino desorden de taxonomías (ver 2.8).
- Las redirecciones 301 de slugs viejos (`/everyday-spanish-2/`, `/spanish-articles-explained/`, etc.) están bien resueltas: **no generan páginas duplicadas indexables**.

### 2.6 Coherencia de marca

Regla de marca: interfaz pública 100% en inglés; "determiner" (no "article") como parte de la oración; el pilar es "Real World Spanish" (no "Everyday Spanish").

| Problema | URL | Cita literal actual | Debería decir |
|---|---|---|---|
| Español en menú | Los 3 menús + `/spanish-hobby-3/` | **"Contacto"** | **"Contact"** |
| Español en botones | `/structure-of-spanish/`, `/spanish-sentence/`, `/real-world-spanish/` | **"Ver Más" / "Ver más"** (×18) | **"Read more"** / "Learn more" |
| Español en formulario | `/spanish-hobby-3/` | **"¡Gracias! We've received your information."** | **"Thank you! We've received your information."** |
| Pilar mal nombrado | `/real-world-spanish/` | H1 **"Everyday Spanish: How It's Spoken, Mastered, and Lived"** | **"Real World Spanish: How It's Spoken, Mastered, and Lived"** |
| "article" como parte de oración | `/spanish-nouns/` | **"They interact with articles (el libro – the book)"** | **"…with determiners (el libro – the book)"** |
| "article" como parte de oración | `/spanish-sentence/` | lista: **"nouns, verbs, adjectives, articles, adverbs…"** | **"…adjectives, determiners, adverbs…"** |
| Placeholder publicado | `/spanish-sentence/` | botón **"Button Text"** | **"Read more"** (o "Spanish pronouns") |
| Título/H1 roto | `/how-is-spoken/` | **"How Is Spoken"** | **"How Spanish Is Spoken"** |
| Typo en opción | `/spanish-hobby-3/` | **"For work or caree"** | **"For work or career"** |
| Encabezado con signos | `/spanish-hobby-3/` | **"Why do you want to learn Spanish????"** | **"Why do you want to learn Spanish?"** |

**Uso correcto que conviene NO tocar:** el post `/spanish-determiners/` usa "article" cinco veces, pero **de forma correcta e intencional**, enseñando la transición terminológica: *"From 'Article' to 'Determiner'… el, la, un, una are called articles. They are, but articles are only one type of determiner."* Eso es exactamente lo que pide tu regla de marca. No es un error.

**Nota menor:** el email de contacto es `hola@SpanishHobby.com` (la parte "hola" es español). Es una dirección de correo, no texto de interfaz, así que es una decisión de marca defendible; lo señalo solo por completitud.

### 2.7 Conversión

Esta sección es tan importante como el SEO, porque el tráfico sin reserva no genera ingresos.

- **Enlaces a Calendly: 0 de 25 páginas.** Es el hallazgo central. No hay botón "Book a free class" en la home, ni en las pilares, ni en los posts, ni en la página de contacto.
- **CTA actuales y adónde llevan:**
  - **Home:** tres botones "Go to the hidden structure / building blocks / real world Spanish" (llevan a las pilares). No hay ningún CTA de reserva ni de contacto. El único mensaje es explorar contenido.
  - **Páginas pilar:** botones "Ver Más" que llevan a los posts. Ningún CTA de reserva.
  - **Posts (19):** **ningún CTA propio.** El lector termina el artículo y no tiene ningún siguiente paso hacia una clase. Solo está el bloque global de navegación.
  - **Página de contacto:** un formulario Fusion (Avada). El texto invita a *"Book your online free class"* pero la reserva depende de que el usuario llame o rellene el formulario y **espere respuesta**, en vez de agendar al instante en un calendario.
- **Teléfono y email de la barra superior NO son clicables.** "Call Us Today! +1-214-683-2944| hola@SpanishHobby.com" es **texto plano**: no hay enlaces `tel:` ni `mailto:` en ninguna página. En móvil, el usuario no puede tocar para llamar. (Detalle menor añadido: falta un espacio antes del `|`.)
- **Formulario con fricción innecesaria.** Los tres campos **Name, Email y Phone Number son obligatorios**. Exigir teléfono para pedir información de una clase gratuita reduce el porcentaje de envíos; el teléfono debería ser opcional (o eliminarse si la reserva pasa a Calendly).

**Resumen de conversión:** el embudo hoy es *contenido → … → nada*. Falta el paso final en cada página.

### 2.8 Técnico del sitio (una sola vez)

- **robots.txt:** correcto. Bloque de Yoast, no bloquea nada (`Disallow:` vacío), y apunta al sitemap. Sin problemas.
- **HTTPS / contenido mixto:** correcto. `http://` redirige a `https://`. Revisé recursos cargados (img, script, css, iframe) en las 25 páginas: **ningún recurso se carga por http**. (El único `http://` es el enlace externo a `http://anyaliteral.com`, que redirige a https; ver más abajo.)
- **Dominio canónico:** `https://spanishhobby.com` (sin www). Verificado: `http://` y `http://www` redirigen (301) a `https://spanishhobby.com`. **No hay problema de dominios duplicados en 200.** (`https://www.spanishhobby.com` da el mismo challenge de Cloudflare, no un 200 duplicado.)
- **Sitemap — incluye basura de plantillas de Avada.** `sitemap_index.xml` enlaza a:
  - `fusion_tb_category-sitemap.xml` → archivos `content`, `footer`, `header`, `page_title_bar`
  - `element_category-sitemap.xml` → archivos `elements`, `sections`

  Son taxonomías **internas del constructor Avada**, sin valor para el usuario ni para Google. No deberían estar en el sitemap ni ser indexables. El `author-sitemap.xml` (un solo autor) también aporta poco y suele generar un archivo que duplica el blog.
- **Estructura de URLs — un slug sin sentido.** La página de contacto vive en **`/spanish-hobby-3/`**, un slug autogenerado sin significado. Debería ser `/contact/`. (El resto de slugs son buenos y descriptivos.)
- **Taxonomías vacías o casi vacías** (generan archivos sin valor):
  - `Morphology` — 0 posts
  - `Spanish Phonetics & Rhythm` — 0 posts
  - `Tutoring` — 0 posts
  - `Uncategorized` — 0 posts
  - Casi vacías (1 post): `phonetics`, `Phonology`, `Syntax`
  - Además, inconsistencia de mayúsculas: "Building blocks", "Real world Spanish", "The hidden structure", "phonetics" (minúscula). No hay etiquetas (tags), así que no generan archivos de tags vacíos.
- **Datos estructurados (schema):** presentes y correctos. Las páginas tienen `WebPage`, `BreadcrumbList`, `WebSite`; los posts añaden `Article`, `ImageObject` y `Person`. Falta oportunidad: `Organization` (o `LocalBusiness`, ya que hay teléfono) a nivel de sitio, y `FAQPage` en páginas con preguntas. No hay errores de parseo de schema.
- **Velocidad (medible con matices).**
  - **Primera carga en frío (home): TTFB ≈ 3,3 s, carga completa ≈ 4,3 s.** Importante: esa primera carga incluye la resolución del reto de Cloudflare, así que **no puedo separar cuánto es lentitud del servidor y cuánto es el challenge**. No debe leerse como "el servidor tarda 3,3 s" sin ese matiz.
  - **Cargas en caliente (con Cloudflare ya cacheando): < 1 s**, peso de página ≈ 443–473 KB, ~15 peticiones, JavaScript ≈ 243 KB, CSS ≈ 230 KB por página.
  - **No medible desde aquí:** los Core Web Vitals reales de campo (LCP, CLS, INP —métricas de experiencia de carga, estabilidad visual e interactividad—) no se pueden medir con este método; requieren datos de usuarios reales (Google Search Console / PageSpeed Insights). Lo señalo en vez de estimarlo.
- **Móvil:** todas las páginas tienen `meta viewport` correcta. (Observación menor: en la página de contacto el menú de escritorio aparece colapsado en hamburguesa, distinto de la home; posible plantilla de cabecera diferente asignada a esa página.)
- **Enlaces externos (6, repetidos en las 25 páginas, en "Helpful External Resources"):** ninguno roto.
  - `http://anyaliteral.com/` → 301 → `https://anyaliteral.com/` (funciona; conviene enlazar directo a `https://`).
  - `conjuguemos.com`, `fluentu.com/spanish`, `spanishdict.com` → 200 ✓
  - `bbc.co.uk/languages/spanish` → 200, pero **la BBC descontinuó su sección Languages** hace años; conviene verificar manualmente que aún aporte valor.
  - `wordreference.com` → devuelve **418** a comprobadores automáticos (protección antibot); para usuarios reales funciona. No verificable desde aquí.

---

## 3. Tabla de contenido delgado

Umbral: <600 palabras = delgado; <300 = crítico. Conteo del cuerpo real (sin menú, sin el bloque global repetido, sin la línea de título/fecha). Objetivo sugerido: llevar cada parte de la oración a ~700–900 palabras (definición + reglas + 4–6 ejemplos en contexto + errores típicos + mini-práctica), y los temas de "Hidden/Real World" a ~800–1.200.

| # | URL | Palabras | Estado | Objetivo sugerido |
|---|---|---:|---|---:|
| 1 | /spanish-interjections/ | 140 | 🔴 crítico | 700 |
| 2 | /spanish-adverbs/ | 160 | 🔴 crítico | 800 |
| 3 | /spanish-syntax/ | 170 | 🔴 crítico | 900 |
| 4 | /spanish-nouns/ | 200 | 🔴 crítico | 900 |
| 5 | /spanish-conjunctions/ | 210 | 🔴 crítico | 700 |
| 6 | /cultural-nuances-in-spanish/ | 223 | 🔴 crítico | 900 |
| 7 | /spanish-language-skills/ | 225 | 🔴 crítico | 800 |
| 8 | /how-is-spoken/ | 229 | 🔴 crítico | 800 |
| 9 | /spanish-adjectives/ | 232 | 🔴 crítico | 800 |
| 10 | /spanish-mistakes-for-english-speakers/ | 246 | 🔴 crítico | 1.000 |
| 11 | /bridges-between-english-and-spanish/ | 261 | 🔴 crítico | 900 |
| 12 | /spanish-semantics-pragmatics/ | 278 | 🔴 crítico | 900 |
| 13 | /learn-spanish-naturally/ | 278 | 🔴 crítico | 900 |
| 14 | /spanish-prepositions/ | 280 | 🔴 crítico | 800 |
| 15 | /spanish-pronouns/ | 289 | 🔴 crítico | 900 |
| 16 | /spanish-phonetics/ | 317 | 🟠 delgado | 800 |
| 17 | /spanish-verbs/ | 335 | 🟠 delgado | 1.000 |
| 18 | /spanish-determiners/ | 377 | 🟠 delgado | 900 |
| 19 | /spanish-phonology/ | 625 | 🟢 aceptable | mantener/ampliar |

Referencia de páginas (no son "posts" pero conviene enriquecerlas): Home 362, The Hidden Structure 397, Real World Spanish 540, The Building Blocks 612, About 339, **Contact 87** (muy escueta; aceptable en una página de contacto, pero con 87 palabras no aprovecha para explicar cómo es la clase gratuita).

**Prioriza por tráfico potencial:** las páginas "parte de la oración" (nouns, verbs, adjectives, pronouns…) son las que más se buscan; empieza por ampliar esas.

---

## 4. Mapa de enlazado interno

**Estructura actual (hub-and-spoke roto):**

```
Home ──► The Hidden Structure ──► phonetics, phonology, syntax, semantics   (vía "Ver Más", 2 con redirección de tema distinto)
     ──► The Building Blocks   ──► nouns, verbs, adjectives, determiners,    (vía "Ver Más" + 1 "Button Text";
                                    adverbs, pronouns, prepositions,           el enlace a determiners pasa por /spanish-articles-explained/ 301)
                                    conjunctions, interjections
     ──► Real World Spanish    ──► how-is-spoken, learn-naturally,           (vía "Ver más"; bridges pasa por slug largo 301)
                                    language-skills, mistakes, bridges,
                                    cultural-nuances
     ──► (Read More) ──► semantics, interjections, cultural-nuances          (3 excerpts en la home)

Cada post ──► (solo el bloque global repetido: Home, About, 3 pilares, Contacto) ──► NADA editorial
```

**Enlaces entrantes editoriales por URL** (excluyendo el bloque global repetido y migas):

- **Páginas huérfanas de verdad (0 entrantes, y encima en el sitemap):** los 6 archivos de categoría (`/category/building-blocks/`, `/category/phonetics/`, `/category/phonology/`, `/category/real-world-spanish/`, `/category/syntax/`, `/category/the-hidden-structure/`). Nada del cuerpo de ninguna página enlaza a ellos.
- **Huérfanas de contenido (0 entrantes editoriales; solo llegan por el menú):** `/about-us/` y `/spanish-hobby-3/` (contacto).
- **Pilares:** 1 entrante editorial cada una (desde la home). Real World Spanish, además, recibe su enlace del bloque global a través de la redirección `/everyday-spanish-2/`.
- **Posts:** 1–2 entrantes cada uno, **todos desde su pilar**. Ninguno recibe enlaces de otros posts.
- **Salientes editoriales de cada post: 0.** Este es el punto más débil del mapa.

**Qué falta:** enlaces contextuales entre posts hermanos (p. ej., desde "Spanish Nouns" hacia "Spanish Adjectives" y "Spanish Determiners", porque interactúan gramaticalmente), y un enlace de vuelta de cada post a su pilar. Eso reparte autoridad y mantiene al lector navegando hacia la conversión.

---

## 5. Lo que ya está bien (no todo es mejorable)

- **La arquitectura de marca es sólida y clara:** los tres pilares (The Hidden Structure, The Building Blocks, Real World Spanish) están bien montados como páginas hub, con imágenes propias y descripciones cuidadas.
- **Terminología "determiner" bien enseñada** en `/spanish-determiners/`: explica la transición desde "article" de forma pedagógicamente correcta.
- **Metadatos base bien puestos:** meta titles y descriptions escritos a mano en su mayoría, canonical autorreferencial en todas, Open Graph presente, sin duplicados exactos.
- **Schema correcto:** Article, BreadcrumbList, WebSite, Person, ImageObject bien emitidos por Yoast, sin errores.
- **Accesibilidad de imágenes:** el 100% de las imágenes tiene `alt`.
- **Higiene técnica base:** HTTPS forzado, sin contenido mixto, dominio canónico único, `robots.txt` correcto, `viewport` en todas, sin borradores ni contenido a medio publicar en la API.
- **Slugs descriptivos** en casi todo el sitio (excepto la página de contacto).
- **Peso de página razonable en caliente** (~450 KB), y Cloudflare cachea bien el HTML para visitas recurrentes.
- **Todo el contenido está en inglés a nivel de artículo** (el español solo aparece, correctamente, como ejemplos de idioma). Los deslices de español están en la interfaz (menú, botones, formulario), no en la redacción.

---

*Fin del informe. El plan de acción priorizado está en `plan-de-accion.md`. El detalle URL por URL está en `inventario.csv`.*
