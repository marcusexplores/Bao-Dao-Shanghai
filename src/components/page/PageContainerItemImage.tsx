import { Masonry } from "../masonry/Masonry";
import { PageContainerItem } from "./PageContainerItem";

interface PageContainerItemImageProps {
  images: string[];
  caption?: string;
}

export const PageContainerItemImage = ({
  images,
  caption,
}: PageContainerItemImageProps) => {
  return (
    <PageContainerItem>
      {images.length === 1 && (
        <div>
          <img
            src={images[0]}
            alt={""}
          />
        </div>
      )}
      {images.length > 1 && <Masonry images={images} />}
      {caption && <div></div>}
    </PageContainerItem>
  );
};
