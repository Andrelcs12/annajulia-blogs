import type { Metadata } from "next";
import { CategoryPage } from "@/components/publication/category-page";

export const metadata: Metadata = {
  title: "Textos",
  description:
    "Textos de Julietta sobre memórias, afetos e palavras que nunca foram ditas.",
};

export const revalidate = 60;

export default function TextsPage() {
  return (
    <CategoryPage
      category="texto"
      eyebrow="Narrativas"
      title="Textos"
      description="Histórias, memórias e delicadezas encontradas no cotidiano. Textos para acompanhar uma pausa."
    />
  );
}
