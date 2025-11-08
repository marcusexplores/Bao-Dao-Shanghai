import { useMemo } from "react";
import { Page } from "@/components/page/Page";
import { PageHeadline } from "@/components/page/PageHeadline";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { PageContainerItemTitle } from "@/components/page/PageContainerItemTitle";
import { DonutChart } from "@/components/chart-donut/DonutChart";
import { Card } from "@/components/card/Card";
import { CardHeader } from "@/components/card/CardHeader";
import { CardTitle } from "@/components/card/CardTitle";
import { CardContent } from "@/components/card/CardContent";
import { expenses } from "./data/data";

export const BudgetPage = () => {
  const netAmountPerPerson = useMemo(() => {
    const value = expenses.reduce((sum, category) => sum + category.total, 0) / 2;
    return value.toFixed(2).toLocaleString();
  }, []);

  const chartData = useMemo(() => {
    return expenses.map((category) => ({
      name: category.name,
      value: category.total / 2,
      fill: category.color,
    }));
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
            data={chartData}
            title={`SGD ${netAmountPerPerson}`}
            subtitle="per person"
          />
        </PageContainerItem>
      </PageContainer>
      <PageContainer>
        <PageContainerItemTitle>Detailed Breakdown</PageContainerItemTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {expenses.map((category) => (
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
                  <div>
                    ${category.total.toFixed(2).toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                    >
                      <div className="flex-1">
                        <p>{item.name}</p>
                        {item.description && (
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-muted-foreground">${item.amount.toFixed(2).toLocaleString()}</div>
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
