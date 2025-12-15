export interface QuiltTile {
  data: Image;
  cols: number; // Corresponds to Tailwind col-span-{cols}
  rows: number; // Corresponds to Tailwind row-span-{rows}
}