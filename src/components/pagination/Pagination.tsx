import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  totalDays: number;
  startDay: number;
  currentDay: number;
  onPageChange: (day: number) => void;
  dayTitles: string[];
}

export const Pagination = ({
  totalDays,
  startDay,
  currentDay,
  onPageChange,
  dayTitles,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentDay > startDay) onPageChange(currentDay - 1);
  };

  const handleNext = () => {
    if (currentDay < totalDays) onPageChange(currentDay + 1);
  };

  return (
    <div className="w-full mx-auto px-6">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Navigation */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {currentDay > startDay ? (
              <motion.button
                key="prev"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={handlePrevious}
                className="group flex items-center gap-4 text-left outline-none cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-slate-200/40 group-hover:shadow-xl group-hover:bg-slate-50 transition-all">
                  <ArrowLeft className="w-5 h-5 text-slate-600 group-hover:-translate-x-1 transition-transform" />
                </div>
                <div className="hidden md:block">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                    Previous
                  </span>
                  <span className="block text-sm font-medium text-slate-900 leading-tight">
                    {dayTitles[currentDay - 1] ||
                      `Day ${(currentDay - 1).toString()}`}
                  </span>
                </div>
              </motion.button>
            ) : (
              <div className="w-12 h-12" />
            )}
          </AnimatePresence>
        </div>

        {/* Center Indicator: Clean Counter */}
        <div className="flex flex-col items-center justify-center px-8">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900 tabular-nums">
              {currentDay}
            </span>
            <span className="text-slate-300 font-light text-xl">/</span>
            <span className="text-slate-400 font-medium tabular-nums">
              {totalDays}
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">
            Day
          </span>
        </div>

        {/* Next Navigation */}
        <div className="flex-1 flex justify-end">
          <AnimatePresence mode="wait">
            {currentDay < totalDays && (
              <motion.button
                key="next"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={handleNext}
                className="group flex items-center gap-4 text-right outline-none cursor-pointer"
              >
                <div className="hidden md:block">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                    Next
                  </span>
                  <span className="block text-sm font-medium text-slate-900 leading-tight">
                    {dayTitles[currentDay + 1] ||
                      `Day ${(currentDay + 1).toString()}`}
                  </span>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-slate-200/40 group-hover:shadow-xl group-hover:bg-slate-50 transition-all">
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
