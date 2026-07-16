import { ArrowDownIcon } from "lucide-react";
import { AnimatedName } from "./animated-name";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden="true"
        className="absolute -left-20 top-24 size-72 rounded-full bg-primary/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-24 size-80 rounded-full bg-secondary/55 blur-3xl"
      />
      <AnimatedName />
      <div className="relative z-10 mt-12 max-w-xl text-center sm:mt-16">
        <p className="font-serif text-2xl leading-relaxed tracking-[-0.015em] text-foreground sm:text-3xl">
          “Palavras para aquilo que nem sempre conseguimos dizer.”
        </p>
        <span className="mt-4 inline-block rounded-full border border-border bg-background/70 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Frase provisória
        </span>
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
