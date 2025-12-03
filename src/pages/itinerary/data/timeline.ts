import { ZapIcon } from "lucide-react";
import type { TimelineActivity } from "@/components/timeline/types";
import Day0Thumbnail from '@/assets/photos/Itinerary_Day0_Thumbnail.jpg';
import Day1Thumbnail from '@/assets/photos/Itinerary_Day1_Thumbnail.jpg';
import Day2Thumbnail from '@/assets/photos/Itinerary_Day2_Thumbnail.jpg';
import Day3Thumbnail from '@/assets/photos/Itinerary_Day3_Thumbnail.jpg';
import Day4Thumbnail from '@/assets/photos/Itinerary_Day4_Thumbnail.jpg';
import Day5Thumbnail from '@/assets/photos/Itinerary_Day5_Thumbnail.jpg';
import Day6Thumbnail from '@/assets/photos/Itinerary_Day6_Thumbnail.jpg';
import Day7Thumbnail from '@/assets/photos/Itinerary_Day7_Thumbnail.jpg';
import Day8Thumbnail from '@/assets/photos/Itinerary_Day8_Thumbnail.jpg';

export const timeline: TimelineActivity[] = [
  {
    title: "Day 0",
    subtitle: "23 November 2025",
    description: "Excitement was the theme of the day! The journey started at Changi International Airport, where I enjoyed a pre-flight dinner before relaxing in the exclusive Blossom Lounge. Finally, it was time to board Juneyao Air, setting the stage for the adventure ahead.",
    icon: ZapIcon,
    thumbnail: Day0Thumbnail
  },
  {
    title: "Day 1",
    subtitle: "24 November 2025",
    description: "After landing at Shanghai Pudong International Airport, I immediately headed south via high-speed rail to Hangzhou. Upon arrival, I checked into the Hangzhou Hotel. The culinary exploration began with a delicious first meal at 知味观. The rest of the day was dedicated to soaking in the beauty of the West Lake, visiting iconic spots such as 白堤, 平湖秋月, and 曲院风荷. The evening concluded with a bustling dinner experience at the 武林夜市.",
    icon: ZapIcon,
    thumbnail: Day1Thumbnail
  },
  {
    title: "Day 2",
    subtitle: "25 November 2025",
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day2Thumbnail
  },
  {
    title: "Day 3",
    subtitle: "26 November 2025",
    description: "Implementation of the core backend services, API structure, and setting up the CI/CD pipeline.",
    icon: ZapIcon,
    thumbnail: Day3Thumbnail
  },
  {
    title: "Day 4",
    subtitle: "27 November 2025",
    description: "Front-end feature integration, comprehensive unit and integration testing, and bug fixing.",
    icon: ZapIcon,
    thumbnail: Day4Thumbnail
  },
  {
    title: "Day 5",
    subtitle: "28 November 2025",
    description: "Extensive QA testing, final content review, security audit, and production deployment.",
    icon: ZapIcon,
    thumbnail: Day5Thumbnail
  },
  {
    title: "Day 6",
    subtitle: "29 November 2025",
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day6Thumbnail
  },
  {
    title: "Day 7",
    subtitle: "30 November 2025",
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day7Thumbnail
  },
  {
    title: "Day 8",
    subtitle: "1 December 2025",
    description: "Wireframing, mockups, and interactive prototypes. Focusing on user experience and visual identity.",
    icon: ZapIcon,
    thumbnail: Day8Thumbnail
  },
];
