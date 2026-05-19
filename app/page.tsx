import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        
        <div className="absolute inset-0">
          <Image
            src="/burplefolk.jpg"
            alt="Burplefolk"
            fill
            priority
          className="object-cover object-[center_25%] opacity-40"
          />
        </div>

       <>
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

 
</>

        <div className="relative z-10 max-w-6xl text-center">
          
          <p className="uppercase tracking-[0.4em] text-sm text-[#B6A9FF] mb-6">
            beans all day
          </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.04em]">
            SORRY.
            <br />
           <span className="text-[#8D7BFF] drop-shadow-[0_0_18px_rgba(141,123,255,0.45)]">
  NO.
</span>
            <br />
            FRIES
          </h1>

          <p className="mt-10 text-white/60 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
            A cinematic restaurant and lifestyle experience built around the
            fictional color burple, experimental food culture, and the Burplefolk universe.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#8D7BFF] text-black font-semibold rounded-full hover:scale-105 transition">
              enter menu
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
              explore burplefolk
            </button>
          </div>

        </div>
      </section>

      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
            <p className="text-sm text-[#B6A9FF] mb-4">featured</p>
            <h3 className="text-2xl font-bold mb-3">burple burgers</h3>
            <p className="text-white/60 text-sm">
              emotionally unstable cheddar architecture.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
            <p className="text-sm text-[#B6A9FF] mb-4">signature</p>
            <h3 className="text-2xl font-bold mb-3">green beans</h3>
            <p className="text-white/60 text-sm">
              spiritually aggressive garlic behavior.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
            <p className="text-sm text-[#B6A9FF] mb-4">exclusive</p>
            <h3 className="text-2xl font-bold mb-3">burple slushies</h3>
            <p className="text-white/60 text-sm">
              cold existential fruit mechanics.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}