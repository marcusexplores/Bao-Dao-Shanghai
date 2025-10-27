import { useMemo } from "react";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageHeadline } from "@/components/page/PageHeadline";
import { DonutChart } from "@/components/chart-donut/DonutChart";
import { chartData, expenseData } from "./data/data";
import { CHART_NAME_KEY } from "./constants";
import { Card } from "@/components/card/Card";
import { CardHeader } from "@/components/card/CardHeader";
import { CardTitle } from "@/components/card/CardTitle";
import { CardContent } from "@/components/card/CardContent";
import { PageContainerItemTitle } from "@/components/page/PageContainerItemTitle";

export const BudgetPage = () => {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Page>
      <PageContainer>
        <PageHeadline>How many baos is our trip worth?</PageHeadline>
        {/* Have a input, and submit button. */}
        {/**If correct, input and button disappear (replaced by answer + bao holding pom pom), page wide confetti */}
        {/**bao holding X sidn appear left of input momentarily*/}
        <PageContainerItem>
          <DonutChart
            nameKey={CHART_NAME_KEY}
            data={chartData}
            title={totalVisitors.toLocaleString()}
            subtitle="RMB"
          />
        </PageContainerItem>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Detailed Breakdown</PageContainerItemTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {expenseData.map((category) => (
            <Card
              key={category.name}
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <div style={{ color: category.color }}>
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                  <div className="text-slate-900">
                    ${category.total.toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                    >
                      <div className="flex-1">
                        <p className="text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-500">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-slate-700">${item.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Page>
  );
};
