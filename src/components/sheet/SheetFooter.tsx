import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";

type SheetFooterProps = ComponentProps<"div">;

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
};
