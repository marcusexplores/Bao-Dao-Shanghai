import { cn } from "@/functions/classname";

type CardTitleProps = React.ComponentProps<"div">;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
};
