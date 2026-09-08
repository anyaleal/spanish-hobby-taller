import * as React from 'react';

/**
 * Spanish Hobby — Button
 *
 * The primary action element. Solid teal leads; outline teal is the calm
 * secondary; orange accent is for a single point of emphasis only. Two
 * inverse variants exist for use on full-bleed teal bands.
 *
 * @startingPoint section="Core" subtitle="Primary, outline, accent & inverse actions" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'outline' | 'accent' | 'ghost' | 'on-teal' | 'outline-on-teal';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Font Awesome class string for a leading icon, e.g. "fa-solid fa-arrow-right" */
  icon?: string;
  /** Font Awesome class string for a trailing icon */
  iconRight?: string;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** @default "button" */
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
