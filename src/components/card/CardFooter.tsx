import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";

type CardFooterProps = ComponentProps<"div">;

export const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
};
