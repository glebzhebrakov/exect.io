import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="border-t border-line bg-bg">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Industries
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-ink">
              Built for regulated, high-stakes environments.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted md:text-base">
              Medium and large organizations where privacy, auditability, and
              operational reliability matter more than speed to a demo.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <article key={item.title} className="border-t border-line pt-5">
                <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
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
