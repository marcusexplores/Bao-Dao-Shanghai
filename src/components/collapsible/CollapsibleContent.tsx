import { type ComponentProps } from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleContentProps = ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>;

export const CollapsibleContent = ({ ...props }: CollapsibleContentProps) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
};
