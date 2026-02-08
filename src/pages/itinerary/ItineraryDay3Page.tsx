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
              src: BundPhoto,
              alt: "The Bund Night Skyline",
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
              src: BuildingPhoto,
              alt: "Golden hour at the waterfront",
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
              src: ChristmasMarketPhoto,
              alt: "Christmas Market",
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
