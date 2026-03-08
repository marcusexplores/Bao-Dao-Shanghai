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
import LakeCatVehiclePhoto from "@/assets/photos/Itinerary_Day4_Lake_CatVehicle.jpg";
import LakeBikeTogetherPhoto from "@/assets/photos/Itinerary_Day4_Lake_Bike_Together.jpg";
import LakeLovePhoto from "@/assets/photos/Itinerary_Day4_Lake_Love.jpg";
import LakeJettyPhoto from "@/assets/photos/Itinerary_Day4_Lake_Jetty.jpg";
import LakeLingangPhoto from "@/assets/photos/Itinerary_Day4_Lake_Lingang.jpg";
import LakeSunsetVideo from "@/assets/videos/Itinerary_Day4_Sunset.mp4";
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
        Our next destination was Dishui Lake (滴水湖), a spot we added at the
        last minute to round out our day. While panning across the map, we
        noticed a uniquely circular lake tucked into the corner of the district
        and decided to drop by for a visit. It proved to be a wonderful way to
        relax and wind down after our morning sports activities. The calm
        atmosphere served as a welcome reminder that this is exactly what taking
        time off from work should feel like, rather than just another marathon
        of a packed itinerary.
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
        Upon arriving by taxi, the moment we stepped out, we spotted a rather
        unique mode of transport in the form of a cool blue cat-shaped
        sightseeing buggy. While it appeared that we could pay using Alipay, a
        closer look at the pricing convinced us that the experience was not
        quite worth the cost, so we decided a quick photo would be enough. We
        then began looking around for alternatives and were happy to find two
        shared bikes nearby, which felt like a much better way for both of us to
        explore the area at our own pace.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LakeCatVehiclePhoto,
              alt: "Cat Buggies at Dishui Lake",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: LakeBikeTogetherPhoto,
              alt: "Cycling at Dishui Lake",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Cycling in the cold was incredibly satisfying, with the crisp air
        brushing against our hair and faces as we moved. Although our hands
        began to feel numb after a while, our gloves and windbreakers kept us
        well-protected from the chill. We took the opportunity to pause at
        several different spots along the circumference of the lake to admire
        the view, which felt like the perfect way to soak in the peaceful
        scenery.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LakeLovePhoto,
              alt: "Love Installation",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: LakeJettyPhoto,
              alt: "Jetty",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: LakeLingangPhoto,
              alt: "I love Lingang",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        We found a beautiful grass patch in the Lingang area just in time to
        catch the approaching sunset. After dismounting from our bikes, we took
        a break there to enjoy the serenity and reflect on the deeper meaning of
        life, though in reality, we were mostly just soaking in the peaceful
        atmosphere.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Video,
            media: {
              src: LakeSunsetVideo,
              alt: "Sunset",
            },
            className: "col-span-full aspect-[3/4] max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        With warmth in our hearts but our hunger growing, we booked a taxi and
        headed back to Nanjing Road. Since we didn't have much of a chance to
        explore the area properly yesterday, we took this opportunity to look at
        the surroundings more closely as we passed through.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: CarlowitzPhoto,
              alt: "Carlowitz",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: MuralPhoto,
              alt: "Brick architecture in downtown Shanghai",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Up until this point in our trip, we hadn't managed to sit down
        comfortably and enjoy a full, proper meal in a restaurant. Our dining
        had mostly consisted of grabbing snacks from stalls along the way or
        stopping briefly at a place just to try one or two of their specialties.
        For dinner tonight, we decided to change that by visiting Ji Chang Xing
        (寄畅興), a spot primarily known for its Crab Roe Noodles (蟹黄面).
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
        Initially, we were ushered to a table on the ground floor of the
        restaurant. Just as we thought we had finally escaped the biting air
        outside, we realized after settling in that we could still feel the
        chill from the entrance. Before placing our orders, we quickly requested
        a change of seating and explained the situation to the waiter, who then
        moved us to the upper floor. Once we were finally settled in the warmth,
        we placed our orders and realized that after all that walking and
        snacking from previous days, the sit-down experience felt like a
        complete luxury.
      </PageContainerItem>
      <PageContainerItem>
        The meal turned out to be a fantastic way to experience the signature
        sweet and savory flavors that Shanghai is known for. Our spread included
        a rich bowl of Crab Roe Noodles with its golden sauce and side
        garnishes, alongside a very tender, glazed Dongpo Pork that practically
        melted in the mouth. We also tried the Squirrel-Shaped Mandarin Fish,
        which was fried crisp and topped with a bright sweet and sour sauce.
        However, in my personal opinion, the fish felt a little overrated
        because it tasted quite similar to the sweet and sour pork we have back
        home, and the flavor seemed to diminish as the dish started to cool
        down. On the other hand, the honey-glazed eel was our absolute favorite,
        having been fried until perfectly crispy and tossed in a thick, sweet
        sauce. To round off the meal, the bi-color Xiao Long Bao added a modern
        flair with their two-toned wrappers. It was a well-presented and
        satisfying meal that hit all the regional highlights.
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
        As it was still early, we decided to take a quick peek at the main
        shopping district on Nanjing East Road. Bailian ZX (百联ZX创趣场) soon
        came into view, and although we had originally planned to visit on
        another day, we could not contain our excitement and curiosity. Since
        the entire mall is dedicated to ACG culture (Anime, Comics, Games), our
        eyes lit up as we spotted major brands like Sega and Jump one after
        another, making us even more eager to see what else was in store.
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
        To our pleasant surprise, we discovered a Demon Slayer pop-up store in
        the basement. Several life-sized standees were placed along the walkway,
        and they were also selling a variety of merchandise. Although the
        selection was not huge, it was still a welcome sight and a nice addition
        to the experience.
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
        Some games, such as Brown Dust II, even had their own dedicated themed
        stores selling exclusive merchandise, featuring large displays on the
        ceilings to promote the game. Other areas consisted of broader
        collections where items from various series were sold together in the
        same store.
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
        Our prized find of the night was definitely Punishing: Gray Raven
        (战双帕弥什)! Set on a post-apocalyptic Earth being reclaimed by elite
        squads of cyborg constructs from a devastating machine virus, the game
        is known for its high-speed combat and unique orb-matching mechanic that
        triggers powerful real-time abilities. Usually, we only find one or two
        items of the less popular characters. Here, however, we found an entire
        table stacked with a massive variety of merch, ranging from can badges
        to picture cards, featuring almost every character released to date. It
        was great to see the game receiving the recognition it deserves, and we
        truly hope it continues to prosper.
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
        Being fans of the ACGN culture, we were more than satisfied with the
        variety on display. We realized that if we continued to explore every
        floor, there would be no end to it and we would finish very late. Since
        we need to travel out of the city tomorrow, we decided to stick to the
        lower levels for now and leave the rest of the building for our
        dedicated date so we can slowly appreciate everything.
      </PageContainerItem>
      <PageContainerItem>
        On our way back, we spotted Grandpa's Tea (爷爷自在茶) just outside a
        KFC. It is a tea brand launched and owned by KFC that we do not have
        back home, so we decided to give it a try. We placed our order and paid
        through WeChat, which was a quick and easy way to grab a drink before
        heading back for the night.
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
        Earlier in the day, we received a notification from Taobao (淘宝) that
        the luggage we bought yesterday had already arrived at our hotel. When
        we reached the lobby, we picked it up at the designated collection point
        in the corner, where it stood out among the other packages because of
        its size. Once we got it up to our room and unwrapped it, we were very
        satisfied with both the look and the quality of the product. It was
        impressive to see such speed and efficiency from both the seller and the
        platform.
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
        A deep sense of accomplishment stayed with us as the adrenaline from the
        ski slopes settled into a quiet satisfaction. It was a rather sporty day
        that truly tested our endurance, but learning a new skill while
        traveling made the effort totally worth it. Between the excitement of
        the descent and the relaxing glimpse of the slow life at the lake, we
        found a perfect balance before the transition ahead. We felt prepared
        and at peace as we rested up, ready to be thrown back into the historic
        charm of Suzhou tomorrow.
      </PageContainerItem>
    </>
  );
};
