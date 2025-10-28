import {
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type PieLabelRenderProps,
} from "recharts";

type PieChartProps = React.ComponentProps<typeof Pie> & {
  title: string;
  subtitle: string;
};

export const DonutChart = ({
  dataKey,
  nameKey,
  data,
  title,
  subtitle,
}: PieChartProps) => {
  return (
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
          label={({ name, percent }: PieLabelRenderProps) => {
            const finalName = name ?? "";
            const percentage = percent as number;
            return `${finalName} ${(percentage * 100).toFixed(0)}%`;
          }}
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
          formatter={(value: number) => `$${value.toLocaleString()}`}
          contentStyle={{
            backgroundColor: "var(--background)",
            border: "var(--border)",
            borderRadius: "var(--radius)",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
