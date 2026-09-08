import React from 'react';

/**
 * Spanish Hobby — Checkbox
 * A square teal checkbox with a calm check animation. Label sits to the right.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  className = '',
  style,
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const fieldId = id || `sh-cb-${Math.random().toString(36).slice(2, 8)}`;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(!internal);
    onChange && onChange(!on, e);
  };

  return (
    <label
      htmlFor={fieldId}
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)',
        ...style,
      }}
    >
      <input id={fieldId} type="checkbox" checked={on} onChange={toggle} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: '20px', height: '20px', flexShrink: 0,
        borderRadius: 'var(--radius-xs)',
        border: `1.5px solid ${on ? 'var(--teal-600)' : 'var(--border-strong)'}`,
        background: on ? 'var(--teal-600)' : 'var(--white)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--white)', fontSize: '11px',
        transition: 'var(--transition-color)',
      }}>
        {on && <i className="fa-solid fa-check" aria-hidden="true" />}
      </span>
      {label}
    </label>
  );
}
