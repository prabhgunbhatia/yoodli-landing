const products = [
  {
    name: "IG Sentinel",
    tag: "Detection",
    description:
      "The core AI detection engine. Correlates endpoint, network, and cloud telemetry to surface real threats and cut through alert noise.",
  },
  {
    name: "IG Shield",
    tag: "Cloud security",
    description:
      "Continuous cloud security posture management with compliance mapping toward SOC 2, ISO 27001, HIPAA, and PCI-DSS.",
  },
  {
    name: "IG Recon",
    tag: "Offensive security",
    description:
      "Attack-surface mapping and penetration testing engagements, run by our security team on a recurring schedule.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div className="max-w-md">
            <p className="mono-label text-xs uppercase text-accent">
              The platform
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One system, three parts
            </h2>
            <p className="mt-4 text-muted">
              IG Sentinel, IG Shield, and IG Recon share the same data model,
              so a finding from a pentest, a cloud misconfiguration, and a
              live detection all show up in one place — not three
              disconnected tools.
            </p>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.name} className="card rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white">
                    {product.name}
                  </h3>
                  <span className="mono-label rounded border border-white/10 px-2 py-1 text-[11px] text-muted">
                    {product.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
