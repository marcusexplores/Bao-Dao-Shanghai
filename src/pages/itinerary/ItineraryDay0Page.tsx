import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemMedia } from "@/components/page/PageContainerItemMedia";
import { Flipboard } from "@/components/flipboard/Flipboard";
import { MediaType } from "@/components/page/constants";
import PassportPhoto from "@/assets/photos/Itinerary_Day0_Passport.jpg";
import LoungePhoto from "@/assets/photos/Itinerary_Day0_Lounge.jpg";
import LoungeSaladBarPhoto from "@/assets/photos/Itinerary_Day0_Lounge_SaladBar.jpg";
import LoungePasteriesPhoto from "@/assets/photos/Itinerary_Day0_Lounge_Pasteries.jpg";
import LoungeBeverageCornerPhoto from "@/assets/photos/Itinerary_Day0_Lounge_BeverageCorner.jpg";
import LoungeHotFood1Photo from "@/assets/photos/Itinerary_Day0_Lounge_HotFood1.jpg";
import LoungeHotFood2Photo from "@/assets/photos/Itinerary_Day0_Lounge_HotFood2.jpg";
import LoungeIceCreamPhoto from "@/assets/photos/Itinerary_Day0_Lounge_IceCream.jpg";
import LoungeBarPhoto from "@/assets/photos/Itinerary_Day0_Lounge_Bar.jpg";
import PlanePhoto from "@/assets/photos/Itinerary_Day0_Plane.jpg";
import PlaneSeatPhoto from "@/assets/photos/Itinerary_Day0_Plane_Seat.jpg";
import PlaneFoodPhoto from "@/assets/photos/Itinerary_Day0_Plane_Food.jpg";
import { outboundFlight } from "./data/flights";

export const ItineraryDay0Page = () => {
  return (
    <>
      <Flipboard flight={outboundFlight} />
      <PageContainerItem>
        Out of office mode officially activated! This was a highly anticipated
        trip, though work schedules meant we couldn't lock in our flights until
        the very last minute. Despite the challenges of late planning and having
        to work with limited availability, luck was on our side as we snagged an
        excellent deal. Our adventure finally began at Singapore Changi Airport Terminal
        4.
      </PageContainerItem>
      <PageContainerItem>
        Arriving well ahead of schedule proved to be a wise decision, as we
        immediately faced a hurdle with our tickets not displaying our full
        names. Once the airline successfully resolved the issue, we headed to
        the terminal's Kopitiam to enjoy a familiar meal before clearing the
        e-gates.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: PassportPhoto, alt: "Passport" },
            className: "col-span-full max-w-lg mx-auto",
          },
        ]}
        caption="The non-negotiable first photo of every travel story"
      />
      <PageContainerItem>
        Even with a full dinner settled, a visit to the Blossom Lounge was a
        must. With the year coming to a close, we wanted to utilize the
        remaining guest visits on our Priority Pass, courtesy of our DBS
        Altitude Visa Signature card.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: LoungePhoto, alt: "Lounge" },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Inside, the lounge offered an impressive spread of free-flow options
        that catered to every craving. We found a variety of hot, freshly cooked
        dishes alongside a crisp selection of salads and light snacks, perfect
        for a pre-flight indulgence. For those with a sweet tooth, the ice cream
        station provided a delightful treat, while the well-stocked beverage
        corner featured everything from premium coffees and teas to refreshing
        chilled drinks.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: { src: LoungePasteriesPhoto, alt: "Lounge Pasteries" },
            className: "col-span-full md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: LoungeSaladBarPhoto,
              alt: "Lounge Salad Bar",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: {
              src: LoungeBeverageCornerPhoto,
              alt: "Lounge Beverage Corner",
            },
            className: "col-span-6 md:col-span-4",
          },
          {
            type: MediaType.Image,
            media: { src: LoungeHotFood1Photo, alt: "Lounge Hot Food 1" },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: {
              src: LoungeIceCreamPhoto,
              alt: "Lounge Udders Ice Cream",
            },
            className: "col-span-6 row-span-2",
          },
          {
            type: MediaType.Image,
            media: {
              src: LoungeHotFood2Photo,
              alt: "Lounge Hot Food 2",
            },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        Although the main dining area was buzzing with travelers, we managed to
        find a quiet corner to settle in. We explored the space and noted that
        the cozy resting pods were mostly claimed, while the bar area remained
        peaceful. It became the perfect spot to recharge our devices and relax
        with some videos before the final stroll to our gate.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: LoungeBarPhoto,
              alt: "Longue Bar",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        For this trip, we flew with Juneyao Air, a full-service carrier that was
        new to us. Given the last-minute nature of our booking, other airlines
        had become prohibitively expensive. Juneyao Air sat in the perfect sweet
        spot, priced only slightly higher than budget options like Spring
        Airlines but significantly more affordable than Singapore Airlines.
        Their generous luggage allowance of two 23kg checked bags was a rare and
        welcome perk that sealed the deal, especially since the departure time
        fit our itinerary perfectly.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: PlanePhoto,
              alt: "Plane",
            },
            className: "col-span-full",
          },
        ]}
      />
      <PageContainerItem>
        Any initial misconceptions about the airline being budget were quickly
        dispelled upon boarding. We were pleasantly surprised by the generous
        legroom and the quality of the seats, where the adjustable headrests
        provided great support and a mini back cushion added an extra layer of
        comfort. Between the complimentary supper and the attentive drink
        service, the hospitality was top-notch.
      </PageContainerItem>
      <PageContainerItemMedia
        data={[
          {
            type: MediaType.Image,
            media: {
              src: PlaneSeatPhoto,
              alt: "Plane Seat",
            },
            className: "col-span-6",
          },
          {
            type: MediaType.Image,
            media: { src: PlaneFoodPhoto, alt: "Plane Food" },
            className: "col-span-6",
          },
        ]}
      />
      <PageContainerItem>
        As the cabin lights dimmed and the hum of the engines settled into a
        steady rhythm, a sense of calm finally took over. Satisfied with the
        smooth start to our trip, we leaned back into our cushions and closed
        our eyes, resting as the plane began its long arc through the night sky
        toward our descent into China.
      </PageContainerItem>
    </>
  );
};
