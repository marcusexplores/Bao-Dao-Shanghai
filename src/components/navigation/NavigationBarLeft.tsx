import { NavigationLogo } from "./NavigationLogo";
import { NavigationMenu } from "./NavigationMenu";

export const NavigationBarLeft = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Mobile Menu Toggle */}
      <div className={`lg:hidden`}>
        <NavigationMenu />
      </div>

      {/* Desktop Logo  */}
      <NavigationLogo className="hidden lg:flex" />
    </div>
  );
};
