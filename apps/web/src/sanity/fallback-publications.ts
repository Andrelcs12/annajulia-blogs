import type { PortableTextBlock } from "@portabletext/react";
import type { Publication } from "@/types/publication";

function paragraph(key: string, text: string): PortableTextBlock {
  return {
    _key: key,
    _type: "block",
    children: [
      {
        _key: `${key}-span`,
        _type: "span",
        marks: [],
        text,
      },
    ],
    markDefs: [],
    style: "normal",
  };
}

const placeholderContent = [
  paragraph(
    "intro",
    "Este é um conteúdo demonstrativo para apresentar a experiência de leitura enquanto o projeto Sanity ainda não está conectado.",
  ),
  paragraph(
    "body",
    "Depois da configuração, as publicações criadas e publicadas por Anna no Studio substituirão automaticamente estes exemplos.",
  ),
];

export const fallbackPublications: Publication[] = [
  {
    id: "placeholder-1",
    title: "O silêncio também floresce",
    slug: "o-silencio-tambem-floresce",
    category: "poema",
    excerpt:
      "Há dias em que a delicadeza chega sem ruído e encontra lugar nas pequenas coisas.",
    content: placeholderContent,
    publishedAt: "2026-07-12T09:00:00.000Z",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "Sobre guardar instantes",
    slug: "sobre-guardar-instantes",
    category: "texto",
    excerpt:
      "Uma lembrança sobre o tempo, a presença e aquilo que escolhemos levar conosco.",
    content: placeholderContent,
    publishedAt: "2026-07-10T09:00:00.000Z",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    title: "A coragem de ir devagar",
    slug: "a-coragem-de-ir-devagar",
    category: "reflexao",
    excerpt:
      "Nem toda pausa é atraso. Às vezes, respirar é a forma mais bonita de continuar.",
    content: placeholderContent,
    publishedAt: "2026-07-08T09:00:00.000Z",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: "placeholder-4",
    title: "Casa de passarinho",
    slug: "casa-de-passarinho",
    category: "poema",
    excerpt:
      "Um poema breve sobre abrigo, vento e a vontade de voltar para dentro de si.",
    content: placeholderContent,
    publishedAt: "2026-07-05T09:00:00.000Z",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: "placeholder-5",
    title: "As coisas que permanecem",
    slug: "as-coisas-que-permanecem",
    category: "texto",
    excerpt:
      "Palavras sobre afetos discretos e gestos que ficam muito depois da despedida.",
    content: placeholderContent,
    publishedAt: "2026-07-02T09:00:00.000Z",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: "placeholder-6",
    title: "Ser inteira",
    slug: "ser-inteira",
    category: "reflexao",
    excerpt:
      "Uma reflexão sobre aceitar as próprias mudanças sem abandonar quem se é.",
    content: placeholderContent,
    publishedAt: "2026-06-28T09:00:00.000Z",
    featured: false,
    isPlaceholder: true,
  },
];
