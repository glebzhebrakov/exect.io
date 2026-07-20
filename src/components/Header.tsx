import { navLinks } from "@/lib/content";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-pad">
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
              Exect
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle sm:inline">
              AI Infrastructure
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-9 items-center bg-ink px-3.5 text-[13px] font-medium text-bg-elevated transition-colors hover:bg-accent"
          >
            Talk to engineering
          </a>
        </div>
      </div>
    </header>
  );
}
