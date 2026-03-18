import { forwardRef, type ReactNode } from "react";

import { cx } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section({ id, className, children }, ref) {
  return (
    <section id={id} ref={ref} className={cx("section", className)}>
      <div className="shell">{children}</div>
    </section>
  );
});
