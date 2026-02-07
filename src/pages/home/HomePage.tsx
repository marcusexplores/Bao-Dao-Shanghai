import { Link } from "react-router";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import HeroBanner from "@/assets/photos/Home_HeroBanner.jpg";
import LogoText from "@/assets/vectors/Logo_Text.svg";
import Buddies from "@/assets/images/Home_Buddies.png";
import { SuzhouSection } from "./components/SuzhouSection";

export const HomePage = () => {
  return (
    <Page hideTopPadding>
      <section className="relative w-full overflow-hidden min-h-screen flex justify-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBanner})` }}
        ></div>
        <img src={LogoText} className="mt-23 w-55 h-50 md:w-85 md:h-85" />
        <img
          src={Buddies}
          alt="Buddies"
          className="absolute left-2 -bottom-14 md:-bottom-23 w-45 h-50 md:w-75 md:h-85 object-cover z-10"
        />
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
      </PageContainer>
      <PageContainer>
        <PageContainerItem>
          <SuzhouSection />
        </PageContainerItem>
      </PageContainer>
    </Page>
  );
};
