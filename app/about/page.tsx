import { SectionReveal } from "@/components/section-reveal";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <SectionReveal className="site-section site-section--loose section-ambient section-ambient--manifesto folk-border border-b border-cream/[0.06]">
        <div className="site-wrap depth-content">
          <div className="section-grid section-grid--manifesto">
            <header className="section-rail section-stack">
              <p className="type-eyebrow">Our story</p>
              <h1 className="type-display type-display--xl">ABOUT</h1>
              <div className="mt-4 h-1 w-24 bg-burple" aria-hidden />
              <p className="type-eyebrow mt-4 text-cream/35">Est. 2024 · Industrial District</p>
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
              <p className="type-lead max-w-2xl">
                Founded on a simple principle: some things are better left unsalted. Our kitchen
                operates under the strictest anti-potato protocol in the industry. Every dish is
                crafted with intention, every flavor deliberate, every apology sincere.
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

      <SectionReveal className="site-section site-section--loose border-b border-cream/[0.06] bg-void">
        <div className="site-wrap">
          <div className="section-grid section-grid--split lg:items-center">
            <header className="section-stack max-w-md">
              <p className="type-eyebrow type-eyebrow--burple">The philosophy</p>
              <h2 className="type-display">NO FRIES. EVER.</h2>
              <p className="type-lead">
                It&apos;s not a gimmick. It&apos;s not a trend. It&apos;s a permanent house policy
                rooted in culinary conviction and a deeply held belief that great food doesn&apos;t
                need golden starch to shine.
              </p>
            </header>

            <div className="section-stack gap-6">
              <div className="glass-panel p-8">
                <p className="type-eyebrow type-eyebrow--burple mb-4">The manifesto</p>
                <p className="type-lead">
                  We reject the tyranny of the side dish. We embrace the beauty of the singular
                  plate. Every element earns its place. Nothing is filler. Especially not potatoes.
                </p>
              </div>
              <div className="glass-panel p-8">
                <p className="type-eyebrow type-eyebrow--burple mb-4">The promise</p>
                <p className="type-lead">
                  When you dine with us, you get our full attention. Our complete focus. Our
                  unwavering commitment to flavor without compromise. And absolutely no fries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
