import { Link } from "react-router";
import type { NavigationItem } from "./data";
import { DropdownMenuItem } from "@/components/dropdown-menu/DropdownMenuItem";
import { DropdownMenuSub } from "@/components/dropdown-menu/DropdownMenuSub";
import { DropdownMenuSubTrigger } from "@/components/dropdown-menu/DropdownMenuSubTrigger";
import { DropdownMenuPortal } from "@/components/dropdown-menu/DropdownMenuPortal";
import { DropdownMenuSubContent } from "@/components/dropdown-menu/DropdownMenuSubContent";

interface NavigationBarSubItemProps {
  item: NavigationItem;
  level: number;
}

export const NavigationBarSubItem = ({
  item,
  level,
}: NavigationBarSubItemProps) => {
  if (item.type === "page") {
    return (
      <DropdownMenuItem>
        <Link to={item.key}>
          <span className="text-sm">{item.name}</span>
        </Link>
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{item.name}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {item.children.map((item) => (
            <NavigationBarSubItem
              key={item.name}
              item={item}
              level={level + 1}
            />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
