"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Clock, MapPin, Star, Users, Calendar, CheckCircle2, XCircle, Info, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

// Mock data for the tour
const tour = {
  id: "1",
  title: "Paradise Valley Half Day",
  tag: "BESTSELLER",
  image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&auto=format&fit=crop&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80"
  ],
  price: 25,
  duration: "Half Day (Approx. 5 hours)",
  rating: 4.9,
  reviews: 312,
  location: "Paradise Valley, Atlas Mountains",
  groupSize: "Up to 15 people",
  languages: "English, French, German",
  description: "Escape the city and discover the breathtaking Paradise Valley, a true oasis hidden in the High Atlas Mountains. Just a short drive from Agadir, this half-day tour takes you through winding mountain roads and traditional Berber villages.\n\nOnce there, take a short hike through palm tree gorges to reach stunning natural rock pools. Enjoy free time to swim in the crystal-clear waters, sunbathe on the warm rocks, or simply relax in the serene environment. You'll also learn about the local Argan oil production process.",
  highlights: [
    "Swim in natural crystal-clear rock pools",
    "Hike through scenic palm tree gorges",
    "Visit a traditional Berber village",
    "Learn about Argan oil production",
    "Escape the city for a peaceful natural oasis"
  ],
  included: [
    "Hotel pickup and drop-off in Agadir",
    "Air-conditioned transportation",
    "Local guide",
    "Visit to Argan oil cooperative"
  ],
  notIncluded: [
    "Meals and drinks",
    "Gratuities (optional)",
    "Personal expenses"
  ],
  itinerary: [
    {
      time: "08:30 AM",
      title: "Hotel Pickup",
      desc: "We pick you up from your hotel or accommodation in Agadir."
    },
    {
      time: "09:30 AM",
      title: "Argan Oil Cooperative",
      desc: "Stop along the way to visit a local women's cooperative and learn how famous Moroccan Argan oil is made."
    },
    {
      time: "10:30 AM",
      title: "Arrival & Hike",
      desc: "Arrive at Paradise Valley and take a short 20-minute scenic hike down to the natural pools."
    },
    {
      time: "11:00 AM",
      title: "Free Time & Swimming",
      desc: "Enjoy plenty of free time to swim, relax, take photos, or enjoy a fresh orange juice by the water."
    },
    {
      time: "01:00 PM",
      title: "Return to Agadir",
      desc: "Hike back up to the vehicles and begin the scenic drive back to your hotel."
    }
  ]
};

export default function TourDetailsPage() {
  const params = useParams();
  const id = params.id;
  // In a real app, we would fetch the specific tour based on 'id' here.
  
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
        
        <div className="absolute top-28 left-5 sm:left-8 z-20">
          <Link href="/tours" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all text-sm font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Tours
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
            <div className="flex gap-3">
              <span className="bg-gold text-navy-900 text-xs font-black tracking-widest px-3 py-1.5 rounded-full">{tour.tag}</span>
              <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold text-gold" /> {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90 font-medium text-sm sm:text-base">
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-gold" /> {tour.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /> {tour.duration}</span>
              <span className="flex items-center gap-2"><Users className="w-5 h-5 text-gold" /> {tour.groupSize}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-black text-navy-900 mb-6">Overview</h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                {tour.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-sand-100/50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-black text-navy-900 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-gold fill-gold" /> Trip Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included / Not Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black text-navy-900 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black text-navy-900 mb-4">Not Included</h3>
                <ul className="space-y-3">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <XCircle className="w-4 h-4 text-red-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-black text-navy-900 mb-8">Itinerary</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[19px] before:w-0.5 before:bg-gray-200">
                {tour.itinerary.map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg border-4 border-[#FDFBF7]">
                      <span className="text-navy-900 font-bold text-sm">{i+1}</span>
                    </div>
                    <div>
                      <span className="text-ocean font-bold text-sm mb-1 block">{step.time}</span>
                      <h4 className="text-lg font-black text-navy-900 mb-2">{step.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-black text-navy-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {tour.gallery.map((img, i) => (
                  <div key={i} className="relative h-32 sm:h-48 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image src={img} alt="Tour Gallery" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-[2rem] p-8 shadow-2xl shadow-navy-900/5 border border-gray-100">
              
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium mb-1">Price per person</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-navy-900">€{tour.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-sand-100/50 rounded-xl p-4 flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-gold" />
                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase">Select Date</label>
                    <input type="date" className="bg-transparent border-none text-gray-600 text-sm w-full outline-none mt-1" />
                  </div>
                </div>

                <div className="bg-sand-100/50 rounded-xl p-4 flex items-center gap-4">
                  <Users className="w-5 h-5 text-gold" />
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <label className="text-xs font-bold text-navy-900 uppercase">Guests</label>
                    </div>
                    <select className="bg-transparent border-none text-navy-900 font-bold outline-none cursor-pointer">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>€{tour.price} x 1 Person</span>
                  <span>€{tour.price}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm pb-3 border-b border-gray-100">
                  <span>Booking Fee</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between font-black text-navy-900 text-lg pt-2">
                  <span>Total</span>
                  <span className="text-gold">€{tour.price}</span>
                </div>
              </div>

              <button className="w-full bg-navy-900 text-white font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold hover:text-navy-900 transition-all shadow-lg active:scale-95 mb-4">
                Book Now
              </button>

              <p className="text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-1">
                <Info className="w-3 h-3" /> No payment required right now
              </p>

            </div>
          </div>

        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
