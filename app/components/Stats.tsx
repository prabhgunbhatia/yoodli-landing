const points = [
  { value: "< 15 min", label: "To connect your first environment" },
  { value: "24/7", label: "Automated monitoring, not business hours" },
  { value: "1:1", label: "Direct access to the team building it" },
  { value: "0", label: "Legacy SIEM rules to write or maintain" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.label} className="text-center">
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                {point.value}
              </p>
              <p className="mt-2 text-sm text-muted">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
