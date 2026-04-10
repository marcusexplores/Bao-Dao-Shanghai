import type { ComponentProps } from "react";
import { cn } from "@/functions/classname";

type DialogBodyProps = ComponentProps<"div">;

export const DialogBody = ({ children, className }: DialogBodyProps) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};
