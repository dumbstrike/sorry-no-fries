import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FooterReveal, SectionReveal } from "@/components/section-reveal";

function FolkStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 4L48 28H74L54 44L62 70L40 54L18 70L26 44L6 28H32L40 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <circle cx="40" cy="40" r="6" fill="currentColor" />
    </svg>
  );
}

const marqueeItems = [
  "NO FRIES",
  "SORRY",
  "BURPLEFOLK KITCHEN",
  "BAMTONE #8D7BFF",
  "CHEF'S APOLOGY",
  "ZERO POTATOES",
];

const menuItems = [
  { name: "The Refusal", note: "Oysters, burple oil, no bread basket", price: "24" },
  { name: "Humble Pie", note: "Charred leek, apology ash, aged cheddar", price: "19" },
  {
    name: "Last Supper (Sans Spuds)",
    note: "Dry-aged ribeye, forbidden starch policy",
    price: "58",
  },
  { name: "Mercy Course", note: "Dark chocolate, folk honey, regret", price: "14" },
];

const palette = [
  { name: "BURPLE", hex: "#8D7BFF", role: "Primary accent" },
  { name: "DEEP", hex: "#6E5BFF", role: "Depth" },
  { name: "GLOW", hex: "#B6A9FF", role: "Highlight" },
  { name: "VOID", hex: "#080808", role: "Background" },
  { name: "SURFACE", hex: "#151515", role: "Elevated" },
  { name: "CREAM", hex: "#F5F5F5", role: "Type" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <header className="glass-bar fixed inset-x-0 top-0 z-50 border-b">
        <div className="site-wrap flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            className="type-eyebrow text-cream/70 transition-colors hover:text-cream"
          >
            SNF
          </Link>
          <nav
            className="hidden items-center gap-12 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-cream/40 md:flex"
            aria-label="Main"
          >
            <a href="#palette" className="transition-colors hover:text-cream">
              Palette
            </a>
            <a href="#manifesto" className="transition-colors hover:text-cream">
              Manifesto
            </a>
            <a href="#menu" className="transition-colors hover:text-cream">
              Menu
            </a>
            <a href="#visit" className="transition-colors hover:text-cream">
              Visit
            </a>
          </nav>
          <a href="#visit" className="btn btn--sm btn--matte">
            Reserve
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <Hero />

        <SectionReveal
          subtle
          className="border-b border-cream/[0.06] bg-void"
          aria-label="Ticker"
        >
          <div className="marquee-band overflow-hidden">
            <div className="marquee-track flex w-max gap-20 whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.45em] text-cream/25">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-20">
                  {item}
                  <FolkStar className="inline h-3 w-3 text-burple/50" />
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          id="palette"
          className="site-section section-ambient section-ambient--palette border-b border-cream/[0.06] bg-ink"
        >
          <div className="site-wrap depth-content section-grid section-grid--split lg:items-center">
            <header className="section-stack max-w-md">
              <p className="type-eyebrow type-eyebrow--burple">BAMTONE · House palette</p>
              <h2 className="type-display">THE BURPLE CARD</h2>
              <p className="type-lead">
                Inspired by the Burplefolk swatch — periwinkle soul on brutalist black. Every
                plate, border, and glow pulls from this single honest hue.
              </p>
            </header>

            <div className="grid gap-[var(--grid-gap)] sm:grid-cols-2">
              <div className="swatch-card border-4 border-void bg-cream">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-burple">
                  <Image
                    src="/burplefolk/burple-swatch.png"
                    alt="BURPLE color swatch by maxevasion, BAMTONE"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="border-t-4 border-void px-6 py-5">
                  <p className="text-xl font-bold text-void">BURPLE</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-void/55">
                    by maxevasion · BAMTONE
                  </p>
                </div>
              </div>
              <ul className="flex flex-col border border-burple/25 shadow-[var(--shadow-lift)]">
                {palette.map((swatch, i) => (
                  <li
                    key={swatch.name}
                    className={`flex items-center gap-6 px-6 py-6 ${
                      i < palette.length - 1 ? "border-b-4 border-burple/30" : ""
                    } ${i % 2 === 0 ? "bg-background" : "bg-ink"}`}
                  >
                    <span
                      className="h-14 w-14 shrink-0 border-2 border-cream/20"
                      style={{ backgroundColor: swatch.hex }}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-lg uppercase tracking-wide">{swatch.name}</p>
                      <p className="mt-1 font-mono text-[10px] text-cream/45">{swatch.role}</p>
                    </div>
                    <span className="font-mono text-[10px] text-burple">{swatch.hex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          id="manifesto"
          className="site-section site-section--loose section-ambient section-ambient--manifesto folk-border border-b border-cream/[0.06]"
        >
          <div className="site-wrap depth-content">
            <div className="section-grid section-grid--manifesto">
              <header className="section-rail section-stack">
                <p className="type-eyebrow">Manifesto</p>
                <h2 className="type-display type-display--xl">MANIFESTO</h2>
                <div className="mt-4 h-1 w-24 bg-burple" aria-hidden />
                <p className="type-eyebrow mt-4 text-cream/35">Policy · Permanent</p>
              </header>

              <div className="section-body section-stack">
                <blockquote className="type-quote">
                  We believe every great meal deserves a side of honesty — and{" "}
                  <span className="text-burple">zero</span> shoestrings.
                </blockquote>
                <p className="type-lead max-w-2xl">
                  Burplefolk at the table: ornamental, unapologetic, hand-drawn in spirit. Our room
                  is raw concrete; our plates are brutalist blocks of flavor. We season with regret,
                  plate with conviction, and never serve fries.
                </p>
                <dl className="grid gap-10 border-t border-cream/10 pt-12 sm:grid-cols-3 sm:gap-12 sm:pt-16">
                  {[
                    { k: "01", v: "Burple-forward plates" },
                    { k: "02", v: "Raw concrete dining" },
                    { k: "03", v: "Fries: declined forever" },
                  ].map((row) => (
                    <div key={row.k} className="section-stack gap-3">
                      <dt className="type-eyebrow type-eyebrow--burple">{row.k}</dt>
                      <dd className="text-xl uppercase tracking-wide md:text-2xl">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          id="menu"
          className="site-section site-section--loose border-b border-cream/[0.06] bg-void"
        >
          <div className="site-wrap">
            <header className="section-head flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-16">
              <div className="section-stack gap-6">
                <p className="type-eyebrow">Seasonal collection</p>
                <h2 className="type-display type-display--xl">MENU</h2>
              </div>
              <p className="type-lead max-w-xs md:text-right">
                Cruel to carbs · Subject to chef&apos;s remorse
              </p>
            </header>

            <ul>
              {menuItems.map((item, i) => (
                <li
                  key={item.name}
                  className="menu-row group grid border-b border-cream/[0.06] transition-colors last:border-b-0 hover:bg-burple/[0.04] md:grid-cols-[5.5rem_1fr_auto] md:items-start"
                >
                  <span className="font-mono text-3xl font-bold text-burple/45 md:pt-1 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-3xl uppercase tracking-wide transition-colors group-hover:text-burple md:text-5xl md:leading-none">
                      {item.name}
                    </h3>
                    <p className="type-lead mt-4 max-w-lg">{item.note}</p>
                  </div>
                  <div className="flex items-baseline gap-8 md:flex-col md:items-end md:gap-3 md:pt-1">
                    <span className="font-mono text-2xl text-burple md:text-3xl">${item.price}</span>
                    <span className="type-eyebrow text-burple-glow/80">No fries</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal
          id="visit"
          className="site-section site-section--loose section-ambient section-ambient--visit folk-border border-b border-cream/[0.06]"
        >
          <div className="site-wrap depth-content">
            <div className="section-grid section-grid--visit">
              <header className="section-stack max-w-lg">
                <p className="type-eyebrow">Location</p>
                <h2 className="type-display type-display--xl">VISIT</h2>
                <p className="type-lead">
                  Walk-ins welcome if you swear off fries at the door. Reservations recommended for
                  the full apology experience.
                </p>
                <address className="mt-8 not-italic md:mt-12">
                  <p className="text-3xl uppercase tracking-wide md:text-4xl">12 Brutalist Lane</p>
                  <p className="type-lead mt-4">Industrial District</p>
                </address>
              </header>

              <div className="glass-panel grid overflow-hidden">
                {[
                  { label: "Hours", value: "Tue–Sat · 6pm–11pm" },
                  { label: "Phone", value: "+1 (555) NO-FRIES" },
                  { label: "Dress", value: "Dark · Dramatic · Potato-free" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-3 px-8 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:py-10 ${
                      i < 2 ? "border-b border-cream/[0.06]" : ""
                    } ${i % 2 === 0 ? "bg-transparent" : "bg-ink/40"}`}
                  >
                    <span className="type-eyebrow type-eyebrow--burple">{row.label}</span>
                    <span className="text-lg uppercase tracking-wide sm:text-xl">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[var(--stack-xl)] flex justify-center md:mt-[calc(var(--stack-xl)+1rem)]">
              <a
                href="mailto:hello@sorrynofries.com"
                className="btn btn--lg btn--primary btn--block sm:min-w-[18rem]"
              >
                Request a table
              </a>
            </div>
          </div>
        </SectionReveal>
      </main>

      <FooterReveal className="relative z-10 border-t border-cream/[0.06] bg-matte">
        <div className="site-wrap flex flex-col items-center justify-between gap-8 py-16 md:flex-row md:py-20">
          <span className="type-eyebrow text-cream/30">
            © {new Date().getFullYear()} Sorry. No. Fries.
          </span>
          <p className="type-eyebrow text-center text-cream/25 md:text-right">
            Burplefolk · Brutalist
          </p>
        </div>
      </FooterReveal>
    </div>
  );
}
<h1>TESTING</h1>