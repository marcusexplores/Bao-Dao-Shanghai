import { useContext } from "react";
import { ItineraryDayPageContext } from "./ItineraryDayPageContext";

export const useItineraryDayPageContext = () => {
  const context = useContext(ItineraryDayPageContext);
  if (!context) {
    throw new Error("useItinerary must be used within an ItineraryDayPageProvider");
  }
  return context;
};
