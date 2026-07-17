import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PublicationSearch({ query = "" }: { query?: string }) {
  return (
    <form
      action="/buscar"
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <label htmlFor="publication-search" className="sr-only">
        Pesquisar publicações
      </label>
      <div className="relative flex-1">
        <SearchIcon
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id="publication-search"
          name="q"
          defaultValue={query}
          placeholder="Buscar por título, resumo ou categoria"
          className="h-11 pl-11"
        />
      </div>
      <Button type="submit" className="h-11">
        Buscar
      </Button>
      {query ? (
        <Button asChild variant="ghost" className="h-11">
          <Link href="/buscar">
            <XIcon className="size-4" />
            Limpar
          </Link>
        </Button>
      ) : null}
    </form>
  );
}
