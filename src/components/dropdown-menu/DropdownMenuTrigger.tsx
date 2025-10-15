import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>;

export const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerProps) => {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
};
