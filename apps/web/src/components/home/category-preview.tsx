import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { PublicationList } from "@/components/publication/publication-list";
import type { PublicationPreview } from "@/types/publication";
import { SectionHeading } from "./section-heading";

export function CategoryPreview({
  eyebrow,
  title,
  description,
  href,
  publications,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  publications: PublicationPreview[];
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} href={href} />
        <p className="-mt-4 mb-8 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
        <PublicationList publications={publications.slice(0, 3)} />
        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden"
        >
          Ver todas
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
