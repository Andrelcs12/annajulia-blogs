import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

const components = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const openInNewTab = value?.openInNewTab !== false;
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal && openInNewTab ? "_blank" : undefined}
          rel={isExternal && openInNewTab ? "noreferrer noopener" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  hardBreak: () => <br />,
  unknownType: () => null,
  unknownMark: ({ children }) => <>{children}</>,
} satisfies PortableTextComponents;

export function PublicationPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return (
    <div className="publication-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
