import { cn } from "@/functions/classname";

type PageContainerProps = React.ComponentProps<"div">;

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn("py-12 md:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        {children}
      </div>
    </div>
  );
}