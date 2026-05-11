import { motion } from 'motion/react';
import { ShieldCheck, Users, Droplets, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_DETAILS, LOCATIONS } from '../constants';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-32 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 lowercase tracking-tighter">
              About NorthFlow<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Greater Manchester's choice for professional, reliable, and premium plumbing services since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">Our Manchester Roots</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    NorthFlow Plumbing Services started with a simple mission: to bring a higher standard of professionalism to local plumbing. We saw that too often, customers were dealing with "cowboy" tradesmen who showed up late, overcharged, or left a mess.
                  </p>
                  <p>
                    We decided to build something better. A company that values your time, respects your home, and stands behind every single repair with a rock-solid guarantee.
                  </p>
                  <p>
                    Today, we've grown into one of Manchester's most trusted service providers, helping thousands of families across Salford, Bolton, and Stockport keep their homes running smoothly.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=80&w=1000" 
                      alt="Professional Plumber" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-xl">
                   <ShieldCheck className="w-12 h-12 text-white" />
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Missions/Values */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="text-center">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-black mb-4">Customer First</h3>
                  <p className="text-slate-400">We treat every home as if it were our own. Cleanliness and courtesy are our top priorities.</p>
               </div>
               <div className="text-center">
                  <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-black mb-4">Quality Guaranteed</h3>
                  <p className="text-slate-400">We don't do "band-aid" fixes. We provide lasting repairs using premium parts and techniques.</p>
               </div>
               <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-black mb-4">24/7 Availability</h3>
                  <p className="text-slate-400">Plumbing emergencies don't have business hours. Neither do we.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Area */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-black text-slate-900 mb-8 lowercase tracking-tight">Need our expertise?</h2>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
                href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all"
             >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_DETAILS.phone}
             </a>
             <a 
                href={`mailto:${BUSINESS_DETAILS.email}`}
                className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all"
             >
                <Mail className="w-5 h-5" />
                Email Support
             </a>
           </div>
        </div>
      </section>
    </div>
  );
}
