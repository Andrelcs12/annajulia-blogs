export const siteConfig = {
  name: "Julietta",
  fullName: "Julietta",
  handle: "@cartasporjulietta",
  instagramUrl: "https://www.instagram.com/cartasporjulietta/",
  description:
    "Cartas, poemas e sentimentos que nunca foram enviados, escritos sob o pseudônimo Julietta.",
  editorialImage: "/images/julietta-editorial-placeholder.png",
  personaVisual: {
    mode: "symbolic",
    alt: "Composição simbólica com carta, flor e selo em tons de vinho",
  },
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  navigation: [
    { href: "/", label: "Início" },
    { href: "/poemas", label: "Poemas" },
    { href: "/textos", label: "Textos" },
    { href: "/reflexoes", label: "Reflexões" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ],
} as const;
