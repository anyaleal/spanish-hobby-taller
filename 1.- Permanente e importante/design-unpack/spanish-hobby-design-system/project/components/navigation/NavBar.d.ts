import * as React from 'react';

/**
 * Spanish Hobby — NavBar
 * Two-tier site header: brown utility strip (contact + socials) above a clean
 * horizontal nav with logo, links and an optional CTA.
 *
 * @startingPoint section="Navigation" subtitle="Two-tier marketing site header" viewport="1280x130"
 */
export interface NavBarProps {
  /** Path to assets/logo-mark.png for this page */
  markSrc?: string;
  /** Nav link labels */
  items?: string[];
  /** Currently active label (rendered in brown) */
  activeItem?: string;
  /** Contact text in the utility strip */
  contact?: string;
  socials?: SocialLink[];
  cta?: NavCta;
  onItemClick?: (item: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function NavBar(props: NavBarProps): JSX.Element;

interface SocialLink { icon: string; label: string; href?: string; }
interface NavCta { label: string; href?: string; }
