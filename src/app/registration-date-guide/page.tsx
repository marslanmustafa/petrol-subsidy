"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { VehicleCardVisualizer } from "@/components/visualizers/VehicleCardVisualizer";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Calendar,
  CreditCard,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Info,
  BookOpen,
} from "lucide-react";

export default function RegistrationDateGuidePage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>{isUrdu ? "وہیکل رجسٹریشن ڈیٹ کی مکمل گائیڈ" : "Vehicle Registration Date Guide"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "گاڑی کے کارڈ پر رجسٹریشن کی تاریخ کہاں درج ہوتی ہے؟"
              : "Where to Find Your Vehicle Registration Date"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "پیٹرول ریلیف ایس ایم ایس (9771) کے لیے رجسٹریشن کی درست تاریخ درکار ہوتی ہے۔ سمارٹ کارڈ کے اوپر بائیں جانب (Top-Left) پر سرخ باکس میں دی گئی تاریخ دیکھیں۔"
              : "Learn how to locate the exact Registration Date printed at the top-left corner of your official Pakistani Vehicle Smart Card ('Date of Reg.')."}
          </p>
        </div>

        {/* Interactive Visualizer Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-brand-600" />
            {isUrdu ? "وہیکل سمارٹ کارڈ کی تصویری رہنمائی" : "Vehicle Smart Card Inspection Guide"}
          </h2>
          <VehicleCardVisualizer highlightField="regDate" />
        </div>

        {/* Detailed Breakdown: 4 Critical Dates on Vehicle Documents */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-brand-600" />
            {isUrdu ? "گاڑی کے کارڈ پر موجود تاریخوں کا فرق سمجھیں" : "Understanding the Dates on Your Vehicle Smart Card"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Registration Date (Correct) */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-400 dark:border-emerald-600">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm mb-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>1. {isUrdu ? "رجسٹریشن کی تاریخ (اوپر بائیں جانب - درست انتخاب)" : "Date of Reg. (Top-Left Corner - Target)"}</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {isUrdu
                  ? "یہ تاریخ کارڈ کے بالکل اوپر بائیں جانب 'Date of Reg.' کے نیچے درج ہوتی ہے (مثلاً 18-OCT-19 جسے 18-10-2019 لکھا جائے گا)۔ یہی تاریخ 9771 ایس ایم ایس میں استعمال کرنی ہے۔"
                  : "Located at the extreme top-left corner of the card under 'Date of Reg.' (e.g. 18-OCT-19 or 18-10-2019). This is the initial date required by 9771."}
              </p>
            </div>

            {/* 2. Manufacturing Year (Wrong) */}
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm mb-1">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>2. {isUrdu ? "ماڈل سال / Year of Mfg. (غلط)" : "Year of Mfg. / Model Year (Incorrect)"}</span>
              </div>
              <p className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                {isUrdu
                  ? "یہ کارڈ کے درمیانی حصے میں درج ہوتا ہے (مثلاً Year of Mfg. 2019)۔ یہ مینوفیکچرنگ کا سال ہے، رجسٹریشن کی تاریخ نہیں ہے۔"
                  : "Printed in the middle section (e.g. 'Year of Mfg. 2019'). Do NOT submit this in place of the Registration Date."}
              </p>
            </div>

            {/* 3. Token Tax Expiry Date (Wrong) */}
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm mb-1">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>3. {isUrdu ? "ٹوکن ٹیکس / Tax Paid upto (غلط)" : "Tax Paid upto / Token (Incorrect)"}</span>
              </div>
              <p className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                {isUrdu
                  ? "یہ کارڈ کے دائیں جانب درج ہوتا ہے (مثلاً M/V Tax Paid upto LIFE TIME یا سالانہ تاریخ)۔ یہ روڈ ٹیکس کی مدت ہے، رجسٹریشن تاریخ نہیں ہے۔"
                  : "Printed on the right side indicating road tax validity (e.g. 'LIFE TIME' or annual date). This is NOT the registration date."}
              </p>
            </div>

            {/* 4. Card Issue / Transfer Date (Wrong) */}
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
              <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-sm mb-1">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>4. {isUrdu ? "کارڈ جاری ہونے کی تاریخ (غلط)" : "Card Issue Date (Incorrect)"}</span>
              </div>
              <p className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                {isUrdu
                  ? "اگر کارڈ دوبارہ بنوایا گیا ہو تو کارڈ پر ایشو تاریخ مختلف ہو سکتی ہے، لیکن اصل 'Date of Reg.' وہی رہے گی جو اوپر بائیں جانب درج ہے۔"
                  : "Even on re-issued or duplicate smart cards, the Excise gateway verifies against the original 'Date of Reg.' at the top-left."}
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="bg-slate-100 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "سمارٹ کارڈ سے رجسٹریشن تاریخ پڑھنے کا آسان طریقہ" : "How to Read Your Smart Card Step-by-Step"}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li>{isUrdu ? "اپنا اوریجنل وہیکل سمارٹ کارڈ سامنے رکھیں۔" : "Hold your official vehicle smart card in a well-lit area."}</li>
            <li>{isUrdu ? "کارڈ کے بالکل اوپر بائیں جانب (Top-Left) دیکھیں جہاں 'Date of Reg.' لکھا ہے۔" : "Look at the top-left corner of the card where 'Date of Reg.' is printed."}</li>
            <li>{isUrdu ? "تاریخ کے ہندسے نوٹ کریں (جیسے 18-OCT-19 کو 18 دن، 10 واں مہینہ، اور 2019 سال درج کریں)۔" : "Note the date (e.g., 18-OCT-19 translates to Day: 18, Month: 10, Year: 2019)."}</li>
            <li>{isUrdu ? "کارڈ کے درمیان میں درج ماڈل سال (Year of Mfg.) کو رجسٹریشن تاریخ کے طور پر درج نہ کریں۔" : "Do not enter the model year (Year of Mfg.) found in the middle of the card."}</li>
          </ol>

          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>{isUrdu ? "ابھی ایس ایم ایس تیار کریں" : "Prepare SMS Now"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
