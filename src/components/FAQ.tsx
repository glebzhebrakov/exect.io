"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-surface">
      <div className="section-pad py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                FAQ
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
                Direct answers for infrastructure buyers.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                If you are evaluating how to own AI infrastructure—not rent a
                chatbot—start here.
              </p>
            </div>

            <div className="divide-y divide-line border-y border-line">
              {faqs.map((item, index) => {
                const isOpen = open === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent"
                    >
                      <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink md:text-base">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className="mt-0.5 font-mono text-sm text-ink-subtle"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-10 text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
