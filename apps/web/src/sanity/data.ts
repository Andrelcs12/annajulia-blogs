import { cache } from "react";
import type { Publication, PublicationCategory } from "@/types/publication";
import { client } from "./client";
import { fallbackPublications } from "./fallback-publications";
import {
  allPublicationsQuery,
  publicationBySlugQuery,
  publicationSlugsQuery,
  publicationsByCategoryQuery,
} from "./queries";

type PublicationSitemapEntry = {
  slug: string;
  publishedAt: string;
};

const fetchOptions = {
  next: {
    revalidate: 60,
    tags: ["publications"],
  },
};

export const getAllPublications = cache(async (): Promise<Publication[]> => {
  if (!client) {
    return fallbackPublications;
  }

  try {
    return await client.fetch<Publication[]>(
      allPublicationsQuery,
      {},
      fetchOptions,
    );
  } catch (error) {
    console.error("Não foi possível carregar as publicações do Sanity.", error);
    return [];
  }
});

export const getPublicationsByCategory = cache(
  async (category: PublicationCategory): Promise<Publication[]> => {
    if (!client) {
      return fallbackPublications.filter(
        (publication) => publication.category === category,
      );
    }

    try {
      return await client.fetch<Publication[]>(
        publicationsByCategoryQuery,
        { category },
        fetchOptions,
      );
    } catch (error) {
      console.error(
        `Não foi possível carregar a categoria ${category}.`,
        error,
      );
      return [];
    }
  },
);

export const getPublicationBySlug = cache(
  async (slug: string): Promise<Publication | null> => {
    if (!client) {
      return (
        fallbackPublications.find((publication) => publication.slug === slug) ??
        null
      );
    }

    try {
      return await client.fetch<Publication | null>(
        publicationBySlugQuery,
        { slug },
        fetchOptions,
      );
    } catch (error) {
      console.error(`Não foi possível carregar a publicação ${slug}.`, error);
      return null;
    }
  },
);

export async function getPublicationSitemapEntries(): Promise<
  PublicationSitemapEntry[]
> {
  if (!client) {
    return fallbackPublications.map(({ slug, publishedAt }) => ({
      slug,
      publishedAt,
    }));
  }

  try {
    return await client.fetch<PublicationSitemapEntry[]>(
      publicationSlugsQuery,
      {},
      fetchOptions,
    );
  } catch (error) {
    console.error("Não foi possível gerar as URLs das publicações.", error);
    return [];
  }
}
