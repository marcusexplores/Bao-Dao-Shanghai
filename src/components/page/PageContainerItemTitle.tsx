import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/functions/classname";
import { PageContainerItem } from "./PageContainerItem";
import { PageContainerItemTitleAlignment } from "./constants";

const variants = cva("text-3xl font-bold", {
  variants: {
    align: {
      [PageContainerItemTitleAlignment.Middle]: "text-center",
      [PageContainerItemTitleAlignment.Left]: "text-left",
      [PageContainerItemTitleAlignment.Right]: "text-right",
    },
  },
  defaultVariants: {
    align: PageContainerItemTitleAlignment.Middle,
  },
});

type PageContainerItemTitleProps = ComponentProps<"h2"> &
  VariantProps<typeof variants>;

export const PageContainerItemTitle = ({
  align,
  children,
  className,
}: PageContainerItemTitleProps) => {
  return (
    <PageContainerItem>
      {/* <h2 className={cn("text-3xl font-bold text-center", className)}> */}
      <h2 className={cn(variants({ align }), className)}>{children}</h2>
    </PageContainerItem>
  );
};
