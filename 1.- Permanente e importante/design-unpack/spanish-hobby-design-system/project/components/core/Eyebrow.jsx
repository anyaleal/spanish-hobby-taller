import React from 'react';

/**
 * Spanish Hobby — Eyebrow
 * The small uppercase label that sits above a heading, often paired with a
 * short accent rule. Sets a calm, editorial tone for a section.
 */
export function Eyebrow({
  children,
  color = 'accent',
  rule = false,
  as = 'p',
  className = '',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--orange-500)',
    teal: 'var(--teal-600)',
    brown: 'var(--brown-500)',
    muted: 'var(--text-muted)',
    onTeal: 'var(--teal-200)',
  };

  const Tag = as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    margin: 0,
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: colors[color],
    ...style,
  };

  return (
    <Tag className={className} style={base} {...rest}>
      {children}
      {rule && (
        <span
          aria-hidden="true"
          style={{ width: '40px', height: '2px', background: 'currentColor', opacity: 0.55, borderRadius: '2px' }}
        />
      )}
    </Tag>
  );
}
