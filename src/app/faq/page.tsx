"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { AdBanner } from "@/components/ads/AdBanner";
import { HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  qEn: string;
  qUr: string;
  aEn: string;
  aUr: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    qEn: "What is the official SMS number for the Petrol Relief scheme?",
    qUr: "پیٹرول ریلیف حاصل کرنے کے لیے سرکاری ایس ایم ایس نمبر کیا ہے؟",
    aEn: "The official designated shortcode gateway is 9771. You send your registration string to 9771 from your mobile device.",
    aUr: "حکومت کی جانب سے مختص کردہ سرکاری ایس ایم ایس شارٹ کوڈ 9771 ہے۔ آپ اپنے موبائل سے رجسٹریشن میسج 9771 پر بھیجتے ہیں۔"
  },
  {
    id: "faq-2",
    qEn: "Where do I find my vehicle's registration date?",
    qUr: "مجھے گاڑی کی رجسٹریشن تاریخ سمارٹ کارڈ پر کہاں ملے گی؟",
    aEn: "On the front of your official Vehicle Smart Card, look for 'REG. DATE' or 'DATE OF REGISTRATION'. It represents when the vehicle was originally registered with Excise.",
    aUr: "اپنے وہیکل سمارٹ کارڈ کے سامنے کی طرف 'REG. DATE' یا 'DATE OF REGISTRATION' دیکھیں۔ یہ وہ تاریخ ہے جب گاڑی پہلی بار ایکسائز میں رجسٹرڈ ہوئی۔"
  },
  {
    id: "faq-3",
    qEn: "Can I enter the manufacturing year instead of the registration date?",
    qUr: "کیا میں رجسٹریشن تاریخ کی جگہ ماڈل سال (مینوفیکچرنگ ایئر) لکھ سکتا ہوں؟",
    aEn: "No. The system validates against the exact initial registration date. Using just the model year (e.g. 2018) will cause an error in automated verification.",
    aUr: "نہیں! نادرا اور ایکسائز کا خودکار نظام صرف رجسٹریشن کی مکمل تاریخ (دن-ماہ-سال) سے تصدیق کرتا ہے۔ صرف ماڈل سال لکھنے سے میسج مسترد ہو جائے گا۔"
  },
  {
    id: "faq-4",
    qEn: "Does this website store my CNIC or vehicle details?",
    qUr: "کیا یہ ویب سائٹ میرا شناختی کارڈ یا گاڑی کا ڈیٹا محفوظ کرتی ہے؟",
    aEn: "Absolutely NOT. All inputs and message generation occur 100% locally within your device's web browser. Nothing is sent to our servers or stored in any database.",
    aUr: "بالکل نہیں۔ یہ ٹول 100% کلائنٹ سائیڈ پر کام کرتا ہے۔ آپ کا شناختی کارڈ اور وہیکل ڈیٹا صرف آپ کے موبائل براؤزر میں رہتا ہے اور کسی سرور پر محفوظ نہیں ہوتا۔"
  },
  {
    id: "faq-5",
    qEn: "What should I do if I have a dual-SIM smartphone?",
    qUr: "اگر میرے پاس دو سموں والا موبائل ہو تو کیا کروں؟",
    aEn: "Ensure you select the SIM slot that is registered under your own CNIC when your Messages application opens.",
    aUr: "جب میسج ایپ کھلے تو وہ سم منتخب کریں جو آپ کے اپنے شناختی کارڈ پر رجسٹرڈ ہو اور جس میں مناسب بیلنس موجود ہو۔"
  },
  {
    id: "faq-6",
    qEn: "Is this website operated by the Government of Pakistan?",
    qUr: "کیا یہ ویب سائٹ حکومت پاکستان کی طرف سے چلائی جا رہی ہے؟",
    aEn: "No. This is an independent educational and public assistance tool created to help citizens format their SMS easily.",
    aUr: "نہیں، یہ ایک آزاد معلوماتی ٹول ہے جو شہریوں کو سرکاری فارمیٹ کے مطابق ایس ایم ایس تیار کرنے میں مدد دیتا ہے۔"
  }
];

export default function FaqPage() {
  const { isUrdu } = useLanguage();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <AdBanner placement="top" />

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="success" className="gap-1.5 py-1 px-3 text-xs">
            <HelpCircle className="w-4 h-4" />
            <span>{isUrdu ? "عام سوالات و جوابات" : "Frequently Asked Questions"}</span>
          </Badge>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {isUrdu
              ? "پیٹرول ریلیف سے متعلق اکثر پوچھے جانے والے سوالات"
              : "Frequently Asked Questions & Answers"}
          </h1>
        </div>

        {/* Shadcn FAQ Accordion */}
        <Accordion type="single" defaultValue="faq-1" className="space-y-3">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-border">
              <AccordionTrigger className="text-sm sm:text-base">
                <span>{isUrdu ? faq.qUr : faq.qEn}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">{isUrdu ? faq.aUr : faq.aEn}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center pt-4">
          <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-base font-bold shadow-md">
            <Link href="/register" className="inline-flex items-center gap-2">
              <span>{isUrdu ? "رجسٹریشن شروع کریں" : "Start Registration Now"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <AdBanner placement="bottom" />
    </div>
  );
}

