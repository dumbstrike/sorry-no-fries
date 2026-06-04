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
  <>
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      onClick={() => setMobileOpen(false)}
    />

    <div className="
fixed top-0 right-0 h-screen w-[88%] max-w-md
bg-[#0b0b0b]
border-l border-[#8D7BFF]/20
z-50
flex flex-col
animate-[slideIn_.35s_ease-out]
">
      
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div>
  <div className="text-[#8D7BFF] text-xs tracking-[0.4em] uppercase">
    SORRY. NO. FRIES
  </div>

  <div className="text-white/30 text-[10px] tracking-[0.25em] uppercase mt-1">
    BEANS ALL DAY
  </div>
</div>

        <button
          onClick={() => setMobileOpen(false)}
          className="text-white/60 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-4xl font-black uppercase py-3 text-white/80 hover:text-[#8D7BFF] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="p-8 border-t border-white/5">
        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
          Beans All Day
        </p>

        <p className="mt-3 text-sm text-white/50 leading-relaxed">
          Premium bean culture inspired by Burplefolk.
        </p>
      </div>
    </div>
  </>
)}
 <Link
  href="/burple-radio"
  className="flex items-center gap-2 text-burple hover:text-white transition"
>
  <span className="h-2 w-2 rounded-full bg-burple animate-pulse" />
  LIVE
</Link>
   </header>
  );
}
