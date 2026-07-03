const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Hamilton, Ontario, Canada" },
  { label: "Founder", value: "Prabhgun Bhatia" },
  { label: "Focus", value: "AI-native security for lean teams" },
];

export default function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.02] py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mono-label text-xs uppercase text-accent">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Why we&apos;re building IG Technologies
            </h2>
            <p className="mt-5 text-muted">
              Most security tooling is priced and designed for companies with
              a dedicated SOC team. Everyone else is left with a pile of
              dashboards, no time to watch them, and a real risk of missing
              the one alert that mattered.
            </p>
            <p className="mt-4 text-muted">
              I started IG Technologies out of Hamilton, Ontario to close
              that gap — using AI to do the constant watching, so a small
              security or IT team can focus on the handful of decisions that
              actually need a human.
            </p>
            <p className="mt-6 text-sm text-white">
              — Prabhgun Bhatia, Founder
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 self-start rounded-xl border border-white/10 p-6 sm:p-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-muted">{fact.label}</dt>
                <dd className="mt-1 text-sm font-medium text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
