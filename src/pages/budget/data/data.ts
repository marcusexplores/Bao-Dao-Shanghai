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
  amount: number;
  description?: string;
  breakdown?: Record<string, number>;
}

interface ExpenseCategory {
  name: string;
  total: number;
  color: string;
  icon: JSX.Element;
  items: ExpenseItem[];
}

export const expenses: ExpenseCategory[] = [
  {
    name: BUDGET_CATEGORY.FLIGHT,
    total: 650,
    color: "var(--chart-1)",
    icon: FlightIcon,
    items: [
      {
        name: "Juneyao Air",
        amount: 997.4,
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
    total: 850,
    color: "var(--chart-2)",
    icon: AccommodationIcon,
    items: [
      {
        name: "Hangzhou Hotel",
        amount: 193.76,
        description: "2 Nights",
        breakdown: {
          "Original Price": 276.86,
          "First Booking Deal": -41.54,
          "Special Discount": -33.24,
          "Multi-night Discount": -8.32,
          "Mari Credit Card Cashback 1.7%": -3.29,
        },
      },
      {
        name: "Mehood Elegant Hotel",
        amount: 828.0,
        description: "5 Nights",
        breakdown: {
          "Original Price": 0,
          "Silver Tier Deal": -0,
          "Special Discount": -0,
          "Multi-night Discount": -0,
          "Mari Credit Card Cashback 1.7%": -0,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.INSURANCE,
    total: 175,
    color: "var(--chart-3)",
    icon: InsuranceIcon,
    items: [
      {
        name: "FWD Insurance",
        amount: 56.1,
        breakdown: {
          "Original Premium": 86.31,
          "Promo Code 35% (FWDTRAVEL)": -30.21,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.COMMUNICATION,
    total: 125,
    color: "var(--chart-4)",
    icon: CommunicationIcon,
    items: [
      {
        name: "eSIM",
        amount: 5.63,
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
        amount: 7.5,
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
    total: 390,
    color: "var(--chart-7)",
    icon: EntertainmentIcon,
    items: [
      {
        name: "OMG Heartbeat Park",
        amount: 168.9,
        description: "Hangzhou",
        breakdown: {
          "Original Price": 368.3,
          "Booking Discount": -196.48,
          "Mari Credit Card Cashback 1.7%": -2.92,
        },
      },
      {
        name: "L+SNOW Skiing Resort",
        amount: 106.76,
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
        amount: 188.58,
        description: "Shanghai",
        breakdown: {
          "Original Price": 218.86,
          "Booking Discount": -25.06,
          "Mari Credit Card Cashback 1.7%": -3.29,
          "Shopback Cashback": -1.93,
        },
      },
    ],
  },
  {
    name: BUDGET_CATEGORY.TRANSPORT,
    total: 480,
    color: "var(--chart-5)",
    icon: TransportIcon,
    items: [{ name: "Taxi Rides", amount: 95, description: "Oct 20-25" }],
  },
  {
    name: BUDGET_CATEGORY.FOOD,
    total: 620,
    color: "var(--chart-6)",
    icon: FoodIcon,
    items: [
      { name: "Restaurant Dinner", amount: 85, description: "Oct 20" },
      { name: "Local Market", amount: 45, description: "Oct 21" },
      { name: "Breakfast Cafe", amount: 30, description: "Oct 21" },
      { name: "Fine Dining", amount: 150, description: "Oct 22" },
      { name: "Street Food", amount: 25, description: "Oct 23" },
      { name: "Groceries", amount: 65, description: "Oct 24" },
      { name: "Coffee Shops", amount: 90, description: "Oct 20-25" },
      { name: "Lunch Spots", amount: 130, description: "Oct 20-25" },
    ],
  },
  {
    name: BUDGET_CATEGORY.OTHER,
    total: 285,
    color: "var(--chart-8)",
    icon: OtherIcon,
    items: [
      { name: "Souvenirs", amount: 85, description: "Oct 22" },
      { name: "Local Crafts", amount: 120, description: "Oct 23" },
      { name: "Clothing", amount: 80, description: "Oct 24" },
    ],
  },
];
