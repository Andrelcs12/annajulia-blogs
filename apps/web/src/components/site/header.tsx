import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Ir para a página inicial"
          className="font-serif text-lg font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-primary sm:text-2xl sm:tracking-[-0.03em]"
        >
          Anna Julia
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}