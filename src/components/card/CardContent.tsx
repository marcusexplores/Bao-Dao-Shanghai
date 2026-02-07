import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";

type CardContentProps = ComponentProps<"div">;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
};
