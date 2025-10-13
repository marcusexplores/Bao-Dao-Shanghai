import { useEffect, useState, memo  } from "react";
import { ALPHANUMERIC, CYCLE_DELAY, FLIP_DURATION } from "./constants";
import { AnimatePresence, motion } from "motion/react";

interface FlipboardCharacterProps {
  char: string;
  isInitialLoad: boolean;
}

export const FlipboardCharacter = memo(
  ({ char, isInitialLoad }: FlipboardCharacterProps) => {
    // If it's the initial load (flipId === 0), display the target character immediately.
    // Otherwise, start the display on an arbitrary character (here, 'A') for the flip to work.
    const [displayChar, setDisplayChar] = useState(
      isInitialLoad ? char : ALPHANUMERIC[0]
    );

    useEffect(() => {
      let timeoutId: number | undefined;

      // Only run the cycle if it's NOT the initial load
      if (!isInitialLoad) {
        const targetChar = char;
        const cycleSteps = 12; // Total number of intermediate flips to perform
        let step = 0;

        // Start the cycle index randomly for a staggered, organic effect
        let charIndex = Math.floor(Math.random() * ALPHANUMERIC.length);

        const cycle = () => {
          if (step < cycleSteps) {
            // Display an intermediate character from the sequence
            const intermediateChar =
              ALPHANUMERIC[charIndex % ALPHANUMERIC.length];

            setDisplayChar(intermediateChar);

            charIndex++;
            step++;

            // Schedule the next fast flip
            timeoutId = setTimeout(cycle, CYCLE_DELAY);
          } else {
            // Final step: set the target character
            setDisplayChar(targetChar);
          }
        };

        // Start the flip cycle sequence immediately on remount
        cycle();
      }

      // Cleanup function to clear the timeout
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [char, isInitialLoad]); // Dependency on the character prop and initial load status

    const isSpace = displayChar === " ";

    // Base styling for the segmented panel look. We removed fixed widths (w-7/md:w-8)
    // and now rely on the parent container's flex-1 for width distribution.
    const baseClasses =
      "h-10 md:h-12 text-center text-3xl md:text-5xl font-mono font-extrabold m-[0.5px] rounded-md shadow-inner shadow-gray-950 flex justify-center items-center select-none";

    // Custom classes for the display color
    const colorClasses = isSpace
      ? "bg-gray-800 text-gray-800" // Invisible space
      : "bg-gray-900 text-yellow-400"; // Visible character

    return (
      <div
        className={`${baseClasses} ${colorClasses} relative w-full`} // w-full ensures it takes up its flex-1 container space
        style={{ perspective: "200px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            // Key changes on every displayChar update, forcing a new flip animation
            key={displayChar}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: FLIP_DURATION }}
            className="absolute inset-0 flex justify-center items-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Visual correction for the character alignment */}
            <span className="leading-none tracking-tight pt-1">
              {displayChar}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);
