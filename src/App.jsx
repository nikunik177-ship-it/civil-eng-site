import { useState, useEffect } from 'react';
import { HardHat, Ruler, Building2, Calendar, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function CivilEngineeringSite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitted'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-500 selection:text-white">
      
      {/* Header - Transparent to Solid */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#000080] shadow-xl py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-white font-bold text-2xl tracking-tighter">
            CIVIL<span className="text-[#FF5F15]">CONSULT.</span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center text-sm font-semibold tracking-wide text-white">
            <a href="#home" className="hover:text-[#FF5F15] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#FF5F15] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#FF5F15] transition-colors">Portfolio</a>
            <a 
              href="#book" 
              className="bg-[#FF5F15] text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-[#000080]/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-[#FF5F15] font-bold text-sm mb-6 uppercase tracking-widest border border-white/20">
            Industry Leaders
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Structural Excellence & Civil Consultation
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Bringing your most ambitious infrastructure visions to life through rigorous engineering, safety protocols, and modern methodologies.
          </p>
          <a 
            href="#book"
            className="inline-flex items-center bg-[#FF5F15] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-orange-600 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,95,21,0.5)]"
          >
            Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#000080] mb-4 tracking-tight">Core Competencies</h2>
            <div className="w-20 h-1.5 bg-[#FF5F15] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 text-[#000080] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#000080] group-hover:text-white transition-colors">
                <HardHat className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#000080] mb-3">Project Management</h3>
              <p className="text-slate-500 leading-relaxed">Comprehensive on-site coordination ensuring strict timeline adherence and budget compliance.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-100 text-[#FF5F15] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF5F15] group-hover:text-white transition-colors">
                <Ruler className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#000080] mb-3">Structural Design</h3>
              <p className="text-slate-500 leading-relaxed">Advanced architectural blueprints and rigorous load-bearing methodology analysis.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#000080] mb-3">Urban Planning</h3>
              <p className="text-slate-500 leading-relaxed">Sustainable infrastructure development and civic environment scalability charting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-[#000080] mb-4 tracking-tight">Recent Projects</h2>
              <div className="w-20 h-1.5 bg-[#FF5F15] rounded-full mb-6" />
              <p className="text-lg text-slate-500">Real-world engineering feats emphasizing safety, environmental integration, and structural longevity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1541888018149-22a30bb03043?auto=format&fit=crop&q=80" alt="Bridge Retrofit" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <span className="text-[#FF5F15] text-sm font-bold uppercase tracking-widest mb-2 block">Infrastructure</span>
                <h3 className="text-xl font-bold text-[#000080] mb-2">Urban Bridge Retrofit</h3>
                <p className="text-slate-500 text-sm">Seismic fortification and material auditing for a major metropolitan suspension bridge.</p>
              </div>
            </div>
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="Residential Complex" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <span className="text-[#FF5F15] text-sm font-bold uppercase tracking-widest mb-2 block">Housing</span>
                <h3 className="text-xl font-bold text-[#000080] mb-2">Residential Complex Alpha</h3>
                <p className="text-slate-500 text-sm">Full phase-1 grading, surveying, and structural blueprint execution for luxury units.</p>
              </div>
            </div>
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" alt="Commercial Tower" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <span className="text-[#FF5F15] text-sm font-bold uppercase tracking-widest mb-2 block">Commercial</span>
                <h3 className="text-xl font-bold text-[#000080] mb-2">Metro Tower Construction</h3>
                <p className="text-slate-500 text-sm">Foundational oversight and crane deployment logistics for a 40-story building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Logic Form */}
      <section id="book" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#000080] rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5F15]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            {formStatus === 'submitted' ? (
              <div className="text-center py-16 relative z-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Consultation Requested!</h3>
                <p className="text-blue-100 text-lg max-w-md mx-auto">
                  Our engineering division will review your details and contact you to schedule a meeting within 24 hours.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-sm text-blue-200 hover:text-white transition-colors underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-5 gap-12 relative z-10">
                <div className="md:col-span-2 text-white">
                  <h2 className="text-3xl font-black mb-4 leading-tight">Book Your <br/><span className="text-[#FF5F15]">Consultation</span></h2>
                  <p className="text-blue-100 opacity-90 mb-8 font-light text-sm">
                    Fill out the form with your project details to schedule an initial review with our lead engineers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm font-semibold p-3 bg-white/5 rounded-xl border border-white/10">
                      <Calendar className="w-5 h-5 text-[#FF5F15] mr-3" /> Select a suitable date
                    </div>
                    <div className="flex items-center text-sm font-semibold p-3 bg-white/5 rounded-xl border border-white/10 cursor-not-allowed opacity-50">
                      <ArrowRight className="w-5 h-5 mr-3" /> Expert Assignment
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required type="text" placeholder="Full Name" 
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm rounded-xl focus:ring-[#FF5F15] focus:border-[#FF5F15] block p-4 outline-none transition-all"
                      />
                      <input 
                        required type="email" placeholder="Email Address" 
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm rounded-xl focus:ring-[#FF5F15] focus:border-[#FF5F15] block p-4 outline-none transition-all"
                      />
                    </div>
                    
                    <select required className="w-full bg-white/10 border border-white/20 text-blue-100 text-sm rounded-xl focus:ring-[#FF5F15] focus:border-[#FF5F15] block p-4 outline-none transition-all appearance-none">
                      <option value="" disabled selected>Select Project Type</option>
                      <option value="structural">Structural Design</option>
                      <option value="surveying">Surveying & Planning</option>
                      <option value="audit">Structural Audit</option>
                      <option value="management">Project Management</option>
                    </select>

                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required type="date"
                        className="w-full bg-white/10 border border-white/20 text-blue-100 text-sm rounded-xl focus:ring-[#FF5F15] focus:border-[#FF5F15] block p-4 outline-none transition-all"
                      />
                      <input 
                        required type="time"
                        className="w-full bg-white/10 border border-white/20 text-blue-100 text-sm rounded-xl focus:ring-[#FF5F15] focus:border-[#FF5F15] block p-4 outline-none transition-all"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#FF5F15] hover:bg-orange-600 text-white font-bold rounded-xl py-4 mt-4 transition-colors shadow-lg shadow-orange-500/20"
                    >
                      Secure Consultation
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040417] pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-white font-bold text-2xl tracking-tighter mb-2">
                CIVIL<span className="text-[#FF5F15]">CONSULT.</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Engineering a robust tomorrow, prioritizing deep structural integrity and sustainable methodologies.
              </p>
            </div>
            
            <div className="flex flex-col space-y-3 text-slate-400">
              <div className="flex items-center hover:text-[#FF5F15] transition-colors cursor-pointer">
                <Mail className="w-5 h-5 mr-3 text-[#FF5F15]" />
                info@civilconsult.com
              </div>
              <div className="flex items-center hover:text-[#FF5F15] transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mr-3 text-[#FF5F15]" />
                900 Architecture Blvd, NY 10001
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} CivilConsult Engineering. All rights reserved.</p>
            <div className="space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
