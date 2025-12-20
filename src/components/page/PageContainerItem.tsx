import type { ComponentProps } from "react";

type PageContainerItemProps = ComponentProps<"div">;

export const PageContainerItem = ({ children, className }: PageContainerItemProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}