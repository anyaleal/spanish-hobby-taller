import React from 'react';

/**
 * Spanish Hobby — IconButton
 * A circular or rounded icon-only control. The filled-teal-circle treatment
 * echoes the brand's section icons; also available as outline and ghost.
 */
export function IconButton({
  icon,
  label,
  variant = 'solid',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: { box: '34px', font: '14px' },
    md: { box: '44px', font: '18px' },
    lg: { box: '56px', font: '22px' },
  };

  const variants = {
    solid: { background: 'var(--teal-600)', color: 'var(--white)', border: '1.5px solid var(--teal-600)' },
    brown: { background: 'var(--brown-500)', color: 'var(--white)', border: '1.5px solid var(--brown-500)' },
    accent: { background: 'var(--orange-500)', color: 'var(--white)', border: '1.5px solid var(--orange-500)' },
    outline: { background: 'transparent', color: 'var(--teal-600)', border: '1.5px solid var(--teal-600)' },
    ghost: { background: 'transparent', color: 'var(--teal-600)', border: '1.5px solid transparent' },
  };

  const hover = {
    solid: 'var(--teal-700)', brown: 'var(--brown-600)', accent: 'var(--orange-600)',
    outline: 'var(--teal-50)', ghost: 'var(--teal-50)',
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes[size].box,
    height: sizes[size].box,
    fontSize: sizes[size].font,
    borderRadius: '50%',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-calm)',
    ...variants[variant],
    ...style,
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = hover[variant]; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = variants[variant].background; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.94)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      <i className={icon} aria-hidden="true" />
    </button>
  );
}
