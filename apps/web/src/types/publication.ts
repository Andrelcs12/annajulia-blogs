import type { PortableTextBlock } from "@portabletext/react";

export type PublicationCategory = "poema" | "texto" | "reflexao";

export type PublicationImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
  lqip?: string;
};

export type Publication = {
  id: string;
  title: string;
  slug: string;
  category: PublicationCategory;
  excerpt: string;
  content: PortableTextBlock[];
  image?: PublicationImage;
  publishedAt: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  isPlaceholder?: boolean;
};

export type PublicationPreview = Omit<Publication, "content">;

export const categoryLabels: Record<PublicationCategory, string> = {
  poema: "Poema",
  texto: "Texto",
  reflexao: "Reflexão",
};

export const categoryRoutes: Record<PublicationCategory, string> = {
  poema: "/poemas",
  texto: "/textos",
  reflexao: "/reflexoes",
};

export const categoryPluralLabels: Record<PublicationCategory, string> = {
  poema: "poemas",
  texto: "textos",
  reflexao: "reflexões",
};
