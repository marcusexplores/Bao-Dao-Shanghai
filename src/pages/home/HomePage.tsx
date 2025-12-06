import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import HeroBanner from "@/assets/photos/test.jpg";

import { PageContainerItem } from "@/components/page/PageContainerItem";
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
          <SuzhouSection />
        </PageContainerItem>
      </PageContainer>
    </Page>
  );
};
