import { SectionReveal } from "@/components/section-reveal";

const menuItems = [
  { name: "The Refusal", note: "Oysters, burple oil, no bread basket", price: "24" },
  { name: "Humble Pie", note: "Charred leek, apology ash, aged cheddar", price: "19" },
  {
    name: "Last Supper (Sans Spuds)",
    note: "Dry-aged ribeye, forbidden starch policy",
    price: "58",
  },
  { name: "Mercy Course", note: "Dark chocolate, folk honey, regret", price: "14" },
  { name: "Silent Potato", note: "Cauliflower purée, burple glaze, deception", price: "22" },
  { name: "Ghost Fry", note: "Parsnip ribbons, sea salt, memory of starch", price: "18" },
  { name: "Burple Bowl", note: "Forbidden rice, edible flowers, no sides", price: "26" },
  { name: "Chef's Regret", note: "Wagyu tartare, truffle oil, solemn promise", price: "45" },
];

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <SectionReveal className="site-section site-section--loose border-b border-cream/[0.06] bg-void">
        <div className="site-wrap">
          <header className="section-head flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-16">
            <div className="section-stack gap-6">
              <p className="type-eyebrow">Full collection</p>
              <h1 className="type-display type-display--xl">MENU</h1>
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
                  <h2 className="text-3xl uppercase tracking-wide transition-colors group-hover:text-burple md:text-5xl md:leading-none">
                    {item.name}
                  </h2>
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

      <SectionReveal className="site-section site-section--loose section-ambient section-ambient--manifesto folk-border">
        <div className="site-wrap depth-content">
          <div className="section-stack max-w-2xl">
            <p className="type-eyebrow">Note</p>
            <p className="type-lead">
              All plates served without apology. Sides available upon request —
              <span className="text-burple"> never fried potatoes</span>. Our commitment to the
              anti-fry movement is absolute, permanent, and non-negotiable.
            </p>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
