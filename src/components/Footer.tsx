import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours from Agadir' },
  { href: '/activities', label: 'Activities Agadir' },
  { href: '/activities', label: 'Things to Do Taghazout' },
  { href: '/apartments', label: 'Holiday Apartments' },
  { href: '/about', label: 'About Us' },
];

const topExperiences = [
  { href: '/tours', label: 'Sahara Desert 2 Days' },
  { href: '/tours', label: 'Paradise Valley' },
  { href: '/activities', label: 'Surf Lessons Taghazout' },
  { href: '/activities', label: 'Quad Biking Dunes' },
  { href: '/tours', label: 'Marrakech Day Tour' },
  { href: '/tours', label: 'Crocoparc & Taroudant' },
];

const locales = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'es', flag: '🇪🇸' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Big decorative text */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 right-0 overflow-hidden text-center text-white/[0.025] font-black text-[18vw] leading-none z-0">
        MOROCCO
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold via-gold-400 to-sand py-14 px-5 sm:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-navy-900 text-3xl md:text-4xl font-black mb-2">Ready for Your Agadir Adventure?</h2>
            <p className="text-navy-700 text-lg">Book your experience today — we respond in under 2 hours.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 flex items-center gap-2 bg-navy-900 text-white font-black px-8 py-4 rounded-full hover:bg-navy-700 transition-all duration-300 hover:-translate-y-1 shadow-xl"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="relative block mb-6">
              <Image src="/achkidLogoo.png" width={160} height={64} alt="Achkid Tours" className="object-contain mx-auto" />
            </Link>
            <p className="text-white/50 mb-8 text-sm leading-relaxed">
              Your trusted local partner for authentic tours, activities, and holiday apartments in Agadir and across Morocco.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy-900 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/0 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Experiences */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Top Experiences</h3>
            <ul className="space-y-3">
              {topExperiences.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/0 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Boulevard du 20 Août, Agadir 80000, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+212600000000" className="text-white/50 text-sm hover:text-gold transition-colors">+212 600 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contact@achkidtours.com" className="text-white/50 text-sm hover:text-gold transition-colors">contact@achkidtours.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Achkid Tours. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs uppercase tracking-widest">Language:</span>
            <div className="flex gap-4">
              {locales.map((loc) => (
                <Link key={loc.code} href="/" locale={loc.code} className="flex items-center gap-1.5 text-white/40 hover:text-gold text-xs font-bold uppercase transition-colors" title={loc.code.toUpperCase()}>
                  <span className="text-sm">{loc.flag}</span>
                  <span>{loc.code}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
