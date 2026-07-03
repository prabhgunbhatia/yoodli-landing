const industries = [
  {
    name: "Financial Services",
    detail: "Fraud-aware threat models tuned for real-time payments and core banking systems.",
  },
  {
    name: "Healthcare",
    detail: "HIPAA-ready monitoring across EHR systems, medical devices, and patient data pipelines.",
  },
  {
    name: "SaaS & Technology",
    detail: "API-first security that scales with cloud-native, multi-tenant architectures.",
  },
  {
    name: "Retail & E-commerce",
    detail: "Bot mitigation, payment fraud detection, and seasonal-scale threat coverage.",
  },
  {
    name: "Government & Public Sector",
    detail: "FedRAMP-aligned controls and nation-state-grade threat intelligence.",
  },
  {
    name: "Logistics & Manufacturing",
    detail: "OT/IT convergence security protecting industrial control systems from disruption.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Industries
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Security built for how your industry actually works
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-[#0a0e1a] p-8 transition-colors hover:bg-white/[0.03]">
              <h3 className="text-base font-semibold text-white">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {industry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
