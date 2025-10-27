import { cn } from "@/functions/classname";

type CardContentProps = React.ComponentProps<"div">;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
};
