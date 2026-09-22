export type Language = "en" | "ur";

export interface Translations {
  siteName: string;
  siteTagline: string;
  independentNotice: string;
  lastVerifiedLabel: string;
  navHome: string;
  navRegister: string;
  navHowItWorks: string;
  navEligibility: string;
  navGuides: string;
  navFaq: string;
  navHelp: string;
  navAbout: string;
  navContact: string;

  // Wizard Steps
  wizardStepOf: string;
  step1Title: string;
  step1Desc: string;
  cnicLabel: string;
  cnicPlaceholder: string;
  cnicHint: string;
  cnicValidation: string;
  
  step2Title: string;
  step2Desc: string;
  vehicleLabel: string;
  vehiclePlaceholder: string;
  vehicleHint: string;
  vehicleValidation: string;

  step3Title: string;
  step3Desc: string;
  regDateLabel: string;
  regDatePlaceholder: string;
  regDateHint: string;
  regDateWarning: string;
  regDateValidation: string;

  step4Title: string;
  step4Desc: string;
  provinceLabel: string;
  provinceSelectHint: string;

  step5Title: string;
  step5Desc: string;
  smsRecipientLabel: string;
  generatedMessageLabel: string;
  dualSimWarning: string;
  openMessagesBtn: string;
  copySmsBtn: string;
  copiedSuccess: string;
  messagesOpenedNotice: string;
  postSendCheckTitle: string;
  postSendCheckOptionYes: string;
  postSendCheckOptionRetry: string;
  
  btnContinue: string;
  btnBack: string;
  btnStartRegistration: string;
  btnCopy: string;

  // Document visualizer helpers
  whereToFindTitle: string;
  smartCardTab: string;
  regBookTab: string;
  highlightRegDate: string;
  highlightVehicleNo: string;
  highlightCnic: string;
  noteDontConfuseDate: string;

  // Privacy & Trust
  privacyGuaranteeTitle: string;
  privacyGuaranteeDesc: string;
  zeroStorageBadge: string;
  officialSourcesTitle: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    siteName: "Petrol Relief SMS Assistant",
    siteTagline: "Prepare and launch your official 9771 petrol relief registration SMS quickly and securely.",
    independentNotice: "Independent Informational Utility — Not affiliated with or operated by the Government of Pakistan.",
    lastVerifiedLabel: "Information Last Verified:",
    navHome: "Home",
    navRegister: "Register",
    navHowItWorks: "How It Works",
    navEligibility: "Eligibility",
    navGuides: "Guides",
    navFaq: "FAQ",
    navHelp: "Help",
    navAbout: "About",
    navContact: "Contact",

    wizardStepOf: "Step {step} of 5",
    step1Title: "CNIC Number",
    step1Desc: "Enter your 13-digit Computerized National Identity Card (CNIC) number without dashes.",
    cnicLabel: "Applicant CNIC Number",
    cnicPlaceholder: "35201-1234567-1",
    cnicHint: "Must be 13 digits. The SIM card you use to send SMS should preferably be registered against this CNIC.",
    cnicValidation: "Please enter a valid 13-digit Pakistani CNIC number.",

    step2Title: "Vehicle Registration Number",
    step2Desc: "Enter the official vehicle registration number (number plate) exactly as shown on your vehicle document.",
    vehicleLabel: "Vehicle Number Plate",
    vehiclePlaceholder: "e.g. LEA-20-4521 or KBL-1234",
    vehicleHint: "Include the series letters and numbers. Avoid spaces if possible.",
    vehicleValidation: "Please provide a valid vehicle registration number.",

    step3Title: "Registration Date",
    step3Desc: "Enter the original vehicle registration date as shown on your vehicle Smart Card or Registration Book.",
    regDateLabel: "Vehicle Registration Date",
    regDatePlaceholder: "DD-MM-YYYY",
    regDateHint: "Found under 'REG. DATE' on Smart Card front. Must not be manufacturing year.",
    regDateWarning: "⚠️ Important: Enter the registration date, not the vehicle model year.",
    regDateValidation: "Please provide a valid registration date.",

    step4Title: "Province of Registration",
    step4Desc: "Select the province or territory where the vehicle is officially registered.",
    provinceLabel: "Registration Province",
    provinceSelectHint: "Select your vehicle's registered province",

