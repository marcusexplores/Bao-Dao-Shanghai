import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { MediaType } from "@/components/page/constants";
import AirportConnectingTrainPhoto from "@/assets/photos/Itinerary_Day1_AirportConnectingTrain.jpg";
import AirportLinkTrainPhoto from "@/assets/photos/Itinerary_Day1_AirportLinkTrain.jpg";
import HotelPhoto from "@/assets/photos/Itinerary_Day1_Hotel.jpg";
import HotelBedPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Bed.jpg";
import HotelFoyerPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Foyer.jpg";
import HotelShowerPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Shower.jpg";
import HotelToiletPhoto from "@/assets/photos/Itinerary_Day1_Hotel_Toilet.jpg";
import ZhiWeiGuanPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan.jpg";
import ZhiWeiGuanWefiePhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Wefie.jpg";
import ZhiWeiGuanMenuPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Menu.jpg";
import ZhiWeiGuanFoodPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Food.jpg";
import ZhiWeiGuanPasteriesPhoto from "@/assets/photos/Itinerary_Day1_ZhiWeiGuan_Pasteries.jpg";
import IAmAtHangzhouPhoto from "@/assets/photos/Itinerary_Day1_IAmAtHangzhou.jpg";
import WaterCalligraphyPhoto from "@/assets/photos/Itinerary_Day1_WaterCalligraphy.jpg";
import SausagePhoto from "@/assets/photos/Itinerary_Day1_XiHuLiWu_Sausage.jpg";
import YuJinFangPhoto from "@/assets/photos/Itinerary_Day1_YuJinFang.jpg";
import DragonBoatPhoto from "@/assets/photos/Itinerary_Day1_Boat_Dragon.jpg";
import FruitTeaPhoto from "@/assets/photos/Itinerary_Day1_FruitTea.jpg";
import BaidiPhoto from "@/assets/photos/Itinerary_Day1_BaiDi.jpg";
import TowerPhoto from "@/assets/photos/Itinerary_Day1_Solo_Tower.jpg";
import MarblePlaquePhoto from "@/assets/photos/Itinerary_Day1_PingHuQiuYue_MarblePlaque.jpg";
import TotemPhoto from "@/assets/photos/Itinerary_Day1_PingHuQiuYue_Totem.jpg";
import SkewerPhoto from "@/assets/photos/Itinerary_Day1_Skewer.jpg";
import YueWangLangPhoto from "@/assets/photos/Itinerary_Day1_YueWangLang.jpg";
import HutPhoto from "@/assets/photos/Itinerary_Day1_Solo_Hut.jpg";
import RiverCruisePhoto from "@/assets/photos/Itinerary_Day1_Boat_RiverCruise.jpg";
import RiverPhoto from "@/assets/photos/Itinerary_Day1_Solo_River.jpg";
import StatueGroupPhoto from "@/assets/photos/Itinerary_Day1_Statue_Group.jpg";
import StatueBarrelPhoto from "@/assets/photos/Itinerary_Day1_Statue_Barrel.jpg";
import StatueWaitressPhoto from "@/assets/photos/Itinerary_Day1_Statue_Waitress.jpg";
import WulinNightMarketPhoto from "@/assets/photos/Itinerary_Day1_Wulin_NightMarket.jpg";
import WulinStoryPhoto from "@/assets/photos/Itinerary_Day1_Wulin_Story.jpg";
import WulinStoryFood1Photo from "@/assets/photos/Itinerary_Day1_Wulin_Story_Food1.jpg";
import WulinStoryFood2Photo from "@/assets/photos/Itinerary_Day1_Wulin_Story_Food2.jpg";

