import { cn } from "@/functions/classname";

type PageProps = React.ComponentProps<"div"> & {
  hasTopPadding?: boolean
};

export const Page = ({ hasTopPadding = true, children, className }: PageProps) => {
  return (
    <div className={cn(
        "min-h-screen",
        hasTopPadding ? "pt-15" : "",
        className
      )}>
      {children}
    </div>
  );
}