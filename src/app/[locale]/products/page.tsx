import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const allProducts = [
  {
    id: 1,
    name: "Pure Organic Argan Oil (Culinary)",
    category: "Gourmet Foods",
    price: 35,
    rating: 5.0,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?w=800&auto=format&fit=crop&q=80",
    badge: "100% PURE",
    description: "Premium cold-pressed culinary Argan oil, perfect for cooking or dipping. Rich in nutty flavor and antioxidants, sourced directly from the Agadir region's women's cooperatives.",
  },
  {
    id: 2,
    name: "Traditional Amlou Spread",
    category: "Gourmet Foods",
    price: 22,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1599596495372-e1cb0eb2624a?w=800&auto=format&fit=crop&q=80",
    badge: "LOCALLY MADE",
    description: "The Moroccan 'Nutella'. A rich, sweet paste made from roasted almonds, pure Argan oil, and locally sourced honey. Perfect for breakfast on warm bread.",
  },
  {
    id: 3,
    name: "Authentic Berber Rug (Azilal)",
    category: "Handicrafts & Decor",
    price: 250,
    rating: 4.8,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&auto=format&fit=crop&q=80",
    badge: "HANDWOVEN",
    description: "Handwoven in the Atlas Mountains, this Azilal rug features traditional Berber geometric patterns. Made with 100% natural sheep wool.",
  },
  {
    id: 4,
    name: "Saffron Threads from Taliouine",
    category: "Spices",
    price: 45,
    rating: 5.0,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    badge: "PREMIUM",
    description: "Pure, high-grade saffron directly from the fields of Taliouine. Known as 'red gold', it adds an incomparable aroma and color to tagines and teas.",
  },
  {
    id: 5,
    name: "Cosmetic Argan Oil",
    category: "Cosmetics & Beauty",
    price: 28,
    rating: 4.9,
    reviews: 304,
    image: "https://images.unsplash.com/photo-1615397323755-7033baab93a9?w=800&auto=format&fit=crop&q=80",
    badge: "BESTSELLER",
    description: "Cold-pressed from unroasted kernels. A pure, lightweight oil perfect for hair, skin, and nails. High in Vitamin E and essential fatty acids.",
  },
  {
    id: 6,
    name: "Hand-Painted Ceramics Plate",
    category: "Handicrafts & Decor",
    price: 18,
    rating: 4.7,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1610705494291-a1bf64c92da0?w=800&auto=format&fit=crop&q=80",
    badge: "ARTISANAL",
    description: "Beautifully hand-painted ceramic plate featuring complex Moorish patterns. Made by Master Artisans using traditional techniques passed down for generations.",
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-navy-900 border-b-8 border-gold">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1590455085350-a9cf3112bd68?w=1600&auto=format&fit=crop&q=80"
            alt="Moroccan Souk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-10">
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Authentic Goods
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Produits <span className="gold-shimmer">Terroir</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Take home the essence of Morocco. From pure Argan oil and sweet Amlou to handwoven Berber rugs. Sourced directly from local artisans and cooperatives.
          </p>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl shadow-sm mb-12 gap-4">
            <p className="text-navy-900 font-bold">Showing <span className="text-gold">6</span> exclusive products</p>
            <button className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold transition-colors">
              <Filter className="w-4 h-4" /> Filter by Category
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-5 shadow-xl shadow-navy-900/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col cursor-pointer"
              >
                {/* Full Card Link */}
                <Link href={`/products/${product.id}`} className="absolute inset-0 z-20" aria-label={`View ${product.name}`} />
                
                {/* Image */}
                <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-6 bg-sand-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-navy-900 tracking-wider">
                    {product.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-sand font-bold text-xs uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="text-navy-900 font-black text-2xl leading-tight mb-2 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="font-bold text-sm text-navy-900">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="text-3xl font-black text-navy-900">€{product.price}</span>
                    <button className="px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-gold hover:text-navy-900 transition-all active:scale-95 shadow-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
