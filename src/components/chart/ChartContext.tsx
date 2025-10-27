import { createContext } from "react";
import type { ChartConfig } from "./types";

interface ChartContextProps {
  config: ChartConfig;
}

export const ChartContext = createContext<ChartContextProps | null>(null);
