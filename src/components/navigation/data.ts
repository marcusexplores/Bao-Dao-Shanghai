import { NAVIGATION_KEY } from "./constants";

export type NavigationItem = {
  name: string;
  key: string;
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
    type: "category",
    children: [
      {
        name: "Day 0",
        key: NAVIGATION_KEY.ITINERARY_DAY_0,
        type: "page",
      },
      {
        name: "Day 1",
        key: NAVIGATION_KEY.ITINERARY_DAY_1,
        type: "page",
      },
      {
        name: "Day 2",
        key: NAVIGATION_KEY.ITINERARY_DAY_2,
        type: "page",
      },
      {
        name: "Day 3",
        key: NAVIGATION_KEY.ITINERARY_DAY_3,
        type: "page",
      },
      {
        name: "Day 4",
        key: NAVIGATION_KEY.ITINERARY_DAY_4,
        type: "page",
      },
      {
        name: "Day 5",
        key: NAVIGATION_KEY.ITINERARY_DAY_5,
        type: "page",
      },
      {
        name: "Day 6",
        key: NAVIGATION_KEY.ITINERARY_DAY_6,
        type: "page",
      },
      {
        name: "Day 7",
        key: NAVIGATION_KEY.ITINERARY_DAY_7,
        type: "page",
      },
      {
        name: "Day 8",
        key: NAVIGATION_KEY.ITINERARY_DAY_8,
        type: "page",
      },
    ],
  },
  {
    name: "Budget",
    key: NAVIGATION_KEY.BUDGET,
    type: "page",
  },
  {
    name: "Preparation",
    key: NAVIGATION_KEY.PREPARATION,
    type: "category",
    children: [
      {
        name: "Checklist",
        key: NAVIGATION_KEY.PREPARATION_CHECKLIST,
        type: "page",
      },
    ],
  },
  {
    name: "About",
    key: NAVIGATION_KEY.ABOUT,
    type: "page",
  },
];

export const navigationMenuItems: NavigationItem[] = [
  {
    name: "Home",
    key: NAVIGATION_KEY.HOME,
    type: "page",
  },
  ...navigationItems,
];
