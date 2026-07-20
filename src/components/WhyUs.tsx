import { differentiators } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="why" className="border-t border-line bg-surface">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                Why Exect
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
                Advantage is platform depth—not model access.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-muted md:text-base">
                Anyone can wire up an endpoint. Few teams can design how models are
                selected, workloads distributed, GPUs sized, inference optimized,
                and systems integrated—then keep it reliable in production.
              </p>
            </div>

            <ol className="space-y-0 divide-y divide-line border-y border-line">
              {differentiators.map((item, index) => (
                <li key={item.title} className="grid gap-2 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-5">
                  <span className="font-mono text-[12px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
