const logos = [
  "Northwind Financial",
  "Cascadia Health",
  "Vantage Retail Group",
  "Orbital Logistics",
  "Meridian Bank",
  "Pinnacle Insurance",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted">
          Trusted by security teams at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-muted/70 grayscale transition-colors hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
