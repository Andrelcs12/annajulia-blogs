import { PublicationList } from "@/components/publication/publication-list";
import { getPublicationsByCategory } from "@/sanity/data";
import type { PublicationCategory } from "@/types/publication";

export async function CategoryPage({
  category,
  eyebrow,
  title,
  description,
}: {
  category: PublicationCategory;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const publications = await getPublicationsByCategory(category);

  return (
    <>
      <header className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-6xl leading-none tracking-[-0.05em] sm:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <PublicationList publications={publications} />
      </section>
    </>
  );
}
