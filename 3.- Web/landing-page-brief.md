# Landing Page Brief — The Spanish Map

- **Brand:** Spanish Hobby (editorial education, Sage + Explorer voice)
- **Page type:** Lead magnet (one-screen email capture)
- **Offer:** "The Spanish Map" — free PDF guide. Show how Spanish actually works
  (the patterns underneath the words), not memorization.
- **Goal / KPI:** capture email leads → deliver the free PDF.
- **Audience:** "Sarah" — curious adult English speaker who wants to understand,
  not cram. Copy in English.
- **Deliverable asset:** `landing/assets/the-spanish-map.pdf` (from `Mapa Spanish Hobby.pdf`).

## Design source
Built on the **Spanish Hobby Design System** (Claude Design export), unpacked at
`design-unpack/spanish-hobby-design-system/`. Tokens vendored into `landing/ds/`.
Teal leads, orange accent sparingly, brown footer, off-white page. Inter for UI,
Source Serif for the editorial cover only. No gamification, no flag clichés.

## Files
- `landing/index.html` — the page
- `landing/page.css` — layout (tokens do the styling)
- `landing/ds/` — vendored design-system CSS (styles.css + tokens)
- `landing/assets/` — logo-mark.png, structure-1.jpg (og), the-spanish-map.pdf

## Landing Page (live)
- **Live URL:** https://library.spanishhobby.com (custom subdomain, CNAME
  `library` → `cname.vercel-dns.com`; HTTPS auto). Thank-you page:
  https://library.spanishhobby.com/thank-you
- **Vercel origin URL:** https://the-spanish-map-anya-leal-s-projects.vercel.app
- **Deploy method:** Git integration — pushing/merging to `main` auto-deploys to
  production. Account: anya-leal-s-projects. Project: the-spanish-map.
  `vercel.json` sets outputDirectory=landing (ships `landing/` + `/api/*`
  functions). Deployment protection (Vercel Authentication) OFF.
- **Redeploy:** `git push origin main`. **Do NOT deploy manually** (REST API /
  CLI / `deploy.sh`) — a manual deploy has no git metadata and clobbers the last
  GitHub deploy. This bit us twice in Jul 2026 (reverted the landing once, wiped
  the Locator once). The old manual scripts were deleted; do not re-create them.

## Status
- [x] Built + verified locally (preview at http://127.0.0.1:8730)
- [x] Deployed to Vercel, public, READY
- [x] Email capture + delivery — **Kit (ConvertKit) for the list, direct download
      for the PDF.** On submit, `index.html` posts `email_address` to
      `https://app.kit.com/forms/9544310/subscriptions` (stores the lead), then
      redirects to `thank-you.html` (`/thank-you`) where the visitor downloads
      `the-spanish-map.pdf` directly. No reliance on Kit's Incentive Email.

## Email capture + PDF delivery
- **Lead storage:** Kit (ConvertKit) form `9544310`; endpoint
  `https://app.kit.com/forms/9544310/subscriptions`; field name must be
  `email_address` (Kit requirement — `email` fails silently).
- **PDF delivery:** direct download on the thank-you page
  (`landing/thank-you.html`, served at `/thank-you` via `cleanUrls`). The button
  links straight to `assets/the-spanish-map.pdf` with `download`.
- **Flow:** capture email → POST to Kit → `window.location.href = "thank-you.html"`.
  Fail-open: if the Kit POST can't be read (CORS), the visitor is still sent to
  the download page.
- To swap providers later, edit the `CONFIG` block at the bottom of
  `landing/index.html` (`EMAIL_ENDPOINT` + `EMAIL_FIELD`).

## To deploy
Commit under `landing/` (static) or `api/` (serverless functions), then
`git push origin main`. Vercel does the rest. No manual/CLI deploys.
