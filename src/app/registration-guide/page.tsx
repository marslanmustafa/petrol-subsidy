"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Smartphone,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export default function RegistrationGuidePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "مکمل رہنمائی" : "Step-by-Step Registration Manual"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "پیٹرول ریلیف 9771 کے لیے مکمل رجسٹریشن گائیڈ"
              : "Comprehensive 9771 Registration Guide"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "تفصیلی گائیڈ جو آپ کو سکھاتی ہے کہ بغیر غلطی کے شناختی کارڈ اور گاڑی کی معلومات کیسے جمع کرائیں۔"
              : "Detailed walk-through covering each field, syntax requirements, and error prevention."}
          </p>
        </div>

        {/* Breakdown by sections */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center text-xs font-bold">1</span>
              {isUrdu ? "قومی شناختی کارڈ (CNIC) کی تفصیلات" : "1. National Identity Card (CNIC)"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {isUrdu
                ? "شناختی کارڈ کے 13 ہندسے بغیر کسی ڈیش (-) یا سپیس کے لکھے جاتے ہیں۔ مثلاً اگر آپ کا شناختی کارڈ 35201-1234567-1 ہے تو اسے 3520112345671 لکھا جائے گا۔"
                : "The 13 digits of your CNIC should be entered cleanly without hyphens or spaces (e.g. 3520112345671)."}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              {isUrdu ? "وہیکل رجسٹریشن نمبر (نمبر پلیٹ)" : "2. Vehicle Registration Number (Plate)"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {isUrdu
                ? "گاڑی کی پلیٹ پر موجود انگریزی حروف اور ہندسے بالکل اسی طرح لکھیں جیسے سمارٹ کارڈ پر درج ہیں۔ مثلاً LEA-20-4521 یا KBL-1234۔"
                : "Enter the complete registration number plate format as shown on your excise card, including district prefix, year series, and numbers."}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center text-xs font-bold">3</span>
              {isUrdu ? "رجسٹریشن کی اصل تاریخ" : "3. Original Registration Date"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {isUrdu
                ? "سب سے اہم مرحلہ تاریخ کا انتخاب ہے۔ کارڈ پر 'Date of Registration' دیکھ کر دن-ماہ-سال (مثلاً 15-03-2020) کے مطابق درج کریں۔ مزید رہنمائی کے لیے ہمارا رجسٹریشن ڈیٹ گائیڈ دیکھیں۔"
                : "Verify the initial Registration Date (DD-MM-YYYY) from your smart card rather than the token tax validity date."}
            </p>
            <div className="pt-2">
              <Link
                href="/registration-date-guide"
                className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
              >
                <span>{isUrdu ? "وہیکل رجسٹریشن ڈیٹ کا تصویری نقشہ دیکھیں" : "View Visual Vehicle Card Breakdown"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "اسسٹنٹ کے ذریعے رجسٹریشن شروع کریں" : "Open Registration Assistant"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
