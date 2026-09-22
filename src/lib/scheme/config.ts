export interface SchemeConfig {
  version: string;
  smsNumber: string;
  registrationKeyword: string;
  tokenKeyword: string;
  lastVerified: string;
  lastVerifiedUrdu: string;
  shortcodeCarrierNotes: string;
  officialSources: {
    title: string;
    titleUrdu: string;
    url: string;
    organization: string;
  }[];
  provinces: {
    code: string;
    name: string;
    nameUrdu: string;
    plateFormatHint: string;
    samplePlate: string;
  }[];
  vehicleTypes: {
    id: string;
    name: string;
    nameUrdu: string;
    description: string;
    descriptionUrdu: string;
    eligible: boolean;
  }[];
  eligibilityCriteria: {
    monthlyIncomeLimitPKR: number;
    engineCapacities: string[];
    allowedVehicles: string[];
  };
}

export const SCHEME_CONFIG: SchemeConfig = {
  version: "2026.09",
  smsNumber: "9771",
  registrationKeyword: "REG",
  tokenKeyword: "TOKEN",
  lastVerified: "22 September 2026",
  lastVerifiedUrdu: "22 ستمبر 2026",
  shortcodeCarrierNotes: "Standard network SMS charges may apply (usually Rs. 0.10 to Rs. 1.00 + tax depending on your cellular network: Jazz, Telenor, Zong, Ufone, or SCOM).",
  officialSources: [
    {
      title: "Government of Pakistan Official Portal",
      titleUrdu: "حکومت پاکستان کا سرکاری پورٹل",
      url: "https://pakistan.gov.pk",
      organization: "Government of Pakistan"
    },
    {
      title: "National Database & Registration Authority (NADRA)",
      titleUrdu: "نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی (نادرا)",
      url: "https://www.nadra.gov.pk",
      organization: "NADRA"
    },
    {
      title: "Excise, Taxation & Narcotics Control Department (Provincial Portals)",
      titleUrdu: "محکمہ ایکسائز اینڈ ٹیکسیشن (صوبائی پورٹلز)",
      url: "https://excise.punjab.gov.pk",
      organization: "Provincial Excise Departments"
    }
  ],
  provinces: [
    {
      code: "PUNJAB",
      name: "Punjab",
      nameUrdu: "پنجاب",
      plateFormatHint: "e.g. LEA-12-3456 or LE-19-1234 or LER-4567",
      samplePlate: "LEA-20-4521"
    },
    {
      code: "SINDH",
      name: "Sindh",
      nameUrdu: "سندھ",
      plateFormatHint: "e.g. KHI-1234 or KBL-2021-9876",
      samplePlate: "KBL-19-3482"
    },
    {
      code: "KPK",
      name: "Khyber Pakhtunkhwa (KPK)",
      nameUrdu: "خیبر پختونخوا",
      plateFormatHint: "e.g. PES-1234 or PR-2020-5678",
      samplePlate: "PR-21-9812"
    },
    {
      code: "BALOCHISTAN",
      name: "Balochistan",
      nameUrdu: "بلوچستان",
      plateFormatHint: "e.g. QTA-1234 or BL-2019-1122",
      samplePlate: "QTA-20-6543"
    },
    {
      code: "ISLAMABAD",
      name: "Islamabad Capital Territory (ICT)",
      nameUrdu: "اسلام آباد",
      plateFormatHint: "e.g. ICT-123 or IDL-4567",
      samplePlate: "IDL-20-8899"
    },
    {
      code: "AJK",
      name: "Azad Jammu & Kashmir (AJK)",
      nameUrdu: "آزاد جموں و کشمیر",
      plateFormatHint: "e.g. MD-1234 or AJK-5678",
      samplePlate: "MD-21-3344"
    },
    {
      code: "GB",
      name: "Gilgit-Baltistan (GB)",
      nameUrdu: "گلگت بلتستان",
      plateFormatHint: "e.g. GLT-1234 or GB-5678",
      samplePlate: "GLT-20-1122"
    }
  ],
  vehicleTypes: [
    {
      id: "motorcycle",
      name: "Motorcycle / Scooter (Up to 125cc)",
      nameUrdu: "موٹر سائیکل / اسکوٹر (125 سی سی تک)",
      description: "Eligible for standard monthly petrol relief quota.",
      descriptionUrdu: "ماہانہ ریلیف کوٹہ کے لیے مکمل اہل۔",
      eligible: true
    },
    {
      id: "rickshaw",
      name: "Auto Rickshaw / Qingqi / 3-Wheeler",
      nameUrdu: "آٹو رکشہ / چنگ چی (تھری وہیلر)",
      description: "Eligible under targeted transport commercial relief.",
      descriptionUrdu: "رکشہ مالکان و ڈرائیورز کے لیے ریلیف۔",
      eligible: true
    },
    {
      id: "small_car",
      name: "Small Family Car (Up to 800cc - Mehran / Alto / Cultus)",
      nameUrdu: "چھوٹی فیملی کار (800 سی سی تک)",
      description: "Subject to verified household income threshold.",
      descriptionUrdu: "مخصوص آمدنی کی حد کے مطابق مشروط اہل۔",
      eligible: true
    },
    {
      id: "commercial_large",
      name: "Commercial Heavy Vehicle / Luxury Car (> 1000cc)",
      nameUrdu: "بڑی گاڑی یا لگژری کار (1000 سی سی سے زائد)",
      description: "Not eligible under small vehicle relief scheme.",
      descriptionUrdu: "اس سکیم کے تحت اہل نہیں ہیں۔",
      eligible: false
    }
  ],
  eligibilityCriteria: {
    monthlyIncomeLimitPKR: 50000,
    engineCapacities: ["Up to 125cc (2-wheelers)", "Up to 800cc (4-wheelers)"],
    allowedVehicles: ["Motorcycles", "Scooters", "Auto Rickshaws", "Small Economy Cars (Registered in applicant's name or valid familial linkage)"]
  }
};

export function constructSmsBody(
  cnic: string,
  vehicleNo: string,
  province: string,
  regDateDDMMYYYY: string
): string {
  // Clean inputs
  const cleanCnic = cnic.replace(/\D/g, "");
  // Vehicle plate without special punctuation, uppercase
  const cleanVehicle = vehicleNo.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  const cleanProv = (province || "PUNJAB").trim().toUpperCase();
  const cleanDate = regDateDDMMYYYY.replace(/\D/g, ""); // strictly 8 digits DDMMYYYY

  // Official Format: REG <CNIC> <VEHICLE> <PROVINCE> <DDMMYYYY>
  // Example: REG 3520112345671 LEA204521 PUNJAB 18102019
  return `${SCHEME_CONFIG.registrationKeyword} ${cleanCnic} ${cleanVehicle} ${cleanProv} ${cleanDate}`;
}

export function getSmsUri(body: string): string {
  return `sms:${SCHEME_CONFIG.smsNumber}?body=${encodeURIComponent(body)}`;
}

