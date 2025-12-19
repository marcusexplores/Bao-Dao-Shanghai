import type { ComponentProps } from "react";
import { motion, useTransform } from "motion/react";
import { cn } from "@/functions/classname";
import { useComparisonContext } from "./hooks";
import { ItemPosition } from "./constants";

type ComparisonItemProps = ComponentProps<typeof motion.div> & {
  position: (typeof ItemPosition)[keyof typeof ItemPosition];
};

export const ComparisonItem = ({
  className,
  position,
  ...props
}: ComparisonItemProps) => {
  const { motionSliderPosition } = useComparisonContext();
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${(100 - value).toString()}% 0 0)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value.toString()}%)`
  );

  return (
    <motion.div
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      style={{
        clipPath: position === ItemPosition.Left ? leftClipPath : rightClipPath,
      }}
      {...props}
    />
  );
};
