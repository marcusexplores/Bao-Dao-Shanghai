import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageHeadline } from "@/components/page/PageHeadline";

export const BudgetPage = () => {
  return (
    <Page>
      <PageContainer>
        <PageHeadline>How many baos is our trip worth?</PageHeadline>
        {/* Have a input, and submit button. */}
        {/**If correct, input and button disappear (replaced by answer + bao holding pom pom), page wide confetti */}
        {/**bao holding X sidn appear left of input momentarily*/}
      </PageContainer>
    </Page>
  );
};
