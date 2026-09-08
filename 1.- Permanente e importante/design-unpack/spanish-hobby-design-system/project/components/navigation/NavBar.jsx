import React from 'react';

/**
 * Spanish Hobby — NavBar
 * The brand's two-tier site header: a brown utility strip (contact + socials)
 * above a clean horizontal nav with the logo and a single accent CTA.
 */
export function NavBar({
  markSrc = 'assets/logo-mark.png',
  items = [],
  activeItem,
  contact = 'Call us today! +1-214-683-2944 · hola@SpanishHobby.com',
  socials = [],
  cta,
  onItemClick,
  className = '',
  style,
}) {
  return (
    <header className={className} style={{ width: '100%', ...style }}>
      {/* Utility strip */}
      <div style={{
        background: 'var(--surface-utility-bar)', color: 'var(--white)',
        padding: '8px var(--pad-page-x)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 'var(--text-xs)',
      }}>
        <span style={{ opacity: 0.95 }}>{contact}</span>
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href || '#'} aria-label={s.label} style={{ color: 'var(--white)', fontSize: '14px', opacity: 0.9 }}>
              <i className={s.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        background: 'var(--white)',
        padding: 'var(--space-4) var(--pad-page-x)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 'var(--space-6)',
        boxShadow: 'var(--shadow-xs)',
      }}>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}>
          <img src={markSrc} alt="Spanish Hobby" style={{ width: '40px', height: '40px' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 'var(--weight-bold)', letterSpacing: '-0.01em', lineHeight: 1 }}>
            <span style={{ color: 'var(--teal-600)' }}>Spanish</span>
            <span style={{ color: 'var(--brown-500)', fontWeight: 'var(--weight-medium)' }}>Hobby</span>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          {items.map((it, i) => {
            const active = (activeItem ?? '') === it;
            return (
              <a
                key={i}
                href="#"
                onClick={(e) => { e.preventDefault(); onItemClick && onItemClick(it); }}
                style={{
                  fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
                  color: active ? 'var(--brown-500)' : 'var(--text-body)',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  transition: 'var(--transition-color)',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--teal-600)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-body)'; }}
              >
                {it}
              </a>
            );
          })}
          {cta && (
            <a href={cta.href || '#'} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--action)', color: 'var(--white)',
              padding: '9px 18px', borderRadius: 'var(--radius-button)',
              fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', textDecoration: 'none',
            }}>
              {cta.label}
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
