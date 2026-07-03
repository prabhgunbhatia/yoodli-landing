const steps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Install a lightweight agent and connect your cloud accounts and identity provider — no rip-and-replace of your existing stack.",
  },
  {
    step: "02",
    title: "Baseline",
    description:
      "IG Sentinel spends its first days learning what normal looks like for your team, before it ever flags anything.",
  },
  {
    step: "03",
    title: "Detect",
    description:
      "Anomalies get correlated into a single incident with context — not fifteen separate alerts for the same event.",
  },
  {
    step: "04",
    title: "Respond",
    description:
      "Low-risk incidents are auto-contained. Anything ambiguous is escalated to our team for a human decision before action is taken.",
  },
  {
    step: "05",
    title: "Improve",
    description:
      "A monthly review with our team turns each incident into a concrete change to your posture, not just a closed ticket.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-y border-[var(--color-border)] bg-[var(--surface-1)] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mono-label text-xs uppercase text-accent">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            From raw signal to a decision you can trust
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <div key={item.step} className="card rounded-xl p-6">
              <span className="text-2xl font-semibold text-[var(--foreground)]/25">
                {item.step}
              </span>
              <h3 className="mt-4 text-base font-medium text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
