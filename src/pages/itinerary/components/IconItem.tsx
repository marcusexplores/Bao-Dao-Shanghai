import { type LucideIcon } from "lucide-react";
import { ExternalLink } from "@/components/link/ExternalLink";

interface IconItemProps {
  icon: LucideIcon;
  text: string;
  link?: string;
};

export const IconItem = ({ icon, text, link }: IconItemProps) => {
  const Icon = icon;
  const textComponent = <span className="text-sm leading-relaxed">{text}</span>;

  return (
    <div className="flex items-center gap-3">
      <Icon size={18} className="shrink-0" />
      {link ? <ExternalLink href={link}>{textComponent}</ExternalLink> : textComponent}
    </div>
  );
};
