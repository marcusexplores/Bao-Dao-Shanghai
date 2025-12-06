import { Link } from "react-router";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import HeroBanner from "@/assets/photos/test.jpg";
import { SuzhouSection } from "./components/SuzhouSection";

export const HomePage = () => {
  return (
    <Page hideTopPadding>
      <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          // Use inline style for the CSS background image
          style={{ backgroundImage: `url(${HeroBanner})` }}
        >
          {/* Dark Overlay for Text Readability and Aesthetic */}
          {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> */}
        </div>
      </section>
      <PageContainer>
        <PageContainerItem>
          Our immersive tour through Shanghai, Hangzhou, and Suzhou was a quest
          for discovery, brimming with pure fun and inspiration. This adventure
          redefined the travel experience, proving deeply fulfilling as we
          journeyed through Shanghai's electrifying skyline, the tranquil beauty
          of Hangzhou's West Lake, and the poetic, water-laced elegance of
          Suzhou, all of which marked our first time visiting these three
          magnificent cities! The journey was rich with specific exciting
          first-time activities that truly stand out, including trying out a
          never-taken airline, experiencing the thrill of rock climbing, and
          even the memorable nights of reaching back to the hotel very late to
          rest after jam-packed days. We embraced the desire to capture beauty,
          even resorting to sitting on the cold floor to capture the most
          magical fireworks display. These delightful surprises and moments of
          pushing our boundaries helped us toward rediscovering our life
          purpose, making this entire trip feel vibrant and inspiring.
        </PageContainerItem>
        <PageContainerItem>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY}>View Itinerary</Link>
          </Button>
        </PageContainerItem>
        <PageContainerItem>
          <SuzhouSection />
        </PageContainerItem>
      </PageContainer>
    </Page>
  );
};
