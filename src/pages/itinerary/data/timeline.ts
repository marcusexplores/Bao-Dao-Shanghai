import { ZapIcon } from "lucide-react";
import type { TimelineActivity } from "@/components/timeline/types";
import Day0Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day0.jpg';
import Day1Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day1.jpg';
import Day2Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day2.jpg';
import Day3Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day3.jpg';
import Day4Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day4.jpg';
import Day5Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day5.jpg';
import Day6Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day6.jpg';
import Day7Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day7.jpg';
import Day8Thumbnail from '@/assets/photos/Itinerary_Thumbnail_Day8.jpg';
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { itineraryDays } from "./days";

export const timeline: TimelineActivity[] = [
  {
    title: itineraryDays[0].title,
    subtitle: itineraryDays[0].date,
    description: "Excitement was the theme of the day! The journey started at Changi International Airport, where I enjoyed a pre-flight dinner before relaxing in the exclusive Blossom Lounge. Finally, it was time to board Juneyao Air, setting the stage for the adventure ahead.",
    icon: ZapIcon,
    thumbnail: Day0Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_0,
  },
  {
    title: itineraryDays[1].title,
    subtitle: itineraryDays[1].date,
    description: "After landing at Shanghai Pudong International Airport, I immediately headed south via high-speed rail to Hangzhou. Upon arrival, I checked into the Hangzhou Hotel. The culinary exploration began with a delicious first meal at 知味观. The rest of the day was dedicated to soaking in the beauty of the West Lake, visiting iconic spots such as 白堤, 平湖秋月, and 曲院风荷. The evening concluded with a bustling dinner experience at the 武林夜市.",
    icon: ZapIcon,
    thumbnail: Day1Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_1,
  },
  {
    title: itineraryDays[2].title,
    subtitle: itineraryDays[2].date,
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day2Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_2,
  },
  {
    title: itineraryDays[3].title,
    subtitle: itineraryDays[3].date,
    description: "Implementation of the core backend services, API structure, and setting up the CI/CD pipeline.",
    icon: ZapIcon,
    thumbnail: Day3Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_3,
  },
  {
    title: itineraryDays[4].title,
    subtitle: itineraryDays[4].date,
    description: "Front-end feature integration, comprehensive unit and integration testing, and bug fixing.",
    icon: ZapIcon,
    thumbnail: Day4Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_4,
  },
  {
    title: itineraryDays[5].title,
    subtitle: itineraryDays[5].date,
    description: "Extensive QA testing, final content review, security audit, and production deployment.",
    icon: ZapIcon,
    thumbnail: Day5Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_5,
  },
  {
    title: itineraryDays[6].title,
    subtitle: itineraryDays[6].date,
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day6Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_6,
  },
  {
    title: itineraryDays[7].title,
    subtitle: itineraryDays[7].date,
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day7Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_7,
  },
  {
    title: itineraryDays[8].title,
    subtitle: itineraryDays[8].date,
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day8Thumbnail,
    link: NAVIGATION_KEY.ITINERARY_DAY_8,
  },
];
