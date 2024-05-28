import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    designDetails: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    parity: z.number(),
  }),
});

export const collections = {
  projects: projectCollection,
};
