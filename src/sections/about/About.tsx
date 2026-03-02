import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { AboutVisualPanel } from "./AboutVisualPanel";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-foreground/5 bg-background"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start lg:gap-16 lg:px-8 lg:py-24">
        <ScrollReveal className="space-y-6">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
              About Me
            </p>
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Frontend that scales with the product.
            </h2>
          </header>

          <div className="space-y-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
            <p>
              I build React and Next.js interfaces that feel fast, stay stable
              as they grow, and are straightforward for teams to ship on. My
              default is TypeScript-first: strong types, clear contracts between
              components, and patterns that make refactors safe instead of
              risky.
            </p>
            {/* <p>
              On the UI side, I think in systems, not pages. Design tokens,
              composition-friendly primitives, and predictable layout patterns
              matter to me as much as the visuals themselves. That focus lets
              teams ship new surfaces without reinventing how spacing,
              typography, and interaction states work every time.
            </p> */}
            <p>
              Performance is part of my design process, not an afterthought. I’m
              comfortable reasoning about rendering boundaries, server vs client
              components, network waterfalls, and how seemingly small choices
              around data fetching, memoization, and asset loading show up in
              Core Web Vitals.
            </p>
            <p>
              Lately, I&apos;ve been leaning into full-stack ownership — shaping
              APIs, shipping end-to-end features, and exploring AI-powered
              capabilities where UX, latency, and reliability all matter.</p>
            <p>
              I enjoy leading frontend architecture, stewarding long-running
              projects, and still obsessing over the details on screen.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:pt-2">
          <AboutVisualPanel />
        </ScrollReveal>
      </div>
    </section>
  );
}
