"use client";

import React from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { Info, Calendar, ShieldAlert } from "lucide-react";

export function DisclaimerBanner() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span className="font-medium text-[11px] sm:text-xs">
            {t.independentNotice}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Calendar className="w-3 h-3 text-brand-400" />
          <span>
            {t.lastVerifiedLabel}{" "}
            <strong className="text-slate-200">
              {isUrdu ? SCHEME_CONFIG.lastVerifiedUrdu : SCHEME_CONFIG.lastVerified}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
