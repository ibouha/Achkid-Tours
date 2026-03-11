"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, ArrowRight, BedDouble, Users } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const apartments = [
  {
    id: 1,
    title: "Ocean View Marina Suite",
    location: "Agadir Marina",
    price: 85,
    guests: 4,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
    badge: "TOP RATED",
  },
  {
    id: 3,
    title: "Atlas Premium Duplex",
    location: "Founty Tourist Zone",
    price: 120,
    guests: 6,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    badge: "LUXURY",
  },
  {
    id: 4,
    title: "Sunset Beach Studio",
    location: "Anza Beach",
    price: 45,
    guests: 2,
    bedrooms: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?w=800&auto=format&fit=crop&q=80",
    badge: "BEST VALUE",
  }
];

export default function ApartmentsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div ref={titleRef} className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> Holiday Rentals
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-navy-900 leading-tight"
            >
              Premium <span className="text-ocean">Apartments</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/apartments"
              className="group flex items-center gap-2 text-navy-900 font-bold hover:text-gold transition-colors"
            >
              View All Apartments 
              <span className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apartments.map((apt, i) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy-900/5 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative block cursor-pointer"
            >
              {/* Full Card Link */}
              <Link href={`/apartments/${apt.id}`} className="absolute inset-0 z-20" aria-label={`View ${apt.title}`} />
              
              {/* Image */}
              <div className="relative h-60 w-full bg-sand-100 overflow-hidden">
                <Image
                  src={apt.image}
                  alt={apt.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-navy-900 tracking-wider">
                  {apt.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sand font-bold text-xs uppercase tracking-widest mb-1.5">{apt.location}</p>
                <h3 className="text-navy-900 font-black text-xl leading-tight mb-4 group-hover:text-gold transition-colors line-clamp-1">
                  {apt.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold text-navy-700">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-gray-400" /> {apt.guests} Guests
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4 text-gray-400" /> {apt.bedrooms} Beds
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-black text-navy-900">€{apt.price}</span>
                    <span className="text-xs text-gray-400 font-medium"> / night</span>
                  </div>
                  <span className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center group-hover:bg-gold transition-colors group-hover:scale-105 active:scale-95">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
