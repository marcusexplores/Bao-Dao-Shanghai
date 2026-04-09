import { Link } from "react-router";
import { ChevronDownIcon } from "lucide-react";
import { DropdownMenu } from "@/components/dropdown-menu/DropdownMenu";
import { DropdownMenuTrigger } from "@/components/dropdown-menu/DropdownMenuTrigger";
import { DropdownMenuContent } from "@/components/dropdown-menu/DropdownMenuContent";
import { cn } from "@/functions/classname";
import { NavigationBarSubItem } from "./NavigationBarSubItem";
import type { NavigationItem } from "./data";

interface NavigationBarItemProps {
  item: NavigationItem;
  level: number;
  isAtTop?: boolean;
}

export const NavigationBarItem = ({
  item,
  level,
  isAtTop,
}: NavigationBarItemProps) => {
  const textColor = isAtTop
    ? "text-foreground"
    : "text-background";

  if (item.type === "page") {
    return (
      <Link to={item.key}>
        <span className={cn("text-sm", textColor)}>{item.name}</span>
      </Link>
    );
  }

  return (
    <div className="flex">
      <Link to={item.key} className="mr-1">
        <span className={cn("text-sm", textColor)}>{item.name}</span>
      </Link>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <ChevronDownIcon
            className={cn('size-4 shrink-0 transition-transform [[data-state="open"]>&]:rotate-180 cursor-pointer', textColor)}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {item.children.map((item) => (
            <NavigationBarSubItem
              key={item.name}
              item={item}
              level={level + 1}
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
