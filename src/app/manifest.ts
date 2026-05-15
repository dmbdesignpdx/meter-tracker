import type { MetadataRoute } from "next";

import { AppData } from "@/data/meta";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AppData.name,
    short_name: AppData.shortName,
    description: AppData.description,
    start_url: AppData.start,
    display: "standalone",
    orientation: "portrait",
    background_color: AppData.bkgColor,
    theme_color: AppData.themeColor,
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
