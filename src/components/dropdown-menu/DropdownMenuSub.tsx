import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuPrimitive.Sub>;

export const DropdownMenuSub = ({ ...props }: DropdownMenuSubProps) => {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
};
