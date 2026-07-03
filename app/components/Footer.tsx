import Image from "next/image";
import { MailIcon, PinIcon, PhoneIcon } from "./icons";

const columns = [
  {
    title: "Platform",
    links: ["IG Sentinel", "IG Shield", "IG Recon"],
  },
  {
    title: "Solutions",
    links: [
      "Threat Detection",
      "Penetration Testing",
      "Cloud Security",
      "Identity Security",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
];

const contact = [
  { icon: MailIcon, text: "bhatiaprabhgun06@gmail.com", href: "mailto:bhatiaprabhgun06@gmail.com" },
  { icon: PinIcon, text: "103-987 King St E, Hamilton, ON L8M 1C6" },
  { icon: PhoneIcon, text: "+1 (647) 540-4003", href: "tel:+16475404003" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2">
            <Image
              src="/logo-full.png"
              alt="IG Technologies Consulting Inc."
              width={196}
              height={95}
              loading="eager"
              className="rounded-md"
            />
            <p className="mt-5 max-w-xs text-sm text-muted">
              AI-native security for teams too small for a full-time SOC.
              Founded by Prabhgun Bhatia.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          {contact.map((item) =>
            item.href ? (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
              >
                <item.icon className="h-4 w-4 shrink-0 text-accent" />
                {item.text}
              </a>
            ) : (
              <span key={item.text} className="flex items-center gap-2 text-sm text-muted">
                <item.icon className="h-4 w-4 shrink-0 text-accent" />
                {item.text}
              </span>
            )
          )}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} IG Technologies Consulting Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
