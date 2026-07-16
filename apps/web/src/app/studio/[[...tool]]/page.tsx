import { ExternalLinkIcon, Settings2Icon } from "lucide-react";
import Link from "next/link";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";
import { SanityStudio } from "@/components/studio/sanity-studio";
import { isSanityConfigured } from "@/sanity/env";

export const metadata = {
  ...studioMetadata,
  title: "Studio | Julietta",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport = studioViewport;
export const dynamic = "force-static";

export default function StudioPage() {
  if (isSanityConfigured) {
    return <SanityStudio />;
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/30 px-5 py-16">
      <div className="w-full max-w-lg rounded-xl border border-border bg-background p-8 text-center sm:p-12">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/25">
          <Settings2Icon className="size-5" />
        </div>
        <h1 className="mt-6 font-serif text-4xl">Conecte o Sanity</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Preencha as variáveis de ambiente indicadas em{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">.env.example</code>{" "}
          para ativar o Studio e as publicações.
        </p>
        <a
          href="https://www.sanity.io/manage"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-7 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Abrir o Sanity
          <ExternalLinkIcon className="size-4" />
        </a>
        <div className="mt-7 border-t border-border pt-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  );
}
