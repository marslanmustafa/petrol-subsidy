"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { AdBanner } from "@/components/ads/AdBanner";
import { AlertTriangle, ExternalLink, ShieldAlert } from "lucide-react";

export default function DisclaimerPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>{isUrdu ? "قانونی دستبرداری" : "Independent Disclaimer"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "غیر سرکاری اور آزاد معلوماتی ٹول کی دستبرداری" : "Independent Entity Disclaimer"}
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-200 font-medium">
            <strong>CRITICAL STATEMENT:</strong> This website (Petrol Relief SMS Assistant) is an independent informational utility and is <strong>NOT</strong> affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with the Government of Pakistan, NADRA, the Ministry of Energy, or any provincial Excise & Taxation department.
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Information Accuracy & Scheme Changes</h2>
            <p>
              Government rules, SMS shortcodes, and subsidy eligibility criteria may change at any time without prior notice. While we strive to keep information accurate and verified (last verified: {SCHEME_CONFIG.lastVerified}), we make no representations or warranties of any kind regarding completeness or real-time government database synchronization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Official Government Portals</h2>
            <p>
              For definitive official announcements, policy circulars, and dispute resolution, please consult the official portals:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              {SCHEME_CONFIG.officialSources.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 font-semibold underline inline-flex items-center gap-1"
                  >
                    {s.title} ({s.organization}) <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
