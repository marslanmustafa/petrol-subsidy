"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
  Clock,
  Send,
} from "lucide-react";

export default function HowItWorksPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "مکمل طریقہ کار" : "Complete Step-by-Step Process"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "پیٹرول ریلیف ایس ایم ایس رجسٹریشن کا طریقہ کار"
              : "How the Petrol Relief SMS Process Works"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "معلوم کریں کہ آپ کس طرح اپنے فون سے باآسانی سرکاری 9771 پورٹل پر رجسٹریشن بھیج سکتے ہیں۔"
              : "Understand each stage of the registration workflow from entering information to receiving confirmation."}
          </p>
        </div>

        {/* Steps Breakdown */}
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isUrdu ? "مرحلہ 1: ضروری معلومات اکٹھی کریں" : "Step 1: Gather Required Documents"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {isUrdu
                  ? "اپنا اصل قومی شناختی کارڈ (CNIC) اور گاڑی کا وہیکل سمارٹ کارڈ یا رجسٹریشن کاپی اپنے پاس رکھیں۔"
                  : "Keep your 13-digit CNIC card and your vehicle's registration card/book ready."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isUrdu ? "مرحلہ 2: اسسٹنٹ کے ذریعے SMS تیار کریں" : "Step 2: Prepare SMS with our Assistant"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {isUrdu
                  ? "ہمارے 5 مرحلہ وار اسسٹنٹ میں تفصیلات درج کریں۔ یہ ٹول خودکار طور پر سرکاری فارمیٹ (REG CNIC VEHICLE DATE) تیار کرے گا۔"
                  : "Use our interactive assistant to construct the accurate SMS syntax in compliance with government gateway requirements."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isUrdu ? "مرحلہ 3: ایک کلک سے 'Send Now' دبائیں" : "Step 3: One-Click 'Send Now' Launch"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {isUrdu
                  ? "'ابھی SMS بھیجیں (Send Now)' دبانے سے آپ کے فون کی میسج ایپلیکیشن وصول کنندہ کوڈ 9771 اور تیار شدہ پیغام کے ساتھ خود بخود کھل جائے گی۔"
                  : "Clicking 'Send Now' triggers your mobile device's default SMS client pre-populated with recipient shortcode 9771."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0">
              4
            </div>
            <div className="space-y-2 flex-1">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isUrdu ? "مرحلہ 4: خود Send دبائیں اور تصدیق کا انتظار کریں" : "Step 4: Press Send & Receive Verification"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {isUrdu
                  ? "میسج ایپ میں Send کا بٹن دبائیں۔ حکومتی نادرا و ایکسائز سسٹم آپ کے کوائف کی جانچ کے بعد جوابی ایس ایم ایس کے ذریعے اہلیت اور فیول ٹوکن کے بارے میں مطلع کرے گا۔"
                  : "Hit send manually in your SMS app. The central government verification system checks records with NADRA and Excise and sends a confirmation SMS."}
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "ابھی رجسٹریشن شروع کریں" : "Start Registration Now"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
