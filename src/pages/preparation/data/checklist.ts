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
    name: "Clothing",
    icon: "👕",
    items: [
      { name: "T-shirts (3-4)", isChecked: false },
      { name: "Pants/Shorts (2-3)", isChecked: false },
      { name: "Underwear (5-7)", isChecked: false },
      { name: "Socks (5-7 pairs)", isChecked: false },
      { name: "Jacket/Sweater", isChecked: false },
      { name: "Sleepwear", isChecked: false },
      { name: "Swimwear", isChecked: false },
    ],
  },
  {
    name: "Toiletries",
    icon: "🧴",
    items: [
      { name: "Toothbrush & Toothpaste", isChecked: false },
      { name: "Shampoo & Conditioner", isChecked: false },
      { name: "Body Wash/Soap", isChecked: false },
      { name: "Deodorant", isChecked: false },
      { name: "Sunscreen", isChecked: false },
      { name: "Razor & Shaving Cream", isChecked: false },
      { name: "Hair Brush/Comb", isChecked: false },
      { name: "Medications", isChecked: false },
    ],
  },
  {
    name: "Electronics",
    icon: "📱",
    items: [
      { name: "Phone & Charger", isChecked: false },
      { name: "Laptop & Charger", isChecked: false },
      { name: "Headphones", isChecked: false },
      { name: "Power Bank", isChecked: false },
      { name: "Camera", isChecked: false },
      { name: "Travel Adapter", isChecked: false },
      { name: "E-reader/Tablet", isChecked: false },
    ],
  },
  {
    name: "Documents",
    icon: "📄",
    items: [
      { name: "Passport", isChecked: false },
      { name: "ID/Driver's License", isChecked: false },
      { name: "Travel Insurance", isChecked: false },
      { name: "Flight Tickets", isChecked: false },
      { name: "Hotel Reservations", isChecked: false },
      { name: "Credit Cards & Cash", isChecked: false },
      { name: "Emergency Contacts", isChecked: false },
    ],
  },
  {
    name: "Accessories",
    icon: "🕶️",
    items: [
      { name: "Sunglasses", isChecked: false },
      { name: "Hat/Cap", isChecked: false },
      { name: "Watch", isChecked: false },
      { name: "Jewelry", isChecked: false },
      { name: "Belt", isChecked: false },
      { name: "Backpack/Day Bag", isChecked: false },
    ],
  },
  {
    name: "Essentials",
    icon: "🎒",
    items: [
      { name: "Water Bottle", isChecked: false },
      { name: "Snacks", isChecked: false },
      { name: "Book/Magazine", isChecked: false },
      { name: "Travel Pillow", isChecked: false },
      { name: "Eye Mask", isChecked: false },
      { name: "Earplugs", isChecked: false },
      { name: "Tissues/Wet Wipes", isChecked: false },
      { name: "Hand Sanitizer", isChecked: false },
    ],
  },
];
