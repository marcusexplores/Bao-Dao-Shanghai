import { ZapIcon } from "lucide-react";
import type { TimelineActivity } from "@/components/timeline/types";
import Day0Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day0.jpg";
import Day1Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day1.jpg";
import Day2Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day2.jpg";
import Day3Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day3.jpg";
import Day4Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day4.jpg";
import Day5Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day5.jpg";
import Day6Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day6.jpg";
import Day7Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day7.jpg";
import Day8Thumbnail from "@/assets/photos/Itinerary_Thumbnail_Day8.jpg";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { itineraryDays } from "./days";

export const timeline: TimelineActivity[] = [
  {
    title: itineraryDays[0].title,
    subtitle: itineraryDays[0].date,
    description:
      "Our journey began at Changi International Airport, where the anticipation was palpable. After a quiet pre-flight dinner and a moment of calm in the Blossom Lounge, we boarded our flight with Juneyao Air, marking the official start of our long-awaited adventure.",
    icon: ZapIcon,
    thumbnail: Day0Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_0,
  },
  {
    title: itineraryDays[1].title,
    subtitle: itineraryDays[1].date,
    description:
      "After touching down at Shanghai Pudong International Airport, we traveled via high-speed rail to the ancient city of Hangzhou. Following a smooth check-in at the Hangzhou Hotel and a welcoming first meal at the renowned Zhi Wei Guan, we dedicated our day to the timeless landscapes of West Lake. From the historic Baidi causeway to the tranquil views at Ping Hu Qiu Yue and Qu Yuan Feng He, every stop felt like a step into a painting. We eventually capped off the evening by immersing ourselves in the lively atmosphere of the Wulin Night Market.",
    icon: ZapIcon,
    thumbnail: Day1Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_1,
  },
  {
    title: itineraryDays[2].title,
    subtitle: itineraryDays[2].date,
    description:
      "Spending a full day immersed in the thrills of OMG Heartbeat Park offered a perfect blend of breathtaking heights and adrenaline. This journey into the mountains eventually led back to the city, where the evening concluded at Hefang Street with a leisurely stroll through its historic architecture and bustling market stalls.",
    icon: ZapIcon,
    thumbnail: Day2Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_2,
  },
  {
    title: itineraryDays[3].title,
    subtitle: itineraryDays[3].date,
    description:
      "Returning to Shanghai via high-speed rail, the journey continued with a check-in at the Mehood Elegant Hotel before heading to Neo World to view our game installations. As night fell, the evening centered on the timeless charm of Yu Garden, where famous local delicacies were enjoyed amidst the glow of magnificently lit architecture. A final stroll toward the Bund offered a breathtaking view of the iconic skyline, framed by the picturesque and classic buildings that define the city's waterfront.",
    icon: ZapIcon,
    thumbnail: Day3Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_3,
  },
  {
    title: itineraryDays[4].title,
    subtitle: itineraryDays[4].date,
    description:
      "Mastering new skills at the L+SNOW Indoor Ski Resort filled our morning with excitement, followed by a quiet afternoon where we relaxed by the shores of Di Shui Lake. With some time to spare as evening arrived, we headed over to the neon-lit stretch of Nanjing Road to soak in the vibrant energy of the city's premier shopping district.",
    icon: ZapIcon,
    thumbnail: Day4Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_4,
  },
  {
    title: itineraryDays[5].title,
    subtitle: itineraryDays[5].date,
    description:
      "Crossing into the serene beauty of Suzhou for a full day of exploration allowed us to wander through its famous gardens and along its quiet canals. We remained captivated by the city's charm well into the late night, watching as the traditional landscapes took on a new magic under the evening glow.",
    icon: ZapIcon,
    thumbnail: Day5Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_5,
  },
  {
    title: itineraryDays[6].title,
    subtitle: itineraryDays[6].date,
    description:
      "Stepping into the magic of Shanghai Disneyland, we dedicated an entire day to exploring its enchanted lands and world-class attractions. From the morning's first thrills to the spectacular nighttime displays, we found ourselves fully swept up in the park's unique atmosphere, staying until the final lights flickered over the castle to conclude our immersive adventure.",
    icon: ZapIcon,
    thumbnail: Day6Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_6,
  },
  {
    title: itineraryDays[7].title,
    subtitle: itineraryDays[7].date,
    description:
      "Starting the morning with local flavors, we enjoyed a traditional egg pancake at Ding Xing Road before diving into a day of shopping. Our hunt for game merchandise took us through the vibrant floors of Joy City, followed by a midday break to savor the famous flavors of Lai Lai Dumpling. We spent the rest of the afternoon at Bailian ZX, further expanding our collection of merch and fully immersing ourselves in the city's lively anime-culture scene.",
    icon: ZapIcon,
    thumbnail: Day7Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_7,
  },
  {
    title: itineraryDays[8].title,
    subtitle: itineraryDays[8].date,
    description:
      "Concluding our journey where it all began, we made our way back to Shanghai Pudong International Airport for the return flight to Singapore. As we prepared for departure, there was a quiet moment to reflect on the incredible memories made over the past week before we boarded our flight, bringing a perfect end to our unforgettable adventure.",
    icon: ZapIcon,
    thumbnail: Day8Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_8,
  },
];
