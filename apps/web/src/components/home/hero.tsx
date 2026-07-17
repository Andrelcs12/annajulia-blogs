import { ArrowDownIcon, AtSignIcon } from "lucide-react";
import Link from "next/link";
import { BotanicalDecoration } from "@/components/brand/botanical-decoration";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { AnimatedName } from "./animated-name";

const manifesto = [
  "Todas as cartas que eu não te enviei;",
  "Todas as palavras que eu não te falei;",
  "Todos os pensamentos que eu não te contei;",
  "Todas as lágrimas que eu derramei.",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-24 size-72 rounded-full bg-muted/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-24 size-80 rounded-full bg-muted/70 blur-3xl"
      />
      <BotanicalDecoration
        className="absolute -left-24 top-20 z-0 hidden h-[32rem] w-52 opacity-60 md:block lg:-left-14"
        parallax
        variant="rose"
      />
      <BotanicalDecoration
        className="absolute -right-24 bottom-14 z-0 hidden h-80 w-40 opacity-45 md:block lg:-right-10"
        delay={0.1}
        parallax
        variant="sprig"
      />
      <BotanicalDecoration
        className="absolute -right-8 top-7 z-0 h-36 w-24 opacity-35 md:hidden"
        variant="corner"
      />
      <div className="relative z-10">
        <AnimatedName />
      </div>
      <div className="relative z-10 mt-8 max-w-3xl text-center sm:mt-12">
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/70 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/50 hover:bg-accent"
        >
          <AtSignIcon className="size-4" strokeWidth={1.5} />
          {siteConfig.handle}
        </a>
        <div className="mt-7 font-serif text-xl leading-relaxed tracking-[-0.015em] text-foreground sm:text-3xl sm:leading-relaxed">
          {manifesto.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/textos">Ler as cartas</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contato">Escrever para Julietta</Link>
          </Button>
        </div>
      </div>
      <a
        href="#destaque"
        aria-label="Ir para a publicação em destaque"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full p-3 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <ArrowDownIcon className="size-5 animate-[soft-bounce_2.4s_ease-in-out_infinite]" />
      </a>
    </section>
  );
}
