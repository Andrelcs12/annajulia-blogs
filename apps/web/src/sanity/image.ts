import type { PublicationImage } from "@/types/publication";

type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

export function getSanityImageUrl(
  image: PublicationImage,
  options: ImageOptions = {},
) {
  const url = new URL(image.url);

  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");

  if (options.width) {
    url.searchParams.set("w", options.width.toString());
  }

  if (options.height) {
    url.searchParams.set("h", options.height.toString());
  }

  if (options.quality) {
    url.searchParams.set("q", options.quality.toString());
  }

  return url.toString();
}
