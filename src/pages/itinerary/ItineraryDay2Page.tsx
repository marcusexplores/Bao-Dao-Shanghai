import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { PageHeadline } from "@/components/page/PageHeadline";
import { MediaType } from "@/components/page/constants";
import HotelBuffetHotPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Hot.jpg";
import HotelBuffetSidesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Sides.jpg";
import HotelBuffetDrinkPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Drink.jpg";
import HotelBuffetPorridgePhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Porridge.jpg";
import HotelBuffetCookPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Cook.jpg";
import HotelBuffetVegetablesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Vegetables.jpg";
import HotelBuffetIcePhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Ice.jpg";
import HotelBuffetSoupPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Soup.jpg";
import HotelBuffetPasteriesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Pasteries.jpg";
import HotelBuffetSteamPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Steam.jpg";
import OmgParkTogetherPhoto from "@/assets/photos/Itinerary_Day2_Omg_Together.jpg";
import OmgParkMascotPhoto from "@/assets/photos/Itinerary_Day2_Omg_Mascot.jpg";
import OmgParkTotemPhoto from "@/assets/photos/Itinerary_Day2_Omg_Totem.jpg";
import BoatEntrancePhoto from "@/assets/photos/Itinerary_Day2_BoatEntrance.jpg";
import BoatBoardingPhoto from "@/assets/photos/Itinerary_Day2_BoatBoarding.jpg";
import AltarPhoto from "@/assets/photos/Itinerary_Day2_Altar.jpg";
import BuddhaPhoto from "@/assets/photos/Itinerary_Day2_Buddha.jpg";
import CaveInspectorPhoto from "@/assets/photos/Itinerary_Day2_Cave_Inspector.jpg";
import CaveSceneryPhoto from "@/assets/photos/Itinerary_Day2_Cave_Scenery.jpg";
import CaveRewardPhoto from "@/assets/photos/Itinerary_Day2_Cave_Reward.jpg";
import LiftPhoto from "@/assets/photos/Itinerary_Day2_Lift.jpg";
import BernardWingPhoto from "@/assets/photos/Itinerary_Day2_Wing_Bernard.jpg";
import GalbrenaImage from "@/assets/images/Galbrena.jpg";
import GlassBridgePhoto from "@/assets/photos/Itinerary_Day2_GlassBridge.jpg";
import LittlePrincePhoto from "@/assets/photos/Itinerary_Day2_LittlePrince.jpg";
import GlassBridgeOverviewPhoto from "@/assets/photos/Itinerary_Day2_GlassBridge_Overview.jpg";
import CliffSwingPhoto from "@/assets/photos/Itinerary_Day2_CliffSwing.jpg";
import AstronautPhoto from "@/assets/photos/Itinerary_Day2_Astronaut.jpg";
import AstronautTouchPhoto from "@/assets/photos/Itinerary_Day2_Astronaut_Touch.jpg";
import ObservatoryBernardPhoto from "@/assets/photos/Itinerary_Day2_Observatory_Bernard.jpg";
import ObservatoryMarcusPhoto from "@/assets/photos/Itinerary_Day2_Observatory_Marcus.jpg";
import WaterEntrancePhoto from "@/assets/photos/Itinerary_Day2_Water_Entrance.jpg";
import WaterBackStoryPhoto from "@/assets/photos/Itinerary_Day2_Water_BackStory.jpg";
import WaterBoatPhoto from "@/assets/photos/Itinerary_Day2_Water_Boat.jpg";
import WaterTogetherPhoto from "@/assets/photos/Itinerary_Day2_Water_Together.jpg";
import WaterDryerPhoto from "@/assets/photos/Itinerary_Day2_Water_Dryer.jpg";
import TeahousePhoto from "@/assets/photos/Itinerary_Day2_Teahouse.jpg";
import TeahouseFoodPhoto from "@/assets/photos/Itinerary_Day2_Teahouse_Food.jpg";
import DoveAreaPhoto from "@/assets/photos/Itinerary_Day2_Dove_Area.jpg";
import DoveHousePhoto from "@/assets/photos/Itinerary_Day2_Dove_House.jpg";
import ForestBernardPhoto from "@/assets/photos/Itinerary_Day2_Forest_Bernard.jpg";
import ForestMarcusPhoto from "@/assets/photos/Itinerary_Day2_Forest_Marcus.jpg";
import DragonPhoto from "@/assets/photos/Itinerary_Day2_Dragon.jpg";
import GapEntrancePhoto from "@/assets/photos/Itinerary_Day2_Gap_Entrance.jpg";
import GapAreaPhoto from "@/assets/photos/Itinerary_Day2_Gap_Area.jpg";
import GapDrinkPhoto from "@/assets/photos/Itinerary_Day2_Gap_Drink.jpg";
import ParkRewardsPhoto from "@/assets/photos/Itinerary_Day2_Park_Rewards.jpg";
import HefangStreetPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet.jpg";
import HefangStreetSkewersPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet_Skewers.jpg";
import HefangStreetPasteryPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet_Pastery.jpg";

