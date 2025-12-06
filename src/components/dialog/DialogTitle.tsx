type DialogTitleProps = React.ComponentProps<"h2">;

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return (
    <h2 className="text-xl font-bold">{children}</h2>
  );
};
