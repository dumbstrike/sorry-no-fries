export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          about <span className="text-[#8D7BFF]">burple</span>
        </h1>

        <p className="mt-6 text-white/60 text-lg leading-relaxed">
          SORRY. NO. FRIES is not a restaurant. It is a controlled rejection of fries,
          replaced with green beans, burple aesthetics, and experimental food logic.
        </p>

        {/* SECTION 1 */}
        <div className="mt-16 space-y-6">

          <h2 className="text-2xl font-semibold text-white">
            origin
          </h2>

          <p className="text-white/60 leading-relaxed">
            The brand originates from Burplefolk — a visual and conceptual painting
            created by Max Evasion. It defines the emotional texture of this universe:
            distorted luxury, calm absurdity, and intentional contradiction.
          </p>

        </div>

        {/* SECTION 2 */}
        <div className="mt-12 space-y-6">

          <h2 className="text-2xl font-semibold">
            philosophy
          </h2>

          <p className="text-white/60 leading-relaxed">
            fries are rejected not out of hate, but out of design discipline.
            green beans are not a substitute — they are a statement.
          </p>

        </div>

        {/* SECTION 3 */}
        <div className="mt-12 space-y-6">

          <h2 className="text-2xl font-semibold">
            burplefolk
          </h2>

          <p className="text-white/60 leading-relaxed">
            burple is not a color. it is a controlled visual hallucination system
            used to define taste, identity, and atmosphere inside the brand.
          </p>

        </div>

        {/* FOOT NOTE */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="text-white/40 text-sm">
            max evasion — system note: burple remains unstable but intentional.
          </p>
        </div>

      </div>
    </main>
  );
}