import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="border-y border-border bg-secondary/35 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[0.86fr_1.14fr] md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[12rem] border border-border bg-background">
          <Image
            src="/images/anna-editorial-placeholder.png"
            alt="Caderno aberto e flores secas em composição editorial provisória"
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover"
          />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background/85 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-sm">
            Imagem provisória
          </span>
        </div>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Sobre a autora
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl">
            Anna escreve para encontrar delicadeza no cotidiano.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Este texto é provisório. Aqui poderá entrar uma apresentação breve
            sobre Anna, sua relação com a escrita e o que inspira seus poemas,
            textos e reflexões.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-9">
            <Link href="/sobre">
              Conhecer Anna
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
