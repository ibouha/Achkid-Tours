"use client";

// Scrolling marquee ticker inspired by the Trevo landing page
const items = [
  "🏜️ Sahara Desert Tours",
  "🏄 Surf Lessons Taghazout",
  "🐪 Camel Ride",
  "🌊 Boat Trips",
  "🚵 Quad Biking",
  "🏙️ Marrakech Day Trip",
  "🏔️ Paradise Valley",
  "🌅 Sunset Beach Walk",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items]; // doubled for seamless loop
  return (
    <div className="bg-navy-900 border-y border-white/10 py-5 overflow-hidden">
      <div className="animate-marquee flex">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 mx-8 text-white/60 text-sm font-semibold tracking-widest uppercase flex items-center gap-2"
          >
            {item}
            <span className="text-gold mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
