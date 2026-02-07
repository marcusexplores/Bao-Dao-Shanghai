import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";

type CardTitleProps = ComponentProps<"div">;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
};
