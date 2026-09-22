"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ur"); // Default to Urdu

  useEffect(() => {
    try {
      const saved = localStorage.getItem("app_lang") as Language;
      if (saved === "en" || saved === "ur") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "ur" ? "rtl" : "ltr";
        document.body.dir = saved === "ur" ? "rtl" : "ltr";
      }
    } catch (e) {
      // ignore storage exceptions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("app_lang", lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
        document.body.dir = lang === "ur" ? "rtl" : "ltr";
      }
    } catch (e) {
      // ignore storage exceptions
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        isUrdu: language === "ur",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
