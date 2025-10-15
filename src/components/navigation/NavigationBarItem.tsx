import { Link } from "react-router";
import { ChevronDownIcon } from "lucide-react";
import type { NavigationItem } from "./data";
import { DropdownMenu } from "@/components/dropdown-menu/DropdownMenu";
import { DropdownMenuTrigger } from "@/components/dropdown-menu/DropdownMenuTrigger";
import { DropdownMenuContent } from "@/components/dropdown-menu/DropdownMenuContent";
import { NavigationBarSubItem } from "./NavigationBarSubItem";

interface NavigationBarItemProps {
  item: NavigationItem;
  level: number;
}

export const NavigationBarItem = ({ item, level }: NavigationBarItemProps) => {
  if (item.type === "page") {
    return (
      <Link to={item.key}>
        <span className="text-sm">{item.name}</span>
      </Link>
    );
  }

  return (
    <div className="flex">
      <Link to={item.key} className="mr-1">
        <span className="text-sm">{item.name}</span>
      </Link>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <ChevronDownIcon className='size-4 shrink-0 transition-transform [[data-state="open"]>&]:rotate-180 cursor-pointer' />
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
