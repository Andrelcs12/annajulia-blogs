import type { Metadata } from "next";
import { CategoryPage } from "@/components/publication/category-page";

export const metadata: Metadata = {
  title: "Poemas",
  description: "Poemas de Anna: versos para ler com calma e sentir sem pressa.",
};

export const revalidate = 60;

export default function PoemsPage() {
  return (
    <CategoryPage
      category="poema"
      eyebrow="Versos"
      title="Poemas"
      description="Palavras com espaço para respirar, sentir e permanecer. Uma coleção de versos escritos por Anna."
    />
  );
}
