import { Flipboard } from "@/components/flipboard/Flipboard";
import { returnFlight } from "./data/flights";
import { Page } from "@/components/page/Page";

export const ItineraryDay8Page = () => {
  return (
    <Page>
      <Flipboard flight={returnFlight} />
    </Page>
  );
}