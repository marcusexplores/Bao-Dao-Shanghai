import { CheckCircle2 } from "lucide-react";
import { ExternalLinkButton } from "./ExternalLinkButton";
import type { Item } from "../data/recommendation";

interface RecommendationProps {
  item: Item;
}

export const Recommendation = ({ item }: RecommendationProps) => {
  const hasExternalLink = !!item.links && item.links.length > 0;

  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 flex-none flex items-center justify-center">
          <img
            src={item.icon.src}
            alt={item.icon.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <h4 className="font-medium text-slate-900">{item.name}</h4>
          <p className="text-sm text-slate-500 mt-1">{item.description}</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-8 space-y-8">
        <div className="space-y-4 pl-[68px] pr-4">
          <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Key Benefits
          </h5>
          <ul className="grid gap-3">
            {item.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm text-slate-600 leading-relaxed items-start"
              >
                <CheckCircle2
                  size={16}
                  className="text-blue-500 mt-0.5 shrink-0"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* External Links Section */}
      {hasExternalLink && (
        <div className="pl-[68px] pr-4 space-y-4">
          <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            External Links
          </h5>
          <div className="flex flex-wrap gap-4">
            {item.links?.map((link, index) => (
              <ExternalLinkButton
                key={index}
                type={link.type}
                href={link.src}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
