import type { ComponentProps } from "react";
import {
  GlobeIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  type LucideIcon,
} from "lucide-react";
import { ExternalLink } from "@/components/link/ExternalLink";
import { ExternalLinkOption } from "../constants";
import { type ExternalLinkOptionType } from "../types";

type ExternalLinkButtonProps = ComponentProps<typeof ExternalLink> & {
  type: ExternalLinkOptionType;
};

export const ExternalLinkButton = ({ href, type }: ExternalLinkButtonProps) => {
  const linkInfo = getExternalLinkInformation(type);

  const Icon = linkInfo.first;
  const displayText = linkInfo.second;

  return (
    <ExternalLink
      href={href}
      className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
    >
      <Icon size={14} />
      {displayText}
    </ExternalLink>
  );
};

const getExternalLinkInformation = (
  type: ExternalLinkOptionType
): Pair<LucideIcon, string> => {
  switch (type) {
    case ExternalLinkOption.AppStore:
      return { first: SmartphoneIcon, second: "App Store" };
    case ExternalLinkOption.GooglePlay:
      return { first: SmartphoneIcon, second: "Google Play" };
    case ExternalLinkOption.Shopee:
      return { first: ShoppingCartIcon, second: "Google Play" };
    default:
      return { first: GlobeIcon, second: "Official Website" };
  }
};
