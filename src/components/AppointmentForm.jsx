import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Structural Design',
    date: '',
    time: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', projectType: 'Structural Design', date: '', time: '' });
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="py-24 bg-white relative" id="consultation">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000080 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-civil-navy rounded-[2rem] shadow-2xl overflow-hidden shadow-civil-navy/30">
          <div className="grid md:grid-cols-5 bg-white/5 border border-white/10 backdrop-blur-xl">
            
            <div className="md:col-span-2 p-10 flex flex-col justify-center bg-civil-navy text-white">
              <h2 className="text-3xl font-extrabold mb-4 text-white">
                Let's Build <br className="hidden md:block" />
                <span className="text-civil-orange">Together</span>
              </h2>
              <p className="text-civil-slate/80 text-sm font-light mb-8 max-w-sm">
                Schedule a consultation with our senior engineering team to discuss structural feasibility, timelines, and budget alignment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-sm font-semibold opacity-80">
                  <div className="w-8 h-8 rounded-full bg-civil-orange/20 flex items-center justify-center mr-3 text-civil-orange">
                    1
                  </div>
                  Submit Request
                </div>
                <div className="flex items-center text-sm font-semibold opacity-80">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mr-3">
                    2
                  </div>
                  Engineer Review
                </div>
                <div className="flex items-center text-sm font-semibold opacity-50">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mr-3">
                    3
                  </div>
                  Project Initiation
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white p-10 rounded-l-[2rem] md:rounded-l-none">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 className="w-20 h-20 text-civil-orange mb-6" />
                    <h3 className="text-2xl font-bold text-civil-navy mb-2">Request Received!</h3>
                    <p className="text-civil-slate max-w-xs mx-auto">
                      Our engineering division will review your {formData.projectType} request and reach out shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-civil-navy mb-1 uppercase tracking-wider">Full Name</label>
                      <input 
                        required type="text" name="name"
                        value={formData.name} onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-civil-navy text-sm rounded-lg focus:ring-civil-orange focus:border-civil-orange block p-3 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-civil-navy mb-1 uppercase tracking-wider">Work Email</label>
                      <input 
                        required type="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-civil-navy text-sm rounded-lg focus:ring-civil-orange focus:border-civil-orange block p-3 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-civil-navy mb-1 uppercase tracking-wider">Project Scope</label>
                      <select 
                        name="projectType" value={formData.projectType} onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-civil-navy text-sm rounded-lg focus:ring-civil-orange focus:border-civil-orange block p-3 transition-colors"
                      >
                        <option>Structural Design</option>
                        <option>Surveying</option>
                        <option>Project Management</option>
                        <option>Urban Planning</option>
                        <option>Structural Audits</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-civil-navy mb-1 uppercase tracking-wider">Date</label>
                        <input 
                          required type="date" name="date"
                          value={formData.date} onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-civil-navy text-sm rounded-lg focus:ring-civil-orange focus:border-civil-orange block p-3 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-civil-navy mb-1 uppercase tracking-wider">Time</label>
                        <input 
                          required type="time" name="time"
                          value={formData.time} onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-civil-navy text-sm rounded-lg focus:ring-civil-orange focus:border-civil-orange block p-3 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center mt-auto px-6 py-4 bg-civil-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-civil-orange/20 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Reserve Consultation time
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
