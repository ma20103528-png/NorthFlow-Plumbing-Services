import { motion } from 'motion/react';
import { SERVICES, BUSINESS_DETAILS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Phone, Droplets } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-32 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 lowercase tracking-tighter">
              Our Services<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Professional plumbing solutions for Greater Manchester. From quick fixes to complete installations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.2)_0%,transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl font-black mb-6">Don't see what you're looking for?</h2>
           <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
             Our team is highly experienced in all aspects of residential and light commercial plumbing. If you have a specific requirement, just ask.
           </p>
           <a 
              href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
           >
              <Phone className="w-6 h-6" />
              Call for a Custom Quote
           </a>
        </div>
      </section>
    </div>
  );
}
