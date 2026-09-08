import React from 'react';

/**
 * Spanish Hobby — Input
 * A calm text field with an optional label and helper text. 6px radius, warm
 * neutral border, teal focus ring. Supports a leading icon.
 */
export function Input({
  label,
  helper,
  icon,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  invalid = false,
  disabled = false,
  id,
  className = '',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `sh-input-${Math.random().toString(36).slice(2, 8)}`;

  const borderColor = invalid ? 'var(--orange-500)' : (focus ? 'var(--teal-500)' : 'var(--border-default)');

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && (
          <i className={icon} aria-hidden="true" style={{ position: 'absolute', left: '14px', color: focus ? 'var(--teal-600)' : 'var(--text-subtle)', fontSize: '14px', pointerEvents: 'none' }} />
        )}
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: icon ? '12px 14px 12px 38px' : '12px 14px',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-body)',
            background: disabled ? 'var(--ink-100)' : 'var(--white)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-input)',
            outline: 'none',
            boxShadow: focus ? (invalid ? '0 0 0 3px rgba(217,130,75,0.18)' : '0 0 0 3px rgba(90,155,168,0.18)') : 'none',
            transition: 'var(--transition-color), box-shadow var(--duration-base) var(--ease-standard)',
            opacity: disabled ? 0.6 : 1,
          }}
          {...rest}
        />
      </div>
      {helper && (
        <span style={{ fontSize: 'var(--text-xs)', color: invalid ? 'var(--orange-600)' : 'var(--text-subtle)' }}>{helper}</span>
      )}
    </div>
  );
}
