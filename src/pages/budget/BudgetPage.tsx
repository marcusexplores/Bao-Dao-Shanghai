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
import { BudgetBreakdownDialog } from "./components/BudgetBreakdownDialog";
import { calculateItemTotal } from "./functions";
import { expenses } from "./data/expenses";

export const BudgetPage = () => {
  const categoryTotals: Record<string, number> = useMemo(() => {
    const totals: Record<string, number> = {};

    for (const category of expenses) {
      let categoryTotal = 0;
      for (const item of category.items) {
        categoryTotal += calculateItemTotal(item.breakdown ?? {});
      }
      totals[category.name] = categoryTotal;
    }

    return totals;
  }, []);

  const netAmountPerPerson = (Object.values(categoryTotals).reduce((sum, categoryTotal) => sum + categoryTotal, 0)/2).toFixed(2);

  const chartData = useMemo(() => {
    return expenses.map((category) => ({
      name: category.name,
      value: categoryTotals[category.name] / 2,
      fill: category.color,
    }));
  }, [categoryTotals]);

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
                  <div>${categoryTotals[category.name].toFixed(2)}</div>
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
                        <div className="flex items-center">
                          <p>{item.name}</p>
                          {item.breakdown && (
                            <BudgetBreakdownDialog
                              title={item.name}
                              breakdown={item.breakdown}
                            />
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-muted-foreground">
                        ${calculateItemTotal(item.breakdown ?? {}).toFixed(2)}
                      </div>
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
