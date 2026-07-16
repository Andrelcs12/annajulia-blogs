export const siteConfig = {
  name: "Anna",
  fullName: "Anna",
  description:
    "Poemas, textos e reflexões sobre o que sentimos, guardamos e nem sempre conseguimos dizer.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/poemas", label: "Poemas" },
    { href: "/textos", label: "Textos" },
    { href: "/reflexoes", label: "Reflexões" },
    { href: "/sobre", label: "Sobre" },
  ],
} as const;
