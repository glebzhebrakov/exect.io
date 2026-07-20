import { stack } from "@/lib/content";

export function TechnologyStack() {
  return (
    <section id="stack" className="border-t border-line bg-bg-elevated">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Technology
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
              The stack enterprises actually run.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
              We engineer on proven serving, orchestration, and security
              foundations—selected for your workload profile, not our preferred vendor.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <div key={group.group}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-accent/40 pl-3 text-[15px] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
