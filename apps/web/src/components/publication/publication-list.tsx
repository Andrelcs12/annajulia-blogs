import type { PublicationPreview } from "@/types/publication";
import { PublicationCard } from "./publication-card";

export function PublicationList({
  publications,
}: {
  publications: PublicationPreview[];
}) {
  if (publications.length === 0) {
    return (
      <div className="border-y border-border py-16 text-center">
        <p className="font-serif text-2xl text-foreground">
          Ainda não há publicações por aqui.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Quando Anna publicar no Sanity, os textos aparecerão automaticamente.
        </p>
      </div>
    );
  }

  return (
    <div className="border-b border-border">
      {publications.map((publication, index) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
          index={index}
        />
      ))}
    </div>
  );
}
