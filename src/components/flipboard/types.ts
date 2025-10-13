export interface FlightInformation {
  transit: "Departure" | "Arrival";
  flightNumber: string;
  date: string; // Format: DD MMM YYYY (e.g. "12 OCT 2025")
  time: string; // Format: HH:MM (e.g. "14:30")
  location: string; // e.g. "SINGAPORE"
  terminal: string; // e.g. "T1"
}
