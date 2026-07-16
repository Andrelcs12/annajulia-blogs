"use client";

import { MenuIcon } from "lucide-react";
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
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="border-b border-border pb-6 pr-10">
          <SheetTitle>Anna</SheetTitle>
          <SheetDescription>Poemas, textos e reflexões.</SheetDescription>
        </div>
        <nav aria-label="Navegação móvel" className="flex flex-col py-4">
          {siteConfig.navigation.map((item, index) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-4 border-b border-border/70 py-4 text-lg text-foreground transition-colors hover:text-primary"
              >
                <span className="w-6 text-xs tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl">{item.label}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
