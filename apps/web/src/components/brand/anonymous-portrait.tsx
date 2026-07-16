import { FeatherIcon, Flower2Icon, HeartIcon, MailIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AnonymousPortrait({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={siteConfig.personaVisual.alt}
      className={cn(
        "relative isolate aspect-[4/5] overflow-hidden rounded-t-[6rem] border border-border bg-[linear-gradient(145deg,var(--background),var(--secondary))] sm:rounded-t-[12rem]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -left-12 top-16 size-48 rounded-full bg-primary/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-14 bottom-8 size-56 rounded-full bg-primary/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-sm border border-primary/20 bg-background/95 p-5 shadow-[0_28px_70px_rgba(91,24,39,0.18)] sm:p-7"
      >
        <div className="flex items-center justify-between border-b border-border pb-4 text-primary">
          <FeatherIcon className="size-5" strokeWidth={1.25} />
          <span className="font-serif text-lg italic">Julietta</span>
        </div>
        <div className="space-y-3 py-7">
          <span className="block h-px w-full bg-border" />
          <span className="block h-px w-[84%] bg-border" />
          <span className="block h-px w-[92%] bg-border" />
          <span className="block h-px w-[68%] bg-border" />
        </div>
        <div className="flex items-end justify-between">
          <MailIcon className="size-7 text-primary/65" strokeWidth={1.1} />
          <div className="flex size-11 items-center justify-center rounded-full border border-primary/35 bg-primary text-primary-foreground shadow-sm">
            <HeartIcon
              className="size-4"
              fill="currentColor"
              strokeWidth={1.2}
            />
          </div>
        </div>
      </div>

      <Flower2Icon
        aria-hidden="true"
        className="absolute bottom-8 left-7 size-20 -rotate-12 text-primary/55 sm:size-24"
        strokeWidth={0.8}
      />
    </div>
  );
}
