import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-civil-navy pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              Civil <span className="text-civil-orange">Engineering</span> Corp
            </h3>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Leading the future of infrastructure through robust structural design, precise surveying, and comprehensive project management paradigms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer group">
                <MapPin className="w-5 h-5 mr-3 text-civil-orange group-hover:animate-bounce" />
                1200 Industrial Parkway, Metro City, TX 75001
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5 mr-3 text-civil-orange" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5 mr-3 text-civil-orange" />
                contact@civilcorp.engineering
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden h-64 border border-white/10 bg-white/5 relative group">
            <div className="absolute inset-0 bg-civil-navy/40 group-hover:bg-transparent pointer-events-none transition-colors duration-500 z-10"></div>
            {/* Google Maps Embed Placeholder - Grayscaled for aesthetic alignment */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6694676402446!2d-96.82022878481545!3d32.784617180963506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9938b80d0d81%3A0xc3dd3bb1a877cd4b!2sIndustrial%20Blvd%2C%20Dallas%2C%20TX!5e0!3m2!1s!2sus!4v1680199014521!5m2!1s!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Civil Engineering Corp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-civil-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-civil-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
