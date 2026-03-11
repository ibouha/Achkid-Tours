"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Users, BedDouble, Wifi, Wind, Coffee, Tv, Car, Waves, ArrowLeft, Calendar, Info } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

// Mock data for the apartment
const apartment = {
  id: "1",
  title: "Ocean View Marina Suite",
  location: "Agadir Marina",
  price: 85,
  rating: 4.9,
  reviews: 42,
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&auto=format&fit=crop&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80"
  ],
  badge: "TOP RATED",
  description: "Experience luxury living right in the heart of Agadir Marina. This stunning 2-bedroom suite offers panoramic views of the ocean and the luxury yachts moored below. \n\nThe apartment features a spacious open-plan living and dining area with modern Moroccan touches, a fully equipped modern kitchen, and a large private terrace perfect for enjoying the famous Agadir sunsets. \n\nStep out of the building and you are immediately surrounded by high-end boutiques, excellent seafood restaurants, and the main beach is just a 2-minute walk away.",
  amenities: [
    { icon: Wifi, name: "Fast Free WiFi" },
    { icon: Wind, name: "Air Conditioning" },
    { icon: Tv, name: "Smart TV with Netflix" },
    { icon: Coffee, name: "Nespresso Machine" },
    { icon: Car, name: "Free Secure Parking" },
    { icon: Waves, name: "Ocean View Terrace" }
  ],
  rules: [
    "Check-in: After 3:00 PM",
    "Checkout: 11:00 AM",
    "No smoking inside",
    "No pets allowed",
    "No parties or events"
  ]
};

export default function ApartmentDetailsPage() {
  const params = useParams();
  const id = params.id;
  
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Main Content */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="mb-6">
            <Link href="/apartments" className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Apartments
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="bg-gold text-navy-900 text-xs font-black tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block">{apartment.badge}</span>
                <h1 className="text-3xl md:text-5xl font-black text-navy-900 mb-2">{apartment.title}</h1>
                <p className="flex items-center gap-2 text-gray-500 font-medium">
                  <MapPin className="w-5 h-5 text-ocean" /> {apartment.location}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="text-sm font-bold text-navy-900 underline hover:text-gold">Share</button>
                <button className="text-sm font-bold text-navy-900 underline hover:text-gold">Save</button>
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] min-h-[400px] max-h-[600px] rounded-3xl overflow-hidden mb-12">
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
              <Image src={apartment.image} alt="Main" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            </div>
            {apartment.gallery.map((img, i) => (
              <div key={i} className={`relative group cursor-pointer ${i === 2 ? 'md:col-span-2' : ''}`}>
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column (Details) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Quick Specs */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 py-6 border-y border-gray-200">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Capacity</p>
                    <p className="font-bold text-navy-900">{apartment.guests} Guests</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BedDouble className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Bedrooms</p>
                    <p className="font-bold text-navy-900">{apartment.bedrooms} Beds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Waves className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Bathrooms</p>
                    <p className="font-bold text-navy-900">{apartment.bathrooms} Baths</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-black text-navy-900 mb-6">About this home</h2>
                <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                  {apartment.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-black text-navy-900 mb-6">What this place offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {apartment.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 py-2 border-b border-gray-100">
                      <item.icon className="w-6 h-6 text-ocean" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div className="bg-sand-100/50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-xl font-black text-navy-900 mb-4">House Rules</h2>
                <ul className="space-y-3">
                  {apartment.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column (Booking Widget) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100">
                
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <span className="text-3xl font-black text-navy-900">€{apartment.price}</span>
                    <span className="text-gray-500 font-medium"> / night</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold text-navy-900 underline">
                    {apartment.rating} <span className="text-gray-400 no-underline font-normal">({apartment.reviews} reviews)</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
                  <div className="grid grid-cols-2 border-b border-gray-200">
                    <div className="p-3 border-r border-gray-200 cursor-pointer hover:bg-sand-100/50 transition-colors">
                      <p className="text-[10px] font-black uppercase text-navy-900">CHECK-IN</p>
                      <p className="text-sm text-gray-500 mt-0.5">Add date</p>
                    </div>
                    <div className="p-3 cursor-pointer hover:bg-sand-100/50 transition-colors">
                      <p className="text-[10px] font-black uppercase text-navy-900">CHECKOUT</p>
                      <p className="text-sm text-gray-500 mt-0.5">Add date</p>
                    </div>
                  </div>
                  <div className="p-3 cursor-pointer hover:bg-sand-100/50 transition-colors">
                    <p className="text-[10px] font-black uppercase text-navy-900">GUESTS</p>
                    <p className="text-sm text-gray-500 mt-0.5">1 guest</p>
                  </div>
                </div>

                <button className="w-full bg-navy-900 text-white font-black text-lg py-4 rounded-xl flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-all shadow-lg active:scale-95 mb-4 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold via-gold-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Check Availability</span>
                </button>

                <p className="text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-1">
                  <Info className="w-3 h-3" /> You won't be charged yet
                </p>

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
