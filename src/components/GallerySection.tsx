"use client";
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&auto=format&fit=crop&q=80', label: 'Moroccan Medina', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&auto=format&fit=crop&q=80', label: 'Surf – Taghazout', span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop&q=80', label: 'Camel Ride', span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&auto=format&fit=crop&q=80', label: 'Sahara Desert', span: 'md:col-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&auto=format&fit=crop&q=80', label: 'Agadir Valley', span: '' },
  { id: 6, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80', label: 'Agadir Beach', span: '' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-sand-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-3"
          >✦ Visual Journey</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy-900"
          >
            Agadir in <span className="text-ocean">Pictures</span>
          </motion.h2>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelected(img)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-navy-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.label} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-8">
                <h3 className="text-white font-black text-2xl">{selected.label}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
