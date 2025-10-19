import { cn } from "@/functions/classname";

type PageProps = React.ComponentProps<"div">;

export const Page = ({ children, className }: PageProps) => {
  return (
    <div className={cn("pt-15", className)}>
      {children}
    </div>
  );
}