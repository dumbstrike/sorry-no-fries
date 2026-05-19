import { SectionReveal } from "@/components/section-reveal";

const locations = [
  {
    city: "Industrial District",
    address: "12 Brutalist Lane",
    hours: "Tue–Sat · 6pm–11pm",
    phone: "+1 (555) NO-FRIES",
    dress: "Dark · Dramatic · Potato-free",
  },
  {
    city: "Downtown Core",
    address: "88 Concrete Avenue",
    hours: "Wed–Sun · 5pm–10pm",
    phone: "+1 (555) NO-SPUDS",
    dress: "Minimal · Stark · Fry-free",
  },
];

export default function LocationsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <SectionReveal className="site-section site-section--loose border-b border-cream/[0.06] bg-void">
        <div className="site-wrap">
          <header className="section-head flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-16">
            <div className="section-stack gap-6">
              <p className="type-eyebrow">Find us</p>
              <h1 className="type-display type-display--xl">LOCATIONS</h1>
            </div>
            <p className="type-lead max-w-xs md:text-right">
              Brutalist spaces · Zero potato zones
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            {locations.map((location, i) => (
              <div
                key={location.city}
                className="glass-panel overflow-hidden"
              >
                <div className="border-b border-cream/[0.06] bg-ink/40 px-8 py-6">
                  <h2 className="text-3xl uppercase tracking-wide md:text-4xl">
                    {location.city}
                  </h2>
                </div>
                <div className="grid">
                  {[
                    { label: "Address", value: location.address },
                    { label: "Hours", value: location.hours },
                    { label: "Phone", value: location.phone },
                    { label: "Dress code", value: location.dress },
                  ].map((row, j) => (
                    <div
                      key={row.label}
                      className={`flex flex-col gap-3 px-8 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:py-10 ${
                        j < 3 ? "border-b border-cream/[0.06]" : ""
                      } ${j % 2 === 0 ? "bg-transparent" : "bg-ink/40"}`}
                    >
                      <span className="type-eyebrow type-eyebrow--burple">{row.label}</span>
                      <span className="text-lg uppercase tracking-wide sm:text-xl">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="site-section site-section--loose section-ambient section-ambient--visit folk-border">
        <div className="site-wrap depth-content">
          <div className="section-stack max-w-2xl">
            <p className="type-eyebrow">Important</p>
            <p className="type-lead">
              All locations operate under the same strict no-fries policy. Walk-ins welcome if you
              swear off potatoes at the door. Reservations recommended for the full apology
              experience. Each location features raw concrete interiors, burple-forward lighting, and
              absolutely no golden starch.
            </p>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
