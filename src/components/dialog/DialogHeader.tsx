import { XIcon } from "lucide-react";
import { useDialogContext } from "./hooks";

type DialogHeaderProps = React.ComponentProps<"div"> & {
  hideCloseIcon?: boolean;
};

export const DialogHeader = ({
  children,
  hideCloseIcon = false,
}: DialogHeaderProps) => {
  const { closeDialog } = useDialogContext();

  return (
    <div className="flex justify-between items-center p-6 border-b border-muted">
      {children}
      {!hideCloseIcon && (
        <button
          className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2"
          onClick={closeDialog}
        >
          <span className="sr-only">Close</span>
          <XIcon className="size-5 cursor-pointer" />
        </button>
      )}
    </div>
  );
};
