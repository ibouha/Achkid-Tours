"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Home, MapPin, Users, Wifi, Wind, BedDouble, Star, Key } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const apartments = [
  {
    id: 1,
    title: "Ocean View Marina Suite",
    location: "Agadir Marina",
    price: 85,
    rating: 4.9,
    reviews: 42,
    guests: 4,
    bedrooms: 2,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
    badge: "TOP RATED",
    description: "Luxury apartment located right in the heart of Agadir Marina with a stunning balcony view of the sea and yachts.",
  },
  {
    id: 2,
    title: "Taghazout Surf Haven",
    location: "Taghazout Village",
    price: 60,
    rating: 4.7,
    reviews: 89,
    guests: 3,
    bedrooms: 1,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80",
    badge: "POPULAR",
    description: "Cozy and modern apartment just steps away from the famous Taghazout surf spots. Perfect for couples and surfers.",
  },
  {
    id: 3,
    title: "Atlas Premium Duplex",
    location: "Founty Tourist Zone, Agadir",
    price: 120,
    rating: 5.0,
    reviews: 15,
    guests: 6,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    badge: "LUXURY",
    description: "Spacious duplex featuring an elegant Moroccan-modern design, high-speed WiFi, and access to a massive shared pool.",
  },
  {
    id: 4,
    title: "Sunset Beach Studio",
    location: "Anza Beach",
    price: 45,
    rating: 4.8,
    reviews: 56,
    guests: 2,
    bedrooms: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?w=800&auto=format&fit=crop&q=80",
    badge: "BEST VALUE",
    description: "A compact, beautifully furnished studio right on Anza beach. Fall asleep to the sound of breaking waves.",
  }
];

export default function ApartmentsPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-navy-900 border-b-8 border-gold">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1600&auto=format&fit=crop&q=80"
            alt="Premium Apartments in Agadir"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-10">
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Key className="w-5 h-5" /> Your Home Away From Home
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Holiday <span className="gold-shimmer">Apartments</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover handpicked, premium holiday rentals in Agadir and Taghazout. From beachfront studios to luxury marina suites.
          </p>
        </div>
      </section>

      {/* Apartments Listing */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {apartments.map((apt) => (
              <div
                key={apt.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy-900/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col sm:flex-row cursor-pointer"
              >
                {/* Full Card Link */}
                <Link href={`/apartments/${apt.id}`} className="absolute inset-0 z-20" aria-label={`View ${apt.title}`} />
                
                {/* Image */}
                <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
                  <Image
                    src={apt.image}
                    alt={apt.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-navy-900 tracking-wider">
                    {apt.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:w-3/5 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-navy-900 font-black text-2xl leading-tight group-hover:text-gold transition-colors mb-2">
                        {apt.title}
                      </h3>
                      <p className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-3">
                        <MapPin className="w-4 h-4 text-gold" /> {apt.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {apt.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    <div className="flex items-center gap-2 text-navy-900 text-sm font-bold">
                      <Users className="w-4 h-4 text-gray-400" /> {apt.guests} Guests
                    </div>
                    <div className="flex items-center gap-2 text-navy-900 text-sm font-bold">
                      <BedDouble className="w-4 h-4 text-gray-400" /> {apt.bedrooms} Bedrooms
                    </div>
                    <div className="flex items-center gap-2 text-navy-900 text-sm font-bold">
                      <Wifi className="w-4 h-4 text-gray-400" /> Free WiFi
                    </div>
                    <div className="flex items-center gap-2 text-navy-900 text-sm font-bold">
                      <Wind className="w-4 h-4 text-gray-400" /> Air Con
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-black text-navy-900">€{apt.price}</span>
                      <span className="text-gray-400 text-sm font-medium"> / night</span>
                    </div>
                    <span className="px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm group-hover:bg-gold group-hover:text-navy-900 transition-all active:scale-95 shadow-lg flex items-center gap-2">
                      <Home className="w-4 h-4" /> Book
                    </span>
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
