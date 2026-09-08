# Spanish Hobby — Design System

A calm, editorial design system for **Spanish Hobby** — a free educational
platform that helps English speakers discover how Spanish *really* works through
pattern recognition and structure, not memorization.

> **Brand in one line:** MasterClass meets National Geographic, for the Spanish
> language. Calm, curious, intelligent. Never gamified, never rushed.

**Brand IS:** NYT · Audible · Notion · MasterClass.
**Brand is NOT:** Duolingo · a travel phrasebook · a beginner streak app.

---

## Sources this system was built from

No codebase or Figma file was provided. The system was reverse-engineered from
**11 screenshots of the live site (spanishhobby.com)** plus an explicit written
brand brief. Captured surfaces:

- Home — "Learn Spanish Without Even Trying" (hero, feature trio, "100% free"
  band, Latest articles, footer)
- The Hidden Structure (`/structure-of-spanish/`) — prose + topic stack
- The Building Blocks (`/spanish-sentence/`) — parts-of-speech grid
- About (`/about-us/`) — "Rooted in Language", Anya bio, "Hola" treatment

Provided assets: `uploads/SH-YT.png` (the book-&-"Es" logo mark) and the
screenshots above. The mark is preserved at `assets/logo-mark.png`.

> ⚠️ **Direction note:** the *legacy* site uses a rounded, playful display font
> (e.g. the giant "Hola"). The written brand brief explicitly forbids playful /
> rounded faces (no Poppins, no Nunito) and calls for **Inter + an editorial
> serif**. This system follows the **brief**, not the legacy screenshots — it
> codifies the intended, more grown-up direction.

---

## Content fundamentals

How Spanish Hobby writes. Treat the reader as a **curious, intelligent adult** —
a peer, never a student being drilled.

- **Language:** English in **all UI and prose**. Spanish appears **only** as
  in-content language examples (`María → Ella`, `Dentro / Detrás / Enfrente`).
- **Person:** warm first-person plural for the brand ("As we keep learning…"),
  direct second person for the reader ("You'll understand how sounds connect").
  The About page shifts to a personal "I" for Anya's bio.
- **Tone:** calm, reflective, quietly confident. Sentences breathe. Big ideas
  ("the invisible patterns that give the language its shape and flow") delivered
  plainly, without hype.
