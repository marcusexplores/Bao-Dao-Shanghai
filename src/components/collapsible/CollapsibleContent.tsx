import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleContentProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>;

export const CollapsibleContent = ({ ...props }: CollapsibleContentProps) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
};
