"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Info,
  ShieldCheck,
  Heart,
  ArrowRight,
  Flame,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <Info className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "ہمارے بارے میں" : "About Our Mission"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "عوامی خدمت اور شفاف معلوماتی پورٹل" : "Independent Public Service Initiative"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "ہمارا مقصد پاکستانی شہریوں کو بغیر کسی مشکل کے درست معلومات اور ایس ایم ایس فارمیٹنگ فراہم کرنا ہے۔"
              : "Empowering Pakistani citizens with clear guidance, privacy-safe tools, and step-by-step assistance for national utility workflows."}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "ہماری اقدار اور اصول" : "Our Core Principles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-emerald-100 dark:bg-emerald-950 text-brand-600">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">100% Privacy</h3>
              <p className="text-xs">
                {isUrdu ? "کوئی بھی ذاتی ڈیٹا ہمارے سرور پر نہیں آتا۔" : "Zero server collection. All inputs stay on your local device."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-emerald-100 dark:bg-emerald-950 text-brand-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Transparency</h3>
              <p className="text-xs">
                {isUrdu ? "مکمل غیر سرکاری اور شفاف معلومات۔" : "Independent utility with verified government source references."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="p-2 w-fit rounded-xl bg-emerald-100 dark:bg-emerald-950 text-brand-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Free Utility</h3>
              <p className="text-xs">
                {isUrdu ? "تمام پاکستانی شہریوں کے لیے ہمیشہ مفت۔" : "Freely accessible for all Pakistani citizens on all devices."}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-600/30 transition-all"
          >
            <span>{isUrdu ? "رجسٹریشن شروع کریں" : "Try Assistant"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
