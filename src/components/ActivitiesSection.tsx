"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Surf Lessons',
    subtitle: 'Taghazout',
    price: 30,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80',
    color: 'from-ocean/80',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 2,
    title: 'Quad Biking',
    subtitle: 'Sand Dunes',
    price: 40,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=80',
    color: 'from-gold/80',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Camel Ride',
    subtitle: 'Beach Sunset',
    price: 20,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80',
    color: 'from-sand/80',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Boat Trip',
    subtitle: 'Atlantic Coast',
    price: 35,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    color: 'from-navy-700/80',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export default function ActivitiesSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean via-gold to-ocean opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-3"
          >
            ✦ Adventures Await
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy-900 mb-4"
          >
            Things to Do in <span className="text-ocean">Agadir</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-gray-500 max-w-xl mx-auto text-lg"
          >
            From crashing Atlantic waves to blazing desert trails — Agadir is your playground.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${activity.span}`}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${activity.image}')` }}
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/70 text-sm font-medium mb-1">{activity.subtitle}</p>
                  <h3 className="text-2xl font-black text-white mb-3">{activity.title}</h3>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                    <span className="text-gold font-black text-xl">€{activity.price}</span>
                    <Link
                      href={`/activities/${activity.id}`}
                      className="flex items-center gap-2 bg-white text-navy-900 text-sm font-bold px-4 py-2 rounded-xl hover:bg-gold hover:text-navy-900 transition-colors"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
