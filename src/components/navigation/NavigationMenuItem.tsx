import { Link } from "react-router";
import { ChevronRightIcon } from "lucide-react";
import { Collapsible } from "@/components/collapsible/Collapsible";
import { CollapsibleTrigger } from "@/components/collapsible/CollapsibleTrigger";
import { CollapsibleContent } from "@/components/collapsible/CollapsibleContent";
import { SheetClose } from "@/components/sheet/SheetClose";
import { cn } from "@/functions/classname";
import type { NavigationItem } from "./data";

interface NavigationMenuItemProps {
  item: NavigationItem;
  level: number;
}

export const NavigationMenuItem = ({
  item,
  level,
}: NavigationMenuItemProps) => {
  if (item.type === "page") {
    return (
      <SheetClose asChild>
        <Link to={item.key}>
          <div
            className={cn(
              "focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]",
              level === 0 ? "pl-1" : "pl-[1.75rem]"
            )}
          >
            <span className="text-sm">{item.name}</span>
          </div>
        </Link>
      </SheetClose>
    );
  }

  return (
    <Collapsible
      className={cn(
        "flex flex-col gap-1.5",
        level === 0 ? "pl-0" : "pl-[1.5rem]"
      )}
    >
      <div className="focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]">
        <SheetClose asChild>
          <Link to={item.key} className="flex-1 text-start text-sm">
            <span>{item.name}</span>
          </Link>
        </SheetClose>
        <CollapsibleTrigger>
          <ChevronRightIcon className='size-4 shrink-0 transition-transform [[data-state="open"]>&]:rotate-90 cursor-pointer' />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down flex flex-col gap-1.5 overflow-hidden transition-all duration-300">
        {item.children.map((item) => (
          <NavigationMenuItem key={item.name} item={item} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
