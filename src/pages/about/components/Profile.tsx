import { Avatar } from "@/components/avatar/Avatar";
import { AvatarFallback } from "@/components/avatar/AvatarFallback";
import { AvatarImage } from "@/components/avatar/AvatarImage";
import { cn } from "@/functions/classname";

type ProfileProps = React.ComponentProps<"div"> & {
  name: string;
  image: string;
  placeholder: string;
};

export const Profile = ({ name, image, placeholder, className, children}: ProfileProps) => {
  return (
    <div className={cn("flex flex-col text-center", className)}>
      <div className="flex justify-center">
        <Avatar className="size-75 lg:size-90 border-5 border-primary">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-xs">{placeholder}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-3xl font-extrabold mt-10 mb-7">{name}</span>
      {children}
    </div>
  );
};
