import { useMemo } from "react";
import { cn } from "@/functions/classname";
import { distributeItemsIntoColumns } from "./functions";
import { MasonryItem } from "./MasonryItem";

interface MasonryProps {
  images: string[];
}

export const Masonry = ({ images }: MasonryProps) => {
  // The CSS grid will determine how many of these columns are actually visible.
  const MAX_COLS = 4;

  const columnsOfImages = useMemo(() => {
    return distributeItemsIntoColumns(images, MAX_COLS);
  }, [images]);

  // Filter out empty columns to get the actual content columns
  const actualContentCols = useMemo(() => {
    return columnsOfImages.filter((col) => col.length > 0);
  }, [columnsOfImages]);

  const contentColCount = actualContentCols.length;

  // Determine the grid structure and centering properties based on content count
  let finalGridClasses = "";

  if (contentColCount === 1) {
    // For 1 item, use 1 column, centered and constrained width
    finalGridClasses = "grid-cols-1 max-w-xs mx-auto";
  } else if (contentColCount === 2) {
    // For 2 items, use 2 columns, centered and constrained width on desktop
    finalGridClasses = "grid-cols-2 max-w-2xl mx-auto";
  } else if (contentColCount === 3) {
    // For 3 items, use 3 columns, centered and constrained width on desktop
    finalGridClasses = "grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto";
  } else {
    // Full width responsive grid (4+ items)
    finalGridClasses = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }

  return (
    <div className={cn("grid gap-4 md:gap-6 lg:gap-8", finalGridClasses)}>
      {/*
          Render MAX_COLS containers (the actual columns).
          Each container is a flex column that stacks its assigned images.
        */}
      {columnsOfImages.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {column.map((image, itemIndex) => (
            <MasonryItem
              key={itemIndex}
              image={image}
              // Calculate global index for staggered animation delay
              delay={colIndex + itemIndex * MAX_COLS}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
