import { cn } from "@/functions/classname";

type CardDescriptionProps = React.ComponentProps<"div">;

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
