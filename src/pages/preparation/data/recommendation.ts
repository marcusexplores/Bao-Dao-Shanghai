import JuneyaoAirLogo from "@/assets/images/Logo_JuneyaoAir.jpg";
import TripLogo from "@/assets/images/Logo_Trip.webp";
import AlipayLogo from "@/assets/images/Logo_Alipay.webp";
import WeChatPayLogo from "@/assets/images/Logo_WeChat.webp";
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
import type { ExternalLinkOptionType } from "../types";
import { ExternalLinkOption } from "../constants";

interface Link {
  type: ExternalLinkOptionType;
  src: string;
}

export interface Item {
  name: string;
  description: string;
  icon: Image;
  benefits: string[];
  links?: Link[];
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
        name: "Juneyao Air | 吉祥航空",
        description:
          "Shanghai-based boutique carrier and Star Alliance Connecting Partner",
        icon: {
          src: JuneyaoAirLogo,
          alt: "Juneyao Air Logo",
        },
        benefits: [
          "Competitive pricing strategy, frequently offering significant savings compared to state-owned airlines and alliance partners",
          "High-quality service standards",
          "Complimentary in-flight meals",
          "Free standard seat selections",
          "Checked baggage 2 pieces at 23kg each",
          "Hand luggage 1 piece at 5kg",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://global.juneyaoair.com/",
          },
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    items: [
      {
        name: "Trip.com",
        description: "Comprehensive global travel platform",
        icon: {
          src: TripLogo,
          alt: "Trip.com Logo",
        },
        benefits: [
          "Specifically filters hotels that are legally allowed to host foreign passport holders",
          "Earn and utilize Trip Coins on all bookings",
          "Eligible for additional cashback rewards through the ShopBack platform",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.trip.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=ctrip.english&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/trip-com-book-flights-hotels/id681752345",
          },
          {
            type: ExternalLinkOption.ReferralLink,
            src: "https://sg.trip.com/sale/4283/referee.html?locale=en-SG&referCode=NCJVEF",
          },
        ],
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        name: "Alipay | 支付宝",
        description: "Primary digital wallet for international visitors",
        icon: {
          src: AlipayLogo,
          alt: "Alipay Logo",
        },
        benefits: [
          "Supports international Visa/Mastercard linking without a local bank account",
          "Widely accepted from high-end malls to street food stalls",
          "Includes mini-programs for ride-hailing and Metro codes",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.alipay.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/alipay-simplify-your-life/id333206289",
          },
        ],
      },
      {
        name: "WeChat Pay | 微信支付",
        description: "Social messaging and payment-integrated platform",
        icon: {
          src: WeChatPayLogo,
          alt: "WeChat Pay Logo",
        },
        benefits: [
          "Supports international Visa/Mastercard linking without a local bank account",
          "Essential for local social interactions",
          "Includes mini-programs for various purposes",
          // "Requires account verification with passport for international cards",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://pay.weixin.qq.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.tencent.mm&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/wechat/id414478124",
          },
        ],
      },
      {
        name: "Changi Pay",
        description:
          "Singapore-originated wallet for seamless payments in China",
        icon: {
          src: ChangiAppLogo,
          alt: "Changi App Logo",
        },
        benefits: [
          "Leverages the Liquid Group network to scan and pay at Alipay merchants",
          "Offers fee-free transactions, bypassing the 3% surcharge required by Alipay and WeChat Pay on transactions exceeding 200 RMB",
          "Full fee-free withdrawals available via the Liquid Pay app",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.changiairport.com/en/help/changi-app/changi-pay.html",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.changiairport.cagapp&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/changi-app/id391730848",
          },
        ],
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        name: "AMap | 高德地图",
        description:
          "Gold standard for navigating Chinese cities with precisions",
        icon: {
          src: AMapLogo,
          alt: "AMap Logo",
        },
        benefits: [
          "Far more accurate than Apple Maps or Google Maps for local points of interest",
          "Most accurate for live traffic and metro exits",
          "Supports location bookmarking for quick access",
          "Seamless cross-platform integration ensuring bookmarks sync instantly between web and mobile.",
          "Full English language support",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.amap.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.autonavi.minimap&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/amap-global/id461703208",
          },
        ],
      },
    ],
  },
  {
    title: "Transportation",
    items: [
      {
        name: "DiDi",
        description: "Essential ride-hailing app",
        icon: {
          src: DiDiLogo,
          alt: "DiDi Logo",
        },
        benefits: [
          "Ride-hailing services integrated directly as a mini-app within Alipay",
          "Exclusive discounts and incentive programs accessible primarily through the Chinese-language interface",
          "Offers in-app auto-translation",
          "Direct payment through the linked payment methods within Alipay"
        ],
      },
      {
        name: "Railway 12306",
        description:
          "Official ticketing platform for China's high-speed rail network",
        icon: {
          src: RailwayLogo,
          alt: "Railway 12306 Logo",
        },
        benefits: [
          "Offers official train fares directly from the operator without intermediary fees",
          "Rapid in-app identity verification for international travelers",
          "Manage seat selections, meal pre-orders, and ticket cancellations",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.12306.cn/en/index.html",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.chinarailway.globalticketing&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/铁路12306/id564818797",
          },
        ],
      },
    ],
  },
  {
    title: "Food",
    items: [
      {
        name: "Meituan | 美团",
        description: "All-in-one platform for dining, reviews, and delivery",
        icon: {
          src: MeiTuanLogo,
          alt: "Meituan Logo",
        },
        benefits: [
          "Efficient food delivery to hotel lobby",
          "Deliveries may be coordinated via the in-app chat function if a local contact number is unavailable, allowing for items to be left at the hotel reception",
          "Bike-sharing services and ticket booking are among the additional features supported",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.meituan.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.sankuai.meituan&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/美团-美好生活小帮手/id423084029",
          },
        ],
      },
    ],
  },
  {
    title: "Shopping",
    items: [
      {
        name: "Taobao | 淘宝",
        description: "China's largest online marketplace",
        icon: {
          src: TaobaoLogo,
          alt: "Taobao Logo",
        },
        benefits: [
          "Ultra-fast shipping, often arriving within 24-48 hours in Shanghai",
          "Sellers typically offer highly responsive customer support",
          "While the platform supports English, browsing in Chinese may provide broader search results and additional promotional pricing",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.taobao.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.taobao.taobao&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/taobao-online-shopping-app/id387682726",
          },
        ],
      },
    ],
  },
  {
    title: "Network Communication",
    items: [
      {
        name: "WeFly",
        description: "Instant eSIM/SIM for data connectivity",
        icon: {
          src: WeFlyLogo,
          alt: "WeFly Logo",
        },
        benefits: [
          "Excellent 5G/4G coverage using local tier-1 provider networks",
          "Native VPN support allows for concurrent access to standard global services and China-based applications",
          "Widely regarded for excellence and endorsed by major community forums",
        ],
        links: [
          {
            type: ExternalLinkOption.Shopee,
            src: "https://sg.shp.ee/C4KTUbQ",
          },
        ],
      },
    ],
  },
  {
    title: "VPN",
    items: [
      {
        name: "Secure VPN",
        description: "Unlimited free VPN proxy with one-tap connectivity",
        icon: {
          src: SecureVpnLogo,
          alt: "Secure VPN Logo",
        },
        benefits: [
          "Free VPN proxy available anytime, anywhere",
          "No registration required, just one tap to connect",
          "Unlimited bandwidth with no session or speed limits",
        ],
        links: [
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.fast.free.unblock.secure.vpn&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/secure-vpn-safer-vpn-proxy/id1548935168",
          },
        ],
      },
    ],
  },
  {
    title: "Insurance",
    items: [
      {
        name: "FWD SG",
        description:
          "Digital-first insurance providing simplified, affordable protection via a direct-to-consumer platform",
        icon: {
          src: FwdLogo,
          alt: "FWD Logo",
        },
        benefits: [
          "Incredibly fast and digital-first application process",
          "Optional enhancements for COVID-19 protection and flexibility to cancel or postpone trips",
          "Highly competitive premiums for short-term regional trips from Singapore",
          "Seasonal promotional codes and Shopback rewards available for additional savings",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.fwd.com.sg/travel-insurance",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.fwd.codigo&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/fwd-sg/id1538535682",
          },
          {
            type: ExternalLinkOption.ReferralLink,
            src: "https://www.fwd.com.sg/ref/d6a54a0fc952c5f",
          },
        ],
      },
    ],
  },
  {
    title: "Research & Inspiration",
    items: [
      {
        name: "Google",
        description: "Primary resource for any research and information",
        icon: {
          src: GoogleLogo,
          alt: "Google Logo",
        },
        benefits: [
          "Essential for reading blogs and travel guides in English",
          "Intuitive platform tailored to personal preferences",
          "Google Drive serves as primary repository for travel planning, research, and essential documentation",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.google.com",
          },
        ],
      },
      {
        name: "Baidu | 百度",
        description:
          "Dominant Chinese search engine and digital ecosystem for regional travel research",
        icon: {
          src: BaiduLogo,
          alt: "Baidu Logo",
        },
        benefits: [
          "Accurate local business verification and official website links",
          "Integrated AI search for quick answers to regional queries",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.baidu.com",
          },
        ],
      },
      {
        name: "XiaoHongShu | 小红书",
        description:
          "Lifestyle-centric social platform and primary resource for community-driven travel guides",
        icon: {
          src: XiaoHongShuLogo,
          alt: "Xiao Hong Shu Logo",
        },
        benefits: [
          "Aesthetic itineraries and destination guides",
          "Discover emerging, non-traditional destinations trending within traveler communities",
          "Best source for photography techniques and instagrammable spots",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.xiaohongshu.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.xingin.xhs&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/rednote/id741292507",
          },
        ],
      },
      {
        name: "Lemon8",
        description: "ByteDance's lifestyle app for travel inspiration",
        icon: {
          src: Lemon8Logo,
          alt: "Lemon8 Logo",
        },
        benefits: [
          "Alternative aesthetic itineraries and destination guides in english",
          "Localized travel advice and reviews tailored for the Southeast Asian community",
          "Practical tips from peer travelers",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.lemon8-app.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.bd.nproject&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/lemon8-lifestyle-community/id1498607143",
          },
        ],
      },
      {
        name: "YouTube",
        description: "Long-form visual guides and real-world travel vlogs",
        icon: {
          src: YouTubeLogo,
          alt: "YouTube Logo",
        },
        benefits: [
          "Immersive, first-person video experiences of street-level navigation and destination exploration",
          "Raw creator perspectives and unfiltered viewer reactions for authentic destination research",
          "Hyper-localized practical advice and cultural bridges provided by Singaporeans",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.youtube.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.google.android.youtube&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/us/app/youtube/id544007664",
          },
        ],
      },
    ],
  },
  {
    title: "Useful Applications",
    items: [
      {
        name: "Dian Ping | 大众点评",
        description: "Good Food",
        icon: {
          src: DianPingLogo,
          alt: "Dian Ping Logo",
        },
        benefits: [
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
          "Supports Lorem ipsum",
        ],
      },
    ],
  },
];
