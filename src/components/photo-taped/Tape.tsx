import { cn } from "@/functions/classname";

interface TapeProps {
  rotation: number;
  className?: string;
}

export const Tape = ({ className, rotation }: TapeProps) => {
  // Styles mimic slightly yellowed, translucent, and sticky tape.
  const tapeStyles = {
    // Semi-transparent light yellow/brown color
    backgroundColor: "rgba(230, 220, 180, 0.65)",
    // Subtle shadow to give it thickness
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)", // Increased shadow
    // Dynamic rotation based on props
    transform: `rotate(${rotation.toLocaleString()}deg)`,
  };

  return (
    <div
      style={tapeStyles}
      className={cn("absolute w-16 h-4 md:w-20 md:h-5 z-50", className)}
      aria-hidden="true" // Decorative element
    />
  );
};
