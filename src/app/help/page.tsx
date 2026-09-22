"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  LifeBuoy,
  AlertTriangle,
  Phone,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function HelpPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <LifeBuoy className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "مسائل کا حل اور رہنمائی" : "Help & Troubleshooting"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "ایس ایم ایس نہ جانے یا جواب نہ ملنے کی صورت میں کیا کریں؟" : "Troubleshooting 9771 SMS Issues"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "اگر آپ کا میسج فیل ہو رہا ہے یا جوابی تصدیق موصول نہیں ہو رہی تو ان اقدامات پر عمل کریں۔"
              : "Step-by-step troubleshooting checklist if SMS fails to deliver or you do not receive a confirmation."}
          </p>
        </div>

        {/* Troubleshooting Checklist */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "عام مسائل اور ان کے آسان حل" : "Common Issues & Solutions"}
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                {isUrdu ? "1. میسج سینڈ نہیں ہو رہا (Message Failed to Send)" : "1. Message Fails to Send"}
              </h3>
              <p>
                {isUrdu
                  ? "چیک کریں کہ آپ کی سم میں کم از کم 2 روپے موبائل بیلنس موجود ہو۔ بہت سے پوسٹ پیڈ یا پری پیڈ پیکیجز میں شارٹ کوڈز شامل نہیں ہوتے۔"
                  : "Verify that you have at least Rs. 2.00 core balance. Shortcode SMS is often excluded from regular SMS bundle packages."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                {isUrdu ? "2. جوابی ایس ایم ایس تاخیر سے آنا" : "2. Delayed Reply from 9771"}
              </h3>
              <p>
                {isUrdu
                  ? "سرکاری سرورز پر زیادہ ٹریفک کے باعث جوابی میسج میں 15 سے 30 منٹ لگ سکتے ہیں۔ بار بار میسج بھیجنے سے گریز کریں۔"
                  : "Due to heavy server traffic on the national gateway, response times can vary between 5 to 30 minutes."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                {isUrdu ? "3. وہیکل ڈیٹا ناٹ فاؤنڈ (Record Mismatch)" : "3. Vehicle Record Not Found"}
              </h3>
              <p>
                {isUrdu
                  ? "یقینی بنائیں کہ آپ نے رجسٹریشن کی تاریخ (DD-MM-YYYY) لکھی ہے نہ کہ ماڈل کا سال یا ٹوکن ٹیکس کی تاریخ۔"
                  : "Double-check your registration date against your vehicle card. Do not submit the vehicle's manufacturing year."}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "دوبارہ کوشش کریں" : "Try Assistant Again"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
