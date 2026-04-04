import { cn } from "@/functions/classname";

interface TimelineNodeProps {
  day: number;
  isLast: boolean;
}

export const TimelineNode = ({ day, isLast }: TimelineNodeProps) => (
  <>
    <div
      className={cn(
        "absolute left-1/2 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition-colors duration-300"
      )}
    >
      <span>{day}</span>
    </div>
    {!isLast && (
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-muted"></div>
    )}
  </>
);
