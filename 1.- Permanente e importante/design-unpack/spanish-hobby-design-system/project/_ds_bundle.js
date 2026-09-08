/* @ds-bundle: {"format":3,"namespace":"SpanishHobbyDesignSystem_99e317","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"Logo","sourcePath":"components/content/Logo.jsx"},{"name":"SectionBand","sourcePath":"components/content/SectionBand.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"b3ef0d56d911","components/content/FeatureCard.jsx":"e3a54a82f954","components/content/Logo.jsx":"52b85e981f7f","components/content/SectionBand.jsx":"64ebfed30396","components/core/Badge.jsx":"db5fcdf2014a","components/core/Button.jsx":"6c4abed62d86","components/core/Eyebrow.jsx":"78eb4234ce84","components/core/IconButton.jsx":"e51f74c04c1c","components/forms/Checkbox.jsx":"358904e31891","components/forms/Input.jsx":"68b74899c2fd","components/navigation/NavBar.jsx":"b6cc19f46352","ui_kits/website/AboutScreen.jsx":"5f87b1011d6c","ui_kits/website/BuildingBlocksScreen.jsx":"867456f7f676","ui_kits/website/Footer.jsx":"3a4cd535d44e","ui_kits/website/Hero.jsx":"a41c4f917e28","ui_kits/website/HiddenStructureScreen.jsx":"c170de5636f7","ui_kits/website/HomeScreen.jsx":"11d759962dc6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpanishHobbyDesignSystem_99e317 = window.SpanishHobbyDesignSystem_99e317 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ArticleCard.jsx
try { (() => {
/**
 * Spanish Hobby — ArticleCard
 * The signature content card: image on top, white body, subtle shadow, 10px
 * radius. Lifts gently on hover. Title, date meta, excerpt and a quiet
 * "Read more" affordance.
 */
function ArticleCard({
  image,
  imageAlt = '',
  title,
  date,
  excerpt,
  href = '#',
  readMoreLabel = 'Read more',
  onClick,
  className = '',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const card = {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-card)',
    overflow: 'hidden',
    boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
    transform: hover ? 'translateY(-2px)' : 'none',
    transition: 'var(--transition-lift)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    ...style
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: className,
    style: card,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3 / 2',
      overflow: 'hidden',
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-calm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), date && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)'
    }
  }, date), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: '100%',
      height: '1px',
      border: 'none',
      background: 'var(--border-subtle)',
      margin: 'var(--space-1) 0'
    }
  }), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      marginTop: 'var(--space-1)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-link)'
    }
  }, readMoreLabel, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    "aria-hidden": "true",
    style: {
      fontSize: '0.75em',
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-calm)'
    }
  }))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
/**
 * Spanish Hobby — FeatureCard
 * The icon-led feature tile from the homepage trio: a teal circular icon
 * badge, a teal title, a short accent rule, then descriptive copy. Supports a
 * peach "highlighted" surface for the middle/featured item.
 */
function FeatureCard({
  icon,
  title,
  children,
  highlighted = false,
  align = 'center',
  className = '',
  style
}) {
  const surface = highlighted ? 'var(--surface-accent-wash)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      background: surface,
      borderRadius: 'var(--radius-card)',
      boxShadow: highlighted ? 'none' : 'var(--shadow-card)',
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--space-4)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      background: 'var(--teal-600)',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      boxShadow: 'var(--shadow-sm)',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '56px',
      height: '3px',
      background: 'var(--rule-accent)',
      borderRadius: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Logo.jsx
