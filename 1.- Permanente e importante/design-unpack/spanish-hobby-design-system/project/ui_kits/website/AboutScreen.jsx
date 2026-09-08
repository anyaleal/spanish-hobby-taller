// Spanish Hobby — Website UI Kit · About
const { Button } = window.SpanishHobbyDesignSystem_99e317;

function AboutScreen() {
  const A = window.SH_ASSETS;
  return (
    <div>
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 32px 16px' }}>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', margin: 0 }}>Spanish Hobby: Rooted in Language</p>
        <hr style={{ width: '120px', height: '3px', border: 'none', background: 'var(--rule-accent)', margin: '20px 0 36px', marginLeft: 0 }} />
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)' }}>
          Spanish Hobby was born from the belief that language isn't just a skill to master; it's a living,
          breathing way of connecting with people, cultures, and ourselves. This project is rooted in the
          deeper structures of Spanish, but also in its everyday rhythm, its cultural soul, and the moments
          that make it feel alive.
        </p>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
          Behind every page, there's intention. Every section has been crafted to reflect not just how
          Spanish works, but why it matters — from the hidden structures that shape meaning to the sayings
          that make people laugh or pause.
        </p>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)' }}>
          Meet the educator behind it — handpicked care, and a deep love for the language.
        </p>
      </section>

      {/* Anya bio band */}
      <section style={{ background: 'var(--teal-700)', padding: '64px 32px 0', marginTop: '40px' }}>
        <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto' }}>
          <div style={{ border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 'var(--radius-lg)', padding: '36px 40px' }}>
            <h2 style={{ color: 'var(--white)', fontSize: 'var(--text-3xl)', margin: '0 0 18px' }}>Anya</h2>
            <p style={{ color: 'var(--white)', lineHeight: 'var(--leading-relaxed)', maxWidth: '74ch' }}>
              I'm a trained journalist with a deep passion for language and communication. Over time, that
              passion expanded into education. I'm currently completing my certification as a Spanish teacher
              and pursuing a Master's Degree in Teaching Spanish as a Foreign Language.
            </p>
            <p style={{ color: 'var(--teal-200)', lineHeight: 'var(--leading-relaxed)', maxWidth: '74ch' }}>
              This space is part of that journey, alongside my personal literature project, AnyaLiteral.com,
              where I explore language through stories, reflections, and alternative formats. Everything I
              create is rooted in the same goal: to make Spanish feel more human, more accessible, and more
              meaningful.
            </p>
          </div>
          <div style={{ position: 'relative', textAlign: 'center', marginTop: '40px' }}>
            <img src={A + 'structure-2.jpg'} alt=""
              style={{ width: 'min(620px, 100%)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0', display: 'inline-block' }} />
            <span style={{
              position: 'absolute', left: '50%', bottom: '18px', transform: 'translateX(-50%)',
              fontSize: 'clamp(56px, 10vw, 120px)', fontWeight: 'var(--weight-extrabold)', color: 'var(--white)',
              letterSpacing: '-0.02em', lineHeight: 1, textShadow: '0 4px 18px rgba(0,0,0,0.25)',
            }}>Hola</span>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', maxWidth: '20ch', margin: '0 auto 24px' }}>
          At Spanish Hobby, teaching is more than a job; it's a calling.
        </h2>
        <Button variant="accent" size="lg">Begin your journey with a free lesson</Button>
      </section>
    </div>
  );
}
window.AboutScreen = AboutScreen;
