import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";
import { PageContainerItem } from "./PageContainerItem";

type PageContainerItemTitleProps = ComponentProps<"h2">;

export const PageContainerItemTitle = ({
  children,
  className,
}: PageContainerItemTitleProps) => {
  return (
    <PageContainerItem>
      <h2 className={cn("text-3xl font-bold text-center", className)}>
        {children}
      </h2>
    </PageContainerItem>
  );
};
