import * as React from 'react';

/**
 * Spanish Hobby — Logo
 * Brand lockup: book-&-Es mark + two-tone wordmark. Pass `markSrc` pointing at
 * assets/logo-mark.png for your context; set `onDark` for teal bands.
 */
export interface LogoProps {
  /** Path to assets/logo-mark.png relative to the page using it */
  markSrc?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Reverse treatment for dark/teal backgrounds. @default false */
  onDark?: boolean;
  /** Show the wordmark beside the mark. @default true */
  showWord?: boolean;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
