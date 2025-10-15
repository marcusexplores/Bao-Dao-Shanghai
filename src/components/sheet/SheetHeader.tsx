import { cn } from "@/functions/classname";

type SheetHeaderProps = React.ComponentProps<"div">;

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
};
