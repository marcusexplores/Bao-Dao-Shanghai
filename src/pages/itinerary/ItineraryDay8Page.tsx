import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { ImagePriority, MediaType } from "@/components/page/constants";
import GymMainPhoto from "@/assets/photos/Itinerary_Day8_Gym_Main.jpg";
import GymCornerPhoto from "@/assets/photos/Itinerary_Day8_Gym_Corner.jpg";
import BreakfastPhoto from "@/assets/photos/Itinerary_Day8_Breakfast.jpg";
import EscalatorDecalPhoto from "@/assets/photos/Itinerary_Day8_Bailian_Escalator_Decal.jpg";
import EscalatorComicPhoto from "@/assets/photos/Itinerary_Day8_Bailian_Escalator_Comic.jpg";
import XhrHobbyPhoto from "@/assets/photos/Itinerary_Day8_Bailian_XhrHobby.jpg";
import YooooShopPhoto from "@/assets/photos/Itinerary_Day8_Bailian_YooooShop.jpg";
import PaaakuShopPhoto from "@/assets/photos/Itinerary_Day8_Bailian_PaaakuShop.jpg";
import LightDarknessPhoto from "@/assets/photos/Itinerary_Day8_Bailian_LightDarkness.jpg";
import SunriseDutyFreePhoto from "@/assets/photos/Itinerary_Day8_Airport_DutyFree.jpg";
import SleepingPodPhoto from "@/assets/photos/Itinerary_Day8_Airport_SleepingPods.jpg";
import ShakeShackEntrancePhoto from "@/assets/photos/Itinerary_Day8_ShakeShack.jpg";
import ShakeShackFoodPhoto from "@/assets/photos/Itinerary_Day8_ShakeShack_Food.jpg";
import AirportGatePhoto from "@/assets/photos/Itinerary_Day8_Airport_Gates.jpg";
import AirportEmptyPhoto from "@/assets/photos/Itinerary_Day8_Airport_Empty.jpg";
import PlaneFoodPhoto from "@/assets/photos/Itinerary_Day8_PlaneFood.jpg";
import { ElaborationModal } from "./components/ElaborationModal";
import { elaboration } from "./data/elaboration";
import { returnFlight } from "./data/flights";

export const ItineraryDay8Page = () => {
  return (
    <>
      <Flipboard flight={returnFlight} />
      <PageContainerItem>
        Waking up to a lazy Monday with no planned activities made it the
        perfect time to check out the free gym amenities in the hotel. The space
        was decently large and entirely empty, offering a decent range of
        equipment along with a dedicated yoga corner stocked with mats and gym
        balls. Since it had been a while since the last real workout, the
        session was kept light with just some simple warmups to help tune back
        into a daily routine.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: GymMainPhoto,
              alt: "Gym Workout Area",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: GymCornerPhoto,
              alt: "Gym Stretching Area",
              fetchPriority: ImagePriority.High,
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Even as we were working out, that one figurine from
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.BailianZx}>
          Bailian ZX
        </ElaborationModal>
        <span>&nbsp;</span>
        was still lingering in our minds. It felt like such a rare find that
        leaving Shanghai without it would have felt like a missed opportunity.
        After a bit of self-convincing, we decided to head back to the mall to
        grab it, especially since we had the morning free before our late
        afternoon flight. To keep things moving, we placed a Meituan order while
        we exercised so the food arrived right as we wrapped up, giving us just
        enough time to shower and eat before our final dash to the shops.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: BreakfastPhoto,
              alt: "Breakfast",
            },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
      />
      <PageContainerItem>
        Once we checked out of our hotel, we dragged our luggage back to
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.BailianZx}>
          Bailian ZX
        </ElaborationModal>
        <span>&nbsp;</span>
        for one last visit. The mall was incredibly quiet compared to the
        evening rush, which gave us a perfect chance to get some clear,
        full-view shots of the shops and really appreciate the space. While we
        were there, we took the opportunity to browse through the other
        figurines, just to make sure we hadn't missed any last-minute treasures.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: EscalatorDecalPhoto,
              alt: "Bailian ZX Escalator",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: EscalatorComicPhoto,
              alt: "Bailian ZX Escalator",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: XhrHobbyPhoto,
              alt: "Xhr Hobby",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: YooooShopPhoto,
              alt: "Yoooo Shop",
            },
            className: "col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: PaaakuShopPhoto,
              alt: "Paaaku Shop",
            },
            className: "col-span-4",
          },
        ]}
      />
      <PageContainerItem>
        Leaving no stone unturned, we scoured the aisles one last time, but
        sadly didn't find any new treasures, especially with the prices being a
        bit steep. We eventually made our way to the final shop,
        <span>&nbsp;</span>
        <ElaborationModal data={elaboration.LightDarkness}>
          Light Darkness
        </ElaborationModal>
        , which held the figurine we had been eyeing. We spent some time
        debating whether we really wanted it, trying our best to be thrifty
        while the sales assistants stepped in to offer some extra details. In
        the end, we succumbed to our wants and made the purchase. After a
        thorough inspection at the cashier, we carefully tucked it into our
        handcarry, far too afraid that it might get damaged if we risked putting
        it in our checked luggage.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LightDarknessPhoto,
              alt: "Light Darkness",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Satisfied with our purchase, we made a beeline to the airport to get
        ahead of the schedule. Since we arrived quite early, we took the time to
        walk around and explore the terminals. We browsed through the duty free
        shops, but nothing really caught our eyes, so we didn't end up picking
        up any last-minute souvenirs there. Along the way to the gates, we also
        spotted some interesting sleeping pods, which seemed like a great option
        for anyone looking for a quick and peaceful nap before their flight.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: SunriseDutyFreePhoto,
              alt: "Sunrise Duty Free",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: SleepingPodPhoto,
              alt: "Sleeping Pods",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        For lunch, we settled on Shake Shack, especially since we hadn't eaten
        any Western food the entire week. After a steady diet of nothing but
        Chinese food, it was a refreshing change for our palates. Even though
        the prices were still on the high end for fast food, we treated
        ourselves to some burgers and fries, paired with a creamy avocado
        milkshake to round out the meal.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: ShakeShackEntrancePhoto,
              alt: "Shake Shack",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: ShakeShackFoodPhoto,
              alt: "Shake Shack",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        When the time came, we made our way to our boarding gate, which required
        taking the transfer train to reach the boarding area. Dinner was served
        during the flight and felt quite similar to the meal we had when we
        first arrived, though this time it was a full rice set. The Chinese
        bayberry also made an appearance again, but as a packet drink instead of
        being served in a cup.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: AirportGatePhoto,
              alt: "Airport",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: AirportEmptyPhoto,
              alt: "Airport",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: PlaneFoodPhoto,
              alt: "Plane Food",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Looking back on the last few days, it feels as though the time has flown
        by in the blink of an eye. From the moment we landed to this final quiet
        walk through the airport, every day has been filled with unforgettable
        moments, whether we were exploring the neon-lit subculture hubs of
        Shanghai or wandering the serene landscapes of Hangzhou and Suzhou. We
        are so incredibly thankful for the experiences we shared, the rare
        treasures we found, and the vibrant culture that welcomed us at every
        turn. While it is bittersweet to leave, we carry home a suitcase full of
        memories and a newfound appreciation for everything this journey offered
        us. Goodbye, China, we truly enjoyed every second here, and we already
        look forward to the day we can say hello again.
      </PageContainerItem>
    </>
  );
};
