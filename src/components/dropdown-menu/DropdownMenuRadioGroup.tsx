import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>;

export const DropdownMenuRadioGroup = ({
  ...props
}: DropdownMenuRadioGroupProps) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
};
