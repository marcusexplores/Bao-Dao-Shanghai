import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemImage } from "@/components/page/PageContainerItemImage";
import { PageHeadline } from "@/components/page/PageHeadline";
import Breakfast from "@/assets/photos/Itinerary_Day4_Breakfast.jpg";
import SnowWorld from "@/assets/photos/Itinerary_Day4_SnowWorld.jpg";
import SnowWorldGroundFloor from "@/assets/photos/Itinerary_Day4_SnowWorld_GroundFloor.jpg";
import SnowWorldGroundFloorTogether from "@/assets/photos/Itinerary_Day4_SnowWorld_GroundFloor_Together.jpg";
import LakeLogo from "@/assets/photos/Itinerary_Day4_Lake_Logo.jpg";
import LakeBikeTogether from "@/assets/photos/Itinerary_Day4_Lake_Bike_Together.jpg";
import Carlowitz from "@/assets/photos/Itinerary_Day4_Carlowitz.jpg";
import Mural from "@/assets/photos/Itinerary_Day4_Mural.jpg";
import JiChangXingLogo from "@/assets/photos/Itinerary_Day4_JiChangXing_Logo.jpg";
import JiChangXingCrabNoodles from "@/assets/photos/Itinerary_Day4_JiChangXing_CrabNoodles.jpg";
import JiChangXingMeat from "@/assets/photos/Itinerary_Day4_JiChangXing_Meat.jpg";
import JiChangXingDumpling from "@/assets/photos/Itinerary_Day4_JiChangXing_Dumpling.jpg";
import JiChangXingEel from "@/assets/photos/Itinerary_Day4_JiChangXing_Eel.jpg";
import JiChangXingFish from "@/assets/photos/Itinerary_Day4_JiChangXing_Fish.jpg";
import BailianSega from "@/assets/photos/Itinerary_Day4_Bailian_Sega.jpg";
import BailianJump from "@/assets/photos/Itinerary_Day4_Bailian_Jump.jpg";
import BailianDsDisplay from "@/assets/photos/Itinerary_Day4_Bailian_DS_Display.jpg";
import BailianDsStandee from "@/assets/photos/Itinerary_Day4_Bailian_DS_Standee.jpg";
import BailianDsNakime from "@/assets/photos/Itinerary_Day4_Bailian_DS_Nakime.jpg";
import BailianDsWall from "@/assets/photos/Itinerary_Day4_Bailian_DS_Wall.jpg";
import BailianDsStandeeMini from "@/assets/photos/Itinerary_Day4_Bailian_DS_Standee_Mini.jpg";
import BrownDust from "@/assets/photos/Itinerary_Day4_Bailian_BrownDust.jpg";
import PgrOverview from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Overview.jpg";
import PgrFilm from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Film.jpg";
import PgrCard1 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Card1.jpg";
import PgrCard2 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Card2.jpg";
import PgrBadge1 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge1.jpg";
import PgrBadge2 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge2.jpg";
import PgrBadge3 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge3.jpg";
import PgrBadge4 from "@/assets/photos/Itinerary_Day4_Bailian_Pgr_Badge4.jpg";
import TeaShop from "@/assets/photos/Itinerary_Day4_Tea_Shop.jpg";
import Tea from "@/assets/photos/Itinerary_Day4_Tea.jpg";
import Luggage from "@/assets/photos/Itinerary_Day4_Luggage.jpg";

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
        <PageContainerItemImage images={[Breakfast]} />
        <PageContainerItemImage images={[SnowWorld]} />
        <PageContainerItemImage images={[SnowWorldGroundFloor]} />
        <PageContainerItemImage images={[SnowWorldGroundFloorTogether]} />
        <PageContainerItemImage images={[LakeLogo]} />
        <PageContainerItemImage images={[LakeBikeTogether]} />
        <PageContainerItemImage images={[Carlowitz]} />
        <PageContainerItemImage images={[Mural]} />
        <PageContainerItemImage images={[JiChangXingLogo]} />
        <PageContainerItemImage images={[JiChangXingCrabNoodles]} />
        <PageContainerItemImage images={[JiChangXingMeat]} />
        <PageContainerItemImage images={[JiChangXingDumpling]} />
        <PageContainerItemImage images={[JiChangXingEel]} />
        <PageContainerItemImage images={[JiChangXingFish]} />
        <PageContainerItemImage images={[BailianSega]} />
        <PageContainerItemImage images={[BailianJump]} />
        <PageContainerItemImage images={[BailianDsDisplay]} />
        <PageContainerItemImage images={[BailianDsStandee]} />
        <PageContainerItemImage images={[BailianDsNakime]} />
        <PageContainerItemImage images={[BailianDsWall]} />
        <PageContainerItemImage images={[BailianDsStandeeMini]} />
        <PageContainerItemImage images={[BrownDust]} />
        <PageContainerItemImage images={[PgrOverview]} />
        <PageContainerItemImage images={[PgrFilm]} />
        <PageContainerItemImage images={[PgrCard1]} />
        <PageContainerItemImage images={[PgrCard2]} />
        <PageContainerItemImage images={[PgrBadge1]} />
        <PageContainerItemImage images={[PgrBadge2]} />
        <PageContainerItemImage images={[PgrBadge3]} />
        <PageContainerItemImage images={[PgrBadge4]} />
        <PageContainerItemImage images={[TeaShop]} />
        <PageContainerItemImage images={[Tea]} />
        <PageContainerItemImage images={[Luggage]} />
      </PageContainer>
    </Page>
  );
}