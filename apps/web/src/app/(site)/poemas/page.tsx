import type { Metadata } from "next";
import { CategoryPage } from "@/components/publication/category-page";

export const metadata: Metadata = {
  title: "Poemas",
  description:
    "Poemas de Julietta: versos para ler com calma e sentir sem pressa.",
};

export const revalidate = 60;

export default async function PoemsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; ordem?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const order = params.ordem === "asc" ? "asc" : "desc";
  return (
    <CategoryPage
      category="poema"
      eyebrow="Versos"
      title="Poemas"
      description="Palavras com espaço para respirar, sentir e permanecer. Uma coleção de versos escritos por Julietta."
      page={page}
      order={order}
    />
  );
}
