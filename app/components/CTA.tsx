export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="card relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="glow pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get a free security assessment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Talk to our team and see how IG Technologies can cut detection
              time, reduce alert fatigue, and close the gaps in your current
              stack — in 30 minutes or less.
            </p>

            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="work-email" className="sr-only">
                Work email
              </label>
              <input
                id="work-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-muted focus:border-cyan-400/50 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050810] transition-transform hover:scale-105"
              >
                Talk to sales
              </button>
            </form>
            <p className="mt-4 text-xs text-muted">
              No spam. We respond within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
