import type { PublicationPreview } from "@/types/publication";
import { PublicationCard } from "./publication-card";

export function PublicationList({
  publications,
  emptyTitle,
  emptyDescription,
}: {
  publications: PublicationPreview[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  if (publications.length === 0) {
    return (
      <div className="border-y border-border py-16 text-center">
        <p className="font-serif text-2xl text-foreground">
          {emptyTitle ?? "Novas cartas ainda estão sendo escritas."}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {emptyDescription ?? "Volte em breve ou explore outra categoria."}
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
