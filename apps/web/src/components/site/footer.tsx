import { FeatherIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/25">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-serif text-3xl tracking-[-0.03em]"
          >
            <FeatherIcon className="size-5 text-primary" strokeWidth={1.4} />
            Anna
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            Um espaço para palavras que pedem tempo, silêncio e leitura sem
            pressa.
          </p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3 md:text-right">
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
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} Anna. Todos os direitos reservados.
          </p>
          <p>Feito para ler devagar.</p>
        </div>
      </div>
    </footer>
  );
}
