import React from "react";
import type { Metadata } from "next";
import { RegistrationWizard } from "@/components/wizard/RegistrationWizard";
import { AdBanner } from "@/components/ads/AdBanner";

export const metadata: Metadata = {
  title: "SMS Registration Assistant — Format & Send to 9771",
  description: "Prepare and format your official 9771 petrol relief registration SMS step-by-step. 100% private and client-side.",
  alternates: {
    canonical: "/register",
  }
};

export default function RegisterPage() {
  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6">
      {/* Top Banner (Strictly separated from form controls) */}
      <AdBanner placement="top" className="mb-6" />

      {/* 5-Step Interactive Clean Wizard */}
      <RegistrationWizard />

      {/* Bottom Banner (Separated below form) */}
      <AdBanner placement="bottom" className="mt-8" />
    </div>
  );
}
