import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: TrainBoardPhoto, alt: "Train Timings"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: HotelPhoto, alt: "Hotel"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[HotelRoomOverviewPhoto, HotelBedroomPhoto, HotelBathroomPhoto, HotelToiletPhoto, HotelRoomCardPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[BeefNoodleShopPhoto, BeefNoodleOriginalPhoto, BeefNoodleMarrowPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[NeoWorldPhoto, NeoWorldMapPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: ArknightsContainerPhoto, alt: "Arknights Container"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: ConsoleControllerPhoto, alt: "Life-sized Controller"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[TrashbinFlexPhoto, TrashbinFoldArmPhoto, TrashbinBowPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CakePhoto, alt: "HSR Cake"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: PolluxPhoto, alt: "HSR Pollux"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SamPhoto, alt: "HSR Sam"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[TrashbinSitPhoto, ArknightStandeePhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: MihoyoShopPhoto, alt: "Mihoyo Shop"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: TeashopPhoto, alt: "Tea Shop"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[CrabSoupDumplingShopPhoto, CrabSoupDumplingFoodPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[DaHuChunShopPhoto, DaHuChunFoodPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[FoodStreetPhoto, FoodStreetFoodPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BundPhoto, alt: "The Bund Night Skyline"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BuildingPhoto, alt: "Building"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[BernardTaxiPhoto, BernardSitPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: ChristmasMarketPhoto, alt: "Christmas Market"}} />
      </PageContainer>
    </Page>
  );
}