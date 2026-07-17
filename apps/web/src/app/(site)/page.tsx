import { BotanicalDecoration } from "@/components/brand/botanical-decoration";
import { AboutPreview } from "@/components/home/about-preview";
import { CategoryPreview } from "@/components/home/category-preview";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/home/section-heading";
import { FeaturedPublication } from "@/components/publication/featured-publication";
import { PublicationList } from "@/components/publication/publication-list";
import { getHomePublications } from "@/sanity/data";

export const revalidate = 60;

export default async function HomePage() {
  const { featured, latest, poems, texts, reflections } =
    await getHomePublications();

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

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-48 md:block lg:w-56"
        >
          <div className="sticky top-28">
            <BotanicalDecoration
              className="-ml-28 h-[27rem] w-48 opacity-45 lg:-ml-16"
              delay={0.05}
              parallax
              variant="sprig"
            />
          </div>
        </div>
        <BotanicalDecoration
          className="absolute right-2 top-3 z-0 h-24 w-24 opacity-25 md:hidden"
          variant="corner"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Novas páginas" title="Últimas publicações" />
          <PublicationList publications={latest} />
          {latest.length > 0 ? (
            <a
              href="/buscar"
              className="mt-7 inline-flex text-sm text-muted-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-foreground"
            >
              Explorar todas as publicações
            </a>
          ) : null}
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
