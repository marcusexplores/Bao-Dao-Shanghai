import type { ImgHTMLAttributes, SourceHTMLAttributes } from "react";
import { MediaType } from "./constants";

export interface QuiltTile {
  type: (typeof MediaType)[keyof typeof MediaType];
  media: ImgHTMLAttributes<HTMLImageElement> | SourceHTMLAttributes<HTMLSourceElement> | Pair<ImgHTMLAttributes<HTMLImageElement>, ImgHTMLAttributes<HTMLImageElement>>;
  className: string;
}
