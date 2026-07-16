import { AtSignIcon, FeatherIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-muted/20 sm:mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_auto] lg:px-12">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-serif text-2xl tracking-[-0.03em] transition-colors hover:text-primary sm:text-3xl"
          >
            <FeatherIcon
              className="size-4.5 text-primary sm:size-5"
              strokeWidth={1.4}
            />
            {siteConfig.name}
          </Link>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground md:mx-0">
            Cartas, poemas e sentimentos que nunca foram enviados.
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <AtSignIcon className="size-4" strokeWidth={1.5} />
            {siteConfig.handle}
          </a>
        </div>

        <nav aria-label="Navegação do rodapé" className="mx-auto md:mx-0">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-sm text-muted-foreground sm:grid-cols-3 md:text-right">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <p>
            © {new Date().getFullYear()} Julietta. Todos os direitos reservados.
          </p>
          <p>Textos autorais publicados sob o pseudônimo Julietta.</p>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto max-w-7xl px-5 py-4 text-center text-[0.7rem] text-muted-foreground/80 sm:px-8 sm:text-right lg:px-12">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/andrelucas___/"
              className="underline decoration-primary/60 underline-offset-2 transition-colors hover:text-foreground"
            >
              André Lucas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
