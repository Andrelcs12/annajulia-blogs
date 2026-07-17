import { ArrowRight } from "lucide-react";
import Link from "next/link";

type BackToHomeProps = {
  page: string;
};

function BackToHome({ page }: BackToHomeProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center mb-4 gap-2 text-sm text-muted-foreground"
    >
      <Link
        href="/"
        className="transition-colors hover:text-foreground"
      >
        Home
      </Link>

      <ArrowRight
        className="size-4"
        aria-hidden="true"
      />

      <span
        aria-current="page"
        className="text-foreground"
      >
        {page}
      </span>
    </nav>
  );
}

export { BackToHome };