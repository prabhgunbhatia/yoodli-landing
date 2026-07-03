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
    title: "AI Threat Detection",
    description:
      "A lightweight agent watches endpoint, network, and cloud activity and uses ML models to flag behavior that looks wrong — not just traffic that matches a known signature.",
  },
  {
    icon: ShieldIcon,
    title: "AI-Assisted Response",
    description:
      "When something looks like a real incident, IG triages it, drafts a plain-English summary of what happened, and can auto-contain it — revoke a session, isolate a host, block an IP.",
  },
  {
    icon: TargetIcon,
    title: "Penetration Testing",
    description:
      "Manual and automated assessments of your network, web apps, and cloud config, run by our team, with a clear report of what's exploitable and how to fix it — not just a scanner dump.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Security Posture",
    description:
      "Continuous scanning of your AWS, Azure, or GCP config for misconfigurations, public buckets, and over-permissioned roles, mapped to SOC 2 and ISO 27001 controls.",
  },
  {
    icon: FingerprintIcon,
    title: "Identity Threat Detection",
    description:
      "Behavioral baselines for every user and service account, so credential theft, impossible-travel logins, and privilege abuse get caught even when the password was correct.",
  },
  {
    icon: AlertIcon,
    title: "Phishing Simulation & Training",
    description:
      "AI-generated phishing simulations tailored to your company, with short, targeted training for anyone who clicks — measured over time, not a once-a-year slideshow.",
  },
];

export default function Services() {
  return (
    <section id="product" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mono-label text-xs uppercase text-accent">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Everything a lean security team needs, none of the noise
          </h2>
          <p className="mt-4 text-muted">
            Most companies past a certain size can&apos;t justify a full
            in-house SOC. IG Technologies gives you the coverage of one,
            built around AI instead of headcount.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-[var(--background)] p-7">
              <service.icon className="h-5 w-5 text-accent" />
              <h3 className="mt-5 text-base font-medium text-[var(--foreground)]">
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
