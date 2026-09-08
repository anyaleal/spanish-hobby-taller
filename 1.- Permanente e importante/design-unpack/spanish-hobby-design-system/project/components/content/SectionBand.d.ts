import * as React from 'react';

/**
 * Spanish Hobby — SectionBand
 * Full-bleed colored band that breaks up long pages. Deep teal (default),
 * brown, or peach. Place a heading + lead inside; optional rule and icon badge.
 */
export interface SectionBandProps {
  children?: React.ReactNode;
  /** @default "teal" */
  tone?: 'teal' | 'brown' | 'peach';
  /** @default "center" */
  align?: 'center' | 'left';
  /** Short rule beneath the content. @default false */
  rule?: boolean;
  /** Font Awesome class for a circular icon badge below the content */
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SectionBand(props: SectionBandProps): JSX.Element;
