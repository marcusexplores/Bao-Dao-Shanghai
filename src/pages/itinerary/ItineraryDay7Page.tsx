import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { MediaType } from "@/components/page/constants";
import EggPancakeStallPhoto from "@/assets/photos/Itinerary_Day7_EggPancake_Stall.jpg";
import ParkHotelPhoto from "@/assets/photos/Itinerary_Day7_ParkHotel.jpg";
import JoyCityLogoPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Logo.jpg";
import JoyCityEntrancePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Entrance.jpg";
import JoyCityLinkPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Link.jpg";
import GinpachiSenseiPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_GinpachiSensei.jpg";
import BDuckPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_BDuck.jpg";
import GuoyayaShopPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Guoyaya.jpg";
import GuoyayaDrinkPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Guoyaya_Drinks.jpg";
import GoodsfunEntrancePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Goodsfun_Entrance.jpg";
import GoodsfunWuwaGondolaShelvingPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Goodsfun_WuwaMore.jpg";
import GoodsfunWuwaPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Goodsfun_Wuwa.jpg";
import GoodsfunPgrPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Goodsfun_Pgr.jpg";
import ArcadeEntrancePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Arcade_Entrance.jpg";
import ArcadeGamePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Arcade_Game.jpg";
import DemonSlayerDisplayPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_DemonSlayer_Display.jpg";
import DemonSlayerDecalPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_DemonSlayer_Decals.jpg";
import DemonSlayerStorePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_DemonSlayer_Store.jpg";
import DemonSlayerStoreOutsidePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_DemonSlayer_StoreOutside.jpg";
import JellyCatPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_JellyCat.jpg";
import LaiLaiXiaoLongEntrancePhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Entrance.jpg";
import LaiLaiXiaoLongInteriorPhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Inside.jpg";
import LaiLaiXiaoLongBasementPhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Basement.jpg";
import LaiLaiXiaoLongDumplingPhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Dumpling.jpg";
import LaiLaiXiaoLongSoupPhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Soup.jpg";
import LaiLaiXiaoLongMeatPhoto from "@/assets/photos/Itinerary_Day7_LaiLaiXiaoLong_Meat.jpg";
import BailianBuildingPhoto from "@/assets/photos/Itinerary_Day7_Bailian_Building.jpg";
import BailianInfinityNikkiPhoto from "@/assets/photos/Itinerary_Day7_Bailian_InfinityNikki_Front.jpg";
import BailianInfinityNikkiSidePhoto from "@/assets/photos/Itinerary_Day7_Bailian_InfinityNikki_Side.jpg";
import BailianOnePiecePhoto from "@/assets/photos/Itinerary_Day7_Bailian_MugiwaraStore.jpg";
import BailianIchirakuPhoto from "@/assets/photos/Itinerary_Day7_Bailian_IchirakuRamen.jpg";
import BailianAniplexPhoto from "@/assets/photos/Itinerary_Day7_Bailian_Aniplex.jpg";
import BailianBushiroadPhoto from "@/assets/photos/Itinerary_Day7_Bailian_Bushiroad.jpg";
import BailianBoomComicPhoto from "@/assets/photos/Itinerary_Day7_Bailian_BoomComic.jpg";
import BailianBilibiliPhoto from "@/assets/photos/Itinerary_Day7_Bailian_BilibiliGoods.jpg";
import BailianMaidJumpPhoto from "@/assets/photos/Itinerary_Day7_Bailian_MaidJumpGoodsCafe.jpg";
import BailianAnimatePhoto from "@/assets/photos/Itinerary_Day7_Bailian_Animate.jpg";
import BailianGoodSmilePhoto from "@/assets/photos/Itinerary_Day7_Bailian_GoodSmile.jpg";
import BailianGoodSmileCafePhoto from "@/assets/photos/Itinerary_Day7_Bailian_GoodSmile_Cafe.jpg";
import BailianGoodSmileCafeDrinkPhoto from "@/assets/photos/Itinerary_Day7_Bailian_GoodSmile_Cafe_Drink.jpg";
import MerchLootsPhoto from "@/assets/photos/Itinerary_Day7_Loots.jpg";
import DinnerPhoto from "@/assets/photos/Itinerary_Day7_Dinner.jpg";

