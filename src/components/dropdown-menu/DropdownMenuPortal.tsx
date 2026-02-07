import type { ComponentProps } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuPortalProps = ComponentProps<typeof DropdownMenuPrimitive.Portal>;

export const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalProps) => {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
};
