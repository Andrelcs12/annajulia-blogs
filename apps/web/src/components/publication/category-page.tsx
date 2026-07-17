import { Pagination } from "@/components/publication/pagination";
import { PublicationList } from "@/components/publication/publication-list";
import { getPublicationPage } from "@/sanity/data";
import type { PublicationCategory } from "@/types/publication";
import { BackToHome } from "../ui/back-to-home";

export async function CategoryPage({
  category,
  eyebrow,
  title,
  description,
  page,
  order,
}: {
  category: PublicationCategory;
  eyebrow: string;
  title: string;
  description: string;
  page: number;
  order: "asc" | "desc";
}) {
  const result = await getPublicationPage({ category, page, order });

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
        <div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {result.total === 1
              ? "1 publicação"
              : `${result.total} publicações`}
          </p>
          <form className="flex items-center gap-2" method="get">
            <label
              htmlFor={`${category}-order`}
              className="text-xs text-muted-foreground"
            >
              Ordenar por
            </label>
            <select
              id={`${category}-order`}
              name="ordem"
              defaultValue={order}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Ordenar publicações"
            >
              <option value="desc">Mais recentes</option>
              <option value="asc">Mais antigos</option>
            </select>
            <button type="submit" className="sr-only">
              Aplicar ordenação
            </button>
          </form>
        </div>
        <PublicationList publications={result.publications} />
        <Pagination
          page={result.page}
          total={result.total}
          pageSize={result.pageSize}
          pathname={
            category === "poema"
              ? "/poemas"
              : category === "texto"
                ? "/textos"
                : "/reflexoes"
          }
          searchParams={{ ordem: order === "asc" ? "asc" : undefined }}
        />
      </section>
    </>
  );
}
