"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  DollarSign,
  Radio,
} from "lucide-react";

export default function SmsGuidePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200 text-xs font-bold">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span>{isUrdu ? "ایس ایم ایس 9771 گائیڈ" : "SMS 9771 Protocol Guide"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "9771 پر ایس ایم ایس بھیجنے کا طریقہ اور چارجز"
              : "How the 9771 Shortcode SMS Gateway Operates"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "موبائل نیٹ ورک چارجز، سم بیلنس، ڈوئل سم فونز اور جوابی ایس ایم ایس کے اوقات سے متعلق تفصیلی رہنمائی۔"
              : "Network carrier charges, SIM balance requirements, and troubleshooting confirmation SMS."}
          </p>
        </div>

        {/* SMS Format Structure */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "ایس ایم ایس کا درست سرکاری فارمیٹ" : "Official SMS Syntax"}
          </h2>

          <div className="p-4 bg-slate-950 text-white rounded-2xl font-mono text-sm sm:text-base border border-slate-800 space-y-2">
            <div className="text-emerald-400 font-bold">TO: 9771</div>
            <div className="text-amber-300 font-black text-base sm:text-lg">
              REG 3520112345671 LEA204521 P 18102019
            </div>
            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex flex-wrap gap-3">
              <span>[کی ورڈ: REG]</span>
              <span>[شناختی کارڈ: 13 ہندسے]</span>
              <span>[وہیکل نمبر: LEA204521]</span>
              <span>[صوبہ کوڈ: P (پنجاب)]</span>
              <span>[تاریخ: 18102019]</span>
            </div>
          </div>
        </div>

        {/* Cellular Carrier Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-brand-600 font-bold text-sm">
              <Radio className="w-5 h-5" />
              <span>{isUrdu ? "تمام پاکستانی نیٹ ورکس کی سپورٹ" : "Supported Cellular Carriers"}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {isUrdu
                ? "یہ شارٹ کوڈ جاز (Jazz)، ٹیلی نار (Telenor)، زونگ (Zong)، یوفون (Ufone) اور ایس کام (SCOM) پر فعال ہے۔"
                : "The 9771 gateway is accessible via Jazz, Telenor, Zong, Ufone, and SCOM across Pakistan."}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <DollarSign className="w-5 h-5" />
              <span>{isUrdu ? "موبائل بیلنس کی ضرورت" : "Standard Network Charges"}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {isUrdu
                ? "ایس ایم ایس بھیجنے کے لیے آپ کی سم میں کم از کم 1 سے 2 روپے بیلنس ہونا ضروری ہے تاکہ میسج فیل نہ ہو۔"
                : "Ensure at least Rs. 1.00 - 2.00 active mobile balance is available for standard shortcode transmission."}
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "ایس ایم ایس تیار کریں" : "Prepare SMS with Assistant"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
