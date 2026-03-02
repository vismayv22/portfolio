/**
 * Single source of truth for navigation links.
 * Update here when adding/removing nav items.
 */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export type NavLinkItem = (typeof NAV_LINKS)[number];
