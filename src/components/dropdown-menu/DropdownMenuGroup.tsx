import type { ComponentProps } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuGroupProps = ComponentProps<typeof DropdownMenuPrimitive.Group>;

export const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
};
