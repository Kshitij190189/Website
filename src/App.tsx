import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutDoctor from './sections/AboutDoctor';
import Services from './sections/Services';
import SmileGallery from './sections/SmileGallery';
import Reviews from './sections/Reviews';
import DentalTips from './sections/DentalTips';
import Locations from './sections/Locations';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <SmileGallery />
        <Reviews />
        <DentalTips />
        <FAQ />
        <Locations />
      </main>
      <Footer />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
