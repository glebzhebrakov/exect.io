import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="section-pad py-14 md:py-16">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-ink">
                Exect
              </p>
              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-muted">
                Enterprise AI infrastructure engineering. We design, build, and
                optimize private AI platforms for medium and large organizations.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-ink-muted">
                <li>
                  <a
                    href="mailto:platform@exect.io"
                    className="transition-colors hover:text-ink"
                  >
                    platform@exect.io
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-ink">
                    Architecture review
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] text-ink-subtle">
              © {new Date().getFullYear()} Exect. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-ink-subtle">
              Enterprise AI platforms · Private by design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
