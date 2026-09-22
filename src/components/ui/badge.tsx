import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "border-transparent bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 shadow-sm",
    secondary:
      "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
    destructive:
      "border-transparent bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200 border-rose-300",
    outline: "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-800",
    success:
      "border-emerald-300 bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
    warning:
      "border-amber-300 bg-amber-100 text-amber-950 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
