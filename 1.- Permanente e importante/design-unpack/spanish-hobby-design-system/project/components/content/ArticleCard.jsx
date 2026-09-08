import React from 'react';

/**
 * Spanish Hobby — ArticleCard
 * The signature content card: image on top, white body, subtle shadow, 10px
 * radius. Lifts gently on hover. Title, date meta, excerpt and a quiet
 * "Read more" affordance.
 */
export function ArticleCard({
  image,
  imageAlt = '',
  title,
  date,
  excerpt,
  href = '#',
  readMoreLabel = 'Read more',
  onClick,
  className = '',
  style,
}) {
  const [hover, setHover] = React.useState(false);

  const card = {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-card)',
    overflow: 'hidden',
    boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
    transform: hover ? 'translateY(-2px)' : 'none',
    transition: 'var(--transition-lift)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    ...style,
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      style={card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ aspectRatio: '3 / 2', overflow: 'hidden', background: 'var(--ink-100)' }}>
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform var(--duration-slow) var(--ease-calm)',
          }}
        />
      </div>
      <div style={{ padding: 'var(--pad-card)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <h3 style={{ margin: 0, fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', lineHeight: 'var(--leading-snug)' }}>
          {title}
        </h3>
        {date && (
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-subtle)' }}>{date}</p>
        )}
        <hr style={{ width: '100%', height: '1px', border: 'none', background: 'var(--border-subtle)', margin: 'var(--space-1) 0' }} />
        {excerpt && (
          <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>{excerpt}</p>
        )}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px', marginTop: 'var(--space-1)',
          fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-link)',
        }}>
          {readMoreLabel}
          <i className="fa-solid fa-chevron-right" aria-hidden="true" style={{ fontSize: '0.75em', transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--duration-base) var(--ease-calm)' }} />
        </span>
      </div>
    </a>
  );
}
