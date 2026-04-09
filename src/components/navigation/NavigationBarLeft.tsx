import { NavigationMenu } from "./NavigationMenu";
import { NavigationLogo } from "./NavigationLogo";

interface NavigationBarLeftProps {
  isAtTop: boolean;
}

export const NavigationBarLeft = ({ isAtTop }: NavigationBarLeftProps) => {
  return (
    <div className="flex items-center">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <NavigationMenu isAtTop={isAtTop} />
      </div>

      {/* Desktop Logo  */}
      <NavigationLogo className="hidden lg:flex" />
    </div>
  );
};
