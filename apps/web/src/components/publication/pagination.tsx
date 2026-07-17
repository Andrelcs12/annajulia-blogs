import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  page: number;
  total: number;
  pageSize: number;
  pathname: string;
  searchParams?: Record<string, string | undefined>;
};

function hrefForPage(
  pathname: string,
  targetPage: number,
  searchParams: Record<string, string | undefined>,
) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value) params.set(key, value);
  }
  if (targetPage > 1) params.set("page", String(targetPage));
  else params.delete("page");
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function Pagination({
  page,
  total,
  pageSize,
  pathname,
  searchParams = {},
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const visiblePages = Array.from(
    new Set(
      [1, page - 1, page, page + 1, totalPages].filter(
        (item) => item >= 1 && item <= totalPages,
      ),
    ),
  ).sort((a, b) => a - b);

  return (
    <nav
      aria-label="Paginação"
      className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-6"
    >
      <Button
        asChild
        variant="outline"
        size="sm"
        className="min-w-0"
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : undefined}
      >
        {page === 1 ? (
          <span>
            <ChevronLeftIcon className="size-4" />
            Anterior
          </span>
        ) : (
          <Link href={hrefForPage(pathname, page - 1, searchParams)}>
            <ChevronLeftIcon className="size-4" />
            Anterior
          </Link>
        )}
      </Button>
      <div className="hidden items-center gap-1 sm:flex">
        {visiblePages.map((item, index) => (
          <span key={item} className="flex items-center gap-1">
            {index > 0 && item - visiblePages[index - 1] > 1 ? (
              <span className="px-1 text-muted-foreground" aria-hidden="true">
                …
              </span>
            ) : null}
            <Button
              asChild={item !== page}
              variant={item === page ? "default" : "ghost"}
              size="icon-sm"
              aria-current={item === page ? "page" : undefined}
            >
              {item === page ? (
                <span>{item}</span>
              ) : (
                <Link href={hrefForPage(pathname, item, searchParams)}>
                  {item}
                </Link>
              )}
            </Button>
          </span>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground sm:hidden">
        Página {page} de {totalPages}
      </p>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="min-w-0"
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : undefined}
      >
        {page === totalPages ? (
          <span>
            Próxima
            <ChevronRightIcon className="size-4" />
          </span>
        ) : (
          <Link href={hrefForPage(pathname, page + 1, searchParams)}>
            Próxima
            <ChevronRightIcon className="size-4" />
          </Link>
        )}
      </Button>
    </nav>
  );
}
