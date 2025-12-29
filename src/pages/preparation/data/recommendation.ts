import JuneyaoAirLogo from "@/assets/images/Logo_JuneyaoAir.webp";
import PriorityPassLogo from "@/assets/images/Logo_PriorityPass.webp";
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
  introductions: string[];
  items: Item[];
}

export const recommendations: Category[] = [
  {
    title: "Flight",
    introductions: [
      "Due to our unpredictable work schedules, we could only book our flights quite last minute. While scouring various third-party booking sites for a miracle, we stumbled upon Juneyao Air, an airline we had honestly never heard of before. It occupied a perfect middle ground, offering fares that were only slightly higher than budget carriers yet significantly cheaper than full-service airlines. After seeing the various benefits they bring to the table, we decided it was worth giving them a shot. Since we generally prefer the security of buying tickets directly from the source, we headed to their official website to finalize our booking.",
    ],
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
            src: "https://global.juneyaoair.com",
          },
        ],
      },
    ],
  },
  {
    title: "Airport Lounge",
    introductions: [
      "By taking advantage of our DBS Altitude Visa Signature Card, we kicked off our trip with a bit of luxury. This card provides a complimentary Priority Pass membership that allows for two free lounge visits. Since this benefit can be used for one member and a guest, we were both able to head inside together. It was a great way to spend our pre-flight time, as we managed to enjoy some food and charge our phones in comfort before making our way to the gate.",
    ],
    items: [
      {
        name: "Priority Pass",
        description:
          "Global airport lounge network for a premium pre-flight experience",
        icon: {
          src: PriorityPassLogo,
          alt: "Priority Pass Logo",
        },
        benefits: [
          "Access to many lounges in Singapore and China",
          "Complimentary refreshments, alcohol, and hot food",
          "Quiet workspaces with reliable Wi-Fi and power outlets",
          "Some Singapore-issued credit cards include Priority Pass lounge access as a premium benefit",
        ],
        links: [
          {
            type: ExternalLinkOption.Website,
            src: "https://www.prioritypass.com",
          },
          {
            type: ExternalLinkOption.GooglePlay,
            src: "https://play.google.com/store/apps/details?id=com.prioritypass3&pcampaignid=web_share",
          },
          {
            type: ExternalLinkOption.AppStore,
            src: "https://apps.apple.com/sg/app/priority-pass/id406878019",
          },
        ],
      },
    ],
  },
  {
    title: "Accommodation",
    introductions: [
      "Even though countless third-party sites offer endless options, we decided to book through Trip.com. We felt this was the best choice as it is the international alternative to the domestic powerhouse, Ctrip, and they truly know their country best when it comes to local listings. Since we could stack the Trip Coins earned from our previous travels with Shopback cashback, this platform became the clear winner for our stay.",
    ],
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
    introductions: [
      "Navigating the payment landscape in China is an experience in itself, as the country has become almost entirely cashless. QR-code systems like Alipay and WeChat Pay dominate daily life, but fortunately, international tourists can now link their foreign cards to these apps for seamless transactions at nearly any vendor. While some places still accept cash, it is often difficult for vendors to provide change, so having the exact amount is essential if you go that route.",
      "To unlock the full functionality of these apps, completing identity verification with your passport details is highly recommended. Between the two, Alipay became our primary choice because its interface is incredibly intuitive, as all the necessary mini-apps for transport and payments are right on the landing page once the app is open. WeChat Pay remains a reliable backup, though it requires clicking through a few more interfaces to reach the payment screen.",
      "One important tip to keep in mind is that both platforms impose a 3% fee on transactions exceeding 200 RMB. To get around this, we often checked if vendors could split a large bill into smaller batches under the 200 RMB limit. Alternatively, Singapore-based travellers can use Changi Pay to scan Alipay QR codes without incurring those extra transaction fees.",
      "Beyond the fee structure, the digital nature of these payments makes it effortless to track our budget. Since every transaction is recorded, we had a clear history to keep tabs on our spending and could easily address any discrepancies via the in-app chat support.",
    ],
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
    introductions: [
      "Utilizing AMap proved essential during our planning phase for identifying the exact addresses of the places we wanted to visit. Relying on Google Maps was not an option as it is often inaccurate regarding the current Chinese landscape, making it difficult to drop pins or bookmark locations reliably.",
      "Actual navigation using the map while on the ground in China was minimal, as e-hailing rides served as our primary mode of transport. However, having the correct locations already verified and bookmarked was crucial for ensuring the car took us to the right spot every time.",
    ],
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
    introductions: [
      "Being convenient and affordable, e-hailing became our primary mode of transport in China. Although the metro is a cheaper alternative, it often felt less convenient as stations could be quite far from our actual location. Finding a pick-up spot for an e-hailing ride is much faster and comes with the added luxury of personal space in the car. The only real downsides are the potential for traffic congestion or the occasional driver taking a wrong route.",
      "For long-distance or inter-province travel, we relied on the high-speed rail and purchased our tickets through the official app. While we initially considered using the local ticketing machines at the station, they weren't very helpful and felt unfamiliar to use. In contrast, the app provided very fast identity verification, allowing us to use it almost immediately. It was also incredibly easy to buy tickets for multiple people at once, making the whole process much more efficient.",
      // "When using e-hailing at major hubs like airports or high-speed rail stations, it is important to look for the designated Online Ride-Hailing (网约车) signs. These pick-up points are separate from the traditional taxi queues and are often located in specific levels of the parking garages. Following these signs is much more efficient than trying to meet a driver at the general arrivals curb, where stopping is often restricted."
    ],
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
          "Direct payment through the linked payment methods within Alipay",
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
          "Manage ticket cancellations and change destination",
          "Purchase tickets for multiple passengers simultaneously within a single transaction",
          "Store companion details in dedicated Passenger List to enable fast checkout for future trips",
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
    introductions: [
      "Leveraging Meituan for food delivery became a staple of our daily routine in Shanghai. While exploring local restaurants is part of the fun, the app was a lifesaver for ordering breakfast directly to our hotel room or securing a late-night dinner when we ended our day late and felt too exhausted to source for food outside.",
      "One particularly convenient feature of many Chinese hotels is the use of delivery robots. Instead of having to meet the rider downstairs, the food is often left at the front desk where a robot then autonomously navigates to the correct floor to drop the meal off directly at the door. Having this digital convenience allowed us to maximize our rest time without missing out on the local flavors Shanghai has to offer.",
    ],
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
    introductions: [
      "Shopping on Taobao while in China is a game-changer compared to the usual experience from Singapore. International shipping fees are eliminated when shopping locally, and items can be delivered directly to your hotel at no extra cost. For the best deals, switching to the Chinese language interface is essential as the prices are usually lower and more discount vouchers become available.",
      "Most purchases come with an estimated delivery window of one to three days, but it is always wise to chat with the seller to confirm they can meet your schedule. There is even a specific feature to request expedited delivery (催发货), which encourages the seller to ship the goods out as soon as possible.",
    ],
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
    introductions: ["xxx"],
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
    introductions: ["xxx"],
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
    introductions: ["xxx"],
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
    introductions: ["xxx"],
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
    introductions: ["xxx"],
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
