interface LegendItemProps {
  name: string;
  fill: string;
}

export const LegendItem = ({ name, fill }: LegendItemProps) => {
  return (
    <div className="flex items-center space-x-1 mr-4 mb-2">
      <div
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ backgroundColor: fill }}
      />
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
};
