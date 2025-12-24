import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import type { Item } from "../data/recommendation";

type RecommendationProps = Item

export const Recommendation = ({name, description, icon, details, link}: RecommendationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = icon;

  return (
    <div className="border-b border-slate-50 last:border-0">
      <button 
        onClick={() => {setIsOpen(!isOpen)}}
        className="w-full flex items-center justify-between py-5 group transition-all"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
            <Icon />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-slate-900">{name}</h4>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-slate-300 group-hover:text-slate-900"
        >
          <ChevronRight size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[68px] pr-4">
              <div className="bg-slate-50/80 rounded-2xl p-6 space-y-4 border border-slate-100">
                <ul className="space-y-3">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {link && (
                  <div className="pt-2">
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:opacity-70 transition-opacity"
                    >
                      Official Website <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};