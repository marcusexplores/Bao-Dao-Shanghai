import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
import AirportConnectingTrainPhoto from "@/assets/photos/Itinerary_Day1_AirportConnectingTrain.jpg";
import AirportLinkTrainPhoto from "@/assets/photos/Itinerary_Day1_AirportLinkTrain.jpg";
import HotelPhoto from "@/assets/photos/Itinerary_Day1_Hotel.jpg";
import HotelBedPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Bed.jpg";
import HotelFoyerPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Foyer.jpg";
import HotelShowerPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Shower.jpg";
import HotelToiletPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Toilet.jpg";
import ZhiWeiGuanPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan.jpg";
import ZhiWeiGuanWefiePhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Wefie.jpg";
import ZhiWeiGuanMenuPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Menu.jpg";
import ZhiWeiGuanFoodPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Food.jpg";
import ZhiWeiGuanPasteriesPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Pasteries.jpg";
import IAmAtHangzhouPhoto from "@/assets/photos/Itinerary_Day1_IAmAtHangzhou.jpg";
import WaterCalligraphyPhoto from "@/assets/photos/Itinerary_Day1_WaterCalligraphy.jpg";
import SausagePhoto from "@/assets/photos/Itinerary_Day1_XiHuLiWu_Sausage.jpg";
import YuJinFangPhoto from "@/assets/photos/Itinerary_Day1_YuJinFang.jpg";
import DragonBoatPhoto from "@/assets/photos/Itinerary_Day1_Boat_Dragon.jpg";
import FruitTeaPhoto from "@/assets/photos/Itinerary_Day1_FruitTea.jpg";
import BaidiPhoto from "@/assets/photos/Itinerary_Day1_BaiDi.jpg";
import TowerPhoto from "@/assets/photos/Itinerary_Day1_Solo_Tower.jpg";
import MarblePlaquePhoto from "@/assets/photos/Itinerary_Day1_PingHuQiuYue_MarblePlaque.jpg";
import TotemPhoto from "@/assets/photos/Itinerary_Day1_PingHuQiuYue_Totem.jpg";
import SkewerPhoto from "@/assets/photos/Itinerary_Day1_Skewer.jpg";
import YueWangLangPhoto from "@/assets/photos/Itinerary_Day1_YueWangLang.jpg";
import HutPhoto from "@/assets/photos/Itinerary_Day1_Solo_Hut.jpg";
import RiverCruisePhoto from "@/assets/photos/Itinerary_Day1_Boat_RiverCruise.jpg";
import RiverPhoto from "@/assets/photos/Itinerary_Day1_Solo_River.jpg";
import StatueGroupPhoto from "@/assets/photos/Itinerary_Day1_Statue_Group.jpg";
import StatueBarrelPhoto from "@/assets/photos/Itinerary_Day1_Statue_Barrel.jpg";
import StatueWaitressPhoto from "@/assets/photos/Itinerary_Day1_Statue_Waitress.jpg";
import WulinNightMarketPhoto from "@/assets/photos/Itinerary_Day1_Wulin_NightMarket.jpg";
import WulinStoryPhoto from "@/assets/photos/Itinerary_Day1_Wulin_Story.jpg";
import WulinStoryFood1Photo from "@/assets/photos/Itinerary_Day1_Wulin_Story_Food1.jpg";
import WulinStoryFood2Photo from "@/assets/photos/Itinerary_Day1_Wulin_Story_Food2.jpg";

export const ItineraryDay1Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 1</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          24 November 2025
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: AirportConnectingTrainPhoto, alt: "Aiport Connecting Train"}} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: AirportLinkTrainPhoto, alt: "Aiport Link"}} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: HotelPhoto, alt: "Hotel"}} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[HotelBedPhoto, HotelFoyerPhoto, HotelShowerPhoto, HotelToiletPhoto]} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[ZhiWeiGuanPhoto, ZhiWeiGuanWefiePhoto]} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[ZhiWeiGuanMenuPhoto, ZhiWeiGuanFoodPhoto]} />
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: ZhiWeiGuanPasteriesPhoto, alt: "Zhi Wei Guan Pasteries"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: IAmAtHangzhouPhoto, alt: "Hangzhou Promotional Banner"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WaterCalligraphyPhoto, alt: "Water Calligraphy"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SausagePhoto, alt: "Sausage"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: YuJinFangPhoto, alt: "Yu Jin Fang"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: DragonBoatPhoto, alt: "Boat with dragon shape"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: FruitTeaPhoto, alt: "Fruit Tea"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BaidiPhoto, alt: "Bai Di"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: TowerPhoto, alt: "Tower"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[MarblePlaquePhoto, TotemPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SkewerPhoto, alt: "Skewers"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: YueWangLangPhoto, alt: "Yue Wang Lang"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: HutPhoto, alt: "Hut"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[RiverCruisePhoto, RiverPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[StatueGroupPhoto, StatueBarrelPhoto, StatueWaitressPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: WulinNightMarketPhoto, alt: "Wulin Night Market"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[WulinStoryPhoto, WulinStoryFood1Photo, WulinStoryFood2Photo]} />
      </PageContainer>
    </Page>
  );
};
