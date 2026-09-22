"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { SCHEME_CONFIG, constructSmsBody, getSmsUri } from "@/lib/scheme/config";
import { VehicleCardVisualizer } from "../visualizers/VehicleCardVisualizer";
import { Dialog, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  Shield,
  CreditCard,
  Calendar as CalendarIcon,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  Lock,
  HelpCircle,
  Info,
  Save,
  Trash2,
} from "lucide-react";

const STORAGE_KEY = "petrol_relief_draft_v2";

export function RegistrationWizard() {
  const { t, isUrdu } = useLanguage();

  // 100% Client-Side State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [cnic, setCnic] = useState<string>("");
  const [vehicleNo, setVehicleNo] = useState<string>("");
  const [regDate, setRegDate] = useState<string>(""); // YYYY-MM-DD
  const [province, setProvince] = useState<string>(SCHEME_CONFIG.provinces[0].code);

  // UI state
  const [showMaskedCnic, setShowMaskedCnic] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hasOpenedMessages, setHasOpenedMessages] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Restore draft from localStorage on initial mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.cnic) setCnic(parsed.cnic);
          if (parsed.vehicleNo) setVehicleNo(parsed.vehicleNo);
          if (parsed.regDate) setRegDate(parsed.regDate);
          if (parsed.province) setProvince(parsed.province);
          if (parsed.currentStep && parsed.currentStep >= 1 && parsed.currentStep <= 5) {
            setCurrentStep(parsed.currentStep);
          }
        }
      }
    } catch (e) {
      // ignore storage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist draft to localStorage on changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      if (typeof window !== "undefined") {
        const draft = {
          cnic,
          vehicleNo,
          regDate,
          province,
          currentStep,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [cnic, vehicleNo, regDate, province, currentStep, isHydrated]);

  // Auto-format only digits with dashes (XXXXX-XXXXXXX-X)
  const handleCnicChange = (raw: string) => {
    setErrorMsg("");
    const digits = raw.replace(/\D/g, "").slice(0, 13);
    if (digits.length === 0) {
      setCnic("");
      return;
    }
    if (digits.length <= 5) {
      setCnic(digits);
      return;
    }
    if (digits.length <= 12) {
      setCnic(`${digits.slice(0, 5)}-${digits.slice(5)}`);
      return;
    }
    setCnic(`${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`);
  };

  const getCleanCnic = () => cnic.replace(/\D/g, "");

  // Convert YYYY-MM-DD to DD-MM-YYYY for display
  const getFormattedDisplayDate = () => {
    if (!regDate) return "";
    const parts = regDate.split("-");
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}-${month}-${year}`;
    }
    return regDate;
  };

  // Convert YYYY-MM-DD to DDMMYYYY for official SMS
  const getSmsDateDDMMYYYY = () => {
    if (!regDate) return "";
    const parts = regDate.split("-");
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}${month}${year}`;
    }
    return regDate.replace(/\D/g, "");
  };

  const handleCopy = (text: string, identifier: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(identifier);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  // Step Validation & Progression
  const validateAndNext = () => {
    setErrorMsg("");

    if (currentStep === 1) {
      const clean = getCleanCnic();
      if (clean.length !== 13) {
        setErrorMsg(
          isUrdu
            ? `شناختی کارڈ کے پورے 13 ہندسے درج کریں۔ (ابھی تک ${clean.length} درج ہوئے ہیں)`
            : `Please enter all 13 digits of your CNIC (currently ${clean.length} of 13).`
        );
        return;
      }
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      const cleanVeh = vehicleNo.trim();
      if (cleanVeh.length < 3) {
        setErrorMsg(
          isUrdu
            ? "براہ کرم گاڑی یا موٹر سائیکل کا درست رجسٹریشن نمبر درج کریں۔"
            : "Please enter a valid vehicle registration number."
        );
        return;
      }
      setCurrentStep(3);
      return;
    }

    if (currentStep === 3) {
      if (!regDate) {
        setErrorMsg(
          isUrdu
            ? "براہ کرم کیلنڈر سے گاڑی کی رجسٹریشن کی تاریخ منتخب کریں۔"
            : "Please select the vehicle registration date from the calendar."
        );
        return;
      }
      const parts = regDate.split("-");
      const year = parseInt(parts[0], 10);
      const currentYear = new Date().getFullYear();

      if (isNaN(year) || year < 1990 || year > currentYear) {
        setErrorMsg(
          isUrdu
            ? `براہ کرم سمارٹ کارڈ کے اوپر بائیں جانب سے درست تاریخ منتخب کریں (1990 تا ${currentYear})۔`
            : `Please select a valid registration date (1990 to ${currentYear}).`
        );
        return;
      }
      setCurrentStep(4);
      return;
    }

    if (currentStep === 4) {
      setCurrentStep(5);
      return;
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const formattedDisplayDate = getFormattedDisplayDate();
  const smsDate = getSmsDateDDMMYYYY();
  const generatedMessage = constructSmsBody(
    getCleanCnic(),
    vehicleNo,
    province,
    smsDate
  );
  const smsUri = getSmsUri(generatedMessage);

  const handleOpenMessages = () => {
    setHasOpenedMessages(true);
    window.location.href = smsUri;
  };

  const resetWizard = () => {
    setCnic("");
    setVehicleNo("");
    setRegDate("");
    setProvince(SCHEME_CONFIG.provinces[0].code);
    setCurrentStep(1);
    setHasOpenedMessages(false);
    setErrorMsg("");
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      // ignore
    }
  };

  const cleanCnicDigits = getCleanCnic();
  const currentYear = new Date().getFullYear();
  const hasSavedDraft = Boolean(cnic || vehicleNo || regDate);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Privacy & Auto-Save Header Badges */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 px-4 py-3 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <Badge variant="success" className="gap-1.5 py-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
            <span>{t.zeroStorageBadge}</span>
          </Badge>
          {hasSavedDraft && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
              <Save className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isUrdu ? "ڈرافٹ محفوظ ہے" : "Draft saved locally"}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Official SMS: <strong className="font-mono text-emerald-700 dark:text-emerald-400 font-black text-sm sm:text-base">9771</strong>
          </span>
          {hasSavedDraft && (
            <button
              type="button"
              onClick={resetWizard}
              className="text-[11px] text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1 cursor-pointer transition-colors"
              title="Clear Saved Draft"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{isUrdu ? "صاف کریں" : "Clear"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Wizard Card with Shadcn UI */}
      <Card className="overflow-hidden border-2">
        <CardHeader className="p-5 sm:p-7 pb-4">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {t.wizardStepOf.replace("{step}", currentStep.toString())}
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`h-2.5 rounded-full transition-all ${
                    step === currentStep
                      ? "bg-brand-600 w-8"
                      : step < currentStep
                      ? "bg-emerald-400 w-5"
                      : "bg-slate-200 dark:bg-slate-700 w-5"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-5 sm:p-7 pt-0 space-y-6">
          {/* Error Alert Box */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
              <span className="break-words">{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: CNIC Number */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span>{t.step1Title}</span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {t.step1Desc}
                </CardDescription>
              </div>

              <div className="space-y-3">
                {/* Header Label & Counter Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                    {t.cnicLabel}
                  </label>
                  <Badge
                    variant={cleanCnicDigits.length === 13 ? "success" : "warning"}
                    className="font-mono text-xs font-bold py-1 px-3"
                  >
                    {cleanCnicDigits.length === 13 && <CheckCircle2 className="w-3.5 h-3.5" />}
                    <span>
                      {cleanCnicDigits.length === 13
                        ? (isUrdu ? "13 / 13 مکمل ✓" : "13 / 13 Complete ✓")
                        : `${cleanCnicDigits.length} / 13 ${isUrdu ? "ہندسے" : "digits"}`}
                    </span>
                  </Badge>
                </div>

                {/* Formatted CNIC Input */}
                <div className="w-full">
                  <Input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    value={cnic}
                    onChange={(e) => handleCnicChange(e.target.value)}
                    onPaste={(e) => {
                      e.preventDefault();
                      const text = e.clipboardData.getData("text");
                      handleCnicChange(text);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        validateAndNext();
                        return;
                      }
                      const allowedKeys = [
                        "Backspace",
                        "Delete",
                        "Tab",
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                        "Home",
                        "End",
                      ];
                      if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
                        return;
                      }
                      if (!/^[0-9]$/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    placeholder="35201-1234567-1"
                    className={`text-xl sm:text-2xl font-mono tracking-widest text-center py-4 rounded-2xl ${
                      cleanCnicDigits.length === 13
                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                        : "border-slate-300 dark:border-slate-700 focus-visible:border-brand-600"
                    }`}
                    autoFocus
                  />
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-1">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {isUrdu
                      ? "📌 خودکار ڈیش (-) فارمیٹنگ"
                      : "📌 Automatic Dash (-) Placement"}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isUrdu
                      ? "صرف اپنے 13 ہندسے درج کریں۔ ڈیش خود بخود لگ جائیں گی۔ 13 ہندسے مکمل ہونے پر Continue کا بٹن دبائیں۔"
                      : "Type only digits (0-9). Hyphens are inserted automatically. Tap Continue as soon as 13 digits are ready."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Vehicle Registration Number */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span>{t.step2Title}</span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {t.step2Desc}
                </CardDescription>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {t.vehicleLabel}
                </label>
                <Input
                  type="text"
                  value={vehicleNo}
                  onChange={(e) => {
                    setErrorMsg("");
                    setVehicleNo(e.target.value.toUpperCase());
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      validateAndNext();
                    }
                  }}
                  placeholder={t.vehiclePlaceholder}
                  className="text-lg sm:text-xl font-mono font-bold uppercase py-4 rounded-2xl text-center sm:text-left"
                  autoFocus
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {t.vehicleHint}
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: Vehicle Registration Date (Calendar Only + Dialog Guide Button) */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span>{t.step3Title}</span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {t.step3Desc}
                </CardDescription>
              </div>

              <div className="space-y-4">
                {/* Clean Date Calendar Input */}
                <div className="p-4 sm:p-5 bg-emerald-50/80 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-emerald-600" />
                      <span>{isUrdu ? "رجسٹریشن کی تاریخ منتخب کریں:" : "Select Vehicle Registration Date:"}</span>
                    </label>
                    {regDate && (
                      <Badge variant="success" className="font-mono text-xs font-bold py-0.5 px-3">
                        {formattedDisplayDate}
                      </Badge>
                    )}
                  </div>

                  <input
                    type="date"
                    min="1990-01-01"
                    max={`${currentYear}-12-31`}
                    value={regDate}
                    onChange={(e) => {
                      setErrorMsg("");
                      setRegDate(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && regDate) {
                        e.preventDefault();
                        validateAndNext();
                      }
                    }}
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 border-emerald-400 dark:border-emerald-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-base sm:text-lg focus:outline-none focus:border-brand-600 cursor-pointer shadow-sm text-center"
                    autoFocus
                  />

                  <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
                    {isUrdu
                      ? "کیلنڈر پر کلک کر کے کارڈ کے اوپر بائیں جانب (Top-Left) درج رجسٹریشن کی تاریخ منتخب کریں۔"
                      : "Tap the calendar above to pick the initial Registration Date printed on your vehicle smart card."}
                  </p>
                </div>

                {/* Guide Trigger Button (Opens Dialog Modal) */}
                <div className="pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setGuideModalOpen(true)}
                    className="w-full py-4 rounded-2xl border-amber-300 dark:border-amber-700/70 bg-amber-50/80 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-950/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-bold gap-2"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>
                      {isUrdu
                        ? "🔍 دیکھیں: سمارٹ کارڈ پر تاریخ کہاں لکھی ہوتی ہے؟ (تصویری رہنما کھولیں)"
                        : "🔍 Where is 'Date of Reg.' on Smart Card? (Click to view sample)"}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Province / Registration Area */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span>{t.step4Title}</span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {t.step4Desc}
                </CardDescription>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {t.provinceLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SCHEME_CONFIG.provinces.map((prov) => (
                    <button
                      key={prov.code}
                      type="button"
                      onClick={() => {
                        setProvince(prov.code);
                      }}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                        province === prov.code
                          ? "border-brand-600 bg-brand-50/80 dark:bg-brand-950/40 text-brand-950 dark:text-brand-200 font-bold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm sm:text-base font-bold">
                          {isUrdu ? prov.nameUrdu : prov.name}
                        </span>
                        <Badge
                          variant={province === prov.code ? "success" : "secondary"}
                          className="font-mono text-xs font-black"
                        >
                          {prov.code}
                        </Badge>
                      </div>
                      <span className="text-xs text-slate-400 mt-1 font-mono break-all">
                        {prov.plateFormatHint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Review & Send SMS */}
          {currentStep === 5 && (
            <div className="space-y-5">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-brand-600 flex-shrink-0" />
                  <span>{t.step5Title}</span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {t.step5Desc}
                </CardDescription>
              </div>

              {/* Summary Review Card */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {isUrdu ? "شناختی کارڈ نمبر (CNIC):" : "Applicant CNIC:"}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {showMaskedCnic
                        ? `•••••-•••••••-${cleanCnicDigits.slice(12)}`
                        : cnic}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowMaskedCnic(!showMaskedCnic)}
                      className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                      title="Toggle Mask"
                    >
                      {showMaskedCnic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {isUrdu ? "وہیکل نمبر (Vehicle No):" : "Vehicle Plate:"}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {vehicleNo}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {isUrdu ? "رجسٹریشن تاریخ (Reg Date):" : "Registration Date:"}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {formattedDisplayDate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {isUrdu ? "صوبہ (Province):" : "Province:"}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {SCHEME_CONFIG.provinces.find((p) => p.code === province)?.name} ({province})
                  </span>
                </div>
              </div>

              {/* Generated Official SMS Box */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 text-white shadow-xl border border-emerald-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-emerald-300 font-bold uppercase tracking-wider">
                    {t.smsRecipientLabel}
                  </span>
                  <Badge variant="warning" className="font-mono font-black text-sm sm:text-base px-3 py-1">
                    {SCHEME_CONFIG.smsNumber}
                  </Badge>
                </div>

                <div>
                  <span className="text-xs sm:text-sm text-emerald-300/80 block mb-1 font-medium">
                    {t.generatedMessageLabel}
                  </span>
                  <div className="p-3.5 bg-black/50 rounded-2xl font-mono text-base sm:text-xl font-black tracking-wider text-emerald-300 border border-emerald-700/60 break-all select-all text-center">
                    {generatedMessage}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(generatedMessage, "sms")}
                    className="bg-white/15 hover:bg-white/25 text-white border-white/25 gap-2"
                  >
                    {copiedField === "sms" ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 font-bold">{t.copiedSuccess}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{t.copySmsBtn}</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* SIM Instruction Reminder */}
              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.dualSimWarning}</span>
              </div>

              {/* Primary Action Button: Send Now */}
              <div className="pt-2 space-y-3">
                <Button
                  type="button"
                  variant="brand"
                  size="xl"
                  onClick={handleOpenMessages}
                  className="w-full text-base sm:text-xl shadow-xl shadow-brand-600/30 gap-2"
                >
                  <span>{t.openMessagesBtn}</span>
                </Button>

                {/* Post-Trigger Feedback Card */}
                {hasOpenedMessages && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-brand-500/40 space-y-3 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {t.messagesOpenedNotice}
                    </p>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-bold text-slate-900 dark:text-white block mb-2">
                        {t.postSendCheckTitle}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="success" className="py-1 px-3 text-xs font-bold gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{t.postSendCheckOptionYes}</span>
                        </Badge>
                        <Button
                          type="button"
                          variant="secondary"
                          size="sm"
                          onClick={handleOpenMessages}
                          className="gap-1.5"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>{t.postSendCheckOptionRetry}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>

        {/* FULL-WIDTH WIZARD NAVIGATION BUTTONS */}
        <CardFooter className="p-5 sm:p-7 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3 w-full">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleBack}
              className="w-full sm:w-auto gap-2 order-2 sm:order-1"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.btnBack}</span>
            </Button>
          )}

          {currentStep < 5 ? (
            <Button
              type="button"
              variant="brand"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                validateAndNext();
              }}
              className="w-full flex-1 gap-2 order-1 sm:order-2 text-base sm:text-lg"
            >
              <span>{t.btnContinue}</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          ) : (
            <button
              type="button"
              onClick={resetWizard}
              className="w-full py-4 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium underline cursor-pointer text-center"
            >
              {isUrdu ? "نئے سرے سے شروع کریں" : "Start New Registration"}
            </button>
          )}
        </CardFooter>
      </Card>

      {/* DIALOG MODAL: Vehicle Smart Card Visualizer */}
      <Dialog open={guideModalOpen} onOpenChange={setGuideModalOpen}>
        <DialogHeader
          title={isUrdu ? "وہیکل سمارٹ کارڈ کا تصویری رہنما" : "Vehicle Smart Card Inspection Guide"}
          description={
            isUrdu
              ? "سمارٹ کارڈ کے اوپر بائیں جانب (Top-Left) سرخ خانے میں 'Date of Reg.' کی اصل تاریخ دیکھیں۔"
              : "Locate the 'Date of Reg.' printed at the extreme Top-Left corner of your smart card."
          }
          onClose={() => setGuideModalOpen(false)}
        />
        <div className="space-y-4 pt-1">
          <VehicleCardVisualizer highlightField="regDate" />
          <div className="pt-2 flex justify-end">
            <Button
              type="button"
              variant="brand"
              onClick={() => setGuideModalOpen(false)}
            >
              {isUrdu ? "سمجھ آ گیا (بند کریں)" : "Got it (Close Guide)"}
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}



