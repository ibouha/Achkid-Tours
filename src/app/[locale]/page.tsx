import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import ToursSection from '@/components/ToursSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ApartmentsSection from '@/components/ApartmentsSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ToursSection />
      <ActivitiesSection />
      <ApartmentsSection />
      <ProductsSection />
      <AboutSection />
      <GallerySection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
    
  );
}
