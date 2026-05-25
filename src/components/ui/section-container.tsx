import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide" | "full";
  spacing?: "default" | "none" | "small" | "large";
}

export const SectionContainer = ({
  children,
  className,
  variant = "default",
  spacing = "default",
  ...props
}: SectionContainerProps) => {
  const variants = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[90rem]",
    full: "max-w-full px-0",
  };

  const spacings = {
    default: "py-24 md:py-32",
    none: "py-0",
    small: "py-12 md:py-16",
    large: "py-32 md:py-48",
  };

  return (
    <section
      className={cn(
        "container mx-auto px-6",
        variants[variant],
        spacings[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
