"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnonymousPortrait } from "@/components/brand/anonymous-portrait";
import { BotanicalDecoration } from "@/components/brand/botanical-decoration";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-border bg-muted/45 py-16 sm:py-24 md:py-28"
    >
      <BotanicalDecoration
        className="absolute -right-24 top-1/2 z-0 hidden h-[28rem] w-52 -translate-y-1/2 opacity-45 md:block"
        delay={0.1}
        parallax
        variant="rose"
      />
      <BotanicalDecoration
        className="absolute -left-8 bottom-3 z-0 h-28 w-28 opacity-25 md:hidden"
        variant="sprig"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 sm:gap-12 sm:px-8 md:grid-cols-[0.86fr_1.14fr] md:gap-16">
        <div
          className={`mx-auto w-full max-w-xs transition-all duration-1000 ease-out sm:max-w-md ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <AnonymousPortrait />
        </div>

        <div
          className={`text-center transition-all delay-150 duration-1000 ease-out md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.68rem]">
            Sobre a autora
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:mt-5 sm:text-5xl sm:tracking-[-0.04em] md:text-6xl">
            Julietta escreve as cartas que nunca encontraram destino.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:mt-7 sm:text-lg md:mx-0">
            Um pseudônimo para sentimentos reais, palavras guardadas e histórias
            que talvez também sejam suas — sem revelar quem está por trás delas.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-8 sm:mt-9 group"
          >
            <Link href="/sobre">
              Conhecer Julietta
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
