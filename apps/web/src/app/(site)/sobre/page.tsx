import { AtSignIcon, BookOpenIcon, CameraIcon, QuoteIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Anna Julia, sua relação com a escrita e as histórias por trás de seus poemas, textos e reflexões.",
};

const socialLinks = [
  {
    icon: CameraIcon,
    label: "Instagram",
    href: "https://www.instagram.com/annajuliacn/",
  },
  {
    // TODO: substituir pelo e-mail real da Anna Julia
    icon: AtSignIcon,
    label: "E-mail",
    href: "mailto:contato@annajulia.com.br",
  },
  {
    // TODO: substituir pelo link real (site pessoal, outra rede etc.)
    icon: BookOpenIcon,
    label: "Outros projetos",
    href: "#",
  },
];

export default function AboutPage() {
  return (
    <article>
      <header className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-28">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.68rem]">
            A autora
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:mt-5 sm:text-8xl sm:tracking-[-0.05em]">
            Sobre Anna Julia
          </h1>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[6rem] border border-border bg-muted sm:rounded-t-[12rem]">
            <Image
              src="/site/anna/anna.png"
              alt="Caderno aberto e flores secas em composição editorial provisória"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:pt-10">
          <QuoteIcon className="size-7 text-primary sm:size-8" strokeWidth={1.25} />
          <p className="mt-5 font-serif text-3xl leading-tight tracking-[-0.02em] sm:mt-6 sm:text-5xl sm:tracking-[-0.03em]">
            &ldquo;Escrever é dar um lugar para aquilo que ainda não encontrou
            nome.&rdquo;
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground sm:mt-12 sm:space-y-6 sm:text-lg">
            <p>
              Este é um espaço reservado para a biografia de Anna Julia. Aqui
              ela poderá contar quando começou a escrever, quais temas
              atravessam seu trabalho e de onde nasce sua relação com as
              palavras.
            </p>
            <p>
              O texto também pode apresentar publicações, projetos,
              influências e tudo o que ajude o leitor a conhecer a pessoa por
              trás dos poemas, textos e reflexões.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-7 sm:mt-12 sm:pt-8">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:mb-5 sm:text-[0.68rem]">
              Encontre Anna Julia
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}