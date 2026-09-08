# campaign-map.md — Spanish Hobby Launch

> Stage: **Launch** (new brand, bootstrap, founder executes everything).
> The operator reads this to find the next unshipped piece. Mark pieces
> `[ ]` unshipped, `[~]` in progress, `[x]` shipped. Update as you go.

## The funnel (and the KPI that proves each step)
Discovery → Lead → Relationship → Customer

1. Social followers (TikTok + Instagram) — *KPI: follower growth*
2. Free-book downloads — *KPI: downloads = real interest, lead conversion*
3. Newsletter subscribers — *KPI: subs = long-term relationship*
4. Class signups — *KPI: premium conversion*
5. Paid-book sales — *KPI: digital-product conversion*

Diagnostic rules:
- Followers grow but downloads don't → the brand isn't converting attention into interest.
- Downloads grow but subs don't → the lead-magnet → newsletter handoff is broken.

## Channels & their job
- **TikTok / Instagram** — discovery. Short, visual, the "ah, this is different" hook.
- **Website** — proof of seriousness. Where Sarah verifies this is real and deep.
- **Newsletter** — the relationship. Conversational, close, long-term.
Coherent across all four; adapt format (TikTok faster/visual, web editorial,
newsletter warm).

## Phase 1 — Foundation (do first)
- [x] Landing page — "The Spanish Map" lead-magnet page (email → free PDF). Live:
      https://library.spanishhobby.com  (in `landing/`)
- [x] Free book #1 — the lead magnet (`landing/assets/the-spanish-map.pdf`),
      delivered via the landing page on opt-in.
- [x] **Newsletter opt-in wired to the free book — DONE.** Email capture posts to
      Kit (ConvertKit) form `9544310` to store the lead, then redirects to a
      thank-you page (`/thank-you`) with a direct PDF download. (Remaining: redeploy
      the landing.)
- [ ] Onboarding/welcome email sequence for new subscribers.

## Phase 2 — Discovery engine (ongoing once Phase 1 ships)
- [ ] TikTok content pillar #1: "the pattern that explains ten things" format.
- [ ] Instagram carousel series: one Spanish pattern made obvious, per post.
- [ ] Weekly newsletter cadence (one "small mystery solved" per issue).

## Phase 3 — Monetize (after audience + list exist)
- [ ] Paid book #2 offer page.
- [ ] 1:1 class offer page + booking flow.

## Anti-goals (don't let these creep in)
No gamification, no streaks, no "fast fluency" promises, no flag/España clichés,
no owl/mascot energy, no fabricated testimonials. Bootstrap-executable only
(Canva / WordPress / Notion / free Google Fonts).

## Shipped log
- Jun 2026 — "The Spanish Map" lead-magnet landing page built (`landing/`, on the
  Spanish Hobby design system) and deployed live to Vercel (public). Email capture
  still in preview mode — wiring a provider is the next step.
- Jul 2026 — **Free-Class Nurture** written: 7-email sequence (English) that sells
  the 1:1 classes ($30, first two free) to Spanish Map downloaders. CTA = book via
  Calendly (`hola-spanishhobby/30min`). Paste-ready in `email-sequences/free-class-nurture/`
  (+ FLOW, A/B, measurement, Kit-setup companions). NOT yet live: Kit MCP is
  plan-gated so it must be pasted manually, and the opt-in still needs wiring out
  of preview. Emails 5/6 carry HOLD slots for real testimonials (none exist yet).
