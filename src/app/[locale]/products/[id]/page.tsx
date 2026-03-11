"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ShoppingBag, Star, ArrowLeft, CheckCircle2, ShieldCheck, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useState } from 'react';

// Mock data for the product
const product = {
  id: "1",
  name: "Pure Organic Argan Oil (Culinary)",
  category: "Gourmet Foods",
  price: 35,
  rating: 5.0,
  reviews: 128,
  image: "https://www.amaressentialoils.com/wp-content/uploads/2024/08/A-high-quality-product-image-featuring-a-glass-bottle-of-Argan-Oil-with-a-refined-design-labeled-Argan-Oil-100-Pure.-The-bottle-contains-a-golden-liquid.jpg",
  gallery: [
    "https://www.amaressentialoils.com/wp-content/uploads/2024/08/A-high-quality-product-image-featuring-a-glass-bottle-of-Argan-Oil-with-a-refined-design-labeled-Argan-Oil-100-Pure.-The-bottle-contains-a-golden-liquid.jpg",
    "https://images.unsplash.com/photo-1608248593842-83901b047558?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
  ],
  badge: "100% PURE",
  description: "Premium cold-pressed culinary Argan oil, perfect for cooking or dipping. Rich in nutty flavor and antioxidants, sourced directly from the Agadir region's women's cooperatives.\n\nRoasted prior to extraction, this culinary grade oil boasts a beautiful deep golden color and a uniquely toasted, nutty aroma. It is a staple in Moroccan cuisine, often used to drizzle over couscous, salads, or simply enjoyed dipped with fresh warm bread.",
  features: [
    "100% pure, cold-pressed from roasted kernels",
    "Sourced sustainably from women's cooperatives in Agadir",
    "Rich in Vitamin E, Omega-3, and Omega-9 fatty acids",
    "No additives, preservatives, or artificial colors",
    "Vegan and naturally gluten-free"
  ],
  volume: ["100ml", "250ml", "500ml"],
  stockStatus: "In Stock"
};

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState(product.volume[1]);
  
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Store
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full bg-sand-100 rounded-[2rem] overflow-hidden border border-gray-100">
                <Image src={product.gallery[0]} alt={product.name} fill className="object-cover" priority />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black text-navy-900 tracking-widest">
                  {product.badge}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, i) => (
                  <div key={i} className={`relative h-24 rounded-2xl overflow-hidden cursor-pointer border-2 ${i === 0 ? 'border-gold' : 'border-transparent hover:border-gold/50'} transition-all`}>
                    <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Cart */}
            <div className="flex flex-col">
              <p className="text-sand font-bold text-sm uppercase tracking-widest mb-3">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-black text-navy-900 leading-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-bold text-navy-900">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} customer reviews)</span>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-200">
                <span className="text-5xl font-black text-navy-900">€{product.price}</span>
              </div>

              <div className="mb-8">
                <p className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">Volume</p>
                <div className="flex flex-wrap gap-3">
                  {product.volume.map((vol) => (
                    <button
                      key={vol}
                      onClick={() => setSelectedVolume(vol)}
                      className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                        selectedVolume === vol 
                        ? 'border-navy-900 bg-navy-900 text-white shadow-lg' 
                        : 'border-gray-200 text-gray-500 hover:border-navy-900 hover:text-navy-900'
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center justify-between border-2 border-gray-200 rounded-xl px-4 py-1 sm:w-32 bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-gray-400 hover:text-navy-900 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-navy-900 text-lg w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-gray-400 hover:text-navy-900 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button className="flex-1 bg-gold text-navy-900 font-black text-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gold-400 transition-all shadow-[0_8px_30px_rgb(245,166,35,0.3)] active:scale-95">
                  <ShoppingBag className="w-5 h-5" /> Add to Cart
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 bg-sand-100/30 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
                  <ShieldCheck className="w-6 h-6 text-ocean" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
                  <Truck className="w-6 h-6 text-ocean" />
                  <span>Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-navy-900">
                  <RotateCcw className="w-6 h-6 text-ocean" />
                  <span>30-Day Returns</span>
                </div>
              </div>

              {/* Description Tabs */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-navy-900 mb-4">Description</h3>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {product.description.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-black text-navy-900 mb-4">Why you'll love it</h3>
                  <ul className="space-y-3">
                    {product.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
