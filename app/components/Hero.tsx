export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Now monitoring 2.4B+ signals a day across 500+ enterprises
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cybersecurity that thinks{" "}
            <span className="gradient-text">as fast as the threat</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            IG Technologies fuses AI-driven detection, elite offensive security, and
            a 24/7 human SOC into one platform — so your team can stop chasing
            alerts and start stopping attackers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050810] transition-transform hover:scale-105 sm:w-auto"
            >
              Book a live demo
            </a>
            <a
              href="#platform"
              className="w-full rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              Explore the platform
            </a>
          </div>

          <p className="mt-6 text-xs text-muted">
            SOC 2 Type II · ISO 27001 · GDPR-ready · No credit card required
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="card overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/5">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-muted">
                IG Sentinel — Live Threat Console
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-3">
              {[
                { label: "Active incidents", value: "3", tone: "text-orange-300" },
                { label: "Mean time to detect", value: "41s", tone: "text-cyan-300" },
                { label: "Assets protected", value: "128,402", tone: "text-emerald-300" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0a0e1a] px-6 py-5">
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-semibold ${stat.tone}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 px-6 py-6">
              {[
                { level: "Critical", text: "Anomalous privilege escalation blocked — us-east-1 / prod-db-03", tone: "bg-red-500/15 text-red-300 border-red-500/30" },
                { level: "Contained", text: "Credential-stuffing pattern detected on auth-gateway, IP range auto-blocked", tone: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
                { level: "Resolved", text: "Phishing simulation flagged 4 users — auto-enrolled in awareness track", tone: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
              ].map((row) => (
                <div key={row.text} className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className={`shrink-0 rounded-md border px-2 py-1 text-[11px] font-medium ${row.tone}`}>
                    {row.level}
                  </span>
                  <span className="text-sm text-muted">{row.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
