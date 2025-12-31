import { useState } from "react";
import { CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { ExternalLinkButton } from "./ExternalLinkButton";
import type { Item } from "../data/recommendation";

interface RecommendationProps {
  item: Item;
}

export const Recommendation = ({ item }: RecommendationProps) => {
  const [copied, setCopied] = useState(false);

  const hasExternalLink = !!item.links && item.links.length > 0;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2s
    } catch {
      alert("Failed to copy!");
    }
  };

  // const handleCopy = (text: string) => {
  //   const textArea = document.createElement("textarea");
  //   textArea.value = text;
  //   document.body.appendChild(textArea);
  //   textArea.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(textArea);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

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

      <div className="space-y-8 mt-8 pl-[68px] pr-4">
        {/* Key Benefits */}
        <div className="flex flex-col gap-4">
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

        {/* External Links Section */}
        {hasExternalLink && (
          <div className="flex flex-col gap-4">
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

        {item.referral && (
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <p className="text-xs text-slate-500 font-medium">
                    {item.referral.description}
                  </p>
                  <p className="text-[9px] text-slate-400 italic mt-3">
                    * Rewards are subjected to changes
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {item.referral.code && (
                  <button
                    onClick={() => {
                      void handleCopy(item.referral?.code ?? "");
                    }}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-mono font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm"
                  >
                    {copied ? "COPIED" : item.referral.code}
                    <Copy size={12} className="text-slate-300" />
                  </button>
                )}
                {item.referral.link && (
                  <a
                    href={item.referral.link}
                    target="_blank"
                    rel="noopener"
                    className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-bold hover:bg-blue-600 transition-colors flex items-center gap-1 shadow-sm shadow-slate-200"
                  >
                    Invite Link
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
