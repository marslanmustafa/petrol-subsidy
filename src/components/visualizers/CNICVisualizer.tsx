"use client";

import React from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { ShieldCheck, User, Fingerprint } from "lucide-react";

export function CNICVisualizer({ className = "" }: { className?: string }) {
  const { isUrdu } = useLanguage();

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-600" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {isUrdu ? "قومی شناختی کارڈ (NADRA Smart CNIC)" : "NADRA Smart CNIC Sample"}
          </h4>
        </div>
        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300 rounded-full">
          {isUrdu ? "فرضی نمونہ" : "Sample Diagram"}
        </span>
      </div>

      {/* Fictional Smart Card Graphic */}
      <div className="relative rounded-2xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 p-4 sm:p-5 text-white shadow-md overflow-hidden border border-emerald-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-emerald-300 font-semibold">
              ISLAMIC REPUBLIC OF PAKISTAN
            </div>
            <div className="text-[10px] font-bold text-emerald-100">
              {isUrdu ? "نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی" : "National Database & Registration Authority"}
            </div>
          </div>
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
            <Fingerprint className="w-3.5 h-3.5 text-emerald-300" />
          </div>
        </div>

        {/* Card Body */}
        <div className="flex gap-4 items-center my-2">
          <div className="w-12 h-14 bg-emerald-950/80 rounded-lg border border-emerald-500/30 flex items-center justify-center text-emerald-300">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-[10px] text-emerald-300/80 uppercase">Name: MUHAMMAD ALI</div>
            <div className="text-[10px] text-emerald-300/80 uppercase">Father Name: AHMAD HASSAN</div>
            
            {/* Highlighted 13 Digit CNIC Number */}
            <div className="mt-1.5 p-1.5 bg-amber-400/20 border-2 border-amber-400 rounded-lg inline-block shadow-sm">
              <div className="text-[9px] text-amber-300 font-bold uppercase">
                Identity Number (13 Digits)
              </div>
              <div className="font-mono text-sm sm:text-base font-black text-amber-300 tracking-wider">
                35201-1234567-1
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-[9px] text-emerald-300/70 pt-2 border-t border-emerald-800/60 mt-2">
          <span>Date of Birth: 01.01.1990</span>
          <span>Expiry Date: Lifetime / 2030</span>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block"></span>
        {isUrdu
          ? "اپنے کارڈ کے سامنے پر درج 13 ہندسوں کا شناختی کارڈ نمبر بغیر ڈیش کے استعمال کریں۔"
          : "Use the 13-digit identity number printed on the front of your CNIC."}
      </p>
    </div>
  );
}
