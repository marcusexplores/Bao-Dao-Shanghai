import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Timeline } from "@/components/timeline/Timeline";
import { timeline } from "./data/timeline";

export const ItineraryPage = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Itinerary</PageHeadline>
      </PageContainer>
      <PageContainer>
        <Timeline data={timeline} />
      </PageContainer>
    </Page>
  );
}