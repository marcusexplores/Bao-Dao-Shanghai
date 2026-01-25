/**
 * Get the link to embed youtube videos based on the id
 */
export const getYouTubeEmbedUrl = (id: string): string => {
  return `https://www.youtube.com/embed/${id}`;
};
