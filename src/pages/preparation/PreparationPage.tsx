import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { Separator } from "@/components/separator/Separator";

export const PreparationPage = () => {
  return (
    <Page>
      <PageContainer>
        <h1>Preparation</h1>
        <div>
          We don't just show you where we went, we show you how we got there.
          This page serves as our comprehensive archive, detailing the critical steps taken to transform the idea of a Shanghai trip into a concrete itinerary.
          It is the meticulous record of our preparations, documenting every choice that ultimately became the blueprint for our success.
        </div>
      </PageContainer>
      <Separator />
      <PageContainer>
        <h2>Packing List</h2>
      </PageContainer>
      <PageContainer>
        <h2>Flights</h2>
      </PageContainer>
      <PageContainer>
        <h2>Accommodation</h2>
      </PageContainer>
      <PageContainer>
        <h2>Insurance</h2>
      </PageContainer>
      <PageContainer>
        <h2>Network Communication</h2>
      </PageContainer>
      <PageContainer>
        <h2>VPN</h2>
      </PageContainer>
      <PageContainer>
        <h2>Payment</h2>
      </PageContainer>
      <PageContainer>
        <h2>Navigation</h2>
      </PageContainer>
      <PageContainer>
        <h2>Disclosure</h2>
        <div>
          <p>Some links here are affiliate or referral links. If you make a purchase or booking after clicking one, we may receive a small benefit (like a commission or credit).</p>
          <p>Please know that this comes at absolutely no extra cost to you. We only recommend services and sites we used ourselves to plan this trip, and any support we receive helps keep the blog running!</p>
        </div>
      </PageContainer>
    </Page>
  );
};
