export interface QuiltTile {
  type: string;
  media: Image | Video;
  className: string;
}

export interface QuiltObsoleteTile {
  data: Image;
  cols: number; // Corresponds to Tailwind col-span-{cols}
  rows: number; // Corresponds to Tailwind row-span-{rows}
}