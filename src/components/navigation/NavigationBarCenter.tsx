import { NavigationLogo } from "./NavigationLogo";

export const NavigationBarCenter = () => {
  return (
    <div className="flex-grow flex justify-center lg:hidden">
      <NavigationLogo />
    </div>
  );
};
