import { PlaneIcon, type LucideIcon } from "lucide-react";

export interface Item {
  name: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  link?: string;
}

export interface Category {
  title: string;
  items: Item[];
}

export const recommendations: Category[] = [
  {
    title: "Flight",
    items: [
      {
        name: "Juneyao Air",
        description: "Good Airline",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    items: [
      {
        name: "Hangzhou Hotel",
        description: "Good Hotel",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "Mehood Elegant Hotel",
        description: "Good Hotel",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Insurance",
    items: [
      {
        name: "FWD Insurance",
        description: "Good Insurance",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Network Communication",
    items: [
      {
        name: "eSim",
        description: "Instant digital SIM for data connectivity.",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "VPN",
    items: [
      {
        name: "Secure VPN",
        description: "Good vpn.",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        name: "Alipay (Zhifubao)",
        description: "Primary digital wallet for international visitors.",
        icon: PlaneIcon,
        details: [
          "Supports international Visa/Mastercard linking without a local bank account.",
          "Built-in 'TourPass' feature specifically designed for travelers.",
          "Includes mini-programs for Didi (ride-hailing) and Metro codes.",
          "Widely accepted from high-end malls to street food stalls.",
        ],
        link: "https://www.alipay.com",
      },
      {
        name: "WeChat Pay",
        description: "Social messaging and payment integrated in one.",
        icon: PlaneIcon,
        details: [
          "Integrated within the WeChat app (Weixin).",
          "Requires account verification with passport for international cards.",
          "Essential for splitting bills and local social interactions.",
          "Best for accessing restaurant menus (QR ordering) which is the norm in Shanghai.",
        ],
        link: "https://pay.weixin.qq.com",
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        name: "Amap (Gaode)",
        description: "Most accurate for live traffic and metro exits.",
        icon: PlaneIcon,
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
];
