"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/platform@exect.io";

type Status = "idle" | "sending" | "sent" | "error";

export function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to send the request.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send the request. Try emailing platform@exect.io."
      );
    }
  }

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
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="Exect — platform architecture review request"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  required
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
                  required
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
                  required
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
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-y border border-white/15 bg-transparent px-3 py-2.5 text-[14px] text-bg-elevated outline-none transition-colors placeholder:text-[#6b7785] focus:border-[#7eb8b5]"
                  placeholder="Workloads, deployment target (VPC / on-prem), approximate GPU or traffic scale…"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-11 w-full items-center justify-center bg-bg-elevated px-5 text-[14px] font-medium text-ink transition-colors hover:bg-[#7eb8b5] hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Submit review request"}
              </button>
              {status === "sent" && (
                <p className="text-[13px] leading-relaxed text-[#7eb8b5]">
                  Request sent. We will follow up at the email you provided.
                </p>
              )}
              {status === "error" && (
                <p className="text-[13px] leading-relaxed text-[#f0a8a0]">
                  {error}
                </p>
              )}
              {status === "idle" && (
                <p className="text-[12px] leading-relaxed text-[#6b7785]">
                  Submissions go to{" "}
                  <a
                    href="mailto:platform@exect.io"
                    className="text-[#8a96a3] underline decoration-white/20 underline-offset-2 hover:text-bg-elevated"
                  >
                    platform@exect.io
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
