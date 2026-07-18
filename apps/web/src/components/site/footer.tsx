import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BotanicalDecoration } from "../brand/botanical-decoration";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border/70 bg-muted/20 sm:mt-24">
      {/* 2. BotanicalDecoration movido para cá como background absoluto */}
      <div className="pointer-events-none absolute inset-0 mt-24 -z-10 flex items-center justify-center md:mt-44 opacity-10 sm:opacity-40">
        <BotanicalDecoration />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16 md:grid-cols-[1fr_auto] lg:px-12">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-serif text-2xl tracking-[-0.03em] transition-colors hover:text-primary sm:text-3xl"
          >
            <Image
              src="/site/logos/image.png"
              alt="Logo Julietta"
              height={40}
              width={24}
              className="h-10 w-6 object-contain"
            />
            {siteConfig.name}
          </Link>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground md:mx-0">
            Cartas, poemas e sentimentos que nunca foram enviados.
          </p>
          <a
            href={siteConfig.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            {/* O AtSignIcon estava faltando antes de siteConfig.handle, adicionei de volta caso queira */}

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
            © {new Date().getFullYear()} Julietta. Todos os textos publicados
            neste site são de autoria da autora e não podem ser reproduzidos
            integralmente sem autorização.
          </p>
          <p>Textos autorais publicados sob o pseudônimo Julietta.</p>
        </div>
      </div>
    </footer>
  );
}
