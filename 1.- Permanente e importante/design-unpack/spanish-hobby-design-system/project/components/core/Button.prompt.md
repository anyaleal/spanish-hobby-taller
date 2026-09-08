**Button** — the primary action element; use for any user-triggered action (links to sections, form submits, CTAs).

```jsx
<Button variant="primary" iconRight="fa-solid fa-arrow-right">Go to The Hidden Structure</Button>
<Button variant="outline">Learn more</Button>
<Button variant="accent">Begin a free lesson</Button>
```

Variants: `primary` (solid teal, default), `outline` (teal border), `accent` (orange — emphasis only, sparingly), `ghost` (text-only), and `on-teal` / `outline-on-teal` for use inside full-bleed teal bands. Sizes: `sm` · `md` · `lg`. Pass Font Awesome class strings to `icon` / `iconRight`. Never use more than one `accent` button per view.
