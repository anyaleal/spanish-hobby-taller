import React from 'react';

/**
 * Spanish Hobby — Logo
 * The brand lockup: the book-&-Es mark beside the two-tone wordmark
 * ("Spanish" teal bold + "Hobby" brown light). Pass `markSrc` with the correct
 * path to assets/logo-mark.png for your context. Use `onDark` on teal bands.
 */
export function Logo({
  markSrc = 'assets/logo-mark.png',
  size = 'md',
  onDark = false,
  showWord = true,
  href,
  className = '',
  style,
}) {
  const sizes = {
    sm: { mark: 32, word: 20 },
    md: { mark: 44, word: 28 },
    lg: { mark: 60, word: 38 },
  };
  const s = sizes[size];

  const markStyle = onDark
    ? { width: s.mark - 8, height: s.mark - 8, background: 'var(--white)', borderRadius: 'var(--radius-sm)', padding: 4, boxSizing: 'content-box' }
    : { width: s.mark, height: s.mark };

  const inner = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', ...style }} className={className}>
      <img src={markSrc} alt="Spanish Hobby" style={markStyle} />
      {showWord && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: `${s.word}px`, fontWeight: 'var(--weight-bold)', letterSpacing: '-0.01em', lineHeight: 1 }}>
          <span style={{ color: onDark ? 'var(--white)' : 'var(--teal-600)' }}>Spanish</span>
          <span style={{ color: onDark ? 'var(--brown-200)' : 'var(--brown-500)', fontWeight: 'var(--weight-medium)' }}>Hobby</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return <a href={href} style={{ textDecoration: 'none', display: 'inline-flex' }}>{inner}</a>;
  }
  return inner;
}
