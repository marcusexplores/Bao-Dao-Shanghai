import { useContext } from "react";
import { ComparisonContext } from "./ComparisonContext";

export const useComparisonContext = () => {
  const context = useContext(ComparisonContext);

  if (!context) {
    throw new Error(
      "useComparisonContext must be used within a Comparison"
    );
  }

  return context;
};
