import { Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { DonutChartLabel } from "./DonutChartLabel";
import { DonutChartLegendItem } from "./DonutChartLegendItem";

type DonutChartProps = React.ComponentProps<typeof Pie> & {
  title: string;
  subtitle: string;
};

export const DonutChart = ({
  dataKey,
  nameKey,
  data,
  title,
  subtitle,
}: DonutChartProps) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            labelLine={{ className: "hidden lg:block" }}
            label={DonutChartLabel}
          >
            <Label
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
          </Pie>
          <Tooltip
            formatter={(value: number) =>
              `$${value.toFixed(2)}`
            }
            contentStyle={{
              backgroundColor: "var(--background)",
              border: "var(--border)",
              borderRadius: "var(--radius)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center w-full lg:hidden">
        {data?.map((item) => (
          <DonutChartLegendItem
            key={item.name as string}
            name={item.name as string}
            fill={item.fill as string}
          />
        ))}
      </div>
    </>
  );
};
