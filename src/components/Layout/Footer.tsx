import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter, Droplets } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICES, LOCATIONS } from '../../constants';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Service Areas</h4>
            <div className="flex flex-wrap gap-3">
              {LOCATIONS.map((loc) => (
                <Link 
                  key={loc.slug} 
                  to={`/locations/${loc.slug}`}
                  className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-black text-slate-600 hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Testimonial Snippet */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">4.9/5 Based on 500+ Reviews</span>
            </div>
            <p className="text-xs text-slate-600 italic font-medium leading-relaxed border-l-2 border-slate-100 pl-4">
              "NorthFlow fixed our burst pipe within the hour. Professional and clean service in Salford." - James T.
            </p>
          </div>

          {/* Contact Details */}
          <div className="text-left lg:text-right space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Us</p>
            <p className="text-lg font-black text-slate-900 border-b-2 border-blue-100">{BUSINESS_DETAILS.email}</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider italic">{BUSINESS_DETAILS.hours}</p>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} NorthFlow Plumbing. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
