"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Paradise Valley",
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80",
    price: 25,
    duration: "Half Day",
    rating: 4.9,
    reviews: 312,
    location: "From Agadir",
  },
  {
    id: 2,
    title: "Sahara Desert 2 Days",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=80",
    price: 149,
    duration: "2 Days",
    rating: 4.9,
    reviews: 198,
    location: "Zagora Desert",
  },
  {
    id: 3,
    title: "Marrakech Day Trip",
    tag: "RECOMMENDED",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80",
    price: 45,
    duration: "Full Day",
    rating: 4.8,
    reviews: 421,
    location: "Marrakech",
  },
  {
    id: 4,
    title: "Crocoparc & Taroudant",
    tag: "FAMILY",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
    price: 35,
    duration: "Full Day",
    rating: 4.7,
    reviews: 156,
    location: "Taroudant",
  },
];

const tagColors: Record<string, string> = {
  BESTSELLER: 'bg-gold text-navy-900',
  POPULAR: 'bg-ocean text-white',
  RECOMMENDED: 'bg-navy-700 text-white',
  FAMILY: 'bg-sand text-navy-900',
};

function TourCard({ tour, index }: { tour: typeof tours[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl card-glow transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${tour.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
        {/* Tag */}
        <div className={`absolute top-4 left-4 text-[10px] font-black tracking-[0.15em] px-3 py-1.5 rounded-full ${tagColors[tour.tag]}`}>
          {tour.tag}
        </div>
        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-bold px-2.5 py-1.5 rounded-full">
          <Star className="w-3 h-3 fill-gold text-gold" />
          {tour.rating}
          <span className="text-navy-600 font-normal">({tour.reviews})</span>
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-black text-white">{tour.title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="flex items-center gap-5 text-sm text-gray-500 mb-5">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold" /> {tour.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-ocean" /> {tour.location}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <p className="text-2xl font-black text-navy-900">€{tour.price}</p>
          </div>
          <Link
            href={`/tours/${tour.id}`}
            className="flex items-center gap-2 bg-navy-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gold hover:text-navy-900 transition-all duration-300"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToursSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ocean/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-3"
            >
              ✦ Handpicked Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-navy-900 leading-tight"
            >
              Featured Tours
              <br />
              <span className="text-ocean">from Agadir</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-navy-900 font-bold border-2 border-navy-900 px-6 py-3 rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
