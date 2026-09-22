"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import {
  Mail,
  MessageSquare,
  CheckCircle2,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const { isUrdu } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>{isUrdu ? "رابطہ کریں" : "Get In Touch"}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {isUrdu ? "فیڈ بیک یا تجاویز ارسال کریں" : "Contact & Feedback"}
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            {isUrdu
              ? "اگر آپ کو کسی معلومات کی درستگی یا تجاویز کے حوالے سے رابطہ کرنا ہے تو پیغام بھیجیں۔"
              : "For inquiries, feedback, or verified policy updates, please reach out via the form below."}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          {submitted ? (
            <div className="p-6 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {isUrdu ? "شکریہ! آپ کا پیغام موصول ہو گیا ہے۔" : "Thank you! Your feedback was received."}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {isUrdu ? "ہماری ٹیم جلد جائزہ لے گی۔" : "We appreciate your assistance in improving this public utility."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {isUrdu ? "آپ کا نام" : "Your Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isUrdu ? "مثلاً محمد علی" : "Your Name"}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {isUrdu ? "ای میل ایڈریس" : "Email Address"}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {isUrdu ? "پیغام یا تجویز" : "Message or Feedback"}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={isUrdu ? "اپنا پیغام یہاں لکھیں..." : "How can we improve this guide or assistant?"}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isUrdu ? "پیغام ارسال کریں" : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}