export const ItineraryDay7Page = () => {
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
              src: EggPancakeStallPhoto,
              alt: "Egg Pancake Stall",
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
              src: ParkHotelPhoto,
              alt: "Park Hotel Bakery",
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
              src: JoyCityLogoPhoto,
              alt: "Joy City",
            },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: JoyCityEntrancePhoto,
              alt: "Joy City",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: JoyCityLinkPhoto,
              alt: "Joy City",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: GinpachiSenseiPhoto,
              alt: "Ginpachi Sensei",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BDuckPhoto,
              alt: "B.Duck",
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
              src: GuoyayaShopPhoto,
              alt: "Guoyaya",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: GuoyayaDrinkPhoto,
              alt: "Guoyaya",
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
              src: GoodsfunEntrancePhoto,
              alt: "Goodsfun",
            },
            className: "col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: GoodsfunWuwaGondolaShelvingPhoto,
              alt: "Goodsfun Wuthering Waves",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: GoodsfunWuwaPhoto,
              alt: "Goodsfun Wuthering Waves",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: GoodsfunPgrPhoto,
              alt: "Goodsfun Punishing Gray Raven",
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
              src: ArcadeEntrancePhoto,
              alt: "Arcade",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ArcadeGamePhoto,
              alt: "Arcade Games",
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
              src: DemonSlayerDisplayPhoto,
              alt: "Demon Slayer",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DemonSlayerDecalPhoto,
              alt: "Demon Slayer",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DemonSlayerStorePhoto,
              alt: "Demon Slayer",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DemonSlayerStoreOutsidePhoto,
              alt: "Demon Slayer",
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
              src: JellyCatPhoto,
              alt: "Jellycat",
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
              src: LaiLaiXiaoLongEntrancePhoto,
              alt: "Lai Lai Xiao Long",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: LaiLaiXiaoLongInteriorPhoto,
              alt: "Lai Lai Xiao Long",
            },
            className: "col-span-6 row-start-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: LaiLaiXiaoLongBasementPhoto,
              alt: "Lai Lai Xiao Long",
            },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: LaiLaiXiaoLongDumplingPhoto,
              alt: "Lai Lai Xiao Long",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: LaiLaiXiaoLongSoupPhoto,
              alt: "Lai Lai Xiao Long",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: LaiLaiXiaoLongMeatPhoto,
              alt: "Lai Lai Xiao Long",
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
              src: BailianBuildingPhoto,
              alt: "Bailian ZX",
            },
            className: "col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianInfinityNikkiPhoto,
              alt: "Infinity Nikki",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianInfinityNikkiSidePhoto,
              alt: "Infinity Nikki",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianOnePiecePhoto,
              alt: "One Piece",
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
              src: BailianIchirakuPhoto,
              alt: "Ichiraku Ramen",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianAniplexPhoto,
              alt: "Aniplex",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianBushiroadPhoto,
              alt: "Bushiroad",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianBoomComicPhoto,
              alt: "Boom Comic",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianBilibiliPhoto,
              alt: "bilibili goods",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianMaidJumpPhoto,
              alt: "Maid Jump Goods Cafe",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianAnimatePhoto,
              alt: "animate",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianGoodSmilePhoto,
              alt: "Good Smile",
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
              src: BailianGoodSmileCafePhoto,
              alt: "Good Smile Cafe",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianGoodSmileCafeDrinkPhoto,
              alt: "Good Smile Cafe",
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
              src: MerchLootsPhoto,
              alt: "Our loots",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DinnerPhoto,
              alt: "Dinner",
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
    </>
  );
};
