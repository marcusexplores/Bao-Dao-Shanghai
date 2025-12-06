import { cn } from "@/functions/classname";

type PageProps = React.ComponentProps<"div"> & {
  hideTopPadding?: boolean
};

export const Page = ({ hideTopPadding = false, children, className }: PageProps) => {
  return (
    <div className={cn(
        "min-h-screen",
        !hideTopPadding ? "pt-15" : "",
        className
      )}>
      {children}
    </div>
  );
}