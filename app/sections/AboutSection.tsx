// About — company-focused, no credential listing, trust-building
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 border-t border-[rgba(0,200,160,0.08)]"
      style={{ backgroundColor: "#050d1a" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#00c8a0]" />
              <span className="font-display text-[#00c8a0] text-xs tracking-[0.25em] uppercase">
                About CipherMind
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e8edf4] mb-6 leading-tight">
              We take security seriously.<br />
              <span className="text-[#00c8a0]">So do our clients.</span>
            </h2>
            <div className="space-y-4 text-[#8b9ab0] leading-relaxed text-sm">
              <p>
                CipherMind is a cybersecurity firm specializing in the areas
                where risk is hardest to quantify and easiest to underestimate —
                AI-driven threats, cryptographic weaknesses, and systemic
                security gaps that only surface under scrutiny.
              </p>
              <p>
                We work with organizations that handle sensitive data, operate
                critical systems, or need security that holds up to real-world
                adversarial conditions — not just compliance checklists.
              </p>
              <p>
                Our engagements are direct, technically rigorous, and scoped to
                produce outcomes — not reports that sit unread.
              </p>
            </div>
          </div>

          {/* Right — principles */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Technical depth",
                body: "Every recommendation is grounded in how systems actually work, not surface-level best-practice frameworks.",
              },
              {
                title: "No security theatre",
                body: "We do not produce audits designed to satisfy auditors. We surface real risk and tell you what it costs to ignore it.",
              },
              {
                title: "Actionable by default",
                body: "Every engagement ends with a clear, prioritized path forward — not an open-ended list of concerns.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[rgba(0,200,160,0.1)] rounded-lg bg-[#0a1628] px-6 py-5"
              >
                <h4 className="font-display text-sm font-bold text-[#e8edf4] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#8b9ab0] text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
