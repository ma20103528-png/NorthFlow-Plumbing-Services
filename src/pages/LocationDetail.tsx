import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, CheckCircle2, ShieldCheck, Clock, Star } from 'lucide-react';
import { LOCATIONS, BUSINESS_DETAILS, SERVICES, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);

  if (!location) return <div className="pt-32 text-center text-2xl font-black">Location Not Found</div>;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`https://images.unsplash.com/photo-1542037104857-6bcbb7b7a28c?auto=format&fit=crop&q=80&w=2000`} 
            alt={`${location.name} Cityscape`}
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Trusted Local Plumber
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Emergency Plumber <br /> in <span className="text-blue-500">{location.name}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed mx-auto max-w-2xl">
              {location.description} Fast-response, professional plumbing services for residents of {location.name}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30"
              >
                <Phone className="w-6 h-6" />
                Call {location.name} Dispatch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div>
                <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-black text-slate-900">45-60m</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Response in {location.name}</p>
              </div>
              <div>
                <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-black text-slate-900">Fully Insured</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Guaranteed Work</p>
              </div>
              <div>
                <Star className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-black text-slate-900">4.9 Stars</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Local Rating</p>
              </div>
              <div>
                <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-2xl font-black text-slate-900">Fixed Cost</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Transparent Pricing</p>
              </div>
           </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Plumbing Repairs in {location.name}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our {location.name} team is fully equipped to handle any plumbing task, from scheduled installs to urgent midnight repairs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg text-slate-600">
            <h2 className="text-4xl font-black text-slate-900 mb-8 italic lowercase tracking-tight">Why we love serving {location.name}</h2>
            <p>
              NorthFlow Plumbing has been a fixture in the {location.name} community for years. We understand the specific plumbing layouts of homes in this area, from historic properties to recent developments.
            </p>
            <p>
              Whether you're in the heart of the city or in the outlying suburbs, our local plumbers know the quickest routes to get to you fast. We're not just some national chain—we're your neighbors, committed to keeping {location.name} homes leak-free and warm with our signature premium service.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials for Location (Filtered if possible, but we use generic for now) */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black mb-4">Happy {location.name} Clients</h2>
               <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.id} className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-lg italic text-slate-300 mb-6">"{t.text}"</p>
                  <p className="font-black text-white">{t.name}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{location.name} resident</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-5xl font-black text-slate-900 mb-6">Ready to solve your plumbing woes?</h2>
           <p className="text-xl text-slate-600 mb-10">Our {location.name} experts are waiting for your call.</p>
           <a 
              href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all"
           >
              <Phone className="w-6 h-6" />
              Book in {location.name}
           </a>
        </div>
      </section>
    </div>
  );
}
