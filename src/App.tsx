import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import LocationDetail from './pages/LocationDetail';

import { BUSINESS_DETAILS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div id="app-root" className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white text-center py-2.5 px-4 text-sm font-bold tracking-wide uppercase relative z-[60] shrink-0">
          🚨 Emergency Plumber Manchester: 24/7 Rapid Response - Serving Salford, Bolton & Stockport
        </div>
        <Navbar />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Mobile Call Button */}
        <div className="fixed bottom-6 left-6 right-20 z-40 md:hidden animate-bounce">
          <a 
            href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black shadow-2xl shadow-blue-600/40 border border-blue-500"
          >
            <Phone className="w-5 h-5" />
            Emergency Call Now
          </a>
        </div>

        {/* Floating Desktop Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 z-40 bg-slate-900 text-white p-4 rounded-2xl shadow-xl hover:bg-slate-800 transition-colors hidden md:block"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Right side floating phone button for desktop */}
        <a 
          href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-2xl shadow-xl hover:bg-blue-700 transition-all hover:scale-110 md:hidden"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </Router>
  );
}
