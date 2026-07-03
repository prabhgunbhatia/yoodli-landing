export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-[var(--surface-2)] px-4 py-1.5 text-[13px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Private beta · built in Hamilton, ON
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            AI-native security for teams too small for a 24/7 SOC
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            IG Technologies watches your cloud, endpoints, and identity stack
            around the clock, uses AI to tell real threats from noise, and
            tells you exactly what happened and what to do next.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-lg bg-[var(--btn-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-fg)] transition-opacity hover:opacity-85 sm:w-auto"
            >
              Get early access
            </a>
            <a
              href="#approach"
              className="w-full rounded-lg border border-[var(--color-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface-3)] sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Terminal card keeps a fixed dark "code editor" look in both themes */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0e14] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-xs text-[#8b8b93]">
                sentinel-agent — live
              </span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 font-[family-name:var(--font-geist-mono)] text-[11px] leading-relaxed sm:px-5 sm:text-[13px]">
              <code>
                <span className="text-[#8b8b93]">$ </span>
                <span className="text-white">ig status --env production</span>
                {"\n"}
                <span className="text-[#8b8b93]">  monitoring 3 environments · last scan 8s ago</span>
                {"\n\n"}
                <span className="text-amber-300">[ALERT]</span>
                <span className="text-[#8b8b93]"> 2026-07-02 03:14:02 UTC</span>
                {"\n"}
                <span className="text-[#8b8b93]">  type    </span>
                <span className="text-white">anomalous_login</span>
                {"\n"}
                <span className="text-[#8b8b93]">  user    </span>
                <span className="text-white">r.tanaka@company.io</span>
                {"\n"}
                <span className="text-[#8b8b93]">  signal  </span>
                <span className="text-white">impossible travel — Toronto to Lagos in 6 min</span>
                {"\n"}
                <span className="text-[#8b8b93]">  risk    </span>
                <span className="text-red-300">high</span>
                {"\n"}
                <span className="text-[#8b8b93]">  action  </span>
                <span className="text-[#29c1dd]">session revoked, MFA re-challenge sent</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
