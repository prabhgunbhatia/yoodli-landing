const products = [
  {
    name: "IG Sentinel",
    tag: "Threat Detection",
    description:
      "The AI detection engine at the core of our platform. Correlates endpoint, network, and cloud telemetry to surface real threats in real time.",
  },
  {
    name: "IG Shield",
    tag: "Cloud Security",
    description:
      "Cloud security posture management with automated compliance mapping for SOC 2, ISO 27001, HIPAA, and PCI-DSS.",
  },
  {
    name: "IG Recon",
    tag: "Offensive Security",
    description:
      "Continuous attack-surface mapping and red-team-as-a-service, run by former nation-state and Fortune 500 operators.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              The IG platform
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built by operators. Powered by AI that never sleeps.
            </h2>
            <p className="mt-4 text-muted">
              Founded in 2018 by a team of former NSA and Google security
              engineers, IG Technologies set out to close the gap between the
              speed of AI-assisted attacks and the pace of legacy security
              tooling. Today our models process over 2.4 billion signals a
              day to protect finance, healthcare, and SaaS companies around
              the world.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <dt className="text-sm text-muted">Founded</dt>
                <dd className="mt-1 text-lg font-medium text-white">2018</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Headquarters</dt>
                <dd className="mt-1 text-lg font-medium text-white">
                  San Francisco, CA
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Team</dt>
                <dd className="mt-1 text-lg font-medium text-white">
                  260+ engineers &amp; analysts
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Certifications</dt>
                <dd className="mt-1 text-lg font-medium text-white">
                  SOC 2 · ISO 27001
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.name} className="card rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
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
