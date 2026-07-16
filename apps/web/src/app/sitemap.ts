import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getPublicationSitemapEntries } from "@/sanity/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publications = await getPublicationSitemapEntries();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/poemas`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/textos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/reflexoes`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/sobre`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contato`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [
    ...staticRoutes,
    ...publications.map((publication) => ({
      url: `${siteConfig.url}/publicacoes/${publication.slug}`,
      lastModified: publication.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
