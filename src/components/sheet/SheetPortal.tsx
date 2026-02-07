import type { ComponentProps } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetPortalProps = ComponentProps<typeof SheetPrimitive.Portal>;

export const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};
