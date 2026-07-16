import { AtSignIcon, BookOpenIcon, CameraIcon, QuoteIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Anna, sua relação com a escrita e as histórias por trás de seus poemas, textos e reflexões.",
};

export default function AboutPage() {
  return (
    <article>
      <header className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            A autora
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.95] tracking-[-0.05em] sm:text-8xl">
            Sobre Anna
          </h1>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] border border-border bg-muted">
            <Image
              src="/images/anna-editorial-placeholder.png"
              alt="Caderno aberto e flores secas em composição editorial provisória"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
            Imagem conceitual provisória — substitua pela foto oficial de Anna.
          </p>
        </div>

        <div className="md:pt-10">
          <QuoteIcon className="size-8 text-primary" strokeWidth={1.25} />
          <p className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            “Escrever é dar um lugar para aquilo que ainda não encontrou nome.”
          </p>
          <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            Frase provisória
          </span>

          <div className="mt-12 space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Este é um espaço reservado para a biografia de Anna. Aqui ela
              poderá contar quando começou a escrever, quais temas atravessam
              seu trabalho e de onde nasce sua relação com as palavras.
            </p>
            <p>
              O texto também pode apresentar publicações, projetos, influências
              e tudo o que ajude o leitor a conhecer a pessoa por trás dos
              poemas, textos e reflexões.
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Encontre Anna
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: CameraIcon, label: "Instagram" },
                { icon: AtSignIcon, label: "E-mail" },
                { icon: BookOpenIcon, label: "Outros projetos" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground"
                >
                  <Icon className="size-4 text-primary-foreground" />
                  <span>{label}</span>
                  <span className="ml-auto text-[0.6rem] uppercase tracking-wider">
                    adicionar
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
