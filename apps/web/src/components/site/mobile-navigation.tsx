"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu"
        >
          <MenuIcon className="size-5" strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-background">
        <div className="flex items-center gap-2.5 border-b border-border/70 pb-6 pr-10">
          <Image
            src="/site/logos/image.png"
            alt="Logo Julietta"
            height={40}
            width={24}
            className="h-10 w-6 object-contain"
          />
          <div>
            <SheetTitle className="font-serif text-xl font-medium tracking-[-0.02em]">
              {siteConfig.name}
            </SheetTitle>
            <SheetDescription className="text-xs">
              Cartas, poemas e sentimentos.
            </SheetDescription>
          </div>
        </div>

        <nav aria-label="Navegação móvel" className="flex flex-1 flex-col py-2">
          {siteConfig.navigation.map((item, index) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-4 border-b border-border/50 py-4 text-foreground transition-colors hover:text-primary"
              >
                <span className="w-6 text-xs tabular-nums text-muted-foreground/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl tracking-[-0.01em]">
                  {item.label}
                </span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <a
          href={siteConfig.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${siteConfig.handle} no X (abre em nova aba)`}
          className="min-h-11 pb-2 pt-4 text-center text-base font-medium text-primary"
        >
          {siteConfig.handle}
        </a>
      </SheetContent>
    </Sheet>
  );
}
