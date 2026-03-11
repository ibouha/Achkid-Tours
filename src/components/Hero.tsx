"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Compass, Zap, Star, ArrowDown } from 'lucide-react';

const stats = [
  { value: '2,500+', label: 'Happy Travellers' },
  { value: '45+', label: 'Unique Tours' },
  { value: '4.9★', label: 'Average Rating' },
];

const heroImages = [
  '/heroF2.png',
  '/heroS.jpg',
  '/heroT2.png',
];

export default function Hero() {
  const t = useTranslations('Hero');
  const ref = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroImages[currentImage]}')`,
            }}
          />
        </AnimatePresence>
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/75 via-navy-900/50 to-navy-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating decorative orbs */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-ocean/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 pt-32 pb-24 text-center max-w-6xl mx-auto w-full"
        style={{ opacity }}
      >
        {/* Pre-headline tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8"
        >
          <Star className="w-3.5 h-3.5 fill-gold" />
          Morocco's #1 Tour Operator in Agadir
          <Star className="w-3.5 h-3.5 fill-gold" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          {t('headline').split('Agadir')[0]}
          <br />
          <span className="gold-shimmer">{t('headline').includes('Agadir') ? 'Agadir' : 'Morocco'}</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Link
            href="/tours"
            className="group flex items-center justify-center gap-3 bg-gold text-navy-900 font-black text-base px-8 py-4 rounded-full shadow-2xl shadow-gold/30 hover:bg-gold-300 hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            {t('exploreTours')}
          </Link>
          <Link
            href="/activities"
            className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Zap className="w-5 h-5 text-gold" />
            {t('bookActivity')}
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-10 md:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gold">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>
    </div>
  );
}
