import { getYouTubeEmbedUrl } from "./functions";

interface YoutubeProps {
  id: string;
}

export const YoutubeViewer = ({ id }: YoutubeProps) => {
  return (
    <div className="relative overflow-hidden aspect-video w-full h-full">
      <iframe
        src={getYouTubeEmbedUrl(id)}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
