import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { ImagePriority, MediaType } from "@/components/page/constants";
import EggPancakeStallPhoto from "@/assets/photos/Itinerary_Day7_EggPancake_Stall.jpg";
import ParkHotelPhoto from "@/assets/photos/Itinerary_Day7_ParkHotel.jpg";
import JoyCityLogoPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Logo.jpg";
import JoyCityEntrancePhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Entrance.jpg";
import JoyCityLinkPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_Link.jpg";
import JoyCityTopViewPhoto from "@/assets/photos/Itinerary_Day7_JoyCity_TopView.jpg";
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
import { ElaborationModal } from "./components/ElaborationModal";
import { elaboration } from "./data/elaboration";
import { youtubeId } from "./data/youtube";

export const ItineraryDay7Page = () => {
  return (
    <>
      <PageContainerItem>
        Since today was our last full day before flying home tomorrow, we
        finally allowed ourselves to slow down our pace. The plan was simple,
        focusing mostly on eating and shopping without any real rush, so we woke
        up much later than usual and enjoyed the extra rest. Instead of the
        usual food delivery, we decided to head out for a proper breakfast to
        start the morning right. We caught a taxi to the trending
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.DingXingRoadEggPancake}>
          egg pancake shop
        </ElaborationModal>
        <span>&nbsp;</span>
        at Ding Xing Road.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: EggPancakeStallPhoto,
              alt: "Egg Pancake Stall",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.YouTube,
            media: {
              id: youtubeId.EggPancake,
            },
            className: "col-span-6 aspect-[9/16]",
          },
        ]}
      />
      <PageContainerItem>
        When we arrived, we could already see a long queue stretching all the
        way back to where we alighted. We quickly hopped into line and took
        turns peeping at the storefront and the menu to see what the hype was
        about. After much consideration, we decided to go all out and order the
        last two sets on the menu, which were loaded with every possible
        ingredient available.
      </PageContainerItem>
      <PageContainerItem>
        While waiting, we realized we weren't the only ones from home as we
        spotted a few fellow Singaporeans in the queue. Interestingly, there was
        an international group just a few spots behind us. One of them actually
        picked up on our accent and told her friends that she recognized it
        immediately because she had lived in Singapore for some time. Another
        funny moment happened when the wait got so long that someone in line
        actually ordered food delivery from another stall via Meituan. The rider
        looked completely confused when he arrived, clearly not expecting his
        customer to be someone already standing in a queue.
      </PageContainerItem>
      <PageContainerItem>
        By the time it was finally our turn, we had been waiting for around 45
        minutes. Since the pancakes were still piping hot, we decided to hold
        off and find a spot to eat them later. We then made our way over to the
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.ParkHotelBakery}>
          Park Hotel Bakery
        </ElaborationModal>
        , which was just a few minutes walk away and famous for its iconic
        butterfly shaped pastries.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ParkHotelPhoto,
              alt: "Park Hotel Bakery",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Unfortunately, the queue here was even longer, and we weren't ready to
        commit to another hour of waiting in line. We decided to give it a pass
        and hopped in a taxi to
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.JoyCity}>Joy City</ElaborationModal>
        <span>&nbsp;</span>
        instead. This place is a total haven for subculture enthusiasts, with
        massive sections dedicated to anime, gaming, and all sorts of "geeky"
        collectibles.
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
          {
            type: MediaType.Image,
            media: {
              src: JoyCityTopViewPhoto,
              alt: "Joy City",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        We found a bench near an escalator to finally tuck into the egg pancakes
        we had bought earlier. They were incredibly filling and definitely worth
        the wait, though we suspect they would have been even better had we
        eaten them hot right after buying them. Feeling a bit thirsty after the
        meal, we went on the hunt for a drink stall and stumbled upon
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.Guoyaya}>Guoyaya</ElaborationModal>,
        which turned out to be a pretty good choice to wash everything down.
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
        With our stomachs filled, it was time to let the shopping begin! We were
        totally thrilled when the first shop we visited,
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.Goodsfun}>
          GOODSFUN
        </ElaborationModal>
        , already had merchandise from games we actually play, like
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.WutheringWaves}>
          Wuthering Waves
        </ElaborationModal>
        <span>&nbsp;</span>
        and
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.PunishingGrayRaven}>
          Punishing: Gray Raven
        </ElaborationModal>
        . We couldn't resist picking up a few character standees to add to our
        collection.
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
        It was a total paradise for us, with shop after shop across multiple
        floors, and we just couldn't stop. We were so engrossed in exploring
        that we completely forgot to take photos of the shops we patronized. We
        ended up spending a few hours in the building until we had visited every
        single shop on our radar. Before leaving, we spotted a small arcade and
        decided to pop in to try a shooting game. We then used our remaining
        tokens to play a quick game of basketball to finish off the visit.
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
        Just when we thought we were finished and headed out to book a taxi, we
        noticed another tower across the road that we hadn't explored yet. There
        was a display outside advertising a Demon Slayer pop-up store, so we
        decided to head over and check it out. Once we got there, the long queue
        was enough to put us off entering, but the scene outside the store was
        fascinating in its own right. We saw people openly reselling merchandise
        they had just pulled from blind boxes, while others were holding up
        items they didn't want, hoping to trade them for the ones they actually
        desired. It was such an interesting sight to see the community trading
        and bartering right there on the spot.
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
        Not much of the second tower ended up being explored, especially once we
        realized it didn't have nearly as many anime or gaming shops as the
        first. On our way out, we passed by the popular plushie brand, Jellycat.
        It was a fairly small shop, but it was still a nice final find before we
        officially wrapped up our time at the mall.
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
        Even though it was well past lunchtime and far too early for dinner, we
        pushed on to our next food destination as part of our plan to alternate
        eating with shopping. A quick taxi ride brought us to
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.LaiLaiXiaoLong}>
          Lai Lai Xiao Long
        </ElaborationModal>
        , where we were greeted by a long, winding queue that fortunately moved
        quite fast. We were handed an order form to fill out and had to make
        payment at the counter before heading inside, noting that the menu even
        included items from the store next door. While the seating was a bit
        cramped since we had to share a table in close proximity with others,
        the meal itself turned out to be quite satisfying.
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
        Returning to
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.BailianZx}>
          Bailian ZX
        </ElaborationModal>
        <span>&nbsp;</span>
        for the night, we prepared to fully comb through the building. The
        moment we stepped inside, we noticed that the atrium display had
        completely changed. It had featured Demon Slayer standees previously,
        but now it was a full setup for Infinity Nikki. For a second, we
        actually thought we had walked into the wrong building.
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
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianInfinityNikkiSidePhoto,
              alt: "Infinity Nikki",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Seeing a real-life replication of the Ichiraku Ramen shop from Naruto
        was a welcome surprise. Famous names like the One Piece Mugiwara Store,
        Aniplex, Bushiroad, and even Animate were all present, creating a great
        mix alongside Chinese retailers like Bilibili Goods. Having the iconic
        Good Smile Store in the lineup as well really made the place feel like
        another paradise for us.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BailianIchirakuPhoto,
              alt: "Ichiraku Ramen",
            },
            className: "col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: BailianOnePiecePhoto,
              alt: "One Piece",
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
        We were literally living up to the meaning of "shop till we drop." By
        the time we felt truly parched, it was almost closing time, so we
        decided to stop by the Good Smile Cafe. It happened to be running a
        collaboration with Goddess of Victory: Nikke, so we went with the
        promotional drink set and picked up some merchandise. We even got to
        draw from a mystery deck of cards as part of the experience, which was a
        fun way to end the night.
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
        The day's haul was a satisfying one, though the amount of loot wasn't
        actually that overwhelming. It felt relatively light, especially
        considering the generous luggage allowance still available to us. Since
        the night had once again stretched on quite late, the exhaustion was
        real, and hunting for an open restaurant didn't seem worth the effort.
        Ordering food delivery for a late-night dinner turned out to be the
        perfect solution, allowing for a quiet meal in the comfort of the hotel
        room.
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
        Fulfilling most, if not all, of the planned activities on the itinerary
        brought a huge sense of satisfaction as our last night in Shanghai
        finally came to a close. It was a relief to see the schedule come
        together so smoothly, hitting all the major highlights before our flight
        back to Singapore tomorrow.
      </PageContainerItem>
    </>
  );
};
