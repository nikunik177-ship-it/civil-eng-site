import { useState, useEffect } from 'react'
import { Menu, X, HardHat } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-civil-navy nav-scrolled' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-civil-orange rounded-md flex items-center justify-center group-hover:scale-105 transition-transform">
            <HardHat size={22} className="text-white" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none block">
              CivilPro
            </span>
            <span className="text-civil-slate text-xs font-body">Engineering & Design</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              className="text-gray-200 font-body text-sm font-semibold hover:text-civil-orange 
                         transition-colors duration-200 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-civil-orange transition-all 
                               duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#appointment" className="btn-primary text-sm px-6 py-2.5">
            Book Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 hover:text-civil-orange transition-colors">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-civil-navy border-t border-navy-light px-6 py-4 space-y-4"
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-200 font-body font-semibold hover:text-civil-orange 
                           transition-colors py-2">
                {link.label}
              </a>
            ))}
            <a href="#appointment" onClick={() => setMenuOpen(false)}
               className="btn-primary block text-center mt-2">
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
