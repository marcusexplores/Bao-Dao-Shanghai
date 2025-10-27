import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "@/components/chart/ChartContainer";
import { ChartTooltip } from "@/components/chart/ChartTooltip";
import { ChartTooltipContent } from "@/components/chart/ChartTooltipContent";
import type { ChartConfig } from "@/components/chart/types";

type PieChartProps = React.ComponentProps<typeof RechartsPrimitive.Pie> & {
  config?: ChartConfig;
  title: string;
  subtitle: string;
};

export const DonutChart = ({ config={}, dataKey, nameKey, data, title, subtitle }: PieChartProps) => {
  return (
    <ChartContainer
      config={config}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RechartsPrimitive.PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <RechartsPrimitive.Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={60}
          strokeWidth={5}
        >
          <RechartsPrimitive.Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {title}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {subtitle}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </RechartsPrimitive.Pie>
      </RechartsPrimitive.PieChart>
    </ChartContainer>
  );
};
