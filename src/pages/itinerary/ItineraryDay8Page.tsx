import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { mediaContainerVariant } from "@/components/page/constants";
import GymSpace1Photo from "@/assets/photos/Itinerary_Day8_Gym_Space1.jpg";
import GymSpace2Photo from "@/assets/photos/Itinerary_Day8_Gym_Space2.jpg";
import { returnFlight } from "./data/flights";

export const ItineraryDay8Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 8</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          1 December 2025
        </PageContainerItem>
        <Flipboard flight={returnFlight} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[GymSpace1Photo, GymSpace2Photo]} />
      </PageContainer>
    </Page>
  );
};
