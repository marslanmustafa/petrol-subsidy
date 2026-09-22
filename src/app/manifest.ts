import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Petrol Relief SMS Assistant — 9771",
    short_name: "Petrol Relief",
    description: "Prepare and launch official 9771 petrol relief registration SMS step-by-step with verified vehicle smart card guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#052e16",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
