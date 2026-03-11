"use client";
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Compass, Users, Award, ShieldCheck, ArrowRight, Heart, Map, Star } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] overflow-hidden">
      <Navbar />

      {/* Hero Header (Parallax) */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-navy-900 border-b-4 border-gold overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&auto=format&fit=crop&q=80"
            alt="Agadir Morocco"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
              <Compass className="w-5 h-5" /> Our Story
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              About <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-300">Achkid Tours</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              We are Agadir's premier tour operator, dedicated to showcasing the authentic beauty, culture, and adventure of Morocco.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative z-10 bg-[#FDFBF7]" ref={storyRef}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sand-100/30 -skew-x-12 translate-x-1/2 rounded-full blur-3xl saturate-150 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Image Collage */}
            <motion.div 
              className="relative h-[650px] w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main Image */}
              <div className="absolute top-0 right-4 w-4/5 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80"
                  alt="Moroccan Guide"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Overlapping Small Image */}
              <motion.div 
                className="absolute bottom-12 left-0 w-3/5 h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#FDFBF7] z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80"
                  alt="Desert Trip"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div 
                className="absolute top-1/2 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 z-20 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.5 }}
              >
                <div className="bg-gold/20 p-4 rounded-full">
                  <Star className="w-8 h-8 text-gold fill-gold" />
                </div>
                <div>
                  <p className="text-3xl font-black text-navy-900 leading-none">10+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Years of<br/>Experience</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="lg:pl-6"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-8 leading-tight">
                Born from a <br/>
                <span className="text-ocean">Passion for Morocco</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-navy-900 font-bold">"Achkid" means "Welcome"</strong> in our local Berber language, and that is exactly the feeling we strive to give every single traveler who visits our beautiful country.
                </p>
                <p>
                  Founded by a group of passionate locals born and raised in Agadir, our mission has always been simple: to take you beyond the typical tourist traps and show you the real Morocco. We want you to experience the warmth of our hospitality, taste our authentic cuisine, and discover the hidden gems only locals know about.
                </p>
                <p>
                  Whether it's catching the perfect wave in Taghazout, riding camels into a blazing Saharan sunset, or finding the perfect holiday apartment — we handle every detail so you can focus on making memories.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tours"
                  className="group flex items-center justify-center gap-2 bg-navy-900 text-white font-black px-8 py-4 rounded-full shadow-xl hover:bg-gold hover:text-navy-900 hover:shadow-gold/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Our Tours <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 bg-white text-navy-900 border-2 border-navy-900/10 font-bold px-8 py-4 rounded-full shadow-sm hover:border-navy-900 hover:bg-navy-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-40 py-32 bg-navy-900 relative overflow-hidden" ref={valuesRef}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ocean/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-20">The Achkid Difference</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Map,
                title: "Local Expertise",
                desc: "Our guides aren't just employees; they are locals who grew up running through the very streets and surfing the very waves they now show you.",
                delay: 0.2
              },
              {
                icon: ShieldCheck,
                title: "Safe & Reliable",
                desc: "From our fully insured modern transport vehicles to our vetted partner networks, your safety and comfort are always our top priority.",
                delay: 0.4
              },
              {
                icon: Heart,
                title: "Custom Experiences",
                desc: "We know that no two travelers are alike. We offer flexible, tailor-made itineraries designed specifically around your interests and schedule.",
                delay: 0.6
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="group relative bg-[#13284B] rounded-[2rem] p-10 text-left border border-white/5 hover:border-gold/30 hover:bg-[#1A3764] transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: feature.delay, ease: "easeOut" }}
              >
                {/* Glow behind icon */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-16 h-16 bg-navy-900 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg group-hover:text-white/80 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Huge Morocco Watermark */}
        <div className="pointer-events-none select-none absolute -bottom-10 left-0 right-0 overflow-hidden text-center text-white/[0.02] font-black text-[22vw] leading-none z-0">
          AGADIR
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
