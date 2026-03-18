"use client";

import { useState } from "react";

const CONTACT_ITEMS = [
  {
    label: "General Inquiries",
    value: "info@ciphermind.ca",
    href: "mailto:info@ciphermind.ca",
  },
  {
    label: "Consulting & Engagements",
    value: "info@ciphermind.ca",
    href: "mailto:info@ciphermind.ca",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 border-t border-[rgba(0,200,160,0.08)]"
      style={{ backgroundColor: "#050d1a" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — header + email links */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#00c8a0]" />
              <span className="font-display text-[#00c8a0] text-xs tracking-[0.25em] uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e8edf4] mb-6 leading-tight">
              Let&apos;s start a conversation.
            </h2>
            <p className="text-[#8b9ab0] text-sm leading-relaxed mb-10 max-w-sm">
              Whether you need a targeted security audit or a long-term
              partnership, reach out and we will respond within one business day.
            </p>

            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="flex flex-col gap-0.5 group">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00c8a0]/60">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#e8edf4] group-hover:text-[#00c8a0] transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="border border-[rgba(0,200,160,0.12)] rounded-xl bg-[#0a1628] p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
                <span className="text-2xl text-[#00c8a0]">✓</span>
                <p className="font-display text-[#e8edf4] font-bold">Message received.</p>
                <p className="text-[#8b9ab0] text-sm">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00c8a0]/70">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jane Smith"
                      className="bg-[#050d1a] border border-[rgba(0,200,160,0.15)] rounded-md px-3 py-2.5 text-sm text-[#e8edf4] placeholder-[#8b9ab0]/50 focus:outline-none focus:border-[#00c8a0] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00c8a0]/70">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="bg-[#050d1a] border border-[rgba(0,200,160,0.15)] rounded-md px-3 py-2.5 text-sm text-[#e8edf4] placeholder-[#8b9ab0]/50 focus:outline-none focus:border-[#00c8a0] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00c8a0]/70">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Acme Corp (optional)"
                    className="bg-[#050d1a] border border-[rgba(0,200,160,0.15)] rounded-md px-3 py-2.5 text-sm text-[#e8edf4] placeholder-[#8b9ab0]/50 focus:outline-none focus:border-[#00c8a0] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00c8a0]/70">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your security needs or the engagement you have in mind..."
                    className="bg-[#050d1a] border border-[rgba(0,200,160,0.15)] rounded-md px-3 py-2.5 text-sm text-[#e8edf4] placeholder-[#8b9ab0]/50 focus:outline-none focus:border-[#00c8a0] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400/80 text-xs">
                    Something went wrong. Please email us directly at info@ciphermind.ca.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00c8a0] text-[#050d1a] font-semibold text-sm hover:bg-[#00a882] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
