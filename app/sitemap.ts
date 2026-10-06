import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://augovia.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/imprint`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
  ];
}
