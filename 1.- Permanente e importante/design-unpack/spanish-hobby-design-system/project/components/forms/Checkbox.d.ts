import * as React from 'react';

/**
 * Spanish Hobby — Checkbox
 * Square teal checkbox with label. Controlled (`checked`) or uncontrolled
 * (`defaultChecked`).
 */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
