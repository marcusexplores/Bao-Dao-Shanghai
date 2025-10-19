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
        name: "Day 1",
        key: NAVIGATION_KEY.ITINERARY_DAY_1,
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
        name: "Packing List",
        key: NAVIGATION_KEY.PREPARATION_PACKING_LIST,
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
