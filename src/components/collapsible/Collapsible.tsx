import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleProps = React.ComponentProps<typeof CollapsiblePrimitive.Root>;

export const Collapsible = ({ ...props }: CollapsibleProps) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
};
