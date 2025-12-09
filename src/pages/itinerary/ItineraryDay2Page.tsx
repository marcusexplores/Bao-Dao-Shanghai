import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import HotelBuffetHot from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Hot.jpg";
import HotelBuffetSides from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Sides.jpg";
import HotelBuffetDrink from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Drink.jpg";
import HotelBuffetPorridge from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Porridge.jpg";
import HotelBuffetCook from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Cook.jpg";
import HotelBuffetVegetables from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Vegetables.jpg";
import HotelBuffetIce from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Ice.jpg";
import HotelBuffetSoup from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Soup.jpg";
import HotelBuffetPasteries from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Pasteries.jpg";
import HotelBuffetSteam from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Steam.jpg";
import OmgParkTogether from "@/assets/photos/Itinerary_Day2_Omg_Together.jpg";
import OmgParkMascot from "@/assets/photos/Itinerary_Day2_Omg_Mascot.jpg";
import OmgParkTotem from "@/assets/photos/Itinerary_Day2_Omg_Totem.jpg";
import BoatEntrance from "@/assets/photos/Itinerary_Day2_BoatEntrance.jpg";
import BoatBoarding from "@/assets/photos/Itinerary_Day2_BoatBoarding.jpg";
import Altar from "@/assets/photos/Itinerary_Day2_Altar.jpg";
import Buddha from "@/assets/photos/Itinerary_Day2_Buddha.jpg";
import CaveInspector from "@/assets/photos/Itinerary_Day2_Cave_Inspector.jpg";
import CaveScenery from "@/assets/photos/Itinerary_Day2_Cave_Scenery.jpg";
import CaveReward from "@/assets/photos/Itinerary_Day2_Cave_Reward.jpg";
import Lift from "@/assets/photos/Itinerary_Day2_Lift.jpg";
import Wing_Bernard from "@/assets/photos/Itinerary_Day2_Wing_Bernard.jpg";
import GlassBridge from "@/assets/photos/Itinerary_Day2_GlassBridge.jpg";
import LittlePrince from "@/assets/photos/Itinerary_Day2_LittlePrince.jpg";
import GlassBridgeOverview from "@/assets/photos/Itinerary_Day2_GlassBridge_Overview.jpg";
import CliffSwing from "@/assets/photos/Itinerary_Day2_CliffSwing.jpg";
import Astronaut from "@/assets/photos/Itinerary_Day2_Astronaut.jpg";
import AstronautTouch from "@/assets/photos/Itinerary_Day2_Astronaut_Touch.jpg";
import ObservatoryBernard from "@/assets/photos/Itinerary_Day2_Observatory_Bernard.jpg";
import ObservatoryMarcus from "@/assets/photos/Itinerary_Day2_Observatory_Marcus.jpg";
import WaterEntrance from "@/assets/photos/Itinerary_Day2_Water_Entrance.jpg";
import WaterBackStory from "@/assets/photos/Itinerary_Day2_Water_BackStory.jpg";
import WaterBoat from "@/assets/photos/Itinerary_Day2_Water_Boat.jpg";
import WaterTogether from "@/assets/photos/Itinerary_Day2_Water_Together.jpg";
import WaterDryer from "@/assets/photos/Itinerary_Day2_Water_Dryer.jpg";
import Teahouse from "@/assets/photos/Itinerary_Day2_Teahouse.jpg";
import TeahouseFood from "@/assets/photos/Itinerary_Day2_Teahouse_Food.jpg";
import DoveArea from "@/assets/photos/Itinerary_Day2_Dove_Area.jpg";
import DoveHouse from "@/assets/photos/Itinerary_Day2_Dove_House.jpg";
import ForestBernard from "@/assets/photos/Itinerary_Day2_Forest_Bernard.jpg";
import ForestMarcus from "@/assets/photos/Itinerary_Day2_Forest_Marcus.jpg";
import Dragon from "@/assets/photos/Itinerary_Day2_Dragon.jpg";
import GapEntrance from "@/assets/photos/Itinerary_Day2_Gap_Entrance.jpg";
import GapArea from "@/assets/photos/Itinerary_Day2_Gap_Area.jpg";
import GapDrink from "@/assets/photos/Itinerary_Day2_Gap_Drink.jpg";
import ParkRewards from "@/assets/photos/Itinerary_Day2_Park_Rewards.jpg";
import HefangStreet from "@/assets/photos/Itinerary_Day2_HefangStreet.jpg";
import HefangStreetSkewers from "@/assets/photos/Itinerary_Day2_HefangStreet_Skewers.jpg";
import HefangStreetPastery from "@/assets/photos/Itinerary_Day2_HefangStreet_Pastery.jpg";


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
        <PageContainerItemImage images={[HotelBuffetHot, HotelBuffetSides, HotelBuffetDrink, HotelBuffetPorridge, HotelBuffetCook, HotelBuffetVegetables, HotelBuffetIce, HotelBuffetSoup, HotelBuffetPasteries, HotelBuffetSteam]} />
        <PageContainerItemImage images={[OmgParkTogether, OmgParkMascot]} />
        <PageContainerItemImage images={[OmgParkTotem]} />
        <PageContainerItemImage images={[BoatEntrance, BoatBoarding]} />
        <PageContainerItemImage images={[Altar]} />
        <PageContainerItemImage images={[Buddha]} />
        <PageContainerItemImage images={[CaveInspector]} />
        <PageContainerItemImage images={[CaveScenery]} />
        <PageContainerItemImage images={[CaveReward]} />
        <PageContainerItemImage images={[Lift]} />
        <PageContainerItemImage images={[Wing_Bernard]} />
        <PageContainerItemImage images={[GlassBridge]} />
        <PageContainerItemImage images={[LittlePrince]} />
        <PageContainerItemImage images={[GlassBridgeOverview]} />
        <PageContainerItemImage images={[CliffSwing]} />
        <PageContainerItemImage images={[Astronaut, AstronautTouch]} />
        <PageContainerItemImage images={[ObservatoryBernard, ObservatoryMarcus]} />
        <PageContainerItemImage images={[WaterEntrance]} />
        <PageContainerItemImage images={[WaterBackStory]} />
        <PageContainerItemImage images={[WaterBoat]} />
        <PageContainerItemImage images={[WaterTogether]} />
        <PageContainerItemImage images={[WaterDryer]} />
        <PageContainerItemImage images={[Teahouse, TeahouseFood]} />
        <PageContainerItemImage images={[DoveArea, DoveHouse]} />
        <PageContainerItemImage images={[ForestBernard, ForestMarcus]} />
        <PageContainerItemImage images={[Dragon]} />
        <PageContainerItemImage images={[GapEntrance]} />
        <PageContainerItemImage images={[GapArea]} />
        <PageContainerItemImage images={[GapDrink]} />
        <PageContainerItemImage images={[ParkRewards]} />
        <PageContainerItemImage images={[HefangStreet]} />
        <PageContainerItemImage images={[HefangStreetSkewers, HefangStreetPastery]} />
      </PageContainer>
    </Page>
  );
};
