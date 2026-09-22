"use client";

import React from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import { ShieldCheck, Lock, Cookie, Eye, ExternalLink } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "رازداری کی مکمل پالیسی" : "Privacy Policy & Data Protection"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "پرائیویسی پالیسی اور ڈیٹا کے تحفظ کی ضمانت" : "Privacy Policy"}
          </h1>

          <p className="text-xs text-slate-500">
            {isUrdu ? "آخری نظر ثانی: 22 ستمبر 2026" : "Last Updated: September 22, 2026"}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Section 1: Zero Server Storage */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-600" />
              1. 100% Client-Side Processing of Sensitive Identity Information
            </h2>
            <p>
              Your privacy is paramount. <strong>Petrol Relief SMS Assistant does NOT collect, store, or transmit your Computerized National Identity Card (CNIC) number, vehicle registration number, registration date, or generated SMS content to any server, database, or third-party service.</strong>
            </p>
            <p>
              All inputs in our Registration Wizard are processed exclusively inside your web browser’s local runtime memory. When you click &ldquo;Open Messages&rdquo;, the website creates a standard local SMS URI (<code>sms:9771?body=...</code>) and dispatches it directly to your device’s native SMS client.
            </p>
          </section>

          {/* Section 2: Advertising & Google AdSense */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cookie className="w-5 h-5 text-brand-600" />
              2. Google AdSense & Advertising Technologies
            </h2>
            <p>
              We use Google AdSense and third-party advertising vendors to display advertisements when you visit our website. These companies may use cookies and web beacons to serve ads based on prior visits to this website or other sites on the internet.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 dark:text-slate-400">
              <li>
                Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline font-semibold inline-flex items-center gap-1"
                >
                  Google Ads Settings <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
              <li>
                You may also opt out of a third-party vendor&rsquo;s use of cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline font-semibold inline-flex items-center gap-1"
                >
                  AboutAds.info <ExternalLink className="w-3 h-3" />
                </a>.
              </li>
            </ul>
          </section>

          {/* Section 3: Analytics */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-600" />
              3. Aggregated Usage Metrics & Anonymous Analytics
            </h2>
            <p>
              To maintain site performance, diagnose page loading times, and improve educational accessibility, we may log anonymous, aggregated interaction metrics (such as page views or total count of completed SMS generations). These logs never associate IP addresses with CNICs or vehicle registration plates.
            </p>
          </section>

          {/* Section 4: International Visitors & Consent */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              4. International Visitors (EEA, UK, Switzerland)
            </h2>
            <p>
              For visitors accessing from jurisdictions governed by the GDPR or UK GDPR, advertising frameworks adhere to standard Google-certified Consent Management Platform (CMP) requirements for personalized data processing.
            </p>
          </section>

          {/* Section 5: Contact */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              5. Contact Us Regarding Data Protection
            </h2>
            <p>
              If you have any questions or clarifications regarding our privacy architecture, please contact our team via our{" "}
              <a href="/contact" className="text-brand-600 underline font-semibold">
                Contact Page
              </a>.
            </p>
          </section>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
