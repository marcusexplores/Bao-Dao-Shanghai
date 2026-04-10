import type { ComponentProps } from "react";
import { Dialog } from "@/components/dialog/Dialog";
import { DialogTrigger } from "@/components/dialog/DialogTrigger";
import { DialogContent } from "@/components/dialog/DialogContent";
import { DialogTitle } from "@/components/dialog/DialogTitle";
import { DialogHeader } from "@/components/dialog/DialogHeader";
import { DialogBody } from "@/components/dialog/DialogBody";
import { Address } from "./Address";
import type { Elaboration } from "../types";

type ElaborationModalProps = ComponentProps<typeof Dialog> & {
  data: Elaboration;
};

export const ElaborationModal = ({ data, children }: ElaborationModalProps) => {
  const { title, subtitle, addressEn, addressCn, mapEn, mapCn } = data;

  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer border-b border-dashed border-primary pb-px">
          {children}
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col">
              <span>{title}</span>
              {subtitle && (
                <span className="text-sm text-muted-foreground mt-2">
                  {subtitle}
                </span>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogBody className="space-y-3">
          {addressEn && <Address address={addressEn} map={mapEn} />}
          {addressCn && <Address address={addressCn} map={mapCn} />}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
