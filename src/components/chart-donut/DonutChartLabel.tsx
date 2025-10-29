import { type PieLabelRenderProps } from "recharts";
import { RADIAN } from "./constants";

export const DonutChartLabel = ({
  name,
  percent,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  fill,
}: PieLabelRenderProps) => {
  const cxValue = cx as number;
  const cyValue = cy as number;
  const midAngleValue = midAngle as number;
  const innerRadiusValue = innerRadius as number;
  const outerRadiusValue = outerRadius as number;
  const radius = 25 + innerRadiusValue + (outerRadiusValue - innerRadiusValue);
  const x = cxValue + radius * Math.cos(-midAngleValue * RADIAN);
  const y = cyValue + radius * Math.sin(-midAngleValue * RADIAN);

  const finalName = name ?? "";
  const percentage = percent as number;

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cxValue ? "start" : "end"}
      dominantBaseline="central"
      className="hidden lg:block"
    >{`${finalName} ${(percentage * 100).toFixed(0)}%`}</text>
  );
};
