const steps = [
  {
    step: "01",
    title: "Ingest",
    description:
      "We connect to your endpoints, cloud, identity, and network stack in under a day — no rip-and-replace required.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Our AI models baseline normal behavior and flag anomalies across billions of events, in milliseconds.",
  },
  {
    step: "03",
    title: "Detect",
    description:
      "High-confidence threats are correlated into a single incident, enriched with context and adversary intent.",
  },
  {
    step: "04",
    title: "Respond",
    description:
      "Automated playbooks contain the threat instantly while our SOC analysts investigate and validate.",
  },
  {
    step: "05",
    title: "Report",
    description:
      "Executive-ready reporting and continuous recommendations keep your posture improving month over month.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-y border-white/5 bg-white/[0.02] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From raw signal to resolved incident
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              <div className="card h-full rounded-2xl p-6">
                <span className="gradient-text text-3xl font-bold">
                  {item.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r from-cyan-400/40 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
