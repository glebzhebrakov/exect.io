"use client";

export function CTA() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-bg-elevated">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7eb8b5]">
                Next step
              </p>
              <h2 className="mt-4 text-[clamp(1.85rem,3.8vw,3rem)] font-semibold tracking-[-0.03em]">
                Request a platform architecture review.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#b8c2ce] md:text-base">
                Share your current AI workloads, data residency constraints, and
                GPU or cloud posture. We respond with a structured assessment of
                architecture gaps, sizing risks, and a recommended delivery path.
              </p>
              <ul className="mt-8 space-y-2 font-mono text-[12px] text-[#8a96a3]">
                <li>— No product pitch deck</li>
                <li>— Engineering-led conversation</li>
                <li>— Clear on build vs. buy tradeoffs</li>
              </ul>
            </div>

            <form
              className="space-y-4 border border-white/15 bg-white/[0.03] p-6 md:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8a96a3]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full border border-white/15 bg-transparent px-3 py-2.5 text-[14px] text-bg-elevated outline-none transition-colors placeholder:text-[#6b7785] focus:border-[#7eb8b5]"
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8a96a3]"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border border-white/15 bg-transparent px-3 py-2.5 text-[14px] text-bg-elevated outline-none transition-colors placeholder:text-[#6b7785] focus:border-[#7eb8b5]"
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8a96a3]"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 w-full border border-white/15 bg-transparent px-3 py-2.5 text-[14px] text-bg-elevated outline-none transition-colors placeholder:text-[#6b7785] focus:border-[#7eb8b5]"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label
                  htmlFor="context"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8a96a3]"
                >
                  Platform context
                </label>
                <textarea
                  id="context"
                  name="context"
                  rows={4}
                  className="mt-2 w-full resize-y border border-white/15 bg-transparent px-3 py-2.5 text-[14px] text-bg-elevated outline-none transition-colors placeholder:text-[#6b7785] focus:border-[#7eb8b5]"
                  placeholder="Workloads, deployment target (VPC / on-prem), approximate GPU or traffic scale…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center bg-bg-elevated px-5 text-[14px] font-medium text-ink transition-colors hover:bg-[#7eb8b5] hover:text-ink"
              >
                Submit review request
              </button>
              <p className="text-[12px] leading-relaxed text-[#6b7785]">
                Form is a UI placeholder. Wire to your CRM or calendar when ready.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
