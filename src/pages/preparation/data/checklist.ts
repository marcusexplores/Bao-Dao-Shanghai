interface Item {
  name: string;
  isChecked: boolean;
}

export interface Category {
  name: string;
  icon: string;
  items: Item[];
}

export const checklist: Category[] = [
  {
    name: "Apparels",
    icon: "👕",
    items: [
      { name: "Top x7", isChecked: false },
      { name: "Bottom x3", isChecked: false },
      { name: "Undergarment x8", isChecked: false },
      { name: "Thermal Wear Set x2", isChecked: false },
      { name: "Sleepwear Set x2", isChecked: false },
      { name: "Jacket / Windbreaker", isChecked: false },
      { name: "Gloves", isChecked: false },
      { name: "Scarf", isChecked: false },
      { name: "Socks x4", isChecked: false },
      { name: "Shoes (backup)", isChecked: false },
      { name: "Slippers (indoor)", isChecked: false },
      { name: "Spectacles Hooks", isChecked: false },
    ],
  },
  {
    name: "Toiletries",
    icon: "🧴",
    items: [
      { name: "Toothbrush", isChecked: false },
      { name: "Toothpaste", isChecked: false },
      { name: "Razor / Shaver", isChecked: false },
      { name: "Facial Wash", isChecked: false },
      { name: "Hair Brush / Comb", isChecked: false },
    ],
  },
  {
    name: "Body Care",
    icon: "🧴",
    items: [
      { name: "Sunscreen", isChecked: false },
      { name: "Moisturiser", isChecked: false },
      { name: "Lip Balm", isChecked: false },
      { name: "Acne Care Cream", isChecked: false },
    ],
  },
  {
    name: "Health",
    icon: "🧴",
    items: [
      { name: "Medications", isChecked: false },
      { name: "Health Supplements", isChecked: false },
      { name: "Surgical Mask x5", isChecked: false },
      { name: "N95 Mask x1", isChecked: false },
      { name: "Plasters", isChecked: false },
    ],
  },
  {
    name: "Electronics",
    icon: "📱",
    items: [
      { name: "Phone & Charger", isChecked: false },
      { name: "Power Bank & Charger", isChecked: false },
      { name: "Headphones", isChecked: false },
      { name: "Travel Adapter", isChecked: false },
      { name: "Power Extension Bar", isChecked: false },
    ],
  },
  {
    name: "Applications",
    icon: "📱",
    items: [
      { name: "Alipay", isChecked: false },
      { name: "WeChat Pay", isChecked: false },
      { name: "Changi App", isChecked: false },
      { name: "AMap", isChecked: false },
      { name: "Railway 12306", isChecked: false },
      { name: "Meituan", isChecked: false },
      { name: "Dian Ping", isChecked: false },
      { name: "Secure VPN", isChecked: false },
      { name: "Trip.com App", isChecked: false },
      { name: "Priority Pass App", isChecked: false },
      { name: "YouTrip", isChecked: false },
      { name: "Trust Bank", isChecked: false },
    ],
  },
  {
    name: "Money",
    icon: "📄",
    items: [
      { name: "Wallet", isChecked: false },
      { name: "Chinese RMB", isChecked: false },
      { name: "Singapore Dollars", isChecked: false },
    ],
  },
  {
    name: "Documents",
    icon: "📄",
    items: [
      { name: "Passport", isChecked: false },
      { name: "Clear Folder (For keeping receipts)", isChecked: false },
      { name: "Pens (Black x1, Blue x1)", isChecked: false },
      { name: "Offline copy of itinerary", isChecked: false },
      { name: "Offline copy of flight details", isChecked: false },
      { name: "Offline copy of accommodations booking details", isChecked: false },
      { name: "Offline copy of entertainment tickets", isChecked: false },
      { name: "Offline copy of insurance policy", isChecked: false },
      { name: "Emergency Contacts", isChecked: false },
      { name: "Photo of passport", isChecked: false },
      { name: "Photo of luggage (exterior & interior)", isChecked: false },
    ],
  },
  {
    name: "Essentials",
    icon: "🎒",
    items: [
      { name: "Backpack", isChecked: false },
      { name: "Expandable Duffel Bag", isChecked: false },
      { name: "Umbrella", isChecked: false },
      { name: "Water Bottle", isChecked: false },
      { name: "Ziplock Bags x5", isChecked: false },
      { name: "Plastic Bags x10", isChecked: false },
      { name: "Pocket Tissues", isChecked: false },
      { name: "Wet Wipes", isChecked: false },
      { name: "Heat Packs", isChecked: false },
      { name: "Hand Sanitizer", isChecked: false },
      { name: "Insect Repellent", isChecked: false },
      { name: "Nail clipper", isChecked: false },
    ],
  },
];
