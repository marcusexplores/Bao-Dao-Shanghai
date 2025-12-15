import { Masonry } from "../masonry/Masonry";
import type { QuiltTile } from "@/components/quilt/types";
import { PageContainerItem } from "./PageContainerItem";
import { mediaContainerVariant } from "./constants";
import { Quilt } from "../quilt/Quilt";

interface PageContainerItemImageProps {
  variant: string;
  data?: Image | string[] | QuiltTile[];
  caption?: string;
}

const getMediaContainer = (
  variant: string,
  data?: Image | string[] | QuiltTile[]
) => {
  if (variant === mediaContainerVariant.Image) {
    const input = data as Image;
    return (
      <div>
        <img src={input.src} alt={input.alt} />
      </div>
    );
  } else if (variant === mediaContainerVariant.Quilt) {
    const input = data as QuiltTile[];
    return <Quilt data={input} />;
  } else if (variant === mediaContainerVariant.Masonry) {
    const input = data as string[];
    return <Masonry images={input} />;
  } else {
    throw new Error("An error occurred while creating media container.");
  }
};

export const PageContainerItemImage = ({
  variant,
  data,
  caption,
}: PageContainerItemImageProps) => {
  return (
    <PageContainerItem>
      {getMediaContainer(variant, data)}
      {caption && <div>{caption}</div>}
    </PageContainerItem>
  );
};
