"use client";
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How do I book a tour or activity?", a: "You can book directly through our website or contact us via WhatsApp. We'll confirm your booking within 2 hours and send all the details you need." },
  { q: "Do you offer hotel pickup in Agadir?", a: "Yes! Free hotel/riad pickup is included for all tours and activities within Agadir and Taghazout. For other areas a small transfer fee may apply." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, bank transfer, and cash on the day. A 20% deposit is required to confirm your booking." },
  { q: "Can I cancel or reschedule my booking?", a: "Free cancellation up to 24 hours before your activity. Multi-day tours require 72 hours notice. Rescheduling is always possible subject to availability." },
  { q: "Are your tours suitable for children?", a: "Most of our tours are family-friendly! We offer dedicated family packages and our guides are trained to ensure a safe and fun experience for all ages." },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sand-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-gold font-bold text-sm tracking-[0.2em] uppercase mb-3"
          >✦ Got Questions?</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy-900"
          >
            Frequently Asked <span className="text-ocean">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-gold shadow-lg shadow-gold/10' : 'border-gray-100 hover:border-sand-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white"
              >
                <span className={`font-bold text-lg transition-colors ${open === i ? 'text-navy-900' : 'text-gray-700'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? 'bg-gold text-navy-900 rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
