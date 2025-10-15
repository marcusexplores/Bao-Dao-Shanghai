import { useState, useMemo, useEffect } from "react";
import {
  AUTO_FLIP_INTERVAL,
  DESKTOP_ROW_LENGTH,
  MOBILE_ROW_LENGTH,
} from "./constants";
import { getCharacters } from "./functions";
import { type FlightInformation } from "./types";
import { FlipboardCharacter } from "./FlipboardCharacter";

interface DisplaySection {
  label: string;
  data: string;
  // This maxLength is now dynamic based on screen size
  maxLength: number;
  type: "departure" | "arrival" | "info";
}

interface FlipboardProps {
  flight: DeepReadonly<FlightInformation[]>;
}

export const Flipboard = ({ flight  }: FlipboardProps) => {
  // State to hold the index of the current segment being displayed in mockSegments
  const [currentFlightSegmentIndex, setCurrentFlightSegmentIndex] = useState(0);
  // State to force the remount/re-initialization of all FlipCharacter children
  const [flipId, setFlipId] = useState(0);
  // State to hold the dynamic row length based on screen size
  const [rowLength, setRowLength] = useState(DESKTOP_ROW_LENGTH);

  // --- Responsive Row Length Logic ---
  useEffect(() => {
    // Function to check the screen size and set the appropriate row length
    const checkRowLength = () => {
      // Tailwind's 'md' breakpoint is 768px.
      // We set the row length based on this breakpoint: 15 for mobile, 21 for desktop.
      const newLength =
        window.innerWidth < 768 ? MOBILE_ROW_LENGTH : DESKTOP_ROW_LENGTH;
      setRowLength(newLength);
    };

    checkRowLength(); // Initial check

    window.addEventListener("resize", checkRowLength);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkRowLength);
    };
  }, []);
  // --- End Responsive Row Length Logic ---

  // --- Automatic Flip Logic ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 1. Force all children to re-render and run animation
      setFlipId((prev) => prev + 1);

      // 2. Update the state: cycle through the mockSegments array
      setCurrentFlightSegmentIndex((prevIndex) => (prevIndex + 1) % flight.length);
    }, AUTO_FLIP_INTERVAL);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  // --- End Automatic Flip Logic ---

  // Memoize the structured data sections based on the current segment index
  const sections: DisplaySection[] = useMemo(() => {
    const currentFlight = flight[currentFlightSegmentIndex];
    const currentTransitLabel = currentFlight.transit.toUpperCase();
    const currentType =
      currentFlight.transit === "Departure" ? "departure" : "arrival";

    return [
      // Transit/Location Row
      {
        label: currentTransitLabel,
        data: currentFlight.location,
        maxLength: rowLength,
        type: currentType,
      },
      // Other details
      {
        label: "Flight No.",
        data: currentFlight.flightNumber,
        maxLength: rowLength,
        type: "info",
      },
      {
        label: "Date",
        data: currentFlight.date,
        maxLength: rowLength,
        type: "info",
      },
      {
        label: "Time",
        data: currentFlight.time,
        maxLength: rowLength,
        type: "info",
      },
      {
        label: "Terminal",
        data: currentFlight.terminal,
        maxLength: rowLength,
        type: "info",
      },
    ];
  }, [currentFlightSegmentIndex, rowLength]); // Add rowLength to dependencies

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-8 font-[Inter]">
      {/* Flip Board Container */}
      <div className="w-full max-w-4xl bg-gray-700 shadow-2xl rounded-xl p-4 md:p-6 border-4 border-gray-800">
        {/* Dynamic Display Rows */}
        {sections.map((section, index) => (
          <div
            key={index}
            // All rows now use bg-gray-800 and have no conditional borders
            className={`flex flex-col md:flex-row rounded-lg p-3 ${
              index < sections.length - 1 ? "mb-2" : ""
            } bg-gray-800`}
          >
            {/* Label Column (Mobile stacks above display) */}
            <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end pr-4 mb-2 md:mb-0">
              <span
                className={`text-sm md:text-lg font-medium uppercase tracking-widest text-left md:text-right
                ${
                  section.data === "-------" ? "text-gray-500" : "text-gray-300"
                }`}
              >
                {section.label}
              </span>
            </div>

            {/* Value Column (The Flip Board) */}
            <div className="w-full md:w-3/4 flex justify-start space-x-0.5 p-1 bg-gray-900 rounded-lg border border-gray-950">
              {getCharacters(section.data, section.maxLength).map(
                (char, charIndex) => (
                  <div
                    key={`${flipId.toString()}-${section.label}-${charIndex.toString()}`}
                    // Use flex-1 to distribute the width evenly among all 15/21 flappers
                    className="flex-1 min-w-[10px]"
                  >
                    <FlipboardCharacter
                      char={char}
                      isInitialLoad={flipId === 0} // Only true on first load
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
