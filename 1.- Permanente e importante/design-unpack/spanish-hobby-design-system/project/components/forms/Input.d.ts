import * as React from 'react';

/**
 * Spanish Hobby — Input
 * Calm text field with optional label, helper text and leading icon.
 */
export interface InputProps {
  label?: string;
  helper?: string;
  /** Font Awesome class for a leading icon */
  icon?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error state — orange border + helper. @default false */
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
