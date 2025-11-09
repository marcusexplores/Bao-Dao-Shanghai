import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PlusIcon, XIcon } from "lucide-react";
import { cn } from "@/functions/classname";
import type { Category } from "../data/checklist";

interface ChecklistSectionProps {
  category: Category;
  onToggleItem: (categoryId: string, itemId: string) => void;
  onAddItem: (categoryId: string, itemName: string) => void;
  onRemoveItem: (categoryId: string, itemId: string) => void;
}

export const ChecklistSection = ({
  category,
  onToggleItem,
  onAddItem,
  onRemoveItem,
}: ChecklistSectionProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const { checkedCount, totalCount, progress } = useMemo(() => {
    const checked = category.items.filter((item) => item.isChecked).length;
    const total = category.items.length;
    return {
      checkedCount: checked,
      totalCount: total,
      progress: total > 0 ? (checked / total) * 100 : 0,
    };
  }, [category.items]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      onAddItem(category.name, newItemName);
      setNewItemName("");
      setIsAdding(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsAdding(false);
      setNewItemName("");
    }
  };

  return (
    <div className="relative">
      {/* Category Header */}
      <div className="mb-6 relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-5xl">{category.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl mb-1">{category.name}</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsAdding(!isAdding);
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center"
              >
                <PlusIcon className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">
                {checkedCount}/{totalCount}
              </div>
              <div className="flex-1 h-1 rounded-full max-w-[100px] overflow-hidden bg-muted">
                <motion.div
                  className="h-full rounded-full bg-success"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.toString()}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Item Form */}
      <AnimatePresence>
        {isAdding && (
          <motion.form
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            onSubmit={handleAddSubmit}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 pl-10">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => {
                  setNewItemName(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Add new item..."
                autoFocus
                className="flex-1 border border-foreground rounded-full px-4 py-2 placeholder:text-muted-foreground "
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full"
              >
                Add
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsAdding(false);
                  setNewItemName("");
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <XIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Items List */}
      <div className="space-y-3 relative">
        {category.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative group/item"
            onMouseEnter={() => {
              setHoveredItemId(item.name);
            }}
            onMouseLeave={() => {
              setHoveredItemId(null);
            }}
          >
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => {
                  onToggleItem(category.name, item.name);
                }}
                className="flex items-center gap-4 flex-1 text-left py-2"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Custom Checkbox */}
                <motion.div
                  className={cn(
                    "relative flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center",
                    item.isChecked
                      ? "bg-success border-success"
                      : "border-foreground"
                  )}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.isChecked && (
                    <motion.svg
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--success-foreground)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  )}
                </motion.div>

                {/* Item Text */}
                <span
                  className={cn(
                    "transition-all duration-300",
                    item.isChecked ? "text-muted-foreground line-through" : ""
                  )}
                >
                  {item.name}
                </span>
              </motion.button>

              {/* Delete Button */}
              <AnimatePresence>
                {hoveredItemId === item.name && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => {
                      onRemoveItem(category.name, item.name);
                    }}
                    className="w-7 h-7 rounded-full flex items-center justify-center group hover:bg-destructive transition-colors flex-shrink-0 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-destructive-foreground" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
