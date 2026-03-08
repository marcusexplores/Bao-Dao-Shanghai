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

export const ItineraryDay5Page = () => {
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
              src: SuzhouStationPhoto,
              alt: "Suzhou Station",
              fetchPriority: ImagePriority.High,
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
              src: SuzhouMuseumPhoto,
              alt: "Suzhou Museum",
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
    </>
  );
};
