"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
import { Calendar, CreditCard, BookOpen, AlertTriangle, CheckCircle, Info, Sparkles } from "lucide-react";

interface VehicleCardVisualizerProps {
  highlightField?: "regDate" | "vehicleNo" | "both" | "none";
  className?: string;
}

export function VehicleCardVisualizer({
  highlightField = "regDate",
  className = ""
}: VehicleCardVisualizerProps) {
  const { isUrdu } = useLanguage();
  const [docType, setDocType] = useState<"smartCard" | "regBook">("smartCard");
  const [activeHighlight, setActiveHighlight] = useState<"regDate" | "vehicleNo" | "issueDate">(
    highlightField === "vehicleNo" ? "vehicleNo" : "regDate"
  );

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm ${className}`}>
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-brand-600" />
            {isUrdu ? "وہیکل رجسٹریشن کارڈ کی نمائش" : "Vehicle Document Visual Guide"}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isUrdu
              ? "دیکھیں کہ رجسٹریشن کی تاریخ اور وہیکل نمبر کہاں درج ہوتا ہے"
              : "Locate your official Registration Date and Vehicle Number"}
          </p>
        </div>

        {/* 
        Note: Tab for Old Registration Book commented out as requested.
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto">
          ...
        </div>
        */}
      </div>

      {/* Field Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 my-4">
        <span className="text-xs text-slate-500 font-medium">
          {isUrdu ? "فیلڈ کی پوزیشن دیکھیں:" : "Highlight Position:"}
        </span>
        <button
          type="button"
          onClick={() => setActiveHighlight("regDate")}
          className={`px-3 py-1.5 text-xs rounded-full border transition-all flex items-center gap-1.5 ${
            activeHighlight === "regDate"
              ? "bg-amber-100 border-amber-500 text-amber-950 font-bold shadow-sm ring-2 ring-amber-400/40"
              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-amber-600" />
          {isUrdu ? "1. رجسٹریشن کی تاریخ (اوپر بائیں جانب - Top Left)" : "1. Registration Date (Top-Left Box)"}
        </button>
      </div>

      {/* Visualizer Display Area (Smart Card Only) */}
      <div className="space-y-4">
        {/* Real Card Visualizer Container */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-950 shadow-inner">
          {/* Base Image of the Pakistani Smart Card with exact 1844x1158 aspect ratio */}
          <div className="relative w-full aspect-[1844/1158]">
            <Image
              src="/images/veh_card.png"
              alt="Government of Pakistan Vehicle Registration Smart Card Sample"
              width={1844}
              height={1158}
              className="w-full h-full object-cover select-none"
              priority
            />

            {/* Dynamic Interactive Focus Overlay: Top-Left Registration Date matching exact red box */}
            {activeHighlight === "regDate" && (
              <div className="absolute top-[4.1%] left-[2.6%] w-[20.2%] h-[14.5%] border-2 sm:border-3 border-amber-500 bg-amber-400/35 rounded-md animate-pulse flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.9)]">
                <span className="bg-amber-600 text-white text-[9px] sm:text-xs font-black px-2 py-0.5 rounded shadow absolute -bottom-5 sm:-bottom-6 left-0 whitespace-nowrap flex items-center gap-1 z-20">
                  <Calendar className="w-3 h-3" />
                  {isUrdu ? "اوپر بائیں: Date of Reg." : "TOP LEFT: Date of Reg."}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Descriptive Breakdown */}
        <div className="p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-700 transition-all">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500 text-white rounded-xl mt-0.5 flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950 dark:text-amber-100">
                {isUrdu
                  ? "سمارٹ کارڈ کے اوپر بائیں جانب (Top-Left) دیکھیں"
                  : "Located at the Top-Left of your Smart Card ('Date of Reg.')"}
              </h4>
              <p className="text-xs text-amber-900 dark:text-amber-200 mt-1 leading-relaxed">
                {isUrdu
                  ? "کارڈ کے بالکل اوپر بائیں کونے میں 'Date of Reg.' کے نیچے تاریخ لکھی ہوتی ہے (جیسے نمونے میں 18-OCT-19 دکھائی گئی ہے جسے 18-10-2019 درج کیا جائے گا)۔ کارڈ کے درمیان میں ماڈل سال (Year of Mfg. 2019) یا دائیں جانب ٹوکن ٹیکس کی تاریخ درج نہ کریں۔"
                  : "Look directly at the upper top-left corner of the card under 'Date of Reg.' (e.g. 18-OCT-19 formatted as 18-10-2019). Do NOT confuse this with the Manufacturing Year in the middle (Year of Mfg.) or Tax Paid period on the right."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
      {/* Note: Traditional Registration Book copy option commented out as per instructions.
      <div className="space-y-4">
        ... Old Registration Book copy code ...
      </div>
      */}

      {/* Critical Difference Callout */}
      <div className="mt-4 p-3.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-rose-900 dark:text-rose-200 space-y-1">
          <p className="font-bold">
            {isUrdu ? "⚠️ عام غلطیوں سے بچیں:" : "⚠️ Common Mistakes to Avoid:"}
          </p>
          <p>
            {isUrdu
              ? "کبھی بھی گاڑی کا ماڈل سال (Manufacturing Year)، ٹوکن ٹیکس ایکسپائری یا کارڈ بننے کی تاریخ درج نہ کریں۔ صرف وہی تاریخ درج کریں جس دن گاڑی پہلی دفعہ رجسٹرڈ ہوئی۔"
              : "Never enter the vehicle's manufacturing year, token tax renewal date, or smart card issuance date. Only enter the initial Registration Date."}
          </p>
        </div>
      </div>
    </div>
  );
}
