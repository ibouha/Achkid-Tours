"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'ES', name: 'Español', flag: '🇪🇸' },
];

export default function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname() || '';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  // Get current locale from pathname or default to en
  const [currentLocale, setCurrentLocale] = useState(locales[0]);

  useEffect(() => {
    const path = window.location.pathname;
    const loc = locales.find(l => path.startsWith(`/${l.code}`)) || locales[0];
    setCurrentLocale(loc);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/tours', label: t('tours') },
    { href: '/activities', label: t('activities') },
    { href: '/apartments', label: t('apartments') },
    { href: '/products', label: t('products') || 'Shop' },
    { href: '/about', label: t('about') },
  ];

  // Check if we are on a detail page for products or apartments
  const isDetailPage = /^\/[a-z]{2}\/(apartments|products)\/[^/]+$/.test(pathname);
  const shouldBeSolid = scrolled || isDetailPage;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          shouldBeSolid
            ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-navy-900/40 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`flex-shrink-0 z-50 ${menuOpen ? 'pointer-events-none lg:pointer-events-auto' : ''}`} onClick={() => setMenuOpen(false)}>
            <div className={`transition-all duration-300 ${menuOpen ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}>
              <Image
                src="/achkidLogoo.png"
                alt="Achkid Tours"
                width={140}
                height={64}
                className="w-28 md:w-[140px] h-auto"
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                  shouldBeSolid ? 'text-white/80 hover:text-gold' : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/80 hover:text-gold text-sm font-semibold transition-colors"
                title={currentLocale.name}
              >
                <span className="text-base">{currentLocale.flag}</span>
                <span>{currentLocale.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-2 bg-navy-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc.code}
                        href="/"
                        locale={loc.code}
                        onClick={() => setLangOpen(false)}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-gold transition-colors"
                      >
                        <span className="text-base">{loc.flag}</span>
                        <span>{loc.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gold text-navy-900 font-bold rounded-full text-sm hover:bg-gold-300 shadow-lg hover:shadow-gold/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <Image src="/achkidLogo.png" alt="Achkid Tours" width={192} height={64} className="object-contain" unoptimized />
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 bg-gold text-navy-900 font-bold rounded-full text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
