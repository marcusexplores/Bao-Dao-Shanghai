import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[HotelBuffetHotPhoto, HotelBuffetSidesPhoto, HotelBuffetDrinkPhoto, HotelBuffetPorridgePhoto, HotelBuffetCookPhoto, HotelBuffetVegetablesPhoto, HotelBuffetIcePhoto, HotelBuffetSoupPhoto, HotelBuffetPasteriesPhoto, HotelBuffetSteamPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[OmgParkTogetherPhoto, OmgParkMascotPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: OmgParkTotemPhoto, alt: "Park Totem"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[BoatEntrancePhoto, BoatBoardingPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: AltarPhoto, alt: "Altar"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BuddhaPhoto, alt: "Buddha"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CaveInspectorPhoto, alt: "Cave Inspector"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CaveSceneryPhoto, alt: "Scenery inside the cave"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CaveRewardPhoto, alt: "Rewards from completing Cave Exploration"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LiftPhoto, alt: "Lift"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BernardWingPhoto, alt: "Wings"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: GlassBridgePhoto, alt: "Glass Bridge"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LittlePrincePhoto, alt: "Little Prince"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: GlassBridgeOverviewPhoto, alt: "Glass Bridge"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CliffSwingPhoto, alt: "Cliff Swing"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[AstronautPhoto, AstronautTouchPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[ObservatoryBernardPhoto, ObservatoryMarcusPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterEntrancePhoto, alt: "Water Ride Entrance"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterBackStoryPhoto, alt: "Background story for Water Ride"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterBoatPhoto, alt: "Boats used in Water Ride"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterTogetherPhoto, alt: "Photo captured during Water Ride"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterDryerPhoto, alt: "Hair Dryer"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[TeahousePhoto, TeahouseFoodPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[DoveAreaPhoto, DoveHousePhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[ForestBernardPhoto, ForestMarcusPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: DragonPhoto, alt: "Dragon"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: GapEntrancePhoto, alt: "Entrance to GAP"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: GapAreaPhoto, alt: "GAP Area"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: GapDrinkPhoto, alt: "Cafe drinks"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: ParkRewardsPhoto, alt: "Rewards"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: HefangStreetPhoto, alt: "Hefang Street"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[HefangStreetSkewersPhoto, HefangStreetPasteryPhoto]} />
      </PageContainer>
    </Page>
  );
};
