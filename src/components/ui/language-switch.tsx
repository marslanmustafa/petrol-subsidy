"use client";

import React from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface LanguageSwitchProps {
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function LanguageSwitch({ className, size = "sm" }: LanguageSwitchProps) {
  const { setLanguage, isUrdu } = useLanguage();

  return (
    <div
      dir="ltr"
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/90 dark:bg-card/70 backdrop-blur-md shadow-xs select-none flex-row",
        className
      )}
      role="region"
      aria-label="Language Selector"
    >
      <Globe className="w-3.5 h-3.5 text-muted-foreground shrink-0" />

      {/* English Label */}
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={cn(
          "text-xs font-black tracking-wide transition-colors cursor-pointer shrink-0 leading-none",
          !isUrdu
            ? "text-primary drop-shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>

      {/* Shadcn Switch */}
      <div className="shrink-0 flex items-center">
        <Switch
          size={size === "sm" ? "sm" : "default"}
          checked={isUrdu}
          onCheckedChange={(checked) => setLanguage(checked ? "ur" : "en")}
          aria-label="Toggle language between English and Urdu"
        />
      </div>

      {/* Urdu Label */}
      <button
        type="button"
        onClick={() => setLanguage("ur")}
        className={cn(
          "text-[15px] font-urdu font-black tracking-normal transition-colors cursor-pointer shrink-0 leading-none pb-0.5",
          isUrdu
            ? "text-primary drop-shadow-xs"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        اردو
      </button>
    </div>
  );
}
