import { cn } from "@/functions/classname";

type PageHeadlineProps = React.ComponentProps<"h1">;

export const PageHeadline = ({ children, className }: PageHeadlineProps) => {
  return (
    <h1 className={cn("text-4xl font-extrabold text-center", className)}>
      {children}
    </h1>
  );
}