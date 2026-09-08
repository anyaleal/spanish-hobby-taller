import React from 'react';

/**
 * Spanish Hobby — FeatureCard
 * The icon-led feature tile from the homepage trio: a teal circular icon
 * badge, a teal title, a short accent rule, then descriptive copy. Supports a
 * peach "highlighted" surface for the middle/featured item.
 */
export function FeatureCard({
  icon,
  title,
  children,
  highlighted = false,
  align = 'center',
  className = '',
  style,
}) {
  const surface = highlighted ? 'var(--surface-accent-wash)' : 'var(--surface-card)';

  return (
    <div
      className={className}
      style={{
        background: surface,
        borderRadius: 'var(--radius-card)',
        boxShadow: highlighted ? 'none' : 'var(--shadow-card)',
        padding: 'var(--space-8) var(--space-7)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-4)',
        ...style,
      }}
    >
      {icon && (
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'var(--teal-600)', color: 'var(--white)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px', boxShadow: 'var(--shadow-sm)', marginBottom: 'var(--space-2)',
        }}>
          <i className={icon} aria-hidden="true" />
        </div>
      )}
      <h3 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)' }}>
        {title}
      </h3>
      <span aria-hidden="true" style={{ width: '56px', height: '3px', background: 'var(--rule-accent)', borderRadius: '2px' }} />
      <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
        {children}
      </div>
    </div>
  );
}
