import { MediaType } from "./constants";

export interface QuiltTile {
  type: (typeof MediaType)[keyof typeof MediaType];
  media: Image | Video | Pair<Image, Image>;
  className: string;
}
