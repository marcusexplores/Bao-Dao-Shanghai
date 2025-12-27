import JuneyaoAirLogo from "@/assets/images/Logo_JuneyaoAir.jpg";
import TripLogo from "@/assets/images/Logo_Trip.webp";
import AlipayLogo from "@/assets/images/Logo_Alipay.webp";
import WechatPayLogo from "@/assets/images/Logo_WeChat.webp";
import ChangiAppLogo from "@/assets/images/Logo_ChangiApp.webp";
import AMapLogo from "@/assets/images/Logo_AMap.webp";
import DiDiLogo from "@/assets/images/Logo_DiDi.webp";
import RailwayLogo from "@/assets/images/Logo_Railway12306.webp";
import MeiTuanLogo from "@/assets/images/Logo_MeiTuan.webp";
import DianPingLogo from "@/assets/images/Logo_Dianping.webp";
import FwdLogo from "@/assets/images/Logo_Fwd.webp";
import SecureVpnLogo from "@/assets/images/Logo_SecureVpn.webp";
import GoogleLogo from "@/assets/images/Logo_Google.webp";
import BaiduLogo from "@/assets/images/Logo_Baidu.webp";
import XiaoHongShuLogo from "@/assets/images/Logo_XiaoHongShu.webp";
import Lemon8Logo from "@/assets/images/Logo_Lemon8.webp";
import YouTubeLogo from "@/assets/images/Logo_YouTube.webp";
import TaobaoLogo from "@/assets/images/Logo_Taobao.webp";
import WeFlyLogo from "@/assets/images/Logo_WeFly.webp";

interface Link {
  website?: string;
  playStore?: string;
  appStore?: string;
}

export interface Item {
  name: string;
  description: string;
  icon: Image;
  details: string[];
  link?: Link;
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
        icon: {
          src: JuneyaoAirLogo,
          alt: "Juneyao Air Logo",
        },
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
        name: "Trip.com",
        description: "Good App",
        icon: {
          src: TripLogo,
          alt: "xxx",
        },
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
        icon: {
          src: AlipayLogo,
          alt: "xxx",
        },
        details: [
          "Supports international Visa/Mastercard linking without a local bank account.",
          "Built-in 'TourPass' feature specifically designed for travelers.",
          "Includes mini-programs for Didi (ride-hailing) and Metro codes.",
          "Widely accepted from high-end malls to street food stalls.",
        ],
        link: {
          website: "https://www.alipay.com",
        },
        // link: "https://www.alipay.com",
      },
      {
        name: "WeChat Pay",
        description: "Social messaging and payment integrated in one.",
        icon: {
          src: WechatPayLogo,
          alt: "xxx",
        },
        details: [
          "Integrated within the WeChat app (Weixin).",
          "Requires account verification with passport for international cards.",
          "Essential for splitting bills and local social interactions.",
          "Best for accessing restaurant menus (QR ordering) which is the norm in Shanghai.",
        ],
        link: {
          website: "https://pay.weixin.qq.com",
        },
      },
      {
        name: "Changi Pay",
        description:
          "Changi Pay is a digital wallet within the Changi App for seamless payments.",
        icon: {
          src: ChangiAppLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
        link: {
          website:
            "https://www.changiairport.com/en/help/changi-app/changi-pay.html",
        },
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        name: "Amap (Gaode)",
        description: "Most accurate for live traffic and metro exits.",
        icon: {
          src: AMapLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Transportation",
    items: [
      {
        name: "DiDi",
        description: "Good Transport",
        icon: {
          src: DiDiLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "Railway 12306",
        description: "Good Transport",
        icon: {
          src: RailwayLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Food",
    items: [
      {
        name: "MeiTuan",
        description: "Good Food",
        icon: {
          src: MeiTuanLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "Dian Ping",
        description: "Good Food",
        icon: {
          src: DianPingLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Shopping",
    items: [
      {
        name: "Taobao",
        description: "Good app",
        icon: {
          src: TaobaoLogo,
          alt: "xxx",
        },
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
        name: "WeFly",
        description: "Instant digital SIM for data connectivity.",
        icon: {
          src: WeFlyLogo,
          alt: "xxx",
        },
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
        icon: {
          src: SecureVpnLogo,
          alt: "xxx",
        },
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
        icon: {
          src: FwdLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
  {
    title: "Research & Inspiration",
    items: [
      {
        name: "Google",
        description: "",
        icon: {
          src: GoogleLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "Baidu (百度)",
        description: "",
        icon: {
          src: BaiduLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "XiaoHongShu",
        description: "",
        icon: {
          src: XiaoHongShuLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "Lemon8",
        description: "",
        icon: {
          src: Lemon8Logo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
      {
        name: "YouTube",
        description: "",
        icon: {
          src: YouTubeLogo,
          alt: "xxx",
        },
        details: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
];
