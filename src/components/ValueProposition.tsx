import { valueProps } from "@/lib/content";

export function ValueProposition() {
  return (
    <section id="platforms" className="border-t border-line bg-bg-elevated">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Positioning
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
              Infrastructure engineers for enterprise AI—not another model demo.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
              Deploying an LLM is not the hard part. Designing a platform that is
              private, sized correctly, integrable with your systems, and operable
              in production is. That is the work we do.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {valueProps.map((item) => (
              <article
                key={item.title}
                className="bg-bg-elevated p-7 md:p-9"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
