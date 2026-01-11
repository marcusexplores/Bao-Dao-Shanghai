import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { MediaType } from "@/components/page/constants";
import TrainBoardPhoto from "@/assets/photos/Itinerary_Day3_Train_Board.jpg";
import HotelPhoto from "@/assets/photos/Itinerary_Day3_Hotel.jpg";
import HotelRoomOverviewPhoto from "@/assets/photos/Itinerary_Day3_Hotel_Room_Overview.jpg";
import HotelBedroomPhoto from "@/assets/photos/Itinerary_Day3_Hotel_Room_Bedroom.jpg";
import HotelBathroomPhoto from "@/assets/photos/Itinerary_Day3_Hotel_Room_Bathroom.jpg";
import HotelToiletPhoto from "@/assets/photos/Itinerary_Day3_Hotel_Room_Toilet.jpg";
import HotelRoomCardPhoto from "@/assets/photos/Itinerary_Day3_Hotel_Room_Card.jpg";
import BeefNoodleShopPhoto from "@/assets/photos/Itinerary_Day3_BeefNoodle_Shop.jpg";
import BeefNoodleOriginalPhoto from "@/assets/photos/Itinerary_Day3_BeefNoodle_Original.jpg";
import BeefNoodleMarrowPhoto from "@/assets/photos/Itinerary_Day3_BeefNoodle_Marrow.jpg";
import NeoWorldPhoto from "@/assets/photos/Itinerary_Day3_NeoWorld.jpg";
import NeoWorldMapPhoto from "@/assets/photos/Itinerary_Day3_NeoWorld_Map.jpg";
import ArknightsContainerPhoto from "@/assets/photos/Itinerary_Day3_NeoWorld_Arknights.jpg";
import ConsoleControllerPhoto from "@/assets/photos/Itinerary_Day3_NeoWorld_Controller.jpg";
import TrashbinFlexPhoto from "@/assets/photos/Itinerary_Day3_Trashbin_Flex.jpg";
import TrashbinFoldArmPhoto from "@/assets/photos/Itinerary_Day3_Trashbin_FoldArm.jpg";
import TrashbinBowPhoto from "@/assets/photos/Itinerary_Day3_Trashbin_Bow.jpg";
import CakePhoto from "@/assets/photos/Itinerary_Day3_Cake.jpg";
import PolluxPhoto from "@/assets/photos/Itinerary_Day3_Pollux.jpg";
import SamPhoto from "@/assets/photos/Itinerary_Day3_Sam.jpg";
import TrashbinSitPhoto from "@/assets/photos/Itinerary_Day3_Trashbin_Sit.jpg";
import ArknightStandeePhoto from "@/assets/photos/Itinerary_Day3_Arknights_Standee.jpg";
import MihoyoShopPhoto from "@/assets/photos/Itinerary_Day3_Mihoyo.jpg";
import TeashopPhoto from "@/assets/photos/Itinerary_Day3_TeaShop.jpg";
import CrabSoupDumplingShopPhoto from "@/assets/photos/Itinerary_Day3_CrabSoupDumpling_Shop.jpg";
import CrabSoupDumplingFoodPhoto from "@/assets/photos/Itinerary_Day3_CrabSoupDumpling_Food.jpg";
import DaHuChunShopPhoto from "@/assets/photos/Itinerary_Day3_DaHuChun_Shop.jpg";
import DaHuChunFoodPhoto from "@/assets/photos/Itinerary_Day3_DaHuChun_Food.jpg";
import FoodStreetPhoto from "@/assets/photos/Itinerary_Day3_FoodStreet.jpg";
import FoodStreetFoodPhoto from "@/assets/photos/Itinerary_Day3_FoodStreet_Food.jpg";
import BundPhoto from "@/assets/photos/Itinerary_Day3_Bund.jpg";
import BuildingPhoto from "@/assets/photos/Itinerary_Day3_Building.jpg";
import BernardTaxiPhoto from "@/assets/photos/Itinerary_Day3_Bernard_Taxi.jpg";
import BernardSitPhoto from "@/assets/photos/Itinerary_Day3_Bernard_Sit.jpg";
import ChristmasMarketPhoto from "@/assets/photos/Itinerary_Day3_ChristmasMarket.jpg";

export const ItineraryDay3Page = () => {
  return (
    <>
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
              src: TrainBoardPhoto,
              alt: "Train Timings",
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
              src: HotelPhoto,
              alt: "Mehood Elegant Hotel",
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
              src: HotelRoomOverviewPhoto,
              alt: "Hotel Room Overview",
            },
            className: "col-span-6 md:col-start-5 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelBedroomPhoto, alt: "Hotel Bedroom" },
            className: "col-span-6 md:col-start-9 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelBathroomPhoto, alt: "Hotel Bathroom" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: HotelToiletPhoto, alt: "Hotel Room Toilet" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: HotelRoomCardPhoto, alt: "Hotel Room Cards" },
            className: "col-span-12 md:col-start-1 md:col-span-4",
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
            media: { src: BeefNoodleShopPhoto, alt: "Beef Noodles Shop" },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: BeefNoodleOriginalPhoto,
              alt: "Original Beef Noodles",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BeefNoodleMarrowPhoto,
              alt: "Bone Marrow Beef Noodles",
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
            media: { src: NeoWorldPhoto, alt: "Neo World" },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: { src: NeoWorldMapPhoto, alt: "Neo World Map" },
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
              src: ArknightsContainerPhoto,
              alt: "Arknights Container",
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
              src: ConsoleControllerPhoto,
              alt: "Huge Game Controller",
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
              src: TrashbinFlexPhoto,
              alt: "HSR Lordly Trashcan Flexing",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: TrashbinFoldArmPhoto,
              alt: "HSR Lordly Trashcan Folding Arms",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: TrashbinBowPhoto,
              alt: "HSR Lordly Trashcan Bowing",
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
              src: CakePhoto,
              alt: "HSR Cake",
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
              src: PolluxPhoto,
              alt: "HSR Pollux",
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
              src: SamPhoto,
              alt: "HSR Sam",
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
              src: TrashbinSitPhoto,
              alt: "HSR Lordly Trashcan Seated",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ArknightStandeePhoto,
              alt: "Arknights Standees",
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
              src: MihoyoShopPhoto,
              alt: "Mihoyo Shop",
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
              src: TeashopPhoto,
              alt: "Gu Ren Shuo Tea Stall",
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
              src: CrabSoupDumplingShopPhoto,
              alt: "Crab Soup Bao and Dumpling Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: CrabSoupDumplingFoodPhoto,
              alt: "Crab Soup Bao and Dumpling",
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
              src: DaHuChunShopPhoto,
              alt: "Da Hu Chun",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DaHuChunFoodPhoto,
              alt: "Da Hu Chun Food",
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
              src: FoodStreetPhoto,
              alt: "Food Street",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: FoodStreetFoodPhoto,
              alt: "Street Food",
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
              src: BundPhoto,
              alt: "The Bund Night Skyline",
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
              src: BuildingPhoto,
              alt: "Golden hour at the waterfront",
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
              src: BernardTaxiPhoto,
              alt: "Bernard and Taxi",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BernardSitPhoto,
              alt: "Bernard waiting",
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
              src: ChristmasMarketPhoto,
              alt: "Christmas Market",
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
    </>
  );
};
