import type { ComponentProps } from "react";

type ExternalLinkProps = ComponentProps<"a">;

export const ExternalLink = ({
  href,
  children,
  className,
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
