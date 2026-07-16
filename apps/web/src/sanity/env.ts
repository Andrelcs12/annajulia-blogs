const configuredProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const configuredDataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();

export const projectId = configuredProjectId || "placeholder";
export const dataset = configuredDataset || "production";
export const apiVersion = "2026-07-16";
export const isSanityConfigured = Boolean(
  configuredProjectId && configuredDataset,
);