try { (() => {
/**
 * Spanish Hobby — Logo
 * The brand lockup: the book-&-Es mark beside the two-tone wordmark
 * ("Spanish" teal bold + "Hobby" brown light). Pass `markSrc` with the correct
 * path to assets/logo-mark.png for your context. Use `onDark` on teal bands.
 */
function Logo({
  markSrc = 'assets/logo-mark.png',
  size = 'md',
  onDark = false,
  showWord = true,
  href,
  className = '',
  style
}) {
  const sizes = {
    sm: {
      mark: 32,
      word: 20
    },
    md: {
      mark: 44,
      word: 28
    },
    lg: {
      mark: 60,
      word: 38
    }
  };
  const s = sizes[size];
  const markStyle = onDark ? {
    width: s.mark - 8,
    height: s.mark - 8,
    background: 'var(--white)',
    borderRadius: 'var(--radius-sm)',
    padding: 4,
    boxSizing: 'content-box'
  } : {
    width: s.mark,
    height: s.mark
  };
  const inner = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    },
    className: className
  }, /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Spanish Hobby",
    style: markStyle
  }), showWord && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: `${s.word}px`,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-0.01em',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--white)' : 'var(--teal-600)'
    }
  }, "Spanish"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--brown-200)' : 'var(--brown-500)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "Hobby")));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        textDecoration: 'none',
        display: 'inline-flex'
      }
    }, inner);
  }
  return inner;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionBand.jsx
