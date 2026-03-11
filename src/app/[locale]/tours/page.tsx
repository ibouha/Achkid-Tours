"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Compass, Clock, MapPin, Star, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const allTours = [
  {
    id: 1,
    title: "Paradise Valley Half Day",
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80",
    price: 25,
    duration: "Half Day",
    rating: 4.9,
    reviews: 312,
    location: "From Agadir",
    description: "Discover the breathtaking Paradise Valley with its natural rock pools, palm tree gorges, and Berber villages. Includes a short hike and time for swimming."
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
    description: "Spend a night under the stars in a traditional desert camp. Experience camel trekking over the dunes and witness spectacular Saharan sunsets."
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
    description: "Explore the bustling souks, palaces, and the famous Jemaa el-Fnaa square in the legendary Red City of Marrakech with an expert local guide."
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
    description: "Visit the massive Crocoparc botanical gardens holding hundreds of Nile crocodiles, followed by a trip to the walled city of Taroudant."
  },
  {
    id: 5,
    title: "Tiout Oasis & Medina",
    tag: "CULTURE",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=80",
    price: 30,
    duration: "Full Day",
    rating: 4.6,
    reviews: 89,
    location: "Tiout",
    description: "Take a donkey ride through the lush Tiout Oasis oasis and enjoy a traditional Berber lunch overlooking the scenic palm groves."
  },
  {
    id: 6,
    title: "Agadir City Tour",
    tag: "CLASSIC",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&auto=format&fit=crop&q=80",
    price: 15,
    duration: "3 Hours",
    rating: 4.5,
    reviews: 540,
    location: "Agadir",
    description: "Discover the best of Agadir including the Kasbah viewpoint, the bustling Souk El Had, the Marina, and the Grand Mosque."
  }
];

const tagColors: Record<string, string> = {
  BESTSELLER: 'bg-gold text-navy-900',
  POPULAR: 'bg-ocean text-white',
  RECOMMENDED: 'bg-navy-700 text-white',
  FAMILY: 'bg-sand text-navy-900',
  CULTURE: 'bg-red-400 text-white',
  CLASSIC: 'bg-gray-800 text-white',
};

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-navy-900 border-b-8 border-gold">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&auto=format&fit=crop&q=80"
            alt="Tours in Morocco"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-10">
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Compass className="w-5 h-5" /> Explore with Us
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="gold-shimmer">Tours</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            From the bustling souks of Marrakech to the silent sands of the Sahara. Discover our handpicked excursions starting from Agadir.
          </p>
        </div>
      </section>

      {/* Tours Listing */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-200">
            <p className="text-navy-900 font-bold mb-0">Showing <span className="text-gold">{allTours.length}</span> amazing experiences</p>
            <button className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold transition-colors">
              <Filter className="w-4 h-4" /> Filter Tours
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTours.map((tour) => (
              <div
                key={tour.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy-900/5 transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
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
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-navy-900 mb-4 group-hover:text-gold transition-colors">{tour.title}</h3>
                  
                  <div className="flex items-center gap-5 text-sm font-bold text-navy-700 mb-4 bg-sand-100/50 p-3 rounded-xl border border-gray-100">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-ocean" /> {tour.location}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {tour.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Price from</p>
                      <p className="text-2xl font-black text-navy-900">€{tour.price}</p>
                    </div>
                    <Link
                      href={`/tours/${tour.id}`}
                      className="flex items-center gap-2 bg-navy-900 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-gold hover:text-navy-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
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
