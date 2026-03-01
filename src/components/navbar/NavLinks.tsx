import Link from "next/link";
import { NAV_LINKS } from "./nav-config";

type NavLinksProps = {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const isMobile = variant === "mobile";
  const base =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";
  const inactive =
    "text-zinc-600 hover:bg-zinc-100 hover:text-foreground dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-foreground";

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col gap-1"
          : "hidden items-center gap-1 sm:flex sm:gap-2"
      }
      role="list"
    >
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href} role="listitem">
          <Link
            href={href}
            className={`${base} ${inactive}`}
            onClick={onNavigate}
            aria-current={href === "/" ? "page" : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
