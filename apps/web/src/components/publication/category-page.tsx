import { PublicationList } from "@/components/publication/publication-list";
import { getPublicationsByCategory } from "@/sanity/data";
import type { PublicationCategory } from "@/types/publication";
import { BackToHome } from "../ui/back-to-home";

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
      <header className="relative overflow-hidden border-b border-border/80 bg-muted/20">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 size-[28rem] rounded-full bg-primary/[0.045] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <BackToHome page={title} />
          <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary sm:mt-12 sm:text-[0.68rem]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(3.75rem,10vw,7.5rem)] leading-[0.88] tracking-[-0.055em] text-foreground">
            {title}
          </h1>
          <div aria-hidden="true" className="mt-7 h-px w-12 bg-primary/60" />
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-muted-foreground sm:text-lg sm:leading-8">
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
