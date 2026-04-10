import type { ComponentProps } from "react";

type DialogTitleProps = ComponentProps<"div">;

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return (
    <div className="text-xl font-bold">{children}</div>
  );
};
