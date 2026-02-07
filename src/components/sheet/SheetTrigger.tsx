import type { ComponentProps } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetTriggerProps = ComponentProps<typeof SheetPrimitive.Trigger>;

export const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};
