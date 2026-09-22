import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jameelNoori = localFont({
  src: "./fonts/JameelNooriNastaleeq-Regular.ttf",
  variable: "--font-urdu",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petrolrelief.pk"),
  title: {
    default: "Petrol Relief SMS Assistant — 9771 Registration Helper",
    template: "%s | Petrol Relief SMS Assistant"
  },
  description: "Free mobile utility for Pakistani citizens to format and launch official 9771 petrol subsidy registration SMS with vehicle registration date & CNIC guide. 100% private.",
  keywords: [
    "petrol subsidy Pakistan",
    "petrol relief SMS",
    "petrol subsidy SMS 9771",
    "how to register petrol subsidy",
    "petrol relief registration",
    "fuel subsidy Pakistan",
    "petrol relief scheme registration",
    "how to send SMS 9771",
    "vehicle registration date",
    "petrol subsidy CNIC",
    "پیٹرول ریلیف",
    "9771 ایس ایم ایس رجسٹریشن"
  ],
  authors: [{ name: "Independent Public Service Utility" }],
  creator: "Petrol Relief SMS Assistant",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/images/logo.png"],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Petrol Relief SMS Assistant — 9771 Pakistan",
    description: "Prepare and launch your 9771 petrol relief registration SMS quickly and securely. 100% client-side privacy.",
    url: "https://petrolrelief.pk",
    siteName: "Petrol Relief SMS Assistant",
    locale: "ur_PK",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "Petrol Relief SMS Assistant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petrol Relief SMS Assistant — 9771 Registration Helper",
    description: "Format and send your 9771 petrol relief SMS step-by-step with interactive vehicle card guides.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Petrol Relief SMS Assistant",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All (iOS, Android, Windows, macOS)",
    "description": "Mobile-first public utility for Pakistani citizens to generate official 9771 petrol subsidy SMS.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR"
    },
    "inLanguage": ["en", "ur"]
  };

  return (
    <html lang="ur" dir="rtl" className={`${inter.variable} ${jameelNoori.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8461505608863088"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <LanguageProvider>
          <DisclaimerBanner />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
