"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const features = [
  "Local Experts Born & Raised in Agadir",
  "Tailor-made Desert & Imperial Tours",
  "Handpicked Premium Holiday Apartments",
  "100% Authentic Moroccan Experiences",
  "24/7 WhatsApp Support & Live Guides",
];

export default function AboutSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-60px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Big decorative text */}
      <div className="pointer-events-none select-none absolute -top-8 left-0 text-white/[0.025] font-black text-[18vw] leading-none">
        MOROCCO
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Images Stack */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[560px]"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 right-12 bottom-12 rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            {/* Floating secondary image */}
            <div className="absolute bottom-0 right-0 w-56 h-44 rounded-2xl overflow-hidden border-4 border-navy-900 shadow-2xl animate-float">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&auto=format&fit=crop&q=80')" }}
              />
            </div>
            {/* Gold badge */}
            <div className="absolute top-6 right-0 bg-gold text-navy-900 rounded-2xl px-6 py-4 shadow-2xl">
              <p className="text-3xl font-black">200+</p>
              <p className="text-xs font-bold tracking-wide uppercase">Tours Done</p>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">✦ Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Your Local Guide to
              <br />
              <span className="gold-shimmer">Authentic Morocco</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Achkid Tours is Agadir's most trusted tour operator. We craft unforgettable journeys — from surf sessions in Taghazout and camel rides at sunset, to epic Sahara desert adventures and Marrakech city days. Every experience is led by passionate local experts.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={rightInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-white/75"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-medium">{f}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gold text-navy-900 font-black px-8 py-4 rounded-full shadow-xl hover:bg-gold-300 hover:shadow-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              Our Full Story <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
