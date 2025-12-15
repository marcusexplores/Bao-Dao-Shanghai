import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
import EggPancakeStallPhoto from "@/assets/photos/Itinerary_Day7_EggPancake_Stall.jpg";

export const ItineraryDay7Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 7</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          30 November 2025
        </PageContainerItem>
        <PageContainerItem>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </PageContainerItem>
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: EggPancakeStallPhoto, alt: "Egg Pancake Stall"}} />
      </PageContainer>
    </Page>
  );
}