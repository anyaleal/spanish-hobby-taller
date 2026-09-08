**NavBar** — the two-tier marketing site header; use at the top of every website page.

```jsx
<NavBar
  markSrc="../../assets/logo-mark.png"
  items={['Learn Spanish','The Hidden Structure','The Building Blocks','Real World Spanish','About','Contacto']}
  activeItem="The Hidden Structure"
  socials={[{icon:'fa-brands fa-instagram',label:'Instagram'},{icon:'fa-brands fa-tiktok',label:'TikTok'}]}
/>
```

Brown utility strip (contact + socials) sits above a white nav row with the logo and links. The active item renders in brown; others hover to teal. Pass an optional `cta`.
