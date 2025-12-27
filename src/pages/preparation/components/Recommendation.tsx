import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronRight, Download, Globe, Smartphone } from "lucide-react";
import type { Item } from "../data/recommendation";

type RecommendationProps = Item

export const Recommendation = ({name, description, icon, details, link}: RecommendationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasExternalLink = link ? Object.values(link).some(value => value !== undefined && value !== "") : false;

  return (
    <div className="border-b border-slate-50 last:border-0">
      <button 
        onClick={() => {setIsOpen(!isOpen)}}
        className="w-full flex items-center justify-between py-5 group transition-all"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
            <img src={icon.src} alt={icon.alt} className="w-full h-full object-cover" />
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
            <div className="pb-8 space-y-8">
              {/* Key Benefits */}
              <div className="space-y-4 pl-[68px] pr-4">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Key Benefits</h5>
                <ul className="grid gap-3">
                  {details.map((detail, index) => (
                    <li key={index} className="flex gap-3 text-sm text-slate-600 leading-relaxed items-start">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Links & Downloads Section */}
              {hasExternalLink && (
                <div className="pl-[68px] pr-4 space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">External Links</h5>
                  <div className="flex flex-wrap gap-4">
                    {link?.website && (
                      <a 
                        href={link.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
                      >
                        <Globe size={14} /> Official Website
                      </a>
                    )}
                    {link?.appStore && (
                      <a 
                        href={link.appStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
                      >
                        <Smartphone size={14} /> App Store
                      </a>
                    )}
                    {link?.playStore && (
                      <a 
                        href={link.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
                      >
                        <Download size={14} /> Google Play
                      </a>
                    )}
                  </div>
                </div>
              )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};