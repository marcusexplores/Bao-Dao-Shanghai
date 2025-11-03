import type { LucideIcon } from "lucide-react";
import { cn } from "@/functions/classname";

interface TimelineNodeProps {
  icon: LucideIcon;
  isLast: boolean;
}

export const TimelineNode = ({ icon: Icon, isLast }: TimelineNodeProps) => (
  <>
    <div
      className={cn(
        "absolute left-1/2 top-0 z-10 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-background bg-primary p-2 text-primary-foreground shadow-lg transition-colors duration-300"
      )}
    >
      <Icon className="h-full w-full" />
    </div>
    {!isLast && (
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-muted"></div>
    )}
  </>
);
