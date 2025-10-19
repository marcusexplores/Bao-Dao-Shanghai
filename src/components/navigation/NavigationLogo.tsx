import { Link } from "react-router";
import { cn } from "@/functions/classname";
import { NAVIGATION_KEY } from "./constants";
import logo from '@/assets/vectors/logo.svg'; // Correct path to your image file

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
      <img src={logo} height="15" width="30" alt="Brand Logo" />
    </Link>
  );
};
