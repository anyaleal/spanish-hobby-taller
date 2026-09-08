# Measurement spec — Free-Class Nurture

Spec only. This defines what to track; it does not build a dashboard.

## The one number that matters
**List-to-booking rate** = (subscribers who booked a free class) ÷ (subscribers
who entered the sequence). This is the sequence's job. Everything else diagnoses it.

## Per-email
- **Open rate** — is the subject earning the open?
- **Click rate to Calendly** — is the body earning the click?
- **Bookings attributed to each email** — which email actually converts. Expect
  Email 4 (offer) and Email 7 (close) to carry most; if Email 1 or 2 converts
  well, the value-first hook is working.

## Funnel (the real business question)
1. Map downloads → sequence entries (is the opt-in→sequence handoff intact?)
2. Sequence entries → free class booked (this sequence)
3. Free class booked → attended (Calendly no-show rate)
4. Attended 2 free classes → first **paid** $30 class (the true conversion)
5. First paid → repeat classes (retention / LTV)

Steps 3-5 live outside the email tool but are where the $30 revenue actually
appears. The sequence is judged on step 2; the *business* is judged on step 4.

## Diagnostic rules
- Good opens, low clicks → subject over-promises or body doesn't bridge to the
  CTA. Fix the body, not the subject.
- Good clicks, few bookings → friction at Calendly (times, timezone, copy on the
  booking page). Fix Calendly, not the emails.
- Books free classes but never converts to paid → the free→paid moment needs its
  own follow-up (see post-first-class-onboarding.md).

## Instrumentation notes
- Tag *booked-class* via Calendly→Kit (or Zapier) to measure step 2 and to power
  the sequence exit condition (see FLOW.md).
- Tag *paid-class* manually (or via payment tool) to measure step 4 until there's
  a cleaner integration.
