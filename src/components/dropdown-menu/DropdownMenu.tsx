import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;

export const DropdownMenu = ({ ...props }: DropdownMenuProps) => {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};
