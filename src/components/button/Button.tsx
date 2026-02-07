import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/functions/classname";
import { ButtonVariant, ButtonSize } from "./constants";

const variants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        [ButtonVariant.Default]: "bg-primary text-primary-foreground hover:bg-primary/90",
        [ButtonVariant.Secondary]: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        [ButtonVariant.Outline]: "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        [ButtonVariant.Destructive]: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        [ButtonVariant.Ghost]: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        [ButtonVariant.Link]: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        [ButtonSize.Default]: "h-9 px-4 py-2 has-[>svg]:px-3",
        [ButtonSize.Small]: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        [ButtonSize.Large]: "h-10 rounded-md px-6 has-[>svg]:px-4",
        [ButtonSize.Icon]: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: ButtonVariant.Default,
      size: ButtonSize.Default,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof variants> & {
    asChild?: boolean
  };

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(variants({ variant, size, className }))}
      {...props}
    />
  );
};
