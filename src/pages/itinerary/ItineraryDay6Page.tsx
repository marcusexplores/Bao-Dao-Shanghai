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
        In order to save time, we set our alarm for 7am and put in an order for
        breakfast on Meituan. While one of us headed to the shower, the other
        caught a bit more sleep while waiting for the bathroom to be freed up.
        Although we initially wanted to get to the park early to beat the
        queues, the late finish from last night made us decide to take it easy.
        We weren't intending to cover the entire park anyway, just a handful of
        selected rides, so there was no real pressure to rush. By the time we
        finished our breakfast and were ready to head out, it was already around
        9am.
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
        Our first taxi booking was unfortunately cancelled by the driver, so we
        had to quickly make a second one. When we finally arrived, we noticed a
        few individuals along the way selling Disney plush hats, making us
        wonder if those already wearing them inside the park had bought them
        from these sellers. The walkway to the park entrance wasn't too crowded,
        but once we reached the gate, we were met with a queue that was at least
        moving steadily. Sadly, during the security scan, a pair of mini
        scissors in our first-aid kit was flagged and had to be disposed of.
        Other than that small hiccup, the rest of the entrance process was
        smooth. Shanghai Disney, here we come!
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
        Based on our research and battle plan, our first stop to conquer was the
        Seven Dwarfs Mine Train (七个小矮人矿山车). Located in Fantasyland, this
        family-friendly roller coaster features unique swinging cars and tilted
        maneuvers, offering just enough of a drop for a nice adrenaline rush. As
        the ride passes through the mountain, we even get to see the Seven
        Dwarfs working away in the cave. We had to wait in line for about an
        hour and a half, but the experience was worth it. Overall, it was a
        blast, especially for those looking for a bit of a thrill without
        anything too crazy.
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
        Because of our late arrival and the long wait for our first ride, it was
        already lunchtime by the time we finished. We knew if we didn't eat
        right then, we'd spend the next hour hangry and stuck in another massive
        line. We were eyeing the famous Turkey Leg at Tortuga Treats, but since
        they were already sold out, we decided to head to the nearest
        restaurant, which turned out to be Barbossa's Bounty (巴波萨烧烤) in
        Treasure Cove (宝藏湾). We grabbed their promotional sets, like the XO
        Sauce Shrimps with Soy Mushroom Rice (XO酱大虾配酱油蘑菇饭), and managed
        to snag a table shortly after ordering. The food was decent, though as
        expected for a theme park, it was definitely on the pricier side.
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
        Initially, the plan was to head straight to Zootopia, but when we
        reached the area, a staff member informed us that the rides were
        currently down. While they mentioned we could still go in if we just
        wanted to take photos, it was a bit of a letdown since the ride is a new
        and highly hyped addition to the park. We figured that since the
        experience would be limited to just photos anyway, we might as well save
        it for the end of the day when there wasn't a time limit and focus on
        clearing our other must-do rides first.
      </PageContainerItem>
      <PageContainerItem>
        So we detoured back to Treasure Cove and joined the queue for Pirates of
        the Caribbean: Battle for the Sunken Treasure (加勒比海盗—沉落宝藏之战).
        As expected, it was another long wait, but the line kept us entertained
        with various set pieces and props from the films along the way. It
        definitely helped build the anticipation before we finally reached the
        boarding area.
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
        Once we finally boarded our boat, any lingering disappointment about the
        Zootopia closure vanished instantly. From the moment the boat
        magnetically pivoted and began to glide sideways, we knew we were in for
        something completely different. The transition from physical sets to
        those massive, floor to ceiling projection domes was so seamless that it
        actually felt like we were diving deep underwater into a ship graveyard.
        The highlight for us was definitely the hyper-realistic animatronics.
        Seeing a skeleton transform into Jack Sparrow right before our eyes was
        honestly mind-blowing. It all leads up to a massive sea battle where we
        were caught in the literal crossfire between the Black Pearl and the
        Flying Dutchman, capped off with a thrilling backward drop to escape the
        chaos. It's easily one of the most immersive attractions we've ever
        experienced.
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
              id: youtubeId.BattleForTheSunkenTreasure,
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
