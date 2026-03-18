// Services — 3 focused offerings, outcome-first, technically credible
const SERVICES = [
  {
    icon: "◈",
    title: "AI Security & Threat Detection",
    outcome: "Detect threats your current tools miss.",
    description:
      "AI systems introduce a new class of vulnerabilities that traditional security tools are not built to address. We assess and harden AI deployments against both adversarial attacks and systemic risks — using the OWASP LLM Top 10 and NIST AI Risk Management Framework (AI RMF) as our baseline, and extending well beyond them.",
    capabilities: [
      "NIST AI RMF alignment — Govern, Map, Measure, Manage",
      "OWASP LLM Top 10 assessment (prompt injection, data poisoning, model theft, insecure output handling)",
      "AI/ML pipeline threat modeling",
      "Adversarial input & evasion testing",
      "Behavioral anomaly detection for production AI systems",
      "RAG pipeline & vector store security review",
    ],
  },
  {
    icon: "⬢",
    title: "Cryptography & Post-Quantum Security",
    outcome: "Protect data that needs to stay private for years.",
    description:
      "Harvest-now, decrypt-later attacks are already happening. Organizations that handle sensitive long-lived data cannot afford to wait for quantum computers to arrive before migrating. We build a complete picture of your cryptographic exposure and execute a structured migration.",
    capabilities: [
      "Cryptography Bill of Materials (CBOM) generation — full inventory of algorithms, keys, and dependencies",
      "Crypto agility assessment & risk prioritization",
      "Post-quantum migration roadmap (NIST FIPS 203/204/205)",
      "Protocol design & cryptographic architecture review",
      "Key management consulting",
    ],
  },
  {
    icon: "◎",
    title: "Security Audits & Consulting",
    outcome: "Know exactly where you are exposed.",
    description:
      "Vague security assessments produce vague results. Our audits are technically rigorous — covering code, architecture, infrastructure, and process. Every engagement delivers a prioritized, actionable report with clear remediation guidance, not a checkbox exercise.",
    capabilities: [
      "Application & infrastructure security review",
      "Threat modeling & attack surface analysis",
      "Risk quantification & prioritization",
      "Secure architecture design",
      "Remediation planning & validation",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 border-t border-[rgba(0,200,160,0.08)]"
      style={{ backgroundColor: "#050d1a" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#00c8a0]" />
              <span className="font-display text-[#00c8a0] text-xs tracking-[0.25em] uppercase">
                Services
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e8edf4] leading-tight">
              Focused expertise.<br />Measurable outcomes.
            </h2>
          </div>
          <p className="text-[#8b9ab0] leading-relaxed text-sm lg:text-base max-w-md lg:ml-auto">
            We work in three tightly defined areas where the stakes are highest
            and the gap between adequate and excellent matters most.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-[rgba(0,200,160,0.1)] rounded-xl bg-[#0a1628] p-8 flex flex-col gap-6 hover:border-[rgba(0,200,160,0.25)] transition-colors duration-300"
            >
              {/* Icon + title + outcome */}
              <div>
                <span className="block font-display text-2xl text-[#00c8a0] mb-4">
                  {service.icon}
                </span>
                <h3 className="font-display text-base font-bold text-[#e8edf4] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#00c8a0]/80 text-xs font-medium tracking-wide">
                  {service.outcome}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[rgba(0,200,160,0.08)]" />

              {/* Description */}
              <p className="text-[#8b9ab0] text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Capabilities list */}
              <ul className="flex flex-col gap-2.5">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-[#8b9ab0]">
                    <span className="text-[#00c8a0] mt-0.5 shrink-0">›</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
