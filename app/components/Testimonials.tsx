const testimonials = [
  {
    quote:
      "IG Sentinel caught a lateral movement attempt our previous SIEM missed entirely. Their SOC had it contained before our team even got the page.",
    name: "Elena Marsh",
    role: "CISO, Northwind Financial",
  },
  {
    quote:
      "We cut our mean time to detect from 6 hours to under a minute in the first quarter. The AI triage alone saved my analysts hundreds of hours.",
    name: "Rahul Deshpande",
    role: "VP of Security, Vantage Retail Group",
  },
  {
    quote:
      "The red team engagement from IG Recon was the most thorough we've had. They found paths into our environment nobody else considered.",
    name: "Sofia Alvarez",
    role: "Head of InfoSec, Cascadia Health",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-white/5 bg-white/[0.02] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Customers
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Security leaders trust IG Technologies
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex h-full flex-col rounded-2xl p-8">
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
