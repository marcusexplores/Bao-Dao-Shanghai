import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { MediaType } from "@/components/page/constants";
import BreakfastBagPhoto from "@/assets/photos/Itinerary_Day6_Breakfast_Bag.jpg";
import BreakfastFoodPhoto from "@/assets/photos/Itinerary_Day6_Breakfast_Food.jpg";
import EntranceWalkwayPhoto from "@/assets/photos/Itinerary_Day6_Entrance_Walkway.jpg";
import EntranceQueuePhoto from "@/assets/photos/Itinerary_Day6_Entrance_Queue.jpg";
import EntrancePlazaPhoto from "@/assets/photos/Itinerary_Day6_Entrance_Plaza.jpg";
import EntranceCastlePhoto from "@/assets/photos/Itinerary_Day6_Entrance_Castle.jpg";
import SevenDwarfsEntrancePhoto from "@/assets/photos/Itinerary_Day6_SevenDwarfs_Entrance.jpg";
import SevenDwarfsSneakPeakPhoto from "@/assets/photos/Itinerary_Day6_SevenDwarfs_SneakPeak.jpg";
import SevenDwarfsMapPhoto from "@/assets/photos/Itinerary_Day6_SevenDwarfs_Map.jpg";
import SevenDwarfsRoom1Photo from "@/assets/photos/Itinerary_Day6_SevenDwarfs_Room1.jpg";
import SevenDwarfsRoom2Photo from "@/assets/photos/Itinerary_Day6_SevenDwarfs_Room2.jpg";
import BarbossaBountyPhoto from "@/assets/photos/Itinerary_Day6_BarbossaBounty.jpg";
import SunkenTreasureEntrancePhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Entrance.jpg";
import SunkenTreasureRoomPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Room.jpg";
import SunkenTreasureChainsPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Chains.jpg";
import SunkenTreasureRideStartPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Ride.jpg";
import SunkenTreasureJackSparrowPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_JackSparrow.jpg";
import SunkenTreasureSeaPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Sea.jpg";
import SunkenTreasureShipPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Ships.jpg";
import SunkenTreasureWavesPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_Waves.jpg";
import SunkenTreasureRideEndPhoto from "@/assets/photos/Itinerary_Day6_SunkenTreasure_RidePhoto.jpg";
import SoaringOverHorizonEntrancePhoto from "@/assets/photos/Itinerary_Day6_SoaringOverHorizon.jpg";
import SoaringOverHorizonScenePhoto from "@/assets/photos/Itinerary_Day6_SoaringOverHorizon_Scene.jpg";
import SirenRevengePhoto from "@/assets/photos/Itinerary_Day6_SirenRevenge.jpg";
import TreasureCovePhoto from "@/assets/photos/Itinerary_Day6_TreasureCove.jpg";
import JackSparrowActorPhoto from "@/assets/photos/Itinerary_Day6_JackSparrowActor.jpg";
import { youtubeId } from "./data/youtube";
// import xxxxxxxxxxxxxxx from "@/assets/photos/xxxxxxxxxxxxxxxxx.jpg";

export const ItineraryDay6Page = () => {
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
              src: BreakfastBagPhoto,
              alt: "Breakfast Carrier Bag",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BreakfastFoodPhoto,
              alt: "Breakfast Food",
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
              src: EntranceWalkwayPhoto,
              alt: "Entrance Walkway",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EntranceQueuePhoto,
              alt: "Entrance Queue",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EntrancePlazaPhoto,
              alt: "Entrance Plaza",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EntranceCastlePhoto,
              alt: "Disney Castle taken at the entrance",
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
              src: SevenDwarfsEntrancePhoto,
              alt: "Seven Dwarfs Mine Train Entrance",
            },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: SevenDwarfsSneakPeakPhoto,
              alt: "Seven Dwarfs Mine Train",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: SevenDwarfsMapPhoto,
              alt: "Seven Dwarfs Mine Map",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: SevenDwarfsRoom1Photo,
              alt: "Seven Dwarfs",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SevenDwarfsRoom2Photo,
              alt: "Seven Dwarfs",
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
              src: BarbossaBountyPhoto,
              alt: "Barbossa's Bounty",
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
              src: SunkenTreasureEntrancePhoto,
              alt: "Battle For The Sunken Treasure Entrance",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureRoomPhoto,
              alt: "Battle For The Sunken Treasure Room",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureChainsPhoto,
              alt: "Battle For The Sunken Treasure Chains",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureRideStartPhoto,
              alt: "Battle For The Sunken Treasure Ride",
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
              src: SunkenTreasureJackSparrowPhoto,
              alt: "Battle For The Sunken Treasure Jack Sparrow",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureSeaPhoto,
              alt: "Battle For The Sunken Treasure in the Sea",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureShipPhoto,
              alt: "Battle For The Sunken Treasure in the Sea",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureWavesPhoto,
              alt: "Battle For The Sunken Treasure in the Sea",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.YouTube,
            media: {
              id: youtubeId.EnchantedForestDragon,
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: SunkenTreasureRideEndPhoto,
              alt: "Battle For The Sunken Treasure Ride Photo",
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
              src: SoaringOverHorizonEntrancePhoto,
              alt: "Soaring Over The Horizon Entrance",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SoaringOverHorizonScenePhoto,
              alt: "Soaring Over The Horizon Screening",
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
              src: SirenRevengePhoto,
              alt: "Siren's Revenge",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: TreasureCovePhoto,
              alt: "Treasure Cove",
            },
            className: "col-span-6 row-start-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: JackSparrowActorPhoto,
              alt: "Captain Jack Sparrow",
            },
            className: "col-span-6 row-span-2",
          },
        ]}
      />
    </>
  );
};
