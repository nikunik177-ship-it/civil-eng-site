import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All", "Residential", "Commercial", "Structural Audits"];

const projects = [
  { 
    id: 1, 
    title: 'Skyline Plaza Core', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', 
    desc: 'Foundational engineering for a 40-story tier-one commercial tower.' 
  },
  { 
    id: 2, 
    title: 'Riverside Developments', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', 
    desc: 'Structural blueprints and execution for a premium waterfront residential complex.' 
  },
  { 
    id: 3, 
    title: 'Heritage Bridge Audit', 
    category: 'Structural Audits', 
    image: 'https://images.unsplash.com/photo-1545645367-27b8782db86a?auto=format&fit=crop&q=80', 
    desc: 'Comprehensive load audit and restoration plan for a 19th-century suspension bridge.' 
  },
  { 
    id: 4, 
    title: 'Oasis Eco-Housing', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', 
    desc: 'Sustainable and climate-resilient urban housing infrastructure design.' 
  },
  { 
    id: 5, 
    title: 'Titan Factory Expansion', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80', 
    desc: 'Heavy industrial structural reinforcement and expansion management.' 
  },
  { 
    id: 6, 
    title: 'Seismic Highway Prep', 
    category: 'Structural Audits', 
    image: 'https://images.unsplash.com/photo-1542337728-654db8f3c706?auto=format&fit=crop&q=80', 
    desc: 'Seismic retrofitting analysis and safety modeling for high-traffic viaducts.' 
  }
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-civil-navy mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-civil-orange mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category 
                    ? 'bg-civil-navy text-white shadow-lg scale-105' 
                    : 'bg-white text-civil-slate hover:bg-gray-100 hover:text-civil-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-civil-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur text-civil-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-civil-orange rounded-full flex items-center justify-center transform group-hover:-translate-y-2 transition-transform shadow-lg z-20">
                    <span className="text-white font-bold leading-none">+</span>
                  </div>
                  <h3 className="text-2xl font-bold text-civil-navy mb-2 group-hover:text-civil-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-civil-slate text-sm line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
