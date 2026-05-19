"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Merch", href: "/merch" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "glass-bar bg-matte/72 backdrop-blur-xl"
          : "bg-matte border-cream/[0.06]"
      }`}
    >
      <div className="site-wrap flex items-center justify-between py-5 md:py-6">
        <Link
          href="/"
          className="type-eyebrow text-cream/70 transition-colors hover:text-cream"
        >
          SNF
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-12 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-cream/40 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden btn btn--sm btn--matte md:inline-flex"
        >
          Reserve
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="btn btn--sm btn--matte md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-cream/[0.06] bg-matte"
          aria-label="Mobile navigation"
        >
          <div className="site-wrap flex flex-col py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="type-display py-4 text-2xl uppercase tracking-wide text-cream/70 transition-colors hover:text-burple"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn--lg btn--primary btn--wide mt-6"
            >
              Reserve
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
