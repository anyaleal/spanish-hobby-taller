// Spanish Hobby — Website UI Kit · Home
const NS = window.SpanishHobbyDesignSystem_99e317;
const { FeatureCard, ArticleCard, SectionBand, Button, Eyebrow } = NS;

function HomeScreen() {
  const A = window.SH_ASSETS;
  return (
    <div>
      <window.Hero />

      {/* Feature trio */}
      <section style={{ maxWidth: 'var(--width-wide)', margin: '0 auto', padding: '64px 32px', transform: 'translateY(-48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <FeatureCard icon="fa-solid fa-eye-low-vision" title="The Hidden Structure" style={{ boxShadow: 'none', borderRadius: 0 }}>
            What gives Spanish its shape and logic. It's what you don't see, but it's always there.
          </FeatureCard>
          <FeatureCard icon="fa-solid fa-puzzle-piece" title="The Building Blocks" highlighted style={{ borderRadius: 0 }}>
            Learn what each piece does, how it behaves, and how they all fit together — the visible building blocks of every sentence.
          </FeatureCard>
          <FeatureCard icon="fa-solid fa-face-smile-wink" title="Real World Spanish" style={{ boxShadow: 'none', borderRadius: 0 }}>
            How it's spoken, how it's mastered, how it's lived.
          </FeatureCard>
        </div>
      </section>

      {/* Intro */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '8px 32px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-5)' }}>
          <span style={{ color: 'var(--brown-500)', textDecoration: 'underline', textDecorationThickness: '3px', textUnderlineOffset: '6px' }}>Learn Spanish</span>{' '}
          <span style={{ color: 'var(--ink-800)' }}>Without Even Trying</span>
        </h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
          Spanish Hobby is a free guide designed to help English speakers understand Spanish clearly and
          naturally. Instead of memorizing random phrases, you'll explore how Spanish works — from its
          sounds to the way meaning shifts with context.
        </p>
      </section>

      {/* Free band */}
      <SectionBand tone="teal" rule icon="fa-solid fa-thumbs-up">
        <h2 style={{ fontSize: 'var(--text-2xl)', textTransform: 'none' }}>All content on this site is 100% free and designed with care.</h2>
        <p style={{ color: 'var(--teal-200)', maxWidth: '54ch', fontSize: 'var(--text-md)' }}>
          No paywalls, no sign-ups, no pressure — just a clear and thoughtful way to learn Spanish.
        </p>
      </SectionBand>

      {/* Latest */}
      <section style={{ maxWidth: 'var(--width-wide)', margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'end', marginBottom: '48px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 'var(--weight-extrabold)', color: 'var(--brown-500)', lineHeight: 0.92, margin: 0, letterSpacing: '-0.03em' }}>Latest</h2>
            <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', color: 'var(--teal-600)', margin: '4px 0 0' }}>Lessons &amp; Thoughts</p>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              This space is always evolving. As we keep learning, reflecting and creating, we update each
              section with new insights — a phrase we've rethought, a structure that finally clicked, or a
              cultural detail that made us smile.
            </p>
            <hr style={{ width: '120px', height: '3px', border: 'none', background: 'var(--rule-accent)', margin: '20px 0 0', marginLeft: 0 }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
          {[
            { img: 'structure-1.jpg', t: 'Spanish Semantics & Pragmatics', d: 'May 29th, 2025', e: 'Spanish Semantics and Pragmatics help you go beyond words to truly understand what\'s said and what\'s meant.', cta: 'Go to The Hidden Structure' },
            { img: 'tonal-warm.jpg', t: 'Spanish Interjections', d: 'June 13th, 2025', e: 'Spanish interjections add emotion, authenticity and rhythm to your Spanish. Think of them as the sparks of a conversation.', cta: 'Go to The Building Blocks' },
            { img: 'structure-2.jpg', t: 'Cultural Nuances in Spanish', d: 'June 16th, 2025', e: 'Cultural nuances in Spanish go beyond slang or funny expressions. It\'s about social codes, habits, and emotional real conversations.', cta: 'Go to Real World Spanish' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <ArticleCard image={A + c.img} title={c.t} date={c.d} excerpt={c.e} style={{ boxShadow: 'var(--shadow-sm)' }} />
              <Button variant="primary" fullWidth>{c.cta}</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
