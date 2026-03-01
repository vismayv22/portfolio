import Link from "next/link";
import { NAV_LINKS } from "./nav-config";

export function NavLinks() {
  const base =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";
  const inactive =
    "text-zinc-600 hover:bg-background-muted hover:text-foreground";

  return (
    <ul
      className="hidden items-center gap-1 sm:flex sm:gap-2"
      role="list"
    >
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href} role="listitem">
          <Link
            href={href}
            className={`${base} ${inactive}`}
            aria-current={href === "/" ? "page" : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
