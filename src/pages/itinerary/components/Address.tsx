import { ExternalLink } from "@/components/link/ExternalLink";
import { MapPinIcon } from "lucide-react";

interface AddressProps {
  address: string;
  map?: string;
}

export const Address = ({ address, map }: AddressProps) => {
  const addressText = <span className="text-sm leading-relaxed">{address}</span>;

  return (
    <div className="flex items-center gap-3">
      <MapPinIcon size={18} className="shrink-0" />
      {map ? <ExternalLink href={map}>{addressText}</ExternalLink> : addressText}
    </div>
  );
};
