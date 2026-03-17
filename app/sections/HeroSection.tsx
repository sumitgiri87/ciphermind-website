// Hero — full-width landscape layout, service-consistent right column
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,200,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,160,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#050d1a",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(0,200,160,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + CTAs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#00c8a0]" />
              <span className="font-display text-[#00c8a0] text-xs tracking-[0.25em] uppercase">
                Cybersecurity · AI · Cryptography
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#e8edf4] leading-[1.05] tracking-tight mb-6">
              Security that works{" "}
              <span className="text-[#00c8a0]">before</span>{" "}
              the breach.
            </h1>

            <p className="text-[#8b9ab0] text-lg font-body font-light max-w-lg mb-10 leading-relaxed">
              Most organizations discover security gaps after an incident.
              CipherMind helps you find and close them first — with rigorous
              analysis, modern cryptographic practices, and AI-driven detection.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#00c8a0] text-[#050d1a] font-semibold text-sm hover:bg-[#00a882] transition-colors duration-200"
              >
                Talk to Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-[rgba(0,200,160,0.3)] text-[#e8edf4] text-sm font-medium hover:border-[#00c8a0] hover:text-[#00c8a0] transition-colors duration-200"
              >
                What We Do
              </a>
            </div>
          </div>

          {/* Right — service snapshot cards, consistent with ServicesSection */}
          <div className="flex flex-col gap-4">
            {[
              {
                service: "AI Security & Threat Detection",
                detail:
                  "OWASP LLM Top 10 assessments, AI pipeline threat modeling, and behavioral anomaly detection for production systems.",
              },
              {
                service: "Cryptography & Post-Quantum Security",
                detail:
                  "CBOM generation, crypto inventory, and a post-quantum migration roadmap aligned to NIST FIPS 203/204/205.",
              },
              {
                service: "Security Audits & Consulting",
                detail:
                  "Technically rigorous reviews of code, architecture, and infrastructure — with prioritized, actionable remediation.",
              },
            ].map((item) => (
              <a
                key={item.service}
                href="#services"
                className="border border-[rgba(0,200,160,0.1)] rounded-lg bg-[#0a1628] px-6 py-5 flex flex-col gap-2 hover:border-[rgba(0,200,160,0.28)] transition-colors duration-200 group"
              >
                <p className="text-[#e8edf4] text-sm font-semibold font-display group-hover:text-[#00c8a0] transition-colors">
                  {item.service}
                </p>
                <p className="text-[#8b9ab0] text-xs leading-relaxed">
                  {item.detail}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
