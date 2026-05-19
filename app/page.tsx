import Image from "next/image";
import Link from "next/link";

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

function CrossedFries({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="8"
        y="52"
        width="104"
        height="16"
        fill="currentColor"
        transform="rotate(-35 60 60)"
      />
      <rect
        x="8"
        y="52"
        width="104"
        height="16"
        fill="currentColor"
        transform="rotate(35 60 60)"
      />
      <line x1="18" y1="18" x2="102" y2="102" stroke="#060606" strokeWidth="8" />
      <line x1="102" y1="18" x2="18" y2="102" stroke="#060606" strokeWidth="8" />
    </svg>
  );
}

const marqueeItems = [
  "NO FRIES",
  "SORRY",
  "BURPLEFOLK KITCHEN",
  "BAMTONE #6B7FE8",
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
  { name: "BURPLE", hex: "#6B7FE8", role: "Primary accent" },
  { name: "VOID", hex: "#060606", role: "Background" },
  { name: "CREAM", hex: "#F0ECE3", role: "Type" },
  { name: "RUST", hex: "#D4622A", role: "Heat" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-cream">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-burple opacity-[0.12] blur-[120px] glow-orb"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-rust opacity-[0.06] blur-[100px]"
        aria-hidden
      />

      <header className="sticky top-0 z-40 border-b-4 border-burple bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <CrossedFries className="h-9 w-9 text-burple transition-transform duration-200 group-hover:rotate-12" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-burple-glow">
              Sorry · No · Fries
            </span>
          </Link>
          <nav
            className="hidden items-center gap-12 font-mono text-[10px] font-medium uppercase tracking-[0.28em] md:flex"
            aria-label="Main"
          >
            <a href="#palette" className="transition-colors hover:text-burple">
              Palette
            </a>
            <a href="#manifesto" className="transition-colors hover:text-burple">
              Manifesto
            </a>
            <a href="#menu" className="transition-colors hover:text-burple">
              Menu
            </a>
            <a href="#visit" className="transition-colors hover:text-burple">
              Visit
            </a>
          </nav>
          <a
            href="#visit"
            className="border-4 border-cream bg-cream px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-background transition-colors hover:border-burple hover:bg-burple hover:text-cream"
          >
            Reserve
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <section className="folk-border brutal-grid relative border-b-4 border-burple">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-6 pt-12 md:grid-cols-2 md:gap-16 md:px-10 md:pb-10 md:pt-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center">
              <p className="mb-5 inline-flex w-fit border-2 border-burple/50 bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.45em] text-burple">
                Burplefolk × Brutalist
              </p>
              <h1 className="hero-title text-[clamp(3.75rem,14vw,10rem)] font-normal leading-[0.82] tracking-tight">
                SORRY.
                <br />
                <span className="text-burple">NO.</span>
                <br />
                FRIES.
              </h1>
              <p className="mt-8 max-w-md border-l-4 border-burple pl-6 font-mono text-sm leading-relaxed text-cream/70">
                Fine dining with a hard line on fried potatoes. Hand-drawn soul,
                concrete bones, and a kitchen that means every apology.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-3 border-4 border-burple bg-burple px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-void transition hover:bg-burple-deep hover:border-burple-deep"
                >
                  View Menu
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#manifesto"
                  className="inline-flex items-center gap-3 border-4 border-cream/25 px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] transition hover:border-burple hover:text-burple"
                >
                  Manifesto
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center md:justify-end">
              <div className="folk-frame relative w-full max-w-[420px] border-4 border-burple bg-ink">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-void">
                  <Image
                    src="/burplefolk/folk-art.webp"
                    alt="Burplefolk folk art illustration"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/20" />
                  <CrossedFries className="absolute bottom-6 right-6 h-16 w-16 text-cream drop-shadow-lg" />
                </div>
                <div className="flex items-center justify-between border-t-4 border-burple bg-background px-4 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-cream/50">
                    Folk art · No fries
                  </span>
                  <FolkStar className="h-8 w-8 text-rust" />
                </div>
              </div>
              <div className="swatch-card absolute -bottom-4 -left-2 hidden w-36 border-4 border-void bg-cream md:block">
                <div className="aspect-square w-full bg-burple" aria-hidden />
                <div className="px-3 py-2">
                  <p className="text-sm font-bold leading-none text-void">BURPLE</p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-void/60">
                    by maxevasion
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border-t-4 border-burple bg-void py-4">
            <div className="marquee-track flex w-max gap-14 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.4em] text-burple/90">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-14">
                  {item}
                  <FolkStar className="inline h-3.5 w-3.5 text-rust" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="palette" className="border-b-4 border-burple bg-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-burple">
                  BAMTONE · House palette
                </p>
                <h2 className="mt-4 text-5xl leading-none md:text-7xl">THE BURPLE CARD</h2>
                <p className="mt-6 max-w-sm font-mono text-sm leading-7 text-cream/60">
                  Inspired by the Burplefolk swatch — periwinkle soul on brutalist black.
                  Every plate, border, and glow pulls from this single honest hue.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
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
                  <div className="border-t-4 border-void px-4 py-3">
                    <p className="text-xl font-bold text-void">BURPLE</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-void/55">
                      by maxevasion · BAMTONE
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-0 border-4 border-burple">
                  {palette.map((swatch, i) => (
                    <li
                      key={swatch.name}
                      className={`flex items-center gap-4 px-4 py-4 ${
                        i < palette.length - 1 ? "border-b-4 border-burple/30" : ""
                      } ${i % 2 === 0 ? "bg-background" : "bg-void"}`}
                    >
                      <span
                        className="h-12 w-12 shrink-0 border-2 border-cream/20"
                        style={{ backgroundColor: swatch.hex }}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-lg uppercase tracking-wide">{swatch.name}</p>
                        <p className="font-mono text-[10px] text-cream/45">{swatch.role}</p>
                      </div>
                      <span className="font-mono text-[10px] text-burple">{swatch.hex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="manifesto" className="folk-border border-b-4 border-burple">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="text-6xl leading-none md:text-8xl">MANIFESTO</h2>
                <div className="mt-6 h-2 w-32 bg-burple" />
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-cream/40">
                  Policy · Permanent
                </p>
              </div>
              <div className="md:col-span-8">
                <blockquote className="border-l-8 border-burple py-2 pl-8 text-2xl leading-tight md:text-4xl">
                  We believe every great meal deserves a side of honesty — and{" "}
                  <span className="text-burple">zero</span> shoestrings.
                </blockquote>
                <p className="mt-8 max-w-2xl font-mono text-sm leading-7 text-cream/60">
                  Burplefolk at the table: ornamental, unapologetic, hand-drawn in spirit. Our
                  room is raw concrete; our plates are brutalist blocks of flavor. We season
                  with regret, plate with conviction, and never serve fries.
                </p>
                <dl className="mt-14 grid gap-8 border-t-4 border-cream/10 pt-12 sm:grid-cols-3">
                  {[
                    { k: "01", v: "Burple-forward plates" },
                    { k: "02", v: "Raw concrete dining" },
                    { k: "03", v: "Fries: declined forever" },
                  ].map((row) => (
                    <div key={row.k}>
                      <dt className="font-mono text-xs font-bold text-burple">{row.k}</dt>
                      <dd className="mt-3 text-xl uppercase tracking-wide">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="border-b-4 border-burple bg-void">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="flex flex-col gap-6 border-b-4 border-burple pb-8 md:flex-row md:items-end md:justify-between">
              <h2 className="text-7xl leading-none md:text-9xl">MENU</h2>
              <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.35em] text-cream/45">
                Seasonal · Cruel to carbs · Subject to chef&apos;s remorse
              </p>
            </div>
            <ul className="mt-2">
              {menuItems.map((item, i) => (
                <li
                  key={item.name}
                  className="group grid gap-4 border-b-4 border-burple/20 py-9 transition-colors hover:bg-burple/5 md:grid-cols-[5rem_1fr_auto] md:items-center md:gap-10"
                >
                  <span className="font-mono text-3xl font-bold text-burple/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-3xl uppercase tracking-wide transition-colors group-hover:text-burple md:text-5xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-cream/50">{item.note}</p>
                  </div>
                  <div className="flex items-baseline gap-6 md:flex-col md:items-end md:gap-2">
                    <span className="font-mono text-2xl text-burple">${item.price}</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-rust">
                      No fries
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="visit" className="folk-border border-b-4 border-burple">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <h2 className="text-6xl md:text-8xl">VISIT</h2>
                <p className="mt-6 max-w-md font-mono text-sm leading-7 text-cream/60">
                  Walk-ins welcome if you swear off fries at the door. Reservations recommended
                  for the full apology experience.
                </p>
                <address className="mt-10 not-italic">
                  <p className="text-3xl uppercase tracking-wide">12 Brutalist Lane</p>
                  <p className="mt-2 font-mono text-sm text-cream/50">Industrial District</p>
                </address>
              </div>
              <div className="grid border-4 border-burple">
                {[
                  { label: "Hours", value: "Tue–Sat · 6pm–11pm" },
                  { label: "Phone", value: "+1 (555) NO-FRIES" },
                  { label: "Dress", value: "Dark · Dramatic · Potato-free" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-baseline sm:justify-between ${
                      i < 2 ? "border-b-4 border-burple/30" : ""
                    } ${i % 2 === 0 ? "bg-background" : "bg-ink"}`}
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-burple">
                      {row.label}
                    </span>
                    <span className="text-lg uppercase tracking-wide">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 flex justify-center">
              <a
                href="mailto:hello@sorrynofries.com"
                className="w-full max-w-lg border-4 border-cream bg-cream py-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.45em] text-background transition hover:border-burple hover:bg-burple hover:text-cream sm:w-auto sm:px-20"
              >
                Request a table
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t-4 border-burple bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-10">
          <div className="flex items-center gap-4">
            <CrossedFries className="h-7 w-7 text-burple" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cream/40">
              © {new Date().getFullYear()} Sorry. No. Fries.
            </span>
          </div>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-burple/80">
            Burplefolk-inspired · Brutalist by design
          </p>
        </div>
      </footer>
    </div>
  );
}
