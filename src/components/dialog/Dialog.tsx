import { useState } from "react";
import { DialogContext } from "./DialogContext";

interface DialogProps {
  children: React.ReactNode;
}

export const Dialog = ({ children }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const contextValue = { isOpen, openDialog, closeDialog };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};
