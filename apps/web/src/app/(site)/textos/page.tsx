import type { Metadata } from "next";
import { CategoryPage } from "@/components/publication/category-page";

export const metadata: Metadata = {
  title: "Textos",
  description:
    "Textos de Julietta sobre memórias, afetos e palavras que nunca foram ditas.",
};

export const revalidate = 60;

export default async function TextsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; ordem?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const order = params.ordem === "asc" ? "asc" : "desc";
  return (
    <CategoryPage
      category="texto"
      eyebrow="Narrativas"
      title="Textos"
      description="Histórias, memórias e delicadezas encontradas no cotidiano. Textos para acompanhar uma pausa."
      page={page}
      order={order}
    />
  );
}
