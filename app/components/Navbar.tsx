"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#product", label: "Product" },
  { href: "#approach", label: "Approach" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-85"
          >
            Get early access
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-md border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#09090b] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black"
            >
              Get early access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