export const ItineraryDay2Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 2</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          25 November 2025
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
        <PageContainerItemMedia
          data={[
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetHotPhoto,
                alt: "Hotel Buffet Hot Snacks",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetSidesPhoto,
                alt: "Hotel Buffet Sides",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetDrinkPhoto,
                alt: "Hotel Buffet Drinks",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetPorridgePhoto,
                alt: "Hotel Buffet Porridge",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetCookPhoto,
                alt: "Hotel Buffet Chefs",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetVegetablesPhoto,
                alt: "Hotel Buffet Vegetables",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetIcePhoto,
                alt: "Hotel Buffet Cold Food",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetSoupPhoto,
                alt: "Hotel Buffet Soup",
              },
              className: "col-span-6 md:col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetPasteriesPhoto,
                alt: "Hotel Buffet Pasteries",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: HotelBuffetSteamPhoto,
                alt: "Hotel Buffet Warm Food",
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
                src: OmgParkTogetherPhoto,
                alt: "OMG Heartbeat Park Wefie",
              },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: {
                src: OmgParkMascotPhoto,
                alt: "OMG Heartbeat Park Entrance",
              },
              className: "col-span-4",
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
                src: OmgParkTotemPhoto,
                alt: "OMG Heartbeat Park Totem",
              },
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
              media: {
                src: BoatEntrancePhoto,
                alt: "Boat Boarding Entrance",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: BoatBoardingPhoto,
                alt: "Boat Boarding Area",
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
                src: AltarPhoto,
                alt: "Altar in the cave",
              },
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
              media: {
                src: BuddhaPhoto,
                alt: "Buddha Mural",
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
                src: CaveInspectorPhoto,
                alt: "Cave Inspector",
              },
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
              media: {
                src: CaveSceneryPhoto,
                alt: "Scenery inside the cave",
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
                src: CaveRewardPhoto,
                alt: "Rewards from completing Cave Exploration",
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
                src: LiftPhoto,
                alt: "Raised Seated Travelator",
              },
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
              type: MediaType.ImageComparison,
              media: {
                first: {
                  src: BernardWingPhoto,
                  alt: "Bernard with Wings",
                },
                second: {
                  src: GalbrenaImage,
                  alt: "Galbrena",
                },
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
                src: GlassBridgePhoto,
                alt: "Glass Bridge",
              },
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
              media: {
                src: LittlePrincePhoto,
                alt: "Little Prince",
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
                src: GlassBridgeOverviewPhoto,
                alt: "Glass Structures in a distance",
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
                src: CliffSwingPhoto,
                alt: "Cliff Swing",
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
                src: AstronautPhoto,
                alt: "Astronaut",
              },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: {
                src: AstronautTouchPhoto,
                alt: "Touching the Astronaut",
              },
              className: "col-span-4",
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
                src: ObservatoryMarcusPhoto,
                alt: "Marcus at the Observatory",
              },
              className: "col-span-4",
            },
            {
              type: MediaType.Image,
              media: {
                src: ObservatoryBernardPhoto,
                alt: "Bernard at the Observatory",
              },
              className: "col-span-8",
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
                src: WaterEntrancePhoto,
                alt: "Water Ride Entrance",
              },
              className: "col-span-6 row-span-2",
            },
            {
              type: MediaType.Image,
              media: {
                src: WaterBackStoryPhoto,
                alt: "Background story for Water Ride",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: WaterBoatPhoto,
                alt: "Boats used in Water Ride",
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
                src: WaterTogetherPhoto,
                alt: "Photo captured during Water Ride",
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
                src: WaterDryerPhoto,
                alt: "Hair Dryer",
              },
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
              media: {
                src: TeahousePhoto,
                alt: "Qingzhao Tea House",
              },
              className: "col-span-8",
            },
            {
              type: MediaType.Image,
              media: {
                src: TeahouseFoodPhoto,
                alt: "Qingzhao Tea House Food",
              },
              className: "col-span-4",
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
                src: DoveAreaPhoto,
                alt: "Dove Attraction",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: DoveHousePhoto,
                alt: "Dove House",
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
                src: ForestBernardPhoto,
                alt: "Bernard in Forest Challenge",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: ForestMarcusPhoto,
                alt: "Marcus in Forest Challenge",
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
                src: DragonPhoto,
                alt: "Running away from Dragon",
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
                src: GapEntrancePhoto,
                alt: "GAP Entrance",
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
                src: GapAreaPhoto,
                alt: "GAP Area",
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
                src: GapDrinkPhoto,
                alt: "Cafe Drinks",
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
                src: ParkRewardsPhoto,
                alt: "Rewards from completing various challenges at OMG Heartbeat Park",
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
                src: HefangStreetPhoto,
                alt: "Hefang Street",
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
                src: HefangStreetSkewersPhoto,
                alt: "Skewers",
              },
              className: "col-span-6",
            },
            {
              type: MediaType.Image,
              media: {
                src: HefangStreetPasteryPhoto,
                alt: "Pasteries",
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
      </PageContainer>
    </Page>
  );
};
