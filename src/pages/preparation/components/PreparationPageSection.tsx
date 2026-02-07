import type { ComponentProps } from "react";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItemTitle } from "@/components/page/PageContainerItemTitle";
import { PageContainerItemTitleAlignment } from "@/components/page/constants";

type PreparationPageSectionProps = ComponentProps<typeof PageContainer> & {
  title: string;
};

export const PreparationPageSection = ({
  title,
  children,
}: PreparationPageSectionProps) => {
  return (
    <PageContainer>
      <PageContainerItemTitle align={PageContainerItemTitleAlignment.Left}>
        {title}
      </PageContainerItemTitle>
      {children}
    </PageContainer>
  );
};
