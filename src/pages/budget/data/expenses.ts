import type { JSX } from "react";
import {
  FlightIcon,
  AccommodationIcon,
  InsuranceIcon,
  CommunicationIcon,
  TransportIcon,
  FoodIcon,
  EntertainmentIcon,
  OtherIcon,
} from "./icons";
import { BUDGET_CATEGORY } from "../constants";

interface ExpenseItem {
  name: string;
  description?: string;
  breakdown?: Record<string, number>;
}

interface ExpenseCategory {
  name: string;
  color: string;
  icon: JSX.Element;
  items: ExpenseItem[];
}

export const expenses: ExpenseCategory[] = [
  {
    name: BUDGET_CATEGORY.FLIGHT,
    color: "var(--chart-1)",
    icon: FlightIcon,
    items: [
      {
        name: "Juneyao Air",
        description: "Round Trip Economy Class",
        breakdown: {
          Fare: 480,
          Tax: 517.4,
          "Checked Baggage (2 x 23KG)": 0,
          "Hand Baggage (1 x 5KG)": 0,
          "Meals Included": 0,
          "Mari Credit Card Cashback 1.7%": -16.96,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.ACCOMMODATION,
    color: "var(--chart-2)",
    icon: AccommodationIcon,
    items: [
      {
        name: "Hangzhou Hotel",
        description: "2 Nights",
        breakdown: {
          "Original Price": 276.86,
          "First Booking Deal": -41.54,
          "Special Discount": -33.24,
          "Multi-night Discount": -8.32,
          "Mari Credit Card Cashback 1.7%": -3.29,
          "Shopback Cashback": -8.69,
        },
      },
      {
        name: "Mehood Elegant Hotel",
        description: "5 Nights",
        breakdown: {
          "Original Price": 1335.89,
          "Silver Tier Deal": -200.41,
          "Special Discount": -267.2,
          "Multi-night Discount": -40.1,
          "Mari Credit Card Cashback 1.7%": -14.08,
          "Shopback Cashback": -16.55,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.INSURANCE,
    color: "var(--chart-3)",
    icon: InsuranceIcon,
    items: [
      {
        name: "FWD Insurance",
        breakdown: {
          "Original Premium": 86.31,
          "Promo Code 35% (FWDTRAVEL)": -30.21,
          "Shopback Cashback": -1.12,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.COMMUNICATION,
    color: "var(--chart-4)",
    icon: CommunicationIcon,
    items: [
      {
        name: "eSIM",
        description: "Daily 2GB + Unlimited for 8 Days",
        breakdown: {
          "Original Price": 18.5,
          "Product Discount": -9.11,
          "Shop Voucher": -0.3,
          "Shopee Voucher": -3.0,
          "Shopee Coins": -0.39,
          "Shopback Cashback": -0.07,
        },
      },
      {
        name: "SIM Card",
        description: "Daily 2GB + Unlimited for 8 Days",
        breakdown: {
          "Original Price": 11.45,
          "Product Discount": -0.16,
          "Shop Voucher": -0.3,
          "Shopee Voucher": -3.0,
          "Shopee Coins": -0.4,
          "Shopback Cashback": -0.09,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.ENTERTAINMENT,
    color: "var(--chart-5)",
    icon: EntertainmentIcon,
    items: [
      {
        name: "OMG Heartbeat Park",
        description: "Hangzhou",
        breakdown: {
          "Original Price": 368.3,
          "Booking Discount": -196.48,
          "Mari Credit Card Cashback 1.7%": -2.92,
          "Shopback Cashback": -3.44,
        },
      },
      {
        name: "L+SNOW Skiing Resort",
        description: "Shanghai",
        breakdown: {
          "Original Price": 153.46,
          "Booking Discount": -43.74,
          "Mari Credit Card Cashback 1.7%": -1.87,
          "Shopback Cashback": -1.09,
        },
      },
      {
        name: "Shanghai Disney Resort",
        description: "Shanghai",
        breakdown: {
          "Original Price": 218.86,
          "Booking Discount": -25.06,
          "Mari Credit Card Cashback 1.7%": -3.29,
          "Shopback Cashback": -1.93,
        },
      },
      {
        name: "Humble Administrator's Garden",
        description: "Suzhou",
        breakdown: {
          "Original Price": 26.47,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.77,
          "Mari Credit Card Bonus Cashback": -0.26,
        },
      },
      {
        name: "Arcade",
        description: "Shanghai Joy City",
        breakdown: {
          "Original Price": 9.46,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.28,
          "Mari Credit Card Bonus Cashback": -0.09,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.TRANSPORT,
    color: "var(--chart-6)",
    icon: TransportIcon,
    items: [
      {
        name: "High-Speed Rail",
        breakdown: {
          "Total Cost": 81.52,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -2.37,
          "Mari Credit Card Bonus Cashback": -0.79,
        },
      },
      {
        name: "Metro",
        breakdown: {
          "Total Cost": 14.8,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.44,
          "Mari Credit Card Bonus Cashback": -0.14,
        },
      },
      {
        name: "Taxi",
        breakdown: {
          "Total Cost": 196.64,
          Refund: -4.06,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -5.73,
          "Mari Credit Card Bonus Cashback": -1.91,
          "Cashback deducted due to refund": 0.12 + 0.04,
        },
      },
      {
        name: "Tricycle",
        breakdown: {
          "Total Cost": 2.83,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.08,
          "Mari Credit Card Bonus Cashback": -0.03,
        },
      },
      {
        name: "Bicycle",
        breakdown: {
          "Total Cost": 1.51,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.04,
          "Mari Credit Card Bonus Cashback": -0.01,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.FOOD,
    color: "var(--chart-7)",
    icon: FoodIcon,
    items: [
      {
        name: "Restaurant",
        breakdown: {
          "Total Cost": 337.72,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -9.83,
          "Mari Credit Card Bonus Cashback": -3.28,
        },
      },
      {
        name: "Delivery",
        breakdown: {
          "Total Cost": 55.32,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -1.62,
          "Mari Credit Card Bonus Cashback": -0.54,
        },
      },
      {
        name: "Snack",
        breakdown: {
          "Total Cost": 77.98,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -2.27,
          "Mari Credit Card Bonus Cashback": -0.76,
        },
      },
      {
        name: "Drink",
        breakdown: {
          "Total Cost": 42.22,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -1.24,
          "Mari Credit Card Bonus Cashback": -0.41,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.OTHER,
    color: "var(--chart-8)",
    icon: OtherIcon,
    items: [
      {
        name: "Gifts",
        breakdown: {
          "Total Cost": 289.15,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -8.43,
          "Mari Credit Card Bonus Cashback": -2.81,
        },
      },
      {
        name: "Leisure",
        breakdown: {
          "Total Cost": 122,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -3.56,
          "Mari Credit Card Bonus Cashback": -1.18,
        },
      },
      {
        name: "Delivery",
        description: "Taobao",
        breakdown: {
          "Original Cost": 74.54,
          "Mari Credit Card Cashback 1.7%": -1.27,
        },
      },
      {
        name: "OMG Heartbeat Park Memento",
        description: "Video + Photo",
        breakdown: {
          "Original Cost": 5.68,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.17,
          "Mari Credit Card Bonus Cashback": -0.06,
        },
      },
      {
        name: "Skiing Instructor",
        breakdown: {
          "Original Cost": 280.4,
        },
      },
      {
        name: "L+SNOW Skiing Resort Locker",
        breakdown: {
          "Original Cost": 8.54,
          Refund: -3.67,
          "Mari Credit Card Foreign Currency Transaction Fee Waiver": -0.25,
          "Mari Credit Card Bonus Cashback": -0.08,
          "Cashback deducted due to refund": 0.11 + 0.03,
        },
      },
    ],
  },
];
