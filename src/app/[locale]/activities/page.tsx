"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Play, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const allActivities = [
  {
    id: 1,
    title: 'Surf Lessons',
    subtitle: 'Taghazout Beach',
    price: 30,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80',
    description: 'Learn to surf with professional instructors on the famous waves of Taghazout. All equipment included.',
  },
  {
    id: 2,
    title: 'Quad Biking',
    subtitle: 'Pre-Sahara Dunes',
    price: 40,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop&q=80',
    description: 'Experience the thrill of driving a quad bike through the argan forests and pre-Saharan sand dunes.',
  },
  {
    id: 3,
    title: 'Camel Ride Sunset',
    subtitle: 'Agadir Beach & Forest',
    price: 20,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80',
    description: 'A peaceful camel ride along the beach and through the eucalyptus forest during the golden sunset hour.',
  },
  {
    id: 4,
    title: 'Boat Trip & Free Fishing',
    subtitle: 'Atlantic Coast',
    price: 35,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    description: 'Cruise along the Agadir coastline. Enjoy sunbathing, fishing, swimming, and a fresh fish barbecue cooked on board.',
  },
  {
    id: 5,
    title: 'Jet Ski Rental',
    subtitle: 'Agadir Marina',
    price: 45,
    image: 'https://images.unsplash.com/photo-1551690940-271597147e62?w=800&auto=format&fit=crop&q=80',
    description: 'Speed across the waters of the Agadir bay on a powerful Yamaha jet ski. No license required. Briefing included.',
  },
  {
    id: 6,
    title: 'Hammam & Massage',
    subtitle: 'Luxury Spa',
    price: 35,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    description: 'Relax with a traditional Moroccan Hammam experience followed by a full body massage using pure Argan oil.',
  }
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-ocean border-b-8 border-gold overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&auto=format&fit=crop&q=80"
            alt="Activities in Agadir"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-10">
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-gold text-gold" /> Time for Action
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Things to <span className="gold-shimmer">Do</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Whether you want to ride the Atlantic waves, race through the dunes, or relax in a traditional hammam — the adventure starts here.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-200">
            <p className="text-navy-900 font-bold mb-0">Showing <span className="text-gold">{allActivities.length}</span> exciting activities</p>
            <button className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold transition-colors">
              <Filter className="w-4 h-4" /> Filter Activities
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allActivities.map((activity) => (
              <div
                key={activity.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy-900/5 transition-all duration-500 hover:-translate-y-2 flex flex-col border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${activity.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{activity.subtitle}</p>
                    <h3 className="text-2xl font-black text-white">{activity.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {activity.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-2xl font-black text-navy-900 leading-none">€{activity.price}</p>
                    </div>
                    <Link
                      href={`/activities/${activity.id}`}
                      className="flex items-center justify-center w-12 h-12 bg-navy-900 text-white rounded-full hover:bg-gold hover:text-navy-900 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </Link>
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
