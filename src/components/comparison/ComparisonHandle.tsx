import type { ComponentProps, ReactNode } from "react";
import { useTransform, motion } from "motion/react";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "@/functions/classname";
import { useComparisonContext } from "./hooks";
import { SliderMode } from "./constants";

type ComparisonHandleProps = ComponentProps<typeof motion.div> & {
  children?: ReactNode;
};

export const ComparisonHandle = ({
  className,
  children,
  ...props
}: ComparisonHandleProps) => {
  const { motionSliderPosition, mode } = useComparisonContext();
  const left = useTransform(motionSliderPosition, (value) => `${value.toString()}%`);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "-translate-x-1/2 absolute top-0 z-50 flex h-full w-10 items-center justify-center",
        mode === SliderMode.Drag && "cursor-grab active:cursor-grabbing",
        className
      )}
      role="presentation"
      style={{ left }}
      {...props}
    >
      {children ?? (
        <>
          <div className="-translate-x-1/2 absolute left-1/2 h-full w-1 bg-background" />
          {mode === SliderMode.Drag && (
            <div className="z-50 flex items-center justify-center rounded-sm bg-background px-0.5 py-1">
              <GripVerticalIcon className="h-4 w-4 select-none text-muted-foreground" />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};
