# Key Architectural Decisions

## 1. Folder structure (`docs/FOLDER_STRUCTURE.md`)

- **app/** — Only routes and root layout; no business logic. Layout composes providers and shell (Navbar + main).
- **components/** — Reusable UI: `navbar/` (layout), `providers/` (theme), future `ui/` for primitives.
- **sections/** — Reserved for page sections (Hero, About, Skills, etc.) per `ARCHITECTURE.md`; keeps pages thin and sections testable.

This matches the component-driven, separation-of-concerns rules in `AGENTS.md` and `ARCHITECTURE.md`.

## 2. Root layout

- **Server component** — Layout stays server-rendered; only children that need interactivity are client components.
- **ThemeProvider** — Wraps the app so `next-themes` can toggle `class` on `<html>` for Tailwind `dark:`; `suppressHydrationWarning` on `<html>` avoids next-themes hydration mismatch.
- **Semantic shell** — `<main id="main" role="main">` for skip links and screen readers; Navbar lives outside main as site chrome.

## 3. Navbar

- **Composition** — Navbar is built from small pieces: `NavLinks`, `ThemeToggle`, `MobileMenu`, plus shared `nav-config`. Each file has one responsibility; Navbar only orchestrates state (mobile open/close).
- **Client boundary** — Only the Navbar and its interactive parts are `"use client"`; `NavLinks` is server-capable (no hooks) and could be shared by header and mobile menu.
- **Accessibility** — Semantic `<header>`, `<nav>`, `<ul>`/`<li>`; hamburger uses `aria-expanded`, `aria-controls`, and `aria-label`; theme button has `aria-label` and `title`; mobile overlay is `aria-modal="true"`; Escape closes the menu; focus not trapped in menu to keep behavior simple and avoid extra deps.
- **Sticky + backdrop** — `sticky top-0` with `backdrop-blur` and translucent background so content scrolls underneath without heavy shadows.

## 4. Theming

- **next-themes** — Already in the stack; `attribute="class"` and `defaultTheme="system"` so Tailwind `dark:` works and system preference is respected.
- **Theme toggle** — Mounted state avoids hydration flash; placeholder span preserves layout before client hydration.

## 5. No new dependencies

- All behavior uses existing stack (Next.js, TypeScript, Tailwind, Framer Motion, next-themes). No new packages added.

## 6. Performance and maintainability

- **Minimal client JS** — Only navbar state and theme toggle run on the client; rest is server or static.
- **Single nav config** — `nav-config.ts` defines links once; desktop and mobile menus both consume it, so adding/removing items is one place.
- **Framer Motion** — Used only for mobile menu open/close and overlay; no heavy layout animations yet.

These choices keep the codebase aligned with `ARCHITECTURE.md` and `AGENTS.md` and set a clear pattern for adding sections and future project pages.
