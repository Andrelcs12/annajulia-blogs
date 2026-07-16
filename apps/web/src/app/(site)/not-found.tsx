import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[65svh] items-center justify-center px-5 py-20 text-center">
      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Página 404
        </p>
        <h1 className="mt-5 font-serif text-6xl tracking-[-0.05em] sm:text-8xl">
          Esta página se perdeu.
        </h1>
        <p className="mx-auto mt-6 max-w-lg leading-7 text-muted-foreground">
          Talvez ela ainda esteja sendo escrita. Você pode voltar e encontrar
          outras palavras pelo caminho.
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">
            <ArrowLeftIcon className="size-4" />
            Voltar para a Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
