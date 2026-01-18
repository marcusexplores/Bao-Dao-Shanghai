import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { ImagePriority, MediaType } from "@/components/page/constants";
import HotelBuffetHotPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Hot.jpg";
import HotelBuffetSidesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Sides.jpg";
import HotelBuffetDrinkPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Drink.jpg";
import HotelBuffetPorridgePhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Porridge.jpg";
import HotelBuffetCookPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Cook.jpg";
import HotelBuffetVegetablesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Vegetables.jpg";
import HotelBuffetIcePhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Ice.jpg";
import HotelBuffetSoupPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Soup.jpg";
import HotelBuffetPasteriesPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Pasteries.jpg";
import HotelBuffetSteamPhoto from "@/assets/photos/Itinerary_Day2_Hotel_Buffet_Steam.jpg";
import OmgParkGatePhoto from "@/assets/photos/Itinerary_Day2_Omg_Gate.jpg";
import OmgParkShadowPhoto from "@/assets/photos/Itinerary_Thumbnail_Day2.jpg";
import OmgParkTogetherPhoto from "@/assets/photos/Itinerary_Day2_Omg_Together.jpg";
import OmgParkMascotPhoto from "@/assets/photos/Itinerary_Day2_Omg_Mascot.jpg";
import OmgParkTotemPhoto from "@/assets/photos/Itinerary_Day2_Omg_Totem.jpg";
import OmgParkTicketEntrance from "@/assets/photos/Itinerary_Day2_TicketEntrance.jpg";
import OmgParkTicketGantry from "@/assets/photos/Itinerary_Day2_TicketGantry.jpg";
import BoatBoardingPhoto from "@/assets/photos/Itinerary_Day2_BoatBoarding.jpg";
import CaveEntrancePhoto from "@/assets/photos/Itinerary_Day2_Cave_Entrance.jpg";
import AltarPhoto from "@/assets/photos/Itinerary_Day2_Altar.jpg";
import BuddhaPhoto from "@/assets/photos/Itinerary_Day2_Buddha.jpg";
import CaveInspectorPhoto from "@/assets/photos/Itinerary_Day2_Cave_Inspector.jpg";
import CaveSceneryPhoto from "@/assets/photos/Itinerary_Day2_Cave_Scenery.jpg";
import CaveRewardPhoto from "@/assets/photos/Itinerary_Day2_Cave_Reward.jpg";
import LiftPhoto from "@/assets/photos/Itinerary_Day2_Lift.jpg";
import BernardWingPhoto from "@/assets/photos/Itinerary_Day2_Wing_Bernard.jpg";
import GalbrenaImage from "@/assets/images/Galbrena.jpg";
import GlassBridgePhoto from "@/assets/photos/Itinerary_Day2_GlassBridge.jpg";
import LittlePrincePhoto from "@/assets/photos/Itinerary_Day2_LittlePrince.jpg";
import GlassBridgeOverviewPhoto from "@/assets/photos/Itinerary_Day2_GlassBridge_Overview.jpg";
import CliffSwingPhoto from "@/assets/photos/Itinerary_Day2_CliffSwing.jpg";
import AstronautPhoto from "@/assets/photos/Itinerary_Day2_Astronaut.jpg";
import AstronautTouchPhoto from "@/assets/photos/Itinerary_Day2_Astronaut_Touch.jpg";
import ObservatoryBernardPhoto from "@/assets/photos/Itinerary_Day2_Observatory_Bernard.jpg";
import ObservatoryMarcusPhoto from "@/assets/photos/Itinerary_Day2_Observatory_Marcus.jpg";
import WaterEntrancePhoto from "@/assets/photos/Itinerary_Day2_Water_Entrance.jpg";
import WaterBackStoryPhoto from "@/assets/photos/Itinerary_Day2_Water_BackStory.jpg";
import WaterBoatPhoto from "@/assets/photos/Itinerary_Day2_Water_Boat.jpg";
import WaterTogetherPhoto from "@/assets/photos/Itinerary_Day2_Water_Together.jpg";
import WaterDryerPhoto from "@/assets/photos/Itinerary_Day2_Water_Dryer.jpg";
import TeahousePhoto from "@/assets/photos/Itinerary_Day2_Teahouse.jpg";
import TeahouseFoodPhoto from "@/assets/photos/Itinerary_Day2_Teahouse_Food.jpg";
import DoveAreaPhoto from "@/assets/photos/Itinerary_Day2_Dove_Area.jpg";
import DoveHousePhoto from "@/assets/photos/Itinerary_Day2_Dove_House.jpg";
import ForestBernardPhoto from "@/assets/photos/Itinerary_Day2_Forest_Bernard.jpg";
import ForestMarcusPhoto from "@/assets/photos/Itinerary_Day2_Forest_Marcus.jpg";
import DragonPhoto from "@/assets/photos/Itinerary_Day2_Dragon.jpg";
import GapEntrancePhoto from "@/assets/photos/Itinerary_Day2_Gap_Entrance.jpg";
import GapAreaPhoto from "@/assets/photos/Itinerary_Day2_Gap_Area.jpg";
import GapDrinkPhoto from "@/assets/photos/Itinerary_Day2_Gap_Drink.jpg";
import ParkRewardsPhoto from "@/assets/photos/Itinerary_Day2_Park_Rewards.jpg";
import HefangStreetPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet.jpg";
import HefangStreetSkewersPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet_Skewers.jpg";
import HefangStreetPasteryPhoto from "@/assets/photos/Itinerary_Day2_HefangStreet_Pastery.jpg";
import RobotVideo from "@/assets/videos/Itinerary_Day2_Omg_Robot.mp4";

