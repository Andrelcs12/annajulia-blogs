import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { formatPublicationDate } from "@/lib/date";
import type { PublicationPreview } from "@/types/publication";
import { CategoryLabel } from "./category-label";

export function PublicationCard({
  publication,
  index,
}: {
  publication: PublicationPreview;
  index?: number;
}) {
  return (
    <article className="group relative border-t border-border py-8 sm:py-10">
      <div className="flex gap-5 sm:gap-8">
        {typeof index === "number" && (
          <span className="mt-1 hidden w-8 shrink-0 text-xs tabular-nums text-muted-foreground/70 sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <CategoryLabel category={publication.category} />
            <time
              dateTime={publication.publishedAt}
              className="text-xs text-muted-foreground"
            >
              {formatPublicationDate(publication.publishedAt)}
            </time>
            {publication.isPlaceholder && (
              <span className="text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                Exemplo
              </span>
            )}
          </div>
          <Link
            href={`/publicacoes/${publication.slug}`}
            className="mt-4 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <h3 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-foreground transition-colors group-hover:text-primary sm:text-4xl">
              {publication.title}
            </h3>
          </Link>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {publication.excerpt}
          </p>
        </div>
        <Link
          href={`/publicacoes/${publication.slug}`}
          aria-label={`Ler ${publication.title}`}
          className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-foreground"
        >
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}
