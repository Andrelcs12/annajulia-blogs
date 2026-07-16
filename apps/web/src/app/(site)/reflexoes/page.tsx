import type { Metadata } from "next";
import { CategoryPage } from "@/components/publication/category-page";

export const metadata: Metadata = {
  title: "Reflexões",
  description:
    "Reflexões de Julietta: convites para olhar de novo, por dentro e ao redor.",
};

export const revalidate = 60;

export default function ReflectionsPage() {
  return (
    <CategoryPage
      category="reflexao"
      eyebrow="Pausas"
      title="Reflexões"
      description="Um convite para olhar de novo, por dentro e ao redor. Ideias que pedem alguns minutos de silêncio."
    />
  );
}
