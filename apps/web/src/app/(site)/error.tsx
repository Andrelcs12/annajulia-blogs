"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function SiteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, []);
  return (
    <section className="flex min-h-[65svh] items-center justify-center px-5 py-20 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Algo interrompeu esta leitura
        </p>
        <h1 className="mt-4 font-serif text-5xl">
          Não foi possível abrir esta página.
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">
          Tente novamente em alguns instantes.
        </p>
        <Button type="button" className="mt-8" onClick={reset}>
          Tentar novamente
        </Button>
      </div>
    </section>
  );
}
