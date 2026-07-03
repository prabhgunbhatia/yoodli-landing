import Logo from "./Logo";

const columns = [
  {
    title: "Platform",
    links: ["IG Sentinel", "IG Shield", "IG Recon", "Integrations", "Pricing"],
  },
  {
    title: "Solutions",
    links: [
      "Threat Detection",
      "Managed Detection & Response",
      "Penetration Testing",
      "Cloud Security",
      "Identity Security",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Security", "Trust Center"],
  },
  {
    title: "Resources",
    links: ["Blog", "Threat Intel Reports", "Documentation", "Status", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              AI-powered cybersecurity for the enterprises that can&apos;t
              afford to get it wrong.
            </p>
            <p className="mt-6 text-xs text-muted">
              1 Market Street, Suite 3600
              <br />
              San Francisco, CA 94105
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} IG Technologies, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
