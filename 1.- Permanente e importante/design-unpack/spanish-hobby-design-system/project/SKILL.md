---
name: spanish-hobby-design
description: Use this skill to generate well-branded interfaces and assets for Spanish Hobby, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Spanish Hobby is a free educational platform that helps English speakers discover
how Spanish really works through pattern recognition and structure. The brand is
calm, curious, and intelligent — MasterClass meets National Geographic. Never
gamified, never rushed.

**Start here:**
- `readme.md` — full brand guide: content fundamentals (voice/tone), visual
  foundations (color, type, space, motion, states), and iconography.
- `styles.css` + `tokens/` — the CSS custom properties (colors, typography,
  spacing, elevation) and `@font-face`/font imports. Link `styles.css` and use
  the tokens; never hard-code values.
- `components/` — reusable React primitives (Button, IconButton, Badge, Eyebrow,
  ArticleCard, FeatureCard, SectionBand, Logo, Input, Checkbox, NavBar). Each has
  a `.d.ts` (props) and `.prompt.md` (what/when + usage).
- `ui_kits/website/` — a full click-through recreation of the marketing site to
  reference for layout and composition.
- `assets/` — the logo mark and on-brand placeholder imagery.

**How to work:**
- If creating visual artifacts (slides, mocks, throwaway prototypes), copy the
  assets you need out of this skill and produce static HTML files for the user to
  view. Link `styles.css`, load Font Awesome 6 for icons, and load React + Babel
  if you want to use the JSX components (otherwise rebuild their look with plain
  HTML/CSS using the tokens).
- If working on production code, copy the assets and read the rules here to
  become an expert in designing with this brand.
- If invoked without other guidance, ask what the user wants to build or design,
  ask a few focused questions, then act as an expert designer who outputs HTML
  artifacts *or* production code, depending on the need.

**Non-negotiables:** Inter for UI/body; serif (Source Serif 4 / Lora) for
editorial moments only — never playful/rounded faces. Teal leads, orange accents
sparingly, brown as a quiet secondary, off-white pages. English in all UI;
Spanish only as content examples. No gamification, no emoji in product voice.
