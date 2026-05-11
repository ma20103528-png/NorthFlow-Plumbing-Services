import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, MessageSquare } from 'lucide-react';
import { BUSINESS_DETAILS, LOCATIONS } from '../constants';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-blue-900/50 grayscale opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1542037104857-6bcbb7b7a28c?auto=format&fit=crop&q=80&w=2000" alt="Manchester Map" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight lowercase tracking-tighter">
              Get in touch<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Have a question or need a quote? Our team is available 24/7 for support. Reach out today for friendly, professional advice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">Contact Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <Phone className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-black text-slate-900 mb-2">Call Us</h3>
                        <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-blue-600 hover:underline">
                          {BUSINESS_DETAILS.phone}
                        </a>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Available 24/7</p>
                     </div>
                     <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <Mail className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-black text-slate-900 mb-2">Email Us</h3>
                        <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-lg font-bold text-slate-600 hover:text-blue-600">
                          {BUSINESS_DETAILS.email}
                        </a>
                     </div>
                     <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <Clock className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-black text-slate-900 mb-2">Service Hours</h3>
                        <p className="text-slate-600">{BUSINESS_DETAILS.hours}</p>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Emergency calls 24/7</p>
                     </div>
                     <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="font-black text-slate-900 mb-2">Service Area</h3>
                        <p className="text-slate-600">{LOCATIONS.map(l => l.name).join(', ')}</p>
                     </div>
                  </div>
               </div>

               <div>
                 <h2 className="text-2xl font-black text-slate-900 mb-6">Need an Instant Response?</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   For emergency repairs, please call our 24/7 dispatch line immediately at <span className="font-bold text-slate-900 underline">{BUSINESS_DETAILS.phone}</span>. Form inquiries are typically answered within 2-4 hours during business days.
                 </p>
                 <div className="bg-blue-600 p-8 rounded-3xl text-white">
                    <div className="flex gap-4 mb-6">
                      <MessageSquare className="w-8 h-8 text-blue-200" />
                      <h3 className="text-2xl font-black">Free Consultations</h3>
                    </div>
                    <p className="font-medium text-blue-100">Contact us for a no-obligation quote on your plumbing project today.</p>
                 </div>
               </div>
            </div>

            {/* Form */}
            <div id="contact-form-container">
              {!submitted ? (
                <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-500/10 border border-slate-100 ring-1 ring-slate-100">
                  <h3 className="text-3xl font-black text-slate-900 mb-8">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" required className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" required className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="0161 000 0000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input type="email" required className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Required</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        <option>Emergency Repair</option>
                        <option>Drain Cleaning</option>
                        <option>Boiler/Water Heater</option>
                        <option>Quote Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                      <textarea rows={5} required className="w-full px-6 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-blue-50 border-2 border-blue-100 p-12 rounded-3xl text-center flex flex-col items-center justify-center h-full min-h-[600px]"
                >
                   <div className="bg-blue-600 p-6 rounded-full mb-8 shadow-xl shadow-blue-600/20">
                      <Send className="w-12 h-12 text-white" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-4">Message Sent!</h3>
                   <p className="text-xl text-slate-600 max-w-sm mb-12">
                     Thank you for reaching out. A NorthFlow team member will contact you shortly.
                   </p>
                   <button 
                    onClick={() => setSubmitted(false)}
                    className="font-bold text-blue-600 hover:underline"
                   >
                     Send another message
                   </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
