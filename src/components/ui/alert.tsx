import * as React from "react";
import { cn } from "@/lib/utils";

const alertVariants = {
  default: "bg-background text-foreground border-border",
  destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10",
  success: "border-emerald-500/30 text-emerald-900 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 [&>svg]:text-emerald-600",
  warning: "border-amber-500/30 text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 [&>svg]:text-amber-600",
  info: "border-blue-500/30 text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 [&>svg]:text-blue-600",
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof alertVariants;
}

export function Alert({ className, variant = "default", ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-2xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        alertVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 className={cn("mb-1 font-bold leading-none tracking-tight text-sm sm:text-base", className)} {...props} />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn("text-xs sm:text-sm [&_p]:leading-relaxed", className)} {...props} />;
}
