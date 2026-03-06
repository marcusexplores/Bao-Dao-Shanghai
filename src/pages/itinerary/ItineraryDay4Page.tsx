import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { ImagePriority, MediaType } from "@/components/page/constants";
import FoodDeliveryVideo from "@/assets/videos/Itinerary_Day4_FoodDelivery.mp4";
import BreakfastPhoto from "@/assets/photos/Itinerary_Day4_Breakfast.jpg";
import SnowWorldPhoto from "@/assets/photos/Itinerary_Day4_SnowWorld.jpg";
import SnowWorldEntrancePhoto from "@/assets/photos/Itinerary_Day4_SnowWorld_Entrance.jpg";
import SnowWorldSkiingVideo from "@/assets/videos/Itinerary_Day4_Skiing.mp4";
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
import { youtubeId } from "./data/youtube";

export const ItineraryDay4Page = () => {
  return (
    <>
      <PageContainerItem>
        Today began at a relaxed pace since we had planned a chill day with only
        one major highlight on the agenda. Taking advantage of the extra time,
        we decided to try ordering breakfast through the Meituan app. The setup
        was surprisingly easy, and we managed to bypass the registration
        restrictions by using a random Chinese phone number. We set our hotel
        room as the delivery address and added a note for the rider to leave the
        food at the front desk. Although the rider's attempt to call us upon
        arrival was unsuccessful due to our invalid contact number, we were
        still able to communicate smoothly through the in-app chat. Once the
        rider confirmed the drop-off, which took less than an hour, we waited a
        while thinking the front desk would send the food up automatically since
        we had included our room number in the note. When it didn't arrive, we
        realized we needed to call down and request the delivery ourselves.
        Moments later, a robot arrived at our door to drop off our meal, making
        our first experience with food delivery in China a truly pleasant and
        high-tech one.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Video,
            media: {
              src: FoodDeliveryVideo,
              alt: "Food Delivery to Hotel Room",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: BreakfastPhoto,
              alt: "Porridge and sesame flatbread",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Since we rarely get the chance to enjoy winter sports, the approaching
        season felt like the perfect opportunity to try something new.
        Fortunately, we were able to experience skiing at the Shanghai L+SNOW
        Indoor Skiing Theme Resort, a massive facility offering world-class,
        year-round indoor slopes. Having already secured our tickets through
        Trip.com, we began the entry process upon arrival with a mandatory
        facial scan. This served as a standard part of the check-in and
        equipment rental procedure, ensuring everything was synced to our
        profiles before we finally hit the snow.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SnowWorldPhoto,
              alt: "Snow World",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Once inside, our first priority was to find the restrooms after the long
        taxi ride before heading to the rental lockers to store our belongings.
        We paid for the locker via WeChat Pay, which typically requires a
        Chinese phone number because the last few digits serve as the access
        PIN. Since we did not have one, the staff suggested we simply enter a
        random number and just make sure to remember those last digits for
        ourselves. With our belongings secured, we moved on to collect our gear
        and rented helmets and skis, though for some reason they did not seem to
        encourage us to take any ski poles. While getting ready, we noticed a
        signboard for a sports academy and, after asking for directions, we
        followed the path to see what it offered.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SnowWorldEntrancePhoto,
              alt: "Snow World Entrance",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        After entering the skiing area, we initially struggled to find the
        academy, so we approached a passerby for directions who happened to be a
        certified professional trainer. While we were processing this, he kindly
        offered some immediate tips on using the travelator to reach the top
        along with some basic walking techniques. Since one of us had skied
        before, he suggested we try a run ourselves before deciding whether to
        hire an instructor. We gave it a shot but did not perform well, and he
        cautioned us that it was dangerous for beginners to continue without
        proper guidance. He quoted a price that seemed reasonable, though we
        were initially wary of a potential scam when he mentioned he needed to
        leave the venue to retrieve his instructor armband after our payment. He
        reassured us by offering to leave his phone behind as a guarantee of his
        return, and we ultimately decided to take the risk. We were relieved to
        find our judgment was correct when he returned as promised, and before
        letting us head down the main slope, he taught us the basics at the top
        and insisted we practice there first. He even sent one of us back to the
        rental counter to pick up ski poles while the other continued
        practicing, and eventually we were ready to take turns skiing down the
        slope.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.YouTube,
            media: {
              id: youtubeId.SkiTraining,
            },
            className: "col-span-full aspect-[9/16] mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        Before we knew it, our ninety minutes of lesson time were nearly up.
        Although our trainer sounded fierce and incredibly serious during the
        session, he proved to be a genuinely friendly person as we wrapped up.
        He seemed surprised to learn we were tourists when he asked if we wanted
        to extend the lesson, but we had to decline since we had another
        location to visit. We requested his help to film a video of us skiing
        down the slope, though we later discovered that the recording had cut
        off before we even started. To make up for it, we went for another round
        on our own to capture the footage ourselves. While we hoped to explore
        more of the resort, time constraints meant we could only stop for a
        quick photo at Aurora Village as proof of our experience before heading
        out.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Video,
            media: {
              src: SnowWorldSkiingVideo,
              alt: "Skiing down a slope",
            },
            className: "col-span-6 row-span-2",
          },
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
            media: {
              src: JiChangXingDumplingPhoto,
              alt: "Steamed bi-color dumplings",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: JiChangXingEelPhoto,
              alt: "Glazed and crispy fried eels",
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
