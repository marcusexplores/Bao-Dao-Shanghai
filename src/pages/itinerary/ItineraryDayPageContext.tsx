import { createContext } from "react";

interface ItineraryDayPageContextType {
  currentDay: number;
  setCurrentDay: (day: number) => void;
}

export const ItineraryDayPageContext = createContext<ItineraryDayPageContextType | undefined>(
  undefined
);
