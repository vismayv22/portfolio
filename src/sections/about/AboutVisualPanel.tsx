export function AboutVisualPanel() {
  const skills = [
    { label: "React & Next.js", value: "UI architecture & routing strategy" },
    { label: "TypeScript-first", value: "Strict types & safe refactors" },
    { label: "Performance", value: "Rendering budgets & CWV awareness" },
    { label: "Design systems", value: "Tokens, primitives, and constraints" },
    { label: "Ownership", value: "Feature lifecycles & long-term stewardship" },
    { label: "Full-stack & AI", value: "APIs, data flows, and ML-assisted UX" },
  ];

  return (
    <aside
      aria-label="Snapshot of how I approach frontend engineering"
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-background-muted/40 via-background/0 to-background-muted/40 opacity-70" />

      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-5 shadow-lg backdrop-blur-md sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-foreground/20" />
            <span className="inline-flex h-2 w-2 rounded-full bg-foreground/30" />
            <span className="inline-flex h-2 w-2 rounded-full bg-foreground/40" />
            <span>about.tsx</span>
          </div>
          <span className="rounded-full bg-background-muted px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/60">
            Frontend focus
          </span>
        </div>

        <div className="space-y-3 rounded-2xl bg-linear-to-br from-background-muted/80 via-background/60 to-background-muted/80 p-4 text-xs font-mono leading-relaxed text-foreground/80 sm:text-[0.78rem]">
          <p className="text-foreground/60">&#x2f;&#x2f; Architecture snapshot</p>
          <p>
            <span className="text-foreground/60">stack</span>
            <span className="text-foreground">:</span>{" "}
            <span className="text-foreground/80">
              [ &quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot; ]
            </span>
          </p>
          <p>
            <span className="text-foreground/60">focus</span>
            <span className="text-foreground">:</span>{" "}
            <span className="text-foreground/80">
              &quot;scalable interfaces, performance, thoughtful DX&quot;
            </span>
          </p>
          <p>
            <span className="text-foreground/60">mode</span>
            <span className="text-foreground">:</span>{" "}
            <span className="text-foreground/80">
              &quot;frontend-led, system-minded&quot;
            </span>
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="group rounded-2xl border border-foreground/10 bg-background/70 p-3 text-xs transition-transform duration-300 ease-out hover:bg-background-muted/80 sm:text-[0.78rem]"
            >
              <p className="mb-1 flex items-center justify-between gap-2 text-[0.7rem] font-semibold tracking-wide text-foreground/80">
                <span>{skill.label}</span>
                {/* <span className="rounded-full bg-background px-1.5 py-0.5 text-[0.6rem] font-medium text-foreground/70">
                  + impact
                </span> */}
              </p>
              <p className="text-foreground/60">{skill.value}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.7rem] text-foreground/50">
          Designed to stay stable as the product surface area, the team, and the
          stack evolve.
        </p>
      </div>
    </aside>
  );
}

