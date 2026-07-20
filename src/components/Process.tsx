import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-bg">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Delivery
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
              A delivery model built for platforms, not projects.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
              Clear phases, engineering artifacts at every gate, and ownership
              transfer designed in from the start.
            </p>
          </div>

          <ol className="mt-14">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                className="relative grid gap-4 border-t border-line py-8 md:grid-cols-[6rem_minmax(0,0.85fr)_minmax(0,1.35fr)] md:gap-10 md:py-10"
              >
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[1.15rem] top-[4.5rem] hidden h-[calc(100%-2.5rem)] w-px bg-accent/30 md:block"
                  />
                )}
                <span className="font-mono text-sm text-accent">{step.step}</span>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
