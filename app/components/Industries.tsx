const industries = [
  {
    name: "Fintech & Financial Services",
    detail: "Monitoring tuned for payment flows and core banking integrations, with an eye for fraud-adjacent behavior.",
  },
  {
    name: "Health Tech",
    detail: "Coverage for EHR integrations and patient data pipelines, built with HIPAA requirements in mind from day one.",
  },
  {
    name: "SaaS & Technology",
    detail: "API-first security that fits multi-tenant, cloud-native architectures without slowing down deploys.",
  },
  {
    name: "E-commerce",
    detail: "Bot and account-takeover detection sized for growing stores, not enterprise retail budgets.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mono-label text-xs uppercase text-accent">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Early customers, real constraints
          </h2>
          <p className="mt-4 text-muted">
            We&apos;re building alongside our first design partners across a
            few industries where lean teams carry outsized security
            responsibility.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-[var(--background)] p-8">
              <h3 className="text-base font-medium text-[var(--foreground)]">
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
