import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { NavbarActions } from "./NavbarActions";

const LOGO_LABEL = "Portfolio home";

export function Navbar() {
  return (
    <>
      <header
        className="sticky top-0 z-30 w-full border-b border-zinc-200/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-zinc-800/80"
        role="banner"
      >
        <nav
          className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6"
          aria-label="Primary"
        >
          {/* Logo */}
          <div className="flex shrink-0">
            <Link
              href="/"
              className="rounded-md font-semibold text-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              aria-label={LOGO_LABEL}
            >
              <span className="text-lg sm:text-xl">Portfolio</span>
            </Link>
          </div>

          {/* Center: desktop nav links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
            <NavLinks />
          </div>

          {/* Right: theme toggle + hamburger (client-only island) */}
          <NavbarActions />
        </nav>
      </header>
    </>
  );
}