    step5Title: "Review & Send SMS",
    step5Desc: "Review your details and tap below to open your Messages app with the formatted SMS ready.",
    smsRecipientLabel: "Send SMS To (Short Code):",
    generatedMessageLabel: "Prepared SMS Body:",
    dualSimWarning: "📱 Dual SIM users: Ensure you send this SMS from the SIM registered on your CNIC.",
    openMessagesBtn: "🚀 Send Now",
    copySmsBtn: "📋 Copy Text Only",
    copiedSuccess: "✓ Copied to clipboard!",
    messagesOpenedNotice: "Your messaging application should open automatically. Tap 'Send' inside your app.",
    postSendCheckTitle: "Did you send the SMS?",
    postSendCheckOptionYes: "Yes, SMS sent successfully",
    postSendCheckOptionRetry: "No, let me try again",
    
    btnContinue: "Continue",
    btnBack: "Back",
    btnStartRegistration: "Start Registration",
    btnCopy: "Copy",

    // Document visualizer helpers
    whereToFindTitle: "Where to find this on your Smart Card?",
    smartCardTab: "Smart Card Front",
    regBookTab: "Registration Book",
    highlightRegDate: "Registration Date is printed here (DD-MM-YYYY)",
    highlightVehicleNo: "Vehicle Number is located at the top",
    highlightCnic: "Owner CNIC is located here",
    noteDontConfuseDate: "Do not use manufacturing date. Only use registration date.",

