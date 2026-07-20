import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="capabilities" className="border-t border-line bg-surface">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Capabilities
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
                End-to-end AI platform engineering.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
                From reference architecture to production operations—one engineering
                team accountable for the full stack of private enterprise AI.
              </p>
            </div>
          </div>

          <ul className="mt-14 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li
                key={service.id}
                className="group grid gap-3 py-7 transition-colors hover:bg-bg md:grid-cols-[4.5rem_minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-8 md:py-8"
              >
                <span className="font-mono text-[12px] text-ink-subtle">
                  {service.id}
                </span>
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink md:text-lg">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {service.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
