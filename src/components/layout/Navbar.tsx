"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export function Navbar() {
  const { t, isUrdu } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-900 dark:to-slate-950 border border-border p-1.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-all flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Petrol Relief SMS Assistant Logo"
              width={36}
              height={36}
              className="object-contain w-auto h-auto drop-shadow-xs"
              priority
            />
          </div>
          <div>
            <span className={`text-foreground leading-tight block ${
              isUrdu
                ? "text-lg sm:text-xl font-urdu font-black"
                : "text-sm sm:text-[15px] font-extrabold tracking-tight"
            }`}>
              {isUrdu ? "پیٹرول ریلیف SMS" : "Petrol Relief SMS"}
            </span>
            <span className={`text-primary font-bold uppercase block ${
              isUrdu ? "text-xs font-urdu" : "text-[10px] sm:text-[11px] tracking-wider"
            }`}>
              {isUrdu ? "سرکاری گیٹ وے: 9771" : "Official Gateway: 9771"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Conditional Font Sizing */}
        <nav className={`hidden lg:flex items-center text-muted-foreground ${
          isUrdu
            ? "gap-5 xl:gap-6 font-urdu text-[15px] font-semibold"
            : "gap-4 xl:gap-5.5 text-xs xl:text-[13px] font-medium tracking-normal"
        }`}>
          <Link href="/" className="hover:text-foreground transition-colors">
            {t.navHome}
          </Link>
          <Link
            href="/register"
            className="hover:text-foreground transition-colors font-bold text-primary"
          >
            {t.navRegister}
          </Link>
          <Link href="/how-it-works" className="hover:text-foreground transition-colors">
            {t.navHowItWorks}
          </Link>
          <Link href="/eligibility" className="hover:text-foreground transition-colors">
            {t.navEligibility}
          </Link>

          {/* Guides Dropdown */}
          <div className="relative">
            <button
              onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
              onBlur={() => setTimeout(() => setGuidesDropdownOpen(false), 200)}
              className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>{t.navGuides}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {guidesDropdownOpen && (
              <div className="absolute top-full mt-2 w-72 bg-popover text-popover-foreground rounded-2xl shadow-elevated border border-border py-2 z-50 animate-fadeIn">
                <Link
                  href="/registration-guide"
                  className={`block px-4 py-2 hover:bg-muted text-foreground ${
                    isUrdu ? "text-sm font-urdu font-semibold" : "text-xs font-medium"
                  }`}
                >
                  {isUrdu ? "مرحلہ وار رجسٹریشن گائیڈ" : "Step-by-Step Registration Guide"}
                </Link>
                <Link
                  href="/registration-date-guide"
                  className={`block px-4 py-2 hover:bg-muted font-bold text-primary ${
                    isUrdu ? "text-sm font-urdu" : "text-xs"
                  }`}
                >
                  {isUrdu ? "گاڑی کی رجسٹریشن تاریخ کہاں سے دیکھیں؟" : "Vehicle Reg. Date Guide (Smart Card)"}
                </Link>
                <Link
                  href="/cnic-guide"
                  className={`block px-4 py-2 hover:bg-muted text-foreground ${
                    isUrdu ? "text-sm font-urdu font-semibold" : "text-xs font-medium"
                  }`}
                >
                  {isUrdu ? "شناختی کارڈ (CNIC) رہنما" : "CNIC Guide"}
                </Link>
                <Link
                  href="/vehicle-registration-guide"
                  className={`block px-4 py-2 hover:bg-muted text-foreground ${
                    isUrdu ? "text-sm font-urdu font-semibold" : "text-xs font-medium"
                  }`}
                >
                  {isUrdu ? "وہیکل نمبر پلیٹ رہنما" : "Vehicle Number Plate Guide"}
                </Link>
                <Link
                  href="/sms-guide"
                  className={`block px-4 py-2 hover:bg-muted text-foreground ${
                    isUrdu ? "text-sm font-urdu font-semibold" : "text-xs font-medium"
                  }`}
                >
                  {isUrdu ? "9771 ایس ایم ایس گائیڈ" : "9771 SMS Guide"}
                </Link>
              </div>
            )}
          </div>

          <Link href="/faq" className="hover:text-foreground transition-colors">
            {t.navFaq}
          </Link>
          <Link href="/help" className="hover:text-foreground transition-colors">
            {t.navHelp}
          </Link>
        </nav>

        {/* Right Actions: Shadcn Language Switcher & Start Registration CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Shadcn Switch for Language */}
          <LanguageSwitch size="sm" />

          {/* Direct CTA */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-xl font-bold shadow-xs h-9 px-3.5"
          >
            <Link href="/register" className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              <span className={isUrdu ? "text-sm font-urdu font-bold leading-none" : "text-xs font-semibold"}>
                {isUrdu ? "ایس ایم ایس بنائیں" : "Start Registration"}
              </span>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-xl cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pt-3 pb-6 space-y-2.5">
          {/* Mobile Language Switcher with Shadcn Switch */}
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className={`text-muted-foreground font-bold ${
              isUrdu ? "text-sm font-urdu" : "text-xs"
            }`}>
              {isUrdu ? "زبان تبدیل کریں (Language):" : "Language / زبان:"}
            </span>
            <LanguageSwitch size="sm" />
          </div>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {t.navHome}
          </Link>
          <Link
            href="/register"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-primary font-bold border-b border-border/50 ${
              isUrdu ? "text-base font-urdu" : "text-xs sm:text-sm"
            }`}
          >
            {t.navRegister}
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {t.navHowItWorks}
          </Link>
          <Link
            href="/eligibility"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {t.navEligibility}
          </Link>
          <Link
            href="/registration-date-guide"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-primary font-bold border-b border-border/50 ${
              isUrdu ? "text-base font-urdu" : "text-xs sm:text-sm"
            }`}
          >
            {isUrdu ? "گاڑی کی رجسٹریشن تاریخ کہاں سے دیکھیں؟" : "Vehicle Reg. Date Guide"}
          </Link>
          <Link
            href="/registration-guide"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {isUrdu ? "رجسٹریشن گائیڈ" : "Registration Guide"}
          </Link>
          <Link
            href="/cnic-guide"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {isUrdu ? "شناختی کارڈ گائیڈ" : "CNIC Guide"}
          </Link>
          <Link
            href="/sms-guide"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {isUrdu ? "9771 ایس ایم ایس گائیڈ" : "9771 SMS Guide"}
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground border-b border-border/50 ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {t.navFaq}
          </Link>
          <Link
            href="/help"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 text-foreground ${
              isUrdu ? "text-base font-urdu font-semibold" : "text-xs sm:text-sm font-medium"
            }`}
          >
            {t.navHelp}
          </Link>
        </div>
      )}
    </header>
  );
}


