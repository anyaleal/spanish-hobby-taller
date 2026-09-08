**ArticleCard** — the signature image-top content card; use for lesson/article grids and section indexes.

```jsx
<ArticleCard
  image="/assets/img/semantics.jpg"
  title="Spanish Semantics & Pragmatics"
  date="May 29th, 2025"
  excerpt="Go beyond words to understand what's said and what's meant."
/>
```

Image sits on top at 3:2, white body below with title · date · rule · excerpt · "Read more". Lifts 2px and the image scales gently on hover. Lay several in a CSS grid with `gap: var(--gap-grid)`.