try { (() => {
/**
 * Spanish Hobby — SectionBand
 * The full-bleed colored band used to break up long pages: deep teal by
 * default (white text), with brown and peach variants for rhythm. Centered
 * statement copy with an optional short rule and icon badge beneath.
 */
function SectionBand({
  children,
  tone = 'teal',
  align = 'center',
  rule = false,
  icon,
  className = '',
  style
}) {
  const tones = {
    teal: {
      bg: 'var(--surface-inverse)',
      fg: 'var(--white)',
      sub: 'var(--teal-200)',
      badge: 'var(--white)',
      badgeFg: 'var(--teal-700)'
    },
    brown: {
      bg: 'var(--surface-inverse-alt)',
      fg: 'var(--white)',
      sub: 'var(--brown-100)',
      badge: 'var(--white)',
      badgeFg: 'var(--brown-600)'
    },
    peach: {
      bg: 'var(--surface-accent-wash)',
      fg: 'var(--text-strong)',
      sub: 'var(--text-muted)',
      badge: 'var(--teal-600)',
      badgeFg: 'var(--white)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("section", {
    className: className,
    "data-tone": tone,
    style: {
      background: t.bg,
      color: t.fg,
      padding: 'var(--space-11) var(--pad-page-x)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--space-4)',
      '--text-strong': t.fg
    }
  }, children, rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '72px',
      height: '3px',
      background: 'currentColor',
      opacity: 0.6,
      borderRadius: '2px',
      marginTop: 'var(--space-2)'
    }
  }), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '54px',
      height: '54px',
      borderRadius: '50%',
      background: t.badge,
      color: t.badgeFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }))));
}
Object.assign(__ds_scope, { SectionBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionBand.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spanish Hobby — Badge
 * A small status/label pill. Quiet by default; tones map to the brand palette.
 * Never used for gamification or alarmist states.
 */
function Badge({
  children,
  tone = 'teal',
  variant = 'soft',
  icon,
  className = '',
  style,
  ...rest
}) {
  const tones = {
    teal: {
      solidBg: 'var(--teal-600)',
      softBg: 'var(--teal-50)',
      softFg: 'var(--teal-700)',
      line: 'var(--teal-200)'
    },
    brown: {
      solidBg: 'var(--brown-500)',
      softBg: 'var(--brown-50)',
      softFg: 'var(--brown-600)',
      line: 'var(--brown-200)'
    },
    orange: {
      solidBg: 'var(--orange-500)',
      softBg: 'var(--orange-50)',
      softFg: 'var(--orange-600)',
      line: 'var(--orange-200)'
    },
    neutral: {
      solidBg: 'var(--ink-700)',
      softBg: 'var(--ink-100)',
      softFg: 'var(--ink-700)',
      line: 'var(--ink-200)'
    },
    success: {
      solidBg: 'var(--success)',
      softBg: 'var(--success-bg)',
      softFg: 'var(--success)',
      line: '#BCD8C8'
    }
  };
  const t = tones[tone];
  const styles = {
    soft: {
      background: t.softBg,
      color: t.softFg,
      border: `1px solid ${t.line}`
    },
    solid: {
      background: t.solidBg,
      color: 'var(--white)',
      border: `1px solid ${t.solidBg}`
    },
    outline: {
      background: 'transparent',
      color: t.softFg,
      border: `1px solid ${t.line}`
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 11px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    ...styles[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: base
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      fontSize: '0.85em'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spanish Hobby — Button
 * Solid teal (primary), outlined teal (secondary), orange accent, and quiet
 * ghost variants. Calm interactions: gentle hover darkening, a small settle on
 * press. No gradients, no bounce.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '8px'
    },
    md: {
      padding: '12px 22px',
      fontSize: 'var(--text-base)',
      gap: '10px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-md)',
      gap: '12px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--action-text)',
      border: '1.5px solid var(--action)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--action-ghost-text)',
      border: '1.5px solid var(--action-ghost-border)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-text)',
      border: '1.5px solid var(--accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-ghost-text)',
      border: '1.5px solid transparent'
    },
    'on-teal': {
      background: 'var(--white)',
      color: 'var(--teal-700)',
      border: '1.5px solid var(--white)'
    },
    'outline-on-teal': {
      background: 'transparent',
      color: 'var(--white)',
      border: '1.5px solid var(--border-on-teal)'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    letterSpacing: '0.005em',
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-calm), box-shadow var(--duration-base) var(--ease-calm)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const hoverBg = {
    primary: 'var(--action-hover)',
    accent: 'var(--accent-hover)',
    outline: 'var(--action-ghost-hover-bg)',
    ghost: 'var(--action-ghost-hover-bg)',
    'on-teal': 'var(--teal-50)',
    'outline-on-teal': 'rgba(255,255,255,0.12)'
  };
  const handleEnter = e => {
    if (disabled) return;
    e.currentTarget.style.background = hoverBg[variant];
    if (variant === 'primary' || variant === 'accent') {
      e.currentTarget.style.borderColor = hoverBg[variant];
    }
  };
  const handleLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variants[variant].border.split(' ').pop();
    e.currentTarget.style.transform = 'none';
  };
  const handleDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
  };
  const handleUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: className,
    style: base,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onMouseDown: handleDown,
    onMouseUp: handleUp
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    className: iconRight,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spanish Hobby — Eyebrow
 * The small uppercase label that sits above a heading, often paired with a
 * short accent rule. Sets a calm, editorial tone for a section.
 */
function Eyebrow({
  children,
  color = 'accent',
  rule = false,
  as = 'p',
  className = '',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--orange-500)',
    teal: 'var(--teal-600)',
    brown: 'var(--brown-500)',
    muted: 'var(--text-muted)',
    onTeal: 'var(--teal-200)'
  };
  const Tag = as;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    margin: 0,
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: colors[color],
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: base
  }, rest), children, rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '40px',
      height: '2px',
      background: 'currentColor',
      opacity: 0.55,
      borderRadius: '2px'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spanish Hobby — IconButton
 * A circular or rounded icon-only control. The filled-teal-circle treatment
 * echoes the brand's section icons; also available as outline and ghost.
 */
function IconButton({
  icon,
  label,
  variant = 'solid',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      box: '34px',
      font: '14px'
    },
    md: {
      box: '44px',
      font: '18px'
    },
    lg: {
      box: '56px',
      font: '22px'
    }
  };
  const variants = {
    solid: {
      background: 'var(--teal-600)',
      color: 'var(--white)',
      border: '1.5px solid var(--teal-600)'
    },
    brown: {
      background: 'var(--brown-500)',
      color: 'var(--white)',
      border: '1.5px solid var(--brown-500)'
    },
    accent: {
      background: 'var(--orange-500)',
      color: 'var(--white)',
      border: '1.5px solid var(--orange-500)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--teal-600)',
      border: '1.5px solid var(--teal-600)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--teal-600)',
      border: '1.5px solid transparent'
    }
  };
  const hover = {
    solid: 'var(--teal-700)',
    brown: 'var(--brown-600)',
    accent: 'var(--orange-600)',
    outline: 'var(--teal-50)',
    ghost: 'var(--teal-50)'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes[size].box,
    height: sizes[size].box,
    fontSize: sizes[size].font,
    borderRadius: '50%',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-calm)',
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: className,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hover[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Spanish Hobby — Checkbox
 * A square teal checkbox with a calm check animation. Label sits to the right.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  className = '',
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const fieldId = id || `sh-cb-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!internal);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--teal-600)' : 'var(--border-strong)'}`,
      background: on ? 'var(--teal-600)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)',
      fontSize: '11px',
      transition: 'var(--transition-color)'
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    "aria-hidden": "true"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spanish Hobby — Input
 * A calm text field with an optional label and helper text. 6px radius, warm
 * neutral border, teal focus ring. Supports a leading icon.
 */
function Input({
  label,
  helper,
  icon,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  invalid = false,
  disabled = false,
  id,
  className = '',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `sh-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = invalid ? 'var(--orange-500)' : focus ? 'var(--teal-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '14px',
      color: focus ? 'var(--teal-600)' : 'var(--text-subtle)',
      fontSize: '14px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: icon ? '12px 14px 12px 38px' : '12px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--ink-100)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      outline: 'none',
      boxShadow: focus ? invalid ? '0 0 0 3px rgba(217,130,75,0.18)' : '0 0 0 3px rgba(90,155,168,0.18)' : 'none',
      transition: 'var(--transition-color), box-shadow var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, rest))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--orange-600)' : 'var(--text-subtle)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Spanish Hobby — NavBar
 * The brand's two-tier site header: a brown utility strip (contact + socials)
 * above a clean horizontal nav with the logo and a single accent CTA.
 */
function NavBar({
  markSrc = 'assets/logo-mark.png',
  items = [],
  activeItem,
  contact = 'Call us today! +1-214-683-2944 · hola@SpanishHobby.com',
  socials = [],
  cta,
  onItemClick,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: className,
    style: {
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-utility-bar)',
      color: 'var(--white)',
      padding: '8px var(--pad-page-x)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.95
    }
  }, contact), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, socials.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: s.href || '#',
    "aria-label": s.label,
    style: {
      color: 'var(--white)',
      fontSize: '14px',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: s.icon,
    "aria-hidden": "true"
  }))))), /*#__PURE__*/React.createElement("nav", {
    style: {
      background: 'var(--white)',
      padding: 'var(--space-4) var(--pad-page-x)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Spanish Hobby",
    style: {
      width: '40px',
      height: '40px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '24px',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-0.01em',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-600)'
    }
  }, "Spanish"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brown-500)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "Hobby"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map((it, i) => {
    const active = (activeItem ?? '') === it;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onItemClick && onItemClick(it);
      },
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: active ? 'var(--brown-500)' : 'var(--text-body)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'var(--transition-color)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--teal-600)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      }
    }, it);
  }), cta && /*#__PURE__*/React.createElement("a", {
    href: cta.href || '#',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--action)',
      color: 'var(--white)',
      padding: '9px 18px',
      borderRadius: 'var(--radius-button)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      textDecoration: 'none'
    }
  }, cta.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · About
const {
  Button
} = window.SpanishHobbyDesignSystem_99e317;
function AboutScreen() {
  const A = window.SH_ASSETS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '72px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Spanish Hobby: Rooted in Language"), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: '120px',
      height: '3px',
      border: 'none',
      background: 'var(--rule-accent)',
      margin: '20px 0 36px',
      marginLeft: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Spanish Hobby was born from the belief that language isn't just a skill to master; it's a living, breathing way of connecting with people, cultures, and ourselves. This project is rooted in the deeper structures of Spanish, but also in its everyday rhythm, its cultural soul, and the moments that make it feel alive."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Behind every page, there's intention. Every section has been crafted to reflect not just how Spanish works, but why it matters \u2014 from the hidden structures that shape meaning to the sayings that make people laugh or pause."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Meet the educator behind it \u2014 handpicked care, and a deep love for the language.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-700)',
      padding: '64px 32px 0',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1.5px solid rgba(255,255,255,0.5)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 40px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-3xl)',
      margin: '0 0 18px'
    }
  }, "Anya"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--white)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '74ch'
    }
  }, "I'm a trained journalist with a deep passion for language and communication. Over time, that passion expanded into education. I'm currently completing my certification as a Spanish teacher and pursuing a Master's Degree in Teaching Spanish as a Foreign Language."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--teal-200)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '74ch'
    }
  }, "This space is part of that journey, alongside my personal literature project, AnyaLiteral.com, where I explore language through stories, reflections, and alternative formats. Everything I create is rooted in the same goal: to make Spanish feel more human, more accessible, and more meaningful.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'structure-2.jpg',
    alt: "",
    style: {
      width: 'min(620px, 100%)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '18px',
      transform: 'translateX(-50%)',
      fontSize: 'clamp(56px, 10vw, 120px)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--white)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      textShadow: '0 4px 18px rgba(0,0,0,0.25)'
    }
  }, "Hola")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      maxWidth: '20ch',
      margin: '0 auto 24px'
    }
  }, "At Spanish Hobby, teaching is more than a job; it's a calling."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Begin your journey with a free lesson")));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BuildingBlocksScreen.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · The Building Blocks
const {
  ArticleCard
} = window.SpanishHobbyDesignSystem_99e317;
function BuildingBlocksScreen() {
  const A = window.SH_ASSETS;
  const parts = [{
    img: 'tonal-warm.jpg',
    t: 'Spanish Interjections',
    e: 'Interjections add emotion, authenticity and rhythm to your Spanish. Think of them as the sparks of a conversation.'
  }, {
    img: 'tonal-teal.jpg',
    t: 'Spanish Conjunctions',
    e: 'Conjunctions connect thoughts, actions and reasons. Learn how they shape meaningful communication from one sentence to the next.'
  }, {
    img: 'structure-1.jpg',
    t: 'Spanish Prepositions',
    e: 'Small words with big meaning. You may not even notice them when native speakers use them — but without them, sentences fall apart.'
  }, {
    img: 'tonal-peach.jpg',
    t: 'Spanish Pronouns',
    e: 'Pronouns replace nouns to make your sentences smoother and less repetitive.'
  }, {
    img: 'structure-2.jpg',
    t: 'Spanish Adverbs',
    e: 'Discover how Spanish adverbs add nuance, precision and emotion to your sentences.'
  }, {
    img: 'tonal-teal.jpg',
    t: 'Spanish Determiners',
    e: 'Learn the six types of Spanish determiners, and how they shape meaning in everyday Spanish.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '72px 32px 36px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px, 5.5vw, 60px)',
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em'
    }
  }, "The Building Blocks: The 9 Parts of a Spanish Sentence"), /*#__PURE__*/React.createElement("img", {
    src: A + 'structure-1.jpg',
    alt: "Wooden blocks showing parts of speech",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      marginTop: '28px',
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-700)',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-wide)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: i,
    image: A + p.img,
    title: p.t,
    excerpt: p.e,
    readMoreLabel: "Explore"
  })))));
}
window.BuildingBlocksScreen = BuildingBlocksScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BuildingBlocksScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · Footer
// Two expandable resource panels on a teal band, then a brown copyright bar.
const {
  IconButton
} = window.SpanishHobbyDesignSystem_99e317;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal-700)',
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, ['Explore more inside Spanish Hobby', 'Helpful external resources'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--teal-600)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      color: 'var(--white)',
      border: '1px solid rgba(255,255,255,0.18)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '26px',
      height: '26px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--teal-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brown-500)',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--white)',
      fontSize: 'var(--text-sm)',
      opacity: 0.95
    }
  }, "\xA9 2025 Spanish Hobby. All rights reserved. Created by Anya Leal."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '32px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "fa-solid fa-arrow-up",
    label: "Back to top",
    variant: "ghost",
    size: "sm",
    style: {
      color: 'var(--white)',
      borderColor: 'rgba(255,255,255,0.4)',
      background: 'rgba(0,0,0,0.12)'
    }
  }))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · Hero
// The homepage hero: a soft teal→cream wash, small "Learn" eyebrow, a large
// display word, an underlined teal sub-phrase, and a calm lead line.
const {
  Eyebrow
} = window.SpanishHobbyDesignSystem_99e317;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(105deg, var(--teal-200) 0%, var(--teal-100) 38%, var(--brown-100) 78%, var(--orange-100) 100%)',
      padding: '84px 32px 92px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal-700)',
      letterSpacing: '-0.01em'
    }
  }, "Learn"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '2px 0 8px',
      fontSize: 'clamp(64px, 11vw, 132px)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--brown-500)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em'
    }
  }, "Spanish"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontSize: 'clamp(28px, 4vw, 44px)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal-700)',
      textDecoration: 'underline',
      textDecorationThickness: '3px',
      textUnderlineOffset: '8px',
      letterSpacing: '-0.01em'
    }
  }, "Without Even Trying"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto',
      maxWidth: '46ch',
      fontSize: 'var(--text-md)',
      color: 'var(--ink-700)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "A fresh way to explore: learn the structure, master the parts, and live the language.")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HiddenStructureScreen.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · The Hidden Structure
const {
  Button,
  Eyebrow,
  Badge
} = window.SpanishHobbyDesignSystem_99e317;
function HiddenStructureScreen() {
  const A = window.SH_ASSETS;
  const topics = [{
    t: 'Spanish Phonetics',
    s: 'Spanish Phonetics: The Physical Sounds of the Language',
    icon: 'fa-solid fa-volume-high',
    tone: 'teal'
  }, {
    t: 'Spanish Phonology',
    s: 'What Is Spanish Phonetics & Rhythm?',
    icon: 'fa-solid fa-volume-high',
    tone: 'brown'
  }, {
    t: 'Spanish Morphology',
    s: 'Spanish Morphology: How Words Are Built',
    icon: 'fa-solid fa-puzzle-piece',
    tone: 'teal'
  }, {
    t: 'Spanish Syntax',
    s: 'Spanish Syntax: How Spanish Sentences Work',
    icon: 'fa-solid fa-align-left',
    tone: 'brown'
  }, {
    t: 'Semantics and Pragmatics of Spanish',
    s: 'Spanish Semantics & Pragmatics: Why Words Aren\'t Enough',
    icon: 'fa-solid fa-brain',
    tone: 'teal'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: '72px 32px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 6vw, 68px)',
      color: 'var(--teal-600)',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      marginBottom: '8px'
    }
  }, "The Hidden Structure of Spanish")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '24px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)'
    }
  }, "Why is it hidden?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      marginBottom: '6px'
    }
  }, "Because most learners never see it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, "When people try to learn Spanish, they often jump straight into words and phrases, without ever understanding how the language is built underneath."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      marginTop: '48px'
    }
  }, "What is this section about?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      marginBottom: '6px'
    }
  }, "This part of the site explores the foundations of Spanish \u2014 the invisible patterns that give the language its shape and flow."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, "You'll understand how sounds connect, how words are formed, how sentences come together, and how meaning shifts depending on context."), /*#__PURE__*/React.createElement("img", {
    src: A + 'structure-1.jpg',
    alt: "The hidden structure of Spanish",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      marginTop: '28px',
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-100)',
      padding: '72px 32px',
      marginTop: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, topics.map((tp, i) => {
    const bg = tp.tone === 'teal' ? 'var(--teal-700)' : 'var(--brown-500)';
    const sub = tp.tone === 'teal' ? 'var(--teal-200)' : 'var(--brown-100)';
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'block',
        background: bg,
        borderRadius: 'var(--radius-lg)',
        padding: '30px 36px',
        textDecoration: 'none',
        boxShadow: 'var(--shadow-sm)',
        transition: 'var(--transition-lift)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        color: 'var(--white)',
        fontSize: 'var(--text-xl)',
        margin: '0 0 14px'
      }
    }, tp.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: '14px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: sub,
        fontSize: '15px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: tp.icon,
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: sub,
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)'
      }
    }, tp.s)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      marginTop: '20px'
    }
  }, ['structure-2.jpg', 'tonal-teal.jpg', 'tonal-peach.jpg', 'tonal-warm.jpg'].map((im, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: A + im,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '3/4',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)'
    }
  }))))));
}
window.HiddenStructureScreen = HiddenStructureScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HiddenStructureScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Spanish Hobby — Website UI Kit · Home
const NS = window.SpanishHobbyDesignSystem_99e317;
const {
  FeatureCard,
  ArticleCard,
  SectionBand,
  Button,
  Eyebrow
} = NS;
function HomeScreen() {
  const A = window.SH_ASSETS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-wide)',
      margin: '0 auto',
      padding: '64px 32px',
      transform: 'translateY(-48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "fa-solid fa-eye-low-vision",
    title: "The Hidden Structure",
    style: {
      boxShadow: 'none',
      borderRadius: 0
    }
  }, "What gives Spanish its shape and logic. It's what you don't see, but it's always there."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "fa-solid fa-puzzle-piece",
    title: "The Building Blocks",
    highlighted: true,
    style: {
      borderRadius: 0
    }
  }, "Learn what each piece does, how it behaves, and how they all fit together \u2014 the visible building blocks of every sentence."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "fa-solid fa-face-smile-wink",
    title: "Real World Spanish",
    style: {
      boxShadow: 'none',
      borderRadius: 0
    }
  }, "How it's spoken, how it's mastered, how it's lived."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '8px 32px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brown-500)',
      textDecoration: 'underline',
      textDecorationThickness: '3px',
      textUnderlineOffset: '6px'
    }
  }, "Learn Spanish"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-800)'
    }
  }, "Without Even Trying")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Spanish Hobby is a free guide designed to help English speakers understand Spanish clearly and naturally. Instead of memorizing random phrases, you'll explore how Spanish works \u2014 from its sounds to the way meaning shifts with context.")), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "teal",
    rule: true,
    icon: "fa-solid fa-thumbs-up"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      textTransform: 'none'
    }
  }, "All content on this site is 100% free and designed with care."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--teal-200)',
      maxWidth: '54ch',
      fontSize: 'var(--text-md)'
    }
  }, "No paywalls, no sign-ups, no pressure \u2014 just a clear and thoughtful way to learn Spanish.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-wide)',
      margin: '0 auto',
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      alignItems: 'end',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(56px, 8vw, 96px)',
      fontWeight: 'var(--weight-extrabold)',
      color: 'var(--brown-500)',
      lineHeight: 0.92,
      margin: 0,
      letterSpacing: '-0.03em'
    }
  }, "Latest"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--teal-600)',
      margin: '4px 0 0'
    }
  }, "Lessons & Thoughts")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, "This space is always evolving. As we keep learning, reflecting and creating, we update each section with new insights \u2014 a phrase we've rethought, a structure that finally clicked, or a cultural detail that made us smile."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: '120px',
      height: '3px',
      border: 'none',
      background: 'var(--rule-accent)',
      margin: '20px 0 0',
      marginLeft: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, [{
    img: 'structure-1.jpg',
    t: 'Spanish Semantics & Pragmatics',
    d: 'May 29th, 2025',
    e: 'Spanish Semantics and Pragmatics help you go beyond words to truly understand what\'s said and what\'s meant.',
    cta: 'Go to The Hidden Structure'
  }, {
    img: 'tonal-warm.jpg',
    t: 'Spanish Interjections',
    d: 'June 13th, 2025',
    e: 'Spanish interjections add emotion, authenticity and rhythm to your Spanish. Think of them as the sparks of a conversation.',
    cta: 'Go to The Building Blocks'
  }, {
    img: 'structure-2.jpg',
    t: 'Cultural Nuances in Spanish',
    d: 'June 16th, 2025',
    e: 'Cultural nuances in Spanish go beyond slang or funny expressions. It\'s about social codes, habits, and emotional real conversations.',
    cta: 'Go to Real World Spanish'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(ArticleCard, {
    image: A + c.img,
    title: c.t,
    date: c.d,
    excerpt: c.e,
    style: {
      boxShadow: 'var(--shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, c.cta))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionBand = __ds_scope.SectionBand;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
