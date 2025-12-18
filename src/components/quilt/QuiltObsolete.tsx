import { motion } from "motion/react";
import { cn } from "@/functions/classname";
import type { QuiltObsoleteTile } from "./types";

interface QuiltObsoleteProps {
  data: QuiltObsoleteTile[];
}

export const QuiltObsolete = ({ data }: QuiltObsoleteProps) => {
  return (
    <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 ">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className={cn(
            "relative overflow-hidden  group transition-all duration-300 ease-in-out",
            `col-span-${item.cols.toString()}`,
            `row-span-${item.rows.toString()}`
          )}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={item.data.src}
            alt={item.data.alt}
            className="w-full h-full object-cover transition duration-500 group-hover:opacity-80 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};
