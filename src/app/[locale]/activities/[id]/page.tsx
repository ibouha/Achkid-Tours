"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Clock, MapPin, Users, Calendar, CheckCircle2, ShieldCheck, Info, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

// Mock data for the activity
const activity = {
  id: "1",
  title: "Surf Lessons in Taghazout",
  subtitle: "Catch the perfect wave in Morocco's surfing capital.",
  image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&auto=format&fit=crop&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512413912999-76077755ba13?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560448205-d3c50f83fc44?w=800&auto=format&fit=crop&q=80"
  ],
  price: 30,
  duration: "2 Hours",
  location: "Taghazout Beach",
  groupSize: "Small Groups (Max 6 per instructor)",
  skillLevel: "Beginner & Intermediate",
  description: "Experience the thrill of surfing on the world-famous waves of Taghazout. Whether you're standing on a board for the first time or looking to improve your technique, our expert local instructors will safely guide you through the process.\n\nOur 2-hour sessions cover ocean safety, basic paddling, pop-up techniques on the sand, and plenty of time in the water catching waves. All equipment, including warm wetsuits and soft-top boards ideal for beginners, is provided.",
  highlights: [
    "Learn from certified local surf instructors",
    "Perfect for absolute beginners",
    "High-quality foam board and wetsuit included",
    "Safe, sandy beach breaks in Taghazout",
    "Small group sizes for personalized attention"
  ],
  included: [
    "2 hours of professional instruction",
    "Surfboard rental",
    "Wetsuit rental",
    "Transport from Agadir/Taghazout hotels"
  ],
  requirements: [
    "Must be able to swim",
    "Bring a towel and swimwear",
    "Sunscreen is highly recommended"
  ]
};

export default function ActivityDetailsPage() {
  const params = useParams();
  const id = params.id;
  
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-ocean">
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-overlay">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
        
        <div className="absolute top-28 left-5 sm:left-8 z-20">
          <Link href="/activities" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all text-sm font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Activities
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
            <span className="bg-gold text-navy-900 text-xs font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1">
              <Play className="w-3 h-3" /> ACTION & SPORT
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white">{activity.title}</h1>
            <p className="text-white/80 text-xl font-medium max-w-2xl">{activity.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90 font-medium text-sm sm:text-base mt-2">
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-gold" /> {activity.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /> {activity.duration}</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-gold" /> {activity.skillLevel}</span>
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
              <h2 className="text-3xl font-black text-navy-900 mb-6">Activity Overview</h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                {activity.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-ocean/5 rounded-3xl p-8 border border-ocean/10">
              <h3 className="text-2xl font-black text-navy-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-ocean" /> What to Expect
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black text-navy-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> Included
                </h3>
                <ul className="space-y-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm h-full">
                  {activity.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black text-navy-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-gold" /> Requirements
                </h3>
                <ul className="space-y-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm h-full">
                  {activity.requirements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-gold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-black text-navy-900 mb-6">Action Shots</h2>
              <div className="grid grid-cols-3 gap-4">
                {activity.gallery.map((img, i) => (
                  <div key={i} className="relative h-32 sm:h-48 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
                    <Image src={img} alt="Activity Gallery" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-navy-900 rounded-[2rem] p-8 shadow-2xl text-white">
              
              <div className="mb-6">
                <p className="text-white/60 text-sm font-medium mb-1">Price per person</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">€{activity.price}</span>
                  <span className="text-white/50 text-sm mb-1">/ 2 hours</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <Calendar className="w-5 h-5 text-gold" />
                  <div className="flex-1">
                    <label className="text-xs font-bold text-white/60 uppercase block mb-1">Date</label>
                    <input type="date" className="bg-transparent border-none text-white text-sm w-full outline-none styling-calendar-dark" />
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <Clock className="w-5 h-5 text-gold" />
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <label className="text-xs font-bold text-white/60 uppercase">Session Time</label>
                    </div>
                    <select className="bg-transparent border-none text-white font-bold outline-none cursor-pointer">
                      <option className="text-navy-900">10:00 AM</option>
                      <option className="text-navy-900">02:00 PM</option>
                      <option className="text-navy-900">Sunset (05:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <Users className="w-5 h-5 text-gold" />
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <label className="text-xs font-bold text-white/60 uppercase">Participants</label>
                    </div>
                    <select className="bg-transparent border-none text-white font-bold outline-none cursor-pointer">
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="text-navy-900">{n}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/70 text-sm pb-3 border-b border-white/10">
                  <span>Booking Fee</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between font-black text-white text-lg pt-2">
                  <span>Total Due</span>
                  <span className="text-gold">€{activity.price}</span>
                </div>
              </div>

              <button className="w-full bg-white text-navy-900 font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold hover:text-navy-900 transition-all shadow-lg active:scale-95 mb-4 group">
                Reserve Spot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-white/50 font-medium flex items-center justify-center gap-1">
                <Info className="w-3 h-3" /> E-voucher sent instantly
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
