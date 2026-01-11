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
import YueWangMiaoPhoto from "@/assets/photos/Itinerary_Day1_YueWangMiao.jpg";
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
              alt: "Sausage near Hangzhou West Lake",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        From a distance, we could hear a melodious tune and soon a beautiful
        lady playing the instrument loomed into view, appearing like a vision
        from a classical silk painting. She was seated upon the Yujinfang
        (玉津舫), a pavilion-shaped vessel that rests elegantly at the water's
        edge.
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
        Just beside, a magnificent golden dragon boat was returning to the dock.
        This is the most luxurious way to experience the West Lake, as the boat
        is essentially a floating palace designed to give modern travellers a
        taste of how emperors once toured these waters. We did not buy tickets
        for it because we felt that such rides are better appreciated by
        capturing the view of the boat from the land. Being on board would only
        allow us to see the surrounding lake, which was a view we could already
        enjoy while walking along the shore.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: DragonBoatPhoto,
              alt: "Golden dragon boat",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Craving something hot in the cold weather, we came across a stall
        selling tea with quite a variety of flavours. The stall lady gave us
        several samples to try, some of which were meant for drinking while
        others could be eaten directly. The hot tea was very refreshing in the
        chilly air, and we found the flavours quite palatable and easy to enjoy.
        We thought it was a unique find, so we bought a fair amount, only to
        realise later in our trip that there were many other shops and stalls
        selling the exact same kind of tea.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: FruitTeaPhoto,
              alt: "Fruit Tea Stall",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        The stall owner was incredibly chatty, moving quickly from promoting her
        tea to sharing personal stories about how her hands had grown rough from
        years of labour. She mentioned that she was single and without a
        partner, even asking if Singaporeans would ever marry someone from
        China. While she seemed aware of her own talkativeness, she explained
        through her apologies that she simply felt lonely working there. Since
        her questions were becoming rather personal, we decided to make our
        purchase and quickly moved away.
      </PageContainerItem>
      <PageContainerItem>
        Sipping our hot tea, we continued our stroll toward the Bai Causeway
        (白堤), a famous stone path that connects the urban centre of Hangzhou
        with the scenic lake region. The causeway was named in honour of the
        Tang Dynasty poet Bai Juyi, who served as the local governor and held a
        deep affection for the area. Lined with weeping willows and peach trees,
        the path creates a picturesque frame for the water and feels like a
        natural corridor stretching across the lake. Walking along this historic
        stretch offered us a panoramic view of the surrounding hills and the
        shimmering surface of the water.
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
        As we walked, iconic landmarks like the Leifeng Pagoda rose in the
        distance beyond the water. The environment was incredibly serene, and
        with the pleasant weather, the entire stroll felt deeply relaxing. Every
        turn offered a beautiful new perspective of the lake's natural
        landscape, providing us with numerous picturesque spots that were
        perfect for photos.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: TowerPhoto,
              alt: "Scenic view with Tower",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        Ping Hu Qiu Yu (平湖秋月), also known as Autumn Moon over the Calm Lake,
        was the next scenic spot on our itinerary. Situated at the end of the
        Bai Causeway, this location is famous for offering the most expansive
        and unobstructed view of the water. It is officially recognised as one
        of the ten iconic scenes of West Lake and has long been a place where
        scholars and emperors gathered to admire the moon's reflection on the
        still, mirror-like surface. Even without the moonlight, the traditional
        pavilions and open terraces create a poetic atmosphere, making the
        entire landscape look like a vast, peaceful painting.
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
        Following the GPS to our next destination, we came across Yue Hong Jia
        Jia (岳虹酒家), where the sight of large skewers caught our attention.
        We decided to stop and buy one beef and one mutton skewer, though in
        hindsight, we wouldn't recommend buying from here. Similar skewers can
        be found at places like the Wulin Night Market, which offer much better
        value for money.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SkewerPhoto,
              alt: "Grilled Skewers",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        A staff invited us to sit inside the restaurant, but we were initially
        hesitant and wary that it might be a gimmick to trick us into ordering
        more food. Seeing that the restaurant was not too crowded, he assured us
        that it was perfectly fine to just sit there without any further orders.
        While we were waiting for our skewers, the owner asked if we could leave
        a positive review on Dianping. We explained that we were foreigners, but
        we still tried to open the app to help. Unfortunately, the app prompted
        us for identity verification. Even before we could post anything, the
        owner brought over some dessert for us. We tried to reject it because we
        felt bad and didn't want to incur any unnecessary costs, especially
        since we weren't sure if the review would go through.
      </PageContainerItem>
      <PageContainerItem>
        We left the dessert untouched for a while as we searched for a way to
        bypass the verification, but we had no luck. When we eventually
        apologised to the owner and explained that the app wouldn't let us leave
        a review, he told us it was not a problem. Noticing that we still hadn't
        touched the dessert, he assured us it was a gift and encouraged us to
        eat. We eventually enjoyed the treat, thanked them for their
        hospitality, and went on our way.
      </PageContainerItem>
      <PageContainerItem>
        Originally, our plan was to visit Yue Fei Temple (岳王庙), a site built
        to commemorate the legendary Southern Song Dynasty general who is
        revered as a national hero for his loyalty and bravery. As both his
        memorial and final resting place, the temple is famous for its solemn
        architecture and the iron statues of his betrayers kneeling in eternal
        shame before his tomb. We only had enough time to capture a quick photo
        of the entrance from across the road before we had to move on.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: YueWangMiaoPhoto,
              alt: "Yue Wang Miao",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Upon arriving at QuYuan Fenghe (曲院风荷), also known as Breeze-Ruffled
        Lotus at Qu Garden, we spent some time walking along the meandering
        bridges. Since we visited during the off-peak season, we unfortunately
        missed the sight of the beautiful, blooming lotus flowers and were
        instead met with withered ones. Seeing the landscape in this state made
        us start to question why we had even included this stop on our
        itinerary.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: HutPhoto,
              alt: "Hut at QuYuan Fenghe",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Fortunately, as we ventured further in, the scenery shifted and we were
        met with a truly picturesque backyard. A small, traditional boat glided
        through the narrow waterway, creating gentle ripples that broke the
        stillness of the green garden. Standing on the wooden bridges and
        looking out over the water, we found the serene atmosphere we had been
        hoping for, with lush trees hanging over the banks and quaint pavilions
        tucked away in the foliage. It was a hidden pocket of beauty that made
        the walk through the park worthwhile after all.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: RiverCruisePhoto,
              alt: "Canal Cruise",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: RiverPhoto,
              alt: "Quiet moment by the canal",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        On our way out, we stumbled upon the Southern Song Dynasty Imperial Wine
        Workshop located within the scenic area. This historical exhibit
        recreates the atmosphere of an ancient brewery, complete with large
        ceramic wine vats and bronze statues depicting the traditional
        wine-making process. Feeling a bit cheeky, we decided to interact with
        the statues to bring the scene to life for our photos. We posed
        alongside the figures, pretending to inspect the heavy jars and pointing
        out towards the garden as if we were part of the historical display.
        This lively area also turned out to be a convenient spot for a quick
        toilet break before we continued our journey.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: StatueGroupPhoto,
              alt: "Blending in with the ancient statues of the wine workshop",
            },
            className: "col-start-1 col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: StatueBarrelPhoto,
              alt: "Inspection at the wine workshop",
            },
            className: "col-start-1 col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: StatueWaitressPhoto,
              alt: "Waitress of the wine workshop",
            },
            className: "col-start-7 col-span-6 row-span-2",
          },
        ]}
      />
      <PageContainerItem>
        Trying to make our way toward Leifeng Pagoda, we stopped to buy some
        sausages as snacks to replenish our energy before making a small loop
        around a nearby garden. Once we reached the pagoda, we realized there
        was an entrance fee to go up. We ultimately decided against it, feeling
        that the structure is best viewed from a distance rather than from the
        top. Having taken a red-eye flight, exhaustion finally started to set
        in, so we opted to take a taxi back to the hotel for a power nap before
        heading out again for dinner.
      </PageContainerItem>
      <PageContainerItem>
        Waking up refreshed from a good rest, we made our way toward Wulin Night
        Market. When we reached Wulin Road, we noticed a few food stalls already
        lined up along the sidewalk. Although the displays looked quite
        appetizing, the area was surprisingly quiet with little to no customers
        in sight. Seeing the empty street made us suspect that we hadn't
        actually found the main market yet, prompting us to keep searching for
        the real hub of activity.
      </PageContainerItem>
      <PageContainerItem>
        True enough, once we reached the actual Wulin Night Market (武林夜市),
        the atmosphere shifted completely into a vibrant hub of local life. Rows
        of brightly lit stalls stretched down the street, offering everything
        from trendy fashion and handmade crafts to quirky souvenirs. The air was
        thick with the enticing scents of street food as vendors served up local
        favorites like stinky tofu and grilled seafood. Spotting the same
        oversized meat skewers we had seen earlier made it clear that this was
        the real spot for variety, and seeing the much lower prices actually
        made us feel a bit cheated by what we had paid back at the lake.
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
        Beyond the individual street stalls, we found larger establishments like
        Long Xing Tian Xia Food Plaza (龙行天下美食广场), which offered a
        centralized cluster of food options with shared tables and seating. The
        stalls were cleverly designed with two sides to serve different needs.
        Those looking for a quick bite can order from the outside counter to
        take their food on the go, while those who prefer to dine in can secure
        a seat and order from the inside counter.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: WulinStoryPhoto,
              alt: "Long Xing Tian Xia Food Plaza",
            },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: WulinStoryFood1Photo,
              alt: "Dumplings and local street snacks",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: WulinStoryFood2Photo,
              alt: "Chili-topped seafood and potatoes",
            },
            className: "col-span-6 md:col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        For a start, we played it safe by ordering familiar favorites like
        potatoes and shrimps. We also spotted some Pan-fried Buns (生煎包) and
        since they looked so small and cute, we were intrigued enough to give
        them a try. However, they didn't really share the same reputation as the
        original-sized ones and felt more like simple finger food. Then we came
        across Grilled Sweet Potato Skin (烤苕皮). It was something we had never
        seen before and we had no idea what it was, but we decided to give it a
        go anyway. All we can say is that it is definitely an acquired taste.
      </PageContainerItem>
      <PageContainerItem>
        Other food and drinks we tried were the Longjing Jasmine Soybean Milk
        nearby and the Hotplate Tofu at Wulin Food Street (武林好吃街). We felt
        satisfied with this spread of variety for dinner and began to slowly
        make our way back to the hotel to rest for the night.
      </PageContainerItem>
      <PageContainerItem>
        The bustling noise of the market eventually faded into the distance, and
        the vibrant neon glow gave way to the quieter, steady hum of the streets
        leading back to our hotel. A sense of calm finally took over when the
        day's long walks and the lingering exhaustion from the red-eye flight
        caught up with us. Satisfied with the variety of food we had discovered
        and the local rhythm we had finally found, we leaned back into our
        pillows and closed our eyes. We drifted off feeling at peace, but with a
        spark of anticipation for the morning.
      </PageContainerItem>
    </>
  );
};
