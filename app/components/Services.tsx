import {
  RadarIcon,
  ShieldIcon,
  TargetIcon,
  CloudIcon,
  FingerprintIcon,
  AlertIcon,
} from "./icons";

const services = [
  {
    icon: RadarIcon,
    title: "AI Threat Detection & Response",
    description:
      "Behavioral ML models trained on billions of daily signals spot novel attacks before signatures exist, and auto-contain them in seconds.",
  },
  {
    icon: ShieldIcon,
    title: "Managed Detection & Response",
    description:
      "A 24/7 SOC of human analysts paired with AI copilots triages alerts, hunts threats, and owns response — so your team can sleep.",
  },
  {
    icon: TargetIcon,
    title: "Penetration Testing & Red Teaming",
    description:
      "Offensive security engagements that emulate real adversaries across network, application, cloud, and social engineering vectors.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Security Posture Management",
    description:
      "Continuous, automated misconfiguration and compliance scanning across AWS, Azure, and GCP with one-click remediation.",
  },
  {
    icon: FingerprintIcon,
    title: "Identity & Access Intelligence",
    description:
      "AI-driven behavioral analytics detect compromised credentials, insider risk, and privilege abuse across your identity fabric.",
  },
  {
    icon: AlertIcon,
    title: "Security Awareness & Phishing Simulation",
    description:
      "Adaptive, AI-generated phishing simulations and micro-training that measurably reduce human risk over time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One platform. Every layer of defense.
          </h2>
          <p className="mt-4 text-muted">
            From prevention to detection to response, IG Technologies covers the
            full security lifecycle so nothing falls through the cracks.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card group rounded-2xl p-6 transition-colors hover:border-cyan-400/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 text-cyan-300">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
