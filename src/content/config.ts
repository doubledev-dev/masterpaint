import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    location: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    designDetails: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { 
  'projects': projectCollection,
};
