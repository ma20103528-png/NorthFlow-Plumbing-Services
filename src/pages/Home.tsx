import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Droplets, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_DETAILS, SERVICES, TESTIMONIALS, FAQS, LOCATIONS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[800px] flex items-center bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block bg-blue-100 text-blue-800 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
              >
                Premium Plumbing Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-[5.5rem] font-black leading-[0.95] text-slate-900 tracking-tighter"
              >
                Trusted Local <br/>
                <span className="text-blue-700 underline decoration-blue-200 underline-offset-[12px] decoration-8">Manchester</span> <br />
                Plumbers
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium"
              >
                Providing fast, reliable, and professional plumbing solutions across Greater Manchester. Gas Safe registered and ready for emergencies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 pt-4"
              >
                <a 
                  href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                  className="bg-blue-700 text-white text-lg px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-700/30 hover:bg-blue-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  Emergency Call
                </a>
                <Link 
                  to="/services"
                  className="border-4 border-slate-200 text-slate-900 text-lg px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-100 hover:border-slate-300 transition-all flex items-center justify-center active:scale-95"
                >
                  Our Services
                </Link>
              </motion.div>

              {/* Trust Tokens */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-10 pt-8 filter grayscale opacity-60"
              >
                <div className="flex flex-col items-center gap-2">
                   <ShieldCheck className="w-8 h-8 text-slate-600" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Gas Safe</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Award className="w-8 h-8 text-slate-600" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Which? Trusted</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <Clock className="w-8 h-8 text-slate-600" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Checkatrade</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual Block (Cards) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative h-full">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-blue-300 transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">💧</div>
                <div>
                  <h3 className="font-black text-xl mb-2">Drain Cleaning</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fast hydro-jetting unblocking</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-blue-300 transition-all group lg:translate-y-12">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">🔍</div>
                <div>
                  <h3 className="font-black text-xl mb-2">Leak Detection</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Non-destructive thermal tracing</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-blue-300 transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">🔥</div>
                <div>
                  <h3 className="font-black text-xl mb-2">Water Heaters</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Boiler installs & servicing</p>
                </div>
              </div>
              <div className="bg-blue-900 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 text-white flex flex-col justify-between lg:translate-y-12">
                <div className="w-14 h-14 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl">🚨</div>
                <div>
                  <h3 className="font-black text-xl mb-2">Emergency</h3>
                  <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">On-site within 60 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 font-black text-slate-400 text-xl"><Award className="w-6 h-6" /> CITY & GUILDS</div>
           <div className="flex items-center gap-2 font-black text-slate-400 text-xl"><ShieldCheck className="w-6 h-6" /> GAS SAFE REGISTERED</div>
           <div className="flex items-center gap-2 font-black text-slate-400 text-xl"><Clock className="w-6 h-6" /> 24/7 AVAILABILITY</div>
           <div className="flex items-center gap-2 font-black text-slate-400 text-xl"><Droplets className="w-6 h-6" /> TRADING STANDARDS</div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Expert Plumbing Solutions for Every Home.</h3>
            <p className="text-slate-600 text-lg">
              We provide a full range of residential plumbing services across Greater Manchester. No job is too big or too small for our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Why NorthFlow?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Reliability You Can Build a Home On.</h3>
              
              <div className="space-y-8">
                {[
                  { title: 'Response Time', desc: 'We know plumbing disasters don\'t wait. We aim to be at your door within 60 minutes for emergencies.', icon: Clock },
                  { title: 'Transparent Pricing', desc: 'No hidden fees or surprise costs. We provide clear, fixed-price quotes before we start any work.', icon: ShieldCheck },
                  { title: 'Local Expertise', desc: 'Proudly serving Manchester, Salford, Bolton, and Stockport with deep local knowledge.', icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Plumber working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-3xl shadow-xl z-20 hidden md:block">
                <p className="text-5xl font-black text-white mb-2">15+</p>
                <p className="text-blue-100 font-bold uppercase tracking-wider text-xs">Years Experience</p>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Reviews</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-0">What Your Neighbors Say.</h3>
            </div>
            <div className="bg-blue-600 text-white px-6 py-4 rounded-2xl flex items-center gap-4 shadow-lg shadow-blue-600/20">
              <div className="text-center border-r border-blue-400 pr-4">
                <p className="text-2xl font-black">4.9/5</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Average Rating</p>
              </div>
              <div className="text-sm font-bold leading-tight">
                Trusted by 500+ <br /> Families in Manchester
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Questions</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Frequently Found Answers.</h3>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Locations</h2>
             <h3 className="text-4xl font-black text-slate-900">Proudly Serving These Areas.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((loc) => (
              <Link 
                key={loc.slug} 
                to={`/locations/${loc.slug}`}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50 text-center transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-slate-400 group-hover:text-blue-600 mx-auto mb-3" />
                <span className="font-bold text-slate-900 group-hover:text-blue-600">{loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img src="https://images.unsplash.com/photo-1542037104857-6bcbb7b7a28c?auto=format&fit=crop&q=80&w=2000" alt="Plumbing background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Need a Plumber Right Now?</h2>
            <p className="text-blue-100 text-lg font-medium italic">Available 24/7 for emergency repairs in Greater Manchester.</p>
          </div>
          <a 
            href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS_DETAILS.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
