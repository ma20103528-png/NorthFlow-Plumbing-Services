import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DETAILS } from '../../constants';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={cn(
        "sticky top-0 w-full z-50 bg-white border-b border-slate-200 py-4 transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800 transition-colors">
              NF
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">
              North<span className="text-blue-600">Flow</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "font-bold text-sm uppercase tracking-widest transition-colors hover:text-blue-700",
                    location.pathname === link.path ? "text-blue-700" : "text-slate-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pl-6 border-l border-slate-200">
              <a 
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                className="flex flex-col items-end group"
              >
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 group-hover:text-blue-500">Call Now</span>
                <span className="text-lg font-black text-blue-700 leading-none">{BUSINESS_DETAILS.phone}</span>
              </a>
              <Link 
                to="/contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 active:scale-95"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-slate-700 font-medium hover:bg-blue-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold w-full mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
