"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Mail, MapPin, Phone, Send, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-navy-900 border-b-8 border-gold">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&auto=format&fit=crop&q=80"
            alt="Contact Achkid Tours"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center pt-10">
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> We're Here For You
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Contact <span className="gold-shimmer">Us</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have a question about a tour or want to craft a custom itinerary in Morocco? Reach out to our local team in Agadir.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-4xl font-black text-navy-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Whether you're looking to book a surf lesson, a desert excursion, or a holiday apartment, our team is ready to help you plan the perfect Agadir experience. We usually respond within 2 hours.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-bold text-lg mb-1">Our Office</h3>
                    <p className="text-gray-500">Boulevard du 20 Août<br />Agadir 80000, Morocco</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-bold text-lg mb-1">Phone & WhatsApp</h3>
                    <p className="text-gray-500 hover:text-gold transition-colors block">+212 600 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-500 hover:text-gold transition-colors block">contact@achkidtours.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-navy-900 font-bold text-lg mb-4">Follow Our Adventures</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, href: '#' },
                    { Icon: Facebook, href: '#' },
                    { Icon: Youtube, href: '#' },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center text-white hover:bg-gold hover:text-navy-900 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-gray-100">
              <h3 className="text-2xl font-black text-navy-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">First Name</label>
                    <input type="text" className="w-full bg-sand-100/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900">Last Name</label>
                    <input type="text" className="w-full bg-sand-100/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900">Email Address</label>
                  <input type="email" className="w-full bg-sand-100/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900">Subject</label>
                  <select className="w-full bg-sand-100/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-navy-900">
                    <option>General Inquiry</option>
                    <option>Book a Tour</option>
                    <option>Book an Activity</option>
                    <option>Holiday Apartments</option>
                    <option>Custom Itinerary</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900">Message</label>
                  <textarea rows={5} className="w-full bg-sand-100/50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none" placeholder="How can we help you plan your trip?"></textarea>
                </div>

                <button type="button" className="w-full bg-navy-900 text-white font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold hover:text-navy-900 transition-all shadow-lg active:scale-95">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
