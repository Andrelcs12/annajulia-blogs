const publicationDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPublicationDate(date: string) {
  return publicationDateFormatter.format(new Date(date));
}
