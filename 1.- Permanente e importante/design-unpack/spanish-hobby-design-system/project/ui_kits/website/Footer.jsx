// Spanish Hobby — Website UI Kit · Footer
// Two expandable resource panels on a teal band, then a brown copyright bar.
const { IconButton } = window.SpanishHobbyDesignSystem_99e317;

function Footer() {
  return (
    <footer>
      <div style={{ background: 'var(--teal-700)', padding: '28px 32px' }}>
        <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {['Explore more inside Spanish Hobby', 'Helpful external resources'].map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              background: 'var(--teal-600)', borderRadius: 'var(--radius-md)',
              padding: '16px 20px', color: 'var(--white)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}>
              <span style={{
                width: '26px', height: '26px', borderRadius: 'var(--radius-xs)', background: 'var(--teal-900)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0,
              }}>
                <i className="fa-solid fa-plus" aria-hidden="true" />
              </span>
              <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-md)' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--brown-500)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <p style={{ margin: 0, color: 'var(--white)', fontSize: 'var(--text-sm)', opacity: 0.95 }}>
          © 2025 Spanish Hobby. All rights reserved. Created by Anya Leal.
        </p>
        <div style={{ position: 'absolute', right: '32px' }}>
          <IconButton icon="fa-solid fa-arrow-up" label="Back to top" variant="ghost"
            size="sm" style={{ color: 'var(--white)', borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(0,0,0,0.12)' }} />
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
