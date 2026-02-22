import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { ImagePriority, MediaType } from "@/components/page/constants";
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
import TeaDrinkPhoto from "@/assets/photos/Itinerary_Day3_TeaDrink.jpg";
import YuGardenPhoto from "@/assets/photos/Itinerary_Day3_YuGarden.jpg";
import YuGardenStreetPhoto from "@/assets/photos/Itinerary_Day3_YuGarden_Street.jpg";
import YuGardenTeahousePhoto from "@/assets/photos/Itinerary_Day3_YuGarden_Teahouse.jpg";
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
import LiveAgentChatPhoto from "@/assets/photos/Itinerary_Day3_AlipayLiveAgent.jpg";

export const ItineraryDay3Page = () => {
  return (
    <>
      <PageContainerItem>
        It was time for us to bid goodbye to Hangzhou as we prepared for another
        journey on the High-Speed Rail back to Shanghai. This experience felt a
        little different from our first attempt, as we were informed that
        tickets had to be purchased before we could even enter the station.
        Drawing on our prior experience, we navigated the app quickly and
        secured both tickets in a single transaction under one account,
        believing this would minimize the chance of being seated separately.
        Once inside, we found our way easily to the correct gate and platform,
        navigating the station with a newfound sense of confidence.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: TrainBoardPhoto,
              alt: "Train Timings",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Once we arrived in the city, we took a taxi straight to the Mehood
        Elegant Hotel Shanghai Bund (上海外滩雅致酒店). A porter greeted us
        immediately to help move our luggage to the reception counter, where we
        enjoyed a swift and easy check-in. The service remained excellent as he
        then escorted us to our room and delivered our bags, making the start of
        our stay feel seamless and welcoming.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: HotelPhoto,
              alt: "Mehood Elegant Hotel",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        The room was satisfyingly spacious, providing plenty of floor space to
        open our luggage without sacrificing walking room. Everything was clean
        and well kept. Unfortunately, our window offered no view because it was
        completely blocked by a neighboring building. The only real drawback was
        the shower room. There was nowhere to hang our clothes or towels inside,
        as the only available hooks were located on the outside.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: HotelRoomOverviewPhoto,
              alt: "Hotel Room Overview",
            },
            className: "col-span-6 md:col-start-5 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelBedroomPhoto, alt: "Hotel Bedroom" },
            className: "col-span-6 md:col-start-9 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelBathroomPhoto, alt: "Hotel Bathroom" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: HotelToiletPhoto, alt: "Hotel Room Toilet" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: HotelRoomCardPhoto, alt: "Hotel Room Cards" },
            className: "col-span-12 md:col-start-1 md:col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        Feeling hungry and eager to find something quickly, we decided to stop
        at the first nearby eatery that caught our eye. We came across a beef
        noodle shop and settled in for brunch. After noticing that almost every
        table had ordered the bone marrow set, we decided to try a bowl for
        ourselves. However, we weren't accustomed to the dish and found it quite
        difficult to eat, so we couldn't really appreciate it. Fortunately, the
        standard beef noodles were quite good and hit the spot.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: BeefNoodleShopPhoto, alt: "Beef Noodles Shop" },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: BeefNoodleOriginalPhoto,
              alt: "Original Beef Noodles",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BeefNoodleMarrowPhoto,
              alt: "Bone Marrow Beef Noodles",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        We spent some time debating how to reach our next destination, weighing
        whether to try the metro or continue taking taxis. Ultimately, we
        decided to stick with a taxi since we were running behind schedule,
        leaving the metro for another time and heading straight to Neo World.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: NeoWorldPhoto, alt: "Neo World" },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: { src: NeoWorldMapPhoto, alt: "Neo World Map" },
            className: "col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        Our main goal was to see some massive statues of game characters, but as
        we looked around, they were nowhere to be seen. After walking a bit
        further, the only thing we found was an empty container bearing the
        Arknights logo. We partially convinced ourselves that the statues might
        have been part of a temporary event and had since been taken down. To
        cope with the disappointment, we decided to at least take a photo with a
        controller-shaped structure nearby, figuring that since we had already
        made the trip, we might as well have a memento before leaving.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ArknightsContainerPhoto,
              alt: "Arknights Container",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ConsoleControllerPhoto,
              alt: "Huge Game Controller",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Still holding onto a hunch that they had to be nearby, we refused to
        believe they had been removed. Pushing further ahead, we finally spotted
        the iconic Lordly Trashcans from Honkai: Star Rail, which was a pleasant
        surprise. We had only expected to see SAM and Pollux, but to our
        delight, there were several other characters displayed on a massive
        birthday cake. The only downside was our tight schedule. Since we had to
        visit so early in the day, we missed seeing SAM's wings lit up.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: TrashbinFlexPhoto,
              alt: "HSR Lordly Trashcan Flexing",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: TrashbinFoldArmPhoto,
              alt: "HSR Lordly Trashcan Folding Arms",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: TrashbinBowPhoto,
              alt: "HSR Lordly Trashcan Bowing",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: CakePhoto,
              alt: "HSR Cake",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SamPhoto,
              alt: "HSR Sam",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: PolluxPhoto,
              alt: "HSR Pollux",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        With the photo session complete, we noticed a sign for a miHoYo store
        situated on the second floor of The Ring Live (鑫耀光环) mall nearby.
        The gaming atmosphere followed us right into the building, as the entire
        mall was themed with character statues and standees, featuring popular
        titles like Honkai: Star Rail and Arknights.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: TrashbinSitPhoto,
              alt: "HSR Lordly Trashcan Seated",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ArknightStandeePhoto,
              alt: "Arknights Standees",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        On the second floor, it was the miHoYo pop-up store in collaboration
        with IPSTAR. It was stocked with a wide variety of merchandise from
        their different games, offering plenty for fans to browse through. We
        headed inside and took a slow lap around the store, enjoying a bit of
        window shopping as we looked over the latest collections.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: MihoyoShopPhoto,
              alt: "Mihoyo Shop",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Directly opposite was another store carrying merchandise from various
        other games, including Wuthering Waves. We took the opportunity to
        compare their prices with online e-commerce platforms, only to find that
        things were notably cheaper online. Because of the price difference, we
        decided to pass on buying anything there, keeping our wallets closed for
        the time being.
      </PageContainerItem>
      <PageContainerItem>
        After finishing our gaming-focused shopping, we spent a little more time
        exploring the rest of the mall, though nothing else really caught our
        attention. Feeling a bit thirsty, we decided to grab a drink from Gu Ren
        Shuo (谷人说), a shop specializing in grain-based teas. It was our first
        time trying this style of beverage, and while it was a new experience,
        we found the taste quite acceptable.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: TeashopPhoto,
              alt: "Gu Ren Shuo Tea Stall",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: TeaDrinkPhoto,
              alt: "Gu Ren Shuo Tea",
            },
            className: "col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        As the sun began to set, we took a taxi towards Yu Garden (豫园). The
        ride was going smoothly until the driver seemingly jinxed himself. He
        had just been commenting on how confusing this particular stretch of the
        highway was when he immediately took a wrong turn, forcing us into a
        lengthy detour. He spent the rest of the trip venting his frustration
        aloud, cussing at the poor road design. Upon reaching our destination,
        he promised to cover the cost of the extra distance. We took him at his
        word, but a quick check of the transaction later revealed we had been
        charged for the full journey. Not wanting to let the incident ruin our
        mood, we decided to push it to the back of our minds and focus on
        enjoying the rest of the evening.
      </PageContainerItem>
      <PageContainerItem>
        Awed by the majestic Ming Dynasty-style architecture, we felt as though
        we had stepped through a portal into ancient China. The soaring eaves
        and intricate wood carvings created a timeless atmosphere, while the
        silhouettes of pagodas and ornate pavilions stood in stunning contrast
        to the modern city skyline rising just beyond the garden walls.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: YuGardenPhoto,
              alt: "Yu Garden",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: YuGardenStreetPhoto,
              alt: "Yu Garden Street",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Beyond the architecture, this area is a true food paradise with
        legendary snacks waiting around every corner. Eager to get a taste, we
        stopped at the first Crab Roe Soup Dumpling (蟹黄汤包) stall we saw.
        When we were handed the oversized dumpling with a straw, we found
        ourselves fumbling with it, unsure of exactly where to poke the straw
        until the stall assistant kindly stepped in to show us. With no seating
        in sight, we found a quiet street corner to tuck in. The rich, steaming
        soup and warm filling were perfectly satisfying, providing a welcome
        comfort against the evening chill.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: CrabSoupDumplingShopPhoto,
              alt: "Crab Soup Bao and Dumpling Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: CrabSoupDumplingFoodPhoto,
              alt: "Crab Soup Bao and Dumpling",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Continuing our walk, we took a moment to admire the ornate buildings and
        watch tourists dressed in elegant traditional clothes posing for photos.
        We eventually came across the famous Da Hu Chun (大壶春) and quickly
        headed inside, only to find the shop packed to capacity. We were lucky
        to snag two spots at a counter by squeezing in next to other diners.
        Seeking a better experience than our previous meal, we ordered the fried
        pork chop and Shengjianbao (生煎包). We were glad we gave it a chance,
        as the flavors were far superior and left us feeling much more
        satisfied.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: DaHuChunShopPhoto,
              alt: "Da Hu Chun",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DaHuChunFoodPhoto,
              alt: "Da Hu Chun Food",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        We discovered even more variety at 小吃城, a vibrant food court that
        brings together a lineup of time-honored eateries. It remains a premier
        destination for anyone seeking the city's most authentic flavors, but
        because we were still feeling quite full from our earlier drinks and
        snacks, we couldn't possibly try everything on offer, no matter how
        delicious it all looked. After a difficult time narrowing down our
        choices, we finally settled on a massive scallion pancake (葱油饼) that
        was quite literally as big as our faces. To balance out the savory snack
        and quench our thirst, we paired it with a soothing bowl of roasted
        pears with longan and peach dessert (桂圆桃胶烤梨).
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: FoodStreetPhoto,
              alt: "Food Street",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: FoodStreetFoodPhoto,
              alt: "Street Food",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Feeling completely stuffed, we began a slow stroll toward the Bund to
        help with digestion. As we passed the iconic Huxinting (湖心亭) Teahouse
        and the Jiuqu (九曲桥) Bridge, we managed to find a clear spot away from
        the crowds to capture the night’s beauty. It was a stark contrast to the
        area directly opposite us, where crowds had gathered and tourists in
        elaborate traditional attire were busy posing for photos against the
        illuminated backdrop.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: YuGardenTeahousePhoto,
              alt: "Teahouse",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        When we arrived, we were pleasantly surprised to find the area far less
        crowded than we had expected. We had a clear, unobstructed view of the
        Lujiazui (陸家嘴) Skyline, including the Oriental Pearl Tower
        (东方明珠广播电视塔), the Shanghai World Financial Center
        (上海环球金融中心) and Shanghai Tower (上海中心大厦). However, as we
        strolled toward the main swarm of people, we realized we hadn't actually
        been at the main part of the Bund (外滩). The "real" spot was absolutely
        packed, making it nearly impossible to find an opening for a good photo.
        There were also many freelance photographers weaving through the crowd
        offering their services. We felt glad that we had unintentionally ended
        up on the quieter side first.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BundPhoto,
              alt: "The Bund Night Skyline",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        On the other side of the Bund, we were surrounded by beautifully lit
        golden buildings. The colonial-era architecture was stunning at night,
        with the grand facades bathed in a warm glow that gave the entire street
        a majestic, historical feel. It was the perfect spot for some photogenic
        shots, as the classic European styles provided a sophisticated backdrop
        that looked amazing in photos.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BuildingPhoto,
              alt: "Golden hour at the waterfront",
            },
            className: "col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: BernardTaxiPhoto,
              alt: "Bernard and Taxi",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BernardSitPhoto,
              alt: "Bernard waiting",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Most people visit Nanjing Road and the Bund on the same day, but since
        it was already late, we decided to save Nanjing Road for another visit.
        We also considered stopping by the Christmas market but ultimately
        decided against it. Since there was an entrance fee and we knew we
        couldn't eat another bite or find anything we truly needed to buy, it
        didn't seem worth the cost. With our day finally winding down, we
        decided to head back to the hotel for some rest.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ChristmasMarketPhoto,
              alt: "Christmas Market",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        We tried to book a taxi through Alipay's DiDi mini-program, but we found
        ourselves blocked because the payment for our previous ride hadn't been
        settled. With no other choice, we went ahead and paid the full amount
        just so we could get back to our hotel, deciding to ask the staff for
        help once we arrived. Luckily, the hotel team was incredibly helpful.
        They contacted a live agent through the app on our behalf and
        successfully secured our compensation. We felt truly grateful for their
        support and for the prompt assistance we received through the Alipay
        platform.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LiveAgentChatPhoto,
              alt: "Alipay Live Agent Chat",
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
