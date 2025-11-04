import { TimelineItem } from "./TimelineItem";
import type { TimelineActivity } from "./types";

interface TimelineProps {
  data: TimelineActivity[];
}

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="overflow-x-hidden">
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          index={index}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};
