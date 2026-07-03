export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Private beta · built in Hamilton, ON
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI-native security for teams too small for a 24/7 SOC
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            IG Technologies watches your cloud, endpoints, and identity stack
            around the clock, uses AI to tell real threats from noise, and
            tells you exactly what happened and what to do next.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85 sm:w-auto"
            >
              Get early access
            </a>
            <a
              href="#approach"
              className="w-full rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="card overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                sentinel-agent — live
              </span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 font-[family-name:var(--font-geist-mono)] text-[11px] leading-relaxed sm:px-5 sm:text-[13px]">
              <code>
                <span className="text-muted">$ </span>
                <span className="text-white">ig status --env production</span>
                {"\n"}
                <span className="text-muted">  monitoring 3 environments · last scan 8s ago</span>
                {"\n\n"}
                <span className="text-amber-300">[ALERT]</span>
                <span className="text-muted"> 2026-07-02 03:14:02 UTC</span>
                {"\n"}
                <span className="text-muted">  type    </span>
                <span className="text-white">anomalous_login</span>
                {"\n"}
                <span className="text-muted">  user    </span>
                <span className="text-white">r.tanaka@company.io</span>
                {"\n"}
                <span className="text-muted">  signal  </span>
                <span className="text-white">impossible travel — Toronto to Lagos in 6 min</span>
                {"\n"}
                <span className="text-muted">  risk    </span>
                <span className="text-red-300">high</span>
                {"\n"}
                <span className="text-muted">  action  </span>
                <span className="text-[var(--color-accent)]">session revoked, MFA re-challenge sent</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
