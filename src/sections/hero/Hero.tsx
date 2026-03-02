import Link from "next/link";
import { HERO_DATA } from "./hero-data";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br  px-4 py-20 from-background 
    via-background/90 
    to-background/80 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-6 text-center lg:max-w-xl lg:text-left">
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {HERO_DATA.name}
          </h1>
          <p className="text-lg font-medium text-foreground/60 sm:text-xl">
            {HERO_DATA.title}
          </p>
          <p className="text-base leading-relaxed text-foreground/60 sm:text-lg">
            {HERO_DATA.tagline}
          </p>
          <p className="text-sm leading-relaxed text-foreground/50 sm:text-base">
            {HERO_DATA.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href={HERO_DATA.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background hover:shadow-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {HERO_DATA.primaryCta.label}
            </Link>
            <Link
              href={HERO_DATA.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground hover:shadow-md"
            >
              {HERO_DATA.secondaryCta.label}
            </Link>
          </div>
        </div>

        <HeroImage />
      </div>
    </section>
  );
}
