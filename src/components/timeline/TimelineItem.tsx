import { Link } from "react-router";
import { motion } from "motion/react";
import { cn } from "@/functions/classname";
import { TapedPhoto } from "@/components/photo-taped/TapedPhoto";
import { TimelineNode } from "./TimelineNode";
import type { TimelineActivity } from "./types";

interface TimelineItemProps extends TimelineActivity {
  index: number;
  isLast: boolean;
}

export const TimelineItem = ({
  index,
  title,
  description,
  subtitle,
  icon,
  thumbnail,
  link,
  isLast,
}: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  // motion variants for alternating slide-in effect
  const variants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
  };

  return (
    <motion.div
      className="relative flex w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% visible
      variants={variants}
    >
      <div
        className={cn(
          "w-full pt-2 mb-12 md:w-[45%]",
          isLeft ? "mr-auto ml-15 md:ml-0" : "ml-15 md:ml-auto md:mr-0"
        )}
      >
        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
          <Link
            to={link}
            className="text-xl font-bold text-foreground md:max-w-xs"
          >
            {title}
          </Link>
          <p className="text-sm font-semibold text-primary/70">{subtitle}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <Link to={link}>
          <TapedPhoto className="mt-5 mx-5" image={thumbnail} />
        </Link>
      </div>

      <Link
        to={link}
        className="absolute md:left-1/2 top-0 h-full w-1 -translate-x-1/2 ml-5 md:ml-0"
      >
        <TimelineNode icon={icon} isLast={isLast} />
      </Link>
    </motion.div>
  );
};
