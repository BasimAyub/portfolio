import { type ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  tone?: "default" | "elevated" | "soft";
};

export function Card({ className, tone = "default", ...props }: CardProps) {
  return <article className={cx("card", `card--${tone}`, className)} {...props} />;
}
