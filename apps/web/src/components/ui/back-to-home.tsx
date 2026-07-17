import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = { label: string; href?: string };

type BackToHomeProps = { page?: string; items?: BreadcrumbItem[] };

function BackToHome({ page, items }: BackToHomeProps) {
  const breadcrumbItems = items ?? [
    { label: "Início", href: "/" },
    { label: page ?? "" },
  ];
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs tracking-[0.01em] text-muted-foreground"
    >
      <ol className="flex items-center gap-1.5 sm:gap-2">
        {breadcrumbItems.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-1.5 sm:gap-2"
          >
            {index > 0 ? (
              <ChevronRight
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={1.5}
              />
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { BackToHome };
