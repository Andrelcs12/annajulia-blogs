import type { Metadata } from "next";
import { Pagination } from "@/components/publication/pagination";
import { PublicationList } from "@/components/publication/publication-list";
import { PublicationSearch } from "@/components/publication/publication-search";
import { searchPublications } from "@/sanity/data";

export const metadata: Metadata = {
  title: "Buscar publicações",
  description: "Encontre poemas, textos e reflexões publicados por Julietta.",
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const result = query ? await searchPublications({ query, page }) : null;

  return (
    <section className="mx-auto min-h-[65svh] max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
        Arquivo
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.045em] sm:text-7xl">
        Buscar publicações
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
        Encontre poemas, textos e reflexões por título, resumo ou categoria.
      </p>
      <div className="mt-9">
        <PublicationSearch query={query} />
      </div>
      {result ? (
        <div className="mt-12">
          <p className="mb-6 text-sm text-muted-foreground">
            {result.total === 1
              ? `1 publicação encontrada para “${query}”`
              : `${result.total} publicações encontradas para “${query}”`}
          </p>
          <PublicationList
            publications={result.publications}
            emptyTitle="Nenhuma escrita encontrada para este termo."
            emptyDescription="Tente outra palavra ou veja todas as categorias."
          />
          <Pagination
            page={result.page}
            total={result.total}
            pageSize={result.pageSize}
            pathname="/buscar"
            searchParams={{ q: query }}
          />
        </div>
      ) : (
        <p className="mt-12 border-y border-border py-12 text-center font-serif text-2xl">
          Comece com uma palavra que queira encontrar.
        </p>
      )}
    </section>
  );
}
