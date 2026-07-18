"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <div className="flex gap-2 items-center">
          <Image
            src="/site/logos/image.png"
            alt="Logo Julietta"
            priority
            height={40}
            width={24}
            className="h-10 w-6 object-contain"
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
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={siteConfig.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.handle} no X (abre em nova aba)`}
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
