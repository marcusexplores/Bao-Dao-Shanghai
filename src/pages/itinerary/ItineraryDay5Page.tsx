import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { ImagePriority, MediaType } from "@/components/page/constants";
import BreakfastBagPhoto from "@/assets/photos/Itinerary_Day5_Breakfast_Bag.jpg";
import BreakfastFoodPhoto from "@/assets/photos/Itinerary_Day5_Breakfast_Food.jpg";
import SuzhouStationPhoto from "@/assets/photos/Itinerary_Day5_SuzhouStation.jpg";
import EhailingPickupVenuePhoto from "@/assets/photos/Itinerary_Day5_Ehailing_Pickup.jpg";
import EhailingInformationPhoto from "@/assets/photos/Itinerary_Day5_Ehailing_Info.jpg";
import SuzhouMuseumPhoto from "@/assets/photos/Itinerary_Day5_SuzhouMuseum.jpg";
import CanalPhoto from "@/assets/photos/Itinerary_Day5_Canal.jpg";
import CanalWithBoatPhoto from "@/assets/photos/Itinerary_Day5_Canal_Boat.jpg";
import JinShuiTaiPhoto from "@/assets/photos/Itinerary_Day5_JinShuiTai.jpg";
import JinShuiTaiFoodPhoto from "@/assets/photos/Itinerary_Day5_JinShuiTai_Food.jpg";
import AdminGardenEntrancePhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Entrance.jpg";
import AdminGardenFirstFlowerPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_FirstFlowers.jpg";
import AdminGardenFirstGatherPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_FirstGathering.jpg";
import AdminGardenYellowFlowerPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_YellowFlowers.jpg";
import AdminGardenColorfulFlowerPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_ColorfulFlowers.jpg";
import AdminGardenMaplePondPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Pond_Maple.jpg";
import AdminGardenPond1Photo from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Pond1.jpg";
import AdminGardenPond2Photo from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Pond2.jpg";
import AdminGardenPond3Photo from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Pond3.jpg";
import AdminGardenMapleLeavesPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_MapleLeaves.jpg";
import AdminGardenPondMistPhoto from "@/assets/photos/Itinerary_Day5_HumbleAdminGarden_Pond_Mist.jpg";
import BambooIceCreamShopPhoto from "@/assets/photos/Itinerary_Day5_BambooIceCream_Shop.jpg";
import BambooIceCreamStandeePhoto from "@/assets/photos/Itinerary_Day5_BambooIceCream_Standee.jpg";
import BambooIceCreamPhoto from "@/assets/photos/Itinerary_Day5_BambooIceCream.jpg";
import PingjiangluMuralPhoto from "@/assets/photos/Itinerary_Day5_Pingjianglu_Mural.jpg";
import PingjiangluCanalPhoto from "@/assets/photos/Itinerary_Day5_Pingjianglu_Canal.jpg";
import CrabPhoto from "@/assets/photos/Itinerary_Day5_Crab.jpg";
import PlumBlossomCakeShopPhoto from "@/assets/photos/Itinerary_Day5_PlumBlossomCake_Shop.jpg";
import PlumBlossomCakePhoto from "@/assets/photos/Itinerary_Day5_PlumBlossomCake.jpg";
import PlumBlossomCakeMuralPhoto from "@/assets/photos/Itinerary_Day5_PlumBlossomCake_Mural.jpg";
import AugustOsmanthusShopPhoto from "@/assets/photos/Itinerary_Day5_AugustOsmanthus_Shop.jpg";
import AugustOsmanthusBreadPhoto from "@/assets/photos/Itinerary_Day5_AugustOsmanthus_Bread.jpg";
import CanalNearAugustOsmanthusPhoto from "@/assets/photos/Itinerary_Day5_CanalNearAugustOsmanthus.jpg";
import CatVideo from "@/assets/videos/Itinerary_Day5_Cat.mp4";
import BookstorePhoto from "@/assets/photos/Itinerary_Day5_Bookstore.jpg";
import Canal1Photo from "@/assets/photos/Itinerary_Day5_Canal1.jpg";
import Canal2Photo from "@/assets/photos/Itinerary_Day5_Canal2.jpg";
import FoodStreetPhoto from "@/assets/photos/Itinerary_Day5_FoodStreet.jpg";
import GateOfTheOrientBernardPhoto from "@/assets/photos/Itinerary_Day5_GateOfTheOrient_Bernard.jpg";
import GateOfTheOrientMarcusPhoto from "@/assets/photos/Itinerary_Day5_GateOfTheOrient_Marcus.jpg";
import RoundOnePhoto from "@/assets/photos/Itinerary_Day5_RoundOne.jpg";
import HotpotEntrancePhoto from "@/assets/photos/Itinerary_Day5_Hotpot_Entrance.jpg";
import HotpotSideEntrancePhoto from "@/assets/photos/Itinerary_Day5_Hotpot_SideEntrance.jpg";
import HotpotSoupPhoto from "@/assets/photos/Itinerary_Day5_Hotpot_Soup.jpg";
import HotpotVegPhoto from "@/assets/photos/Itinerary_Day5_Hotpot_Vegetables.jpg";
import HotpotMeatPhoto from "@/assets/photos/Itinerary_Day5_Hotpot_Meat.jpg";

