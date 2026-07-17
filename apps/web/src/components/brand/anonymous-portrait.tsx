import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AnonymousPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate aspect-[4/5] overflow-hidden rounded-t-[6rem] border border-border bg-[linear-gradient(145deg,var(--background),var(--muted))] sm:rounded-t-[12rem]",
        className,
      )}
    >
      <Image
        src="/site/julietta/julietta.png"
        alt={siteConfig.personaVisual.alt}
        fill
        sizes="(min-width: 768px) 420px, 340px"
        className="object-cover"
        priority
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.28)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-t-[6rem] ring-1 ring-inset ring-primary/15 sm:rounded-t-[12rem]"
      />
    </div>
  );
}
