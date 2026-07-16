"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Julietta — Cartas e escritos",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      title: "Conteúdo",
    }),
    visionTool({
      defaultApiVersion: apiVersion,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
