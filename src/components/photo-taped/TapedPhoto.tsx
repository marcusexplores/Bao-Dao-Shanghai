import { cn } from "@/functions/classname";
import { Tape } from "./Tape";

interface TapedPhotoProps {
  className?: string;
  image: string;
}

export const TapedPhoto = ({ className, image }: TapedPhotoProps) => {
  return (
    <div className={cn("relative flex justify-center items-center", className)}>
      <img
        src={image}
        alt={"alt"}
      />
      {/* Tape 1: Top Left */}
      <Tape
        className="top-[-14px] left-[-14px] origin-bottom-right"
        rotation={-30}
      />
      {/* Tape 2: Top Right */}
      <Tape
        className="top-[-14px] right-[-14px] origin-bottom-left"
        rotation={25}
      />
      {/* Tape 3: Bottom Center */}
      <Tape
        className="bottom-[-10px] left-1/2 -translate-x-1/2 origin-top"
        rotation={-5}
      />
    </div>
  );
};
