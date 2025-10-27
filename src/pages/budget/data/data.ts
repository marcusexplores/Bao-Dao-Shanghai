import type { JSX } from "react";
import {
  FlightIcon,
  AccommodationIcon,
  InsuranceIcon,
  CommunicationIcon,
  TransportIcon,
  FoodIcon,
  EntertainmentIcon,
  OtherIcon
} from "./icons";
import { BUDGET_CATEGORY } from "../constants";

interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
  description?: string;
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
      { id: "25", name: "Round Trip Ticket", amount: 550, description: "Oct 20-25" },
      { id: "26", name: "Baggage Fee", amount: 60, description: "Oct 20" },
      { id: "27", name: "Seat Selection", amount: 40, description: "Oct 20" },
    ],
  },
  {
    name: BUDGET_CATEGORY.ACCOMMODATION,
    total: 850,
    color: "var(--chart-2)",
    icon: AccommodationIcon,
    items: [
      { id: "1", name: "Hotel Night 1-3", amount: 450, description: "Oct 20-22" },
      { id: "2", name: "Hotel Night 4-5", amount: 300, description: "Oct 23-24" },
      { id: "3", name: "Airbnb Cleaning Fee", amount: 100, description: "Oct 25" },
    ],
  },
  {
    name: BUDGET_CATEGORY.INSURANCE,
    total: 175,
    color: "var(--chart-3)",
    icon: InsuranceIcon,
    items: [
      { id: "31", name: "Travel Insurance", amount: 85, description: "Oct 20" },
      { id: "32", name: "First Aid Supplies", amount: 25 },
      { id: "33", name: "Spa & Massage", amount: 65, description: "Oct 24" },
    ],
  },
  {
    name: BUDGET_CATEGORY.COMMUNICATION,
    total: 125,
    color: "var(--chart-4)",
    icon: CommunicationIcon,
    items: [
      { id: "28", name: "International SIM Card", amount: 45, description: "Oct 20" },
      { id: "29", name: "Portable WiFi Rental", amount: 60, description: "Oct 20-25" },
      { id: "30", name: "Data Top-up", amount: 20, description: "Oct 23" },
    ],
  },
  {
    name: BUDGET_CATEGORY.TRANSPORT,
    total: 480,
    color: "var(--chart-5)",
    icon: TransportIcon,
    items: [
      { id: "12", name: "Airport Transfer", amount: 60, description: "Oct 20" },
      { id: "13", name: "Car Rental (3 days)", amount: 180, description: "Oct 21-23" },
      { id: "14", name: "Gas", amount: 80, description: "Oct 21-23" },
      { id: "15", name: "Taxi Rides", amount: 95, description: "Oct 20-25" },
      { id: "16", name: "Parking Fees", amount: 65, description: "Oct 21-24" },
    ],
  },
  {
    name: BUDGET_CATEGORY.FOOD,
    total: 620,
    color: "var(--chart-6)",
    icon: FoodIcon,
    items: [
      { id: "4", name: "Restaurant Dinner", amount: 85, description: "Oct 20" },
      { id: "5", name: "Local Market", amount: 45, description: "Oct 21" },
      { id: "6", name: "Breakfast Cafe", amount: 30, description: "Oct 21" },
      { id: "7", name: "Fine Dining", amount: 150, description: "Oct 22" },
      { id: "8", name: "Street Food", amount: 25, description: "Oct 23" },
      { id: "9", name: "Groceries", amount: 65, description: "Oct 24" },
      { id: "10", name: "Coffee Shops", amount: 90, description: "Oct 20-25" },
      { id: "11", name: "Lunch Spots", amount: 130, description: "Oct 20-25" },
    ],
  },
  {
    name: BUDGET_CATEGORY.ENTERTAINMENT,
    total: 390,
    color: "var(--chart-7)",
    icon: EntertainmentIcon,
    items: [
      { id: "17", name: "Museum Tickets", amount: 45, description: "Oct 21" },
      { id: "18", name: "Guided Tour", amount: 120, description: "Oct 22" },
      { id: "19", name: "Theme Park Entry", amount: 85, description: "Oct 23" },
      { id: "20", name: "Water Sports", amount: 95, description: "Oct 24" },
      { id: "21", name: "City Pass", amount: 45, description: "Oct 20" },
    ],
  },
  {
    name: BUDGET_CATEGORY.OTHER,
    total: 285,
    color: "var(--chart-8)",
    icon: OtherIcon,
    items: [
      { id: "22", name: "Souvenirs", amount: 85, description: "Oct 22" },
      { id: "23", name: "Local Crafts", amount: 120, description: "Oct 23" },
      { id: "24", name: "Clothing", amount: 80, description: "Oct 24" },
    ],
  },
];