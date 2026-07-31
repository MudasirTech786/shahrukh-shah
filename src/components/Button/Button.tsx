import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost";

interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-ink/20 px-8 py-3 text-[11px] font-normal uppercase tracking-[0.18em] text-ink transition-colors duration-[250ms] hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-[11px] font-normal uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-ink",
};

export function Button(props: ButtonProps) {
  const { children, className, variant = "ghost" } = props;
  const classes = cn("inline-flex items-center justify-center gap-2", variantClasses[variant], className);

  if (props.href !== undefined) {
    return props.external ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