export const ItineraryDay1Page = () => {
  return (
    <>
      <PageContainerItem>
        Stepping off the plane at Shanghai Pudong International Airport Terminal
        2, we were immediately struck by the stark, quiet atmosphere of the
        arrival hall. Unlike many international hubs, the corridors were devoid
        of advertisements or welcoming signs, creating a sense of calm that made
        us feel as though our flight was the only one in the vicinity. It was
        only upon reaching the Automated People Mover platform that we realized
        we had landed at the satellite hall, requiring a short train ride to
        reach the main terminal for immigration and baggage claim.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: AirportConnectingTrainPhoto,
              alt: "Aiport Connecting Train",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Upon entering the main arrival hall, the familiar pulse of the airport
        returned as advertisements and signage finally came into view. Clearing
        immigration proved to be incredibly seamless, largely due to the timely
        rollout of the new digital Arrival Card system. We were grateful to have
        learned that this online service became effective on November 20 this
        year, allowing us to complete the process through the immigration Mini
        Program (移民局12367) found inside Alipay before even leaving home. At
        the counter, the experience was effortless as the officer simply asked a
        few brief questions to confirm our travel intentions before waving us
        through.
      </PageContainerItem>
      <PageContainerItem>
        After searching for a place to sit just outside the arrival gates, we
        eventually found a spot where we could settle in and set up our mobile
        data. While the physical SIM card was a simple plug-and-play process, we
        encountered a slight hurdle with the eSIM, which required an active
        internet connection to activate. Through some quick thinking, we
        tethered the data from the working SIM card to the other phone, allowing
        the eSIM to successfully download and connect. This experience served as
        a useful reminder that the eSIM really should have been added before our
        flight, which would have allowed it to activate automatically the moment
        we landed.
      </PageContainerItem>
      <PageContainerItem>
        Our first destination was Hangzhou, which led us on a search for the
        newly opened Airport Link connecting Pudong to Hongqiao. Although we had
        read online that the wayfinding was straightforward, the actual signs on
        the ground were somewhat ambiguous, offering directions only for the
        Metro, Maglev, and Suburban Railway. After a bit of scrambling and a
        quick look at a helpful YouTube guide, we discovered that following the
        signs for the Suburban Railway was the key to finding the correct
        platform.
      </PageContainerItem>
      <PageContainerItem>
        Navigating the gantries was remarkably easy thanks to the city's
        integrated digital transport system. Instead of queuing for physical
        tickets or transit cards, we simply used the Alipay Mini Program to
        generate a digital Metro card. With just a few taps and a quick scan of
        the QR code at the gate, we were through and on our way, enjoying the
        sheer convenience of a cashless commute.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: AirportLinkTrainPhoto,
              alt: "Aiport Link",
            },
            className: "col-span-full",
          },
        ]}
        caption="Airport Link Platform"
      />
      <PageContainerItem>
        On arrival at Hongqiao, we prepared to transition to the high-speed rail
        for our journey to Hangzhou. We somehow managed to enter the train
        terminal before realizing we hadn't secured tickets yet, so we began
        looking around for a ticketing office or a machine where we could buy
        them. Although we tried using the automated kiosks, they required
        identity verification that wouldn't accept our passports, which is when
        we remembered a friend's recommendation to use the Railway 12306 app.
        While we initially encountered issues with the Alipay Mini Program
        version, downloading the standalone app proved much more effective. We
        found a place to sit and completed our identity verification, which was
        surprisingly approved within minutes. This allowed us to purchase our
        tickets separately on our own phones, and we were lucky enough to be
        assigned seats right next to each other.
      </PageContainerItem>
      {/* Can add a tip here to say can actually buy from a single phone transaction */}
      <PageContainerItem>
        Finding our way through the terminal felt much like being at an airport
        as we scanned the boards for our train number and designated boarding
        gate. Entering the gate was remarkably easy as there was no need to show
        any QR codes or physical tickets. We simply presented our passports at
        the reader and the gates opened for us.
      </PageContainerItem>
      <PageContainerItem>
        Reaching Hangzhou East Station marked the final leg of our commute,
        where we transitioned to the local metro Line 1 toward Wulin Square
        (武林广场) station. The final stretch involved a short walk to our
        hotel, though finding our bearings on the street level took a bit of
        effort. We even found ourselves stepping into a nearby mall to ask for
        directions before we finally arrived at our accommodation, the Hangzhou
        Hotel.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: HotelPhoto,
              alt: "Hangzhou Hotel",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        Locating the entrance proved to be a bit of a challenge, as the hotel
        name was not clearly visible from a distance. Despite this initial
        hurdle, we found the area to be very convenient for calling e-hailing
        rides whenever we needed to head out. Regarding the room itself, we were
        quite satisfied with the amount of space provided. There was plenty of
        room to fully open our luggage and still walk around comfortably, and
        the inclusion of a dedicated resting sofa was a nice touch. We found it
        rather amusing that the shower room was designed with slightly
        translucent glass, leaving the top half quite visible from the bedroom.
        While the hotel wifi was stable and working well, we had to rely on our
        own VPN to access international apps.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: HotelBedPhoto, alt: "Hotel Bedroom" },
            className: "col-span-6 md:col-start-1 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelFoyerPhoto, alt: "Hotel Room Foyer" },
            className: "col-span-6 md:col-start-1 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: HotelShowerPhoto, alt: "Hotel Shower Room" },
            className: "col-span-6 md:col-start-5 md:col-span-4 md:row-span-2",
          },
          {
            type: MediaType.Image,
            media: { src: HotelToiletPhoto, alt: "Hotel Room Toilet" },
            className: "col-span-6 md:col-start-9 md:col-span-4 md:row-span-2",
          },
        ]}
      />
      <PageContainerItem>
        Feeling hungry from all the travelling, our first pit stop was Zhi Wei
        Guan, a renowned restaurant that has been a cornerstone of the Hangzhou
        food scene since 1913. It is famous for being a time-honored brand that
        has served generations of locals and travellers alike, earning
        widespread respect for preserving the culinary heritage of the region.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ZhiWeiGuanPhoto,
              alt: "Zhi Wei Guan",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ZhiWeiGuanWefiePhoto,
              alt: "Wefie in front of Zhi Wei Guan",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        When we entered the restaurant, it was fortunately not too crowded. We
        joined the queue and began placing our order, but when we took a brief
        pause to consider our choices, the customer behind us started shouting
        for us to hurry up. Thankfully, the cashier remained incredibly
        professional. She greeted us with a smile and patiently took our order
        while providing some helpful recommendations. If it had not been for her
        kind demeanour, it really would have ruined the experience.
      </PageContainerItem>
      <PageContainerItem>
        Because of the rush, we decided to settle for what we had already
        ordered and perhaps pick up other snacks along the way, especially since
        our trip had only just started. As a result, we only managed to try a
        few items, including some dumplings, a spring roll, and the classic Dong
        Po Rou. It was a modest start that gave us a quick taste of the local
        flavours.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ZhiWeiGuanMenuPhoto,
              alt: "Zhi Wei Guan Food",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ZhiWeiGuanFoodPhoto,
              alt: "Zhi Wei Guan Menu",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Since West Lake was within walking distance, we took a slow stroll in
        that direction to see the nearby stalls and explore the area. Only a few
        shops down the street, a subsidiary called Zhi Wei Guan Pastry caught
        our eyes. Their signature item appeared to be the Longjing pastry, so we
        bought one along with an osmanthus version. They were actually quite
        nice and rather flavourful.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ZhiWeiGuanPasteriesPhoto,
              alt: "Zhi Wei Guan Pasteries",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        On the way, we spotted a building featuring a prominent scrolling LCD
        screen. It felt like quite an iconic landmark, especially when the words
        "I am in Hangzhou" flashed across the display. We couldn't resist taking
        a photo as a bit of proof that we had finally arrived in the city.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: IAmAtHangzhouPhoto,
              alt: "Hangzhou Promotional Banner",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Water calligraphy was not something we expected to see, but apparently,
        this practice is a common sight in Chinese parks, particularly among the
        older generation who use it as a form of exercise and artistic
        expression. It became popular across the country as a way to practise
        the traditional art of calligraphy without the cost of expensive ink and
        paper, using an oversized brush made of foam or sponge attached to a
        long handle which is then dipped into plain water collected from the
        nearby lake. The practitioners use the stone pavement as their canvas to
        write beautiful characters or poems, with several of them scattered
        along the path and positioned a short distance from one another to
        ensure they had enough space for their art.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: WaterCalligraphyPhoto,
              alt: "Water Calligraphy",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        While taking a moment to appreciate the art, we could not help but
        notice some disappointing moments. Some children were trying to wipe
        away the water and were destroying the art right under the eyes of the
        artists. Although the parents were nearby, they seemed oblivious to the
        artists' feelings and did not stop the children. Luckily, it was only a
        brief moment before the peace was restored.
      </PageContainerItem>
      <PageContainerItem>
        Before we knew it, we had already reached West Lake. Since our stomachs
        were still not full, we came across a food stall where the sight of some
        juicy sausages stopped us in our tracks. We decided to buy one, but
        little did we know at the time that it was overpriced. We only realised
        this later when we spotted cheaper sausages being sold as we explored
        further along the lakeside.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SausagePhoto,
              alt: "Sausage",
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
              src: YuJinFangPhoto,
              alt: "Yu Jin Fang",
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
              src: DragonBoatPhoto,
              alt: "Boat with dragon shape",
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
              src: FruitTeaPhoto,
              alt: "Fruit Tea",
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
              src: BaidiPhoto,
              alt: "Bai Di",
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
              src: TowerPhoto,
              alt: "Tower",
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
              src: MarblePlaquePhoto,
              alt: "Ping Hu Qiu Yue Marble Plaque",
            },
            className: "col-span-8",
          },
          {
            type: MediaType.Image,
            media: {
              src: TotemPhoto,
              alt: "Ping Hu Qiu Yue Totem",
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
              src: SkewerPhoto,
              alt: "Skewers",
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
              src: YueWangLangPhoto,
              alt: "Yue Wang Lang",
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
              src: HutPhoto,
              alt: "Hut",
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
              src: RiverCruisePhoto,
              alt: "River Boat",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: RiverPhoto,
              alt: "Admiring the River",
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
              src: StatueGroupPhoto,
              alt: "River Boat",
            },
            className: "col-start-1 col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: StatueBarrelPhoto,
              alt: "Admiring the River",
            },
            className: "col-start-1 col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: StatueWaitressPhoto,
              alt: "Admiring the River",
            },
            className: "col-start-7 col-span-6 row-span-2",
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
              src: WulinNightMarketPhoto,
              alt: "Wulin Night Market",
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
              src: WulinStoryPhoto,
              alt: "Wu Lin Gu Shi",
            },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: WulinStoryFood1Photo,
              alt: "Wu Lin Gu Shi Food 1",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: WulinStoryFood2Photo,
              alt: "Wu Lin Gu Shi Food 2",
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
    </>
  );
};
