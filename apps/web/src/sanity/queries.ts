import { defineQuery } from "next-sanity";

const publicationPreviewProjection = `{
  "_id": _id,
  "id": _id,
  title,
  "slug": slug.current,
  "category": category,
  "excerpt": excerpt,
  "publishedAt": publishedAt,
  "featured": coalesce(featured, false),
  seoTitle,
  seoDescription,
  image {
    "url": asset->url,
    "alt": coalesce(alt, ^.title),
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height,
    "lqip": asset->metadata.lqip
  }
}`;

const publicationDetailProjection = `{
  ${publicationPreviewProjection.slice(1, -1)},
  "content": content
}`;

export const publicationBySlugQuery = defineQuery(
  `*[_type == "publication" && slug.current == $slug][0] ${publicationDetailProjection}`,
);

export const publicationsPageQuery = defineQuery(
  `{
    "total": count(*[_type == "publication" && category == $category && defined(slug.current)]),
    "publications": *[_type == "publication" && category == $category && defined(slug.current)] | order(select($order == "asc" => publishedAt) asc, publishedAt desc) [$start...$end] ${publicationPreviewProjection}
  }`,
);

export const publicationsSearchQuery = defineQuery(
  `{
    "total": count(*[_type == "publication" && defined(slug.current) && (title match $term || excerpt match $term || category match $term)]),
    "publications": *[_type == "publication" && defined(slug.current) && (title match $term || excerpt match $term || category match $term)] | order(select($order == "asc" => publishedAt) asc, publishedAt desc) [$start...$end] ${publicationPreviewProjection}
  }`,
);

export const homePublicationsQuery = defineQuery(
  `{
    "featured": coalesce(
      *[_type == "publication" && featured == true && defined(slug.current)] | order(publishedAt desc) [0] ${publicationPreviewProjection},
      *[_type == "publication" && defined(slug.current)] | order(publishedAt desc) [0] ${publicationPreviewProjection}
    ),
    "latest": *[_type == "publication" && defined(slug.current)] | order(publishedAt desc) [0...6] ${publicationPreviewProjection},
    "poems": *[_type == "publication" && category == "poema" && defined(slug.current)] | order(publishedAt desc) [0...3] ${publicationPreviewProjection},
    "texts": *[_type == "publication" && category == "texto" && defined(slug.current)] | order(publishedAt desc) [0...3] ${publicationPreviewProjection},
    "reflections": *[_type == "publication" && category == "reflexao" && defined(slug.current)] | order(publishedAt desc) [0...3] ${publicationPreviewProjection}
  }`,
);

export const adjacentPublicationsQuery = defineQuery(
  `{
    "previous": *[_type == "publication" && category == $category && publishedAt > $publishedAt && defined(slug.current)] | order(publishedAt asc) [0] ${publicationPreviewProjection},
    "next": *[_type == "publication" && category == $category && publishedAt < $publishedAt && defined(slug.current)] | order(publishedAt desc) [0] ${publicationPreviewProjection}
  }`,
);

export const publicationSlugsQuery = defineQuery(
  `*[_type == "publication" && defined(slug.current)] {
    "slug": slug.current,
    "publishedAt": publishedAt
  }`,
);
