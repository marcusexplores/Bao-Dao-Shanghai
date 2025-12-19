import { Comparison } from "./Comparison";
import { ComparisonItem } from "./ComparisonItem";
import { ComparisonHandle } from "./ComparisonHandle";
import { ItemPosition } from "./constants";

interface ImageComparisonProps {
  before: Image;
  after: Image;
}

export const ImageComparison = ({ before, after }: ImageComparisonProps) => {
  return (
    <Comparison className="aspect-video">
      <ComparisonItem position={ItemPosition.Left}>
        <img src={before.src} alt={before.alt} className="w-full h-full object-cover" />
      </ComparisonItem>
      <ComparisonItem position={ItemPosition.Right}>
        <img src={after.src} alt={after.alt} className="w-full h-full object-cover" />
      </ComparisonItem>
      <ComparisonHandle />
    </Comparison>
  );
};
