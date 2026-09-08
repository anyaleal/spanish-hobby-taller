// Spanish Hobby — Website UI Kit · The Hidden Structure
const { Button, Eyebrow, Badge } = window.SpanishHobbyDesignSystem_99e317;

function HiddenStructureScreen() {
  const A = window.SH_ASSETS;
  const topics = [
    { t: 'Spanish Phonetics', s: 'Spanish Phonetics: The Physical Sounds of the Language', icon: 'fa-solid fa-volume-high', tone: 'teal' },
    { t: 'Spanish Phonology', s: 'What Is Spanish Phonetics & Rhythm?', icon: 'fa-solid fa-volume-high', tone: 'brown' },
    { t: 'Spanish Morphology', s: 'Spanish Morphology: How Words Are Built', icon: 'fa-solid fa-puzzle-piece', tone: 'teal' },
    { t: 'Spanish Syntax', s: 'Spanish Syntax: How Spanish Sentences Work', icon: 'fa-solid fa-align-left', tone: 'brown' },
    { t: 'Semantics and Pragmatics of Spanish', s: 'Spanish Semantics & Pragmatics: Why Words Aren\'t Enough', icon: 'fa-solid fa-brain', tone: 'teal' },
  ];

  return (
    <div>
      <section style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '72px 32px 24px' }}>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', color: 'var(--teal-600)', textAlign: 'center', letterSpacing: '-0.02em', marginBottom: '8px' }}>
          The Hidden Structure of Spanish
        </h1>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 32px 16px' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)' }}>Why is it hidden?</h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', marginBottom: '6px' }}>Because most learners never see it.</p>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)' }}>
          When people try to learn Spanish, they often jump straight into words and phrases, without ever
          understanding how the language is built underneath.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: '48px' }}>What is this section about?</h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', marginBottom: '6px' }}>
          This part of the site explores the foundations of Spanish — the invisible patterns that give the
          language its shape and flow.
        </p>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)' }}>
          You'll understand how sounds connect, how words are formed, how sentences come together, and how
          meaning shifts depending on context.
        </p>
        <img src={A + 'structure-1.jpg'} alt="The hidden structure of Spanish"
          style={{ width: '100%', borderRadius: 'var(--radius-md)', marginTop: '28px', boxShadow: 'var(--shadow-md)' }} />
      </section>

      {/* Topic stack on tinted band */}
      <section style={{ background: 'var(--teal-100)', padding: '72px 32px', marginTop: '56px' }}>
        <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {topics.map((tp, i) => {
            const bg = tp.tone === 'teal' ? 'var(--teal-700)' : 'var(--brown-500)';
            const sub = tp.tone === 'teal' ? 'var(--teal-200)' : 'var(--brown-100)';
            return (
              <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
                display: 'block', background: bg, borderRadius: 'var(--radius-lg)',
                padding: '30px 36px', textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-lift)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                <h3 style={{ color: 'var(--white)', fontSize: 'var(--text-xl)', margin: '0 0 14px' }}>{tp.t}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '14px' }}>
                  <span style={{ color: sub, fontSize: '15px' }}><i className={tp.icon} aria-hidden="true" /></span>
                  <span style={{ color: sub, fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)' }}>{tp.s}</span>
                </div>
              </a>
            );
          })}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '20px' }}>
            {['structure-2.jpg', 'tonal-teal.jpg', 'tonal-peach.jpg', 'tonal-warm.jpg'].map((im, i) => (
              <img key={i} src={A + im} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.HiddenStructureScreen = HiddenStructureScreen;
