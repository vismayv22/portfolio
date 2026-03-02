"use client";

import { useCallback, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function NavbarActions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <div className="flex shrink-0 items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-transparent text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 sm:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMobileMenu}
        >
          <HamburgerIcon open={mobileMenuOpen} className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}

function HamburgerIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        {open ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </>
        )}
      </svg>
    </span>
  );
}

