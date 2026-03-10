import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-sm border border-foreground/10",
  secondary:
    "bg-background text-foreground hover:bg-foreground/[.04] border border-foreground/15",
  ghost: "text-foreground hover:bg-foreground/[.04]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

