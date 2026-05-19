import { SectionReveal } from "@/components/section-reveal";

const merchItems = [
  { name: "No Fries Tee", price: "35", description: "Heavy cotton, burple ink, potato-free promise" },
  { name: "Burplefolk Cap", price: "28", description: "Embroidered star, matte black, statement piece" },
  { name: "Apology Apron", price: "42", description: "Chef-grade, brutalist stripes, no pockets for fries" },
  { name: "Manifesto Print", price: "55", description: "Limited edition, signed, anti-starch manifesto" },
];

export default function MerchPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <SectionReveal className="site-section site-section--loose border-b border-cream/[0.06] bg-void">
        <div className="site-wrap">
          <header className="section-head flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-16">
            <div className="section-stack gap-6">
              <p className="type-eyebrow">Wear the philosophy</p>
              <h1 className="type-display type-display--xl">MERCH</h1>
            </div>
            <p className="type-lead max-w-xs md:text-right">
              Brutalist goods · Potato-free commitment
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {merchItems.map((item, i) => (
              <div
                key={item.name}
                className="group border border-cream/[0.06] p-6 transition-colors hover:border-burple/30 hover:bg-burple/[0.02]"
              >
                <div className="mb-6 aspect-square border border-cream/[0.06] bg-ink flex items-center justify-center">
                  <span className="font-mono text-4xl font-bold text-burple/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="section-stack gap-3">
                  <h2 className="text-xl uppercase tracking-wide transition-colors group-hover:text-burple">
                    {item.name}
                  </h2>
                  <p className="type-lead text-sm">{item.description}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-2xl text-burple">${item.price}</span>
                    <span className="type-eyebrow text-burple-glow/80">No fries</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="site-section site-section--loose section-ambient section-ambient--manifesto folk-border">
        <div className="site-wrap depth-content">
          <div className="section-stack max-w-2xl">
            <p className="type-eyebrow">Shipping</p>
            <p className="type-lead">
              All items shipped with the same commitment to quality as our plates. No fries included
              in any package. Ever. International shipping available — potato inspection at customs
              is your responsibility.
            </p>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
