type PageContainerItemProps = React.ComponentProps<"div">;

export const PageContainerItem = ({ children, className }: PageContainerItemProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}