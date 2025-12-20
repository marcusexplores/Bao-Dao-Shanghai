import type { ComponentProps } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetProps = ComponentProps<typeof SheetPrimitive.Root>;

export const Sheet = ({ ...props }: SheetProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};
