import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Escreva para Julietta",
  description:
    "Envie uma mensagem privada para Julietta sobre cartas, poemas e sentimentos.",
  alternates: {
    canonical: `${siteConfig.url}/contato`,
  },
  openGraph: {
    title: "Escreva para Julietta",
    description:
      "Envie uma mensagem privada para Julietta sobre cartas, poemas e sentimentos.",
    url: `${siteConfig.url}/contato`,
  },
  twitter: {
    title: "Escreva para Julietta",
    description:
      "Envie uma mensagem privada para Julietta sobre cartas, poemas e sentimentos.",
  },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-20 size-72 rounded-full bg-secondary/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Contato
        </p>
        <h1 className="mt-5 font-serif text-5xl font-medium tracking-[-0.02em] text-foreground sm:text-6xl">
          Escreva para Julietta
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Alguma escrita tocou você ou existe algo que gostaria de compartilhar?
          Envie uma mensagem para Julietta. A identidade por trás do pseudônimo
          permanecerá reservada.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl rounded-lg border border-border/70 bg-background/82 p-5 shadow-[0_24px_80px_rgba(91,24,39,0.12)] backdrop-blur sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
