const stats = [
  { value: "2.4B+", label: "Threat signals analyzed daily" },
  { value: "500+", label: "Enterprises protected worldwide" },
  { value: "41s", label: "Median time to detect" },
  { value: "99.99%", label: "Platform uptime SLA" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gradient-text text-3xl font-semibold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
