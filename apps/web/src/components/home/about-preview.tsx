"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
      className="overflow-hidden border-y border-border bg-secondary/35 py-16 sm:py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:gap-12 sm:px-8 md:grid-cols-[0.86fr_1.14fr] md:gap-16">
        <div
          className={`relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-t-[6rem] border border-border bg-background transition-all duration-1000 ease-out sm:max-w-md sm:rounded-t-[12rem] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/site/anna/anna.png"
            alt="Foto de Anna Julia"
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>

        <div
          className={`text-center transition-all delay-150 duration-1000 ease-out md:text-left ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.68rem]">
            Sobre a autora
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:mt-5 sm:text-5xl sm:tracking-[-0.04em] md:text-6xl">
            Anna Julia escreve para encontrar delicadeza no cotidiano.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:mt-7 sm:text-lg md:mx-0">
            Este texto é provisório. Aqui poderá entrar uma apresentação breve
            sobre Anna Julia, sua relação com a escrita e o que inspira seus
            poemas, textos e reflexões.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8 sm:mt-9 group">
            <Link href="/sobre">
              Conhecer Anna Julia
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}