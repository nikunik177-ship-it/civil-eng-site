import { motion } from 'framer-motion';
import { Ruler, Map, Construction, Navigation } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Structural Design",
    description: "Robust load-bearing solutions leveraging modern design methodologies for monumental durability.",
    icon: <Ruler className="w-8 h-8 text-civil-orange" />,
  },
  {
    id: 2,
    title: "Surveying",
    description: "Precision land surveying with state-of-the-art tools ensuring absolute geographic accuracy.",
    icon: <Map className="w-8 h-8 text-civil-orange" />,
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end site oversight that keeps developments on timeline and within strict budget constraints.",
    icon: <Construction className="w-8 h-8 text-civil-orange" />,
  },
  {
    id: 4,
    title: "Urban Planning",
    description: "Strategic community blueprints focusing on sustainable, scalable, and harmonious infrastructure.",
    icon: <Navigation className="w-8 h-8 text-civil-orange" />,
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-civil-navy mb-4">Core Competencies</h2>
          <div className="w-24 h-1 bg-civil-orange mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-civil-slate">
            We deliver comprehensive civil engineering services grounded in safety, efficiency, and architectural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-civil-orange/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-125" />
              
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-civil-navy mb-3 relative z-10">{service.title}</h3>
              <p className="text-civil-slate relative z-10 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
