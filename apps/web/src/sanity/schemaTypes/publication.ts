import { defineArrayMember, defineField, defineType } from "sanity";

export const publicationType = defineType({
  name: "publication",
  title: "Publicação",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Poema", value: "poema" },
          { title: "Texto", value: "texto" },
          { title: "Reflexão", value: "reflexao" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      description:
        "Uma apresentação curta para os cards e resultados de busca.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Parágrafo", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Citação", value: "blockquote" },
          ],
          lists: [
            { title: "Lista com marcadores", value: "bullet" },
            { title: "Lista numerada", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "Endereço",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  }),
                  defineField({
                    name: "openInNewTab",
                    title: "Abrir em uma nova aba",
                    type: "boolean",
                    initialValue: true,
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          description:
            "Descreva a imagem para leitores de tela e mecanismos de busca.",
          type: "string",
          validation: (rule) => rule.max(160),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Data",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      description: "A publicação em destaque aparece primeiro na Home.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "Título para SEO",
      type: "string",
      validation: (rule) => rule.max(60).warning("Prefira até 60 caracteres."),
    }),
    defineField({
      name: "seoDescription",
      title: "Descrição para SEO",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning("Prefira até 160 caracteres."),
    }),
  ],
  orderings: [
    {
      title: "Mais recentes",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
      publishedAt: "publishedAt",
    },
    prepare({ title, category, media, publishedAt }) {
      const labels: Record<string, string> = {
        poema: "Poema",
        texto: "Texto",
        reflexao: "Reflexão",
      };
      const date = publishedAt
        ? new Intl.DateTimeFormat("pt-BR").format(new Date(publishedAt))
        : "Sem data";

      return {
        title,
        subtitle: `${labels[category] ?? "Publicação"} · ${date}`,
        media,
      };
    },
  },
});
