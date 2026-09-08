import React from 'react';

/**
 * Spanish Hobby — Badge
 * A small status/label pill. Quiet by default; tones map to the brand palette.
 * Never used for gamification or alarmist states.
 */
export function Badge({
  children,
  tone = 'teal',
  variant = 'soft',
  icon,
  className = '',
  style,
  ...rest
}) {
  const tones = {
    teal:   { solidBg: 'var(--teal-600)',   softBg: 'var(--teal-50)',   softFg: 'var(--teal-700)',   line: 'var(--teal-200)' },
    brown:  { solidBg: 'var(--brown-500)',  softBg: 'var(--brown-50)',  softFg: 'var(--brown-600)',  line: 'var(--brown-200)' },
    orange: { solidBg: 'var(--orange-500)', softBg: 'var(--orange-50)', softFg: 'var(--orange-600)', line: 'var(--orange-200)' },
    neutral:{ solidBg: 'var(--ink-700)',    softBg: 'var(--ink-100)',   softFg: 'var(--ink-700)',    line: 'var(--ink-200)' },
    success:{ solidBg: 'var(--success)',    softBg: 'var(--success-bg)',softFg: 'var(--success)',    line: '#BCD8C8' },
  };
  const t = tones[tone];

  const styles = {
    soft:    { background: t.softBg, color: t.softFg, border: `1px solid ${t.line}` },
    solid:   { background: t.solidBg, color: 'var(--white)', border: `1px solid ${t.solidBg}` },
    outline: { background: 'transparent', color: t.softFg, border: `1px solid ${t.line}` },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 11px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...styles[variant],
    ...style,
  };

  return (
    <span className={className} style={base} {...rest}>
      {icon && <i className={icon} aria-hidden="true" style={{ fontSize: '0.85em' }} />}
      {children}
    </span>
  );
}
