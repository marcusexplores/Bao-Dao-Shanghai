import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { mediaContainerVariant } from "@/components/page/constants";
import PassportPhoto from "@/assets/photos/Itinerary_Day0_Passport.jpg";
import LoungePhoto from "@/assets/photos/Itinerary_Day0_Lounge.jpg";
import LoungeSaladBarPhoto from "@/assets/photos/Itinerary_Day0_Lounge_BeverageCorner.jpg";
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Image}
          data={{ src: PassportPhoto, alt: "Passport" }}
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Image}
          data={{ src: LoungePhoto, alt: "Lounge" }}
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
        <PageContainerItemImage
          variant={mediaContainerVariant.Masonry}
          data={[
            LoungeSaladBarPhoto,
            LoungePasteriesPhoto,
            LoungeIceCreamPhoto,
            LoungeBeverageCornerPhoto,
            LoungeHotFood1Photo,
            LoungeHotFood2Photo,
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LoungeBarPhoto, alt: "Longue Bar"}} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: PlanePhoto, alt: "Plane"}} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[PlaneSeatPhoto, PlaneFoodPhoto]} />
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
