"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "./nav-config";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <AnimatePresence>
          <>
            <motion.div
              role="presentation"
              aria-hidden
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col gap-6 border-l border-zinc-200 bg-background p-6 pt-20 shadow-xl dark:border-zinc-800 sm:hidden"
            >
              <nav id="mobile-nav" aria-label="Primary">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href} role="listitem">
                      <Link
                        href={href}
                        className="rounded-md px-3 py-2 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:text-zinc-300 dark:hover:bg-zinc-800"
                        onClick={onClose}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        </AnimatePresence>
      )}
    </AnimatePresence>
  );
}
