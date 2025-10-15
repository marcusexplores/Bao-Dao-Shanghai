import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>;

export const CollapsibleTrigger = ({ ...props }: CollapsibleTriggerProps) => {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
};
