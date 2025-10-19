import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageHeadline } from "@/components/page/PageHeadline";
import Logo from "@/assets/vectors/logo.svg";
import { Profile } from "./components/Profile";

export const AboutPage = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>About our site</PageHeadline>
        <PageContainerItem className="text-center">
          Welcome to Bao到上海! <br />
          This blog is a chronicle of our long-awaited adventure through the dynamic, dazzling city of Shanghai. <br />
          The title of our site is a playful pun built around a Chinese homophone—two different characters that share the exact same sound. <br />
          This linguistic playfulness captures both the logistical effort of planning the trip and our excitement for the local cuisine.
        </PageContainerItem>
      </PageContainer>
      <PageContainer>
        <PageContainerItem>
          <h2 className="text-4xl font-bold text-center">Our Name</h2>
        </PageContainerItem>
        <PageContainerItem className="text-2xll font-bold">The Double Meaning of "Bao"</PageContainerItem>
        <PageContainerItem>
          <span className="float-left text-[8rem] sm:text-[10rem] font-black text-primary mr-6 leading-none select-none">
            保
          </span>
          <span>The original inspiration for the title came from the phrase </span>
          <ruby>
            保<rt>bǎo</rt>
            到<rt>dào</rt>
            上<rt>shàng</rt>
            海<rt>hǎi</rt>
          </ruby>
          <span>, which is a common shorthand for </span>
            <ruby>
              保<rt>bǎo</rt>
              证<rt>zhèng</rt>
              到<rt>dào</rt>
              上<rt>shàng</rt>
              海<rt>hǎi</rt>
            </ruby>
          <span>
            , meaning "guaranteed to reach Shanghai."
            This meaning is very close to our hearts.
            Getting this long-awaited trip off the ground required significant behind-the-scenes planning, scheduling gymnastics, and crucial decisions.
            The title, in this sense, is our celebration and proclamation that despite all the obstacles, we managed to guarantee our arrival.
          </span>
        </PageContainerItem>
        <PageContainerItem>
          <span className="float-left text-[8rem] sm:text-[10rem] font-black text-primary mr-6 leading-none select-none">
            包
          </span>
          <span>Coincidentally, Bao is a homophone for </span>
          <ruby>
            包<rt>bāo</rt>
          </ruby>
          <span>, the word for bun or dumpling. Shanghai is renowned for its incredible variety of </span>
          <ruby>
            包<rt>bāo</rt>
            子<rt>zi</rt>
          </ruby>
          <span>, including the famous </span>
          <ruby>
            小<rt>xiăo</rt>
            笼<rt>lóng</rt>
            包<rt>bāo</rt>
          </ruby>
          <span> (soup dumplings). This second meaning instantly ties the blog to the mouth-watering culinary adventures we'll be documenting.</span>
        </PageContainerItem>
        <PageContainerItem className="clear-both">
          Therefore, Bao到上海 means both "We guaranteed our trip to Shanghai" and, through the sense of "reaching (到)" the destination, it joyfully declares: "We have finally arrived in Shanghai!"
        </PageContainerItem>
      </PageContainer>
      <PageContainer>
        <PageContainerItem>
          <h2 className="text-4xl font-bold text-center">Our Logo</h2>
        </PageContainerItem>
        <PageContainerItem className="flex flex-col md:flex-row md:space-x-15">
          <div className="mb-4 md:mb-0">
            <img src={Logo} />
          </div>
          <div>
            If you look closely at our logo, you'll see two happy little 生煎包 (Shēng Jiān Bāo), a famous signature street food of Shanghai—crispy pan-fried buns filled with savory pork and a burst of hot soup. They're a perfect, slightly cute representation of us (the travelers) and the city we're so excited to explore!
          </div>
        </PageContainerItem>
      </PageContainer>
      <PageContainer>
        <PageContainerItem>
          <h2 className="text-4xl font-bold text-center">The Baos</h2>
        </PageContainerItem>
        <PageContainerItem className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-15 p-4">
          <Profile name="Bernard" image="https://github.com/shadcn.png" placeholder="B" className="mb-25 md:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Profile>
          <Profile name="Marcus" image="https://github.com/shadcn.png" placeholder="M">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Profile>
        </PageContainerItem>
      </PageContainer>
    </Page>
  )
}