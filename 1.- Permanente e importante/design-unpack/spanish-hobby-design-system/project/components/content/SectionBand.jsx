import React from 'react';

/**
 * Spanish Hobby — SectionBand
 * The full-bleed colored band used to break up long pages: deep teal by
 * default (white text), with brown and peach variants for rhythm. Centered
 * statement copy with an optional short rule and icon badge beneath.
 */
export function SectionBand({
  children,
  tone = 'teal',
  align = 'center',
  rule = false,
  icon,
  className = '',
  style,
}) {
  const tones = {
    teal:  { bg: 'var(--surface-inverse)',     fg: 'var(--white)',      sub: 'var(--teal-200)',  badge: 'var(--white)',  badgeFg: 'var(--teal-700)' },
    brown: { bg: 'var(--surface-inverse-alt)', fg: 'var(--white)',      sub: 'var(--brown-100)', badge: 'var(--white)',  badgeFg: 'var(--brown-600)' },
    peach: { bg: 'var(--surface-accent-wash)', fg: 'var(--text-strong)',sub: 'var(--text-muted)',badge: 'var(--teal-600)', badgeFg: 'var(--white)' },
  };
  const t = tones[tone];

  return (
    <section
      className={className}
      data-tone={tone}
      style={{
        background: t.bg,
        color: t.fg,
        padding: 'var(--space-11) var(--pad-page-x)',
        ...style,
      }}
    >
      <div style={{
        maxWidth: 'var(--width-content)',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-4)',
        '--text-strong': t.fg,
      }}>
        {children}
        {rule && (
          <span aria-hidden="true" style={{ width: '72px', height: '3px', background: 'currentColor', opacity: 0.6, borderRadius: '2px', marginTop: 'var(--space-2)' }} />
        )}
        {icon && (
          <div style={{
            width: '54px', height: '54px', borderRadius: '50%',
            background: t.badge, color: t.badgeFg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', marginTop: 'var(--space-3)',
          }}>
            <i className={icon} aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  );
}
