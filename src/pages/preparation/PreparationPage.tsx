import { ArrowRight, Package } from "lucide-react";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageHeadline } from "@/components/page/PageHeadline";
import { Separator } from "@/components/separator/Separator";
import { PreparationPageSection } from "./components/PreparationPageSection";
import { Link } from "react-router";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import { recommendations } from "./data/recommendation";
import { Recommendation } from "./components/Recommendation";

export const PreparationPage = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>Preparation</PageHeadline>
        <PageContainerItem className="text-center">
          We don't just show you where we went, we show you how we got there.
          This page serves as our comprehensive archive, detailing the critical
          steps taken to transform the idea of a Shanghai trip into a concrete
          itinerary. It is the meticulous record of our preparations,
          documenting every choice that ultimately became the blueprint for our
          success.
        </PageContainerItem>
      </PageContainer>
      <Separator />
      <PreparationPageSection title="Packing List">
        <PageContainerItem>
          Traveling to Shanghai requires a balance of urban essentials and
          tech-ready gear. From universal power adapters to seasonal layering,
          we've curated a list of exactly what we brought to stay comfortable
          and connected in the city.
        </PageContainerItem>
        <PageContainerItem className="space-y-6">
          <Link
            to={NAVIGATION_KEY.PREPARATION_CHECKLIST}
            className="group flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover:text-slate-900">
                <Package size={24} />
              </div>
              <div>
                <span className="block font-semibold text-slate-900 group-hover:text-white transition-colors">
                  View Complete Packing List
                </span>
                <span className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                  Explore our gear, clothing, and tech essentials
                </span>
              </div>
            </div>
            <ArrowRight
              className="text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all"
              size={20}
            />
          </Link>
        </PageContainerItem>
      </PreparationPageSection>
      {recommendations.map((category, index) => (
        <PreparationPageSection key={index} title={category.title}>
          {category.items.map((item, index) => (
            <Recommendation key={index} item={item} />
          ))}
        </PreparationPageSection>
      ))}
      <PreparationPageSection title="Disclosure">
        <PageContainerItem className="text-sm text-slate-500 space-y-4 italic bg-slate-50/50 p-6 rounded-2xl border border-dashed border-slate-200">
          <p>
            Some links here are affiliate or referral links. If you make a
            purchase or booking after clicking one, we may receive a small
            benefit (like a commission or credit).
          </p>
          <p>
            Please know that this comes at absolutely no extra cost to you. We
            only recommend services and sites we used ourselves to plan this
            trip, and any support we receive helps keep the blog running!
          </p>
        </PageContainerItem>
      </PreparationPageSection>
    </Page>
  );
};
