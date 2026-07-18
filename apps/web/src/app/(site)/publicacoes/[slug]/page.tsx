import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryLabel } from "@/components/publication/category-label";
import { PublicationPortableText } from "@/components/publication/portable-text";
import { ShareButtons } from "@/components/publication/share-buttons";
import { BackToHome } from "@/components/ui/back-to-home";
import { formatPublicationDate } from "@/lib/date";
import { getReadingTime } from "@/lib/reading-time";
import { siteConfig } from "@/lib/site";
import { getAdjacentPublications, getPublicationBySlug } from "@/sanity/data";
import { getSanityImageUrl } from "@/sanity/image";
import { categoryPluralLabels, categoryRoutes } from "@/types/publication";

export const revalidate = 60;

type PublicationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);

  if (!publication) {
    return {
      title: "Publicação não encontrada",
    };
  }

  const title = publication.seoTitle || publication.title;
  const description = publication.seoDescription || publication.excerpt;
  const url = `${siteConfig.url}/publicacoes/${publication.slug}`;
  const image = publication.image
    ? getSanityImageUrl(publication.image, {
        width: 1200,
        height: 630,
        quality: 88,
      })
    : `${siteConfig.url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: publication.publishedAt,
      authors: [siteConfig.fullName],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: publication.image?.alt ?? publication.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function PublicationPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  const adjacent = await getAdjacentPublications(publication);
  const readingTime = getReadingTime(publication.content);

  return (
    <article>
      <header className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <BackToHome
            items={[
              { label: "Início", href: "/" },
              {
                label: categoryPluralLabels[publication.category],
                href: categoryRoutes[publication.category],
              },
              { label: publication.title },
            ]}
          />
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CategoryLabel category={publication.category} />
            <time
              dateTime={publication.publishedAt}
              className="text-xs text-muted-foreground"
            >
              {formatPublicationDate(publication.publishedAt)}
            </time>
            <span className="text-xs text-muted-foreground">{readingTime}</span>
            {publication.isPlaceholder && (
              <span className="rounded-full border border-border px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                Conteúdo demonstrativo
              </span>
            )}
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl">
            {publication.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {publication.excerpt}
          </p>
        </div>
      </header>

      {publication.image && (
        <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
          <div
            className="relative overflow-hidden rounded-lg bg-muted"
            style={{
              aspectRatio: `${publication.image.width} / ${publication.image.height}`,
            }}
          >
            <Image
              src={getSanityImageUrl(publication.image, {
                width: 1600,
                quality: 88,
              })}
              alt={publication.image.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              placeholder={publication.image.lqip ? "blur" : "empty"}
              blurDataURL={publication.image.lqip}
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[46.875rem] px-5 py-14 sm:px-8 sm:py-20">
        <PublicationPortableText value={publication.content} />
        <aside className="mt-14 rounded-lg border border-primary/20 bg-muted/60 p-5 sm:p-6">
          <p className="font-serif text-xl text-foreground">
            Texto autoral de {siteConfig.name} —{" "}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
            >
              {siteConfig.handle}
            </a>
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Não reproduza integralmente este texto sem autorização. Ao
            compartilhar trechos, preserve a autoria e indique{" "}
            {siteConfig.handle}.
          </p>
        </aside>
        <aside className="mt-8 border-l border-primary/50 pl-5">
          <p className="font-serif text-xl">Escreva para Julietta</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Se esta leitura encontrou você, há espaço para deixar algumas
            palavras.
          </p>
          <Link
            href="/contato"
            className="mt-3 inline-flex text-sm text-primary underline decoration-primary/50 underline-offset-4 hover:text-foreground"
          >
            Enviar uma mensagem
          </Link>
        </aside>
        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Compartilhe esta leitura com alguém.
          </p>
          <ShareButtons title={publication.title} />
        </div>
        {adjacent.previous || adjacent.next ? (
          <nav
            aria-label="Navegação entre publicações"
            className="mt-14 grid gap-5 border-t border-border pt-8 sm:grid-cols-2"
          >
            {adjacent.previous ? (
              <Link
                href={`/publicacoes/${adjacent.previous.slug}`}
                className="group min-w-0"
              >
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowLeftIcon className="size-4" />
                  Publicação anterior
                </span>
                <span className="mt-2 block font-serif text-2xl leading-tight group-hover:text-primary">
                  {adjacent.previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {adjacent.next ? (
              <Link
                href={`/publicacoes/${adjacent.next.slug}`}
                className="group min-w-0 text-left sm:text-right"
              >
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  Próxima publicação
                  <ArrowRightIcon className="size-4" />
                </span>
                <span className="mt-2 block font-serif text-2xl leading-tight group-hover:text-primary">
                  {adjacent.next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </article>
  );
}
