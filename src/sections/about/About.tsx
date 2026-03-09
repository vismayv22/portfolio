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
              I build fast, scalable products with React, Next.js, and
              TypeScript.
            </p>
            <p>
              I enjoy leading frontend architecture, stewarding long-running
              projects, and obsessing over the details on screen. My focus is on
              designing solid frontend foundations: reusable components, clean
              architecture, and interfaces that scale with the product.
            </p>
            <p>
              Lately, I&apos;ve been leaning into full-stack ownership - shaping
              APIs, shipping end-to-end features, and exploring AI-powered
              capabilities where UX, latency, and reliability all matter.
            </p>
            <p>
              I enjoy building products that balance strong engineering with
              thoughtful user experience. Clean architecture, reliable systems,
              and well-crafted interfaces are what make software stand the test
              of time. As I move further into full-stack and AI-driven
              applications, that mindset continues to guide the way I build.
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
