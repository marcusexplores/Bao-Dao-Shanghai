import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { ImagePriority, MediaType } from "@/components/page/constants";
import GymMainPhoto from "@/assets/photos/Itinerary_Day8_Gym_Main.jpg";
import GymCornerPhoto from "@/assets/photos/Itinerary_Day8_Gym_Corner.jpg";
import BreakfastPhoto from "@/assets/photos/Itinerary_Day8_Breakfast.jpg";
import EscalatorDecalPhoto from "@/assets/photos/Itinerary_Day8_Bailian_Escalator_Decal.jpg";
import EscalatorComicPhoto from "@/assets/photos/Itinerary_Day8_Bailian_Escalator_Comic.jpg";
import XhrHobbyPhoto from "@/assets/photos/Itinerary_Day8_Bailian_XhrHobby.jpg";
import YooooShopPhoto from "@/assets/photos/Itinerary_Day8_Bailian_YooooShop.jpg";
import PaaakuShopPhoto from "@/assets/photos/Itinerary_Day8_Bailian_PaaakuShop.jpg";
import LightDarknessPhoto from "@/assets/photos/Itinerary_Day8_Bailian_LightDarkness.jpg";
import SunriseDutyFreePhoto from "@/assets/photos/Itinerary_Day8_Airport_DutyFree.jpg";
import SleepingPodPhoto from "@/assets/photos/Itinerary_Day8_Airport_SleepingPods.jpg";
import ShakeShackEntrancePhoto from "@/assets/photos/Itinerary_Day8_ShakeShack.jpg";
import ShakeShackFoodPhoto from "@/assets/photos/Itinerary_Day8_ShakeShack_Food.jpg";
import AirportGatePhoto from "@/assets/photos/Itinerary_Day8_Airport_Gates.jpg";
import AirportEmptyPhoto from "@/assets/photos/Itinerary_Day8_Airport_Empty.jpg";
import PlaneFoodPhoto from "@/assets/photos/Itinerary_Day8_PlaneFood.jpg";
import { returnFlight } from "./data/flights";

export const ItineraryDay8Page = () => {
  return (
    <>
      <Flipboard flight={returnFlight} />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: GymMainPhoto,
              alt: "Gym Workout Area",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: GymCornerPhoto,
              alt: "Gym Stretching Area",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BreakfastPhoto,
              alt: "Breakfast",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: EscalatorDecalPhoto,
              alt: "Bailian ZX Escalator",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EscalatorComicPhoto,
              alt: "Bailian ZX Escalator",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: XhrHobbyPhoto,
              alt: "Xhr Hobby",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: YooooShopPhoto,
              alt: "Yoooo Shop",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PaaakuShopPhoto,
              alt: "Paaaku Shop",
            },
            className: "col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LightDarknessPhoto,
              alt: "Light Darkness",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SunriseDutyFreePhoto,
              alt: "Sunrise Duty Free",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SleepingPodPhoto,
              alt: "Sleeping Pods",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ShakeShackEntrancePhoto,
              alt: "Shake Shack",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ShakeShackFoodPhoto,
              alt: "Shake Shack",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: AirportGatePhoto,
              alt: "Airport",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: AirportEmptyPhoto,
              alt: "Airport",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: PlaneFoodPhoto,
              alt: "Plane Food",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </PageContainerItem>
    </>
  );
};
