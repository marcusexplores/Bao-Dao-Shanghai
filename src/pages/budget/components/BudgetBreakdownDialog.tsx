import { InfoIcon } from "lucide-react";
import { Dialog } from "@/components/dialog/Dialog";
import { DialogTrigger } from "@/components/dialog/DialogTrigger";
import { DialogContent } from "@/components/dialog/DialogContent";
import { DialogTitle } from "@/components/dialog/DialogTitle";
import { DialogHeader } from "@/components/dialog/DialogHeader";
import { DialogBody } from "@/components/dialog/DialogBody";
import { calculateItemTotal } from "../functions";

interface BudgetBreakdownDialogProps {
  title: string;
  breakdown: Record<string, number>;
}

export const BudgetBreakdownDialog = ({
  title,
  breakdown,
}: BudgetBreakdownDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <InfoIcon className="size-4 ml-1 text-muted-foreground cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-3">
            {Object.entries(breakdown).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center border-b border-dashed border-muted pb-1 last:border-b-0"
              >
                <span className="flex-shrink-0 w-50 md:w-65">{key.trim()}</span>
                <span className="font-semibold text-right">
                  {value < 0
                    ? `- $${Math.abs(value).toFixed(2)}`
                    : `$${value.toFixed(2)}`}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-muted flex justify-between items-center font-bold text-lg">
            <span>TOTAL</span>
            <span>${calculateItemTotal(breakdown).toFixed(2)}</span>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
