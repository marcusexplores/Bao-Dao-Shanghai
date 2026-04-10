import { MenuIcon } from "lucide-react";
import { Sheet } from "@/components/sheet/Sheet";
import { SheetTrigger } from "@/components/sheet/SheetTrigger";
import { SheetContent } from "@/components/sheet/SheetContent";
import { SheetHeader } from "@/components/sheet/SheetHeader";
import { SheetTitle } from "@/components/sheet/SheetTitle";
import { SheetFooter } from "@/components/sheet/SheetFooter";
import { Separator } from "@/components/separator/Separator";
import { ExternalLink } from "@/components/link/ExternalLink";
import Bao1 from "@/assets/vectors/Bao1_DongPoRou.svg";
import ParentLogo from "@/assets/vectors/Logo_Parent.svg";
import { cn } from "@/functions/classname";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { navigationMenuItems } from "./data";

interface NavigationMenuProps {
  isAtTop: boolean;
}

export const NavigationMenu = ({ isAtTop }: NavigationMenuProps) => {
  const textColor = isAtTop
    ? "text-foreground"
    : "text-background";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className={cn("cursor-pointer", textColor)} />
      </SheetTrigger>
      <SheetContent side="left" className="w-75">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2.5 p-4 pt-0">
          {navigationMenuItems.map((item) => (
            <NavigationMenuItem key={item.name} item={item} level={0} />
          ))}
        </div>
        <SheetFooter>
          <div>
            <img src={Bao1} />
          </div>
          <Separator className="mb-2 bg-muted-foreground" />
          <div className="text-muted-foreground flex justify-between items-center">
            <span>
              <b>Powered by</b>
            </span>
            <ExternalLink href="https://marcusexplores.github.io/">
              <img src={ParentLogo} />
            </ExternalLink>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
