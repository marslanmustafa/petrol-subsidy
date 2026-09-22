"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: "sm" | "default" | "lg";
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, disabled, onClick, size = "default", ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onCheckedChange?.(!checked);
      onClick?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onCheckedChange?.(!checked);
      }
    };

    const sizeClasses = {
      sm: {
        root: "h-5 w-9",
        thumb: "h-4 w-4",
        translate: "translate-x-4",
      },
      default: {
        root: "h-6 w-11",
        thumb: "h-5 w-5",
        translate: "translate-x-5",
      },
      lg: {
        root: "h-7 w-14",
        thumb: "h-6 w-6",
        translate: "translate-x-7",
      },
    };

    const currentSize = sizeClasses[size] || sizeClasses.default;

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          currentSize.root,
          checked ? "bg-primary" : "bg-muted-foreground/30 dark:bg-muted-foreground/40",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-md ring-0 transition-transform duration-200 ease-in-out",
            currentSize.thumb,
            checked ? currentSize.translate : "translate-x-0"
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
