import * as React from 'react';

/**
 * Spanish Hobby — Badge
 * A small label/status pill in the brand palette. Calm tones only.
 */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "teal" */
  tone?: 'teal' | 'brown' | 'orange' | 'neutral' | 'success';
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline';
  /** Optional Font Awesome class string */
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