- **Casing:** Title Case for nav and section names ("The Hidden Structure", "Real
  World Spanish"); sentence case for body and most headings. Headlines are
  statements, not commands.
- **Mechanics:** semicolons and em-dashes for thoughtful asides; minimal
  exclamation marks; **no emoji** in product voice.
- **Never:** gamification language (streaks, points, "level up"), urgency,
  travel-phrasebook clichés, or talking down to beginners.

**Voice samples (do):**
- "A fresh way to explore: learn the structure, master the parts, and live the language."
- "All content on this site is 100% free and designed with care. No paywalls, no sign-ups, no pressure."
- "It's what you don't see, but it's always there."

**Voice samples (avoid):**
- "🔥 Keep your streak alive! Practice 5 min today!"
- "Learn 1,000 phrases FAST."

---

## Visual foundations

The feeling: **warm, spacious, editorial.** Lots of off-white, confident teal,
and orange used like a highlighter — a single touch, never a flood.

### Color
- **Teal `#1A6B7C`** is the lead: headings, links, primary buttons, and the
  full-bleed bands that break up long pages (deep `#14596A`).
- **Orange `#C8662A`** is the accent — CTAs needing emphasis, the peach feature
  wash (`#FBEEE3`), small marks. Used sparingly.
- **Brown `#8B6F47`** is the quiet secondary — the top utility strip, the footer
  copyright bar, and alternating topic bands.
- **Off-white `#F7F5F1`** grounds every page; **near-black `#1C1C1C`** is text.
- Neutrals are **warm-tinted** (not pure gray). Banned: neons, bright greens,
  red+yellow pairings.
- **Inverse contexts** (teal/brown bands) flip the palette: white headings,
  light-teal/cream support copy.

### Typography
- **Inter** for everything UI, body, and headings. Tight tracking on large
  sizes; weight 800 reserved for hero display only.
- **Source Serif 4** (and **Lora** for italics) appear **only** for editorial
  moments: chapter titles, manual covers, pull quotes. Never in UI.
- Generous line-height for reading (1.65 body). Headings balance-wrapped.

### Space, shape & elevation
- **Generous white space** is a core brand value — sections breathe at 96–128px.
- **Cards:** image on top, white body, **10px radius** (8–12px range), **soft
  warm-tinted shadow**, thin or no border. They lift **−2px** on hover and the
  image scales gently (1.03).
- Radii: 6px buttons/inputs, 10px cards/images, pills for tags.
- **Shadows** are low-contrast and warm (`rgba(28,28,28,0.06–0.10)`) — cards
  float on paper, never hard-edged.

### Backgrounds & imagery
- Page = flat off-white. Rhythm comes from **full-bleed teal (and brown) bands**,
  not gradients — the one gradient that exists is the soft teal→cream hero wash.
- Imagery skews **warm and textured**: abstract teal/orange "hidden structure"
  grid art, plus conceptual photography (wooden blocks, faces, hands). Provided
  placeholders in `assets/img/` recreate the abstract-grid look.
- No repeating patterns, no heavy textures, no glassmorphism.

### Motion & states
- **Calm motion only:** short eased fades and small lifts (200ms,
  `cubic-bezier(0.33,0,0,1)`). No bounce, no spring, no infinite loops.
- **Hover:** buttons darken one step; cards lift and reveal a stronger shadow;
  nav links shift to teal.
- **Press:** buttons settle to `scale(0.985)`; icon buttons to `0.94`.
- **Focus:** soft orange ring (`--ring-focus`).

---

## Iconography

- **System:** simple **solid (filled) glyphs**, most often set inside a **teal
  circular badge** — this is the brand's signature icon treatment (seen on the
  homepage feature trio, the "thumbs-up", the contact envelope).
- **Source:** the legacy site uses **Font Awesome solid**. This system adopts
  **Font Awesome Free 6** via CDN
  (`cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2`) as the closest match.
  ⚠️ *Substitution flagged* — swap to the licensed FA kit (or exact legacy
  glyphs) if you have them.
- **Usage:** pass FA class strings to components (`icon="fa-solid fa-puzzle-piece"`).
  `IconButton` and `FeatureCard` render the circular-badge treatment for you.
- **Emoji:** never used in product UI. **Unicode** glyphs are not used as icons.
- Don't hand-roll SVG icons; use the FA set so weight and style stay consistent.

---

## What's in here (manifest)

### Root
- `styles.css` — the single entry point consumers link (imports only).
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

### `tokens/` — foundations (imported by `styles.css`)
- `fonts.css` (Inter · Source Serif 4 · Lora) · `colors.css` · `typography.css`
  · `spacing.css` · `elevation.css` · `base.css`

### `assets/`
- `logo-mark.png` — the book-&-"Es" mark.
- `img/` — on-brand abstract placeholders (`structure-1/2`, `tonal-teal/warm/peach`).

### `components/` (namespace: `window.SpanishHobbyDesignSystem_99e317`)
- **core/** — `Button`, `IconButton`, `Badge`, `Eyebrow`
- **content/** — `ArticleCard`, `FeatureCard`, `SectionBand`, `Logo`
- **forms/** — `Input`, `Checkbox`
- **navigation/** — `NavBar`

### `ui_kits/website/`
- Interactive click-through recreation of the marketing site — Home, The Hidden
  Structure, The Building Blocks, About (see its `README.md`).

### `cards/` — Design System tab specimens
- Colors (teal, orange, brown, neutrals, semantic), Type (families, display,
  body, editorial), Spacing (scale, radii, elevation), Brand (logo, voice,
  iconography).

---

## Conventions for building with this system
- Link `styles.css`; use CSS custom properties — don't hard-code hexes.
- Compose the published components; don't re-implement primitives.
- One `accent` (orange) element per view, maximum.
- Reach for a `SectionBand` to add contrast; keep pages otherwise on paper.
- Keep copy calm and adult — re-read the Content Fundamentals before writing UI text.
