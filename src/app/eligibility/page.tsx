"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  CheckCircle2,
  XCircle,
  Bike,
  Car,
  AlertTriangle,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function EligibilityPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "اہلیت کا باضابطہ معیار" : "Official Eligibility Standards"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu
              ? "پیٹرول ریلیف سکیم: کون اہل ہے اور کون نہیں؟"
              : "Petrol Subsidy Scheme: Who is Eligible?"}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isUrdu
              ? "حکومت کی جانب سے موٹر سائیکل سواروں، رکشہ ڈرائیورز اور کم آمدنی والے طبقے کے لیے ریلیف کے قوانین جانیں۔"
              : "Detailed breakdown of monthly income thresholds, engine capacity rules, and vehicle category criteria."}
          </p>
        </div>

        {/* Vehicle Category Eligibility Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {isUrdu ? "گاڑیوں کے لحاظ سے اہلیت کی فہرست" : "Vehicle Category Eligibility"}
          </h2>

          <div className="space-y-3">
            {SCHEME_CONFIG.vehicleTypes.map((v) => (
              <div
                key={v.id}
                className={`p-4 rounded-2xl border flex items-start justify-between gap-4 ${
                  v.eligible
                    ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60"
                    : "bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl mt-0.5 ${
                    v.eligible ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                  }`}>
                    {v.id === "motorcycle" ? <Bike className="w-5 h-5" /> : <Car className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isUrdu ? v.nameUrdu : v.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {isUrdu ? v.descriptionUrdu : v.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {v.eligible ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isUrdu ? "اہل" : "Eligible"}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900 px-2.5 py-1 rounded-full">
                      <XCircle className="w-3.5 h-3.5" />
                      {isUrdu ? "نا اہل" : "Not Eligible"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Eligibility Checklist */}
        <div className="bg-slate-100 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {isUrdu ? "بنیادی شرائط اور قواعد" : "Core Eligibility Conditions"}
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "درخواست گزار کے پاس کارآمد قومی شناختی کارڈ (CNIC) ہونا ضروری ہے۔" : "Applicant must possess a valid Computerized National Identity Card (CNIC)."}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "گاڑی یا موٹر سائیکل درخواست گزار کے نام پر یا اس کے قریبی فیملی ریکارڈ کے ساتھ منسلک ہونی چاہیے۔" : "The vehicle/motorcycle should ideally be registered in the applicant's name or verified family lineage."}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "ماہانہ گھریلو آمدنی حکومت کی مقرر کردہ حد کے اندر ہونی چاہیے۔" : "Monthly household income should fall within verified low-to-middle income government thresholds."}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{isUrdu ? "جس موبائل نمبر سے ایس ایم ایس بھیجا جائے، وہ اسی شناختی کارڈ پر رجسٹرڈ ہونا چاہیے۔" : "The cellular SIM used for SMS should preferably be registered under the applicant's own CNIC."}</span>
            </li>
          </ul>

          <div className="pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>{isUrdu ? "اپنی اہلیت چیک کرنے کے لیے SMS بھیجیں" : "Check Eligibility via SMS"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
