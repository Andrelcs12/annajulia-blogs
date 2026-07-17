import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { MobileNavigation } from "./mobile-navigation";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <div className="flex gap-2 items-center">
          <Image
                      src="/site/logos/image.png"
                      alt={
                        
                        "Logo Julietta"
                      }
                     
                      priority
                      loading="eager"
                      height={100}
                      width={50}
                      className="object-cover transition-transform duration-700 "
                    />
          <Link
          href="/"
          aria-label="Ir para a página inicial"
          className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-primary sm:text-2xl sm:tracking-[-0.03em]"
        >
          {siteConfig.name}
        </Link>
        </div>
        

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Navegação principal">
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
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary transition-colors hover:text-foreground"
          >
            {siteConfig.handle}
          </a>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
