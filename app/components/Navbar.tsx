"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/90 backdrop-blur-md border-b border-[rgba(0,200,160,0.1)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#00c8a0] group-hover:shadow-[0_0_8px_#00c8a0] transition-shadow" />
          <span className="font-display font-bold tracking-[0.18em] text-sm text-[#e8edf4] group-hover:text-[#00c8a0] transition-colors">
            CipherMind
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b9ab0] hover:text-[#e8edf4] transition-colors font-body tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#00c8a0] text-[#050d1a] font-semibold text-xs hover:bg-[#00a882] transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8b9ab0] hover:text-[#00c8a0] transition-colors p-1 flex flex-col gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current" />
          <span className="block w-5 h-px bg-current" />
          <span className="block w-3 h-px bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-[rgba(0,200,160,0.1)] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8b9ab0] hover:text-[#e8edf4] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#00c8a0] text-[#050d1a] font-semibold text-xs hover:bg-[#00a882] transition-colors w-fit"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
