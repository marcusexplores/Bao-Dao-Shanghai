import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemTitle } from "@/components/page/PageContainerItemTitle";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Separator } from "@/components/separator/Separator";

export const PreparationPage = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Preparation</PageHeadline>
        <PageContainerItem className="text-center">
          We don't just show you where we went, we show you how we got there.
          This page serves as our comprehensive archive, detailing the critical steps taken to transform the idea of a Shanghai trip into a concrete itinerary.
          It is the meticulous record of our preparations, documenting every choice that ultimately became the blueprint for our success.
        </PageContainerItem>
      </PageContainer>
      <Separator />
      <PageContainer>
        <PageContainerItemTitle>Packing List</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Flights</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Accommodation</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Insurance</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Network Communication</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>VPN</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Payment</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Navigation</PageContainerItemTitle>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Disclosure</PageContainerItemTitle>
        <div>
          <p>Some links here are affiliate or referral links. If you make a purchase or booking after clicking one, we may receive a small benefit (like a commission or credit).</p>
          <p>Please know that this comes at absolutely no extra cost to you. We only recommend services and sites we used ourselves to plan this trip, and any support we receive helps keep the blog running!</p>
        </div>
      </PageContainer>
    </Page>
  );
};
