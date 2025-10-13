import type { FlightInformation } from "@/components/flipboard/types";

export const outboundFlight: DeepReadonly<FlightInformation[]> = [
  {
    transit: 'Departure',
    flightNumber: "SQ928",
    date: "12 OCT 2025",
    time: "14:30",
    location: "SINGAPORE",
    terminal: "T1",
  },
  {
    transit: 'Arrival',
    flightNumber: "SQ928",
    date: "13 OCT 2025",
    time: "05:25",
    location: "NAGOYA",
    terminal: "T2",
  }
];

export const returnFlight: DeepReadonly<FlightInformation[]> = [
  {
    transit: 'Departure',
    flightNumber: "SQ928",
    date: "12 OCT 2025",
    time: "14:30",
    location: "SINGAPORE",
    terminal: "T1",
  },
  {
    transit: 'Arrival',
    flightNumber: "SQ928",
    date: "13 OCT 2025",
    time: "05:25",
    location: "NAGOYA",
    terminal: "T2",
  }
];