import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Page } from "@/components/page/Page";
import { PageHeadline } from "@/components/page/PageHeadline";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { ChecklistSection } from "./components/ChecklistSection";
import { ChecklistPdfButton } from "./components/ChecklistPdfButton";
import { checklist, type Category } from "./data/checklist";

export const PreparationChecklistPage = () => {
  const [savedList, setSavedList] = useState<Category[]>(checklist);

  const handleToggleItem = (categoryName: string, itemName: string) => {
    setSavedList((prev) =>
      prev.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.name === itemName
                  ? { ...item, isChecked: !item.isChecked }
                  : item
              ),
            }
          : cat
      )
    );
  };

  const handleAddItem = (categoryName: string, itemName: string) => {
    if (!itemName.trim()) return;

    setSavedList((prev) =>
      prev.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              items: [
                ...cat.items,
                {
                  name: itemName.trim(),
                  isChecked: false,
                },
              ],
            }
          : cat
      )
    );
  };

  const handleRemoveItem = (categoryName: string, itemName: string) => {
    setSavedList((prev) =>
      prev.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              items: cat.items.filter((item) => item.name !== itemName),
            }
          : cat
      )
    );
  };

  const { totalItems, checkedItems, progress } = useMemo(() => {
    const total = savedList.reduce((acc, cat) => acc + cat.items.length, 0);
    const checked = savedList.reduce(
      (acc, cat) => acc + cat.items.filter((item) => item.isChecked).length,
      0
    );
    return {
      totalItems: total,
      checkedItems: checked,
      progress: total > 0 ? (checked / total) * 100 : 0,
    };
  }, [savedList]);

  return (
    <Page>
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PageHeadline>Pack Smart</PageHeadline>

          {/* Progress Bar */}
          <PageContainerItem className="max-w-md mx-auto mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">
                {checkedItems} of {totalItems} packed
              </span>
              <span className="text-sm">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-success"
                initial={{ width: 0 }}
                animate={{ width: `${progress.toString()}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            {progress === 100 && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-3"
              >
                ✨ All set! Have an amazing trip! ✨
              </motion.p>
            )}
          </PageContainerItem>
          <PageContainerItem className="flex justify-center items-center mt-6">
            <ChecklistPdfButton data={savedList}/>
          </PageContainerItem>
        </motion.div>
      </PageContainer>

      {/* Categories Grid */}
      <PageContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pl-3 md:pl-8">
          {savedList.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <ChecklistSection
                category={category}
                onToggleItem={handleToggleItem}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
              />
            </motion.div>
          ))}
        </div>
      </PageContainer>

      {/* Footer */}
      <PageContainer className="text-center text-sm">
        <p>Download checklist</p>
      </PageContainer>
    </Page>
  );
};
