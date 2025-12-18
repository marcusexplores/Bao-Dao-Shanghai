import { Quilt } from "@/components/quilt/Quilt";
import type { QuiltTile } from "@/components/quilt/types";
import { PageContainerItem } from "./PageContainerItem";

interface PageContainerItemMediaProps {
  data: QuiltTile[];
  caption?: string;
}

export const PageContainerItemMedia = ({
  data,
  caption,
}: PageContainerItemMediaProps) => {
  return (
    <PageContainerItem>
      <Quilt data={data} />
      {caption && <div className="flex items-center justify-center mt-2 md:mt-4"><i>{caption}</i></div>}
    </PageContainerItem>
  );
};