import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "var(--hero-wash)" }}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#dfe8e7]/70 to-transparent" />

      <div className="section-pad relative flex min-h-[100svh] flex-col pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="container-x flex flex-1 flex-col">
          <div className="max-w-3xl pt-6 md:pt-10">
            <p className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Enterprise AI Infrastructure
            </p>
            <h1 className="reveal reveal-delay-1 mt-5 text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
              Exect
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-[clamp(1.15rem,2.2vw,1.45rem)] font-medium leading-snug tracking-[-0.01em] text-ink">
              We design, build and optimize enterprise AI platforms.
            </p>
            <p className="reveal reveal-delay-2 mt-4 max-w-lg text-[15px] leading-relaxed text-ink-muted md:text-base">
              Private inference, GPU architecture, and production AI operations
              for organizations that need AI inside their security perimeter.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center bg-ink px-5 text-[14px] font-medium text-bg-elevated transition-colors hover:bg-accent"
              >
                Start a platform review
              </a>
              <a
                href="#capabilities"
                className="inline-flex h-11 items-center border border-line-strong bg-transparent px-5 text-[14px] font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
              >
                View capabilities
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-3 mt-auto pt-12 md:pt-16">
            <div className="relative -mx-2 overflow-hidden border border-line/80 bg-surface/40 backdrop-blur-[2px] md:mx-0">
              <div className="flex items-center justify-between border-b border-line/80 px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">
                  Reference topology · private AI platform
                </span>
                <span className="hidden font-mono text-[10px] text-ink-subtle sm:inline">
                  VPC / on-prem / sovereign
                </span>
              </div>
              <div className="aspect-[16/9] w-full md:aspect-[21/9] lg:aspect-[2.4/1]">
                <ArchitectureDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
