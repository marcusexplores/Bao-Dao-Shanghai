import { NavigationMenu } from "./NavigationMenu";
import { NavigationLogo } from "./NavigationLogo";

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
