import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ } from '../types';
import { cn } from '../lib/utils';

interface FAQItemProps {
  key?: React.Key;
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
