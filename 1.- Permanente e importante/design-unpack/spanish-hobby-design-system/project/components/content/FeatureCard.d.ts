import * as React from 'react';

/**
 * Spanish Hobby — FeatureCard
 * Icon-led feature tile (teal circular badge, title, accent rule, copy).
 * Used in homepage feature trios; one item may be `highlighted` (peach).
 */
export interface FeatureCardProps {
  /** Font Awesome class string for the badge icon */
  icon?: string;
  title: string;
  children?: React.ReactNode;
  /** Peach featured surface, no shadow. @default false */
  highlighted?: boolean;
  /** @default "center" */
  align?: 'center' | 'left';
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
