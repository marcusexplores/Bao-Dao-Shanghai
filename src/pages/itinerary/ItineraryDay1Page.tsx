import { Flipboard } from "@/components/flipboard/Flipboard";
import { outboundFlight } from "./data/flights";

export const ItineraryDay1Page = () => {
  return (
    <>
      <Flipboard flight={outboundFlight} />
    </>
  );
}