"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function CnicGuidePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "شناختی کارڈ رہنمائی" : "CNIC Format & Verification"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "پیٹرول ریلیف کے لیے شناختی کارڈ (CNIC) کی تفصیلات"
              : "Locating & Formatting Your CNIC for 9771"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "نادرا سمارٹ کارڈ سے 13 ہندسوں کا درست شناختی کارڈ نمبر تلاش کریں اور جانیں کہ سم رجسٹریشن کا کیا کردار ہے۔"
              : "Understand how your 13-digit Pakistani National Identity Card number is used for official 9771 database verification."}
          </p>
        </div>

        {/* Clean CNIC Formatting Guide Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-brand-600" />
            {isUrdu ? "شناختی کارڈ نمبر درج کرنے کا درست طریقہ" : "Correct CNIC Format Guidelines"}
          </h2>

          <div className="p-4 bg-slate-950 text-white rounded-2xl font-mono border border-slate-800 space-y-2">
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              {isUrdu ? "درست فارمیٹ (بغیر ڈیش کے پورے 13 ہندسے):" : "Official Format (13 Continuous Digits Without Dashes):"}
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-300 tracking-widest">
              3520112345671
            </div>
            <div className="text-xs text-rose-400 pt-1 border-t border-slate-800">
              {isUrdu
                ? "❌ 35201-1234567-1 (ڈیش کے ساتھ درج نہ کریں)"
                : "❌ 35201-1234567-1 (Do not include hyphens)"}
            </div>
          </div>
        </div>

        {/* Key Rules & Notes */}
        <div className="bg-slate-100 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "شناختی کارڈ سے متعلق اہم نکات" : "Key Rules Regarding CNIC"}
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "شناختی کارڈ نمبر 13 ہندسوں پر مشتمل ہوتا ہے۔ ایس ایم ایس میں بغیر ڈیش کے لکھا جاتا ہے۔" : "A standard Pakistani CNIC consists of 13 numeric digits (e.g. 3520112345671)."}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "اگر آپ کا شناختی کارڈ ایکسپائر بھی ہو چکا ہو، تب بھی نادرا کا بنیادی ریکارڈ 9771 پورٹل پر موجود رہتا ہے۔" : "Even if your physical card is close to expiry, NADRA family record verification remains accessible."}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "اسی سم سے میسج بھیجیں جو اسی شناختی کارڈ پر جاری شدہ ہو۔ اگر دوسری سم سے بھیجا جائے تو تصدیق میں تاخیر ہو سکتی ہے۔" : "Always transmit the SMS from a cellular SIM card registered under the same CNIC."}</span>
            </li>
          </ul>

          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>{isUrdu ? "رجسٹریشن اسسٹنٹ کھولیں" : "Open Registration Assistant"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
