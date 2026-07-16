import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  categoryLabels,
  categoryRoutes,
  type PublicationCategory,
} from "@/types/publication";

export function CategoryLabel({
  category,
  className,
}: {
  category: PublicationCategory;
  className?: string;
}) {
  return (
    <Link
      href={categoryRoutes[category]}
      className={cn(
        "inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {categoryLabels[category]}
    </Link>
  );
}