export const ItineraryDay5Page = () => {
  return (
    <>
      <PageContainerItem>
        Starting another day with food delivery through Meituan, we found
        ourselves pampered with endless choices. We decided not to go too
        adventurous just yet, opting instead for the safer route by choosing
        dishes that felt familiar to us. It was a generally good breakfast to
        kickstart the long day ahead.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BreakfastBagPhoto,
              alt: "Breakfast Carrier Bag",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BreakfastFoodPhoto,
              alt: "Hearty local breakfast variety",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Arriving at Suzhou station after taking a taxi and the high-speed rail,
        we immediately began scanning the area for exit signs. A wild thought
        suddenly struck us as we looked at the map, noticing that our next
        destination seemed to be within cycling distance. We decided to give it
        a shot, and after exiting the station, we walked around for a while in
        search of a stray shared bike. Unfortunately, we could not find a single
        one, and it felt like we had wasted more time than necessary. Just
        before we gave up on the idea, we spotted the iconic Suzhou Station sign
        and knew we had to stop for a photo.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SuzhouStationPhoto,
              alt: "Suzhou Station",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Out in the open, we realized there wasn't a pickup spot available for
        booking a taxi, so we headed toward the nearest one a little further
        ahead. As we approached, it became clear that this was much more than a
        simple waiting area, appearing instead like an entire terminal unto
        itself. The space featured a highly organized, multi-lane system
        designed for maximum efficiency, and we were impressed by the digital
        display boards providing a real-time layout of the lanes and specific
        positions of arriving and leaving vehicles. Within the various slots, we
        could see specific license plate numbers clearly displayed, while some
        even showed the logo of the corresponding ride-hailing platform like
        Didi. It was an incredibly efficient setup that helped passengers find
        their drivers quickly in such a high-traffic environment.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: EhailingPickupVenuePhoto,
              alt: "E-hailing Pickup Venue",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EhailingInformationPhoto,
              alt: "Information on e-hailing rides",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Suzhou Museum (苏州博物馆) was not our planned first stop, but our taxi
        dropped us nearby since the vehicle could not go any further in.
        Although it was on our list of potential spots and comes highly
        recommended by others, we decided to give it a pass in view of our
        limited time and the other places we wanted to try. We aimed to keep the
        day short and head back early, especially since we planned to wake up
        early tomorrow.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SuzhouMuseumPhoto,
              alt: "Suzhou Museum",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Known as the "Venice of the East," Suzhou earns its romantic moniker
        through a 2,500 year old network of crisscrossing canals, stone bridges,
        and traditional whitewashed houses that line the water's edge. Much like
        its Italian counterpart, the city's historic soul is built upon the
        water, where flat bottomed wooden boats still drift past ancient city
        gates and world class classical gardens. The heart of Suzhou remains a
        tranquil labyrinth of waterways reflecting the elegance of the Ming and
        Qing dynasties, where every turn unveils a picturesque landscape as
        timeless as an image on a postcard.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: CanalPhoto,
              alt: "Canal",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: CanalWithBoatPhoto,
              alt: "Canal with boats",
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
              src: JinShuiTaiPhoto,
              alt: "Jin Shui Tai",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: JinShuiTaiFoodPhoto,
              alt: "Brunch at Jin Shui Tai",
            },
            className: "col-span-8",
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
              src: AdminGardenEntrancePhoto,
              alt: "Humble Administrator's Garden Entrance",
            },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenFirstFlowerPhoto,
              alt: "Flowers near Humble Administrator's Garden Entrance",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenFirstGatherPhoto,
              alt: "Area behind flowers near Humble Administrator's Garden Entrance",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenYellowFlowerPhoto,
              alt: "Yellow Flowers in Humble Administrator's Garden",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenColorfulFlowerPhoto,
              alt: "Colorful Flowers in Humble Administrator's Garden",
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
              src: AdminGardenMaplePondPhoto,
              alt: "Pond with Maple Tree in Humble Administrator's Garden",
            },
            className: "col-span-6 md:col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenPond1Photo,
              alt: "A Pond in Humble Administrator's Garden",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenPond2Photo,
              alt: "A Pond in Humble Administrator's Garden",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenPond3Photo,
              alt: "A Pond in Humble Administrator's Garden",
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
              src: AdminGardenMapleLeavesPhoto,
              alt: "Maple Leaves",
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
              src: AdminGardenPondMistPhoto,
              alt: "A Pond with mist in Humble Administrator's Garden",
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
              src: BambooIceCreamShopPhoto,
              alt: "Bamboo Ice-cream Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BambooIceCreamStandeePhoto,
              alt: "Bamboo Ice-cream Standee Advertisement",
            },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: BambooIceCreamPhoto,
              alt: "Bamboo Ice-cream",
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
              src: PingjiangluMuralPhoto,
              alt: "Pingjiang Road Text Mural",
            },
            className: "col-span-5",
          },
          {
            type: MediaType.Image,
            media: {
              src: PingjiangluCanalPhoto,
              alt: "Pingjiang Road Canal",
            },
            className: "col-span-7",
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
              src: CrabPhoto,
              alt: "Shop preparing crabs components",
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
              src: PlumBlossomCakeShopPhoto,
              alt: "Plum Blossom Cake Preparation",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: PlumBlossomCakePhoto,
              alt: "Plum Blossom Cake",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: PlumBlossomCakeMuralPhoto,
              alt: "Plum Blossom Cake Mural",
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
              src: AugustOsmanthusShopPhoto,
              alt: "August Osmanthus Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: AugustOsmanthusBreadPhoto,
              alt: "Eating a bread bought from August Osmanthus",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: CanalNearAugustOsmanthusPhoto,
              alt: "Canal near August Osmanthus",
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
            type: MediaType.Video,
            media: {
              src: CatVideo,
              alt: "Animal Cafe",
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
              src: BookstorePhoto,
              alt: "Bookstore",
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
              src: FoodStreetPhoto,
              alt: "Canal near August Osmanthus",
            },
            className: "col-span-full",
          },
          {
            type: MediaType.Image,
            media: {
              src: Canal1Photo,
              alt: "August Osmanthus Shop",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: Canal2Photo,
              alt: "Eating a bread bought from August Osmanthus",
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
              src: GateOfTheOrientBernardPhoto,
              alt: "Gate of the Orient",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: GateOfTheOrientMarcusPhoto,
              alt: "Gate of the Orient",
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
              src: RoundOnePhoto,
              alt: "Round One",
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
              src: HotpotEntrancePhoto,
              alt: "Zuoting Youyuan Fresh Beef Hotpot Entrance",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotpotSideEntrancePhoto,
              alt: "Zuoting Youyuan Fresh Beef Hotpot Side Entrance",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotpotSoupPhoto,
              alt: "Hotpot Soup",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotpotVegPhoto,
              alt: "Hotpot Vegetables",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotpotMeatPhoto,
              alt: "Hotpot Meat",
            },
            className: "col-span-4",
          },
        ]}
      />
    </>
  );
};
