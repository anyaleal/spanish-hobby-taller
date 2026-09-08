import * as React from 'react';

/**
 * Spanish Hobby — Eyebrow
 * Small uppercase label above a heading; optional trailing accent rule.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** @default "accent" */
  color?: 'accent' | 'teal' | 'brown' | 'muted' | 'onTeal';
  /** Show a short trailing rule. @default false */
  rule?: boolean;
  /** Element to render. @default "p" */
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3';
  className?: string;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
