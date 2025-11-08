import { Flipboard } from "@/components/flipboard/Flipboard";
import { outboundFlight } from "./data/flights";
import { Page } from "@/components/page/Page";

export const ItineraryDay0Page = () => {
  return (
    <Page>
      <Flipboard flight={outboundFlight} />
    </Page>
  );
}