"use client";

import { useState } from "react";

const menu = {
  burgers: [
    { name: "burple core burger", desc: "emotionally unstable cheddar architecture", price: 12 },
    { name: "void melt burger", desc: "blackened taste dimension collapse", price: 14 },
    { name: "glitch stack", desc: "unexpected flavor recursion loop", price: 13 },
    { name: "max evasion special", desc: "CEO-approved reality distortion patty", price: 16 },
    { name: "anti-fries burger", desc: "comes with ideological resistance", price: 15 }
  ],

  beans: [
    { name: "green bean standard", desc: "beans all day philosophy", price: 6 },
    { name: "spicy burple beans", desc: "heat + existential clarity", price: 7 },
    { name: "garlic silence beans", desc: "quiet but aggressive flavor", price: 7 }
  ],

  drinks: [
    { name: "burple slushie", desc: "cold emotional compression", price: 5 },
    { name: "burple soda", desc: "carbonated color theory", price: 4 },
    { name: "void smoothie", desc: "blended uncertainty", price: 6 }
  ],

  sweets: [
    { name: "burple donut", desc: "soft chaos ring", price: 4 },
    { name: "glazed confusion cookie", desc: "crumbled decision making", price: 3 }
  ]
};

export default function MenuPage() {
  const [tab, setTab] = useState("burgers");

  const categories = Object.keys(menu);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          MENU
        </h1>
        <p className="text-white/50 mt-4">
          curated under burple philosophy
        </p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setTab(c)}
            className={`px-5 py-2 rounded-full border transition ${
              tab === c
                ? "bg-[#8D7BFF] text-black"
                : "border-white/20 text-white/70 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {menu[tab].map((item, i) => (
          <div
            key={i}
            className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg capitalize">
                {item.name}
              </h3>
              <span className="text-[#8D7BFF] font-semibold">
                ${item.price}
              </span>
            </div>

            <p className="text-white/50 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}