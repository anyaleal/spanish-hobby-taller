import * as React from 'react';

/**
 * Spanish Hobby — IconButton
 * A circular icon-only control. The solid-teal-circle variant echoes the
 * brand's section icon badges. Always provide a `label` for accessibility.
 */
export interface IconButtonProps {
  /** Font Awesome class string, e.g. "fa-solid fa-envelope" */
  icon: string;
  /** Accessible label (used for aria-label + tooltip) */
  label: string;
  /** @default "solid" */
  variant?: 'solid' | 'brown' | 'accent' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
