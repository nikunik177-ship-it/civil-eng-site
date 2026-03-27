import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioGallery from './components/PortfolioGallery';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-civil-orange selection:text-white">
      {/* Navigation Layer - simplified for this demo, usually floating */}
      <nav className="absolute top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="text-white font-display font-extrabold text-2xl tracking-tight">
          C.E.<span className="text-civil-orange">C.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white/90 font-medium text-sm tracking-wide">
          <a href="#services" className="hover:text-civil-orange transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-civil-orange transition-colors">Portfolio</a>
          <a href="#consultation" className="hover:text-civil-orange transition-colors">Book Consultation</a>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioGallery />
        <AppointmentForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
