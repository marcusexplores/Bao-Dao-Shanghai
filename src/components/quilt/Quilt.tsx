import { motion } from "motion/react";
import { cn } from "@/functions/classname";
import type { QuiltTile } from "./types";
import { MediaType } from "./constants";

interface QuiltProps {
  data: QuiltTile[];
}

const displayTile = (tile: QuiltTile) => {
  if (tile.type === MediaType.Image) {
    const image = tile.media as Image;
    return (
      <motion.div
        key={image.src}
        className={cn(
          "relative overflow-hidden group transition-all duration-300 ease-in-out",
          tile.className
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={cn("w-full h-full object-cover transition duration-500 group-hover:opacity-80 group-hover:scale-105", tile.className)}
        />
      </motion.div>
    );
  } else if (tile.type === MediaType.Video) {
    const video = tile.media as Video;
    return (
      <video
        controls
        key={video.src}
        className={cn("w-full h-full object-cover", tile.className)}
      >
        <source src={video.src} type={video.type ?? "video/mp4"} />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    throw new Error("An error occurred while creating media container.");
  }
};

export const Quilt = ({ data }: QuiltProps) => {
  return (
    <div className="grid grid-flow-dense grid-cols-12 gap-2 md:gap-4">
      {data.map((item) => displayTile(item))}
    </div>
  );
};
