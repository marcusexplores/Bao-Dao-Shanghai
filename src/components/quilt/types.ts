import type { ImgHTMLAttributes } from "react";
import { MediaType } from "./constants";

export interface QuiltTile {
  type: (typeof MediaType)[keyof typeof MediaType];
  media: ImgHTMLAttributes<HTMLImageElement> | Video | Pair<ImgHTMLAttributes<HTMLImageElement>, ImgHTMLAttributes<HTMLImageElement>>;
  className: string;
}
