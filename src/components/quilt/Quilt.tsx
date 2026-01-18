import type { ImgHTMLAttributes, SourceHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/functions/classname";
import { ImageComparison } from "@/components/comparison/ImageComparison";
import type { QuiltTile } from "./types";
import { MediaType } from "./constants";

interface QuiltProps {
  data: QuiltTile[];
}

const displayTile = (index: number, tile: QuiltTile) => {
  if (tile.type === MediaType.ImageComparison) {
    const pair = tile.media as Pair<ImgHTMLAttributes<HTMLImageElement>, ImgHTMLAttributes<HTMLImageElement>>;
    return (
      <div key={index} className={cn(tile.className)}>
        <ImageComparison before={pair.first} after={pair.second} />
      </div>
    );
  } else if (tile.type === MediaType.Video) {
    const video = tile.media as SourceHTMLAttributes<HTMLSourceElement>;
    return (
      <video
        controls
        preload="metadata"
        key={index}
        className={cn("w-full h-full object-cover", tile.className)}
      >
        <source src={video.src} type={video.type ?? "video/mp4"} />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    const image = tile.media as ImgHTMLAttributes<HTMLImageElement>;
    return (
      <motion.div
        key={index}
        className={cn(
          "relative overflow-hidden group transition-all duration-300 ease-in-out",
          tile.className
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          {...image}
          className={cn(
            "w-full h-full object-cover transition duration-500 group-hover:opacity-80 group-hover:scale-105",
            tile.className
          )}
        />
      </motion.div>
    );
  }
};

export const Quilt = ({ data }: QuiltProps) => {
  return (
    <div className="grid grid-flow-dense grid-cols-12 gap-2 md:gap-4">
      {data.map((item, index) => displayTile(index, item))}
    </div>
  );
};
