import { defineQuery } from "next-sanity";

const publicationProjection = `{
  "_id": _id,
  "id": _id,
  title,
  "slug": slug.current,
  "category": category,
  "excerpt": excerpt,
  "content": content,
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

export const allPublicationsQuery = defineQuery(
  `*[_type == "publication" && defined(slug.current)] | order(publishedAt desc) ${publicationProjection}`,
);

export const latestPublicationsQuery = defineQuery(
  `*[_type == "publication" && defined(slug.current)] | order(publishedAt desc) [0...6] ${publicationProjection}`,
);

export const featuredPublicationQuery = defineQuery(
  `coalesce(
    *[_type == "publication" && featured == true && defined(slug.current)] | order(publishedAt desc) [0],
    *[_type == "publication" && defined(slug.current)] | order(publishedAt desc) [0]
  ) ${publicationProjection}`,
);

export const publicationsByCategoryQuery = defineQuery(
  `*[_type == "publication" && category == $category && defined(slug.current)] | order(publishedAt desc) ${publicationProjection}`,
);

export const publicationBySlugQuery = defineQuery(
  `*[_type == "publication" && slug.current == $slug][0] ${publicationProjection}`,
);

export const publicationSlugsQuery = defineQuery(
  `*[_type == "publication" && defined(slug.current)] {
    "slug": slug.current,
    "publishedAt": publishedAt
  }`,
);
