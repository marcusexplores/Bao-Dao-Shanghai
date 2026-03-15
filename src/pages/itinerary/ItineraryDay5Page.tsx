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
        Before we started hitting the tourist spots and exploring further, we
        thought it was better to eat something first, otherwise, once we
        started, there was no telling how long we would take. It was a little
        early for lunch, but we knew that waiting until later would likely be
        too late. We quickly scanned the area and randomly entered Jin Shui Tai
        (近水台面馆), a restaurant serving something familiar, to grab a quick
        bite and fuel up for the walk ahead.
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
        Making a U-turn after straying away from the tourist spots, we headed
        toward the Humble Administrator's Garden (拙政园). Following the metal
        railings and the QR codes for admission, we retraced our footsteps to
        the end of the queue, thinking we could simply purchase tickets through
        the Meituan app. However, the system required a local identification
        number that we didn't have. After checking with a nearby staff member,
        we were guided to a self-ticketing machine further down the path where
        we presented our passports and bought our tickets for 70 RMB per person.
      </PageContainerItem>
      <PageContainerItem>
        The UNESCO World Heritage site is a massive labyrinth that feels like
        walking through a life-sized landscape painting. It is the ultimate spot
        for capturing classic architecture and serene backyard scenes, making it
        incredibly popular for photography. As soon as we entered, we saw many
        visitors donned in traditional costumes, posing for photos against the
        ancient pavilions and colorful flowers. The scenery was so sought after
        that there were even queues of people waiting for their turn at the more
        popular photo spots.
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
        Water is the soul of the garden, where vast pools and winding streams
        create shimmering reflections that seem to double the beauty of the
        landscape. As we explored deeper, the crowds grew denser and the walking
        paths narrowed, making it impossible not to overhear tour guides
        explaining the scenery to their groups. It was interesting to hear how
        different guides focused on various elements, from the unique rock
        formations and water bodies to the small ornaments scattered around the
        garden. Just for fun, we tailed one for a while, eavesdropping as they
        described the history and hidden details of the area.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenMaplePondPhoto,
              alt: "Pond with Maple Tree in Humble Administrator's Garden",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenPond1Photo,
              alt: "A Pond in Humble Administrator's Garden",
            },
            className: "col-span-6",
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
          {
            type: MediaType.Image,
            media: {
              src: AdminGardenPondMistPhoto,
              alt: "A Pond with mist in Humble Administrator's Garden",
            },
            className: "col-span-full md:col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        En route to the exit, we came across a large maple tree where groups of
        tourists had gathered to capture the perfect shot. Seeing others picking
        up fallen leaves to use as props inspired us to create our own artistic
        memento by holding a single, vibrant leaf against the backdrop of the
        fiery red canopy. The result was a memorable photo that focused on the
        delicate details of the autumn foliage in our hands, perfectly capturing
        the seasonal essence of the garden before we headed out.
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
        Right near the exit, the popular and trendy Bamboo Milk Tea (竹筒奶茶)
        caught our eyes. As it was a massive social media sensation, we decided
        to try it for ourselves, especially since there was a promotion for a
        second cup at half price. We ordered the Osmanthus Oolong Milk Tea
        (桂花乌龙奶茶) and the Jasmine Biluochun Milk Tea (茉莉碧螺春奶茶) with
        high expectations for a unique, premium tea flavor. However, we were a
        bit disappointed to find that the tea tasted quite ordinary and the cup
        was mostly filled with whipped cream. It definitely falls into the
        category of things you only need to try once, as the experience is
        clearly more about the aesthetic than the drink itself.
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
        Stepping into Pingjiang Road (平江路), we found ourselves in the
        quintessential Jiangnan water town experience where the ancient street
        runs exactly parallel to the peaceful Pingjiang River. The area was
        alive with dozens of travelers wearing elegant Hanfu or Qipao, many with
        professional photographers in tow to capture the perfect moment.
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
        While we had already enjoyed the popular crab noodles and heard much
        about the famous hairy crabs, this was our first time witnessing the
        behind the scenes work that goes into such these local delicacies. We
        saw firsthand the labor intensive reality of the dish, realizing that a
        bowl of crab roe noodles finished in mere minutes actually requires
        hours of manual effort from several people just to prepare the
        ingredients for a single serving. It was a striking reminder of the true
        cost of flavor and the dedication required to maintain these traditional
        culinary standards.
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
        Along the streets, we caught the fragrance of Jiangnan Meihua Gao
        (江南梅花糕), a traditional snack shaped like a plum blossom. We
        couldn't resist buying one to try, and it turned out to be the perfect
        choice. Served piping hot, it was incredibly comforting to eat in the
        cold air. The bottom is a crispy, golden-brown cone made from batter,
        while the top remains soft and packed with colorful toppings, offering a
        delightful mix of textures in every bite.
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
        Since we were in such a traditional area, it was rare to see Western
        elements like bread, cakes, and tarts. However, the pastries at August
        Osmanthus looked and smelled so inviting that we decided to pause and
        patronize the shop. While we were there, the shop assistant waved us
        over for help with a translation. A pair of tourists was trying to ask
        if the stall sold halal food, even showing her Google Translate, but she
        could not quite grasp the meaning. We stepped in to explain that the
        couple was inquiring if the food was halal (清真). She quickly shook her
        head, so we conveyed the "no" to the couple, who then moved on.
      </PageContainerItem>
      <PageContainerItem>
        As they left, the assistant pointed to the bakery machines and mentioned
        that the pastries were not "lightly steamed" (轻蒸). It suddenly dawned
        on us that she still had not understood the question. Because the two
        terms sound so similar, she had mistaken a dietary requirement for a
        cooking method. Sadly, the couple had already disappeared into the crowd
        before we could clarify the mix-up. We eventually picked up a small
        sponge cake topped with caramelized sugar and scooted off to find a spot
        to rest, though it turned out to be a bit of a disappointment as the
        taste was quite ordinary.
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
        Back on track after our small break, we spotted a rather interesting cat
        café where several cats were casually resting and moving about the
        open-windowed second floor. The shop featured a few unique breeds that
        we do not usually see elsewhere, appearing quite elegant and graceful as
        they perched above the street. One of them, however, looked as if it had
        only just woken up, with its fur looking hilariously unkempt compared to
        its companions. We joined a few other passersby on the ground floor,
        pausing for a moment to admire these cats as they peered out over the
        street.
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
        Having traveled all the way to Suzhou, we could not leave without
        picking up some souvenirs. We eventually came across Momicafe
        (猫的天空之城), which is far more than just a typical bookstore as it
        serves as a treasure trove for anyone who loves stationery and the
        slow-living aesthetic. This specialized concept store features shelves
        packed with carefully curated goods, including their famous "Postcards
        to the Future" service. This unique offering allows one to buy beautiful
        local postcards and have the shop hold and mail them on a specific
        chosen date, even years into the future. Although we did not end up
        sending any postcards to our future selves, we bought several back as
        souvenirs.
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
