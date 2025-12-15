import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import { mediaContainerVariant } from "@/components/page/constants";
import BreakfastPhoto from "@/assets/photos/Itinerary_Day4_Breakfast.jpg";
import SnowWorldPhoto from "@/assets/photos/Itinerary_Day4_SnowWorld.jpg";
import SnowWorldGroundFloorPhoto from "@/assets/photos/Itinerary_Day4_SnowWorld_GroundFloor.jpg";
import SnowWorldGroundFloorWefiePhoto from "@/assets/photos/Itinerary_Day4_SnowWorld_GroundFloor_Together.jpg";
import LakeLogoPhoto from "@/assets/photos/Itinerary_Day4_Lake_Logo.jpg";
import LakeBikeTogetherPhoto from "@/assets/photos/Itinerary_Day4_Lake_Bike_Together.jpg";
import CarlowitzPhoto from "@/assets/photos/Itinerary_Day4_Carlowitz.jpg";
import MuralPhoto from "@/assets/photos/Itinerary_Day4_Mural.jpg";
import JiChangXingLogoPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_Logo.jpg";
import JiChangXingCrabNoodlesPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_CrabNoodles.jpg";
import JiChangXingMeatPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_Meat.jpg";
import JiChangXingDumplingPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_Dumpling.jpg";
import JiChangXingEelPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_Eel.jpg";
import JiChangXingFishPhoto from "@/assets/photos/Itinerary_Day4_JiChangXing_Fish.jpg";
import BailianSegaPhoto from "@/assets/photos/Itinerary_Day4_Bailian_Sega.jpg";
import BailianJumpPhoto from "@/assets/photos/Itinerary_Day4_Bailian_Jump.jpg";
import BailianDsDisplayPhoto from "@/assets/photos/Itinerary_Day4_Bailian_DS_Display.jpg";
import BailianDsStandeePhoto from "@/assets/photos/Itinerary_Day4_Bailian_DS_Standee.jpg";
import BailianDsNakimePhoto from "@/assets/photos/Itinerary_Day4_Bailian_DS_Nakime.jpg";
import BailianDsWallPhoto from "@/assets/photos/Itinerary_Day4_Bailian_DS_Wall.jpg";
import BailianDsStandeeMiniPhoto from "@/assets/photos/Itinerary_Day4_Bailian_DS_Standee_Mini.jpg";
import BrownDustPhoto from "@/assets/photos/Itinerary_Day4_Bailian_BrownDust.jpg";
import PgrOverviewPhoto from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Overview.jpg";
import PgrFilmPhoto from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Film.jpg";
import PgrCard1Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Card1.jpg";
import PgrCard2Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Card2.jpg";
import PgrBadge1Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge1.jpg";
import PgrBadge2Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge2.jpg";
import PgrBadge3Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge3.jpg";
import PgrBadge4Photo from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge4.jpg";
import TeaShopPhoto from "@/assets/photos/Itinerary_Day4_Tea_Shop.jpg";
import TeaPhoto from "@/assets/photos/Itinerary_Day4_Tea.jpg";
import LuggagePhoto from "@/assets/photos/Itinerary_Day4_Luggage.jpg";

export const ItineraryDay4Page = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Day 4</PageHeadline>
        <PageContainerItem className="flex justify-center items-center">
          27 November 2025
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
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BreakfastPhoto, alt: "Breakfast"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SnowWorldPhoto, alt: "Snow World"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SnowWorldGroundFloorPhoto, alt: "Snow World Ground Floor"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: SnowWorldGroundFloorWefiePhoto, alt: "Snow World Wefie"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LakeLogoPhoto, alt: "Dishui Lake"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LakeBikeTogetherPhoto, alt: "Cycling at Dishui Lake"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: CarlowitzPhoto, alt: "Carlowitz"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: MuralPhoto, alt: "Mural"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: JiChangXingLogoPhoto, alt: "Ji Chang Xing"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Quilt} data={[
            {
              data: {src: JiChangXingCrabNoodlesPhoto, alt: "Crab Noodles"},
              cols: 1,
              rows: 1,
            },
            {
              data: {src: JiChangXingMeatPhoto, alt: "Meat"},
              cols: 1,
              rows: 1,
            },
            {
              data: {src: JiChangXingDumplingPhoto, alt: "Dumpling"},
              cols: 1,
              rows: 2,
            },
            {
              data: {src: JiChangXingEelPhoto, alt: "Eel"},
              cols: 1,
              rows: 2,
            },
            {
              data: {src: JiChangXingFishPhoto, alt: "Squirrel Fish"},
              cols: 1,
              rows: 1,
            },
          ]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[BailianSegaPhoto, BailianJumpPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[BailianDsDisplayPhoto, BailianDsStandeePhoto, BailianDsNakimePhoto, BailianDsWallPhoto, BailianDsStandeeMiniPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: BrownDustPhoto, alt: "Hotel"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: PgrOverviewPhoto, alt: "Hotel"}} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[PgrFilmPhoto, PgrCard1Photo, PgrCard2Photo, PgrBadge1Photo, PgrBadge2Photo, PgrBadge3Photo, PgrBadge4Photo]} />
        <PageContainerItemImage variant={mediaContainerVariant.Masonry} data={[TeaShopPhoto, TeaPhoto]} />
        <PageContainerItemImage variant={mediaContainerVariant.Image} data={{src: LuggagePhoto, alt: "Luggage"}} />
      </PageContainer>
    </Page>
  );
};
