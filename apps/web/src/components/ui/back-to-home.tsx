import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BackToHomeProps = {
  page: string;
};

function BackToHome({ page }: BackToHomeProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs tracking-[0.01em] text-muted-foreground"
    >
      <ol className="flex items-center gap-1.5 sm:gap-2">
        <li>
          <Link
            href="/"
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Início
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3.5" strokeWidth={1.5} />
        </li>
        <li aria-current="page" className="font-medium text-foreground">
          {page}
        </li>
      </ol>
    </nav>
  );
}

export { BackToHome };
