import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { MediaType } from "@/components/page/constants";
import PassportPhoto from "@/assets/photos/Itinerary_Day0_Passport.jpg";
import LoungePhoto from "@/assets/photos/Itinerary_Day0_Lounge.jpg";
import LoungeSaladBarPhoto from "@/assets/photos/Itinerary_Day0_Lounge_SaladBar.jpg";
import LoungePasteriesPhoto from "@/assets/photos/Itinerary_Day0_Lounge_Pasteries.jpg";
import LoungeBeverageCornerPhoto from "@/assets/photos/Itinerary_Day0_Lounge_BeverageCorner.jpg";
import LoungeHotFood1Photo from "@/assets/photos/Itinerary_Day0_Lounge_HotFood1.jpg";
import LoungeHotFood2Photo from "@/assets/photos/Itinerary_Day0_Lounge_HotFood2.jpg";
import LoungeIceCreamPhoto from "@/assets/photos/Itinerary_Day0_Lounge_IceCream.jpg";
import LoungeBarPhoto from "@/assets/photos/Itinerary_Day0_Lounge_Bar.jpg";
import PlanePhoto from "@/assets/photos/Itinerary_Day0_Plane.jpg";
import PlaneSeatPhoto from "@/assets/photos/Itinerary_Day0_Plane_Seat.jpg";
import PlaneFoodPhoto from "@/assets/photos/Itinerary_Day0_Plane_Food.jpg";
import { outboundFlight } from "./data/flights";

export const ItineraryDay0Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 0</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          23 November 2025
        </PageContainerItem>
        <Flipboard flight={outboundFlight} />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: { src: PassportPhoto, alt: "Passport" },
              className: "col-span-full max-w-lg mx-auto",
            },
          ]}
        />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: { src: LoungePhoto, alt: "Lounge" },
              className: "col-span-full",
            },
          ]}
        />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: { src: LoungePasteriesPhoto, alt: "Lounge Pasteries" },
              className: "col-span-full md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: LoungeSaladBarPhoto,
                alt: "Lounge Salad Bar",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: LoungeBeverageCornerPhoto,
                alt: "Lounge Beverage Corner",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: { src: LoungeHotFood1Photo, alt: "Lounge Hot Food 1" },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: LoungeIceCreamPhoto,
                alt: "Lounge Udders Ice Cream",
              },
              className: "col-span-6 row-span-2",
            },
            {
              type: MediaType.Image,
              media: {
                src: LoungeHotFood2Photo,
                alt: "Lounge Hot Food 2",
              },
              className: "col-span-6",
            },
          ]}
        />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: {
                src: LoungeBarPhoto,
                alt: "Longue Bar",
              },
              className: "col-span-full",
            },
          ]}
        />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: {
                src: PlanePhoto,
                alt: "Plane",
              },
              className: "col-span-full",
            },
          ]}
        />
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: {
                src: PlaneSeatPhoto,
                alt: "Plane Seat",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: { src: PlaneFoodPhoto, alt: "Plane Food" },
              className: "col-span-6",
            },
          ]}
        />
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
      </PageContainer>
    </Page>
  );
};
