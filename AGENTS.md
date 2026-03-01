# Portfolio Project AI Rules

You are assisting in building a production-quality Next.js portfolio.

All code generation must strictly follow ARCHITECTURE.md.
Do not introduce dependencies without explicit approval.
Do not modify global styles or folder structure unless specified.

## Tech Stack
- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- No unnecessary external UI libraries

## Architecture Rules
- Use component-driven architecture
- Separate reusable components and page sections
- Do not mix server and client components incorrectly
- Keep files small and focused
- Avoid inline styles
- Use semantic HTML

## Code Quality Rules
- Write clean, readable TypeScript
- Avoid any
- Add proper typing
- Prefer functional components
- Ensure accessibility best practices

## Styling Rules
- Tailwind only
- Consistent spacing scale
- Soft shadows
- Rounded elements
- Responsive design mandatory

## Performance Rules
- Avoid unnecessary re-renders
- Use memoization only when needed
- Optimize animations
- Avoid heavy libraries

## Output Rules
- Provide complete implementation
- Explain complex logic briefly
- Do not skip files

## Theming & Color System Rules

This project uses **Tailwind v4 (CSS-first configuration)** with design tokens defined in `globals.css` via `@theme inline`.

### Color Usage Constraints

- Do **NOT** use default Tailwind palette utilities such as:
  - `bg-white`, `bg-black`
  - `zinc-*`, `gray-*`, `slate-*`, etc.
  - `dark:bg-*`, `dark:text-*`, or any `dark:` color modifiers
- Do **NOT** mix raw Tailwind color classes with token-based utilities.

### Required Approach

- All colors must use semantic design tokens mapped to CSS variables.
- Use utilities such as:
  - `bg-background`
  - `text-foreground`
  - `bg-background-muted`
  - `border-border`
  - `bg-accent`
- Dark mode works by toggling the `.dark` class on `<html>`, which updates CSS variables.
- Components must remain theme-agnostic and rely only on semantic tokens.

### Architectural Principle

The UI must be built on a scalable design system.  
No component should directly reference hardcoded colors.  
All theming must work automatically through CSS variable changes — without conditional rendering.