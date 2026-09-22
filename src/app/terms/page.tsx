"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import { FileText, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "استعمال کی شرائط" : "Terms of Service"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "شرائط و ضوابط" : "Terms & Conditions"}
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Petrol Relief SMS Assistant, you agree to comply with and be bound by the following terms and conditions of use.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Educational & Informational Purpose Only</h2>
            <p>
              This utility is provided free of charge for informational, formatting, and educational assistance. It helps citizens structure their official SMS messages in accordance with publicly available government directives.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">3. User Responsibility & Verification</h2>
            <p>
              Users are solely responsible for verifying the accuracy of the data entered into the wizard before submitting an SMS to 9771. The final act of sending the SMS is initiated and confirmed manually by the user within their device&rsquo;s messaging app.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">4. No Government Affiliation</h2>
            <p>
              We explicitly declare that this web tool is NOT owned, operated, or endorsed by the Government of Pakistan, NADRA, or any provincial Excise department.
            </p>
          </section>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
