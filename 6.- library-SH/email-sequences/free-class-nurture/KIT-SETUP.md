# Kit setup — manual paste (MCP is plan-gated)

The Kit MCP needs a paid plan, so the sequence can't be created by API on the
current account. Two options:

- **Upgrade** to unlock API creation from here:
  https://app.kit.com/upgrade  → then ask me to "create the sequence in Kit."
- **Paste it manually** (below) — same result, ~15 minutes.

## Manual steps
1. Kit → **Automate → Sequences → New sequence**. Name it
   `Free-Class Nurture (The Spanish Map)`.
2. Set the send hour (e.g. 9:00) and allow all days. From-name: Anya.
3. Add 7 emails. For each, paste the **subject**, **preview text**, and **body**
   from the matching `email-N-day-N.md` file. The body is plain text with one
   markdown link — Kit's editor handles the link; the CTA already points at
   Calendly.
4. Set the delay on each email (delay = days *from the previous* email):

   | Email | Delay from previous |
   |-------|---------------------|
   | 1 | 0 days |
   | 2 | 3 days |
   | 3 | 2 days |
   | 4 | 3 days |
   | 5 | 3 days |
   | 6 | 3 days |
   | 7 | 4 days |

5. **Entry trigger:** add subscribers via the Spanish Map lead-magnet form/tag.
   (The opt-in form still needs to be wired out of preview mode first.)
6. **Exit condition:** add a *booked-class* tag as a removal/completion rule once
   the Calendly→Kit automation exists (see FLOW.md).
7. Before turning it on, run the pre-publish checklist in README.md.

## Reminders
- Email 5 has a HOLD comment for a real testimonial — it ships fine without one;
  do not fill it with an invented quote.
- Emails are English, no name merge tags, zero em-dashes, no urgency. Keep them
  that way if you edit in Kit.
