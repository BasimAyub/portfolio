import { type ReactNode } from "react";

import { cx } from "@/lib/utils";

type StackProps = {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

export function Stack({ children, gap = "md", className }: StackProps) {
  return <div className={cx("stack", `stack--${gap}`, className)}>{children}</div>;
}
