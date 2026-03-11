"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Pure Organic Argan Oil",
    category: "Cosmetics & Culinary",
    price: 35,
    rating: 5.0,
    reviews: 128,
    image: "https://www.amaressentialoils.com/wp-content/uploads/2024/08/A-high-quality-product-image-featuring-a-glass-bottle-of-Argan-Oil-with-a-refined-design-labeled-Argan-Oil-100-Pure.-The-bottle-contains-a-golden-liquid.jpg",
    badge: "100% PURE",
  },
  {
    id: 2,
    name: "Traditional Amlou Spread",
    category: "Gourmet Foods",
    price: 22,
    rating: 4.9,
    reviews: 86,
    image: "/amlou.webp",
    badge: "LOCALLY MADE",
  },
  {
    id: 3,
    name: "Authentic Berber Rug",
    category: "Handicrafts & Decor",
    price: 250,
    rating: 4.8,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&auto=format&fit=crop&q=80",
    badge: "HANDWOVEN",
  },
  {
    id: 4,
    name: "Saffron from Taliouine",
    category: "Spices",
    price: 45,
    rating: 5.0,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    badge: "PREMIUM",
  }
];

export default function ProductsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-100/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
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
              <ShoppingBag className="w-4 h-4" /> Produits Terroir
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-navy-900 leading-tight"
            >
              Take a Piece of <span className="text-ocean">Morocco</span> Home
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="group flex items-center gap-2 text-navy-900 font-bold hover:text-gold transition-colors"
            >
              View Full Store 
              <span className="w-8 h-8 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group bg-white rounded-3xl p-4 shadow-xl shadow-navy-900/5 hover:-translate-y-2 transition-transform duration-300 relative block cursor-pointer"
            >
              {/* Full Card Link */}
              <Link href={`/products/${product.id}`} className="absolute inset-0 z-20" aria-label={`View ${product.name}`} />
              
              {/* Product Image */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-5 bg-sand-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-navy-900 tracking-wider">
                  {product.badge}
                </div>
              </div>

              {/* Product Info */}
              <div className="px-2">
                <p className="text-sand font-bold text-xs uppercase tracking-widest mb-1.5">{product.category}</p>
                <h3 className="text-navy-900 font-black text-xl leading-tight mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="font-bold text-sm text-navy-900">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-navy-900">€{product.price}</span>
                  <button className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center hover:bg-gold transition-colors hover:scale-105 active:scale-95">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
