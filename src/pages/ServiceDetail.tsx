import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ChevronRight, Droplets } from 'lucide-react';
import { SERVICES, BUSINESS_DETAILS } from '../constants';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.path.includes(slug || ''));

  if (!service) return <div className="pt-32 text-center text-2xl font-black">Service Not Found</div>;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Droplets className="w-full h-full text-blue-500 transform translate-x-1/2 -translate-y-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {service.title} <span className="text-blue-500">Greater Manchester</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {service.description}
            </p>
            <a 
              href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30"
            >
              <Phone className="w-5 h-5" />
              Book Professional Repair
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-8 lowercase tracking-tight">Our {service.title} process</h2>
              <p className="text-lg text-slate-600 mb-8 border-l-4 border-blue-500 pl-6 py-2">
                At NorthFlow, we specialize in high-quality {service.title.toLowerCase()} for residential properties. Our expert plumbers utilize the latest technology to ensure a lasting fix with minimal disruption to your home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg text-slate-600 max-w-none">
                <p>
                  Plumbing issues can arise at the most inconvenient times. That's why our {service.title.toLowerCase()} is designed to be efficient, transparent, and thorough. We don't just fix the immediate problem—we check the surrounding system to prevent future failures.
                </p>
                <p>
                  Our Manchester-based team is fully certified and carries a vast inventory of common parts, allowing us to complete most repairs in a single visit. Whether it's a minor leak or a major system overhaul, you can trust NorthFlow for professional results.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 p-10 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30" />
                <h3 className="text-2xl font-black mb-6">Need Immediate Help?</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Our emergency dispatchers are available 24/7. Average response time is under 60 minutes for calls in Greater Manchester.
                </p>
                <a 
                  href={`tel:${BUSINESS_DETAILS.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all mb-4"
                >
                  <Phone className="w-6 h-6 fill-slate-900" />
                  {BUSINESS_DETAILS.phone}
                </a>
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  Emergency Line Open Now
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-black mb-6 text-slate-900">Related Services</h3>
                <div className="space-y-4">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={s.path}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-500 transition-all group"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-blue-600">{s.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
