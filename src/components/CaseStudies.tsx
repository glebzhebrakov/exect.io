import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-line bg-bg-elevated">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Selected work
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
              Outcomes measured in production terms.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
              Representative engagements. Client names withheld under NDA.
              Metrics illustrate the class of result—not marketing composites.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="border border-line bg-surface p-7 md:p-10"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                  {study.sector}
                </p>
                <h3 className="mt-3 max-w-2xl text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                  {study.title}
                </h3>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-muted">
                  {study.outcome}
                </p>
                <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-subtle">
                        {metric.label}
                      </dt>
                      <dd className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-ink">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
