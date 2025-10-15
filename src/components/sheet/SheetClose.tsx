import * as SheetPrimitive from "@radix-ui/react-dialog";

type SheetCloseProps = React.ComponentProps<typeof SheetPrimitive.Close>;

export const SheetClose = ({ ...props }: SheetCloseProps) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};
