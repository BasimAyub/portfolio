import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function isLinkButton(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cx("button", `button--${variant}`, className);

  if (isLinkButton(props)) {
    const { href, children: ignoredChildren, variant: ignoredVariant, className: ignoredClassName, ...rest } = props;
    void ignoredChildren;
    void ignoredVariant;
    void ignoredClassName;

    if (href.startsWith("http") || rest.target === "_blank" || Boolean(rest.download)) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children: ignoredChildren, variant: ignoredVariant, className: ignoredClassName, ...rest } = props;
  void ignoredChildren;
  void ignoredVariant;
  void ignoredClassName;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
