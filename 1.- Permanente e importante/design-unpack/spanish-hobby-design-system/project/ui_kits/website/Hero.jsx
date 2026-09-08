// Spanish Hobby — Website UI Kit · Hero
// The homepage hero: a soft teal→cream wash, small "Learn" eyebrow, a large
// display word, an underlined teal sub-phrase, and a calm lead line.
const { Eyebrow } = window.SpanishHobbyDesignSystem_99e317;

function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(105deg, var(--teal-200) 0%, var(--teal-100) 38%, var(--brown-100) 78%, var(--orange-100) 100%)',
      padding: '84px 32px 92px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--teal-700)', letterSpacing: '-0.01em' }}>Learn</p>
        <h1 style={{
          margin: '2px 0 8px', fontSize: 'clamp(64px, 11vw, 132px)', fontWeight: 'var(--weight-extrabold)',
          color: 'var(--brown-500)', lineHeight: 0.95, letterSpacing: '-0.03em',
        }}>Spanish</h1>
        <p style={{
          margin: '0 0 28px', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 'var(--weight-bold)',
          color: 'var(--teal-700)', textDecoration: 'underline', textDecorationThickness: '3px',
          textUnderlineOffset: '8px', letterSpacing: '-0.01em',
        }}>Without Even Trying</p>
        <p style={{ margin: '0 auto', maxWidth: '46ch', fontSize: 'var(--text-md)', color: 'var(--ink-700)', lineHeight: 'var(--leading-relaxed)' }}>
          A fresh way to explore: learn the structure, master the parts, and live the language.
        </p>
      </div>
    </section>
  );
}
window.Hero = Hero;
