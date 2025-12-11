import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import TrainBoard from "@/assets/photos/Itinerary_Day3_Train_Board.jpg";
import Hotel from "@/assets/photos/Itinerary_Day3_Hotel.jpg";
import HotelRoomOverview from "@/assets/photos/Itinerary_Day3_Hotel_Room_Overview.jpg";
import HotelBedroom from "@/assets/photos/Itinerary_Day3_Hotel_Room_Bedroom.jpg";
import HotelBathroom from "@/assets/photos/Itinerary_Day3_Hotel_Room_Bathroom.jpg";
import HotelToilet from "@/assets/photos/Itinerary_Day3_Hotel_Room_Toilet.jpg";
import HotelRoomCard from "@/assets/photos/Itinerary_Day3_Hotel_Room_Card.jpg";
import BeefNoodleShop from "@/assets/photos/Itinerary_Day3_BeefNoodle_Shop.jpg";
import BeefNoodleOriginal from "@/assets/photos/Itinerary_Day3_BeefNoodle_Original.jpg";
import BeefNoodleMarrow from "@/assets/photos/Itinerary_Day3_BeefNoodle_Marrow.jpg";
import NeoWorld from "@/assets/photos/Itinerary_Day3_NeoWorld.jpg";
import NeoWorldMap from "@/assets/photos/Itinerary_Day3_NeoWorld_Map.jpg";
import ArknightsContainer from "@/assets/photos/Itinerary_Day3_NeoWorld_Arknights.jpg";
import ConsoleController from "@/assets/photos/Itinerary_Day3_NeoWorld_Controller.jpg";
import TrashbinFlex from "@/assets/photos/Itinerary_Day3_Trashbin_Flex.jpg";
import TrashbinFoldArm from "@/assets/photos/Itinerary_Day3_Trashbin_FoldArm.jpg";
import TrashbinBow from "@/assets/photos/Itinerary_Day3_Trashbin_Bow.jpg";
import Cake from "@/assets/photos/Itinerary_Day3_Cake.jpg";
import Pollux from "@/assets/photos/Itinerary_Day3_Pollux.jpg";
import Sam from "@/assets/photos/Itinerary_Day3_Sam.jpg";
import TrashbinSit from "@/assets/photos/Itinerary_Day3_Trashbin_Sit.jpg";
import ArknightStandee from "@/assets/photos/Itinerary_Day3_Arknights_Standee.jpg";
import MihoyoShop from "@/assets/photos/Itinerary_Day3_Mihoyo.jpg";
import Teashop from "@/assets/photos/Itinerary_Day3_TeaShop.jpg";
import CrabSoupDumplingShop from "@/assets/photos/Itinerary_Day3_CrabSoupDumpling_Shop.jpg";
import CrabSoupDumplingFood from "@/assets/photos/Itinerary_Day3_CrabSoupDumpling_Food.jpg";
import DaHuChunShop from "@/assets/photos/Itinerary_Day3_DaHuChun_Shop.jpg";
import DaHuChunFood from "@/assets/photos/Itinerary_Day3_DaHuChun_Food.jpg";
import FoodStreet from "@/assets/photos/Itinerary_Day3_FoodStreet.jpg";
import FoodStreetFood from "@/assets/photos/Itinerary_Day3_FoodStreet_Food.jpg";
import Bund from "@/assets/photos/Itinerary_Day3_Bund.jpg";
import Building from "@/assets/photos/Itinerary_Day3_Building.jpg";
import BernardTaxi from "@/assets/photos/Itinerary_Day3_Bernard_Taxi.jpg";
import BernardSit from "@/assets/photos/Itinerary_Day3_Bernard_Sit.jpg";
import ChristmasMarket from "@/assets/photos/Itinerary_Day3_ChristmasMarket.jpg";

export const ItineraryDay3Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 3</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          26 November 2025
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
        <PageContainerItemImage images={[TrainBoard]} />
        <PageContainerItemImage images={[Hotel]} />
        <PageContainerItemImage images={[HotelRoomOverview, HotelBedroom, HotelBathroom, HotelToilet, HotelRoomCard]} />
        <PageContainerItemImage images={[BeefNoodleShop, BeefNoodleOriginal, BeefNoodleMarrow]} />
        <PageContainerItemImage images={[NeoWorld, NeoWorldMap]} />
        <PageContainerItemImage images={[ArknightsContainer]} />
        <PageContainerItemImage images={[ConsoleController]} />
        <PageContainerItemImage images={[TrashbinFlex, TrashbinFoldArm, TrashbinBow]} />
        <PageContainerItemImage images={[Cake]} />
        <PageContainerItemImage images={[Pollux]} />
        <PageContainerItemImage images={[Sam]} />
        <PageContainerItemImage images={[TrashbinSit, ArknightStandee]} />
        <PageContainerItemImage images={[MihoyoShop]} />
        <PageContainerItemImage images={[Teashop]} />
        <PageContainerItemImage images={[CrabSoupDumplingShop, CrabSoupDumplingFood]} />
        <PageContainerItemImage images={[DaHuChunShop, DaHuChunFood]} />
        <PageContainerItemImage images={[FoodStreet, FoodStreetFood]} />
        <PageContainerItemImage images={[Bund]} />
        <PageContainerItemImage images={[Building]} />
        <PageContainerItemImage images={[BernardTaxi, BernardSit]} />
        <PageContainerItemImage images={[ChristmasMarket]} />
      </PageContainer>
    </Page>
  );
}