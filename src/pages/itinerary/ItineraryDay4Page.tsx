import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { MediaType } from "@/components/page/constants";
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
              src: BreakfastPhoto,
              alt: "Porridge and sesame flatbread",
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
              src: SnowWorldPhoto,
              alt: "Snow World",
            },
            className: "col-span-full",
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
              src: SnowWorldGroundFloorPhoto,
              alt: "Snow World Ground Floor",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SnowWorldGroundFloorWefiePhoto,
              alt: "Snow World Wefie",
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
              src: LakeLogoPhoto,
              alt: "Dishui Lake",
            },
            className: "col-span-full",
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
              src: LakeBikeTogetherPhoto,
              alt: "Cycling at Dishui Lake",
            },
            className: "col-span-full",
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
              src: CarlowitzPhoto,
              alt: "Carlowitz",
            },
            className: "col-span-full",
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
              src: MuralPhoto,
              alt: "Brick architecture in downtown Shanghai",
            },
            className: "col-span-full",
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
              src: JiChangXingLogoPhoto,
              alt: "Ji Chang Xing",
            },
            className: "col-span-full",
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
              src: JiChangXingCrabNoodlesPhoto,
              alt: "Crab Noodles",
            },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: JiChangXingFishPhoto, alt: "Squirrel Fish" },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: JiChangXingMeatPhoto, alt: "Braised Pork Belly" },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: JiChangXingDumplingPhoto, alt: "Steamed bi-color dumplings" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: JiChangXingEelPhoto, alt: "Glazed and crispy fried eels" },
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
              src: BailianSegaPhoto,
              alt: "Bailian ZX Sega Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianJumpPhoto,
              alt: "Bailian ZX Jump Shop",
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
              src: BailianDsDisplayPhoto,
              alt: "Demon Slayer Display at the atrium",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianDsWallPhoto,
              alt: "Demon Slayer Wall Image Fames",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianDsStandeePhoto,
              alt: "Demon Slayer Life-sized Standees",
            },
            className: "col-span-6 md:col-start-5 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: BailianDsNakimePhoto, alt: "Demon Slayer Nakime" },
            className: "col-span-6 row-span-2 md:col-start-9 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianDsStandeeMiniPhoto,
              alt: "Demon Slayer Mini Standees",
            },
            className: "col-span-6 md:col-start-1 md:col-span-4",
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
              src: BrownDustPhoto,
              alt: "Brown Dust",
            },
            className: "col-span-full",
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
              src: PgrOverviewPhoto,
              alt: "PGR Merchandise Overview",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrFilmPhoto,
              alt: "PGR Film Merchandise",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrCard1Photo,
              alt: "PGR Postcards 1",
            },
            className: "col-span-6 md:col-start-1 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: PgrCard2Photo, alt: "PGR Postcards 2" },
            className: "col-span-6 md:col-start-5 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrBadge1Photo,
              alt: "PGR Badges 1",
            },
            className: "col-span-6 md:col-span-4 md:row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrBadge2Photo,
              alt: "PGR Badges 2",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrBadge3Photo,
              alt: "PGR Badges 3",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PgrBadge4Photo,
              alt: "PGR Badges 4",
            },
            className: "col-span-6 md:col-span-4",
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
              src: TeaShopPhoto,
              alt: "KFC's Chinese tea spinoff shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: TeaPhoto,
              alt: "Yanyu Longjing Rice Milk Tea",
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
              src: LuggagePhoto,
              alt: "Luggage bought from Taobao",
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
    </>
  );
};
