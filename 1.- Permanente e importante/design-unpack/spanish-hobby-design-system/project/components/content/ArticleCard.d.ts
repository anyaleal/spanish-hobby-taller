import * as React from 'react';

/**
 * Spanish Hobby — ArticleCard
 * The signature content card — image on top, white body, subtle shadow.
 * Used in the "Latest — Lessons & Thoughts" grid and section indexes.
 *
 * @startingPoint section="Content" subtitle="Image-top article card with hover lift" viewport="380x420"
 */
export interface ArticleCardProps {
  /** Image URL for the top of the card */
  image: string;
  imageAlt?: string;
  title: string;
  /** Short date / meta line, e.g. "June 13th, 2025" */
  date?: string;
  excerpt?: string;
  href?: string;
  /** @default "Read more" */
  readMoreLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ArticleCard(props: ArticleCardProps): JSX.Element;
