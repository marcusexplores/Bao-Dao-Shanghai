import { NavigationBarItem } from "./NavigationBarItem";
import { navigationItems } from "./data";

interface NavigationBarRightProps {
  isAtTop: boolean;
}

export const NavigationBarRight = ({ isAtTop }: NavigationBarRightProps) => {
  return (
    <div className="flex items-center">
      <div className="w-6 lg:hidden"></div>
      <nav className="hidden lg:flex space-x-8">
        {navigationItems.map((item) => (
          <NavigationBarItem
            key={item.name}
            item={item}
            level={0}
            isAtTop={isAtTop}
          />
        ))}
      </nav>
    </div>
  );
};
