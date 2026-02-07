import { useState, type HTMLAttributes, type MouseEventHandler, type TouchEventHandler } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { cn } from "@/functions/classname";
import { ComparisonContext } from "./ComparisonContext";
import { SliderMode } from "./constants";

type ComparisonProps = HTMLAttributes<HTMLDivElement> & {
  mode?: (typeof SliderMode)[keyof typeof SliderMode];
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export const Comparison = ({
  className,
  mode = SliderMode.Drag,
  onDragStart,
  onDragEnd,
  ...props
}: ComparisonProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(motionValue, {
    bounce: 0,
    duration: 0,
  });
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (domRect: DOMRect, clientX: number) => {
    if (!isDragging && mode === SliderMode.Drag) {
      return;
    }

    const x = clientX - domRect.left;
    const percentage = Math.min(Math.max((x / domRect.width) * 100, 0), 100);
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  const handleMouseDrag: MouseEventHandler<HTMLDivElement> = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    handleDrag(containerRect, event.clientX);
  };

  const handleTouchDrag: TouchEventHandler<HTMLDivElement> = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const touches = Array.from(event.touches);

    handleDrag(containerRect, touches.at(0)?.clientX ?? 0);
  };

  const handleDragStart = () => {
    if (mode === SliderMode.Drag) {
      setIsDragging(true);
      onDragStart?.();
    }
  };

  const handleDragEnd = () => {
    if (mode === SliderMode.Drag) {
      setIsDragging(false);
      onDragEnd?.();
    }
  };

  return (
    <ComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition, mode }}
    >
      <div
        aria-label="Comparison slider"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={sliderPosition}
        className={cn(
          "relative isolate w-full select-none overflow-hidden",
          className
        )}
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleMouseDrag}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleTouchDrag}
        onTouchStart={handleDragStart}
        role="slider"
        tabIndex={0}
        {...props}
      />
    </ComparisonContext.Provider>
  );
};
