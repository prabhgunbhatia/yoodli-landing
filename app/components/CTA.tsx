export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="card relative overflow-hidden rounded-2xl px-8 py-16 text-center sm:px-16">
          <div className="glow pointer-events-none absolute -top-32 left-1/2 h-[320px] w-[600px] -translate-x-1/2 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get early access
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              We&apos;re onboarding a small number of design partners right
              now. Share your work email and I&apos;ll personally follow up
              to set up a walkthrough.
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
                className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85"
              >
                Request access
              </button>
            </form>
            <p className="mt-4 text-xs text-muted">
              No spam. I respond to every request myself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
