import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  key?: React.Key;
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      <p className="text-slate-700 italic leading-relaxed mb-8 text-lg font-medium">
        "{testimonial.text}"
      </p>

      <div className="mt-auto border-t border-slate-50 pt-6">
        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
        <p className="text-sm text-slate-500 font-medium">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
