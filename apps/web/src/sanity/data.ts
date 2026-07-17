import { cache } from "react";
import type {
  Publication,
  PublicationCategory,
  PublicationPage,
  PublicationPreview,
} from "@/types/publication";
import { client } from "./client";
import { fallbackPublications } from "./fallback-publications";
import {
  adjacentPublicationsQuery,
  homePublicationsQuery,
  publicationBySlugQuery,
  publicationSlugsQuery,
  publicationsPageQuery,
  publicationsSearchQuery,
} from "./queries";

export const PUBLICATIONS_PER_PAGE = 12;
type PublicationOrder = "asc" | "desc";
type QueryPageResult = { publications: PublicationPreview[]; total: number };

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

function normalizePage(page: number) {
  return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
}

function toSearchTerm(query: string) {
  return `*${query.trim().replaceAll("*", "")}*`;
}

export async function getPublicationPage({
  category,
  page,
  order = "desc",
}: {
  category: PublicationCategory;
  page: number;
  order?: PublicationOrder;
}): Promise<PublicationPage> {
  const safePage = normalizePage(page);
  const start = (safePage - 1) * PUBLICATIONS_PER_PAGE;
  const end = start + PUBLICATIONS_PER_PAGE;

  if (!client) {
    const publications = fallbackPublications
      .filter((publication) => publication.category === category)
      .sort((a, b) =>
        order === "desc"
          ? b.publishedAt.localeCompare(a.publishedAt)
          : a.publishedAt.localeCompare(b.publishedAt),
      );
    return {
      publications: publications.slice(start, end),
      total: publications.length,
      page: safePage,
      pageSize: PUBLICATIONS_PER_PAGE,
    };
  }

  try {
    const result = await client.fetch<QueryPageResult>(
      publicationsPageQuery,
      { category, start, end, order },
      fetchOptions,
    );
    return { ...result, page: safePage, pageSize: PUBLICATIONS_PER_PAGE };
  } catch (error) {
    console.error(`Não foi possível paginar a categoria ${category}.`, error);
    return {
      publications: [],
      total: 0,
      page: safePage,
      pageSize: PUBLICATIONS_PER_PAGE,
    };
  }
}

export async function searchPublications({
  query,
  page,
  order = "desc",
}: {
  query: string;
  page: number;
  order?: PublicationOrder;
}): Promise<PublicationPage> {
  const safePage = normalizePage(page);
  const cleanQuery = query.trim();
  const start = (safePage - 1) * PUBLICATIONS_PER_PAGE;
  const end = start + PUBLICATIONS_PER_PAGE;
  if (!cleanQuery)
    return {
      publications: [],
      total: 0,
      page: safePage,
      pageSize: PUBLICATIONS_PER_PAGE,
    };

  if (!client) {
    const normalized = cleanQuery.toLocaleLowerCase("pt-BR");
    const publications = fallbackPublications.filter((publication) =>
      [publication.title, publication.excerpt, publication.category].some(
        (value) => value.toLocaleLowerCase("pt-BR").includes(normalized),
      ),
    );
    return {
      publications: publications.slice(start, end),
      total: publications.length,
      page: safePage,
      pageSize: PUBLICATIONS_PER_PAGE,
    };
  }

  try {
    const result = await client.fetch<QueryPageResult>(
      publicationsSearchQuery,
      { term: toSearchTerm(cleanQuery), start, end, order },
      fetchOptions,
    );
    return { ...result, page: safePage, pageSize: PUBLICATIONS_PER_PAGE };
  } catch (error) {
    console.error("Não foi possível pesquisar as publicações.", error);
    return {
      publications: [],
      total: 0,
      page: safePage,
      pageSize: PUBLICATIONS_PER_PAGE,
    };
  }
}

export async function getHomePublications() {
  if (!client) {
    const publications = fallbackPublications;
    return {
      featured:
        publications.find((publication) => publication.featured) ??
        publications[0],
      latest: publications.slice(0, 6),
      poems: publications
        .filter((publication) => publication.category === "poema")
        .slice(0, 3),
      texts: publications
        .filter((publication) => publication.category === "texto")
        .slice(0, 3),
      reflections: publications
        .filter((publication) => publication.category === "reflexao")
        .slice(0, 3),
    };
  }
  return client.fetch(homePublicationsQuery, {}, fetchOptions);
}

export async function getAdjacentPublications(publication: Publication) {
  if (!client) {
    const categoryPublications = fallbackPublications.filter(
      (item) => item.category === publication.category,
    );
    const index = categoryPublications.findIndex(
      (item) => item.slug === publication.slug,
    );
    return {
      previous: categoryPublications[index - 1] ?? null,
      next: categoryPublications[index + 1] ?? null,
    };
  }
  return client.fetch<{
    previous: PublicationPreview | null;
    next: PublicationPreview | null;
  }>(
    adjacentPublicationsQuery,
    { category: publication.category, publishedAt: publication.publishedAt },
    fetchOptions,
  );
}

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
