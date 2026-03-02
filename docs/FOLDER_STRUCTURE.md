# Recommended Folder Structure

Aligned with `ARCHITECTURE.md`. Use this as the target structure as the portfolio grows.

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, providers, shell)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + CSS variables
│   ├── not-found.tsx       # (future) 404 page
│   └── [project]/          # (future) Dynamic project pages
│       └── page.tsx
├── components/
│   ├── navbar/             # Layout: sticky nav
│   │   ├── Navbar.tsx
│   │   ├── NavLinks.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── MobileMenu.tsx
│   │   └── index.ts
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   └── ui/                 # (future) Reusable primitives (Button, Link, etc.)
├── sections/               # Page sections (Hero, About, Skills, etc.)
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── education/          # Stacking scroll
│   ├── projects/           # Carousel
│   ├── contact/
│   └── footer/
├── utils/
│   └── cn.ts               # (future) className helper
├── hooks/
│   └── useMediaQuery.ts    # (future) Breakpoint hooks
└── types/
    └── index.ts            # (future) Shared types
```

**Conventions**

- **app/** — Routes and layouts only; minimal UI logic.
- **components/** — Reusable, composable UI (layout, navbar, providers, ui primitives).
- **sections/** — Full-width page sections; can compose components and hold section-specific logic.
- **utils/** — Pure helpers (cn, formatters, constants).
- **hooks/** — Client-side hooks (media queries, scroll, etc.).
- **types/** — Shared TypeScript types/interfaces.

Do not add new top-level folders without updating this doc and `ARCHITECTURE.md`.
