import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { NAVIGATION_KEY } from "./constants";
import {
  CalendarDaysIcon,
  HomeIcon,
  LayoutPanelTopIcon,
  MailIcon,
  MessageSquareTextIcon,
  type LucideProps,
} from "lucide-react";

// interface NavigationItem {
//   key: string;
//   label: string;
// }

// export const navigationItems: DeepReadonly<NavigationItem[]> = [
//   {
//     key: NAVIGATION_KEY.ITINERARY,
//     label: "Itinerary",
//   },
//   {
//     key: NAVIGATION_KEY.BUDGET,
//     label: "Budget",
//   },
//   {
//     key: NAVIGATION_KEY.GUIDE,
//     label: "Guide",
//   },
//   {
//     key: NAVIGATION_KEY.ABOUT,
//     label: "About",
//   },
// ];

// export const navigationMenuItems: DeepReadonly<NavigationItem[]> = [
//   {
//     key: NAVIGATION_KEY.HOME,
//     label: "Home",
//   },
//   ...navigationItems
// ];

export type NavigationItem = {
  name: string;
  key: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
} & (
  | {
      type: "page";
      children?: never;
    }
  | {
      type: "category";
      children: NavigationItem[];
    }
);

export const navigationItems: NavigationItem[] = [
  {
    name: "Itinerary",
    key: NAVIGATION_KEY.ITINERARY,
    icon: LayoutPanelTopIcon,
    type: "category",
    children: [
      {
        name: "Day 1",
        key: NAVIGATION_KEY.ITINERARY_DAY_1,
        icon: LayoutPanelTopIcon,
        type: "page",
      },
    ],
  },
  {
    name: "Budget",
    key: NAVIGATION_KEY.BUDGET,
    icon: MessageSquareTextIcon,
    type: "page",
  },
  {
    name: "Guide",
    key: NAVIGATION_KEY.GUIDE,
    icon: MailIcon,
    type: "page",
  },
  {
    name: "About",
    key: NAVIGATION_KEY.ABOUT,
    icon: CalendarDaysIcon,
    type: "page",
  },
];

export const navigationMenuItems: NavigationItem[] = [
  {
    name: "Home",
    key: NAVIGATION_KEY.HOME,
    icon: HomeIcon,
    type: "page",
  },
  ...navigationItems,
];
