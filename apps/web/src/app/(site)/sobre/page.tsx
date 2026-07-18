import { AtSignIcon, MailIcon, PenLineIcon, QuoteIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AnonymousPortrait } from "@/components/brand/anonymous-portrait";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Julietta, o pseudônimo por trás de cartas, poemas e sentimentos que nunca foram enviados.",
};

const socialLinks = [
  {
    icon: AtSignIcon,
    label: siteConfig.handle,
    href: siteConfig.twitterUrl,
  },
  {
    icon: MailIcon,
    label: "Enviar uma mensagem",
    href: "/contato",
  },
];

export default function AboutPage() {
  return (
    <article>
      <header className="border-b border-border bg-muted/55">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-28">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.68rem]">
            O pseudônimo
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:mt-5 sm:text-8xl sm:tracking-[-0.05em]">
            Sobre Julietta
          </h1>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <AnonymousPortrait />

        <div className="md:pt-10">
          <QuoteIcon
            className="size-7 text-primary sm:size-8"
            strokeWidth={1.25}
          />
          <p className="mt-5 font-serif text-3xl leading-tight tracking-[-0.02em] sm:mt-6 sm:text-5xl sm:tracking-[-0.03em]">
            &ldquo;Todas as cartas que eu não te enviei ainda encontram um lugar
            aqui.&rdquo;
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground sm:mt-12 sm:space-y-6 sm:text-lg">
            <p>
              Julietta é o nome por trás das cartas que nunca encontraram
              destino. Um pseudônimo para sentimentos reais, palavras guardadas
              e histórias que talvez também sejam suas.
            </p>
            <p>
              A identidade de quem escreve permanece reservada para que as
              palavras ocupem o centro da página. Aqui, cada texto é um convite
              para reconhecer aquilo que nem sempre conseguimos dizer.
            </p>
          </div>

          <div className="mt-10 border-t border-border pt-7 sm:mt-12 sm:pt-8">
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:mb-5 sm:text-[0.68rem]">
              Encontre Julietta
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon
                    className="size-4 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section
        aria-label="Acesso da autora"
        className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16"
      >
        <Separator className="bg-border/70" />
        <div className="flex justify-end pt-5">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="min-h-11 px-3 text-muted-foreground hover:text-foreground"
          >
            <Link href="/studio">
              <PenLineIcon aria-hidden="true" className="size-4" />
              Área da autora
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
