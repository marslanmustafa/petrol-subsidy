import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vehicle-petrol-subsidy.vercel.app";
  const now = new Date();

  const routes = [
    "",
    "/register",
    "/how-it-works",
    "/eligibility",
    "/registration-guide",
    "/cnic-guide",
    "/vehicle-registration-guide",
    "/registration-date-guide",
    "/sms-guide",
    "/faq",
    "/help",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/register" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/register" || route === "/registration-date-guide" ? 0.9 : 0.7,
  }));
}
