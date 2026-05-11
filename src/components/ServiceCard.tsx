import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';

interface ServiceCardProps {
  key?: React.Key;
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[service.icon] as LucideIcon || Icons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-300 transition-all duration-300 flex flex-col h-full"
    >
      <div className="bg-blue-50 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-500">
        <IconComponent className="w-10 h-10 text-blue-700 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
      <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <ul className="space-y-3 mb-10 border-t border-slate-50 pt-8">
        {service.details.slice(0, 3).map((detail, i) => (
          <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
            <div className="w-2 h-2 rounded-full bg-blue-700" />
            {detail}
          </li>
        ))}
      </ul>

      <Link 
        to={service.path}
        className="flex items-center justify-between py-4 px-8 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all group/btn shadow-xl shadow-slate-900/10 hover:shadow-blue-700/20 active:scale-95"
      >
        View Service
        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </motion.div>
  );
}
