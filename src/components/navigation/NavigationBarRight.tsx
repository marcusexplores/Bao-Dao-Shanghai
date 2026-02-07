import { NavigationBarItem } from "./NavigationBarItem";
import { navigationItems } from "./data";

export const NavigationBarRight = () => {
  return (
    <div className="flex items-center space-x-6">
      <nav className="hidden lg:flex space-x-8">
        {navigationItems.map((item) => (
          <NavigationBarItem key={item.name} item={item} level={0} />
        ))}
      </nav>
    </div>
  );
};
