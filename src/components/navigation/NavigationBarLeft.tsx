import { NavigationMenu } from "./NavigationMenu";
import { NavigationLogo } from "./NavigationLogo";

export const NavigationBarLeft = () => {
  return (
    <div className="flex items-center">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <NavigationMenu />
      </div>

      {/* Desktop Logo  */}
      <NavigationLogo className="hidden lg:flex" />
    </div>
  );
};