export const ItineraryDay2Page = () => {
  return (
    <>
      <PageContainerItem>
        Morning at the hotel began with a breakfast buffet that offered a wide
        variety of choices, including international options like Portuguese egg
        tarts and sushi. Although it was a nutritious spread, some of the food
        did not quite meet our expectations. We were looking forward to long,
        crispy youtiao, but the version here was short and hard instead.
        Surprisingly, the highlight of the meal turned out to be the vegetables,
        which were seasoned well and cooked perfectly. This was not just our own
        bias, as we noticed how quickly the other diners finished them,
        affirming that the vegetables were the most popular choice of the
        morning.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetHotPhoto,
              alt: "Hotel Buffet Hot Snacks",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetSidesPhoto,
              alt: "Hotel Buffet Sides",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetDrinkPhoto,
              alt: "Hotel Buffet Drinks",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetPorridgePhoto,
              alt: "Hotel Buffet Porridge",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetCookPhoto,
              alt: "Hotel Buffet Chefs",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetVegetablesPhoto,
              alt: "Hotel Buffet Vegetables",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetIcePhoto,
              alt: "Hotel Buffet Cold Food",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetSoupPhoto,
              alt: "Hotel Buffet Soup",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetPasteriesPhoto,
              alt: "Hotel Buffet Pasteries",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: HotelBuffetSteamPhoto,
              alt: "Hotel Buffet Warm Food",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Returning to our hotel room, we went through our usual morning routine
        and finished our final preparations before heading out for the day. We
        had heard from friends that switching the DiDi app to the Chinese
        language interface might reveal cheaper rates, and sure enough, we were
        immediately bombarded by a huge variety of offers and options. To make
        sense of it all, we headed back to the hotel reception to ask for advice
        on the different services. The staff recommended trying the hitch
        (顺风车) option, which turned out to be way cheaper than the standard
        service. We successfully booked the ride, and although the driver
        requested that we pay the highway tolls when we reached the toll area,
        it was still a fantastic deal. The hour and a half journey was smooth
        and quiet, giving us the perfect opportunity to catch up on some sleep
        before arriving at OMG Heartbeat Park.
      </PageContainerItem>
      <PageContainerItem>
        Our taxi dropped us off a short distance from the entrance of the park
        because of a vehicle-restricted zone that started a few hundred meters
        away. Since we couldn't see the entrance from where we stood, we felt a
        little anxious and quickly checked our maps to confirm we were in the
        right spot. Just then, we overheard someone nearby asking for directions
        and being told to simply walk straight ahead. Following their lead, we
        soon spotted the park logo on the ground, which gave us the relief of
        knowing we had finally arrived at the right place.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: OmgParkGatePhoto,
              alt: "OMG Heartbeat Park Gate",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: OmgParkShadowPhoto,
              alt: "Shadow photo outside OMG Heartbeat Park",
            },
            className: "col-span-8",
          },
        ]}
      />
      <PageContainerItem>
        Moving past the entrance, we stopped at the restrooms nearby to freshen
        up after our long ride before officially starting our exploration. The
        main reason we were so drawn to this park was the Sky Road Flying Car
        (天路飞车), which has a massive reputation online for its thrilling
        2,000-meter track. It allows for drifting down the mountainside at high
        speeds, making it a major highlight for most visitors. It was
        disappointing to find that the ride was under maintenance during the
        visit, but we decided to go ahead anyway. We were confident that the
        park still had plenty of other exciting attractions to make the trip
        worthwhile.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: OmgParkTogetherPhoto,
              alt: "OMG Heartbeat Park Wefie",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: OmgParkMascotPhoto,
              alt: "OMG Heartbeat Park Entrance",
            },
            className: "col-span-4",
          },
        ]}
        caption="Park logo after a toilet break before heading in"
      />
      <PageContainerItem>
        OMG Heartbeat Park, officially known as Chuiyun Riveh to the Heaven
        (垂云通天河), is a premier adventure and scenic destination located in
        Tonglu, Hangzhou. It is famous for its "Up to the Sky and Down to Earth"
        theme, which seamlessly blends high-altitude thrills with deep
        underground explorations within a unique karst landscape. The park holds
        a prestigious National AAAA rating, an official certification awarded by
        China's Ministry of Culture and Tourism for excellence in scenic
        quality, infrastructure, and management. This recognition is driven by
        its rare geological wonders, such as the subterranean Tongtian River
        that stays a constant 18°C, alongside innovative attractions like the
        massive glass Sky Bridge and the immersive Journey to the West themed
        zones. By maintaining strict standards for safety and visitor services
        while offering one-of-a-kind experiences, the park has established
        itself as a top-tier landmark for both nature lovers and thrill-seekers
        alike.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: OmgParkTotemPhoto,
              alt: "OMG Heartbeat Park Totem",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        At the ticketing area, a hospitable robot greeted visitors by eagerly
        waving and attempting to shake hands. It was quite persistent,
        occasionally following those who did not acknowledge its greeting or
        offer a handshake. We were unclear whether the robot was being remotely
        controlled by a staff member or if it was operating through artificial
        intelligence, but the interaction provided a lighthearted moment before
        heading further into the park.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: OmgParkTicketEntrance,
              alt: "Ticketing Counter",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Video,
            media: {
              src: RobotVideo,
              alt: "Robot at the ticketing counter",
            },
            className: "col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        Since we bought our tickets online and had our digital QR codes ready,
        we were able to head straight to the gantry. Just around the corner from
        the entrance, we came across a small booth where we needed to exchange
        our codes for physical tickets depending on our chosen path. The staff
        explained that our current package covered most of the activities on
        Route A, but they encouraged us to try a more adventurous route instead.
        We decided to heed their advice and upgrade our experience.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: OmgParkTicketGantry,
              alt: "Ticket Gantry",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        After leaving the ticket booth, we headed toward the next area. We
        couldn't see any alternative paths nearby, so we continued forward until
        we reached the boat boarding area. The staff there were already urging
        us to hurry up because the next boat was just about to depart, leaving
        us with no choice but to move quickly, since we didn't want to be stuck
        waiting for the next one.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BoatBoardingPhoto,
              alt: "Boat Boarding Area",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Because everything happened so fast, we didn't have time to check the
        map or internalize where we were going. We simply hopped onto the boat
        and braced ourselves for the journey ahead, still trying to process our
        surroundings as we set off. Since we had not researched the specific
        details of the park, we were curious to see where the water would lead
        us. We initially thought it was just a simple boat ride, but as soon as
        we left the dock, a radio speaker began narrating stories about Sun
        Wukong while we drifted towards a cave.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: CaveEntrancePhoto,
              alt: "Cave Entrance",
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
              src: AltarPhoto,
              alt: "Altar in the cave",
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
              src: BuddhaPhoto,
              alt: "Buddha Mural",
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
              src: CaveInspectorPhoto,
              alt: "Cave Inspector",
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
              src: CaveSceneryPhoto,
              alt: "Scenery inside the cave",
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
              src: CaveRewardPhoto,
              alt: "Rewards from completing Cave Exploration",
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
              src: LiftPhoto,
              alt: "Raised Seated Travelator",
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
            type: MediaType.ImageComparison,
            media: {
              first: {
                src: BernardWingPhoto,
                alt: "Bernard with Wings",
              },
              second: {
                src: GalbrenaImage,
                alt: "Galbrena",
              },
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
              src: GlassBridgePhoto,
              alt: "Glass Bridge",
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
              src: LittlePrincePhoto,
              alt: "Little Prince",
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
              src: GlassBridgeOverviewPhoto,
              alt: "Glass Structures in a distance",
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
              src: CliffSwingPhoto,
              alt: "Cliff Swing",
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
              src: AstronautPhoto,
              alt: "Astronaut",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: AstronautTouchPhoto,
              alt: "Touching the Astronaut",
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
              src: ObservatoryMarcusPhoto,
              alt: "Marcus at the Observatory",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: ObservatoryBernardPhoto,
              alt: "Bernard at the Observatory",
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
              src: WaterEntrancePhoto,
              alt: "Water Ride Entrance",
            },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: WaterBackStoryPhoto,
              alt: "Background story for Water Ride",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: WaterBoatPhoto,
              alt: "Boats used in Water Ride",
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
              src: WaterTogetherPhoto,
              alt: "Photo captured during Water Ride",
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
              src: WaterDryerPhoto,
              alt: "Hair Dryer",
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
              src: TeahousePhoto,
              alt: "Qingzhao Tea House",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: TeahouseFoodPhoto,
              alt: "Qingzhao Tea House Food",
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
              src: DoveAreaPhoto,
              alt: "Dove Attraction",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: DoveHousePhoto,
              alt: "Dove House",
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
              src: ForestBernardPhoto,
              alt: "Bernard in Forest Challenge",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ForestMarcusPhoto,
              alt: "Marcus in Forest Challenge",
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
              src: DragonPhoto,
              alt: "Running away from Dragon",
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
              src: GapEntrancePhoto,
              alt: "GAP Entrance",
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
              src: GapAreaPhoto,
              alt: "GAP Area",
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
              src: GapDrinkPhoto,
              alt: "Cafe Drinks",
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
              src: ParkRewardsPhoto,
              alt: "Rewards from completing various challenges at OMG Heartbeat Park",
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
              src: HefangStreetPhoto,
              alt: "Hefang Street",
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
              src: HefangStreetSkewersPhoto,
              alt: "Massive grilled meat skewer bucket",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: HefangStreetPasteryPhoto,
              alt: "Beef pancake",
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
