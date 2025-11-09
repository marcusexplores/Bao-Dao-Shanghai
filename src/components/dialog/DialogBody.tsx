type DialogBodyProps = React.ComponentProps<"div">;

export const DialogBody = ({ children }: DialogBodyProps) => {
  return <div className="p-6">{children}</div>;
};
