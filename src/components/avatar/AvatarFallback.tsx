import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/functions/classname";

type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>;

export const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
};
