import React from 'react';

/**
 * Spanish Hobby — Button
 * Solid teal (primary), outlined teal (secondary), orange accent, and quiet
 * ghost variants. Calm interactions: gentle hover darkening, a small settle on
 * press. No gradients, no bounce.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', gap: '8px' },
    md: { padding: '12px 22px', fontSize: 'var(--text-base)', gap: '10px' },
    lg: { padding: '15px 30px', fontSize: 'var(--text-md)', gap: '12px' },
  };

  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--action-text)',
      border: '1.5px solid var(--action)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--action-ghost-text)',
      border: '1.5px solid var(--action-ghost-border)',
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-text)',
      border: '1.5px solid var(--accent)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-ghost-text)',
      border: '1.5px solid transparent',
    },
    'on-teal': {
      background: 'var(--white)',
      color: 'var(--teal-700)',
      border: '1.5px solid var(--white)',
    },
    'outline-on-teal': {
      background: 'transparent',
      color: 'var(--white)',
      border: '1.5px solid var(--border-on-teal)',
    },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    letterSpacing: '0.005em',
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-calm), box-shadow var(--duration-base) var(--ease-calm)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style,
  };

  const hoverBg = {
    primary: 'var(--action-hover)',
    accent: 'var(--accent-hover)',
    outline: 'var(--action-ghost-hover-bg)',
    ghost: 'var(--action-ghost-hover-bg)',
    'on-teal': 'var(--teal-50)',
    'outline-on-teal': 'rgba(255,255,255,0.12)',
  };

  const handleEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = hoverBg[variant];
    if (variant === 'primary' || variant === 'accent') {
      e.currentTarget.style.borderColor = hoverBg[variant];
    }
  };
  const handleLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variants[variant].border.split(' ').pop();
    e.currentTarget.style.transform = 'none';
  };
  const handleDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))'; };
  const handleUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'none'; };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={base}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      {...rest}
    >
      {icon && <i className={icon} aria-hidden="true" />}
      {children}
      {iconRight && <i className={iconRight} aria-hidden="true" />}
    </button>
  );
}
