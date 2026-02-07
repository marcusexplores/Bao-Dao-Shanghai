import { Link } from "react-router";
import { cn } from "@/functions/classname";
import Logo from '@/assets/vectors/Logo.svg';
import { NAVIGATION_KEY } from "./constants";

interface NavigationLogoProps {
  className?: string;
}

export const NavigationLogo = ({ className }: NavigationLogoProps) => {
  return (
    <Link
      to={NAVIGATION_KEY.HOME}
      className={cn(
        "flex items-center space-x-2 transform scale-140",
        className
      )}
    >
      <img src={Logo} height="15" width="30" alt="Brand Logo" />
    </Link>
  );
};
