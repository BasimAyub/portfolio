import { type ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/utils";

type TextProps = ComponentPropsWithoutRef<"p"> & {
  tone?: "default" | "muted" | "accent";
};

export function Text({ className, tone = "default", ...props }: TextProps) {
  return <p className={cx("text", `text--${tone}`, className)} {...props} />;
}
