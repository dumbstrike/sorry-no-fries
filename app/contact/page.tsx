import { SectionReveal } from "@/components/section-reveal";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-matte text-cream">
      <SectionReveal className="site-section site-section--loose section-ambient section-ambient--visit folk-border border-b border-cream/[0.06]">
        <div className="site-wrap depth-content">
          <div className="section-grid section-grid--visit">
            <header className="section-stack max-w-lg">
              <p className="type-eyebrow">Get in touch</p>
              <h1 className="type-display type-display--xl">CONTACT</h1>
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
                { label: "Email", value: "hello@sorrynofries.com" },
                { label: "Dress", value: "Dark · Dramatic · Potato-free" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-3 px-8 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:py-10 ${
                    i < 3 ? "border-b border-cream/[0.06]" : ""
                  } ${i % 2 === 0 ? "bg-transparent" : "bg-ink/40"}`}
                >
                  <span className="type-eyebrow type-eyebrow--burple">{row.label}</span>
                  <span className="text-lg uppercase tracking-wide sm:text-xl">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="site-section site-section--loose border-b border-cream/[0.06] bg-void">
        <div className="site-wrap">
          <header className="section-head flex flex-col gap-8 border-b border-cream/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-16">
            <div className="section-stack gap-6">
              <p className="type-eyebrow">Reserve a table</p>
              <h2 className="type-display type-display--xl">REQUEST</h2>
            </div>
            <p className="type-lead max-w-xs md:text-right">
              Subject to availability · No fries guarantee
            </p>
          </header>

          <form className="section-stack max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="section-stack gap-3">
                <label htmlFor="name" className="type-eyebrow type-eyebrow--burple">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-ink border border-cream/[0.06] px-6 py-4 text-cream focus:border-burple focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="section-stack gap-3">
                <label htmlFor="email" className="type-eyebrow type-eyebrow--burple">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-ink border border-cream/[0.06] px-6 py-4 text-cream focus:border-burple focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="section-stack gap-3">
                <label htmlFor="date" className="type-eyebrow type-eyebrow--burple">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full bg-ink border border-cream/[0.06] px-6 py-4 text-cream focus:border-burple focus:outline-none"
                />
              </div>
              <div className="section-stack gap-3">
                <label htmlFor="guests" className="type-eyebrow type-eyebrow--burple">
                  Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full bg-ink border border-cream/[0.06] px-6 py-4 text-cream focus:border-burple focus:outline-none"
                >
                  <option value="">Select party size</option>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6+ guests</option>
                </select>
              </div>
            </div>

            <div className="section-stack gap-3">
              <label htmlFor="message" className="type-eyebrow type-eyebrow--burple">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-ink border border-cream/[0.06] px-6 py-4 text-cream focus:border-burple focus:outline-none resize-none"
                placeholder="Special requests, dietary restrictions (no potatoes needed)..."
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button type="submit" className="btn btn--lg btn--primary btn--wide">
                Submit request
              </button>
            </div>
          </form>
        </div>
      </SectionReveal>
    </div>
  );
}
