import type { PortableTextBlock } from "@portabletext/react";

export function getReadingTime(content: PortableTextBlock[]) {
  const text = content
    .flatMap((block) =>
      "children" in block && Array.isArray(block.children)
        ? block.children
        : [],
    )
    .map((child) =>
      "text" in child && typeof child.text === "string" ? child.text : "",
    )
    .join(" ")
    .trim();
  const minutes = Math.max(
    1,
    Math.ceil(text.split(/\s+/).filter(Boolean).length / 180),
  );
  return `${minutes} min de leitura`;
}
