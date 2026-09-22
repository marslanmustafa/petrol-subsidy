"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG } from "@/lib/scheme/config";
import { Flame, Shield, ExternalLink, Heart, AlertTriangle } from "lucide-react";

export function Footer() {
  const { t, isUrdu } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Flame className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-bold text-base text-white">
                {isUrdu ? "پیٹرول ریلیف ایس ایم ایس اسسٹنٹ" : "Petrol Relief SMS Assistant"}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {isUrdu
                ? "پاکستانی شہریوں کے لیے ایک آزاد اور مفت معلوماتی ٹول جو حکومت کے 9771 پیٹرول ریلیف کوڈ پر ایس ایم ایس بھیجنے کا درست فارمیٹ تیار کرنے میں مدد فراہم کرتا ہے۔"
                : "A free, independent public-service utility designed to assist Pakistani citizens in formatting and launching the official 9771 petrol relief registration SMS."}
            </p>

            {/* Independent Disclaimer Callout */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                {isUrdu
                  ? "اہم دستبرداری: یہ پورٹل حکومت پاکستان، نادرا یا کسی سرکاری ادارے سے الحاق شدہ نہیں ہے۔ تمام ذاتی ڈیٹا صرف آپ کے فون براؤزر میں رہتا ہے۔"
                  : "Disclaimer: This tool is not affiliated with or operated by the Government of Pakistan or NADRA. All applicant information is processed client-side."}
              </span>
            </div>
          </div>

          {/* Useful Guides */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {isUrdu ? "رہنما گائیڈز" : "Helpful Guides"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/registration-guide" className="hover:text-white transition-colors">
                  {isUrdu ? "مرحلہ وار رجسٹریشن" : "Registration Guide"}
                </Link>
              </li>
              <li>
                <Link href="/registration-date-guide" className="hover:text-emerald-400 font-semibold text-emerald-400 transition-colors">
                  {isUrdu ? "گاڑی کی رجسٹریشن تاریخ" : "Vehicle Reg. Date Guide"}
                </Link>
              </li>
              <li>
                <Link href="/cnic-guide" className="hover:text-white transition-colors">
                  {isUrdu ? "شناختی کارڈ رہنما" : "CNIC Guide"}
                </Link>
              </li>
              <li>
                <Link href="/vehicle-registration-guide" className="hover:text-white transition-colors">
                  {isUrdu ? "وہیکل نمبر پلیٹ گائیڈ" : "Vehicle Plate Guide"}
                </Link>
              </li>
              <li>
                <Link href="/sms-guide" className="hover:text-white transition-colors">
                  {isUrdu ? "9771 ایس ایم ایس گائیڈ" : "SMS 9771 Instructions"}
                </Link>
              </li>
              <li>
                <Link href="/eligibility" className="hover:text-white transition-colors">
                  {isUrdu ? "اہلیت کا معیار" : "Eligibility Criteria"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {isUrdu ? "قانونی و رازداری" : "Legal & Privacy"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {isUrdu ? "پرائیویسی پالیسی" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {isUrdu ? "شرائط و ضوابط" : "Terms of Use"}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  {isUrdu ? "دستبرداری (Disclaimer)" : "Full Disclaimer"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {isUrdu ? "ہمارے بارے میں" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {isUrdu ? "رابطہ کریں" : "Contact"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  {isUrdu ? "عام سوالات (FAQ)" : "FAQ"}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  {isUrdu ? "ہیلپ اور ہیلپ لائنز" : "Help & Support"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Reference Links */}
        <div className="py-6 border-b border-slate-800/80">
          <span className="text-[11px] font-bold text-slate-300 block mb-2">
            {t.officialSourcesTitle}
          </span>
          <div className="flex flex-wrap gap-4 text-[11px]">
            {SCHEME_CONFIG.officialSources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors inline-flex items-center gap-1 underline underline-offset-2"
              >
                <span>{isUrdu ? source.titleUrdu : source.title}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Petrol Relief SMS Assistant. Independent Educational Utility.
          </div>
          <div className="flex items-center gap-2">
            <span>Information Last Verified: {SCHEME_CONFIG.lastVerified}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
