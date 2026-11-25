"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto max-w-3xl rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] px-5 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <a href="/#home" className="font-serif text-xl italic">
            Felix
          </a>

          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="text-sm text-muted md:hidden"
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>

        {open && (
          <ul
            id="mobile-menu"
            className="mt-3 flex flex-col gap-1 border-t border-[var(--glass-border)] pt-3 text-sm md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-2 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}