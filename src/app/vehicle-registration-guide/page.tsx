"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Car,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function VehicleRegistrationGuidePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <Car className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "وہیکل نمبر پلیٹ رہنمائی" : "Vehicle Plate Formats Guide"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "صوبہ وار گاڑیوں کے رجسٹریشن نمبر کے فارمیٹس"
              : "Provincial Vehicle Number Plate Formats in Pakistan"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "پنجاب، سندھ، خیبر پختونخوا، بلوچستان اور اسلام آباد کی نمبر پلیٹوں کے معیاری انداز اور درست اندراج کے اصول۔"
              : "Comprehensive reference of official vehicle registration formats across Punjab, Sindh, KPK, Balochistan, and Islamabad."}
          </p>
        </div>

        {/* Provincial Plate Reference Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "صوبائی نمبر پلیٹس اور مثالیں" : "Provincial Formats & Samples"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SCHEME_CONFIG.provinces.map((prov) => (
              <div
                key={prov.code}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {isUrdu ? prov.nameUrdu : prov.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold">
                    {prov.code}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {prov.plateFormatHint}
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs">
                  <span className="text-slate-400">{isUrdu ? "نمونہ پلیٹ:" : "Sample:"}</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {prov.samplePlate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "وہیکل نمبر درج کر کے SMS بنائیں" : "Format Vehicle SMS"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
