import { AboutPreview } from "@/components/home/about-preview";
import { CategoryPreview } from "@/components/home/category-preview";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/home/section-heading";
import { FeaturedPublication } from "@/components/publication/featured-publication";
import { PublicationList } from "@/components/publication/publication-list";
import { getAllPublications } from "@/sanity/data";

export const revalidate = 60;

export default async function HomePage() {
  const publications = await getAllPublications();
  const featured =
    publications.find((publication) => publication.featured) ?? publications[0];
  const latest = publications.slice(0, 6);
  const poems = publications.filter(
    (publication) => publication.category === "poema",
  );
  const texts = publications.filter(
    (publication) => publication.category === "texto",
  );
  const reflections = publications.filter(
    (publication) => publication.category === "reflexao",
  );

  return (
    <>
      <Hero />
      {featured ? (
        <FeaturedPublication publication={featured} />
      ) : (
        <section id="destaque" className="border-y border-border py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="font-serif text-4xl">
              A primeira página está em branco.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Publique o primeiro texto no Sanity Studio para começar esta
              história.
            </p>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Novas páginas" title="Últimas publicações" />
          <PublicationList publications={latest} />
        </div>
      </section>

      <div className="border-t border-border">
        <CategoryPreview
          eyebrow="Versos"
          title="Poemas"
          description="Palavras com espaço para respirar, sentir e permanecer."
          href="/poemas"
          publications={poems}
        />
      </div>
      <div className="border-t border-border bg-muted/20">
        <CategoryPreview
          eyebrow="Narrativas"
          title="Textos"
          description="Histórias, memórias e delicadezas encontradas no cotidiano."
          href="/textos"
          publications={texts}
        />
      </div>
      <div className="border-t border-border">
        <CategoryPreview
          eyebrow="Pausas"
          title="Reflexões"
          description="Um convite para olhar de novo, por dentro e ao redor."
          href="/reflexoes"
          publications={reflections}
        />
      </div>
      <AboutPreview />
    </>
  );
}
