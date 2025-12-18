import { Masonry } from "../masonry/Masonry";
import type { QuiltObsoleteTile } from "@/components/quilt/types";
import { PageContainerItem } from "./PageContainerItem";
import { mediaContainerVariant } from "./constants";
import { QuiltObsolete } from "../quilt/QuiltObsolete";

interface PageContainerItemImageProps {
  variant: string;
  data?: Image | string[] | QuiltObsoleteTile[];
  caption?: string;
}

const getMediaContainer = (
  variant: string,
  data?: Image | string[] | QuiltObsoleteTile[]
) => {
  if (variant === mediaContainerVariant.Image) {
    const input = data as Image;
    return (
      <div>
        <img src={input.src} alt={input.alt} />
      </div>
    );
  } else if (variant === mediaContainerVariant.Quilt) {
    const input = data as QuiltObsoleteTile[];
    return <QuiltObsolete data={input} />;
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
