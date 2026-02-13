
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import AboutSection from './components/AboutSection';
import QuoteCalculator from './components/QuoteCalculator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'quote', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-24 bg-white">
          <ServicesGrid />
        </section>

        <section id="about" className="py-24 bg-slate-50">
          <AboutSection />
        </section>

        <section id="quote" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          {/* Decorative background updated to primary orange variants */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -ml-48 -mb-48 animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <QuoteCalculator />
          </div>
        </section>

        <section id="contact" className="py-24 bg-white">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
