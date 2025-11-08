import type { FlightInformation } from "@/components/flipboard/types";

export const outboundFlight: DeepReadonly<FlightInformation[]> = [
  {
    transit: 'Departure',
    flightNumber: "HO1606",
    date: "23 NOV 2025",
    time: "23:25",
    location: "SINGAPORE",
    terminal: "T4",
  },
  {
    transit: 'Arrival',
    flightNumber: "HO1606",
    date: "24 NOV 2025",
    time: "04:35",
    location: "SHANGHAI",
    terminal: "T2",
  }
];

export const returnFlight: DeepReadonly<FlightInformation[]> = [
  {
    transit: 'Departure',
    flightNumber: "HO1605",
    date: "01 DEC 2025",
    time: "16:15",
    location: "SHANGHAI",
    terminal: "T2",
  },
  {
    transit: 'Arrival',
    flightNumber: "HO1605",
    date: "01 DEC 2025",
    time: "22:10",
    location: "SINGAPORE",
    terminal: "T4",
  }
];