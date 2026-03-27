import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-civil-navy text-white">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888018149-22a30bb03043?auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-civil-navy via-civil-navy/80 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-civil-orange font-semibold tracking-wider text-sm mb-6 border border-white/10 uppercase">
            Trusted Engineering Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-md leading-tight">
            Building the <span className="text-civil-orange">Foundations</span> <br className="hidden md:block"/> of Tomorrow
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 font-light mb-10">
            Expert structural design, surveying, and project management to bring your visions strictly to life with unwavering safety and precision.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#consultation"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-civil-orange hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(255,95,21,0.4)]"
          >
            Request a Consultation
            <ArrowRight className="ml-3 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-civil-orange rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
