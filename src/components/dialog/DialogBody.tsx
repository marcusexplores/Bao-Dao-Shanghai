import type { ComponentProps } from "react";

type DialogBodyProps = ComponentProps<"div">;

export const DialogBody = ({ children }: DialogBodyProps) => {
  return <div className="p-6">{children}</div>;
};
