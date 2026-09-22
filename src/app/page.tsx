"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { AdBanner } from "@/components/ads/AdBanner";
import { VehicleCardVisualizer } from "@/components/visualizers/VehicleCardVisualizer";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle,
  Calendar,
  Lock,
  ChevronRight,
  Bike,
  Car,
  Fuel,
} from "lucide-react";

export default function HomePage() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Compliant Ad Banner Container */}
      <AdBanner placement="top" />

      {/* Hero Section */}
      <section className="py-8 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "حکومتی کوڈ 9771 کے لیے مفت اسسٹنٹ" : "Free Public Utility for 9771 SMS"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {t.siteName}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {isUrdu
              ? "مرحلہ وار اپنا سرکاری ایس ایم ایس تیار کریں، گاڑی کی رجسٹریشن تاریخ معلوم کریں اور ایک کلک سے میسج ایپ کھولیں۔"
              : "Prepare your official 9771 petrol relief registration SMS step-by-step with verified vehicle smart card guides."}
          </p>

          {/* Primary Action Button */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-bold text-base sm:text-lg shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              <span>{t.btnStartRegistration}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/registration-date-guide"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-brand-600" />
              <span>{isUrdu ? "رجسٹریشن تاریخ کہاں ہے؟" : "Find Registration Date"}</span>
            </Link>
          </div>

          {/* Privacy Micro-notice */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-2">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.privacyGuaranteeDesc}</span>
          </div>
        </div>
      </section>

      {/* How It Works Grid */}
      <section className="py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isUrdu ? "یہ ٹول کس طرح کام کرتا ہے؟" : "How It Works in 4 Simple Steps"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isUrdu
                ? "بغیر کسی اشتہار کی رکاوٹ کے چند سیکنڈز میں ایس ایم ایس تیار کریں"
                : "Complete your entire SMS preparation cleanly without interruptions"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 relative">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isUrdu ? "1. معلومات درج کریں" : "1. Enter Information"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isUrdu
                  ? "شناختی کارڈ نمبر، وہیکل نمبر اور کارڈ سے دیکھ کر رجسٹریشن کی تاریخ درج کریں۔"
                  : "Input your CNIC, vehicle number plate, and verified registration date."}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 relative">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isUrdu ? "2. معلومات چیک کریں" : "2. Check Details"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isUrdu
                  ? "تیار شدہ سرکاری ایس ایم ایس اور 9771 کوڈ کی تسلی سے تصدیق کریں۔"
                  : "Review the formatted REG message and verify all numbers before sending."}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 relative">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isUrdu ? "3. ابھی بھیجیں (Send Now)" : "3. Tap Send Now"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isUrdu
                  ? "'Send Now' بٹن پر کلک کرتے ہی فون کی SMS ایپ خودکار طور پر کھل جائے گی۔"
                  : "Tap 'Send Now' to immediately launch your phone's SMS app."}
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 relative">
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isUrdu ? "4. سینڈ (Send) کا بٹن دبائیں" : "4. Press Send"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isUrdu
                  ? "اپنے فون میں Send کا بٹن دبائیں۔ کچھ دیر میں تصدیقی جوابی ایس ایم ایس مل جائے گا۔"
                  : "Hit Send on your mobile device to submit directly to the 9771 gateway."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicle Card Visualizer Showcase */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400">
              {isUrdu ? "خصوصی تصویری گائیڈ" : "Visual Document Guide"}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {isUrdu
                ? "گاڑی کے کارڈ پر رجسٹریشن کی تاریخ کہاں ہوتی ہے؟"
                : "Where is the Registration Date on your Vehicle Card?"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl mx-auto">
              {isUrdu
                ? "اکثر لوگ ماڈل سال یا ٹوکن ٹیکس کی تاریخ درج کر دیتے ہیں جس سے رجسٹریشن مسترد ہو جاتی ہے۔ نیچے دیا گیا اصل کارڈ کا نقشہ دیکھیں۔"
                : "Avoid registration rejection by referencing the exact Registration Date from your official vehicle card."}
            </p>
          </div>

          <VehicleCardVisualizer highlightField="regDate" />
        </div>
      </section>

      {/* Quick Nav Guides Matrix */}
      <section className="py-10 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-5 text-center">
            {isUrdu ? "ضروری معلوماتی صفحات و رہنمائی" : "Essential Knowledge & Eligibility Guides"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/eligibility"
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-2 w-fit rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-600 mb-3 group-hover:scale-105 transition-transform">
                  <Bike className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {isUrdu ? "اہلیت کا معیار (Eligibility)" : "Eligibility Criteria"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isUrdu
                    ? "موٹر سائیکل، رکشہ، اور چھوٹی گاڑیوں کے لیے ماہانہ ریلیف کے قوانین۔"
                    : "Income limits, engine displacement criteria, and vehicle categories."}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand-600">
                <span>{isUrdu ? "تفصیل پڑھیں" : "Read More"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/registration-date-guide"
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-brand-300 dark:border-brand-700 hover:border-brand-500 shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-2 w-fit rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 mb-3 group-hover:scale-105 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {isUrdu ? "وہیکل رجسٹریشن ڈیٹ گائیڈ" : "Vehicle Reg Date Guide"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isUrdu
                    ? "سمارٹ کارڈ اور کاپی سے رجسٹریشن کی درست تاریخ نکالنے کا تصویری طریقہ۔"
                    : "Visual walkthrough to identify the exact registration date vs token tax."}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand-600">
                <span>{isUrdu ? "تفصیل پڑھیں" : "Read More"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/sms-guide"
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-500 shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="p-2 w-fit rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 mb-3 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {isUrdu ? "9771 ایس ایم ایس گائیڈ" : "SMS 9771 Guide"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isUrdu
                    ? "ایس ایم ایس بھیجنے کا فارمیٹ، نیٹ ورک چارجز اور سم سے متعلق ضروری ہدایات۔"
                    : "Official format rules, cellular charges, and dual SIM troubleshooting."}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-brand-600">
                <span>{isUrdu ? "تفصیل پڑھیں" : "Read More"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Compliant Ad Banner Container */}
      <AdBanner placement="bottom" />
    </div>
  );
}
