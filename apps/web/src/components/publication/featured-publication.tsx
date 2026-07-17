import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { getSanityImageUrl } from "@/sanity/image";
import type { PublicationPreview } from "@/types/publication";
import { CategoryLabel } from "./category-label";

export function FeaturedPublication({
  publication,
}: {
  publication: PublicationPreview;
}) {
  const imageSrc = publication.image
    ? getSanityImageUrl(publication.image, {
        width: 1200,
        height: 900,
        quality: 85,
      })
    : siteConfig.editorialImage;

  return (
    <section
      id="destaque"
      className="scroll-mt-24 border-y border-border bg-muted/20"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
          <Image
            src={imageSrc}
            alt={
              publication.image?.alt ??
              "Caderno aberto, cartas e flores secas em composição editorial"
            }
            fill
            priority
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.015]"
          />
        </div>
        <div className="flex items-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Leitura em destaque
            </p>
            <CategoryLabel category={publication.category} />
            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl">
              {publication.title}
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              {publication.excerpt}
            </p>
            <Button asChild size="lg" className="mt-9">
              <Link href={`/publicacoes/${publication.slug}`}>
                Começar a leitura
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