    // Privacy & Trust
    privacyGuaranteeTitle: "100% Client-Side Privacy Guarantee",
    privacyGuaranteeDesc: "Your CNIC, vehicle number, and registration date are processed entirely in your web browser. Nothing is saved to any server or database.",
    zeroStorageBadge: "Zero Server Storage • Private & Safe",
    officialSourcesTitle: "Official Government Sources & Verification"
  },
  ur: {
    siteName: "پیٹرول ریلیف ایس ایم ایس اسسٹنٹ",
    siteTagline: "حکومتی 9771 پیٹرول ریلیف رجسٹریشن کے لیے درکار ایس ایم ایس آسانی اور رازداری کے ساتھ تیار کریں۔",
    independentNotice: "غیر سرکاری و آزاد رہنمائی پورٹل — یہ ویب سائٹ حکومت پاکستان کی ملکیت نہیں ہے۔",
    lastVerifiedLabel: "معلومات کی آخری تصدیق:",
    navHome: "ہوم",
    navRegister: "ایس ایم ایس بنائیں",
    navHowItWorks: "طریقہ کار",
    navEligibility: "اہلیت کے اصول",
    navGuides: "رہنما گائیڈز",
    navFaq: "عام سوالات",
    navHelp: "رہنمائی",
    navAbout: "ہمارے بارے میں",
    navContact: "رابطہ",

    wizardStepOf: "مرحلہ {step} از 5",
    step1Title: "شناختی کارڈ نمبر (CNIC)",
    step1Desc: "اپنا 13 ہندسوں کا قومی شناختی کارڈ نمبر درج کریں۔",
    cnicLabel: "درخواست گزار کا شناختی کارڈ نمبر",
    cnicPlaceholder: "35201-1234567-1",
    cnicHint: "13 ہندسے بغیر ڈیش کے۔ بہتر ہے کہ ایس ایم ایس بھیجنے والی سم اسی شناختی کارڈ پر رجسٹرڈ ہو۔",
    cnicValidation: "براہ کرم درست 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔",

    step2Title: "گاڑی / موٹر سائیکل کا رجسٹریشن نمبر",
    step2Desc: "اپنی گاڑی یا موٹر سائیکل کا رجسٹریشن نمبر (نمبر پلیٹ) دستاویز کے مطابق درج کریں۔",
    vehicleLabel: "وہیکل رجسٹریشن نمبر (پلیٹ نمبر)",
    vehiclePlaceholder: "مثلاً LEA-20-4521 یا KBL-1234",
    vehicleHint: "حروف اور ہندسے صحیح درج کریں۔",
    vehicleValidation: "براہ کرم درست وہیکل رجسٹریشن نمبر درج کریں۔",

    step3Title: "گاڑی کی رجسٹریشن کی تاریخ",
    step3Desc: "وہیکل سمارٹ کارڈ کے بالکل اوپر بائیں جانب (Top-Left) درج 'Date of Reg.' کی اصل تاریخ درج کریں۔",
    regDateLabel: "رجسٹریشن کی تاریخ (دن-ماہ-سال)",
    regDatePlaceholder: "15-03-2020",
    regDateHint: "سمارٹ کارڈ کے اوپر بائیں کونے میں 'Date of Reg.' تلاش کریں۔",
    regDateWarning: "خبردار: کارڈ کے درمیان میں درج ماڈل سال (Year of Mfg.) یا دائیں جانب ٹوکن ٹیکس کی تاریخ درج نہ کریں۔",
    regDateValidation: "براہ کرم درست تاریخ (DD-MM-YYYY) درج کریں۔",

    step4Title: "صوبہ یا رجسٹریشن کا علاقہ",
    step4Desc: "وہ صوبہ منتخب کریں جہاں سے آپ کی گاڑی رجسٹرڈ ہے۔",
    provinceLabel: "رجسٹریشن اتھارٹی کا صوبہ",
    provinceSelectHint: "اپنا صوبہ / علاقہ منتخب کریں",

    step5Title: "معلومات چیک کریں اور SMS بھیجیں",
    step5Desc: "اپنی معلومات چیک کریں۔ اس کے بعد 'ابھی SMS بھیجیں (Send Now)' کا بٹن دبائیں تاکہ آپ کے فون کی میسج ایپ خودکار طور پر تیار شدہ میسج کے ساتھ کھل جائے۔",
    smsRecipientLabel: "ایس ایم ایس اس نمبر پر جائے گا:",
    generatedMessageLabel: "تیار شدہ سرکاری ایس ایم ایس:",
    dualSimWarning: "اہم ہدایت: تصدیق کریں کہ آپ کی سم میں کم از کم 1 سے 2 روپے بیلنس موجود ہے۔ اگر موبائل میں دو سمیں ہیں تو رجسٹرڈ سم سے میسج بھیجیں۔",
    openMessagesBtn: "🚀 ابھی SMS بھیجیں (Send Now)",
    copySmsBtn: "📋 میسج کاپی کریں (Copy SMS)",
    copiedSuccess: "✓ میسج کاپی ہو گیا!",
    messagesOpenedNotice: "میسج ایپ کھل چکی ہے۔ براہ کرم 9771 نمبر اور ٹیکسٹ چیک کریں اور اپنے فون میں Send کا بٹن خود دبائیں۔",
    postSendCheckTitle: "کیا آپ نے SMS بھیج دیا؟",
    postSendCheckOptionYes: "✓ جی ہاں، میں نے Send کر دیا ہے",
    postSendCheckOptionRetry: "↻ دوبارہ SMS بھیجیں (Send Now)",

    btnContinue: "آگے بڑھیں",
    btnBack: "پیچھے جائیں",
    btnStartRegistration: "رجسٹریشن ایس ایم ایس تیار کریں",
    btnCopy: "کاپی کریں",

    whereToFindTitle: "وہیکل سمارٹ کارڈ پر یہ معلومات کہاں ہیں؟",
    smartCardTab: "وہیکل سمارٹ کارڈ",
    regBookTab: "رجسٹریشن کارڈ",
    highlightRegDate: "رجسٹریشن کی تاریخ (اوپر بائیں جانب)",
    highlightVehicleNo: "وہیکل نمبر",
    highlightCnic: "شناختی کارڈ نمبر",
    noteDontConfuseDate: "اہم نوٹ: رجسٹریشن کی تاریخ سمارٹ کارڈ کے اوپر بائیں جانب 'Date of Reg.' کے خانے میں ہوتی ہے۔ اسے کارڈ کے درمیان میں درج ماڈل سال (Year of Mfg.) یا دائیں جانب ٹوکن ٹیکس سے نہ الجھائیں۔",

    privacyGuaranteeTitle: "100% پرائیویسی اور رازداری کی گارنٹی",
    privacyGuaranteeDesc: "آپ کا شناختی کارڈ اور گاڑی کا ڈیٹا صرف آپ کے موبائل/براؤزر میں پراسیس ہوتا ہے۔ ہمارا سرور آپ کی کوئی ذاتی معلومات محفوظ نہیں کرتا۔",
    zeroStorageBadge: "کوئی ڈیٹا محفوظ نہیں کیا جاتا • محفوظ اور نجی",
    officialSourcesTitle: "سرکاری ذرائع اور تصدیق شدہ روابط"
  }
};
