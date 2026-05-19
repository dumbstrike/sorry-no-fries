import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Merch", href: "/merch" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cream/[0.06] bg-matte">
      <div className="site-wrap flex flex-col items-center justify-between gap-8 py-16 md:flex-row md:py-20">
        <span className="type-eyebrow text-cream/30">
          © {new Date().getFullYear()} Sorry. No. Fries.
        </span>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-eyebrow text-cream/25 transition-colors hover:text-burple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="type-eyebrow text-cream/25 md:text-right">
          Burplefolk · Brutalist
        </p>
      </div>
    </footer>
  );
}
