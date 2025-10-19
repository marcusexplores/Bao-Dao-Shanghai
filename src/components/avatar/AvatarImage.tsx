import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/functions/classname";

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
};
