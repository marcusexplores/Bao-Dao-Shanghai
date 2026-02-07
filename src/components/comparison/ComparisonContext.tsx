import { createContext } from "react";
import { type MotionValue } from "motion/react";
import { SliderMode } from "./constants";

interface ComparisonContextType {
  sliderPosition: number;
  setSliderPosition: (pos: number) => void;
  motionSliderPosition: MotionValue<number>;
  mode: (typeof SliderMode)[keyof typeof SliderMode];
}

export const ComparisonContext = createContext<
  ComparisonContextType | undefined
>(undefined);
