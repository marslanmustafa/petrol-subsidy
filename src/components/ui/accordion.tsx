"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

export function Accordion({
  children,
  className,
  type = "single",
  defaultValue,
  ...props
}: AccordionProps) {
  const initialOpen = React.useMemo(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);

  const [openItems, setOpenItems] = React.useState<string[]>(initialOpen);

  const toggleItem = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        if (type === "single") {
          return prev.includes(id) ? [] : [id];
        } else {
          return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
        }
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <div
      data-state={value}
      className={cn("border border-border rounded-xl bg-card overflow-hidden shadow-sm transition-all", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value?: string }>, { value });
        }
        return child;
      })}
    </div>
  );
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

export function AccordionTrigger({
  value = "",
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.openItems.includes(value) ?? false;

  return (
    <button
      type="button"
      onClick={() => context?.toggleItem(value)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-foreground transition-all hover:bg-muted/50 cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180 text-primary"
        )}
      />
    </button>
  );
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

export function AccordionContent({
  value = "",
  className,
  children,
  ...props
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.openItems.includes(value) ?? false;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-sm sm:text-base text-muted-foreground border-t border-border/50 animate-fadeIn",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
